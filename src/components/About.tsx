import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import portrait from "@/assets/portrait.jpg";

const About = () => {
  const [hovering, setHovering] = useState(false);

  return (
    <section className="py-32 border-t border-border" id="about">
      <div className="swiss-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4">
            <span className="section-number">06</span>
            <span className="section-label ml-4">Over</span>
            <div
              className="relative inline-block cursor-pointer"
              onMouseEnter={() => setHovering(true)}
              onMouseLeave={() => setHovering(false)}
            >
              <h2 className="heading-lg mt-4">Over UIUXDESIGNER</h2>
              <AnimatePresence>
                {hovering && (
                  <motion.div
                    className="absolute -top-6 -right-10 md:-right-14 w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-2 border-brand shadow-[0_4px_20px_hsl(var(--brand)/0.3)] z-10"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  >
                    <img
                      src={portrait}
                      alt="Portrait"
                      className="w-full h-full object-cover scale-125"
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          <motion.div
            className="lg:col-span-7 lg:col-start-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="body-lg mb-8 font-medium max-w-none whitespace-nowrap">
              Ik ontwerp en bouw moderne websites voor bedrijven in uiteenlopende sectoren.
            </p>
            <p className="body-md mb-8">
              Mijn focus ligt op helder design, sterke structuur en websites die bezoekers omzetten in klanten.
            </p>
            <p className="body-md">
              Elke website wordt zorgvuldig ontworpen met aandacht voor typografie, gebruiksvriendelijkheid en een uitstraling die past bij het bedrijf erachter.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
