import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
const Orders = () => import("@/views/Orders.vue");
const Products = () => import("@/views/Products.vue");
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "products",
    component: Products,
  },
  {
    path: "/orders",
    name: "orders",
    component: Orders,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
