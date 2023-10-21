import NavigationMenu from "@/components/Navbar/NavigationMenu.vue";
import { render, fireEvent, screen } from "@testing-library/vue";
import router from "@/router";
import { mount } from "@vue/test-utils";
import { setActivePinia, createPinia } from "pinia";

beforeEach(() => {
  setActivePinia(createPinia());
});

describe("Navbar", () => {
  afterEach(() => {
    vi.clearAllMocks();
  });
  test("Is logout logic and modal window work ]", async () => {
    mount(NavigationMenu, {
      global: {
        plugins: [router],
      },
    });
    const { getByText } = render(NavigationMenu, {
      global: {
        plugins: [router],
        mocks: {
          authStore: {
            token: vi.fn(),
          },
        },
      },
    });
    const logoutBtn = getByText(/logout/i);
    await fireEvent.click(logoutBtn);
    expect(logoutBtn).toBe;
    const confirmLogout = getByText(/yes/i);
    await fireEvent.click(confirmLogout);
    expect(confirmLogout).toBe;

    screen.debug();
  });
  test("shoud not render login button if user logged in", async () => {
    const { queryByTestId } = render(NavigationMenu, {
      global: {
        plugins: [router],
      },
    });
    const loginPage = queryByTestId("login");
    expect(loginPage).toBeNull();
    const registerPage = queryByTestId("registration");
    expect(registerPage).toBeNull();
  });
  test("shoud render login button if user logged out", async () => {
    const authStore = {
      token: null,
    };
    const hideLogin = true;
    const hideReg = true;
    const { queryByText } = render(NavigationMenu, {
      global: {
        plugins: [router],
        mocks: {
          hideReg,
          authStore,
          hideLogin,
        },
      },
      props: {
        hideReg,
        authStore,
        hideLogin,
      },
    });
    if (hideLogin) {
      expect(queryByText("LOGIN")).toBeNull();
    } else {
      expect(queryByText("LOGIN")).not.toBeNull();
    }

    if (hideReg) {
      expect(queryByText("REGISTRATION")).toBeNull();
    } else {
      expect(queryByText("REGISTRATION")).not.toBeNull();
    }
  });
});
