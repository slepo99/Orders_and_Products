<template>
  <div class="container">
    <div class="date">
      {{ currentDateTime.day }}
      {{ currentDateTime.month }}
      {{ currentDateTime.year }}
    </div>
    <div class="time">
      {{ currentDateTime.time }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, reactive } from "vue";
interface Date {
  time: string;
  year: string;
  month: string;
  day: string;
}
const currentDateTime = reactive<Date>({
  time: "",
  year: "",
  month: "",
  day: "",
});

function getCurrentDate() {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const date = new Date();
  currentDateTime.time = date.toLocaleTimeString("en-US", {
    hour12: false,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
  currentDateTime.day = date.getDate().toString();
  currentDateTime.year = date.getFullYear().toString();
  currentDateTime.month = months[date.getMonth()];
}
onMounted(() => {
  getCurrentDate();
  setInterval(getCurrentDate, 1000);
});
</script>

<style scoped></style>
