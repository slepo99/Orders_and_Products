import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
const Orders = () => import("@/views/Orders.vue");
const Products = () => import("@/views/Products.vue")
const Registration = () => import("@/views/Registration.vue");
const Login = () => import("@/views/Login.vue")
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "products",
    component: Products,
    beforeEnter: (_to, _from, next) => {
      if (localStorage.getItem("token")) {
        next();
      } else {
        next({ name: "login" });
      }
    },
  },
  {
    path: "/orders",
    name: "orders",
    component: Orders,
    beforeEnter: (_to, _from, next) => {
      if (localStorage.getItem("token")) {
        next();
      } else {
        next({ name: "login" });
      }
    },
  },
  {
    path: "/login",
    name: "login",
    component: Login,
    beforeEnter: (_to, _from, next) => {
      if (!localStorage.getItem("token")) {
        next();
      } else {
        next({ name: "products" });
      }
    },
  },
  {
    path: "/registration",
    name: "registration",
    component: Registration,
    beforeEnter: (_to, _from, next) => {
      if (!localStorage.getItem("token")) {
        next();
      } else {
        next({ name: "login" });
      }
    },
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
