import SearchBar from "@/components/Header/SearchBar.vue";
import { expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/vue";
import { setActivePinia, createPinia } from "pinia";
import router from "@/router";

beforeEach(() => {
  setActivePinia(createPinia());
});
afterEach(() => {
  vi.clearAllMocks();
  vi.resetAllMocks();
  vi.restoreAllMocks()
});
describe("Input", () => {
  test("updates the search value when typing in the input", async () => {
    const { getByPlaceholderText } = render(SearchBar, {
      global: {
        plugins: [router],
      },
    });
    const inputElement = getByPlaceholderText("Search") as HTMLInputElement;
    await fireEvent.update(inputElement, "test");

    expect(inputElement.value).toBe("test");
  });
  test("return empty string in default state", async () => {
    const { getByPlaceholderText } = render(SearchBar, {
      global: {
        plugins: [router],
      },
    });
    const inputElement = getByPlaceholderText("Search") as HTMLInputElement;
    expect(inputElement.value).toBe("");
  });
});
