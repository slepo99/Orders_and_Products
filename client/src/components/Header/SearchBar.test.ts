import SearchBar from "@/components/Header/SearchBar.vue";

import { render,  fireEvent } from "@testing-library/vue";
import router from "@/router";
import { setActivePinia, createPinia } from "pinia";

beforeEach(() => {
  setActivePinia(createPinia());
});

describe("Input", () => {
  afterEach(() => {
    vi.clearAllMocks();
  });
  test("should be shown when isShow returns true", async () => {
    const isShow = () => true;
    const { findByPlaceholderText } = render(SearchBar, {
      global: {
        plugins: [router],
        mocks: {
          localStorage: {
            getItem: "token",
          },
          isShow,
        },
      },
    });
    const inputElement = await findByPlaceholderText("Search");
    expect(inputElement).not.toBeNull();
    await fireEvent.update(inputElement, "test value");
  });
  it.only("should not render searchbar when user not logged in", async () => {
    const { queryByPlaceholderText } = render(SearchBar, {
      global: {
        plugins: [router],
      },
    });
    const inputElement = queryByPlaceholderText("Search");
    expect(inputElement).toBeNull();
  });
});
