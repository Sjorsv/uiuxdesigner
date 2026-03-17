import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import bouwmeesterFull from "@/assets/bouwmeester-full.jpg";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const CaseBouwmeester = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="swiss-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 font-body text-sm text-muted-foreground hover:text-foreground transition-colors mb-12"
            >
              <ArrowLeft className="w-4 h-4" />
              Ga terug
            </Link>
          </motion.div>

          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="section-label mb-4 block">Bouw & Installatie · Webdesign</span>
              <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 leading-[1.1]">
                Bouwmeester
              </h1>
              <p className="body-md mb-8 max-w-lg">
                Professionele website voor een loodgieter- en installatiebedrijf in de regio Zwolle. Focus op dienstverlening, vertrouwen en lokale vindbaarheid.
              </p>
              <a
                href="https://bouwmeesterinstallatietechniek.nl"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2"
              >
                Bekijk website
                <ExternalLink className="w-4 h-4" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Full page screenshot */}
      <section>
        <div className="swiss-container">
          <motion.img {...fadeUp} src={bouwmeesterFull} alt="Bouwmeester website overzicht" className="w-full h-auto rounded-sm" />
        </div>
      </section>

      {/* Text: De opdracht */}
      <section className="py-24 md:py-32">
        <div className="swiss-container">
          <motion.div {...fadeUp} className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-5">
              <span className="section-label mb-4 block">De opdracht</span>
              <h2 className="heading-md text-foreground">
                Een betrouwbare online uitstraling voor een vakman.
              </h2>
            </div>
            <div className="lg:col-span-6 lg:col-start-7 flex flex-col justify-center">
              <p className="body-md mb-6">
                Bouwmeester Installatietechniek is een loodgieter- en installatiebedrijf in de regio Zwolle. Ze hadden behoefte aan een professionele website die hun vakmanschap en betrouwbaarheid uitstraalt.
              </p>
              <p className="body-md">
                De doelstelling was helder: meer aanvragen genereren via de website, lokaal beter vindbaar worden en vertrouwen opbouwen bij potentiële klanten.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Text: Aanpak */}
      <section className="py-24 md:py-32 border-t border-border">
        <div className="swiss-container">
          <motion.div {...fadeUp} className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-5">
              <span className="section-label mb-4 block">Aanpak</span>
              <h2 className="heading-md text-foreground">
                Structuur, vertrouwen en conversie als leidraad.
              </h2>
            </div>
            <div className="lg:col-span-6 lg:col-start-7 flex flex-col justify-center">
              <p className="body-md mb-6">
                We hebben de website opgezet rond de kernwaarden van het bedrijf: vakmanschap, betrouwbaarheid en snelle service. De sitemap is gericht op duidelijke dienstverlening en laagdrempelig contact.
              </p>
              <p className="body-md">
                Met sterke fotografie, heldere teksten en prominente call-to-actions wordt de bezoeker snel naar een contactmoment begeleid.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Text: Resultaat */}
      <section className="py-24 md:py-32 border-t border-border">
        <div className="swiss-container">
          <motion.div {...fadeUp} className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-5">
              <span className="section-label mb-4 block">Resultaat</span>
              <h2 className="heading-md text-foreground">
                Een website die vertrouwen wekt en converteert.
              </h2>
            </div>
            <div className="lg:col-span-6 lg:col-start-7 flex flex-col justify-center">
              <p className="body-md mb-6">
                Het eindresultaat is een volledig responsieve website die op elk apparaat professioneel oogt. De projectenpagina en expertises geven bezoekers direct inzicht in het werk van Bouwmeester.
              </p>
              <p className="body-md">
                De website is geoptimaliseerd voor lokale vindbaarheid en heeft bijgedragen aan een significante toename in online aanvragen.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 border-t border-border">
        <div className="swiss-container text-center">
          <motion.div {...fadeUp}>
            <h2 className="font-display font-bold text-2xl md:text-3xl text-foreground mb-6">
              Ook een sterk online platform nodig?
            </h2>
            <a href="/#contact" className="btn-primary">
              Start een project
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CaseBouwmeester;
