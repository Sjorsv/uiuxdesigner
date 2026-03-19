import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Images
import ariseRole from "@/assets/arise-351.png";
import ariseProcess from "@/assets/arise-352.png";
import ariseTimeline from "@/assets/arise-353.png";
import ariseDiscover from "@/assets/arise-354.png";
import ariseLeanCanvas from "@/assets/arise-357.png";
import ariseCardSorting from "@/assets/arise-358.png";
import ariseHypotheses from "@/assets/arise-359.png";
import ariseFeatures from "@/assets/arise-360.png";
import arisePersonas from "@/assets/arise-361.png";
import ariseEmpathyMap from "@/assets/arise-362.png";
import ariseUserFlow from "@/assets/arise-363.png";
import ariseDataFlow from "@/assets/arise-dataflow.png";
import ariseIdeation from "@/assets/arise-365.png";
import ariseWireframes from "@/assets/arise-367.png";
import ariseDesign from "@/assets/arise-368.png";
import ariseHifi from "@/assets/arise-369.png";
import arisePrototype from "@/assets/arise-370.png";
import ariseTesting from "@/assets/arise-371.png";
import ariseTestResults from "@/assets/arise-372.png";
import ariseFeedback from "@/assets/arise-373.png";
import ariseScreens from "@/assets/arise-374.png";
import ariseUserFlow2 from "@/assets/arise-UserFlow-iteratie-2.png";
import ariseDiopsis from "@/assets/arise-image-68.png";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const CaseArise = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20">
        <div className="swiss-container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 font-body text-sm text-muted-foreground hover:text-foreground transition-colors mb-12"
            >
              <ArrowLeft className="w-4 h-4" />
              Ga terug
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            <motion.div className="lg:col-span-7" {...fadeUp}>
              <span className="section-label mb-4 block">UX Case Study · UI/UX Design · Prototype</span>
              <h1 className="heading-xl mb-6">
                ARISE <span className="text-accent">Biodiversity</span>
              </h1>
              <p className="body-lg max-w-xl text-muted-foreground">
                UX case study en prototype voor het ARISE-platform — een ambitieus biodiversiteitsproject dat alle multicellulaire soorten in Nederland in kaart brengt met AI-gestuurde herkenning.
              </p>
            </motion.div>
            <motion.div className="lg:col-span-5" {...fadeUp} transition={{ duration: 0.6, delay: 0.2 }}>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <span className="section-label mb-1 block">Klant</span>
                  <p className="font-display font-bold text-foreground">ARISE / Naturalis</p>
                </div>
                <div>
                  <span className="section-label mb-1 block">Industrie</span>
                  <p className="font-display font-bold text-foreground">Wetenschap</p>
                </div>
                <div>
                  <span className="section-label mb-1 block">Diensten</span>
                  <p className="font-display font-bold text-foreground">UX Research, Prototyping</p>
                </div>
                <div>
                  <span className="section-label mb-1 block">Jaar</span>
                  <p className="font-display font-bold text-foreground">2022</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Role */}
      <motion.section {...fadeUp}>
        <img src={ariseRole} alt="Our Role - Rosalie Kross & Sjors Platjauw" className="w-full h-auto" />
      </motion.section>

      {/* About ARISE */}
      <section className="py-24">
        <div className="swiss-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <motion.div className="lg:col-span-5" {...fadeUp}>
              <span className="section-number">01</span>
              <span className="section-label ml-4">Over het project</span>
              <h2 className="heading-lg mt-4">Over ARISE</h2>
            </motion.div>
            <motion.div className="lg:col-span-7 space-y-6" {...fadeUp} transition={{ duration: 0.6, delay: 0.15 }}>
              <p className="body-lg text-muted-foreground">
                Een georganiseerd overzicht van alle multicellulaire levensvormen in Nederland en de infrastructuur om al deze soorten semi-automatisch te identificeren. Dat is wat het ARISE-project wil bereiken.
              </p>
              <p className="body-md text-muted-foreground">
                Naturalis Biodiversity Center, de Universiteit van Amsterdam, het Westerdijk Fungal Biodiversity Institute en de Universiteit Twente werken samen aan een biodiversiteitsmonitoring-infrastructuur die de eerste in zijn soort zal zijn.
              </p>
              <p className="body-md text-muted-foreground">
                ARISE wordt een onmisbaar hulpmiddel voor mensen in natuurbeheer, ecologisch onderzoek en natuurhistorische musea van over de hele wereld.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Diopsis */}
      <section className="py-24 border-t border-border">
        <div className="swiss-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <motion.div className="lg:col-span-5" {...fadeUp}>
              <span className="section-number">02</span>
              <span className="section-label ml-4">Diopsis</span>
              <h2 className="heading-lg mt-4">Over Diopsis</h2>
              <div className="mt-6 space-y-4">
                <p className="body-md text-muted-foreground">
                  Diopsis is een camera die speciaal is ontworpen om insecten te fotograferen en vervolgens soortenherkenning uit te voeren op basis van deze foto's.
                </p>
                <p className="body-md text-muted-foreground">
                  Voor dit systeem bestaat al een bestaande workflow — van het nemen van de foto door de camera, tot een systeem waar experts de foto's kunnen annoteren en een AI-model dat automatisch soorten herkent, tot een rapport voor de eindgebruiker.
                </p>
                <p className="body-md text-muted-foreground">
                  Alleen is er momenteel geen plek waar deze data verblijft of waar gebruikers ermee kunnen interageren. Dit user portal wordt onderdeel van het grotere ARISE-platform.
                </p>
              </div>
            </motion.div>
            <motion.div className="lg:col-span-7" {...fadeUp} transition={{ duration: 0.6, delay: 0.2 }}>
              <img src={ariseDiopsis} alt="Diopsis camera in het veld" className="w-full max-w-md mx-auto h-auto rounded-sm" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Data Flow */}
      <motion.section className="py-16" {...fadeUp}>
        <div className="swiss-container">
          <img src={ariseDataFlow} alt="ARISE data flow diagram" className="w-full h-auto rounded-sm" />
        </div>
      </motion.section>

      {/* Process */}
      <section className="py-24 border-t border-border">
        <div className="swiss-container">
          <motion.div {...fadeUp} className="mb-16 text-center">
            <span className="section-number">03</span>
            <span className="section-label ml-4">Aanpak</span>
            <h2 className="heading-lg mt-4">Ons UX Proces</h2>
          </motion.div>
          <motion.div {...fadeUp}>
            <img src={ariseProcess} alt="UX Process - Discover, Define, Ideate, Design, Testing" className="w-full h-auto" />
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <motion.section className="py-16" {...fadeUp}>
        <div className="swiss-container">
          <img src={ariseTimeline} alt="Project timeline - 20 weeks, 8 phases" className="w-full h-auto rounded-sm" />
        </div>
      </motion.section>

      {/* Discover Fase */}
      <motion.section {...fadeUp}>
        <img src={ariseDiscover} alt="Discover Fase - Get to know the context" className="w-full h-auto" />
      </motion.section>

      {/* Lean Canvas */}
      <section className="py-24">
        <div className="swiss-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <motion.div className="lg:col-span-5" {...fadeUp}>
              <span className="section-number">04</span>
              <span className="section-label ml-4">Discovery</span>
              <h2 className="heading-lg mt-4">Lean Canvas Model</h2>
              <p className="body-md text-muted-foreground mt-4">
                In de Lean Canvas bespraken we de belangrijkste doelstellingen en gebruikersdoelen voor dit project. Wat zijn de doelen en wanneer bereiken we ze?
              </p>
              <div className="mt-8 bg-surface border border-border rounded-sm p-6">
                <p className="body-md text-muted-foreground italic">
                  "We as ARISE want to become the Spotify and Google Analytics for biodiversity in The Netherlands."
                </p>
              </div>
            </motion.div>
            <motion.div className="lg:col-span-7" {...fadeUp} transition={{ duration: 0.6, delay: 0.15 }}>
              <img src={ariseLeanCanvas} alt="Lean Canvas Model Template" className="w-full h-auto rounded-sm" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* User Personas */}
      <section className="py-24 border-t border-border">
        <div className="swiss-container">
          <motion.div {...fadeUp} className="mb-12">
            <span className="section-number">05</span>
            <span className="section-label ml-4">Gebruikersgroepen</span>
            <h2 className="heading-lg mt-4">Twee kerngebruikers</h2>
          </motion.div>
          <motion.div {...fadeUp}>
            <img src={arisePersonas} alt="Ecologist vs Data Explorer personas" className="w-full h-auto rounded-sm" />
          </motion.div>
        </div>
      </section>

      {/* Empathy Map */}
      <section className="py-24 border-t border-border">
        <div className="swiss-container">
          <motion.div {...fadeUp} className="mb-12">
            <span className="section-number">06</span>
            <span className="section-label ml-4">Empathy Map</span>
            <h2 className="heading-lg mt-4">Gebruiker begrijpen</h2>
            <p className="body-md text-muted-foreground mt-4 max-w-2xl">
              Om de behoeften van onze gebruikers beter te begrijpen, hebben we een empathy map gemaakt op basis van interviews met ecologen en onderzoekers.
            </p>
          </motion.div>
          <motion.div {...fadeUp}>
            <img src={ariseEmpathyMap} alt="Empathy Map - Says, Thinks, Does, Feels, Pains, Gains" className="w-full h-auto rounded-sm" />
          </motion.div>
        </div>
      </section>

      {/* Hypotheses */}
      <section className="py-24 border-t border-border">
        <div className="swiss-container">
          <motion.div {...fadeUp} className="mb-12">
            <span className="section-number">07</span>
            <span className="section-label ml-4">Hypotheses</span>
            <h2 className="heading-lg mt-4">Onderzoekshypotheses</h2>
            <p className="body-md text-muted-foreground mt-4 max-w-2xl">
              Op basis van ons gebruikersonderzoek formuleerden we zes kernhypotheses rondom filtersystemen, data-toegang, customisatie, vergelijking, visualisatie en rapportage.
            </p>
          </motion.div>
          <motion.div {...fadeUp}>
            <img src={ariseHypotheses} alt="Research hypotheses cards" className="w-full h-auto rounded-sm" />
          </motion.div>
        </div>
      </section>

      {/* Card Sorting */}
      <section className="py-24 border-t border-border">
        <div className="swiss-container">
          <motion.div {...fadeUp} className="mb-12">
            <span className="section-number">08</span>
            <span className="section-label ml-4">Card Sorting</span>
            <h2 className="heading-lg mt-4">Gebruikersbehoeften in kaart</h2>
            <p className="body-md text-muted-foreground mt-4 max-w-2xl">
              Via card sorting brachten we de belangrijkste functionaliteiten in kaart: zoeken, data bekijken, vergelijken, downloaden en uploaden.
            </p>
          </motion.div>
          <motion.div {...fadeUp}>
            <img src={ariseCardSorting} alt="Card sorting results" className="w-full h-auto rounded-sm" />
          </motion.div>
        </div>
      </section>

      {/* Feature Prioritization */}
      <section className="py-24 border-t border-border">
        <div className="swiss-container">
          <motion.div {...fadeUp} className="mb-12">
            <span className="section-number">09</span>
            <span className="section-label ml-4">Prioritering</span>
            <h2 className="heading-lg mt-4">Feature Prioritization</h2>
          </motion.div>
          <motion.div {...fadeUp}>
            <img src={ariseFeatures} alt="Feature prioritization table" className="w-full h-auto rounded-sm" />
          </motion.div>
        </div>
      </section>

      {/* Ideation Fase */}
      <motion.section {...fadeUp}>
        <img src={ariseIdeation} alt="Ideation Fase - Get a better idea of what the design" className="w-full h-auto" />
      </motion.section>

      {/* User Flow */}
      <section className="py-24">
        <div className="swiss-container">
          <motion.div {...fadeUp} className="mb-12">
            <span className="section-number">10</span>
            <span className="section-label ml-4">User Flow</span>
            <h2 className="heading-lg mt-4">Gebruikersstromen</h2>
            <p className="body-md text-muted-foreground mt-4 max-w-2xl">
              We ontwierpen gedetailleerde user flows voor beide gebruikersgroepen — de Data Explorer en de Ecoloog met Diopsis camera.
            </p>
          </motion.div>
          <motion.div {...fadeUp} className="mb-12">
            <img src={ariseUserFlow} alt="User flow diagram iteration 1" className="w-full h-auto rounded-sm" />
          </motion.div>
          <motion.div {...fadeUp}>
            <img src={ariseUserFlow2} alt="User flow diagram iteration 2" className="w-full h-auto rounded-sm" />
          </motion.div>
        </div>
      </section>

      {/* Design Fase */}
      <motion.section {...fadeUp}>
        <img src={ariseDesign} alt="Design Fase - Prototyping" className="w-full h-auto" />
      </motion.section>

      {/* Wireframes */}
      <section className="py-24">
        <div className="swiss-container">
          <motion.div {...fadeUp} className="mb-12">
            <span className="section-number">11</span>
            <span className="section-label ml-4">Wireframes</span>
            <h2 className="heading-lg mt-4">Low-fidelity Wireframes</h2>
            <p className="body-md text-muted-foreground mt-4 max-w-2xl">
              We begonnen met low-fidelity wireframes om de informatiestructuur en layout te valideren voordat we naar high-fidelity designs gingen.
            </p>
          </motion.div>
          <motion.div {...fadeUp}>
            <img src={ariseWireframes} alt="Low-fidelity wireframes" className="w-full h-auto rounded-sm" />
          </motion.div>
        </div>
      </section>

      {/* High-fidelity Designs */}
      <section className="py-24 border-t border-border">
        <div className="swiss-container">
          <motion.div {...fadeUp} className="mb-12">
            <span className="section-number">12</span>
            <span className="section-label ml-4">Hi-Fi Design</span>
            <h2 className="heading-lg mt-4">High-fidelity Prototype</h2>
            <p className="body-md text-muted-foreground mt-4 max-w-2xl">
              De wireframes werden vertaald naar een volledig high-fidelity prototype met zoekfunctionaliteit, data-browsing, species-detail pagina's en een dashboard.
            </p>
          </motion.div>
          <motion.div {...fadeUp} className="mb-12">
            <img src={ariseHifi} alt="High-fidelity design screens" className="w-full h-auto rounded-sm" />
          </motion.div>
          <motion.div {...fadeUp}>
            <img src={arisePrototype} alt="Prototype screens - dashboard and database" className="w-full h-auto rounded-sm" />
          </motion.div>
        </div>
      </section>

      {/* Full Screens */}
      <motion.section {...fadeUp} className="py-16">
        <div className="swiss-container">
          <img src={ariseScreens} alt="Complete UI screens overview" className="w-full h-auto rounded-sm" />
        </div>
      </motion.section>

      {/* Testing Fase */}
      <motion.section {...fadeUp}>
        <img src={ariseTesting} alt="Testing Fase - Get feedback and insights from end users" className="w-full h-auto" />
      </motion.section>

      {/* Test Results */}
      <section className="py-24">
        <div className="swiss-container">
          <motion.div {...fadeUp} className="mb-12">
            <span className="section-number">13</span>
            <span className="section-label ml-4">Resultaten</span>
            <h2 className="heading-lg mt-4">Test Resultaten</h2>
            <p className="body-md text-muted-foreground mt-4 max-w-2xl">
              We testten vier kerngebieden met echte gebruikers: de landing page, de filter feature, de compare feature en data visualisatie.
            </p>
          </motion.div>
          <motion.div {...fadeUp} className="mb-12">
            <img src={ariseTestResults} alt="Test results overview" className="w-full h-auto rounded-sm" />
          </motion.div>
          <motion.div {...fadeUp}>
            <img src={ariseFeedback} alt="User feedback and recommendations" className="w-full h-auto rounded-sm" />
          </motion.div>
        </div>
      </section>

      {/* Conclusion */}
      <section className="py-24 border-t border-border">
        <div className="swiss-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <motion.div className="lg:col-span-5" {...fadeUp}>
              <span className="section-number">14</span>
              <span className="section-label ml-4">Conclusie</span>
              <h2 className="heading-lg mt-4">Het resultaat</h2>
            </motion.div>
            <motion.div className="lg:col-span-7 space-y-6" {...fadeUp} transition={{ duration: 0.6, delay: 0.15 }}>
              <p className="body-lg text-muted-foreground">
                Het eindresultaat is een high-fidelity prototype dat de complexe wereld van biodiversiteitsdata vertaalt naar een intuïtieve, moderne interface. Het prototype is gevalideerd met echte gebruikers en dient als blauwdruk voor de verdere ontwikkeling van het ARISE-platform.
              </p>
              <p className="body-md text-muted-foreground">
                De gebruikerstests bevestigden dat het platform de juiste balans vindt tussen wetenschappelijke diepte en gebruiksgemak — een cruciale factor voor brede adoptie door de onderzoeksgemeenschap.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 border-t border-border">
        <div className="swiss-container text-center">
          <motion.div {...fadeUp}>
            <h2 className="heading-lg mb-6">Volgende case bekijken?</h2>
            <Link to="/case/soortenregister" className="btn-outline">
              Bekijk Nederlands Soortenregister →
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CaseArise;
