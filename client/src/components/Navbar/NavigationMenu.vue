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
      <div class="sidebar__link">
        <h4>SETTINGS</h4>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import { computed } from "vue";

const router = useRouter();
const isOrderPage = computed(() => router.currentRoute.value.name === "orders");
const isProductPage = computed(() => router.currentRoute.value.name === "products"
);
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
  margin-top: 80px;
  background-color: #ffffff;

  &__user {
    position: relative;
    margin-top: 5vh;

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
