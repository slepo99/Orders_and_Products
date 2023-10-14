import { defineStore } from "pinia";
import {
  CreateOrder,
  GetOrders,
  DeleteOrder,
  DeleteProduct,
} from "@/services/orderRequests";
import { Order, OrderDescription } from "@/types/OrderType";
export const useOrder = defineStore("order", {
  state: () => ({
    orders: [] as Order[],
    isActive: false as boolean,
    orderId: "" as string,
    showModal: false as boolean,
  }),
  getters: {
    selectedOrder(): Order[] {
      return this.orders.filter((item) => item._id == this.orderId);
    },
  },
  actions: {
    async createOrder(orderData: OrderDescription) {
      try {
        const response = await CreateOrder(orderData);
        console.log(response);
      } catch (error) {
        console.error(error, "Failed to create order");
        throw error;
      }
    },
    async getOrders() {
      const response = await GetOrders();
      this.orders = response.data;
    },
    async deleteOrder(id: string) {
      await DeleteOrder(id);
    },
    async deleteProduct(id: string) {
      const order = this.selectedOrder.map((item) => {
        const filteredProducts = item.products.filter(
          (product) => product._id !== id);
        item.products = filteredProducts;
        return item;
      });
      await DeleteProduct(order[0]);
    },
    showProducts(isActive: boolean) {
      this.isActive = isActive;
    },
    getSelectedOrder(id: string) {
      this.orderId = id;
    },
  },
});
