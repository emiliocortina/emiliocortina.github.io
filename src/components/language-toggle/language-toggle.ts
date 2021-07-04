import { i18n } from "@/i18n";
import { Vue } from "vue-class-component";

export default class LanguageToggle extends Vue {
  SPANISH_LANG = "es";
  ENGLISH_LANG = "en";
  // Defaults to english (see src/i18n.ts)
  activeLang = this.ENGLISH_LANG;

  mounted(): void {
    this.activeLang = i18n.global.locale;
  }

  // Changes i18n language
  changeLang(lang: string): void {
    const supportedLanguage = lang.match(/en|es/)?.pop();
    const newLang = supportedLanguage ? supportedLanguage : "en";
    i18n.global.locale = newLang;
    this.activeLang = newLang;
  }
}
