<template>
  <div class="container-order">
    <div class="create-order">
      <img
        width="44"
        height="44"
        src="https://img.icons8.com/color/96/add--v1.png"
        alt="add--v1"
        @click="openNewOrderWindow()"
      />
      <h2>Orders / {{ ordersLength }}</h2>
    </div>
    <CreateOrder :showModal="showModal" @closeOrderWindow="closeOrderWindow"/>
    <div class="order_wrapper">
      <OrdersList />
      <OrderedProducts v-if="productsStore.isActive" />
    </div>
  </div>
</template>

<script setup lang="ts">
import CreateOrder from "@/components/Orders/CreateOrder.vue";
import OrdersList from "@/components/Orders/OrdersList.vue";
import OrderedProducts from "@/components/Orders/OrderedProducts.vue";
import { useOrderStore } from "@/store/OrdersStore";
import { useProductsStore } from "@/store/productModule";
import { ref, computed } from "vue";
const order = useOrderStore();
const productsStore = useProductsStore()



const showModal = ref<boolean>(false);


function openNewOrderWindow() {
  showModal.value = true;
}
function closeOrderWindow() {
  showModal.value = false
}
const ordersLength = computed(() => {
  return order.orders.length;
});
</script>

<style lang="scss" scoped>
.container-order {
  position: relative;
  display: flex;
  width: calc(90vw - 300px);
  min-width: 800px;
  height: calc(100vh - 80px);
  flex-direction: column;
  margin-left: 40px;
  .create-order {
    padding: 80px 0 0 80px;
    gap: 20px;
    display: flex;
    align-items: center;
    cursor: pointer;
    img:hover {
      -webkit-transform: scale(1.2);
      -ms-transform: scale(1.2);
      transform: scale(1.2);
    }
  }
  .order_wrapper {
    display: flex;
    gap: 50px;
  }
}
</style>
