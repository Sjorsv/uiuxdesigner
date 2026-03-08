import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="py-32 border-t border-border" id="about">
      <div className="swiss-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4">
            <span className="section-number">06</span>
            <span className="section-label ml-4">Over</span>
            <h2 className="heading-lg mt-4">Over UIUXDESIGNER</h2>
          </div>

          <motion.div
            className="lg:col-span-7 lg:col-start-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="body-lg mb-8">
              UIUXDESIGNER.NL is een onafhankelijke webdesigner gevestigd in Nederland, werkzaam voor bedrijven in uiteenlopende sectoren.
            </p>
            <p className="body-md mb-8">
              Met een focus op helderheid, modern design en conversie-gerichte websites help ik groeiende bedrijven hun online aanwezigheid naar een hoger niveau te tillen.
            </p>
            <p className="body-md">
              Elke website wordt ontworpen met aandacht voor detail, sterke typografie en een gebruikerservaring die resultaat oplevert.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
