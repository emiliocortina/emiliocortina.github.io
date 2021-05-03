import "../mock/matchMedia.mock";
import { mount } from "@vue/test-utils";
import NavBar from "@/components/nav-bar/nav-bar";
// import { ESLocale } from "@/locales/es";

describe("nav-bar.vue", () => {
  it("renders props.msg when passed", () => {
    // const locale = new ESLocale();
    const wrapper = mount(NavBar, {
      global: {
        mocks: {
          $t: (msg: string) => msg,
        },
      },
    });
    console.log(wrapper);
    expect(wrapper.text()).toMatch("");
  });
});
