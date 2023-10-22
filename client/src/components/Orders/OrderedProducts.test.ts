import OrderedProducts from "./OrderedProducts.vue";
import { render, fireEvent, screen } from "@testing-library/vue";

describe("Ordered Products", () => {
  afterEach(() => {
    vi.clearAllMocks();
  });
  test("should render products", async () => {
    render(OrderedProducts);
    expect(OrderedProducts).not.toBe(null);
  });
  test("should have a close button and close the modal when clicked", async () => {
    const { getByRole } = render(OrderedProducts);
    const hideBtn = getByRole("button");
    fireEvent.click(hideBtn);
    expect(hideBtn).not.toBeNull();
  });

  test("should open selected orders propucts and render products", async () => {
    const order = {
      selectedOrder: {
        item: {
          title: "order title",
          products: {
            product: {
              title: "product title",
              serialNumber: "12345",
              status: true,
            },
          },
        },
      },
    };

    render(OrderedProducts, {
      global: {
        mocks: {
          order,
          isActive: true,
        },
      },
    });

    const orderTitle = await screen.findByText("order title");
    expect(orderTitle).toBe;
    const productTitle = await screen.findByText("product title");
    expect(productTitle).toBe;
    const serialNumber = await screen.findByText("12345");
    expect(serialNumber).toBe;
    const status = await screen.findByText("Free");
    expect(status).toBe;
  });

  test("delete button should remove product", async () => {
    const order = {
      selectedOrder: {
        item: {
          title: "order titledsccsdsc",
          products: [
            {
              product: {
                title: "product title",
                serialNumber: "12345",
                status: true,
              },
            },
          ],
        },
      },
    };

    const { findAllByTestId } = render(OrderedProducts, {
      global: {
        mocks: {
          order,
          isActive: true,
        },
      },
    });

    screen.debug();
    const deleteButton = await findAllByTestId("product-delete");
    expect(deleteButton).toBe;
    await fireEvent.click(deleteButton[0]);
    const title = screen.queryAllByText("product title");
    expect(title).toBeNull;
  });
});
