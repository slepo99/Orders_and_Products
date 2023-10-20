<template>
  <div class="container-search" v-if="isShow()">
    <input
      class="container-search_input"
      v-model="searchValue"
      type="text"
      @input="searchItem"
      placeholder="Search"
      id="input"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, } from "vue";
import { useRouter } from "vue-router";
import { useProductsStore } from "@/store/productModule";
import { useOrderStore } from "@/store/ordersModule";
const orderStore = useOrderStore();
const productsStore = useProductsStore();
const router = useRouter();
const searchValue = ref<string>("");
function searchItem() {
  if (router.currentRoute.value.name == "products") {
    productsStore.setSearchValue(searchValue.value);
  } else if (router.currentRoute.value.name == "orders") {
    orderStore.setSearchValue(searchValue.value);
  }
}

const isShow = () => {
  return (
    router.currentRoute.value.name !== "login" &&
    router.currentRoute.value.name !== "registration" &&
    localStorage.getItem('token')
  );
};
</script>

<style lang="scss" scoped>
.container-search {
  &_input {
    width: 300px;
    height: 20px;
    background-color: rgb(222, 219, 219);
    border: none;
    border-radius: 4px;
    outline: none;
    box-shadow: 0 3px 10px rgba(59, 59, 59, 0.2);
    color: black;
    font-weight: 600;
  }
  &_input::placeholder {
    color: black;
    font-weight: 600;
  }
}
@media (max-width: 980px) {
  .container-search {
    &_input {
      width: 200px;
      height: 20px;
      margin-left: 20px;
    }
  }
}
@media (max-width: 720px) {
  .container-search {
    &_input {
      width: 130px;
      height: 20px;
      margin-left: 20px;
    }
  }
}
</style>
@/store/ordersModule