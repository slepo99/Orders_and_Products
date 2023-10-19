import CreateOrderVue from "@/components/Orders/CreateOrder.vue";
import { render, fireEvent } from "@testing-library/vue";
import { setActivePinia, createPinia } from "pinia";
beforeEach(() => {
  setActivePinia(createPinia());
});
describe("Create Order", () => {
  test("should render the component", async () => {
    const { getByText, container, getByTestId } = render(CreateOrderVue, {
      props: {
        showModal: true,
      },
    });
    expect(CreateOrderVue).toBe;
    const title = getByText("Order creation");
    expect(title).toBe;

    const closeButton = container.querySelector(".close-dialog_btn");
    expect(closeButton).toBe;

    const form = getByTestId("form");
    expect(form).toBe;
  });
  test("input elements shoul return value when typing and btn works", async () => {
    const { getByPlaceholderText, getByAltText, getByText } = render(
      CreateOrderVue,
      {
        props: {
          showModal: true,
        },
      }
    );
    const inputElementTitle = getByPlaceholderText("Title") as HTMLInputElement;
    await fireEvent.update(inputElementTitle, "test");
    expect(inputElementTitle.value).toBe("test");

    const inputElementDescription = getByPlaceholderText(
      "Description"
    ) as HTMLInputElement;
    await fireEvent.update(inputElementDescription, "test");
    expect(inputElementDescription.value).toBe("test");

    const closeBtnImg = getByAltText("delete-sign");
    const submitButton = getByText("Create order");

    await fireEvent.click(closeBtnImg);
    await fireEvent.click(submitButton);
    expect(closeBtnImg).toBe;
    expect(submitButton).toBe;
  });
});
