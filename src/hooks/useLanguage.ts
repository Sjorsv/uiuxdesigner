import { useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

/**
 * Hook to get language-prefixed paths and switch languages.
 */
export const useLanguage = () => {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const lang = i18n.language;
  const isEn = lang === "en";

  /** Add language prefix to a path */
  const localePath = useCallback(
    (path: string) => {
      if (isEn) {
        return `/en${path === "/" ? "" : path}`;
      }
      return path;
    },
    [isEn]
  );

  /** Strip /en prefix from current path */
  const getBasePath = useCallback(() => {
    const path = location.pathname;
    if (path.startsWith("/en")) {
      const stripped = path.slice(3);
      return stripped || "/";
    }
    return path;
  }, [location.pathname]);

  /** Switch language and navigate */
  const switchLanguage = useCallback(
    (newLang: "en" | "nl") => {
      const basePath = getBasePath();
      const search = location.search;
      const hash = location.hash;
      
      if (newLang === "en") {
        const newPath = `/en${basePath === "/" ? "" : basePath}`;
        i18n.changeLanguage("en");
        navigate(newPath + search + hash, { replace: true });
      } else {
        i18n.changeLanguage("nl");
        navigate(basePath + search + hash, { replace: true });
      }
    },
    [getBasePath, location.search, location.hash, i18n, navigate]
  );

  return { lang, isEn, localePath, switchLanguage };
};
