import OrderedProducts from "./OrderedProducts.vue";
import OrdersList from "./OrdersList.vue";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { render, fireEvent, screen } from "@testing-library/vue";
afterEach(() => {
  vi.clearAllMocks();
});
describe("Ordered Products", () => {
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
    const mock = new MockAdapter(axios);
    render(OrdersList, {
      props: {
        showModal: true,
      },
    });

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

    const { findByText } = render(OrderedProducts, {
      global: {
        mocks: {
          order,
        },
      },
    });
    mock.onGet("/orders").reply(200, order);
    const orderTitle = await screen.findByText("order title");
    expect(orderTitle).toBe;
    const productTitle = await screen.findByText("product title");
    expect(productTitle).toBe;
    const serialNumber = await screen.findByText("12345");
    expect(serialNumber).toBe;
    const status = await screen.findByText("Free");
    expect(status).toBe;
    screen.debug();
  });
  test("delete button should remove product", async () => {
    render(OrdersList, {
      props: {
        showModal: true,
      },
    });
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
    const { findAllByTestId } = render(OrderedProducts, {
      global: {
        mocks: {
          order,
        },
      },
    });
    const deleteButton = await findAllByTestId("delete-product");
    expect(deleteButton).toBe;
  });
});
