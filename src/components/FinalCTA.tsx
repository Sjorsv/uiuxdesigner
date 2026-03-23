import { motion } from "framer-motion";
import { useTranslation, Trans } from "react-i18next";

const FinalCTA = () => {
  const { t } = useTranslation();

  return (
    <section className="py-32 md:py-48 border-t border-border" id="final-cta">
      <div className="swiss-container text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="section-label mb-8">{t("finalCta.ready")}</p>
          <h2 className="heading-xl mb-12 max-w-4xl mx-auto">
            <Trans i18nKey="finalCta.title" components={{ brand: <span className="text-brand" /> }} />
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="mailto:uiuxdesignernl@gmail.com" className="btn-primary">{t("finalCta.cta_start")}</a>
            <a href="mailto:uiuxdesignernl@gmail.com" className="btn-outline">{t("finalCta.cta_call")}</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
