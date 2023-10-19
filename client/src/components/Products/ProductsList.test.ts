// import ProductsList from "./ProductsList.vue";
// import Products from "@/views/Products.vue";
// import { useProductsStore } from "@/store/productModule";
// import { render, fireEvent ,screen } from "@testing-library/vue";
// import { setActivePinia, createPinia } from "pinia";

// beforeEach(() => {
//   useProductsStore()
//   setActivePinia(createPinia());
// });
// describe("Product list", () => {
  
//   test("should render product list", async () => {
//     render(ProductsList);
//     expect(ProductsList).not.toBeNull();
// screen.debug()
//   });

//   test("should render product list with data", async () => {
//     const product = useProductsStore()
//     // const productData = [
//     //   {
//     //     _id: "1",
//     //     status: true,
//     //     title: "Product 1",
//     //     serialNumber: "12345",
//     //     isProductNew: true,
//     //     price: [
//     //       { value: "100", isDefault: true },
//     //       { value: "80", isDefault: false },
//     //     ],
//     //   },
//     //   {
        
//     //     _id: "2",
//     //     status: false,
//     //     title: "Product 2",
//     //     serialNumber: "54321",
//     //     isProductNew: false,
//     //     price: [
//     //       { value: "75", isDefault: true },
//     //       { value: "60", isDefault: false },
//     //     ],
//     //   },
//     // ];
//     render(Products)
//     const { getByText, getByAltText } = render(ProductsList, {
//      props: {
//       productStore: {
//         searchProducts: product,
//       },
//      }
//     });

//     // expect(getByText("Product 1")).toBe;
//     // expect(getByText("12345")).toBeTruthy();
//     // expect(getByText("New")).toBeTruthy();
//     // expect(getByText("₴100")).toBeTruthy();
//     // expect(getByText("$80")).toBeTruthy();

//     // expect(getByText("Product 2")).toBeTruthy();
//     // expect(getByText("54321")).toBeTruthy();
//     // expect(getByText("Used")).toBeTruthy();
//     // expect(getByText("₴75")).toBeTruthy();
//     // expect(getByText("$60")).toBeTruthy();

//     // const deleteButton = getByAltText("Delete Product");
//     // expect(deleteButton).toBeTruthy();
//   });
// });
