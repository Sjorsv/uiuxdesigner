import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useLanguage } from "@/hooks/useLanguage";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslation();
  const { lang, localePath, switchLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Get the base path (without /en prefix)
  const getBasePath = () => {
    const path = location.pathname;
    if (path.startsWith("/en")) {
      return path.slice(3) || "/";
    }
    return path;
  };

  const handleHashLink = (hash: string) => {
    setMenuOpen(false);
    const basePath = getBasePath();
    const homePath = lang === "en" ? "/en" : "/";
    if (basePath === "/") {
      const el = document.querySelector(hash);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate(homePath + hash);
    }
  };

  const navItems = [
    { label: t("nav.cases"), href: localePath("/portfolio") },
    { label: t("nav.services"), hash: "#services" },
    { label: t("nav.about"), hash: "#about" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/90 backdrop-blur-md border-b border-border/50" : ""
      }`}
    >
      <div className="swiss-container flex items-center justify-between h-20">
        <a href={localePath("/")} className="font-display font-bold text-lg text-foreground tracking-tight">
          uiuxdesigner.nl
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-10">
          {navItems.map((item) =>
            item.hash ? (
              <button
                key={item.label}
                onClick={() => handleHashLink(item.hash)}
                className="text-sm font-body text-muted-foreground hover:text-foreground transition-colors duration-300 tracking-wide"
              >
                {item.label}
              </button>
            ) : (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-body text-muted-foreground hover:text-foreground transition-colors duration-300 tracking-wide"
              >
                {item.label}
              </a>
            )
          )}

          {/* Language switcher */}
          <div className="flex items-center gap-1 text-sm font-body">
            <button
              onClick={() => switchLanguage("nl")}
              className={`px-2 py-1 rounded transition-colors duration-200 ${
                lang === "nl" ? "text-foreground font-bold" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              NL
            </button>
            <span className="text-border">/</span>
            <button
              onClick={() => switchLanguage("en")}
              className={`px-2 py-1 rounded transition-colors duration-200 ${
                lang === "en" ? "text-foreground font-bold" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              EN
            </button>
          </div>

          <button onClick={() => handleHashLink("#contact")} className="btn-primary text-xs py-3 px-6">
            {t("nav.contact")}
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden flex flex-col gap-1.5"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span className={`block w-6 h-px bg-foreground transition-transform duration-300 ${menuOpen ? "rotate-45 translate-y-[3.5px]" : ""}`} />
          <span className={`block w-6 h-px bg-foreground transition-opacity duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-px bg-foreground transition-transform duration-300 ${menuOpen ? "-rotate-45 -translate-y-[3.5px]" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-border"
          >
            <div className="swiss-container py-8 flex flex-col gap-6">
              {navItems.map((item) =>
                item.hash ? (
                  <button
                    key={item.label}
                    onClick={() => handleHashLink(item.hash)}
                    className="text-2xl font-display font-bold text-foreground text-left"
                  >
                    {item.label}
                  </button>
                ) : (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="text-2xl font-display font-bold text-foreground"
                  >
                    {item.label}
                  </a>
                )
              )}

              {/* Mobile language switcher */}
              <div className="flex items-center gap-3 text-base font-body">
                <button
                  onClick={() => { switchLanguage("nl"); setMenuOpen(false); }}
                  className={lang === "nl" ? "text-foreground font-bold" : "text-muted-foreground"}
                >
                  NL
                </button>
                <span className="text-border">/</span>
                <button
                  onClick={() => { switchLanguage("en"); setMenuOpen(false); }}
                  className={lang === "en" ? "text-foreground font-bold" : "text-muted-foreground"}
                >
                  EN
                </button>
              </div>

              <button onClick={() => handleHashLink("#contact")} className="btn-primary text-xs py-3 px-6 w-fit">
                {t("nav.contact")}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
