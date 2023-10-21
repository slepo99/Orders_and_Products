import OrderRemove from "./OrderRemove.vue";
import { render, fireEvent } from "@testing-library/vue";
import { setActivePinia, createPinia } from "pinia";
beforeEach(() => {
  setActivePinia(createPinia());
});
afterEach(() => {
  vi.clearAllMocks();
});
describe("Order remove ", () => {
  test("should render remove window", async () => {
    render(OrderRemove, {
      props: {
        showModal: false,
        currentOrderId: "123456",
      },
    });
    expect(OrderRemove).toBe;
  });

  test.only("should show current title and btns", async () => {
    const { getAllByRole, findByText } = render(OrderRemove, {
      props: {
        showModal: true,
        currentOrderId: "123456",
      },
    });

    const title = await findByText("Are you sure you want to delete order ?");
    const buttons = getAllByRole("button");

    fireEvent.click(buttons[0]);
    fireEvent.click(buttons[1]);
    expect(title).toBe;
    expect(buttons).toBe;
  });
});
