<template>
  <div class="wrapper">
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
    position: absolute;
    top: 0;
    left: 0;
    box-shadow: 0 3px 10px rgba(59, 59, 59, 0.2);
    align-items: center;
    flex-direction: row-reverse;

  .info {
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    margin-right: 40px;
    gap: 40px;

  }
}
</style>
