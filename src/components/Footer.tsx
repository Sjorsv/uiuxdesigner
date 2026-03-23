import { useTranslation } from "react-i18next";
import { useLanguage } from "@/hooks/useLanguage";

const Footer = () => {
  const { t } = useTranslation();
  const { localePath } = useLanguage();

  return (
    <footer className="border-t border-border py-12">
      <div className="swiss-container">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <p className="font-display font-bold text-lg text-foreground mb-2">uiuxdesigner.nl</p>
            <p className="text-sm text-muted-foreground font-body">{t("footer.tagline")}</p>
          </div>

          <div className="flex flex-wrap gap-8">
            <a href={localePath("/portfolio")} className="text-sm text-muted-foreground font-body hover:text-foreground transition-colors">{t("footer.cases")}</a>
            <a href="#services" className="text-sm text-muted-foreground font-body hover:text-foreground transition-colors">{t("footer.services")}</a>
            <a href="#process" className="text-sm text-muted-foreground font-body hover:text-foreground transition-colors">{t("footer.process")}</a>
            <a href="#about" className="text-sm text-muted-foreground font-body hover:text-foreground transition-colors">{t("footer.about")}</a>
            <a href="#contact" className="text-sm text-muted-foreground font-body hover:text-foreground transition-colors">{t("footer.contact")}</a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-xs text-muted-foreground font-body">
            © {new Date().getFullYear()} UIUXDESIGNER.NL — {t("footer.rights")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
