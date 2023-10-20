import axios, { AxiosResponse } from "axios";
import { authData } from "@/types/UserTypes";
const baseURL = "http://localhost:3000/auth";

const axiosInstance = axios.create({
  baseURL,
});

export const CreateNewUser = async (regData: authData) => {
  try {
    return await axiosInstance.post("/registration", regData);
  } catch (e) {
    console.log("Failed to create account");
    throw e;
  }
};
export const SignIn = async (loginData: authData) => {
  try {
    return await axiosInstance.post("/login", loginData);
  } catch (e) {
    console.log("login error", e);
    throw e;
  }
};
