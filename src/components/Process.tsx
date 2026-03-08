import { motion } from "framer-motion";

const steps = [
  { number: "01", title: "Discover", description: "Doelen, doelgroep en merkidentiteit in kaart brengen." },
  { number: "02", title: "Structure", description: "Sitemap, content structuur en wireframes opzetten." },
  { number: "03", title: "Design", description: "Visueel ontwerp dat je merk versterkt en converteert." },
  { number: "04", title: "Build", description: "Pixel-perfect realisatie, testen en lancering." },
];

const Process = () => {
  return (
    <section className="py-32 border-t border-border" id="process">
      <div className="swiss-container">
        <div className="mb-20">
          <span className="section-number">05</span>
          <span className="section-label ml-4">Werkwijze</span>
          <h2 className="heading-lg mt-4">Proces</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -6 }}
            >
              <span className="font-display font-bold text-5xl md:text-6xl text-border block mb-6 transition-colors duration-300 group-hover:text-foreground">
                {step.number}
              </span>
              <div className="w-12 h-px bg-foreground mb-6 transition-all duration-300 group-hover:w-full group-hover:bg-brand" />
              <h3 className="font-display font-bold text-xl text-foreground mb-3 transition-colors duration-300 group-hover:text-brand">{step.title}</h3>
              <p className="body-md">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
