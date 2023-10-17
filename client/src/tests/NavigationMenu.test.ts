import NavigationMenu from "@/components/Navbar/NavigationMenu.vue";
import { render, screen, fireEvent } from "@testing-library/vue";
import { createRouter, createMemoryHistory } from "vue-router";

const routes = [
  { path: "/orders", name: "orders", component: { template: '' }  },
  { path: "/", name: "products", component: { template: '' }  },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});
describe("Navbar", () => {
  test("renders navigation links and highlights the current page", async () => {

     render(NavigationMenu, {
      global: {
        plugins: [router],
      },
    });

    router.push("/orders");

    const ordersLink = screen.getByTestId("order");
    ordersLink.classList.add("current_page");

    expect(ordersLink.classList.contains("current_page")).toBe(true);

    router.push("/products");

    const productLink = screen.getByTestId("products");

    productLink.classList.add("current_page");

    expect(productLink.classList.contains("current_page")).toBe(true);
  });
});
