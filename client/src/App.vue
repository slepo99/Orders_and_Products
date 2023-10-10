<template>
  <div>
    <ActiveSessions/>
    <DateTimeDisplay/>
  </div>

</template>

<script setup lang="ts">
import ActiveSessions from './components/Header/ActiveSessions.vue';
import DateTimeDisplay from './components/Header/DateTimeDisplay.vue';
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
