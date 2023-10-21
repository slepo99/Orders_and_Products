import ProductsList from "./ProductsList.vue";
import { render, fireEvent, screen } from "@testing-library/vue";
import { setActivePinia, createPinia } from "pinia";
beforeEach(() => {
  setActivePinia(createPinia());
});

describe("Product filter", () => {
  afterEach(() => {
    vi.clearAllMocks();
  });
  const productStore = {
    searchProducts: {
      product: {
        title: "gaming laptop",
        guarantee: {
          start: "12-12-2023",
          end: "01-01-2023",
        },
        price: [
          {
            value: "12345",
            isDefault: true,
          },
          {
            value: "12345",
            isDefault: false,
          },
        ],
      },
    },
  };
  test("should render new product component", async () => {
    render(ProductsList);
    expect(ProductsList).not.toBeNull();
  });

  test("if orders list is empty", async () => {
    const { queryByTestId } = render(ProductsList);
    const productsForm = queryByTestId("products");
    expect(productsForm).toBeNull();
  });
  test("should render products if exists", async () => {
    const { findByText } = render(ProductsList, {
      global: {
        mocks: {
          productStore,
        },
      },
    });
    const title = findByText("gamig laptop");
    const guarantee = findByText("12 / December / 2023");
    const price = findByText("$12,345");
    expect(title).not.toBeNull();
    expect(guarantee).not.toBeNull();
    expect(price).not.toBeNull();
  });
  test("should be deleted if press delete ptn", async () => {
    const { findByAltText, queryByText } = render(ProductsList, {
      global: {
        mocks: {
          productStore,
        },
      },
    });
    const deleteBtn = await findByAltText("trash");
    expect(deleteBtn).toBe;
    fireEvent.click(deleteBtn);
    const title = queryByText("gaming laptop");
    expect(title).toBeNull;
    screen.debug();
  });
});
