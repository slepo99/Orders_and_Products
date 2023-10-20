import SearchBar from "@/components/Header/SearchBar.vue";
import { expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/vue";
import router from "@/router";

describe("Input", () => {
  test("should not render searchbar when user not logged in", async () => {
    const { queryByPlaceholderText } = render(SearchBar, {
      global: {
        plugins: [router],
        mocks: {
          $router: {
            currentRoute: {
              value: {
                name: "someRoute",
              },
            },
          },
          localStorage: {
            getItem: vi.fn().mockReturnValue(null),
          },
        },
      },
    });
    const inputElement = queryByPlaceholderText("Search");
    expect(inputElement).toBeNull();
  });
  it("should be shown when isShow returns true", async () => {
    const { getByPlaceholderText } = render(SearchBar, {
      global: {
        plugins: [router],
        mocks: {
          token: "token",
        },
      },
    });

    const inputElement = getByPlaceholderText("Search");
    expect(inputElement).toBeTruthy();
  });
});
