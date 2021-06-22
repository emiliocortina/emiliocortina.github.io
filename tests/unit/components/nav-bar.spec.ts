import "../mock/matchMedia.mock";
import "../mock/i18n.mock";
import "../mock/router.mock";
import { mount } from "@vue/test-utils";
import NavBar from "@/components/nav-bar/nav-bar";
import { i18n } from "@/i18n";

describe("nav-bar.vue", () => {
  it("Renders title", () => {
    const wrapper = mount(NavBar);
    expect(wrapper.text()).toContain("Emilio Cortina");
  });

  it("[EN] Renders links", () => {
    i18n.global.locale = "en";
    const wrapper = mount(NavBar);
    const links = ["Home", "Gallery", "Work", "About"];
    links.forEach((link: string) => expect(wrapper.text()).toContain(link));
  });

  it("[ES] Renders links", () => {
    i18n.global.locale = "es";
    const wrapper = mount(NavBar);
    const links = ["Inicio", "Galeria", "Proyectos", "Info"];
    links.forEach((link: string) => expect(wrapper.text()).toContain(link));
  });
});
