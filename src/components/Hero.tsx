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
          className="flex flex-col items-center text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="section-label mb-6">UIUXDESIGNER.NL</p>

          <h1 className="heading-xl mb-8 max-w-4xl">
            Websites voor groeiende bedrijven.
          </h1>

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
