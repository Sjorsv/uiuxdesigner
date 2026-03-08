import { motion } from "framer-motion";

const services = [
  { title: "Website Design", description: "Volledig op maat ontworpen websites die jouw merk versterken en bezoekers converteren." },
  { title: "Website Redesign", description: "Je bestaande website moderniseren met een frisse look, betere structuur en hogere conversie." },
  { title: "UX Improvement", description: "Gebruikerservaring optimaliseren voor betere resultaten en hogere klanttevredenheid." },
  { title: "Landing Pages", description: "Gerichte landingspagina's die bezoekers omzetten in leads en klanten." },
  { title: "Build Support", description: "Ondersteuning bij de technische realisatie van jouw website in Webflow, WordPress of code." },
];

const Services = () => {
  return (
    <section className="py-32 border-t border-border" id="services">
      <div className="swiss-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4">
            <span className="section-number">03</span>
            <span className="section-label ml-4">Diensten</span>
            <h2 className="heading-lg mt-4 mb-8">Wat ik <span className="text-brand">doe</span></h2>
            <p className="body-md max-w-sm">
              UIUXDESIGNER.NL helpt bedrijven moderne websites te creëren die helder communiceren en bezoekers omzetten in klanten.
            </p>
          </div>

          <div className="lg:col-span-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="border-t border-border py-8 group cursor-pointer"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-start justify-between gap-8">
                  <div>
                    <h3 className="font-display font-bold text-xl md:text-2xl text-foreground group-hover:text-secondary transition-colors">
                      {service.title}
                    </h3>
                    <p className="body-md mt-2 max-w-lg">{service.description}</p>
                  </div>
                  <span className="section-number mt-2">{String(index + 1).padStart(2, "0")}</span>
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
