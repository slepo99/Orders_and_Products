import { render, fireEvent } from "@testing-library/vue";
import OrdersList from "./OrdersList.vue";
import { setActivePinia, createPinia } from "pinia";
beforeEach(() => {
  setActivePinia(createPinia());
});

describe("Order remove ", () => {
  afterEach(() => {
    vi.clearAllMocks();
  });
  test("should render Orders component", async () => {
    render(OrdersList, {
      props: {
        showModal: false,
      },
    });
    expect(OrdersList).toBe;
  });

  test("should open details", async () => {
    const { findAllByTestId } = render(OrdersList);
    const detailsBtn = await findAllByTestId("open-products");
    fireEvent.click(detailsBtn[0]);
    expect(detailsBtn).toBe;
  });
});
