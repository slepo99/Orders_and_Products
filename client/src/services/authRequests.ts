import axios, { AxiosResponse } from "axios";
import { authData } from "@/types/UserTypes";
const baseURL = "http://localhost:3000/auth";

const axiosInstance = axios.create({
  baseURL,
});

export const CreateNewUser = async (regData: authData) => {
  return await axiosInstance.post("/registration", regData);
};
export const SignIn = async (loginData: authData) => {
  return await axiosInstance.post("/login", loginData);
};
