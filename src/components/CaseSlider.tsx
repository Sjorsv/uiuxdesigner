import { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
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

const cases = [
  {
    title: "GMT Equipment",
    description: "Website redesign voor GMT Equipment, fabrikant van innovatieve zaag- en grijpsystemen. De focus lag op structuur, conversie en het versterken van hun technische merkidentiteit.",
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
    title: "Lohues Installatie Techniek",
    description: "Website voor een familiebedrijf in verduurzaming. Focus op huisinstallaties, zonnepanelen en duurzame energieoplossingen.",
    industry: "Energie & Duurzaamheid",
    image: caseLohues,
  },
  {
    title: "Batterij-recyclen.nl",
    description: "Platform voor verantwoord batterijbeheer en recycling. Focus op de transitie naar een groene economie en inzamelpunten.",
    industry: "Duurzaamheid",
    image: caseBatterij,
  },
  {
    title: "Theoriedoen.be",
    description: "Online platform voor autotheorie-examens in België. Focus op conversie, gebruiksvriendelijkheid en hoge slagingspercentages.",
    industry: "EdTech",
    image: caseTheoriedoen,
  },
  {
    title: "Nederlands Soortenregister",
    description: "Centrale database voor Nederlandse biodiversiteit met gestandaardiseerde referentiedata, foto's en geluiden.",
    industry: "Overheid & Wetenschap",
    image: caseSoortenregister,
  },
  {
    title: "Biodiversity",
    description: "Vernieuwend platform voor het zoeken, analyseren en ontdekken van soorten. Moderne interface met geavanceerde zoekfunctionaliteit.",
    industry: "Wetenschap",
    image: caseBiodiversity,
  },
  {
    title: "Jawel Infra",
    description: "Krachtige website voor een infrastructuurbedrijf. Focus op betrouwbaarheid, diensten en projectpresentatie.",
    industry: "Infrastructuur",
    image: caseJawel,
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
                <div className="absolute inset-0 bg-background/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center pointer-events-none">
                  <span className="bg-brand text-brand-foreground font-body font-medium text-sm uppercase tracking-wide px-6 py-3 rounded-full shadow-lg scale-90 group-hover:scale-100 transition-transform duration-500">
                    Bekijk case
                  </span>
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
