import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import portrait from "@/assets/portrait.jpg";

const About = () => {
  const [hovering, setHovering] = useState(false);
  const { t } = useTranslation();

  return (
    <section className="py-32 border-t border-border" id="about">
      <div className="swiss-container">
        <div
          className="grid grid-cols-1 lg:grid-cols-12 gap-16"
          onMouseEnter={() => setHovering(true)}
          onMouseLeave={() => setHovering(false)}
        >
          <div className="lg:col-span-4">
            <span className="section-number">{t("about.section_number")}</span>
            <span className="section-label ml-4">{t("about.section_label")}</span>
            <div className="relative inline-block">
              <h2 className="heading-lg mt-4">{t("about.title")}</h2>
              <AnimatePresence>
                {hovering && (
                  <motion.div
                    className="absolute -top-6 -right-10 md:-right-14 w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-2 border-brand shadow-[0_4px_20px_hsl(var(--brand)/0.3)] z-10"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  >
                    <img src={portrait} alt="Portrait" className="w-full h-full object-cover scale-125" />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          <motion.div
            className="lg:col-span-7 lg:col-start-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="body-lg mb-8 font-medium max-w-none whitespace-nowrap">{t("about.intro")}</p>
            <p className="body-md mb-8">{t("about.body1")}</p>
            <p className="body-md">{t("about.body2")}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
