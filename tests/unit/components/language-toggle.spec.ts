import "../mock/matchMedia.mock";
import "../mock/i18n.mock";
import "../mock/router.mock";
import { mount } from "@vue/test-utils";
import LanguageToggle from "@/components/language-toggle/language-toggle";
import { i18n } from "@/i18n";

describe("language-toggle.vue", () => {
  it("Should render languages", () => {
    const wrapper = mount(LanguageToggle);
    expect(wrapper.text().toLowerCase()).toContain("es | en");
  });

  it("Should change language from EN to ES", async () => {
    i18n.global.locale = "en";
    const wrapper = mount(LanguageToggle);
    const languageButton = wrapper.get("#es");
    await languageButton.trigger("click");
    expect(languageButton.classes()).toContain("active");
    expect(i18n.global.locale).toBe("es");
  });

  it("Should change language from ES to EN", async () => {
    i18n.global.locale = "es";
    const wrapper = mount(LanguageToggle);
    const languageButton = wrapper.get("#en");
    await languageButton.trigger("click");
    expect(languageButton.classes()).toContain("active");
    expect(i18n.global.locale).toBe("en");
  });

  it("[EN] Should not change language", async () => {
    i18n.global.locale = "en";
    const wrapper = mount(LanguageToggle);
    const languageButton = wrapper.get("#en");
    await languageButton.trigger("click");
    expect(languageButton.classes()).toContain("active");
    expect(i18n.global.locale).toBe("en");
  });

  it("[ES] Should not change language", async () => {
    i18n.global.locale = "es";
    const wrapper = mount(LanguageToggle);
    const languageButton = wrapper.get("#es");
    await languageButton.trigger("click");
    expect(languageButton.classes()).toContain("active");
    expect(i18n.global.locale).toBe("es");
  });
});
