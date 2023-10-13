<template>
  <div class="container-products">
    <div v-for="(item, id) in order.selectedOrder" :key="id">
      <div class="title-box">
        <h3>{{ item.title }}</h3>
      </div>
      <div class="add-product">
        <button class="add-product_btn">
          <img
            width="22"
            height="22"
            src="https://img.icons8.com/color/96/add--v1.png"
            alt="add--v1"
          />
        </button>
        <p class="add-product_text">Add product</p>
      </div>

      <div class="product" v-for="product in item.products" :key="product._id">
        <div class="product_isnew">new</div>
        <div class="product_image">
          {{ product.photo }}
        </div>
        <div class="product_title">
          <p class="product_title_name">{{ product.title }}</p>
          <p class="product_title_serial">{{ product.serialNumber }}</p>
        </div>
        <div class="product_status">
          <p>{{ product.status }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useOrder } from "@/store/OrdersStore";

const order = useOrder();
</script>

<style lang="scss" scoped>
.container-products {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 40vw;
  border: 1px solid rgb(204, 204, 204);
  border-radius: 6px;
  transition: width 0.5s ease;
  .title-box {
    display: flex;
    h3 {
      padding-left: 25px;
    }
  }
  .add-product {
    display: flex;
    cursor: pointer;
    &_btn {
      background: none;
      border: none;
      padding-left: 25px;
      cursor: pointer;
    }
    &_text {
      padding-left: 5px;
      color: green;
      font-weight: 500;
      margin: 0;
    }
  }
  .product {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
}
</style>
