import axios, { AxiosResponse } from "axios";
import { Order } from "@/types/Order";
const baseURL = "http://localhost:3000/api";

const axiosInstance = axios.create({
  baseURL,
});

export const CreateOrder = async (orderData: Order): Promise<AxiosResponse<Order>> => {
  return await axiosInstance.post("/orders", orderData);
};
export const GetOrders = async () => {
  return await axiosInstance.get("/orders")
}