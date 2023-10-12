<template>
  <div>
    <div v-for="(item) in order.orders" :key="item._id">
        {{ item.title }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { useOrder } from "@/store/OrdersStore";
import { onMounted } from "vue";
const order = useOrder();
onMounted(() => {
    order.getOrders()
})
</script>

<style scoped></style>
