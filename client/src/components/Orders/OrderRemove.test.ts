import OrderRemove from "./OrderRemove.vue";
import OrdersList from "./OrdersList.vue";
import { render, fireEvent } from "@testing-library/vue";
import { setActivePinia, createPinia } from "pinia";
beforeEach(() => {
  setActivePinia(createPinia());
});
afterEach(() => {
  vi.clearAllMocks();
  vi.resetAllMocks();
});
describe("Order remove ", () => {
  test("should render remove window", async () => {
    render(OrderRemove, {
      props: {
        showModal: false,
      },
    });
    expect(OrderRemove).toBe;
  });

  test("should show current title and btns", async () => {
    const { findAllByTestId, getAllByRole, findByText } = render(OrdersList);
    const removeProducts = await findAllByTestId("order-remove");
    fireEvent.click(removeProducts[0]);
    const title = await findByText("Are you sure you want to delete order ?");
    const buttons = getAllByRole("button");

    fireEvent.click(buttons[0]);
    fireEvent.click(buttons[1]);
    expect(title).toBe;
    expect(buttons).toBe;
  });
});
