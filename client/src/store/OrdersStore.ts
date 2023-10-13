import { defineStore } from "pinia";
import { CreateOrder, GetOrders } from "@/services/orderRequests";
import { Order, OrderDescription } from "@/types/Order";
export const useOrder = defineStore("order", {
  state: () => ({
    orders: [] as Order[],
    isActive: false as boolean,
    orderId: "" as string,
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
    showProducts(isActive: boolean) {
      this.isActive = isActive;
    },
    getSelectedOrder(id: string) {
      this.orderId = id;
    },
  },
});
