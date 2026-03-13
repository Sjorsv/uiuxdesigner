import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import caseBatterij from "@/assets/case-batterij.png";
import caseBiodiversity from "@/assets/case-biodiversity.png";
import caseGmt from "@/assets/case-gmt.png";
import caseJawel from "@/assets/case-jawel.png";
import caseMaxled from "@/assets/case-maxled.png";
import caseTheoriedoen from "@/assets/case-theoriedoen.png";

const floatingImages = [
  { src: caseMaxled, x: "6%", y: "28%", size: "w-36", rotate: -4, scrollSpeed: 0.3 },
  { src: caseGmt, x: "78%", y: "24%", size: "w-40", rotate: 3, scrollSpeed: 0.5 },
  { src: caseBiodiversity, x: "4%", y: "62%", size: "w-32", rotate: 2, scrollSpeed: 0.2 },
  { src: caseJawel, x: "82%", y: "58%", size: "w-36", rotate: -3, scrollSpeed: 0.4 },
  { src: caseBatterij, x: "15%", y: "78%", size: "w-28", rotate: 1, scrollSpeed: 0.15 },
  { src: caseTheoriedoen, x: "72%", y: "76%", size: "w-32", rotate: -2, scrollSpeed: 0.35 },
];

const FloatingImage = ({ img }: { img: typeof floatingImages[0] }) => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 800], [0, -120 * img.scrollSpeed]);

  return (
    <motion.div
      className={`absolute ${img.size} rounded-xl overflow-hidden`}
      style={{ left: img.x, top: img.y, rotate: img.rotate, y }}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 0.4, scale: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
      <img
        src={img.src}
        alt=""
        className="w-full h-auto object-cover"
        loading="lazy"
      />
    </motion.div>
  );
};

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Floating project screenshots */}
      <div className="absolute inset-0 pointer-events-none z-0 hidden md:block">
        {floatingImages.map((img, i) => (
          <FloatingImage key={i} img={img} />
        ))}
      </div>

      <div className="swiss-container w-full relative z-10">
        <motion.div
          className="flex flex-col items-center text-center relative"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="section-label mb-6">UIUXDESIGNER.NL</p>

          <motion.a
            href="#contact"
            className="md:hidden mb-6 w-28 h-28 rounded-full bg-brand flex flex-col items-center justify-center text-brand-foreground shadow-[0_4px_30px_hsl(var(--brand)/0.3)] cursor-pointer no-underline"
            initial={{ scale: 0, rotate: -20 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.6, delay: 0.5, type: "spring", stiffness: 200 }}
            whileHover={{ scale: 1.1, rotate: 5 }}
          >
            <span className="font-body text-[9px] uppercase tracking-wider leading-tight text-center px-3">Vraag gratis</span>
            <span className="font-display font-bold text-sm leading-tight text-center">ontwerp</span>
            <span className="font-body text-[9px] uppercase tracking-wider leading-tight text-center">aan →</span>
          </motion.a>

          <div className="relative">
            <h1 className="heading-xl mb-8 max-w-4xl">
              Websites voor <span className="text-brand">groeiende</span> bedrijven.
            </h1>

            <motion.a
              href="#contact"
              className="hidden md:flex absolute -top-4 -right-20 lg:-right-24 w-32 h-32 rounded-full bg-brand flex-col items-center justify-center text-brand-foreground shadow-[0_4px_30px_hsl(var(--brand)/0.3)] cursor-pointer no-underline"
              initial={{ scale: 0, rotate: -20 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.6, delay: 0.5, type: "spring", stiffness: 200 }}
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              <span className="font-body text-[10px] uppercase tracking-wider leading-tight text-center px-3">Vraag gratis</span>
              <span className="font-display font-bold text-base leading-tight text-center">ontwerp</span>
              <span className="font-body text-[10px] uppercase tracking-wider leading-tight text-center">aan →</span>
            </motion.a>
          </div>

          <p className="body-lg mb-8 max-w-lg">
            Design, strategie en development.
            <br />
            Alles in één traject.
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-4">
            <a href="#portfolio" className="btn-primary">
              Bekijk projecten
            </a>
            <a href="#contact" className="btn-outline group">
              Start een project
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
          </div>

          <p className="text-xs text-muted-foreground tracking-wide">
            Agency kwaliteit, zonder agency prijs
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
