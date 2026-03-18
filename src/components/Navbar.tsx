import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleHashLink = (hash: string) => {
    setMenuOpen(false);
    if (location.pathname === "/") {
      // Already on homepage, just scroll
      const el = document.querySelector(hash);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      // Navigate to homepage with hash
      navigate("/" + hash);
    }
  };

  const navItems = [
    { label: "Cases", href: "/portfolio" },
    { label: "Diensten", hash: "#services" },
    { label: "Over", hash: "#about" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/90 backdrop-blur-md border-b border-border/50" : ""
      }`}
    >
      <div className="swiss-container flex items-center justify-between h-20">
        <a href="/" className="font-display font-bold text-lg text-foreground tracking-tight">
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
          <button onClick={() => handleHashLink("#contact")} className="btn-primary text-xs py-3 px-6">
            Contact
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
              <button onClick={() => handleHashLink("#contact")} className="btn-primary text-xs py-3 px-6 w-fit">
                Contact
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
