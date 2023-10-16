<template>
  <div class="container">
    <div
      v-for="item in order.orders"
      :key="item._id"
      class="container-products"
    >
      <div
        v-for="product in order.filteredProductsByType"
        :key="product._id"
        class="products-list"
      >
        <div class="products-list_marker">
          <div :class="setStatus(product.status)"></div>
        </div>

        <div class="products-list_image">
          <img
            width="100"
            height="54"
            src="../../assets/product.png"
            alt="product_image"
          />
        </div>

        <div class="products-list_info">
          <span class="products-list_info_title">{{
            setProductTitle(product.title)
          }}</span>
          <span class="products-list_info_serial">{{
            product.serialNumber
          }}</span>
        </div>

        <div class="products-list_status">
          <p v-if="product.status" class="products-list_status_free">Free</p>
          <p v-else class="products-list_status_repairing">Repairing</p>
        </div>

        <div class="products-list_guarantee">
          <span class="products-list_guarantee_start">
            <p class="products-list_guarantee_start_from">from:</p>
            {{ setDate(product.guarantee.start) }}</span
          >
          <span class="products-list_guarantee_end">
            <p class="products-list_guarantee_end_to">to:</p>
            {{ setDate(product.guarantee.start) }}</span
          >
        </div>

        <div class="products-list_isnew">
          <span v-if="product.isProductNew">New</span>
          <span v-else>Used</span>
        </div>

        <div class="products-list_price">
          <span class="products-list_price_uah">{{
            setPrice(product.price[0].value, product.price[0].isDefault)
          }}</span>
          <span class="products-list_price_usd">{{
            setPrice(product.price[1].value, product.price[1].isDefault)
          }}</span>
        </div>

        <div class="products-list_type">
          <span>{{ product.type }}</span>
        </div>

        <div class="products-list_order-title">
          <span>{{ setOrderTitle(item.title) }}</span>
        </div>

        <div class="products-list_date">
          {{ setDate(item.date) }}
        </div>
        <DeleteIcon @click="removeProduct(product._id)"/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useOrder } from "@/store/OrdersStore";
import { onMounted } from "vue";
import { months } from "@/helpers/mocks/DateMocks";
import DeleteIcon from "@/UI/DeleteIcon.vue";
const order = useOrder();
function setStatus(status: boolean) {
  if (status == true) {
    return "products-list_marker_free";
  } else if (status == false) {
    return "products-list_marker_busy";
  }
}
function setDate(date: string) {
  const newDate = date.split("-");
  return `${newDate[2]} / ${months[parseInt(newDate[1])]} / ${newDate[0]}`;
}
function setPrice(price: string, isDefault: boolean) {
  if (isDefault) {
    return `₴${price.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
  }
  return `$${price.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
}
function setOrderTitle(title: string) {
  if (title.length > 40) {
    return title.slice(0, 40) + `...`;
  }
  return title;
}
function setProductTitle(title: string) {
  if (title.length > 25) {
    return title.slice(0, 25) + "...";
  }
  return title;
}
async function removeProduct(id: string | undefined) {
  await order.deleteAnyProduct(id);
}
onMounted(() => {
  order.getOrders();
  console.log(Date.now().toString());
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
  border-radius: 8px;
  .container-products {
    display: flex;
    flex-direction: column;
    gap: 15px;

    .products-list {
      cursor: pointer;
      display: grid;
      grid-template-columns: 0.5fr 0.5fr 3fr 1.5fr 2.5fr 1fr 1.2fr 1fr 2fr 1.5fr 1fr;
      border: 0.5px solid rgb(169, 169, 169);
      border-radius: 4px;
      align-items: center;
      background-color: #fff;
      div {
        display: flex;
      }
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

      &_guarantee {
        display: flex;
        flex-direction: column;
        &_start {
          margin: 0;
          display: flex;
          align-items: center;
          flex-direction: row;
          justify-content: space-between;
          font-size: 14px;
          font-weight: 500;
          color: rgb(122, 122, 122);
          &_from {
            color: rgb(172, 170, 170);
            font-size: 12px;
            margin: 0;
          }
        }
        &_end {
          margin: 0;
          display: flex;
          align-items: center;
          flex-direction: row;
          justify-content: space-between;
          font-size: 14px;
          font-weight: 500;
          color: rgb(122, 122, 122);
          &_to {
            color: rgb(172, 170, 170);
            font-size: 12px;
            margin: 0;
          }
        }
      }
      &_info {
        flex-direction: column;
        align-items: flex-start;
        &_title {
          font-weight: 600;
          color: black;
          text-decoration: underline rgb(208, 208, 208);
        }
        &_serial {
          color: rgb(172, 170, 170);
          font-size: 14px;
        }
      }
      &_isnew {
        align-content: center;
        flex-direction: row;
        justify-content: center;
        color: rgb(120, 120, 120);
      }
      &_price {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        color: rgb(122, 122, 122);
      }
      &_type {
        color: rgb(122, 122, 122);
      }
      &_order-title {
        color: rgb(122, 122, 122);
        text-decoration: underline rgb(208, 208, 208);
      }
      &_date {
        font-size: 12px;
        color: rgb(122, 122, 122);
        justify-content: center;
        font-weight: 500;
      }
    }
    .products-list:hover {
    box-shadow: 0 3px 10px rgba(59, 59, 59, 0.4);
    text-align: center;
  }
  }
}
</style>
