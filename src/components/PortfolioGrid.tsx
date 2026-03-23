import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useLanguage } from "@/hooks/useLanguage";
import CursorBadge from "./CursorBadge";
import caseGmt from "@/assets/case-gmt.png";
import caseMaxled from "@/assets/case-maxled.png";
import caseBouwmeester from "@/assets/case-bouwmeester.png";
import caseLohues from "@/assets/case-lohues.png";
import caseBatterij from "@/assets/case-batterij.png";
import caseTheoriedoen from "@/assets/case-theoriedoen.png";
import caseSoortenregister from "@/assets/case-soortenregister.png";
import caseBiodiversity from "@/assets/case-biodiversity.png";
import caseJawel from "@/assets/case-jawel.png";

const PortfolioGrid = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { localePath } = useLanguage();
  const [hovering, setHovering] = useState(false);

  const projects = [
    { key: "gmt", image: caseGmt, slug: "/case/gmt-equipment" },
    { key: "maxled", image: caseMaxled, slug: "/case/maxled" },
    { key: "bouwmeester", image: caseBouwmeester, slug: "/case/bouwmeester" },
    { key: "lohues", image: caseLohues, slug: "/case/lohues" },
    { key: "batterij", image: caseBatterij, slug: "/case/batterij" },
    { key: "theoriedoen", image: caseTheoriedoen, slug: "/case/theoriedoen" },
    { key: "soortenregister", image: caseSoortenregister, slug: "/case/soortenregister" },
    { key: "arise", image: caseBiodiversity, slug: "/case/arise" },
    { key: "jawel", image: caseJawel, slug: "/case/jawel" },
  ];

  return (
    <section className="py-32 border-t border-border" id="portfolio">
      <CursorBadge text={t("cases.cursor_badge")} active={hovering} />
      <div className="swiss-container">
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-300 font-body text-sm uppercase tracking-wide mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          {t("portfolio.go_back")}
        </button>

        <div className="mb-16">
          <span className="section-number">{t("portfolio.section_number")}</span>
          <span className="section-label ml-4">{t("portfolio.section_label")}</span>
          <h2 className="heading-lg mt-4">{t("portfolio.title")}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.key}
              className="group cursor-none"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
              onMouseEnter={() => setHovering(true)}
              onMouseLeave={() => setHovering(false)}
              onClick={() => {
                if (project.slug) navigate(localePath(project.slug));
              }}
            >
              <div className="bg-surface rounded-sm overflow-hidden mb-4 relative">
                <div className="overflow-hidden">
                  <img src={project.image} alt={`${t(`cases.${project.key}.title`)} project`} className="w-full h-auto transition-all duration-700 group-hover:scale-105" />
                </div>
              </div>
              <span className="section-label block mb-1">{t(`cases.${project.key}.industry`)}</span>
              <h3 className="font-display font-bold text-lg text-foreground">{t(`cases.${project.key}.title`)}</h3>
              <p className="text-sm text-muted-foreground font-body mt-1">{t(`cases.${project.key}.description`)}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioGrid;
