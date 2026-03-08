import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Subtle grid lines */}
      <div className="absolute inset-0 swiss-container pointer-events-none">
        <div className="h-full grid grid-cols-12 gap-0">
          {Array.from({ length: 13 }).map((_, i) => (
            <div key={i} className={`grid-line ${i === 12 ? "border-r border-border/30" : ""}`} />
          ))}
        </div>
      </div>

      <div className="swiss-container w-full relative z-10">
        <motion.div
          className="flex flex-col items-center text-center relative"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="section-label mb-6">UIUXDESIGNER.NL</p>

          <div className="relative">
            <h1 className="heading-xl mb-8 max-w-4xl">
              Websites voor <span className="text-brand">groeiende</span> bedrijven.
            </h1>

            {/* Experience badge */}
            <motion.div
              className="absolute -top-4 -right-8 md:-right-20 lg:-right-24 w-24 h-24 md:w-28 md:h-28 rounded-full bg-brand flex flex-col items-center justify-center text-brand-foreground shadow-[0_4px_30px_hsl(var(--brand)/0.3)]"
              initial={{ scale: 0, rotate: -20 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.6, delay: 0.5, type: "spring", stiffness: 200 }}
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              <span className="font-display font-bold text-2xl md:text-3xl leading-none">6+</span>
              <span className="font-body text-[10px] md:text-xs uppercase tracking-wider leading-tight mt-0.5">jaar</span>
              <span className="font-body text-[10px] md:text-xs uppercase tracking-wider leading-tight">ervaring</span>
            </motion.div>
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
