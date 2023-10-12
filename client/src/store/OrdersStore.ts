import { defineStore } from "pinia";
import { CreateOrder, GetOrders } from "@/services/orderRequests";
import { Order } from "@/types/Order";
export const useOrder = defineStore("order", {
  state: () => ({
    orders: [] as Order[]
  }),
  getters: {},
  actions: {
    async createOrder(orderData: Order) {
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
      this.orders = response.data
    }
  },
});
