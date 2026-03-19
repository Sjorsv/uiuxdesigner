import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Search, Database, Users, Microscope, Camera, Brain } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import caseBiodiversity from "@/assets/case-biodiversity.png";

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



      {/* Project Overview */}
      <section className="py-24">
        <div className="swiss-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <motion.div className="lg:col-span-5" {...fadeUp}>
              <span className="section-number">01</span>
              <span className="section-label ml-4">Project Overview</span>
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
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <motion.div className="lg:col-span-5" {...fadeUp}>
              <span className="section-number">02</span>
              <span className="section-label ml-4">Diopsis</span>
              <h2 className="heading-lg mt-4">Over Diopsis</h2>
            </motion.div>
            <motion.div className="lg:col-span-7 space-y-6" {...fadeUp} transition={{ duration: 0.6, delay: 0.15 }}>
              <p className="body-lg text-muted-foreground">
                Diopsis is een camera die speciaal is ontworpen om insecten te fotograferen en vervolgens soortenherkenning uit te voeren op basis van deze foto's.
              </p>
              <p className="body-md text-muted-foreground">
                Voor dit systeem bestaat al een bestaande workflow — van het nemen van de foto door de camera, tot een systeem waar experts de foto's kunnen annoteren en een Artificial Intelligence-model dat automatisch soorten herkent, tot een rapport voor de eindgebruiker.
              </p>
              <p className="body-md text-muted-foreground">
                Alleen is er momenteel geen plek waar deze data verblijft of waar gebruikers ermee kunnen interageren. Dit user portal wordt onderdeel van het grotere ARISE-platform.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Design Question */}
      <section className="py-24 border-t border-border">
        <div className="swiss-container">
          <motion.div {...fadeUp} className="max-w-3xl mx-auto text-center">
            <span className="section-number">03</span>
            <span className="section-label ml-4">Designvraag</span>
            <h2 className="heading-lg mt-4 mb-8">
              Hoe ontwerpen we een intuïtief platform dat complexe biodiversiteitsdata toegankelijk maakt?
            </h2>
            <p className="body-lg text-muted-foreground">
              De uitdaging: wetenschappelijke datasets vertalen naar een gebruiksvriendelijke interface voor zowel ecologen als data-analisten, zonder aan diepte in te boeten.
            </p>
          </motion.div>
        </div>
      </section>

      {/* UX Process */}
      <section className="py-24 border-t border-border">
        <div className="swiss-container">
          <motion.div {...fadeUp} className="mb-16">
            <span className="section-number">04</span>
            <span className="section-label ml-4">UX Proces</span>
            <h2 className="heading-lg mt-4">Onze aanpak</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Search,
                phase: "Discovery",
                title: "Onderzoek & Inzichten",
                desc: "Stakeholder interviews, desk research en analyse van bestaande workflows om de behoeften van ecologen en onderzoekers in kaart te brengen.",
              },
              {
                icon: Database,
                phase: "Define",
                title: "Probleem Definiëren",
                desc: "Persona's, user journey maps en een helder gedefinieerde designvraag die richting geeft aan het ontwerpproces.",
              },
              {
                icon: Brain,
                phase: "Ideate",
                title: "Conceptontwikkeling",
                desc: "Brainstormsessies, wireframes en informatiestructuur voor het complexe dataplatform met meerdere gebruikersrollen.",
              },
              {
                icon: Microscope,
                phase: "Design",
                title: "Prototype & Test",
                desc: "High-fidelity prototype in Figma, gevolgd door usability testing met echte ecologen en data-explorers.",
              },
            ].map((item) => (
              <motion.div key={item.phase} className="border border-border rounded-sm p-6" {...fadeUp}>
                <item.icon className="w-8 h-8 text-accent mb-4" />
                <span className="section-label block mb-2">{item.phase}</span>
                <h3 className="font-display font-bold text-lg text-foreground mb-3">{item.title}</h3>
                <p className="text-sm text-muted-foreground font-body">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* User Groups */}
      <section className="py-24 border-t border-border">
        <div className="swiss-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <motion.div className="lg:col-span-5" {...fadeUp}>
              <span className="section-number">05</span>
              <span className="section-label ml-4">Gebruikersgroepen</span>
              <h2 className="heading-lg mt-4">Twee kerngebruikers</h2>
            </motion.div>
            <motion.div className="lg:col-span-7" {...fadeUp} transition={{ duration: 0.6, delay: 0.15 }}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-surface rounded-sm p-6 border border-border">
                  <Users className="w-8 h-8 text-accent mb-3" />
                  <h3 className="font-display font-bold text-foreground mb-2">Ecologen</h3>
                  <p className="text-sm text-muted-foreground font-body">
                    Veldonderzoekers die biodiversiteitsdata verzamelen, soortobservaties vastleggen en rapporten genereren voor natuurbeheer en beleid.
                  </p>
                </div>
                <div className="bg-surface rounded-sm p-6 border border-border">
                  <Database className="w-8 h-8 text-accent mb-3" />
                  <h3 className="font-display font-bold text-foreground mb-2">Data Explorers</h3>
                  <p className="text-sm text-muted-foreground font-body">
                    Onderzoekers en analisten die datasets doorzoeken, analyseren en nieuwe verbanden ontdekken tussen soorten en ecosystemen.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-24 border-t border-border">
        <div className="swiss-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <motion.div className="lg:col-span-5" {...fadeUp}>
              <span className="section-number">06</span>
              <span className="section-label ml-4">Prototype</span>
              <h2 className="heading-lg mt-4">Kernfunctionaliteiten</h2>
            </motion.div>
            <motion.div className="lg:col-span-7 space-y-6" {...fadeUp} transition={{ duration: 0.6, delay: 0.15 }}>
              <div className="space-y-4">
                {[
                  { icon: Search, title: "Search & Discover", desc: "Krachtige zoekfunctionaliteit om soorten te vinden, analyseren en ontdekken met geavanceerde filters." },
                  { icon: Camera, title: "Diopsis Integratie", desc: "Direct inzicht in camerabeelden en AI-herkenningsresultaten, met de mogelijkheid om annotaties toe te voegen." },
                  { icon: Database, title: "Dataset Explorer", desc: "Interactieve verkenning van biodiversiteitsdatasets met visualisaties, kaarten en statistieken." },
                  { icon: Microscope, title: "Soortdetailpagina's", desc: "Uitgebreide profielen per soort met foto's, geluiden, verspreidingskaarten en taxonomische informatie." },
                ].map((feature) => (
                  <div key={feature.title} className="flex gap-4 items-start">
                    <feature.icon className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-display font-bold text-foreground mb-1">{feature.title}</h4>
                      <p className="text-sm text-muted-foreground font-body">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-24 border-t border-border">
        <div className="swiss-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <motion.div className="lg:col-span-5" {...fadeUp}>
              <span className="section-number">07</span>
              <span className="section-label ml-4">Resultaat</span>
              <h2 className="heading-lg mt-4">Een werkend prototype</h2>
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
