import NavigationMenu from "@/components/Navbar/NavigationMenu.vue";
import { render, fireEvent, screen} from "@testing-library/vue";
import { createRouter, createMemoryHistory } from "vue-router";

const routes = [
  { path: "/orders", name: "orders", component: { template: '' }  },
  { path: "/products", name: "products", component: { template: '' }  },
];
const router = createRouter({
  history: createMemoryHistory(),
  routes,
});
describe("Navbar", () => {
  test("renders navigation links and highlights the current page", async () => {

   const { getByTestId, container} =  render(NavigationMenu, {
      global: {
        plugins: [router],
      },
    });

    router.push("/orders");

    const ordersLink = getByTestId("order");
    ordersLink.classList.add("sidebar__link--active");
    expect(ordersLink.classList.contains("sidebar__link--active")).toBe(true);
    fireEvent.click(ordersLink)
    

    router.push("/products");
    screen.debug()
    const productLink = getByTestId("products");
    productLink.classList.add("sidebar__link--active");
    expect(productLink.classList.contains("sidebar__link--active")).toBe(true);
    fireEvent.click(productLink)
  });
});
