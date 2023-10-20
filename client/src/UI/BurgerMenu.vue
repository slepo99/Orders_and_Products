<template>
  <div class="dropdown-content" :class="{ active: props.showBurger }">
    <slot> </slot>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  showBurger: {
    type: Boolean,
    default: true,
  },
});
</script>

<style lang="scss" scoped>
.dropdown-content {
  position: absolute;
  background-color: rgb(255, 255, 255);
  min-width: 160px;
  box-shadow: 5px 14px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  overflow: hidden;
  left: 0px;
  top: 80px;
  max-height: 0;
  transition: max-height 0.5s ease-out;
}
.active {
  max-height: 500px;
  transition: max-height 0.5s ease-in;
}
</style>
