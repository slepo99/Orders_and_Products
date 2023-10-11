<template>
  <div class="wrapper">
    <div class="logo">
      <img
        width="66"
        height="66"
        src="https://img.icons8.com/color/96/warehouse.png"
        alt="warehouse"
      />
      <h2>INVENTORY</h2>
    </div>
    <div class="info">
      <DateTimeDisplay />
      <ActiveSessions />
    </div>
  </div>
</template>

<script setup lang="ts">
import ActiveSessions from "./ActiveSessions.vue";
import DateTimeDisplay from "./DateTimeDisplay.vue";
</script>

<style lang="scss" scoped>
.wrapper {
  width: 100%;
  height: 80px;
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  box-shadow: 0 3px 10px rgba(59, 59, 59, 0.2);
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  z-index: 2;

  .info {
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    margin-right: 40px;
    gap: 40px;
  }
  .logo {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-left: 20px;
    h1 {
      margin: 0;
    }
  }
}
</style>
