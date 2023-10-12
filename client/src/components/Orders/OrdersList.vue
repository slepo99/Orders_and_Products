<template>
  <div class="container">
    <div v-for="item in order.orders" :key="item._id" class="order-list">
      <p class="title">{{ item.title }}</p>
      <p class="quantity">{{ item.products?.length }} products</p>
      <p class="date">{{ item.date }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useOrder } from "@/store/OrdersStore";
import { onMounted } from "vue";
const order = useOrder();
onMounted(() => {
  order.getOrders();
});
</script>

<style lang="scss" scoped>
.container {
  padding-left: 80px;
  display: flex;
  gap: 10px;
  flex-direction: column;
  .order-list {
    transition: height 0.3s ease;
    grid-template-columns: 2fr 1fr 1fr;
    display: grid;
    justify-items: start;
    border: 1px solid rgb(204, 204, 204);
    border-radius: 6px;
    padding-left: 20px;
    height: 70px;
    align-items: center;
    cursor: pointer;
    .title,
    .quantity {
      font-size: 19px;
      color: gray;
    }
    .date {
      color: gray;
      font-size: 14px;
    }
  }
  .order-list:hover {
    box-shadow: 0 3px 10px rgba(59, 59, 59, 0.4);
    text-align: center;
    height: 75px;
  }
}
</style>
