<template>
  <div class="container">
    <span class="active-sessions"
      >Active Sessions: {{ activeSessionsCount }}</span
    >
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";
import { io, Socket } from "socket.io-client";
const socket: Socket = io("http://localhost:3000");

const activeSessionsCount = ref(0);
socket.on("activeSessionsCount", (count: number) => {
  activeSessionsCount.value = count;
});

onMounted(() => {
  socket.emit("joinSession");
});

onBeforeUnmount(() => {
  socket.emit("leaveSession");
});
</script>

<style lang="scss" scoped>
.container {
  width: 130px;
  .active-sessions {
    font-size: 14px;
    font-weight: 600;
  }
}
@media (max-width: 980px) {
  .container {
    display: flex;
    width: 130px;
    .active-sessions {
      font-size: 14px;
      font-weight: 600;
    }
  }
}
</style>
