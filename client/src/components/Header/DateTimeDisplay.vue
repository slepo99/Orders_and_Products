<template>
  <div class="date-time">
    <div class="date-time__date">
      <div class="date-time__day-of-week">
        <span>{{ currentDateTime.dayOfWeek }}</span>
      </div>
      <div class="date-time__date-info">
        <span>{{ currentDateTime.day }}</span>
        <span>{{ currentDateTime.month }}</span>
        <span>{{ currentDateTime.year }}</span>
      </div>
    </div>

    <div class="date-time__time">
      <span class="date-time__time-icon">
        <img
          width="18"
          height="18"
          src="https://img.icons8.com/color/48/time-machine--v1.png"
          alt="time-machine--v1"
        />
      </span>
      <span class="date-time__time-text">{{ currentDateTime.time }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, reactive, onBeforeUnmount } from "vue";
import { months, days } from "@/helpers/mocks/DateMocks";

interface Date {
  time: string;
  year: string;
  month: string;
  day: string;
  dayOfWeek: string;
}

const currentDateTime = reactive<Date>({
  time: "",
  year: "",
  month: "",
  day: "",
  dayOfWeek: "",
});

function getCurrentDate() {
  const date = new Date();
  currentDateTime.time = date.toLocaleTimeString("en-US", {
    hour12: false,
    hour: "2-digit",
    minute: "2-digit",
  });
  currentDateTime.day = date.getDate().toString();
  currentDateTime.year = date.getFullYear().toString();
  currentDateTime.month = months[date.getMonth()].slice(0, 3);
  currentDateTime.dayOfWeek = days[(date.getDay() + 6) % 7];
}

let intervalId: NodeJS.Timeout | null = null;

onMounted(() => {
  getCurrentDate();
  intervalId = setInterval(getCurrentDate, 1000);
});

onBeforeUnmount(() => {
  if (intervalId !== null) {
    clearInterval(intervalId);
  }
});
</script>

<style lang="scss" scoped>
.date-time {
  display: flex;
  align-items: flex-end;
  gap: 15px;

  &__date {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    span {
      font-size: 14px;
      font-weight: 600;
    }
  }

  &__time {
    display: flex;
    gap: 3px;

    &-icon {
      font-size: 18px;
      display: flex;
      align-items: center;
    }

    &-text {
      font-size: 14px;
      font-weight: 600;
    }
  }
}
</style>
