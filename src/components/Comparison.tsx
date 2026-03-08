import { motion } from "framer-motion";
import { X, Check } from "lucide-react";

const Comparison = () => {
  return (
    <section className="py-32 border-t border-border">
      <div className="swiss-container">
        <div className="mb-16">
          <span className="section-number">04</span>
          <span className="section-label ml-4">Waarom</span>
          <h2 className="heading-lg mt-4">Waarom UIUXDESIGNER</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
          <motion.div
            className="bg-surface p-8 md:p-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="font-display font-bold text-lg text-muted-foreground mb-8">Traditioneel agency</h3>
            <ul className="space-y-5">
              {["Dure tarieven", "Lange doorlooptijden", "Meerdere contactpersonen", "Rigide processen"].map((item) => (
                <li key={item} className="flex items-center gap-3 text-muted-foreground font-body">
                  <X className="w-4 h-4 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className="bg-foreground p-8 md:p-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <h3 className="font-display font-bold text-lg text-background mb-8">UIUXDESIGNER.NL</h3>
            <ul className="space-y-5">
              {["Direct contact", "Snelle iteratie", "Flexibele samenwerking", "Agency-level kwaliteit"].map((item) => (
                <li key={item} className="flex items-center gap-3 text-background font-body">
                  <Check className="w-4 h-4 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
