import { defineStore } from "pinia";
import { CreateNewUser, SignIn } from "@/services/authRequests";
import { authData } from "@/types/UserTypes";
import router from "@/router";
export const useAuthStore = defineStore("auth", {
  state: () => ({
    token: localStorage.getItem("token") || null,
    username: localStorage.getItem("username") || null,
  }),
  actions: {
    async createNewUser(regData: authData) {
      try {
        await CreateNewUser(regData);
        router.push("/login");
      } catch (error) {
        console.error(error, "Failed register new user");
        throw error;
      }
    },
    async loginUser(loginData: authData) {
      try {
        const response = await SignIn(loginData);
        const token = response.data.token || "";
        const username = response.data.user.username || "";
        await Promise.all([
          localStorage.setItem("token", token),
          localStorage.setItem("username", username),
        ]);
        this.token = token;
        this.username = username;
        router.push("/orders");
      } catch (error) {
        console.error(error, "Failed to login");
        throw error;
      }
    },
    async logoutUser() {
      try {
        await Promise.all([
          localStorage.removeItem("token"),
          localStorage.removeItem("username"),
          (this.token = null),
          (this.username = null),
        ]);
        router.push("/login");
      } catch (error) {
        console.error("Failed to logout");
        throw error;
      }
    },
  },
});
