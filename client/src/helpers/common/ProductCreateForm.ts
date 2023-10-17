import { reactive } from "vue";
import { ProductPost } from "@/types/ProductTypes";
import { useOrderStore } from "@/store/OrdersStore";
import { setActivePinia, createPinia } from "pinia";
setActivePinia(createPinia());

const order = useOrderStore();

export const productForm = reactive<ProductPost>({
  serialNumber: "",
  status: true,
  photo: "",
  title: "",
  type: "",
  specification: "",
  guarantee: {
    start: "",
    end: "",
  },
  price: [
    {
      value: "",
      symbol: "USD",
      isDefault: false,
    },
    {
      value: "",
      symbol: "UAH",
      isDefault: true,
    },
  ],
  order: Number(order.selectedOrder.map((i) => i.products.length + 1)),
  date: Date.now().toString(),
  isProductNew: true,
});
export const eraiseProductFields = () => {
  productForm.serialNumber = "";
  productForm.status = true;
  productForm.photo = "";
  productForm.title = "";
  productForm.type = "";
  productForm.specification = "";
  productForm.guarantee.start = "";
  productForm.guarantee.end = "";
  productForm.price[0].value = "";
  productForm.price[1].value = "";
};
