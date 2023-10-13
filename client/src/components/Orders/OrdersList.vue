<template>
  <div :class="{ container_active: isActive }" class="container">
    <div v-for="item in order.orders" :key="item._id" class="order-list">
      <div class="title-box">
        <p class="title">{{ item.title }}</p>
      </div>

      <div class="details-box">
        <button @click="openProductList(item._id)">
          <img
            class="details"
            width="24"
            height="24"
            src="https://img.icons8.com/material/96/808080/list--v1.png"
            alt="list--v1"
          />
        </button>
      </div>
      <div class="quantity-box">
        <p class="quantity">{{ item.products?.length }} products</p>
      </div>
      <div class="date-box">
        <p class="date">{{ item.date }}</p>
      </div>

      <div class="price-box">
        <p class="price">Price</p>
      </div>
      <div class="delete-box">
        <img
          width="24"
          height="24"
          src="https://img.icons8.com/material/96/808080/trash--v1.png"
          alt="trash--v1"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useOrder } from "@/store/OrdersStore";
import { onMounted, ref } from "vue";
const order = useOrder();
const isActive = ref(false);
function openProductList(id: string) {
  isActive.value = !isActive.value;
  order.showProducts(isActive.value);
  if (isActive.value) {
    order.getSelectedOrder(id);
  }
}
onMounted(() => {
  order.getOrders();
});
</script>

<style lang="scss" scoped>
.container {
  padding-left: 80px;
  display: flex;
  gap: 10px;
  flex-direction: column;
  transition: width 0.5s ease;
  width: 100%;
  height: 60vh;
  overflow: scroll;
  .order-list {
    grid-template-columns: 3fr 1fr 1fr 1fr 1fr 1fr;
    display: grid;
    justify-items: start;
    border: 1px solid rgb(204, 204, 204);
    border-radius: 6px;
    padding-left: 20px;
    height: 70px;
    align-items: center;
    align-content: center;
    cursor: pointer;
    .title-box {
      .title {
        font-size: 19px;
        color: gray;
      }
    }

    .quantity-box {
      .quantity {
        font-size: 19px;
        color: gray;
      }
    }
    .date-box {
      .date {
        color: gray;
        font-size: 14px;
        font-weight: 600;
      }
    }

    .details-box {
      display: flex;
      width: 100%;
      justify-content: center;
      button {
        background: none;
        border: none;
      }
      .details {
        border: 2px solid rgb(210, 210, 210);
        border-radius: 20px;
        padding: 5px;
      }
    }
    .price-box {
      .price {
        color: gray;
      }
    }
    p {
      font-weight: 600;
    }
  }
  .order-list:hover {
    box-shadow: 0 3px 10px rgba(59, 59, 59, 0.4);
    text-align: center;
    height: 75px;
  }
}

.container.container_active {
  transition: width 0, 5s ease;
  padding-left: 80px;
  display: flex;
  gap: 10px;
  flex-direction: column;
  width: 30%;
  .order-list {
    transition: width 0, 5s ease;
    grid-template-columns: 1fr 1fr 1fr;
    display: grid;
    justify-items: center;
    border: 1px solid rgb(204, 204, 204);
    border-radius: 6px;
    padding-left: 20px;
    height: 70px;
    align-items: center;
    align-content: center;
    cursor: pointer;
    .title-box,
    .price-box,
    .delete-box {
      // transition: opacity 1s ease-in-out;
      // opacity: 0;
      display: none;
    }
    .quantity-box,
    .date-box {
      padding: 0 10px 0 10px;
    }
    .date-box {
      height: 80%;
      display: flex;
      align-items: flex-end;
    }
  }
}
</style>
