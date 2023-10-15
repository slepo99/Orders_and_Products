import { reactive } from "vue";
import { ProductPost } from "@/types/ProductTypes";
import { useOrder } from "@/store/OrdersStore";
const order = useOrder();

 export const productForm = reactive<ProductPost>({
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
      isDefault: false,
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
 export const eraiseProductFields = () => {
  productForm.serialNumber = 0
  productForm.status = true
  productForm.photo = ''
  productForm.title = ''
  productForm.type = ''
  productForm.specification = ''
  productForm.guarantee.start = ''
  productForm.guarantee.end = ''
  productForm.price[0].value = 0
  productForm.price[1].value = 0
}


