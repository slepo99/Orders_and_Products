//import { render, screen } from "@testing-library/vue";
import { mount } from "@vue/test-utils";
import DateTimeDisplayVue from "@/components/Header/DateTimeDisplay.vue";
afterEach(() => {
  vi.clearAllMocks();
  vi.resetAllMocks();
  vi.restoreAllMocks()
});
describe("Date Time display", () => {
  test("renders current date and time correctly", async () => {
    const wrapper = mount(DateTimeDisplayVue);

    await wrapper.vm.$nextTick();

    const date = new Date();
    const currentDateString = date.toLocaleTimeString("en-US", {
      hour12: false,
      hour: "2-digit",
      minute: "2-digit",
    });
    const currentDayString = date.getFullYear().toString();
    const currentYearString = date.getFullYear().toString();

    expect(wrapper.text()).toContain(currentDayString);
    expect(wrapper.text()).toContain(currentDateString);
    expect(wrapper.text()).toContain(currentYearString);
  });
});
