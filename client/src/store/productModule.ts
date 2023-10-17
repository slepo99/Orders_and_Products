import { defineStore } from "pinia";
import { PutProduct } from "@/services/orderRequests";
import { Order, ProductGet } from "@/types/OrderTypes";
import { ProductPost } from "@/types/ProductTypes";
import { useOrderStore } from "./OrdersStore";

export const useProductsStore = defineStore("products", {
  state: () => ({
    isActive: false as boolean,
    selectedType: "" as string | null,
    searchValue: "" as string,
  }),
  getters: {
    filteredProductsByType: (state): ProductGet[] => {
      const orderStore = useOrderStore();
      if (state.selectedType == null || state.selectedType == "") {
        const filteredProduct = orderStore.orders.map((i) => i.products);
        return filteredProduct.flat();
      } else {
        const filteredProduct = orderStore.orders.map((i) => {
          return i.products.filter((item) => item.type == state.selectedType);
        });
        return filteredProduct.flat();
      }
    },
    searchProducts(): ProductGet[] {
      if (this.searchValue == null || this.searchValue == "") {
        return this.filteredProductsByType;
      } else {
        return this.filteredProductsByType.filter((i) => {
          return i.title.toLowerCase().includes(this.searchValue.toLowerCase());
        });
      }
    },
  },
  actions: {
    async deleteProduct(id: string | undefined, order: Order[]) {
      const orderIndex = order.findIndex((order) =>
        order.products.some((product) => product._id === id)
      );

      if (orderIndex !== -1) {
        order[orderIndex].products = order[orderIndex].products.filter(
          (product) => product._id !== id
        );

        const updatedOrder = order[orderIndex];
        await PutProduct(updatedOrder);
      } else {
        console.log("Product not found");
      }
    },
    async deleteSelectedOrdersProduct(id: string | undefined) {
      const orderStore = useOrderStore();
      return this.deleteProduct(id, orderStore.selectedOrder);
    },
    async deleteAnyProduct(id: string | undefined) {
      const orderStore = useOrderStore();
      return this.deleteProduct(id, orderStore.orders);
    },
    async createProduct(product: ProductPost) {
      const orderStore = useOrderStore();
      const updatedOrder = orderStore.selectedOrder.map((i) => {
        if (i) {
          i.products.push(product);
        }
        return i;
      });
      await PutProduct(updatedOrder[0]);
    },

    showProducts(isActive: boolean) {
      this.isActive = isActive;
    },
    hideProducts() {
      this.isActive = false;
    },

    setSelectedType(type: string | null) {
      this.selectedType = type;
    },
    setSearchValue(value: string) {
      this.searchValue = value;
    },
  },
});
