<template>
  <ModalWindow :showModal="props.showModal">
    <div class="modal-window__close-dialog">
      <button class="close-dialog__btn" @click="closeDialog">
        <img
          width="30"
          height="30"
          src="https://img.icons8.com/ios-glyphs/60/7DAE33/delete-sign.png"
          alt="delete-sign"
        />
      </button>
    </div>
    <div class="modal-window__container-title">
      <h1>Order creation</h1>
    </div>
    <div class="modal-window__container-form">
      <form @submit.prevent="validateFields" class="form" data-testid="form">
        <div class="form__title">
          <span>Enter order title:</span>
          <label for="title">
            <input
              type="text"
              class="input input-title"
              id="title"
              v-model="orderForm.title"
              placeholder="Title"
            />
            <span
              class="modal-window__container-form-error"
              :class="{ error_visible: errors.title }"
              >Title length should be more than 6 and less than 30 symbols</span
            >
          </label>
        </div>
        <div class="form__description">
          <span>Enter order description:</span>
          <label for="description">
            <input
              placeholder="Description"
              class="input input-description"
              type="text"
              id="description"
              v-model="orderForm.description"
            />
            <span
              class="modal-window__container-form-error"
              :class="{ error_visible: errors.description }"
              >Description length should be more than 6 and less than 30
              symbols</span
            >
          </label>
        </div>
        <button type="submit" class="form__submit-btn">Create order</button>
      </form>
    </div>
  </ModalWindow>
</template>

<script setup lang="ts">
import ModalWindow from "@/UI/ModalWindow.vue";
import { OrderDescription } from "@/types/OrderTypes";
import { useOrderStore } from "@/store/ordersModule";
import { reactive, onMounted, computed } from "vue";
const props = defineProps({
  showModal: {
    type: Boolean,
    default: false,
  },
});
const emit = defineEmits();
const order = useOrderStore();
const getDate = computed<string>(() => {
  const date = new Date();
  return `${date.getDate().toString()} / ${(
    date.getMonth() + 1
  ).toString()} / ${date.getFullYear().toString()}`;
});
const errors = reactive({
  title: false,
  description: false,
});
const orderForm = reactive<OrderDescription>({
  title: "",
  date: getDate.value,
  description: "",
});
async function validateFields() {
  if (orderForm.title.length < 6 || orderForm.title.length > 30) {
    errors.title = true;
    setTimeout(() => {
      errors.title = false;
    }, 4000);
    return;
  }
  if (orderForm.description.length < 6 || orderForm.description.length > 30) {
    errors.description = true;
    setTimeout(() => {
      errors.description = false;
    }, 4000);
    return;
  }
  await createOrder();
  emit("closeOrderWindow");
}
async function createOrder() {
  await order.createOrder(orderForm);
  orderForm.title = "";
  orderForm.description = "";
  await order.getOrders();
}

const closeDialog = () => {
  emit("closeOrderWindow");
};
onMounted(() => {});
</script>

<style lang="scss" scoped>
.modal-window__close-dialog {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: black;
  .close-dialog__btn {
    background: black;
    border: none;
    display: flex;
    align-items: center;
    cursor: pointer;
  }
}
.modal-window__container-form {
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
      label {
        display: flex;
        flex-direction: column;

        span {
          font-size: 12px;
          font-weight: 700;
          margin-bottom: 5px;
          width: 300px;
          height: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 2px;
          position: relative;
          top: 5px;
        }
      }
      .input {
        border: 0;
        border-bottom: 1px solid #555;
        background: transparent;
        width: 300px;
        padding: 8px 0 5px 0;
        font-size: 16px;
        color: #fff;
      }
      input::placeholder {
        color: black;
      }
      .input:focus {
        border: none;
        outline: none;
        border-bottom: 1px solid #7fe6ed;
      }
      .input:focus ~ label,
      .input:valid ~ label {
        top: -12px;
        font-size: 12px;
      }
    }
    button.form__submit-btn {
      width: 150px;
      height: 50px;
      cursor: pointer;
      background-color: black;
      border: none;
      border-radius: 6px;
      font-size: 18px;
      &:hover {
        background-color: white;
        color: black;
      }
    }
  }
  &-error {
    font-size: 12px;
    font-weight: 700;
    margin-bottom: 5px;
    width: 300px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 2px;
    position: relative;
    top: 5px;
    visibility: hidden;
  }
  &-error-visible {
    font-size: 12px;
    font-weight: 700;
    width: 300px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 2px;
    position: relative;
    top: 15px;
    visibility: hidden;
  }
  .error_visible {
    visibility: visible;
  }
}
</style>
