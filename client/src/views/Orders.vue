<template>
  <div class="container-order">
    <div class="order-create">
      <img
        width="44"
        height="44"
        src="https://img.icons8.com/color/96/add--v1.png"
        alt="add--v1"
        @click="openOrderWindow()"
      />
      <h2>Orders</h2>
    </div>
    <CreateOrder :show="show" />
    <OrdersList />
  </div>
</template>

<script setup lang="ts">
import CreateOrder from "@/components/Orders/CreateOrder.vue";
import OrdersList from "@/components/Orders/OrdersList.vue";
import { ref } from "vue";
const show = ref<boolean>(false);
function openOrderWindow() {
     show.value = true
}
</script>

<style lang="scss" scoped>
.container-order {
    position: relative;
    
    display: flex;
    width: calc(80vw - 300px);
    min-width: 800px;
    height: calc(100vh - 80px);
    flex-direction: column;
    
  .order-create {
   padding: 80px 0 0 80px;
   gap: 20px;
   display: flex;
   align-items: center;
  }
}
</style>
