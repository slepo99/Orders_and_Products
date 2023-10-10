<template>
  <div>
    <p>Active Sessions: {{ activeSessionsCount }}</p>
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

<style scoped></style>
