import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en.json";
import nl from "./locales/nl.json";

// Detect language from URL path
const getLanguageFromPath = () => {
  const path = window.location.pathname;
  return path.startsWith("/en") ? "en" : "nl";
};

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    nl: { translation: nl },
  },
  lng: getLanguageFromPath(),
  fallbackLng: "nl",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
