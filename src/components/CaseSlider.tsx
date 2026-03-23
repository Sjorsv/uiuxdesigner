import { useCallback, useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Hand } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
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

const CaseSlider = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { localePath } = useLanguage();
  const [hovering, setHovering] = useState(false);
  const [dragStartPos, setDragStartPos] = useState({ x: 0, y: 0 });
  const swipeHintRef = useRef<HTMLDivElement>(null);
  
  const cases = [
    { key: "gmt", image: caseGmt, slug: "/case/gmt-equipment" },
    { key: "maxled", image: caseMaxled, slug: "/case/maxled" },
    { key: "bouwmeester", image: caseBouwmeester, slug: "/case/bouwmeester" },
    { key: "lohues", image: caseLohues, slug: "" },
    { key: "batterij", image: caseBatterij, slug: "/case/batterij" },
    { key: "theoriedoen", image: caseTheoriedoen, slug: "" },
    { key: "soortenregister", image: caseSoortenregister, slug: "/case/soortenregister" },
    { key: "arise", image: caseBiodiversity, slug: "/case/arise" },
    { key: "jawel", image: caseJawel, slug: "/case/jawel" },
  ];

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    dragFree: true,
    containScroll: "trimSnaps",
  });
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const updateNavigationState = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    updateNavigationState();
    emblaApi.on("select", updateNavigationState);
    emblaApi.on("reInit", updateNavigationState);
    
    const hideHint = () => {
      if (swipeHintRef.current) {
        swipeHintRef.current.style.opacity = "0";
        swipeHintRef.current.style.pointerEvents = "none";
      }
    };
    emblaApi.on("pointerDown", hideHint);
    const timer = setTimeout(hideHint, 3500);
    
    return () => {
      emblaApi.off("select", updateNavigationState);
      emblaApi.off("reInit", updateNavigationState);
      emblaApi.off("pointerDown", hideHint);
      clearTimeout(timer);
    };
  }, [emblaApi, updateNavigationState]);

  return (
    <section className="pt-16 pb-32 relative" id="cases">
      <CursorBadge text={t("cases.cursor_badge")} active={hovering} />
      <div className="swiss-container mb-12">
        <div className="flex items-end justify-between">
          <div>
            <span className="section-number">{t("cases.section_number")}</span>
            <span className="section-label ml-4">{t("cases.section_label")}</span>
            <h2 className="heading-lg mt-4">{t("cases.title")}</h2>
          </div>
          <a href={localePath("/portfolio")} className="btn-outline hidden sm:inline-flex">
            {t("cases.view_all")}
          </a>
        </div>
      </div>

      <div className="relative">
        <div ref={swipeHintRef} className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none transition-opacity duration-300">
          <motion.div className="flex items-center gap-2 bg-primary/90 text-primary-foreground px-5 py-3 rounded-full shadow-lg" animate={{ x: [0, 40, 0] }} transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}>
            <Hand className="w-5 h-5" />
            <span className="text-sm font-medium">{t("cases.swipe")}</span>
          </motion.div>
        </div>
        <div className="overflow-hidden px-6 md:px-12 lg:px-16 cursor-grab active:cursor-grabbing" ref={emblaRef}>
        <div className="flex gap-8 select-none">
          {cases.map((project, index) => (
            <motion.div
              key={project.key}
              className="flex-[0_0_85vw] sm:flex-[0_0_70vw] md:flex-[0_0_55vw] lg:flex-[0_0_45vw] group cursor-none"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onMouseEnter={() => setHovering(true)}
              onMouseLeave={() => setHovering(false)}
              onPointerDown={(e) => setDragStartPos({ x: e.clientX, y: e.clientY })}
              onPointerUp={(e) => {
                const dist = Math.abs(e.clientX - dragStartPos.x) + Math.abs(e.clientY - dragStartPos.y);
                if (dist < 5 && project.slug) {
                  navigate(localePath(project.slug));
                }
              }}
            >
              <div className="bg-gradient-to-br from-surface to-muted/30 rounded-sm overflow-hidden mb-6 relative">
                <div className="overflow-hidden">
                  <img src={project.image} alt={`${t(`cases.${project.key}.title`)} website mockup`} draggable={false} className="w-full h-auto transition-transform duration-700 group-hover:scale-105" />
                </div>
              </div>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="section-label mb-2 block">{t(`cases.${project.key}.industry`)}</span>
                  <h3 className="font-display font-bold text-xl md:text-2xl text-foreground mb-2">{t(`cases.${project.key}.title`)}</h3>
                  <p className="body-md max-w-md">{t(`cases.${project.key}.description`)}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="swiss-container mt-12 sm:hidden">
        <a href={localePath("/portfolio")} className="btn-outline">
          {t("cases.view_all")}
        </a>
      </div>
    </section>
  );
};

export default CaseSlider;
