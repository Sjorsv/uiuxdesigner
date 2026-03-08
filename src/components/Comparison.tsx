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
                {["Dure tarieven", "Lange doorlooptijden", "Meerdere contactpersonen", "Veel overleg"].map((item) => (
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
            {/* Experience badge */}
            <motion.div
              className="absolute -top-3 -right-3 md:top-4 md:right-4 w-24 h-24 md:w-28 md:h-28 rounded-full bg-brand flex flex-col items-center justify-center text-brand-foreground shadow-[0_4px_30px_hsl(var(--brand)/0.3)] z-10"
              initial={{ scale: 0, rotate: -20 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4, type: "spring", stiffness: 200 }}
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              <span className="font-display font-bold text-2xl md:text-3xl leading-none">6+</span>
              <span className="font-body text-[10px] md:text-xs uppercase tracking-wider leading-tight mt-0.5">jaar</span>
              <span className="font-body text-[10px] md:text-xs uppercase tracking-wider leading-tight">ervaring</span>
            </motion.div>

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
