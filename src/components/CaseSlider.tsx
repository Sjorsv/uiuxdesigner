import { useRef, type PointerEvent as ReactPointerEvent } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
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
  const scrollRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef(false);
  const dragStartXRef = useRef(0);
  const dragStartScrollLeftRef = useRef(0);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const amount = scrollRef.current.clientWidth * 0.7;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -amount : amount,
        behavior: "smooth",
      });
    }
  };

  const handlePointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    const el = scrollRef.current;
    if (!el) return;

    isDraggingRef.current = true;
    dragStartXRef.current = event.clientX;
    dragStartScrollLeftRef.current = el.scrollLeft;
    el.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    const el = scrollRef.current;
    if (!el || !isDraggingRef.current) return;

    const deltaX = event.clientX - dragStartXRef.current;
    el.scrollLeft = dragStartScrollLeftRef.current - deltaX;
  };

  const stopDragging = () => {
    isDraggingRef.current = false;
  };

  return (
    <section className="py-32 relative" id="cases">
      <div className="swiss-container mb-12">
        <div className="flex items-end justify-between">
          <div>
            <span className="section-number">01</span>
            <span className="section-label ml-4">Featured Cases</span>
            <h2 className="heading-lg mt-4">Geselecteerd werk</h2>
          </div>
          <div className="hidden sm:flex gap-3">
            <button
              onClick={() => scroll("left")}
              className="w-12 h-12 border border-border flex items-center justify-center hover:border-foreground transition-colors"
              aria-label="Vorige"
            >
              <ArrowLeft className="w-5 h-5 text-foreground" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-12 h-12 border border-border flex items-center justify-center hover:border-foreground transition-colors"
              aria-label="Volgende"
            >
              <ArrowRight className="w-5 h-5 text-foreground" />
            </button>
          </div>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-8 overflow-x-auto scrollbar-hide px-6 md:px-12 lg:px-16 snap-x snap-mandatory pb-4 cursor-grab active:cursor-grabbing select-none"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={stopDragging}
        onPointerLeave={stopDragging}
        onPointerCancel={stopDragging}
        onDragStart={(event) => event.preventDefault()}
      >
        {cases.map((project, index) => (
          <motion.div
            key={project.title}
            className="flex-shrink-0 w-[85vw] sm:w-[70vw] md:w-[55vw] lg:w-[45vw] snap-start group cursor-pointer"
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
                <h3 className="font-display font-bold text-xl md:text-2xl text-foreground mb-2">
                  {project.title}
                </h3>
                <p className="body-md max-w-md">{project.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="swiss-container mt-12">
        <a href="#portfolio" className="btn-outline">
          Bekijk alle projecten
        </a>
      </div>
    </section>
  );
};

export default CaseSlider;
