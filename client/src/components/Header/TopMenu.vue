<template>
  <div class="header">
    <div class="header__logo">
      <img
        width="66"
        height="66"
        src="https://img.icons8.com/color/96/warehouse.png"
        alt="warehouse"
      />
      <h2>INVENTORY</h2>
    </div>
    <div class="header__burger" @click="openBurger">
      <img
        width="30"
        height="30"
        src="https://img.icons8.com/ios-filled/150/menu--v4.png"
        alt="menu--v4"
      />
      <BurgerMenu :showBurger="showBurger">
        <p><router-link to="">123</router-link></p>
        <p><router-link to="">123</router-link></p>
        <p><router-link to="">123</router-link></p>
      </BurgerMenu>
    </div>
    <div class="header__search">
      <SearchBar />
    </div>
    <div class="header__info">
      <DateTimeDisplay />
      <ActiveSessions />
    </div>
  </div>
</template>

<script setup lang="ts">
import BurgerMenu from "@/UI/BurgerMenu.vue";
import ActiveSessions from "./ActiveSessions.vue";
import DateTimeDisplay from "./DateTimeDisplay.vue";
import SearchBar from "./SearchBar.vue";
import { ref } from "vue";
const showBurger = ref(false);
const openBurger = () => {
  showBurger.value = !showBurger.value;
};
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  height: 80px;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  justify-items: start;
  position: fixed;
  top: 0;
  left: 0;
  box-shadow: 0 3px 10px rgba(59, 59, 59, 0.5);
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  z-index: 2;
  background-color: rgb(255, 255, 255);

  &__info {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-right: 40px;
    gap: 40px;
    align-items: center;
  }

  &__logo {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    h2 {
      margin: 0;
    }
  }
  &__burger {
    display: none;
    p {
      margin: 5px 0 0 0;
    }
  }
}
@media (max-width: 980px) {
  .header {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;

    &__logo {
      img {
        width: 40px;
        height: 40px;
      }

      h2 {
        font-size: 18px;
      }
    }
    &__info {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      margin-right: 0;
    }
  }
}
@media (max-width: 720px) {
  .header {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;

    &__logo {
      display: none;
      img {
        width: 40px;
        height: 40px;
      }

      h2 {
        font-size: 18px;
      }
    }
    &__burger {
      display: block;
      margin-left: 40px;
      cursor: pointer;
    }
  }
}
</style>
