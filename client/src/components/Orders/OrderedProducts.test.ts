import OrderedProducts from "./OrderedProducts.vue";
import OrdersList from "./OrdersList.vue";
import { render, fireEvent } from "@testing-library/vue";

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

  test("should open selected orders propucts", async () => {
    render(OrdersList, {
      props: {
        showModal: true,
      },
    });
    const { findByTestId } = render(OrderedProducts);
    const products = await findByTestId("add");
    expect(products).toBe;
  });
  test("delete button should remove product", async () => {
    const { queryByTestId, findAllByAltText } = render(OrdersList);
    const deleteButton = await findAllByAltText("trash");
    fireEvent.click(deleteButton[0]);
    expect(queryByTestId("product")).toBeNull();
  });
});
