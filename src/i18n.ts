import { createI18n } from "vue-i18n";
import { ENLocale } from "./locales/en";
import { ESLocale } from "./locales/es";

const messages = {
  es: {
    ...new ESLocale(),
  },
  en: {
    ...new ENLocale(),
  },
};

// Create i18n instance with options
export const i18n = createI18n({
  locale: navigator.language, // set locale
  fallbackLocale: "es", // set fallback locale
  messages, // set locale messages
  // If you need to specify other options, you can set other options
  // ...
});
