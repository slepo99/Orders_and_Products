import LoginForm from "./LoginForm.vue";
import { render, fireEvent, screen, getByText } from "@testing-library/vue";
import { setActivePinia, createPinia } from "pinia";
beforeEach(() => {
  setActivePinia(createPinia());
});

describe("Product filter", () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  test("should render registration component", async () => {
    render(LoginForm);
    expect(LoginForm).not.toBeNull;
  });

  test("sign in if user data correct", async () => {
    const { getByPlaceholderText, queryByText, getByText } = render(LoginForm);
    const password = getByPlaceholderText("password") as HTMLInputElement;
    const username = getByPlaceholderText("username") as HTMLInputElement;
    const regBtn = getByText("Sign in");
    expect(password).not.toBeNull();
    expect(username).not.toBeNull();
    expect(regBtn).not.toBeNull();
    fireEvent.update(password, "1234");
    fireEvent.update(username, "somename");
    fireEvent.click(regBtn);
    if (username.value.length && password.value.length >= 4) {
      expect(queryByText("Sign in")).toBeNull;
    }
  });
});
