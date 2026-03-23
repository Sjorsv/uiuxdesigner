import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Process = () => {
  const { t } = useTranslation();
  const steps = t("process.steps", { returnObjects: true }) as { number: string; title: string; description: string }[];

  return (
    <section className="py-32 border-t border-border" id="process">
      <div className="swiss-container">
        <div className="mb-20">
          <span className="section-number">{t("process.section_number")}</span>
          <span className="section-label ml-4">{t("process.section_label")}</span>
          <h2 className="heading-lg mt-4">{t("process.title")}</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <span className="font-display font-bold text-5xl md:text-6xl text-border block mb-6 transition-colors duration-500 ease-out group-hover:text-foreground">
                {step.number}
              </span>
              <div className="w-12 h-px bg-foreground mb-6 transition-colors duration-500 ease-out group-hover:bg-brand" />
              <h3 className="font-display font-bold text-xl text-foreground mb-3">{step.title}</h3>
              <p className="body-md">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
