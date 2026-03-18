import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroImg from "@/assets/soortenregister-hero.png";
import homeImg from "@/assets/soortenregister-home.png";
import detailImg from "@/assets/soortenregister-detail.png";
import taxaImg from "@/assets/soortenregister-taxa.png";
import browseImg from "@/assets/soortenregister-browse.png";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const CaseSoortenregister = () => {
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

          <div className="max-w-2xl">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <span className="section-label mb-4 block">Overheid & Wetenschap · UX/UI Design</span>
              <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 leading-[1.1]">
                Nederlands Soortenregister
              </h1>
              <p className="body-md mb-8 max-w-lg">
                Centrale database voor alle bekende Nederlandse soorten — met gestandaardiseerde referentiedata, foto's, geluiden en DNA-barcodes.
              </p>
              <a
                href="https://nederlandsesoorten.nl"
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

      {/* Hero visual */}
      <section>
        <div className="swiss-container">
          <motion.img {...fadeUp} src={heroImg} alt="Nederlands Soortenregister landing page" className="w-full h-auto rounded-sm" />
        </div>
      </section>

      {/* De opdracht */}
      <section className="py-24 md:py-32">
        <div className="swiss-container">
          <motion.div {...fadeUp} className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-5">
              <span className="section-label mb-4 block">De opdracht</span>
              <h2 className="heading-md text-foreground">
                Biodiversiteitsdata toegankelijk maken voor iedereen.
              </h2>
            </div>
            <div className="lg:col-span-6 lg:col-start-7 flex flex-col justify-center">
              <p className="body-md mb-6">
                Het Nederlands Soortenregister is dé centrale database voor Nederlandse biodiversiteit, beheerd door Naturalis Biodiversity Center. Met meer dan 14 miljoen soorten en miljoenen barcodes, geluiden en foto's is het een onmisbare bron voor onderzoekers, beleidsmakers en natuurliefhebbers.
              </p>
              <p className="body-md">
                De uitdaging: een enorme hoeveelheid wetenschappelijke data omzetten in een intuïtieve, moderne interface die zowel experts als het brede publiek bedient.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Full home visual */}
      <section>
        <div className="swiss-container">
          <motion.img {...fadeUp} src={homeImg} alt="Nederlands Soortenregister volledige homepagina" className="w-full h-auto rounded-sm" />
        </div>
      </section>

      {/* UX Aanpak */}
      <section className="py-24 md:py-32">
        <div className="swiss-container">
          <motion.div {...fadeUp} className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-5">
              <span className="section-label mb-4 block">UX Aanpak</span>
              <h2 className="heading-md text-foreground">
                Complexe data, eenvoudige navigatie.
              </h2>
            </div>
            <div className="lg:col-span-6 lg:col-start-7 flex flex-col justify-center">
              <p className="body-md mb-6">
                We hebben de informatie-architectuur volledig herstructureerd. De gebruiker kan soorten ontdekken via visuele categorieën, taxonomische bomen of gerichte zoekopdrachten — elk pad leidt naar dezelfde rijke detailpagina's.
              </p>
              <p className="body-md">
                Filters, weergavemodi (afbeeldingen, lijst, tabel) en slimme zoeksuggesties maken het navigeren door miljoenen records intuïtief en snel.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Browse & Taxa visuals */}
      <section>
        <div className="swiss-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.img {...fadeUp} src={browseImg} alt="Zoek Soorten interface" className="w-full h-auto rounded-sm" />
            <motion.img {...fadeUp} src={taxaImg} alt="Taxonomische boom overzicht" className="w-full h-auto rounded-sm" />
          </div>
        </div>
      </section>

      {/* Detail pagina */}
      <section className="py-24 md:py-32">
        <div className="swiss-container">
          <motion.div {...fadeUp} className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-5">
              <span className="section-label mb-4 block">Detailpagina's</span>
              <h2 className="heading-md text-foreground">
                Elk soort verdient een compleet verhaal.
              </h2>
            </div>
            <div className="lg:col-span-6 lg:col-start-7 flex flex-col justify-center">
              <p className="body-md mb-6">
                De soortenpagina bundelt alle beschikbare data in één overzichtelijk geheel: foto's, geluiden, verspreiding, biotopen, voedsel, DNA-sequenties en verwante soorten. Tabs maken het mogelijk om snel te schakelen tussen samenvatting, literatuur, specimens en locatiedata.
              </p>
              <p className="body-md">
                Het ontwerp balanceert wetenschappelijke diepgang met visuele aantrekkelijkheid — zodat zowel een bioloog als een nieuwsgierige bezoeker er zijn weg in vindt.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Detail visual */}
      <section>
        <div className="swiss-container">
          <motion.img {...fadeUp} src={detailImg} alt="Soort detailpagina IJsvogel" className="w-full h-auto rounded-sm" />
        </div>
      </section>

      {/* Resultaat */}
      <section className="py-24 md:py-32 border-t border-border">
        <div className="swiss-container">
          <motion.div {...fadeUp} className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-5">
              <span className="section-label mb-4 block">Resultaat</span>
              <h2 className="heading-md text-foreground">
                Een moderne gateway naar Nederlandse biodiversiteit.
              </h2>
            </div>
            <div className="lg:col-span-6 lg:col-start-7 flex flex-col justify-center">
              <p className="body-md mb-6">
                Het vernieuwde platform maakt het voor het eerst mogelijk om op een visueel aantrekkelijke manier door miljoenen soorten te bladeren. De samenwerking met Naturalis, EIS Kenniscentrum, Waarneming.nl en de Rijksoverheid garandeert betrouwbare, actuele data.
              </p>
              <p className="body-md">
                Het resultaat is een platform dat wetenschappelijke precisie combineert met gebruiksvriendelijk design — een brug tussen wetenschap en samenleving.
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
              Ook een complex platform gebruiksvriendelijk maken?
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

export default CaseSoortenregister;
