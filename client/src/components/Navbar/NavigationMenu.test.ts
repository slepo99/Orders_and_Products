import NavigationMenu from "@/components/Navbar/NavigationMenu.vue";
import { render, fireEvent, screen } from "@testing-library/vue";
import router from "@/router";

import { setActivePinia, createPinia } from "pinia";
import { mount } from "@vue/test-utils";
beforeEach(() => {
  setActivePinia(createPinia());
});

afterEach(() => {
  vi.clearAllMocks();
});
describe("Navbar", () => {
  test("Is logout logic and modal window work ]", async () => {
    const wrapper = mount(NavigationMenu, {
      global: {
        plugins: [router],
      },
    });
    const { getByText, container } = render(NavigationMenu, {
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
  afterEach(() => {
    vi.clearAllMocks();
  });
  test("shoud not render login page if user logged in", async () => {
    const { queryByTestId, container } = render(NavigationMenu, {
      global: {
        plugins: [router]
      }
    })
    const loginPage = queryByTestId('login')
    expect(loginPage).toBeNull()
    const registerPage = queryByTestId('registration')
    expect(registerPage).toBeNull()
  });
});
