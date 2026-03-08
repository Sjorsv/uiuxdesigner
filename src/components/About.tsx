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
