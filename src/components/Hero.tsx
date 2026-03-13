import { motion, useScroll, useTransform } from "framer-motion";
import portfolioCollage from "@/assets/portfolio-collage.png";

const Hero = () => {
  const { scrollY } = useScroll();
  const collageY = useTransform(scrollY, [0, 600], [0, -80]);

  return (
    <section className="relative overflow-hidden pt-20">
      <div className="swiss-container w-full relative z-10 flex flex-col items-center text-center min-h-[60vh] justify-center">
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

      {/* Portfolio collage flowing down */}
      <motion.div
        className="relative z-0 w-full flex justify-center -mt-4"
        style={{ y: collageY }}
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
      >
        <div className="w-full max-w-5xl px-4 [mask-image:linear-gradient(to_bottom,black_50%,transparent_100%)]">
          <img
            src={portfolioCollage}
            alt="Portfolio overzicht van website projecten"
            className="w-full h-auto"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
