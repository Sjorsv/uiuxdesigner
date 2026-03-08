import { motion } from "framer-motion";
import caseGmt from "@/assets/case-gmt.png";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden pt-20">
      {/* Subtle grid lines */}
      <div className="absolute inset-0 swiss-container pointer-events-none">
        <div className="h-full grid grid-cols-12 gap-0">
          {Array.from({ length: 13 }).map((_, i) => (
            <div key={i} className={`grid-line ${i === 12 ? "border-r border-border/30" : ""}`} />
          ))}
        </div>
      </div>

      <div className="swiss-container w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left content */}
          <div className="lg:col-span-6 xl:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-6 mb-10">
                <span className="section-label">Web Design</span>
                <span className="w-8 h-px bg-border" />
                <span className="section-label">UX</span>
                <span className="w-8 h-px bg-border" />
                <span className="section-label">Build</span>
              </div>

              <p className="section-label mb-6">UIUXDESIGNER.NL</p>

              <h1 className="heading-xl mb-8">
                Websites voor groeiende bedrijven.
              </h1>

              <p className="body-lg mb-12 max-w-md">
                Agency kwaliteit. Freelance flexibiliteit.
              </p>

              <div className="flex flex-wrap gap-4">
                <a href="#portfolio" className="btn-primary">
                  Bekijk werk
                </a>
                <a href="#contact" className="btn-outline">
                  Start een project
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right visual */}
          <div className="lg:col-span-6 xl:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <img
                src={caseGmt}
                alt="Website design showcase on laptop mockup"
                className="w-full max-w-[700px] ml-auto drop-shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
