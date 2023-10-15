<template>
  <select v-model="selectedValue" class="select">
    <option :value="null" disabled class="option">Select an option</option>
    <option v-for="option in options" :key="option.value" :value="option.value">
      {{ option.label }}
    </option>
  </select>
</template>

<script setup lang="ts">
import { ref, defineEmits, watchEffect } from "vue";

const { options, selected } = defineProps(["options", "selected"]);
const emit = defineEmits(["update:selected"]);

const selectedValue = ref(selected);

watchEffect(() => {
  emit("update:selected", selectedValue.value);
});
</script>

<style lang="scss" scoped>
  .select {
        border: 0;
        border-bottom: 1px solid #555;
        background: transparent;
        width: 300px;
        padding: 8px 0 5px 0;
        font-size: 16px;
        color: black;
        cursor: pointer
      }
      .option {
        color: black;
        cursor: pointer;
      }
      .select:focus {
        border: none;
        outline: none;
        border-bottom: 1px solid #7fe6ed;
      }
      .select:focus ~ label,
      .select:valid ~ label {
        top: -12px;
        font-size: 12px;
      }
</style>
