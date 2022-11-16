import i18n from 'i18next'
import Backend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'
import translationEN from "./assets/locales/en/translation.json";
import translationKZ from "./assets/locales/kz/translation.json";
import translationRU from "./assets/locales/ru/translation.json";

const fallbackLng = ["ru"];
const availableLanguages = ["ru", "kz", "en"];

const resources = {
  ru: {
    translation: translationRU
  },
  kz: {
    translation: translationKZ
  },
  en: {
    translation: translationEN
  }
};

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: fallbackLng,
    detection: {
      checkWhitelist: true
    },
    debug: false,
    whitelist: availableLanguages,
    interpolation: {
      escapeValue: false
    }
});

export default i18n;