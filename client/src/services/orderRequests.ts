import axios, { AxiosResponse } from "axios";
import {  Order, OrderDescription } from "@/types/OrderTypes";
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
export const DeleteOrder = async (id : string | undefined) => {
  return await axiosInstance.delete(`/orders/${id}`)
}
export const PutProduct = async  (order: Order[] | Order) =>  {
  return await axiosInstance.put('/orders', order)
}