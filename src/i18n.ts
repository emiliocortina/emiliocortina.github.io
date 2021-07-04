import { createI18n } from "vue-i18n";
import { ENLocale } from "./locales/en";
import { ESLocale } from "./locales/es";

const messages = {
  es: ESLocale,
  en: ENLocale,
};

const navigatorLanguage = navigator.language;
const supportedLanguage = navigatorLanguage.match(/en|es/)?.pop();
const appLanguage = supportedLanguage ? supportedLanguage : "en";

// Create i18n instance with options
export const i18n = createI18n({
  locale: appLanguage, // set locale
  fallbackLocale: "en", // set fallback locale
  messages, // set locale messages
  // If you need to specify other options, you can set other options
  // ...
});
