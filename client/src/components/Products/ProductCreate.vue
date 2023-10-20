<template>
  <ModalWindow :showModal="props.showModal">
    <div class="close-dialog" data-testid="create">
      <button class="close-dialog-btn" @click="closeDialog">
        <img
          width="30"
          height="30"
          src="https://img.icons8.com/ios-glyphs/60/7DAE33/delete-sign.png"
          alt="delete-sign"
        />
      </button>
    </div>
    <div class="container-new-product">
      <div class="container-new-product-title">
        <h2>Fill in all fields to create a product:</h2>
      </div>
      <div class="container-new-product-form">
        <form>
          <div class="container-new-product-form-title">
            <label for="title"> Product name: </label>
            <input
              placeholder="Name"
              type="text"
              id="title"
              v-model="productForm.title"
            />
          </div>

          <div class="container-new-product-form-serial">
            <label for="serial"> Serial number: </label>
            <input
              placeholder="Serial"
              type="number"
              id="serial"
              v-model="productForm.serialNumber"
            />
          </div>

          <div class="container-new-product-form-photo">
            <label for="Photo"> Photo url:</label>
            <input
              placeholder="photo"
              type="text"
              id="photo"
              v-model="productForm.photo"
            />
          </div>

          <div class="container-new-product-form-type">
            <span> Choose type: </span>
            <SelectList :options="specification" v-model="productForm.type" />
          </div>

          <div class="container-new-product-form-status">
            <span>Product status:</span>
            <SelectList :options="status" v-model="productForm.status" />
          </div>

          <div class="container-new-product-form-isnew">
            <span>Is product new</span>
            <SelectList :options="isNew" v-model="productForm.isProductNew" />
          </div>

          <div class="container-new-product-form-specification">
            <span>Choose specification:</span>
            <SelectList
              :options="specification"
              v-model="productForm.specification"
            />
          </div>

          <div class="container-new-product-form-guarantee-start">
            <label for="guarantee_start"> Guarantee start date:</label>
            <input
              type="date"
              v-model="productForm.guarantee.start"
              id="guarantee_start"
            />
          </div>
          <div>
            <label for="container-new-product_form_guarantee-end">
              Guarantee end date:</label
            >
            <input
              type="date"
              v-model="productForm.guarantee.end"
              id="guarantee_end"
            />
          </div>
          <div class="container-new-product-form-price-usd">
            <label for="price_usd"> Enter price in USD: </label>
            <input
              placeholder="$"
              type="text"
              v-model="productForm.price[0].value"
              id="price_usd"
            />
          </div>
          <div class="container-new-product-form-price-uah">
            <label for="price_auh"> Enter price in UAH: </label>

            <input
              placeholder="₴"
              type="text"
              id="price_uah"
              v-model="productForm.price[1].value"
            />
          </div>
        </form>
      </div>
      <div class="container-new-product-form-btn">
        <button
          :disabled="v$.$invalid"
          @click.prevent="createProduct"
          type="submit"
        >
          <span>Add product</span>
        </button>
      </div>
    </div>
  </ModalWindow>
</template>

<script setup lang="ts">
import ModalWindow from "@/UI/ModalWindow.vue";
import SelectList from "@/UI/SelectList.vue";
import { useOrderStore } from "@/store/ordersModule";
import { useProductsStore } from "@/store/productModule";
import { useVuelidate } from "@vuelidate/core";
import productRules from "@/helpers/validations/ProductValidator";
import {
  status,
  isNew,
  specification,
} from "@/helpers/mocks/ProductSelectMocks";
import {
  productForm,
  eraiseProductFields,
} from "@/helpers/common/ProductCreateForm";
const order = useOrderStore();
const productsStore = useProductsStore();
const props = defineProps({
  showModal: {
    type: Boolean,
    required: true,
  },
});
const emit = defineEmits();
const v$ = useVuelidate(productRules, productForm);

async function createProduct() {
  try {
    v$.value.$validate();
    if (v$.value.$invalid) {
      return;
    }
    await productsStore.createProduct(productForm);
    eraiseProductFields();
    await order.getOrders();
    emit("closeNewProductWindow");
  } catch (error) {
    console.log("Login error", error);
    throw error;
  }
}
function closeDialog() {
  emit("closeNewProductWindow");
}
</script>

<style lang="scss" scoped>
.close-dialog {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: black;
  &-btn {
    background: none;
    border: none;
    display: flex;
    align-items: center;
    cursor: pointer;
  }
}
.container-new-product {
  padding: 50px;
  &-title {
    h2 {
      color: black;
    }
  }
  form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 15px;
    div {
      display: grid;
      grid-template-columns: 0.9fr 1fr;
      width: 100%;
      align-items: center;
      label,
      span {
        text-align: start;
        font-size: 18px;
        font-weight: 600;
        color: black;
      }
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
  &-form {
    &-btn {
      margin-top: 40px;
      button {
        width: 140px;
        height: 60px;
        background-color: black;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        span {
          font-size: 18px;
          font-weight: 600;
        }
      }
    }
  }
}
</style>
@/helpers/validations/ProductValidator@/helpers/common/ProductCreateForm
@/store/ordersModule
