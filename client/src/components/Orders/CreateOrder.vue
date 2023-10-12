<template>
  <ModalWindow :show="props.show">
    <div class="container-title">
      <h1>Order creation</h1>
    </div>
    <div class="container-form">
      <form @submit.prevent="createOrder" class="form">
        <div class="title">
          <span>Enter product title:</span>
          <label for="title">
            <input
              type="text"
              class="input-title"
              id="title"
              v-model="orderForm.title"
            />
          </label>
        </div>
        <div class="description">
          <span>Enter product description:</span>
          <label for="description">
            <input
              class="input-description"
              type="text"
              id="description"
              v-model="orderForm.description"
            />
          </label>
        </div>
        <button type="submit" class="submit-btn">Create order</button>
      </form>
    </div>
  </ModalWindow>
</template>

<script setup lang="ts">
import ModalWindow from "@/UI/ModalWindow.vue";
import { Order } from "@/types/Order";
import { reactive, onMounted, computed } from "vue";
import { useOrder } from "@/store/OrdersStore";

const props = defineProps({
    show: {
      type: Boolean,
      default: false,
    },
});
const order = useOrder()
const getDate = computed<string>(() => {
  const date = new Date();
  return `${date.getDate().toString()}/${date.getMonth().toString() + 1}/${date
    .getFullYear()
    .toString()}`;
});
const orderForm = reactive<Order>({
  title: "",
  date: getDate.value,
  description: "",
});
async function createOrder() {
  await order.createOrder(orderForm)
  orderForm.title = ''
  orderForm.description = ''
}
onMounted(() => {});
</script>

<style lang="scss" scoped>
.container-form {
  padding: 20px 100px 100px 100px;
  form {
    display: flex;
    flex-direction: column;
    gap: 50px;
    div {
      display: flex;
      flex-direction: column;
      span {
        text-align: start;
        font-size: 22px;
        font-weight: 700;
      }
      input {
        border: 0;
        border-bottom: 1px solid #555;
        background: transparent;
        width: 300px;
        padding: 8px 0 5px 0;
        font-size: 16px;
        color: #fff;
      }
      input:focus {
        border: none;
        outline: none;
        border-bottom: 1px solid #7fe6ed;
      }
      input:focus ~ label,
      input:valid ~ label {
        top: -12px;
        font-size: 12px;
      }
    }
  }
}
</style>
