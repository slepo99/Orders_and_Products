<template>
    <div class="container-products">
        <div v-for="item in order.orders" :key="item._id">
           <div v-for="product in item.products" :key="product._id" class="products-list">
            {{ product.title }}
            {{ product.type }}
            {{ item.title }}
           </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useOrder } from '@/store/OrdersStore';
import { onMounted } from 'vue';
const order = useOrder()

onMounted(() => {
    order.getOrders()
})
</script>

<style lang="scss" scoped>
.container-products {
    height: 700px;
        width: 100%;
        overflow: scroll;
    .products-list {
        border: 1px solid black;
    }
}
</style>