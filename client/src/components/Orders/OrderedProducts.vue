<template>
  <div class="container-products" data-testid="add">
    <div class="container-products__close-dialog">
      <button
        class="container-products__close-dialog-btn"
        @click="hideProducts"
      >
        <img
          width="14"
          height="14"
          src="https://img.icons8.com/material-outlined/24/C7C7C7/delete-sign.png"
          alt="delete-sign"
        />
      </button>
    </div>
    <div v-for="(item, id) in order.selectedOrder" :key="id">
      <div class="container-products__title-box">
        <h3>{{ item.title }}</h3>
      </div>
      <div
        @click="openNewProductWindow"
        class="container-products__add-product"
      >
        <button
          class="container-products__add-product-btn"
          data-testid="add-new-product"
        >
          <img
            width="22"
            height="22"
            src="https://img.icons8.com/color/96/add--v1.png"
            alt="add"
          />
          <p class="container-products__add-product-btn-text">Add product</p>
        </button>
      </div>
      <div class="container-products__product-wrapper">
        <div v-for="product in item.products" :key="product._id">
          <hr />
          <div class="container-products__product" data-testid="product">
            <div
              :class="setStatus(product.status)"
              class="container-products__product-status-dot"
            ></div>
            <div class="container-products__product-image">
              <img width="100" height="54" src="../../assets/product.png" />
            </div>
            <div class="container-products__product-title">
              <p class="container-products__product-title-name">
                {{ product.title }}
              </p>
              <p class="container-products__product-title-serial">
                {{ product.serialNumber }}
              </p>
            </div>
            <div class="container-products__product-status">
              <p
                v-if="product.status"
                class="container-products__product-status-free"
              >
                Free
              </p>
              <p v-else class="container-products__product-status-repairing">
                Repairing
              </p>
            </div>
            <DeleteIcon @click="removeProduct(product._id)" />
          </div>
          <hr v-show="product == item.products[item.products.length - 1]" />
        </div>
      </div>
      <ProductCreate
        data-testid="modal"
        @closeNewProductWindow="closeNewProductWindow"
        :showModal="showModal"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useOrderStore } from "@/store/OrdersStore";
import { useProductsStore } from "@/store/productModule";
import { ref } from "vue";
import ProductCreate from "@/components/Products/ProductCreate.vue";
import DeleteIcon from "@/UI/DeleteIcon.vue";
const productsStore = useProductsStore();
const order = useOrderStore();
const showModal = ref<boolean>(false);
function setStatus(status: boolean) {
  if (status == true) {
    return "container-products__product-status-dot-free";
  } else if (status == false) {
    return "container-products__product-status-dot-busy";
  }
}
function hideProducts() {
  productsStore.hideProducts();
}
function closeNewProductWindow() {
  showModal.value = false;
}
function openNewProductWindow() {
  showModal.value = true;
}
async function removeProduct(id: string | undefined) {
  await productsStore.deleteSelectedOrdersProduct(id);
}
</script>

<style lang="scss" scoped>
.container-products {
  transition: width 0.5s ease;
  &__close-dialog {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    position: relative;
    top: 2px;
    left: 12px;
    align-items: center;
    height: 0;
    transition: width 0.5s ease;
    &-btn {
      background: none;
      border: 1px solid rgb(199, 199, 199);
      justify-content: center;
      border-radius: 50%;
      display: flex;
      align-items: center;
      cursor: pointer;
      height: 30px;
      width: 30px;
      box-shadow: 0 3px 10px rgba(59, 59, 59, 0.4);
    }
  }
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 40vw;
  border: 1px solid rgb(204, 204, 204);
  border-radius: 6px;
  transition: width 0.5s ease;
  background-color: #fff;
  height: 600px;

  &__title-box {
    display: flex;
    height: 50px;

    h3 {
      padding-left: 25px;
    }
  }
  &__add-product {
    height: 50px;
    display: flex;
    cursor: pointer;
    &-btn {
      background: none;
      border: none;
      padding-left: 25px;
      cursor: pointer;
      display: flex;
      align-items: center;
      &-text {
        padding-left: 5px;
        color: green;
        font-weight: 600;
        margin: 0;
      }
    }
  }
  &__product-wrapper {
    height: 500px;
    overflow: scroll;
    .container-products__product {
      height: auto;
      overflow: scroll;
      cursor: pointer;
      grid-template-columns: 0.5fr 0.5fr 2fr 1fr 1fr;
      display: grid;
      justify-content: space-around;
      align-items: center;
      align-content: center;
      justify-items: center;
      &-status-dot-free {
        width: 10px;
        height: 10px;
        border-radius: 5px;
        background: #57bc57;
      }
      &-status-dot-busy {
        width: 10px;
        height: 10px;
        border-radius: 5px;
        background: #d31f1f;
      }
      &-title {
        width: 100%;
        p {
          margin: 0;
        }
      }
      &-status {
        &-free {
          font-weight: 500;
          color: #57bc57;
        }
        &-repairing {
          font-weight: 500;
          color: #c92828;
        }
      }
      &-title {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        &-name {
          color: black;
          font-weight: 600;
        }
        &-serial {
          color: rgb(161, 161, 161);
        }
      }
      &_delete {
        button {
          border: none;
          background: none;
          cursor: pointer;
        }
      }
    }
    .container-products__product:hover {
      box-shadow: 0 3px 10px rgba(59, 59, 59, 0.4);
    }
  }
  hr {
    width: 100%;
    height: 1px;
    background-color: rgb(204, 204, 204);
    border: 0;
    margin: 0;
  }
}
@media (max-width: 1200px) {
  .container-products {
    &__title-box {
      h3 {
        padding-left: 25px;
        font-size: 16px;
        text-align: start;
      }
    }
  }
}
@media (max-width: 980px) {
  .container-products {
    transition: width 0.5s ease;
    position: relative;
    left: 80px;
    height: 500px;

    &__title-box {
      h3 {
        padding-left: 25px;
        font-size: 14px;
        text-align: start;
      }
    }
  }
}
@media (max-width: 720px) {
  .container-products {
    position: relative;
    height: 500px;
    &__title-box {
      h3 {
        padding-left: 25px;
        font-size: 14px;
        text-align: start;
      }
    }
    &__product-wrapper {
      .container-products__product {
        &-status-dot-free {
          width: 5px;
          height: 5px;
        }
        &-status-dot-busy {
          width: 5px;
          height: 5px;
        }
        &-title {
          p {
            font-size: 12px;
          }
        }
        &-status {
          display: none;
        }
      }
    }
  }
}
</style>
