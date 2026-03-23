import { motion } from "framer-motion";
import { useTranslation, Trans } from "react-i18next";
import portfolioCollage from "@/assets/portfolio-collage.png";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="relative overflow-hidden pt-36">
      <div className="swiss-container w-full relative z-10 flex flex-col items-center text-center min-h-[60vh] justify-center">
        <motion.div
          className="flex flex-col items-center text-center relative"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="section-label mb-6">{t("hero.label")}</p>

          <motion.a
            href="#contact"
            className="md:hidden mb-6 w-28 h-28 rounded-full bg-brand flex flex-col items-center justify-center text-brand-foreground shadow-[0_4px_30px_hsl(var(--brand)/0.3)] cursor-pointer no-underline"
            initial={{ scale: 0, rotate: -20 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.6, delay: 0.5, type: "spring", stiffness: 200 }}
            whileHover={{ scale: 1.1, rotate: 5 }}
          >
            <span className="font-body text-[9px] uppercase tracking-wider leading-tight text-center px-3">{t("hero.badge_line1")}</span>
            <span className="font-display font-bold text-sm leading-tight text-center">{t("hero.badge_line2")}</span>
            <span className="font-body text-[9px] uppercase tracking-wider leading-tight text-center">{t("hero.badge_line3")}</span>
          </motion.a>

          <div className="relative">
            <h1 className="heading-xl mb-8 max-w-4xl">
              <Trans i18nKey="hero.title" components={{ brand: <span className="text-brand" /> }} />
            </h1>

            <motion.a
              href="#contact"
              className="hidden md:flex absolute -top-4 -right-20 lg:-right-24 w-32 h-32 rounded-full bg-brand flex-col items-center justify-center text-brand-foreground shadow-[0_4px_30px_hsl(var(--brand)/0.3)] cursor-pointer no-underline"
              initial={{ scale: 0, rotate: -20 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.6, delay: 0.5, type: "spring", stiffness: 200 }}
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              <span className="font-body text-[10px] uppercase tracking-wider leading-tight text-center px-3">{t("hero.badge_line1")}</span>
              <span className="font-display font-bold text-base leading-tight text-center">{t("hero.badge_line2")}</span>
              <span className="font-body text-[10px] uppercase tracking-wider leading-tight text-center">{t("hero.badge_line3")}</span>
            </motion.a>
          </div>

          <p className="body-lg mb-8 max-w-lg">
            {t("hero.subtitle_line1")}
            <br />
            {t("hero.subtitle_line2")}
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-4">
            <a href="#cases" className="btn-primary">
              {t("hero.cta_projects")}
            </a>
            <a href="#contact" className="btn-outline group">
              {t("hero.cta_start")}
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
          </div>

          <p className="text-sm text-muted-foreground tracking-wide mt-[17px]">
            {t("hero.tagline")}
          </p>
        </motion.div>
      </div>

      <motion.div
        className="relative z-0 w-full overflow-hidden mt-[106px]"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
      >
        <div className="[mask-image:linear-gradient(to_bottom,black_40%,transparent_85%)]">
          <motion.div
            className="flex w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          >
            <div className="shrink-0 pr-[25px]">
              <img src={portfolioCollage} alt={t("hero.portfolio_alt")} className="block h-auto w-[100vw] min-w-[1200px]" />
            </div>
            <div className="shrink-0 pr-[25px]" aria-hidden="true">
              <img src={portfolioCollage} alt="" className="block h-auto w-[100vw] min-w-[1200px]" />
            </div>
          </motion.div>
        </div>
        <div className="swiss-container mt-[5px] text-center">
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-2 opacity-50">
            <span className="text-brand">★</span> {t("hero.stats")}
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
