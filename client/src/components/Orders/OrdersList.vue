<template>
  <div :class="{ container_active: productsStore.isActive }" class="container">
    <div v-for="(item, id) in order.searchOrder" :key="id" class="order-list">
      <div class="order-list__title-box">
        <p class="order-list__title-box--title">{{ item.title }}</p>
      </div>

      <div class="order-list__details-box">
        <button @click="openProductList(item._id)" >
          <img
            class="order-list__details-box--details"
            data-testid="open-products"
            width="24"
            height="24"
            src="https://img.icons8.com/material/96/808080/list--v1.png"
            alt="details"
          />
        </button>
      </div>
      <div class="order-list__quantity-box">
        <p class="order-list__quantity">{{ item.products?.length }} products</p>
      </div>
      <div class="order-list__date-box">
        <p class="order-list__date-box-date">{{ item.date }}</p>
      </div>

      <div class="order-list__price-box">
        <p class="order-list__price-usd">${{ totalUSDPrice(item.products) }}</p>
        <p class="order-list__price-uah">₴{{ totalUahPrice(item.products) }}</p>
      </div>
      <DeleteIcon
        data-testid="order-remove"
        class="order-list__delete-box"
        @click="openDeleteOrderWindow(item._id)"
      />
    </div>
    <OrderRemove
      :currentOrderId="currentOrderId"
      :showModal="showModal"
      @closeDeleteOrderWindow="closeDeleteOrderWindow"
      
    />
  </div>
</template>

<script setup lang="ts">
import { useOrderStore } from "@/store/OrdersStore";
import { useProductsStore } from "@/store/productModule";
import { ProductGet } from "@/types/OrderTypes";
import { onMounted, ref, computed } from "vue";
import OrderRemove from "./OrderRemove.vue";
import DeleteIcon from "@/UI/DeleteIcon.vue";

const productsStore = useProductsStore();
const order = useOrderStore();
const isActive = ref(false);
const showModal = ref(false);
const currentOrderId = ref("");

function openDeleteOrderWindow(id: string) {
  currentOrderId.value = id;
  showModal.value = true;
}
function closeDeleteOrderWindow() {
  showModal.value = false;
}
function openProductList(id: string) {
  isActive.value = !isActive.value;
  productsStore.showProducts(isActive.value);
  if (isActive.value) {
    order.getSelectedOrder(id);
  }
}

const getTotalPriceInCurrency = (
  products: ProductGet[],
  currencySymbol: string
): any => {
  return products.reduce((totalPrice, product) => {
    const currency = product.price.reduce((sum, priceItem) => {
      if (priceItem.symbol == currencySymbol) {
        return sum + parseInt(priceItem.value);
      }
      return sum;
    }, 0);

    return totalPrice + currency;
  }, 0);
};
function setPrice(product: ProductGet[], currencySymbol: string) {
  return getTotalPriceInCurrency(product, currencySymbol)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
const totalUSDPrice = computed(
  () => (product: ProductGet[]) => setPrice(product, "USD")
);
const totalUahPrice = computed(
  () => (product: ProductGet[]) => setPrice(product, "UAH")
);

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
  height: 600px;
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
    background-color: #fff;
    &__title-box {
      &--title {
        font-size: 19px;
      }
    }

    &__quantity {
      font-size: 19px;
    }
    &__date-box {
      &-date {
        font-size: 14px;
        font-weight: 600;
      }
    }

    &__details-box {
      display: flex;
      width: 100%;
      justify-content: center;

      button {
        background: none;
        border: none;
        cursor: pointer;
      }
      &--details {
        border: 2px solid rgb(193, 193, 193);
        border-radius: 20px;
        padding: 5px;
      }
    }
    &__price-box {
      display: flex;
      flex-direction: column;
      width: 100%;
      align-items: center;
    }
    &__price-usd {
      margin: 0;
    }
    &__price-uah {
      margin: 0;
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

    &__title-box,
    &__price-box,
    &__delete-box {
      display: none;
    }
    &__quantity-box,
    &__date-box {
      padding: 0 10px 0 10px;
    }
    &__date-box {
      height: 80%;
      display: flex;
      align-items: center;
    }
  }
}
</style>
