<template>
    <div class="container-products">
        <ProductsList/>
    </div>
</template>

<script setup lang="ts">
import ProductsList from '@/components/Products/ProductsList.vue';


</script>

<style lang="scss" scoped>
.container-products {
    width: calc(90vw - 300px);
    margin-left: 60px;
   
}
</style>