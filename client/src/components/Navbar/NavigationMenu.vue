<template>
  <div class="wrapper">
    <div class="user-params">
      <div class="user-image">
        <img src="../../assets/user_photo.png" alt="admin_photo" />
      </div>

      <div class="user-settings">
        <img
          width="30"
          height="30"
          src="https://img.icons8.com/color/48/000000/settings--v1.png"
          alt="settings--v1"
        />
      </div>
    </div>
    <div class="navigation-links">
      <div class="order">
        <router-link to="/orders"
          ><h4>ORDER</h4>
          <div data-testid="order" :class="{ current_page: isOrderPage }"></div
        ></router-link>
      </div>
      <div class="groups"><h4>GROUPS</h4></div>
      <div class="products">
        <router-link to="/"
          ><h4>PRODUCTS</h4>
          <div
            data-testid="products"
            :class="{ current_page: isProductPage }"
          ></div
        ></router-link>
      </div>
      <div class="users"><h4>USERS</h4></div>
      <div class="settings"><h4>SETTINGS</h4></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import { computed } from "vue";
const router = useRouter();
const isOrderPage = computed(() => router.currentRoute.value.name === "orders");
const isProductPage = computed(
  () => router.currentRoute.value.name === "products"
);
</script>

<style lang="scss" scoped>
.wrapper {
  height: 100%;
  width: 300px;
  position: fixed;
  left: 0;
  top: 0;
  box-shadow: 0 3px 10px rgba(59, 59, 59, 0.5);
  z-index: 1;
  margin-top: 80px;
  background-color: #ffffff;
  .user-params {
    position: relative;
    margin-top: 5vh;
    .user-image {
      z-index: 0;
      img {
        width: 140px;
      }
    }
    .user-settings {
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
  .navigation-links {
    margin-top: 5vh;
    display: flex;
    flex-direction: column;
    gap: 50px;
    div {
      display: flex;
      justify-content: center;

      a {
        text-decoration: none;
      }
      h4 {
        position: relative;
        color: #484848;
        font-size: 1.25rem;
        text-decoration: none;
        width: fit-content;
        margin: 0;
      }
      h4::before {
        content: "";
        position: absolute;
        left: 0;
        bottom: -5px;
        width: 0;
        height: 3px;
        background-color: green;
      }
      h4:hover:before {
        width: 100%;
      }
      h4::before {
        transition: width 0.35s;
      }
      .current_page {
        height: 3px;
        width: 100%;
        background-color: green;
        position: relative;
        top: 2px;
      }
    }
  }
}
</style>
