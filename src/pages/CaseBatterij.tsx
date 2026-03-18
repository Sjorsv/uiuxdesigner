import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Leaf, Recycle, Battery, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import batterijLanding from "@/assets/batterij-landing.png";
import batterijHome from "@/assets/batterij-home.png";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const CaseBatterij = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20">
        <div className="swiss-container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Link to="/portfolio" className="inline-flex items-center gap-2 font-body text-sm text-muted-foreground hover:text-foreground transition-colors mb-12">
              <ArrowLeft className="w-4 h-4" />
              Ga terug
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            <motion.div className="lg:col-span-7" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <span className="section-label mb-4 block">Duurzaamheid · Webdesign & Branding</span>
              <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 leading-[1.1]">
                Batterij-recyclen.nl
              </h1>
              <p className="body-md mb-8 max-w-lg">
                Platform voor verantwoord batterijbeheer en recycling. Een missie-gedreven website die bijdraagt aan de transitie naar een groene economie.
              </p>
              <a
                href="https://batterij-recyclen.nl"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2"
              >
                Bekijk website
                <ExternalLink className="w-4 h-4" />
              </a>
            </motion.div>

            <motion.div className="lg:col-span-5 flex gap-6 justify-end" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.3 }}>
              {[
                { icon: Battery, label: "Batterijbeheer" },
                { icon: Recycle, label: "Recycling" },
                { icon: Leaf, label: "Duurzaamheid" },
                { icon: Globe, label: "Groene economie" },
              ].map((item) => (
                <div key={item.label} className="flex flex-col items-center gap-2 text-center">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-accent-foreground" />
                  </div>
                  <span className="text-xs font-body text-muted-foreground">{item.label}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Hero visual */}
      <section>
        <div className="swiss-container">
          <motion.img {...fadeUp} src={batterijLanding} alt="Batterij-recyclen.nl hero section" className="w-full h-auto rounded-sm" />
        </div>
      </section>

      {/* De opdracht */}
      <section className="py-24 md:py-32">
        <div className="swiss-container">
          <motion.div {...fadeUp} className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-5">
              <span className="section-label mb-4 block">De opdracht</span>
              <h2 className="heading-md text-foreground">
                Duurzaamheid zichtbaar en toegankelijk maken.
              </h2>
            </div>
            <div className="lg:col-span-6 lg:col-start-7 flex flex-col justify-center">
              <p className="body-md mb-6">
                Batterij-recyclen.nl had een duidelijke missie: het bewustzijn rondom verantwoord batterijbeheer vergroten en bedrijven begeleiden in de transitie naar een circulaire economie.
              </p>
              <p className="body-md">
                De uitdaging was om complexe informatie over recyclingprocessen en regelgeving om te zetten in een helder, visueel aantrekkelijk platform dat zowel bedrijven als consumenten aanspreekt.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Inspiratie */}
      <section className="py-24 md:py-32 border-t border-border">
        <div className="swiss-container">
          <motion.div {...fadeUp} className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-5">
              <span className="section-label mb-4 block">Inspiratie</span>
              <h2 className="heading-md text-foreground">
                Natuur als visuele taal voor technologie.
              </h2>
            </div>
            <div className="lg:col-span-6 lg:col-start-7 flex flex-col justify-center">
              <p className="body-md mb-6">
                De visuele richting is geïnspireerd op het samenspel tussen technologie en natuur. We kozen voor een donker kleurenpalet gecombineerd met levendig groen — een directe verwijzing naar duurzaamheid en groene energie.
              </p>
              <p className="body-md mb-6">
                Organische vormen doorbreken de strakke structuur en verwijzen naar de circulaire beweging van recycling. Beelden van windmolens en groene landschappen versterken het verhaal van een schonere toekomst.
              </p>
              <p className="body-md">
                Het resultaat is een merkidentiteit die vertrouwen en innovatie uitstraalt — passend bij een organisatie die vooroploopt in de transitie naar verantwoord batterijbeheer.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Full-page visual */}
      <section>
        <div className="swiss-container">
          <motion.img {...fadeUp} src={batterijHome} alt="Batterij-recyclen.nl volledige homepagina" className="w-full h-auto rounded-sm" />
        </div>
      </section>

      {/* Aanpak */}
      <section className="py-24 md:py-32">
        <div className="swiss-container">
          <motion.div {...fadeUp} className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-5">
              <span className="section-label mb-4 block">Aanpak</span>
              <h2 className="heading-md text-foreground">
                Informatie-architectuur met een groene missie.
              </h2>
            </div>
            <div className="lg:col-span-6 lg:col-start-7 flex flex-col justify-center">
              <p className="body-md mb-6">
                De website is opgebouwd rond drie pijlers: informeren, activeren en verbinden. Bezoekers worden stap voor stap meegenomen in het recyclingproces, van inzamelpunten tot de impact van verantwoord batterijbeheer.
              </p>
              <p className="body-md">
                Met prominente call-to-actions, een interactieve inzamelpuntenkaart en FAQ-sectie wordt de drempel om actie te ondernemen zo laag mogelijk gehouden.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Resultaat */}
      <section className="py-24 md:py-32 border-t border-border">
        <div className="swiss-container">
          <motion.div {...fadeUp} className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-5">
              <span className="section-label mb-4 block">Resultaat</span>
              <h2 className="heading-md text-foreground">
                Een platform dat duurzaamheid tastbaar maakt.
              </h2>
            </div>
            <div className="lg:col-span-6 lg:col-start-7 flex flex-col justify-center">
              <p className="body-md mb-6">
                Het eindresultaat is een volledig responsief platform dat complexe duurzaamheidsinformatie op een toegankelijke manier presenteert. De website combineert educatie met actie.
              </p>
              <p className="body-md">
                De krachtige visuele identiteit — donkere tinten met fris groen — zorgt voor herkenning en onderscheidt Batterij-recyclen.nl als autoriteit in de sector.
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
              Ook een missie-gedreven platform nodig?
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

export default CaseBatterij;
