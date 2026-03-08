import { motion } from "framer-motion";

const FinalCTA = () => {
  return (
    <section className="py-32 md:py-48 border-t border-border" id="contact">
      <div className="swiss-container text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="section-label mb-8">Klaar om te beginnen?</p>
          <h2 className="heading-xl mb-12 max-w-4xl mx-auto">
            LET'S BUILD YOUR <span className="text-brand">NEXT</span> WEBSITE.
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="mailto:uiuxdesignernl@gmail.com" className="btn-primary">
              Start een project
            </a>
            <a href="mailto:uiuxdesignernl@gmail.com" className="btn-outline">
              Plan een call
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
