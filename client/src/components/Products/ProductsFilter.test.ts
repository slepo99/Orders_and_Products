import ProductsFilter from "./ProductsFilter.vue";
import { render, fireEvent } from "@testing-library/vue";
import { setActivePinia, createPinia } from "pinia";
beforeEach(() => {
  setActivePinia(createPinia());
});
afterEach(() => {
  vi.clearAllMocks();
  vi.resetAllMocks();
  vi.restoreAllMocks();
});
describe("Product filter", () => {
  test("should render new product window", async () => {
    render(ProductsFilter);
    expect(ProductsFilter).toBe;
  });

  test("should have a title with quantity", async () => {
    const { getByText } = render(ProductsFilter);
    const title = getByText(/Products/i);
    expect(title).not.toBeNull();
  });
  test("has select list", async () => {
    const { getByTestId } = render(ProductsFilter);
    const select = getByTestId("select-list");
    fireEvent.click(select);
    expect(select).not.toBeNull();
  });
});
