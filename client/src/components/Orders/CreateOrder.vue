<template>
  <ModalWindow :showModal="props.showModal">
    <div class="close-dialog">
      <button class="close-dialog_btn" @click="closeDialog">
        <img width="30" height="30" src="https://img.icons8.com/ios-glyphs/60/7DAE33/delete-sign.png" alt="delete-sign"/>
      </button>
    </div>
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
import { OrderDescription } from "@/types/Order";
import { reactive, onMounted, computed } from "vue";
import { useOrder } from "@/store/OrdersStore";

const props = defineProps({
  showModal: {
    type: Boolean,
    default: false,
  },
});
const emit = defineEmits()
const order = useOrder();
const getDate = computed<string>(() => {
  const date = new Date();
  return `${date.getDate().toString()} / ${(
    date.getMonth() + 1
  ).toString()} / ${date.getFullYear().toString()}`;
});
const orderForm = reactive<OrderDescription>({
  title: "",
  date: getDate.value,
  description: "",
});
async function createOrder() {
  await order.createOrder(orderForm);
  orderForm.title = "";
  orderForm.description = "";
  await order.getOrders()
  emit('closeOrderWindow')
}
function closeDialog() {
  emit('closeOrderWindow')
}
onMounted(() => {});
</script>

<style lang="scss" scoped>
.close-dialog {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: black;
  &_btn {
    background: none;
    border: none;
    display: flex;
    align-items: center;
    cursor: pointer;
  }
}
.container-form {
  padding: 20px 100px 100px 100px;
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
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
    button {
      width: 150px;
      height: 50px;
      cursor: pointer;
      background-color: black;
      border: none;
      border-radius: 6px;
      font-size: 18px;
    }
    button:hover {
      background-color: white;
      color: black;
    }
  }
}
</style>
