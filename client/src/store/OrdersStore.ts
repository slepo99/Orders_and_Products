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
      const response = await GetOrders();
      this.orders = response.data;
    },

    async deleteOrder(id: string) {
      await DeleteOrder(id);
    },

    getSelectedOrder(id: string) {
      this.orderId = id;
    },
    setSearchValue(value: string) {
      this.searchValue = value;
    },
  },
});

// import { defineStore } from "pinia";
// import {
//   CreateOrder,
//   GetOrders,
//   DeleteOrder,
//   PutProduct,
// } from "@/services/orderRequests";
// import { Order, OrderDescription } from "@/types/OrderTypes";
// import { ProductPost } from "@/types/ProductTypes";
// export const useOrderStore = defineStore("order", {
//   state: () => ({
//     orders: [] as Order[],
//     isActive: false as boolean,
//     orderId: "" as string,
//     showModal: false as boolean,
//     selectedType: "" as string | null,
//   }),
//   getters: {
//     selectedOrder: (state): Order[] => {
//       return state.orders.filter((item) => item._id == state.orderId).flat();
//     },
//     filteredProductsByType: (state) => {
//       if (state.selectedType == null || state.selectedType == "") {
//         const filteredProduct = state.orders.map((i) => i.products);
//         return filteredProduct.flat();
//       } else {
//         const filteredProduct = state.orders.map((i) => {
//           return i.products.filter((item) => item.type == state.selectedType);
//         });
//         return filteredProduct.flat();
//       }
//     },
//   },
//   actions: {
//     async createOrder(orderData: OrderDescription) {
//       try {
//         const response = await CreateOrder(orderData);
//         console.log(response);
//       } catch (error) {
//         console.error(error, "Failed to create order");
//         throw error;
//       }
//     },

//     async getOrders() {
//       const response = await GetOrders();
//       this.orders = response.data;
//     },

//     async deleteOrder(id: string) {
//       await DeleteOrder(id);
//     },

//     async deleteProduct(id: string | undefined, order: Order[]) {
//       const orderIndex = order.findIndex((order) =>
//         order.products.some((product) => product._id === id)
//       );

//       if (orderIndex !== -1) {
//         order[orderIndex].products = order[orderIndex].products.filter(
//           (product) => product._id !== id
//         );

//         const updatedOrder = order[orderIndex];
//         await PutProduct(updatedOrder);
//       } else {
//         console.log("Product not found");
//       }
//     },
//     async deleteSelectedOrdersProduct(id: string | undefined) {
//       return this.deleteProduct(id, this.selectedOrder);
//     },
//     async deleteAnyProduct(id: string | undefined) {
//       return this.deleteProduct(id, this.orders);
//     },
//     async createProduct(product: ProductPost) {
//       const updatedOrder = this.selectedOrder.map((i) => {
//         if (i) {
//           i.products.push(product);
//         }
//         return i;
//       });
//       await PutProduct(updatedOrder[0]);
//     },

//     showProducts(isActive: boolean) {
//       this.isActive = isActive;
//     },
//     hideProducts() {
//       this.isActive = false;
//     },
//     getSelectedOrder(id: string) {
//       this.orderId = id;
//     },
//     setSelectedType(type: string | null) {
//       this.selectedType = type;
//     },
//   },
// });
