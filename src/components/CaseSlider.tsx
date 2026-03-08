import { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import caseGmt from "@/assets/case-gmt.png";
import caseMaxled from "@/assets/case-maxled.png";
import caseBouwmeester from "@/assets/case-bouwmeester.png";

const cases = [
  {
    title: "GMT Equipment",
    description: "Website redesign voor GMT Equipment fabrikant van innovatieve zaag- en grijpsystemen. De focus lag op structuur, conversie en het versterken van hun technische merkidentiteit.",
    industry: "Industrial",
    image: caseGmt,
  },
  {
    title: "MaxLED",
    description: "E-commerce platform redesign voor de #1 in verhuur en verkoop van vaste en mobiele ledschermen. Focus op productpresentatie en offerte-aanvragen.",
    industry: "E-commerce",
    image: caseMaxled,
  },
  {
    title: "Bouwmeester",
    description: "Professionele website voor een loodgieter- en installatiebedrijf in de regio Zwolle. Focus op dienstverlening, vertrouwen en lokale vindbaarheid.",
    industry: "Bouw & Installatie",
    image: caseBouwmeester,
  },
  {
    title: "HBM Juristen",
    description: "Website voor een juridisch kantoor met focus op professionele uitstraling, heldere communicatie en vertrouwen.",
    industry: "Legal",
    image: caseGmt,
  },
  {
    title: "Iriszorg",
    description: "Recruitment platform redesign gericht op het aantrekken van nieuw personeel in de zorgsector.",
    industry: "Recruitment",
    image: caseMaxled,
  },
];

const CaseSlider = () => {
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

    return () => {
      emblaApi.off("select", updateNavigationState);
      emblaApi.off("reInit", updateNavigationState);
    };
  }, [emblaApi, updateNavigationState]);

  const scroll = (direction: "left" | "right") => {
    if (!emblaApi) return;
    if (direction === "left") emblaApi.scrollPrev();
    else emblaApi.scrollNext();
  };

  return (
    <section className="py-32 relative" id="cases">
      <div className="swiss-container mb-12">
        <div className="flex items-end justify-between">
          <div>
            <span className="section-number">01</span>
            <span className="section-label ml-4">Featured Cases</span>
            <h2 className="heading-lg mt-4">Onze cases</h2>
          </div>
          <a href="/portfolio" className="btn-outline hidden sm:inline-flex">
            Bekijk alle projecten
          </a>
        </div>
      </div>

      <div className="overflow-hidden px-6 md:px-12 lg:px-16 cursor-grab active:cursor-grabbing" ref={emblaRef}>
        <div className="flex gap-8 select-none">
          {cases.map((project, index) => (
            <motion.div
              key={project.title}
              className="flex-[0_0_85vw] sm:flex-[0_0_70vw] md:flex-[0_0_55vw] lg:flex-[0_0_45vw] group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="bg-surface rounded-sm overflow-hidden mb-6 relative">
                <div className="overflow-hidden">
                  <img
                    src={project.image}
                    alt={`${project.title} website mockup`}
                    draggable={false}
                    className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="section-label mb-2 block">{project.industry}</span>
                  <h3 className="font-display font-bold text-xl md:text-2xl text-foreground mb-2">{project.title}</h3>
                  <p className="body-md max-w-md">{project.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="swiss-container mt-12 sm:hidden">
        <a href="/portfolio" className="btn-outline">
          Bekijk alle projecten
        </a>
      </div>
    </section>
  );
};

export default CaseSlider;
