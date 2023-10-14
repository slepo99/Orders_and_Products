<template>
  <ModalWindow :showModal="props.showModal">
    <div class="container-new-product">
      <div class="container-new-product_title">
        <h2>Fill in all fields to create a product:</h2>
      </div>
      <div class="container-new-product_form">
        <form>
          <div>
            <span>Prodcut name:</span>
            <label for="title">
              <input type="text" id="title" />
            </label>
          </div>
        </form>
      </div>
    </div>
  </ModalWindow>
</template>

<script setup lang="ts">
import ModalWindow from "@/UI/ModalWindow.vue";
import { Product } from "@/types/OrderType";
import { reactive } from "vue";
const props = defineProps({
  showModal: {
    type: Boolean,
    required: true,
  },
});
const productForm = reactive<Product>({
  serialNumber: 0,
  status: "",
  photo: "",
  title: "",
  type: "",
  specification: "",
  guarantee: {
    start: "",
    end: "",
  },
  price: [
    {
      value: 0,
      symbol: "",
      isDefault: true,
    },
    {
      value: 0,
      symbol: "",
      isDefault: true,
    },
  ],
  order: 0,
  date: "",

});
</script>

<style lang="scss" scoped>
.container-new-product {
  padding: 50px;
}
</style>
