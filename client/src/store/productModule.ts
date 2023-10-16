// import { defineStore } from "pinia";
// import { PutProduct } from "@/services/orderRequests";
// import { Order } from "@/types/OrderTypes";
// import { ProductPost } from "@/types/ProductTypes";


// export const useProductsStore = defineStore("products", {
  
//   state: () => ({
//     isActive: false as boolean,
//     showModal: false as boolean,
//     selectedType: "" as string | null,
//   }),
//   getters: {
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
//     async deleteProduct(id: string | undefined, order: Order[]) {
//       const updatedOrder = order.map((item) => {
//         const filteredProducts = item.products.filter(
//           (product) => product._id !== id
//         );
//         item.products = filteredProducts;
//         return item;
//       });
//       await PutProduct(updatedOrder[0]);
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
   
//     setSelectedType(type: string | null) {
//       this.selectedType = type;
//     },
//   },
// });
