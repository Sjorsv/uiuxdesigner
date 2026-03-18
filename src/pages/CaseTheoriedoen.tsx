import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import theoriedoenHero from "@/assets/theoriedoen-hero.png";
import theoriedoenLanding from "@/assets/theoriedoen-landing.png";
import theoriedoenSocials from "@/assets/theoriedoen-socials.png";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const CaseTheoriedoen = () => {
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
              <span className="section-label mb-4 block">EdTech · UI/UX Design · Webdesign · Branding</span>
              <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 leading-[1.1]">
                Theoriedoen.be
              </h1>
              <p className="body-md mb-8 max-w-lg">
                Complete redesign van het #1 autotheorie-platform in België. Van landingspagina tot social media — een samenhangend merk dat jongeren aanspreekt en converteert.
              </p>
              <a
                href="https://theoriedoen.be"
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

      {/* Hero Image */}
      <section>
        <div className="swiss-container">
          <motion.img {...fadeUp} src={theoriedoenHero} alt="Theoriedoen.be hero sectie" className="w-full h-auto rounded-sm" />
        </div>
      </section>

      {/* Text: Het verhaal */}
      <section className="py-24 md:py-32">
        <div className="swiss-container">
          <motion.div {...fadeUp} className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-5">
              <span className="section-label mb-4 block">Het verhaal</span>
              <h2 className="heading-md text-foreground">
                Het #1 platform voor autotheorie in België, klaar voor de volgende stap.
              </h2>
            </div>
            <div className="lg:col-span-6 lg:col-start-7 flex flex-col justify-center">
              <p className="body-md mb-6">
                Theoriedoen.be helpt duizenden jongeren in België om hun autotheorie-examen te halen. Met meer dan 50.000 geslaagde cursisten en een slagpercentage van 99% zijn ze marktleider in hun segment.
              </p>
              <p className="body-md">
                De opdracht: een complete visuele redesign die het platform moderner, betrouwbaarder en conversiegerichter maakt — inclusief landingspagina, social media content en een herkenbare merkidentiteit.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Image: Landing page */}
      <section>
        <div className="swiss-container">
          <motion.img {...fadeUp} src={theoriedoenLanding} alt="Theoriedoen.be volledige landingspagina" className="w-full h-auto rounded-sm" />
        </div>
      </section>

      {/* Text: Designaanpak */}
      <section className="py-24 md:py-32">
        <div className="swiss-container">
          <motion.div {...fadeUp} className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-5">
              <span className="section-label mb-4 block">Designaanpak</span>
              <h2 className="heading-md text-foreground">
                Energiek, betrouwbaar en direct herkenbaar.
              </h2>
            </div>
            <div className="lg:col-span-6 lg:col-start-7 flex flex-col justify-center">
              <p className="body-md mb-6">
                Het design speelt in op de jonge doelgroep met een krachtig blauw-geel kleurenpalet, dynamische fotografie en een speelse maar professionele tone of voice. Elke sectie is geoptimaliseerd voor conversie.
              </p>
              <p className="body-md">
                Van prijstabellen met duidelijke vergelijking tot sociale bewijskracht met reviews en statistieken — elk element stuurt bezoekers richting aanmelding.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Text: Landingspagina */}
      <section className="py-24 md:py-32 border-t border-border">
        <div className="swiss-container">
          <motion.div {...fadeUp} className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-5">
              <span className="section-label mb-4 block">Landingspagina</span>
              <h2 className="heading-md text-foreground">
                Een homepage die overtuigt in elke scroll.
              </h2>
            </div>
            <div className="lg:col-span-6 lg:col-start-7 flex flex-col justify-center">
              <p className="body-md mb-6">
                De landingspagina opent met een krachtige hero: "Klaar om je autotheorie te halen?" Direct gevolgd door social proof — 50.993 cursisten, 99% slagpercentage en een 4.8/5 beoordeling.
              </p>
              <p className="body-md">
                Daaronder volgen secties voor examencategorieën, het stappenplan, reviews van echte gebruikers, een gratis demo-aanbod en transparante prijzen. Alles is gericht op het wegnemen van twijfel.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Image: Socials */}
      <section>
        <div className="swiss-container">
          <motion.img {...fadeUp} src={theoriedoenSocials} alt="Theoriedoen.be social media content" className="w-full h-auto rounded-sm" />
        </div>
      </section>

      {/* Text: Social media */}
      <section className="py-24 md:py-32">
        <div className="swiss-container">
          <motion.div {...fadeUp} className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-5">
              <span className="section-label mb-4 block">Social media & Branding</span>
              <h2 className="heading-md text-foreground">
                Consistent merk over alle kanalen heen.
              </h2>
            </div>
            <div className="lg:col-span-6 lg:col-start-7 flex flex-col justify-center">
              <p className="body-md mb-6">
                Naast de website is een complete set social media templates ontworpen. Van Instagram stories tot Facebook-advertenties — elke uiting draagt hetzelfde herkenbare blauw-gele DNA.
              </p>
              <p className="body-md">
                De templates zijn ontworpen voor variatie binnen consistentie: verschillende formaten en boodschappen, maar altijd onmiskenbaar Theoriedoen.be.
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

export default CaseTheoriedoen;
