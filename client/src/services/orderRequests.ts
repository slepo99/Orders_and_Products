import axios, { AxiosResponse } from "axios";
import {  Order, OrderDescription } from "@/types/OrderType";
const baseURL = "http://localhost:3000/api";

const axiosInstance = axios.create({
  baseURL,
});

export const CreateOrder = async (orderData: OrderDescription): Promise<AxiosResponse<OrderDescription>> => {
  return await axiosInstance.post("/orders", orderData);
};
export const GetOrders = async () => {
  return await axiosInstance.get("/orders")
}
export const DeleteOrder = async (id : string) => {
  return await axiosInstance.delete(`/orders/${id}`)
}
export const DeleteProduct = async  (order: Order) =>  {
  return await axiosInstance.put('/orders', order)
}