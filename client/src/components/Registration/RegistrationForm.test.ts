import RegistrationForm from "./RegistrationForm.vue";
import { render, fireEvent } from "@testing-library/vue";
import { setActivePinia, createPinia } from "pinia";
beforeEach(() => {
  setActivePinia(createPinia());
});

describe("Product filter", () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  test("should render registration component", async () => {
    render(RegistrationForm);
    expect(RegistrationForm).not.toBeNull;
  });

  test("cant register if password and confirm password are not the same both", async () => {
    const { getByPlaceholderText, queryByText, getByText } =
      render(RegistrationForm);
    const password = getByPlaceholderText("password") as HTMLInputElement;
    const confirmPass = getByPlaceholderText(
      "confirm password",
    ) as HTMLInputElement;
    const regBtn = getByText("Sign up");
    fireEvent.update(password, "123");
    fireEvent.update(confirmPass, "456");
    fireEvent.click(regBtn);
    if (password.value !== confirmPass.value) {
      expect(queryByText("Sign in")).toBeNull;
    }
  });
  test("register if username and password correct", async () => {
    const { getByPlaceholderText, getByText } = render(RegistrationForm);
    const username = getByPlaceholderText("username") as HTMLInputElement;
    const regBtn = getByText("Sign up");
    fireEvent.update(username, "somename");
    fireEvent.click(regBtn);
    if (username.value.length >= 4) {
      expect(getByText("Sign in")).not.toBeNull();
    }
  });
});
