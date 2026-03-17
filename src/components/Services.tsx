import { motion } from "framer-motion";


const services = [
  { title: "Website Design", description: "Volledig op maat ontworpen websites die jouw bedrijf versterken en bezoekers begeleiden naar actie." },
  { title: "Website Development", description: "Technische realisatie van snelle, schaalbare websites in WordPress, Webflow, Framer of maatwerk code." },
  { title: "Website Redesign", description: "Bestaande websites moderniseren met een sterkere structuur, betere gebruikerservaring en hogere conversie." },
  { title: "UX & Conversion", description: "Structuur, navigatie en gebruikerservaring optimaliseren zodat bezoekers sneller vinden wat ze zoeken en eerder contact opnemen." },
  { title: "Branding & Visual Content", description: "Het ontwikkelen van een sterke visuele identiteit en het creëren van fotografie of video die zorgt voor herkenbaarheid en een consistente uitstraling online." },
];

const Services = () => {
  return (
    <section className="py-32 border-t border-border" id="services">
      <div className="swiss-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4">
            <span className="section-number">03</span>
            <span className="section-label ml-4">Diensten</span>
            <h2 className="heading-lg mt-4 mb-8">Expertises</h2>
            <p className="body-md max-w-sm">
              UIUXDESIGNER.NL helpt bedrijven moderne websites te creëren die helder communiceren en bezoekers omzetten in klanten.
            </p>
          </div>

          <div className="lg:col-span-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="border-t border-border py-8 group cursor-pointer transition-colors duration-300 hover:bg-surface/50 -mx-6 px-6 rounded-xl"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ x: 8 }}
              >
                <div className="flex items-start justify-between gap-8">
                  <div>
                    <h3 className="font-display font-bold text-xl md:text-2xl text-foreground group-hover:text-brand transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="body-md mt-2 max-w-lg">{service.description}</p>
                  </div>
                  <div className="flex items-center gap-3 mt-2">
                    <span className="section-number">{String(index + 1).padStart(2, "0")}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
