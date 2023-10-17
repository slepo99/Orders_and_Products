import CreateOrderVue from "@/components/Orders/CreateOrder.vue";
import { render, fireEvent } from "@testing-library/vue";
import { setActivePinia, createPinia } from "pinia";
beforeEach(() => {
  setActivePinia(createPinia());
});
describe("Create Order", () => {
  test("should render the component", async () => {
    const { getByText, container } = render(CreateOrderVue, {
      props: {
        showModal: true,
      },
    });
    expect(CreateOrderVue).toBe;
    const title = getByText("Order creation");
    expect(title).toBe;

    const closeButton = container.querySelector(".close-dialog_btn");
    expect(closeButton).not.toBeNull();
    

    const titleInput = getByText("Enter order title:");
    const descriptionInput = getByText("Enter order description:");
    const submitButton = getByText("Create order");

    await fireEvent.update(titleInput, "Test Title");
    await fireEvent.update(descriptionInput, "Test Description");
    await fireEvent.click(submitButton);
  });
});
