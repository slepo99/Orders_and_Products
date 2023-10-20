import { defineStore } from "pinia";
import { CreateOrder, GetOrders, DeleteOrder } from "@/services/orderRequests";
import { Order, OrderDescription } from "@/types/OrderTypes";

export const useOrderStore = defineStore("order", {
  state: () => ({
    orders: [] as Order[],
    isActive: false as boolean,
    orderId: "" as string,
    showModal: false as boolean,
    searchValue: "" as string,
    isLoading: false as boolean,
  }),
  getters: {
    selectedOrder: (state): Order[] => {
      return state.orders.filter((item) => item._id == state.orderId).flat();
    },
    searchOrder: (state): Order[] => {
      if (!state.searchValue) {
        return state.orders;
      } else {
        return state.orders.filter((item) => {
          return item.title
            .toLowerCase()
            .includes(state.searchValue.toLowerCase());
        });
      }
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
      try {
        this.isLoading = true;
        const response = await GetOrders();
        this.orders = response.data;
        this.isLoading = false;
      } catch (error) {
        console.error("Failed to get order");
        throw error;
      }
    },

    async deleteOrder(id: string) {
      try {
        await DeleteOrder(id);
      } catch (error) {
        console.error("Failed to delete order");
        throw error;
      }
    },

    getSelectedOrder(id: string) {
      this.orderId = id;
    },
    setSearchValue(value: string) {
      this.searchValue = value;
    },
  },
});
