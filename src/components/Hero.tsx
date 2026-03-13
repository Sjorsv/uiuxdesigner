import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Different speeds for parallax depth
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -220]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 45]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Subtle grid lines */}
      <div className="absolute inset-0 swiss-container pointer-events-none">
        <div className="h-full grid grid-cols-12 gap-0">
          {Array.from({ length: 13 }).map((_, i) => (
            <div key={i} className={`grid-line ${i === 12 ? "border-r border-border/30" : ""}`} />
          ))}
        </div>
      </div>

      {/* Parallax floating shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Small square — top left */}
        <motion.div
          style={{ y: y3, rotate: rotate1, opacity }}
          className="absolute top-[12%] left-[10%] w-6 h-6 border border-foreground/15 rounded-sm"
        />
        {/* Cross — top right */}
        <motion.div
          style={{ y: y4, rotate: rotate2, opacity }}
          className="absolute top-[18%] right-[12%]"
        >
          <div className="relative w-5 h-5">
            <div className="absolute top-1/2 left-0 w-full h-px bg-foreground/20 -translate-y-1/2" />
            <div className="absolute left-1/2 top-0 h-full w-px bg-foreground/20 -translate-x-1/2" />
          </div>
        </motion.div>
        {/* Medium square — left center */}
        <motion.div
          style={{ y: y2, rotate: rotate2, opacity }}
          className="absolute top-[40%] left-[6%] w-10 h-10 border border-foreground/10 rounded-sm"
        />
        {/* Square — bottom right */}
        <motion.div
          style={{ y: y2, rotate: rotate1, opacity }}
          className="absolute bottom-[30%] right-[18%] w-8 h-8 border border-foreground/15 rounded-sm"
        />
        {/* Cross — bottom left */}
        <motion.div
          style={{ y: y1, opacity }}
          className="absolute bottom-[22%] left-[15%]"
        >
          <div className="relative w-7 h-7">
            <div className="absolute top-1/2 left-0 w-full h-px bg-foreground/15 -translate-y-1/2" />
            <div className="absolute left-1/2 top-0 h-full w-px bg-foreground/15 -translate-x-1/2" />
          </div>
        </motion.div>
        {/* Large cross — right */}
        <motion.div
          style={{ y: y4, rotate: rotate2, opacity }}
          className="absolute top-[60%] right-[6%]"
        >
          <div className="relative w-10 h-10">
            <div className="absolute top-1/2 left-0 w-full h-px bg-foreground/20 -translate-y-1/2" />
            <div className="absolute left-1/2 top-0 h-full w-px bg-foreground/20 -translate-x-1/2" />
          </div>
        </motion.div>
        {/* Small square — bottom center */}
        <motion.div
          style={{ y: y2, rotate: rotate1, opacity }}
          className="absolute bottom-[15%] right-[35%] w-5 h-5 border border-foreground/10 rounded-sm"
        />
      </div>

      <div className="swiss-container w-full relative z-10">
        <motion.div
          className="flex flex-col items-center text-center relative"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ y: y1 }}
        >
          <p className="section-label mb-6">UIUXDESIGNER.NL</p>

          {/* CTA badge - above heading on mobile only */}
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

            {/* CTA badge - original position on desktop */}
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

          <p className="body-lg mb-12 max-w-md">
            Agency kwaliteit. Freelance flexibiliteit.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <a href="#portfolio" className="btn-primary">
              Bekijk werk
            </a>
            <a href="#contact" className="btn-outline">
              Start een project
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
