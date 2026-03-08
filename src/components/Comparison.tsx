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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            className="bg-surface rounded-2xl p-10 md:p-12 border border-border/50 relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-muted/30 to-transparent pointer-events-none" />
            <div className="relative">
              <h3 className="font-display font-bold text-xl text-muted-foreground mb-10">Traditioneel agency</h3>
              <ul className="space-y-6">
                {["Dure tarieven", "Lange doorlooptijden", "Meerdere contactpersonen", "Rigide processen"].map((item) => (
                  <li key={item} className="flex items-center gap-4 text-muted-foreground font-body text-base">
                    <span className="w-6 h-6 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                      <X className="w-3.5 h-3.5" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div
            className="bg-primary rounded-2xl p-10 md:p-12 relative overflow-hidden shadow-[0_8px_40px_-12px_hsl(var(--primary)/0.15)]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-brand/10 to-transparent pointer-events-none" />
            <div className="relative">
              <h3 className="font-display font-bold text-xl text-primary-foreground mb-10">UIUXDESIGNER.NL</h3>
              <ul className="space-y-6">
                {["Direct contact", "Snelle iteratie", "Flexibele samenwerking", "Agency-level kwaliteit"].map((item) => (
                  <li key={item} className="flex items-center gap-4 text-primary-foreground font-body text-base">
                    <span className="w-6 h-6 rounded-full bg-brand/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3.5 h-3.5 text-brand" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
