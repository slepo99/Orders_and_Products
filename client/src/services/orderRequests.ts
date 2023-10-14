import axios, { AxiosResponse } from "axios";
import {  OrderDescription } from "@/types/Order";
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