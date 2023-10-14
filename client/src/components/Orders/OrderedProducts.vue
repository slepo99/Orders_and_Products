<template>
  <div class="container-products">
    <div v-for="(item, id) in order.selectedOrder" :key="id">
      <div class="title-box">
        <h3>{{ item.title }}</h3>
      </div>
      <div  @click="openNewProductWindow" class="add-product">
        <button class="add-product_btn">
          <img
            width="22"
            height="22"
            src="https://img.icons8.com/color/96/add--v1.png"
            alt="add--v1"
          />
          <p class="add-product_btn_text">Add product</p>
        </button>
        
      </div>
      <div class="product-wrapper">
        <div v-for="product in item.products" :key="product._id">
          <hr />
          <div class="product">
            <div :class="setStatus(product.status)"></div>
            <div class="product_image">
              <img width="100" height="54" src="../../assets/product.png" />
            </div>
            <div class="product_title">
              <p class="product_title_name">{{ product.title }}</p>
              <p class="product_title_serial">{{ product.serialNumber }}</p>
            </div>
            <div class="product_status">
              <p>{{ product.status }}</p>
            </div>
            <div class="product_delete">
              <button @click="removeProduct(product._id)">
                <img
                  width="24"
                  height="24"
                  src="https://img.icons8.com/material/96/808080/trash--v1.png"
                  alt="trash--v1"
                />
              </button>
            </div>
          </div>
          <hr v-show="product == item.products[item.products.length - 1]" />
        </div>
      </div>
      <CreateProduct :showModal="showModal"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useOrder } from "@/store/OrdersStore";
import { ref } from 'vue'
import CreateProduct from "./CreateProduct.vue";
const order = useOrder();
const showModal = ref<boolean>(false)
function setStatus(status: string) {
  if (status == "Free") {
    return "product_free";
  } else if (status == "Busy") {
    return "product_busy";
  }
}
function openNewProductWindow() {
  showModal.value = true
}
async function removeProduct(id: string) {
  await order.deleteProduct(id);
}
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
  background-color: #fff;
  max-height: 60vh;
  overflow: scroll;

  .title-box {
    display: flex;

    h3 {
      padding-left: 25px;
    }
  }
  .add-product {
    display: flex;
    margin-bottom: 10px;
    cursor: pointer;
    &_btn {
      background: none;
      border: none;
      padding-left: 25px;
      cursor: pointer;
      display: flex;
      align-items: center;
      &_text {
      padding-left: 5px;
      color: green;
      font-weight: 600;
      margin: 0;
    }
    }
   
  }
  .product-wrapper {
    overflow: scroll;

    .product {
      cursor: pointer;
      grid-template-columns: 0.5fr 1fr 1fr 1fr 1fr;
      display: grid;
      justify-content: space-around;
      align-items: center;
      align-content: center;
      justify-items: center;
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
      &_title {
        p {
          margin: 0;
        }
      }
      &_status {
        p {
          font-weight: 500;
          color: #57bc57;
        }
      }
      &_title {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        &_name {
          color: black;
          font-weight: 600;
        }
        &_serial {
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
    .product:hover {
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
</style>
