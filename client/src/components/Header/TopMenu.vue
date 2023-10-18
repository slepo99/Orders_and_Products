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
import ActiveSessions from "./ActiveSessions.vue";
import DateTimeDisplay from "./DateTimeDisplay.vue";
import SearchBar from "./SearchBar.vue";
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
    align-items: flex-end;
    margin-right: 40px;
    gap: 40px;
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
}
</style>