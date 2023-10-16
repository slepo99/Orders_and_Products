<template>
  <div class="container-filter">
    <div class="container-filter_quantity">
      <h2>Products / {{ order.filteredProductsByType.length }}</h2>
    </div>
    <div class="container-filter_type">
      <span>Type:</span>
      <SelectList
        @change="filterByType"
        :options="type"
        v-model="selectedType"
        class="container-filter_type_select"
      />
    </div>
    
  </div>
</template>

<script setup lang="ts">
import SelectList from "@/UI/SelectList.vue";
import {  type } from "@/helpers/mocks/ProductSelectMocks";
import { ref } from "vue";
import { useOrder } from "@/store/OrdersStore";
const order = useOrder();
const selectedType = ref<string | null>('');


const filterByType = () => {
  return order.setSelectedType(selectedType.value);
};
</script>

<style lang="scss" scoped>
.container-filter {
  display: flex;
  position: relative;
  left: 60px;
  bottom: 40px;
  width: 50%;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 20px;
  &_type {
    display: flex;
    gap: 10px;
    align-items: center;
    &_select {
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
    &_select:hover {
      border: 1px solid rgb(145, 145, 145);
      border: 1px solid rgb(145, 145, 145);
      background-color: white;
      width: 150px;
      height: 20px;
      border-radius: 8px;
    }
    &_select:focus {
      border: 1px solid rgb(145, 145, 145);
      border: 1px solid rgb(145, 145, 145);
      background-color: white;
      width: 150px;
      height: 20px;
      border-radius: 8px;
    }
  }
  &_spec {
    display: flex;
    gap: 10px;
    align-items: center;
    &_select {
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
    &_select:hover {
      border: 1px solid rgb(145, 145, 145);
      border: 1px solid rgb(145, 145, 145);
      background-color: white;
      width: 150px;
      height: 20px;
      border-radius: 8px;
    }
    &_select:focus {
      border: 1px solid rgb(145, 145, 145);
      border: 1px solid rgb(145, 145, 145);
      background-color: white;
      width: 150px;
      height: 20px;
      border-radius: 8px;
    }
  }
}
</style>
