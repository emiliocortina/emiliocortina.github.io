import "../mock/matchMedia.mock";
import "../mock/i18n.mock";
import "../mock/router.mock";
import { mount } from "@vue/test-utils";
import NavBar from "@/components/nav-bar/nav-bar";

describe("nav-bar.vue", () => {
  it("Renders title", () => {
    const wrapper = mount(NavBar);
    expect(wrapper.text()).toContain("Emilio Cortina");
  });

  it("Renders links", () => {
    const wrapper = mount(NavBar);
    const links = ["Home", "Gallery", "Work", "About"];
    links.forEach((link: string) => expect(wrapper.text()).toContain(link));
  });
});
