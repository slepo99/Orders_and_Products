<template>
  <div class="container">
    <div
      v-for="item in order.orders"
      :key="item._id"
      class="container-products"
    >
      <div
        v-for="product in item.products"
        :key="product._id"
        class="products-list"
      >
        <div class="products-list_marker">
          <div :class="setStatus(product.status)"></div>
        </div>

        <div class="product-list_image">
          <img
            width="100"
            height="54"
            src="../../assets/product.png"
            alt="product_image"
          />
        </div>

        <div class="product-list_info">
          <span class="product-list_info_title">{{ product.title }}</span>
          <span class="product-list_info_serial">{{
            product.serialNumber
          }}</span>
        </div>

        <div class="products-list_status">
          <p v-if="product.status" class="products-list_status_free">Free</p>
          <p v-else class="products-list_status_repairing">Repairing</p>
        </div>

        <div class="products-list_guarantee">
          <span class="products-list_guarantee_start">{{
            product.guarantee.start
          }}</span>
          <span class="products-list_guarantee_end">{{
            product.guarantee.end
          }}</span>
        </div>

        <div class="products-list_isnew">
          <span v-if="product.isProductNew">New</span>
          <span v-else>Used</span>
        </div>

        <div class="products-list_price">
          <span class="products-list_price_uah">{{
            product.price[0].value
          }}</span>
          <span class="products-list_price_usd">{{
            product.price[1].value
          }}</span>
        </div>

        <div class="products-list_type">
          <span>{{ product.type }}</span>
        </div>

        <div class="products-list_order-title">
          <span>{{ item.title }}</span>
        </div>

        <div class="products-list_date">
          {{ item.date }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useOrder } from "@/store/OrdersStore";
import { onMounted } from "vue";
const order = useOrder();
function setStatus(status: boolean) {
  if (status == true) {
    return "products-list_marker_free";
  } else if (status == false) {
    return "products-list_marker_busy";
  }
}

onMounted(() => {
  order.getOrders();
});
</script>

<style lang="scss" scoped>
.container {
  height: 600px;
  width: 100%;
  overflow: scroll;
  min-width: 800px;
  position: relative;
  align-items: center;
  margin-left: 60px;
  .container-products {
    display: flex;
    flex-direction: column;
    gap: 15px;

    .products-list {
      border: none;
      display: grid;
      grid-template-columns: 0.5fr 0.5fr 2fr 1fr 1fr 1fr 1fr 1fr 2fr 1fr 1fr;
      border: 1px solid rgb(169, 169, 169);
      border-radius: 4px;
      align-items: center;
      background-color: #fff;
      &_marker {
        display: flex;
        align-items: center;
        justify-content: center;
        &_free {
          width: 10px;
          height: 10px;
          border-radius: 5px;
          background: #57bc57;
        }
        &_busy {
          width: 10px;
          height: 10px;
          border-radius: 5px;
          background: #d31f1f;
        }
      }

      &_status {
        &_free {
          font-weight: 500;
          color: #57bc57;
        }
        &_repairing {
          font-weight: 500;
          color: #c92828;
        }
      }
    }
  }
}
</style>
