import SearchBar from "@/components/Header/SearchBar.vue";
import { expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/vue";


afterEach(() => {
  vi.clearAllMocks();
  vi.resetAllMocks();
  vi.restoreAllMocks();
});
const router = {
  currentRoute: {
    value: {
      name: "products",
    },
  },
};

const productsStore = {
  setSearchValue: vi.fn(),
};

const orderStore = {
  setSearchValue: vi.fn(),
};

const localStorage = {
  getItem: vi.fn(),
};
describe("Input", () => {
  test.only("updates the search value when typing in the input", async () => {
    const { getByPlaceholderText } = render(SearchBar, {
      global: {
        mocks: {
          $router: router,
          useProductsStore: () => productsStore,
          useOrderStore: () => orderStore,
          localStorage,
        },
      },
    });
    const inputElement = getByPlaceholderText("Search") as HTMLInputElement;
    await fireEvent.update(inputElement, "test");

    expect(inputElement.value).toBe("test");
    screen.debug();
  });
  test("return empty string in default state", async () => {
    const { getByPlaceholderText } = render(SearchBar, {
      global: {
        plugins: [router],
      },
    });
    const inputElement = getByPlaceholderText("Search") as HTMLInputElement;
    expect(inputElement.value).toBe("");
  });
});
