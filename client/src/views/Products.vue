<template>
  <div class="container-products">
    <ProductsFilter />
    <ProductsList />
  </div>
</template>

<script setup lang="ts">
import ProductsFilter from "@/components/Products/ProductsFilter.vue";
import ProductsList from "@/components/Products/ProductsList.vue";
</script>

<style lang="scss" scoped>
.container-products {
  width: calc(95vw - 300px);
  margin-left: 150px;
}
@media (max-width: 1200px) {
  .container-products {
    width: calc(100vh);
    position: relative;
    right: 50px;
  }
}

@media (max-width: 720px) {
  .container-products {
    width: calc(100vh);
    margin: 0;
  }
}
</style>
