import { reactive } from "vue";
import { ProductPost } from "@/types/ProductTypes";
import { useOrder } from "@/store/OrdersStore";
const order = useOrder();
const productForm = reactive<ProductPost>({
  serialNumber: 0,
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
      value: 0,
      symbol: "USD",
      isDefault: true,
    },
    {
      value: 0,
      symbol: "UAH",
      isDefault: true,
    },
  ],
  order: Number(order.selectedOrder.map((i) => i.products.length + 1)),
  date: Date.now().toString(),
  isProductNew: true,
});
export default productForm;
