import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

/**
 * Syncs i18n language based on URL prefix.
 * If path starts with /en → English, otherwise Dutch.
 */
const LanguageSync = () => {
  const location = useLocation();
  const { i18n } = useTranslation();

  useEffect(() => {
    const isEn = location.pathname.startsWith("/en");
    const targetLang = isEn ? "en" : "nl";
    if (i18n.language !== targetLang) {
      i18n.changeLanguage(targetLang);
    }
  }, [location.pathname, i18n]);

  return null;
};

export default LanguageSync;
