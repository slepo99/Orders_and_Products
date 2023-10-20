import axios, { AxiosResponse } from "axios";
import { Order, OrderDescription } from "@/types/OrderTypes";
const baseURL = "http://localhost:3000/api";

const axiosInstance = axios.create({
  baseURL,
});

export const CreateOrder = async (
  orderData: OrderDescription
): Promise<AxiosResponse<OrderDescription>> => {
  return await axiosInstance.post("/orders", orderData);
};
export const GetOrders = async () => {
  return await axiosInstance.get("/orders");
};
export const DeleteOrder = async (id: string | undefined) => {
  try {
    return await axiosInstance.delete(`/orders/${id}`);
  } catch (e) {
    console.log("Failed to delete order", e);
  }
};
export const PutProduct = async (order: Order[] | Order) => {
  try {
    await axiosInstance.put("/orders", order);
  } catch (e) {
    console.log(e, "Failed to delete product");
  }
};
