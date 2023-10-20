import ProductCreate from "./ProductCreate.vue";
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
describe("Product create", () => {
  test("should render new product window", async () => {
    render(ProductCreate, {
      props: {
        showModal: false,
      },
    });
    expect(ProductCreate).toBe;
  });

  test("should close new product window", async () => {
    const { findByAltText } = render(ProductCreate, {
      props: {
        showModal: true,
      },
    });

    const closeBtn = await findByAltText("delete-sign");
    fireEvent.click(closeBtn);
    expect(closeBtn);
  });
  test("is inputs work correct", async () => {
    const { findByPlaceholderText, getByText } = render(ProductCreate, {
      props: {
        showModal: true,
      },
    });
    const nameInput = await findByPlaceholderText(/name/i);
    const serialInput = await findByPlaceholderText(/serial/i);
    const photoInput = await findByPlaceholderText(/photo/i);
    const usdInput = await findByPlaceholderText("$");
    const uahInput = await findByPlaceholderText("₴");

    await fireEvent.update(nameInput, "test");
    await fireEvent.update(serialInput, "123");
    await fireEvent.update(photoInput, "test");
    await fireEvent.update(usdInput, "test");
    await fireEvent.update(uahInput, "test");

    const submitBtn = getByText(/add product/i);
    fireEvent.click(submitBtn);

    expect(nameInput).toBe;
    expect(photoInput).toBe;
    expect(serialInput).toBe;
    expect(usdInput).toBe;
    expect(Audio).toBe;
    expect(submitBtn).toBe;
  });
});
