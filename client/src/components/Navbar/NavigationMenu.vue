<template>
  <div class="sidebar">
    <div class="sidebar__user">
      <div class="sidebar__user-image">
        <img src="@/assets/user_photo.png" alt="admin_photo" />
      </div>
      <div class="sidebar__user-settings">
        <img
          width="30"
          height="30"
          src="https://img.icons8.com/color/48/000000/settings--v1.png"
          alt="settings--v1"
        />
      </div>
    </div>
    <div class="sidebar__navigation-links">
      <router-link
        data-testid="order"
        to="/orders"
        :class="{ 'sidebar__link--active': isOrderPage }"
        class="sidebar__link"
      >
        <h4>ORDER</h4>
      </router-link>
      <div class="sidebar__link">
        <h4>GROUPS</h4>
      </div>
      <router-link
        data-testid="products"
        to="/"
        :class="{ 'sidebar__link--active': isProductPage }"
        class="sidebar__link"
      >
        <h4>PRODUCTS</h4>
      </router-link>
      <div class="sidebar__link">
        <h4>USERS</h4>
      </div>

      <router-link v-if="hideLogin" to="/login" class="sidebar__link">
        <h4>Login</h4>
      </router-link>

      <router-link to="/registration" class="sidebar__link" v-if="hideReg">
        <h4>Registration</h4>
      </router-link>

      <div
        class="sidebar__link"
        @click="openLogoutWindow"
        v-if="token && isLogged"
      >
        <modal-window :showModal="showModal">
          <div class="sidebar__link-modal">
            <h2 class="sidebar__link-modal-title">
              Are you sure you want to log out ?
            </h2>
            <div class="sidebar__link-modal-btn">
              <button @click="logOut"><p>Yes</p></button>
              <button @click="closeLogoutWindow"><p>No</p></button>
            </div>
          </div>
        </modal-window>
        <h4>Logout</h4>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import { computed, ref } from "vue";
import { useAuthStore } from "@/store/authModule";
import ModalWindow from "@/UI/ModalWindow.vue";
const authStore = useAuthStore();
const router = useRouter();
const showModal = ref(false);
const isOrderPage = computed(() => router.currentRoute.value.name === "orders");
const isProductPage = computed(
  () => router.currentRoute.value.name === "products"
);
const token = ref(localStorage.getItem("token"));
const hideLogin = computed(() => {
  return router.currentRoute.value.name === "registration" || !token;
});
const hideReg = computed(() => {
  return router.currentRoute.value.name === "login" || !token;
});
const isLogged = computed(() => {
  return (
    router.currentRoute.value.name !== "login" &&
    router.currentRoute.value.name !== "registration"
  );
});

const openLogoutWindow = () => {
  showModal.value = true;
};
const closeLogoutWindow = () => {
  showModal.value = false;
};

async function logOut() {
  await authStore.logoutUser();
  closeLogoutWindow();
}
</script>

<style lang="scss" scoped>
.sidebar {
  height: 100%;
  width: 300px;
  position: fixed;
  left: 0;
  top: 0;
  box-shadow: 0 3px 10px rgba(59, 59, 59, 0.5);
  z-index: 1;
  
  background-color: #ffffff;

  &__user {
    position: relative;
    margin-top: 15vh;

    &-image {
      z-index: 0;
      img {
        width: 140px;
      }
    }

    &-settings {
      background-color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      position: absolute;
      top: 95px;
      left: 170px;
      z-index: 1;
      box-shadow: 0 3px 10px rgba(59, 59, 59, 0.2);
      cursor: pointer;
    }
  }

  &__navigation-links {
    margin-top: 5vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
    
    .sidebar__link {
      color: inherit;
      text-decoration: none;
      &-modal {
        padding: 40px;
        z-index: 101;
        &-btn {
          display: flex;
          gap: 40px;
          align-items: center;
          justify-content: center;
          align-content: center;
          margin-top: 50px;
          button {
            width: 100px;
            height: 30px;
            display: flex;
            align-items: center;
            align-content: center;
            justify-content: center;
            padding: 0;
            cursor: pointer;
            background: #000000;
            box-shadow: 0px 4px 4px rgba(125, 125, 125, 0.3);
            border-radius: 4px;
            border: 0;
            p {
              font-style: normal;
              font-weight: 700;
              font-size: 12px;
              line-height: 10px;
              text-align: center;
              display: flex;
              align-items: center;
              text-transform: uppercase;
              margin: 0;
              text-transform: uppercase;
              color: rgb(255, 255, 255);
              height: 100%;
            }
          }
        
        }
        &-btn {
          button:hover {
            background: #ffffff;
            color: #000000;
            p {
              color: #000000;
            }
          }
        }
      }
      a {
        text-decoration: none;
        color: inherit;
      }

      h4 {
        position: relative;
        font-size: 1.25rem;
        width: fit-content;
        margin: 0;
        cursor: pointer;
        text-decoration: none;
        &::before {
          content: "";
          position: absolute;
          left: 0;
          bottom: -5px;
          width: 0;
          height: 3px;
          background-color: transparent;
          transition: width 0.35s;
        }

        &:hover::before {
          width: 100%;
          background-color: green;
        }
      }
      h4:hover {
        text-decoration: none;
      }
      &--active h4::before {
        width: 100%;
        background-color: green;
        text-decoration: none;
      }
    }
  }
}
</style>
