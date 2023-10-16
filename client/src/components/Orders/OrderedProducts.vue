<template>
    
    <div class="container-products">
      <div class="close-dialog">
      <button class="close-dialog_btn" @click="hideProducts">
        <img width="14" height="14" src="https://img.icons8.com/material-outlined/24/C7C7C7/delete-sign.png" alt="delete-sign"/>
      </button>
    </div>
    <div v-for="(item, id) in order.selectedOrder" :key="id">
      <div class="title-box">
        <h3>{{ item.title }}</h3>
      </div>
      <div @click="openNewProductWindow" class="add-product">
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
              <p v-if="product.status" class="product_status_free">Free</p>
              <p v-else class="product_status_repairing"> Repairing</p>
            </div>
            <DeleteIcon @click="removeProduct(product._id)"/>
          </div>
          <hr v-show="product == item.products[item.products.length - 1]" />
        </div>
      </div>
      <ProductCreate
        @closeNewProductWindow="closeNewProductWindow"
        :showModal="showModal"
      />
    </div>
  </div>
 
</template>

<script setup lang="ts">
import { useOrder } from "@/store/OrdersStore";
import { ref } from "vue";
import ProductCreate from "@/components/Products/ProductCreate.vue";
import DeleteIcon from "@/UI/DeleteIcon.vue";
const order = useOrder();
const showModal = ref<boolean>(false);
function setStatus(status: boolean) {
  if (status == true) {
    return "product_free";
  } else if (status == false) {
    return "product_busy";
  }
}
function hideProducts() {
order.hideProducts()
}
function closeNewProductWindow() {
  showModal.value = false;
}
function openNewProductWindow() {
  showModal.value = true;
}
async function removeProduct(id: string | undefined) {
  await order.deleteSelectedOrdersProduct(id);
}
</script>

<style lang="scss" scoped>


.container-products {
  transition: width 0.5s ease;
  .close-dialog {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  position: relative;
  top: 2px;
  left: 12px;
  align-items: center;
  height: 0;
  transition: width 0.5s ease;
  &_btn {
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
  

  .title-box {
    display: flex;
    height: 50px;

    h3 {
      padding-left: 25px;
    }
  }
  .add-product {
    height: 50px;
    display: flex;
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
   height: 500px;
   overflow: scroll;
    .product {
      height: auto;
      overflow: scroll;
      cursor: pointer;
      grid-template-columns: 0.5fr 0.5fr 2fr 1fr 1fr;
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
        width: 100%;
        p {
          margin: 0;
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
