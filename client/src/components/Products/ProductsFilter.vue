<template>
  <div class="container_filter">
    <div class="container_filter-quantity">
      <h2>Products / {{ productStore.filteredProductsByType.length }}</h2>
    </div>
    <div class="container_filter-type">
      <span>Type:</span>
      <SelectList
        @change="filterByType"
        data-testid="select-list"
        :options="type"
        v-model="selectedType"
        class="container_filter-type-select"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import SelectList from "@/UI/SelectList.vue";
import { type } from "@/helpers/mocks/ProductSelectMocks";
import { ref } from "vue";
import { useProductsStore } from "@/store/productModule";
const productStore = useProductsStore();
const selectedType = ref<string | null>("");

const filterByType = () => {
  return productStore.setSelectedType(selectedType.value);
};
</script>

<style lang="scss" scoped>
.container_filter {
  display: flex;
  position: relative;
  left: 60px;
  bottom: 40px;
  width: 50%;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 20px;
  &-type {
    display: flex;
    gap: 10px;
    align-items: center;
    &-select {
      border: 1px solid rgb(145, 145, 145);
      background-color: white;
      width: 150px;
      height: 20px;
      border-radius: 8px;
      padding: 0;
      font-size: 12px;
      font-weight: 600;
      option {
        height: 20px;
        width: 150px;
      }
    }
    &-select:hover {
      border: 1px solid rgb(145, 145, 145);
      border: 1px solid rgb(145, 145, 145);
      background-color: white;
      width: 150px;
      height: 20px;
      border-radius: 8px;
    }
    &-select:focus {
      border: 1px solid rgb(145, 145, 145);
      border: 1px solid rgb(145, 145, 145);
      background-color: white;
      width: 150px;
      height: 20px;
      border-radius: 8px;
    }
  }
}
@media (max-width: 1280px) {
 .container_filter {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
 }
}
</style>
