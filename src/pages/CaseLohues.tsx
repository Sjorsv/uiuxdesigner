import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import lohuesHome from "@/assets/lohues-home.png";
import lohuesContact from "@/assets/lohues-contact.png";
import lohuesDiensten from "@/assets/lohues-diensten.png";
import lohuesOver from "@/assets/lohues-over.png";
import lohuesProjecten from "@/assets/lohues-projecten.png";
import lohuesOfferte from "@/assets/lohues-offerte.png";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const CaseLohues = () => {
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
              <span className="section-label mb-4 block">Energie & Duurzaamheid · UI/UX Design · Webdesign</span>
              <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 leading-[1.1]">
                Lohues Installatie Techniek
              </h1>
              <p className="body-md mb-8 max-w-lg">
                Complete website voor een familiebedrijf in verduurzaming. Van zonnepanelen tot warmtepompen — alles onder één dak met focus op vertrouwen, lokale vindbaarheid en conversie.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Hero Image — Homepage */}
      <section>
        <div className="swiss-container">
          <motion.img {...fadeUp} src={lohuesHome} alt="Lohues Installatie Techniek homepage ontwerp" className="w-full h-auto rounded-sm" />
        </div>
      </section>

      {/* Text: Het verhaal */}
      <section className="py-24 md:py-32">
        <div className="swiss-container">
          <motion.div {...fadeUp} className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-5">
              <span className="section-label mb-4 block">Het verhaal</span>
              <h2 className="heading-md text-foreground">
                Een familiebedrijf dat verduurzaming toegankelijk maakt voor heel Nederland.
              </h2>
            </div>
            <div className="lg:col-span-6 lg:col-start-7 flex flex-col justify-center">
              <p className="body-md mb-6">
                Lohues Installatie Techniek is een familiebedrijf met meer dan 25 installateurs die werken in heel het land. Ze installeren zonnepanelen, airco's, accu's, warmtepompen, meterkasten en laadpalen.
              </p>
              <p className="body-md">
                De opdracht: een complete website die hun brede dienstverlening helder presenteert, vertrouwen opbouwt bij particulieren én bedrijven, en bezoekers begeleidt naar een offerte-aanvraag of gratis inspectie.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Image: Diensten detail */}
      <section>
        <div className="swiss-container">
          <motion.img {...fadeUp} src={lohuesDiensten} alt="Lohues diensten detailpagina" className="w-full h-auto rounded-sm" />
        </div>
      </section>

      {/* Text: Aanpak */}
      <section className="py-24 md:py-32">
        <div className="swiss-container">
          <motion.div {...fadeUp} className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-5">
              <span className="section-label mb-4 block">Aanpak</span>
              <h2 className="heading-md text-foreground">
                Structuur, vertrouwen en conversie als fundament.
              </h2>
            </div>
            <div className="lg:col-span-6 lg:col-start-7 flex flex-col justify-center">
              <p className="body-md mb-6">
                De website is opgebouwd rond de kernwaarden van het bedrijf: vakmanschap, eerlijkheid en snelle service. Elke pagina heeft een duidelijke hiërarchie met prominente call-to-actions voor gratis inspectie en offertes.
              </p>
              <p className="body-md">
                De dienstenpagina's combineren FAQ-secties met voordelen en een direct contactformulier, zodat bezoekers alle informatie vinden zonder de pagina te verlaten.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Image: Over ons */}
      <section>
        <div className="swiss-container">
          <motion.img {...fadeUp} src={lohuesOver} alt="Lohues over ons pagina" className="w-full h-auto rounded-sm" />
        </div>
      </section>

      {/* Text: Over ons & Team */}
      <section className="py-24 md:py-32">
        <div className="swiss-container">
          <motion.div {...fadeUp} className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-5">
              <span className="section-label mb-4 block">Vertrouwen & team</span>
              <h2 className="heading-md text-foreground">
                Persoonlijk verhaal en certificeringen bouwen vertrouwen op.
              </h2>
            </div>
            <div className="lg:col-span-6 lg:col-start-7 flex flex-col justify-center">
              <p className="body-md mb-6">
                De over-ons pagina opent met een persoonlijke boodschap van directeur Leroy, compleet met portretfoto en handtekening. Dit geeft bezoekers direct een warm welkom en menselijk contact.
              </p>
              <p className="body-md">
                Certificeringen van partners als Enphase, GoodWe, DMEGC en JinKO worden prominent getoond. Het teamoverzicht met foto's en functies maakt het bedrijf tastbaar en betrouwbaar.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Image: Projecten */}
      <section>
        <div className="swiss-container">
          <motion.img {...fadeUp} src={lohuesProjecten} alt="Lohues projecten overzicht" className="w-full h-auto rounded-sm" />
        </div>
      </section>

      {/* Text: Projecten */}
      <section className="py-24 md:py-32">
        <div className="swiss-container">
          <motion.div {...fadeUp} className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-5">
              <span className="section-label mb-4 block">Projecten & Bewijs</span>
              <h2 className="heading-md text-foreground">
                Opgeleverde projecten als sociaal bewijs.
              </h2>
            </div>
            <div className="lg:col-span-6 lg:col-start-7 flex flex-col justify-center">
              <p className="body-md mb-6">
                De projectenpagina toont opgeleverd werk gefilterd per categorie — van zonnepanelen tot laadpalen. Bezoekers zien direct de breedte en kwaliteit van het werk.
              </p>
              <p className="body-md">
                Statistieken zoals "2.245 huizen en bedrijven" en "28.560 geïnstalleerde zonnepanelen" fungeren als krachtige social proof en versterken de geloofwaardigheid.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Image: Contact */}
      <section>
        <div className="swiss-container">
          <motion.img {...fadeUp} src={lohuesContact} alt="Lohues contact pagina" className="w-full h-auto rounded-sm" />
        </div>
      </section>

      {/* Text: Conversie */}
      <section className="py-24 md:py-32">
        <div className="swiss-container">
          <motion.div {...fadeUp} className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-5">
              <span className="section-label mb-4 block">Conversie & Contact</span>
              <h2 className="heading-md text-foreground">
                Laagdrempelig contact met vertrouwenssignalen.
              </h2>
            </div>
            <div className="lg:col-span-6 lg:col-start-7 flex flex-col justify-center">
              <p className="body-md mb-6">
                Het contactformulier belooft "binnen 24 uur reactie" en wordt vergezeld door vertrouwenssignalen: altijd vrijblijvend, geen voorrijkosten, geheel kosteloos en overal in Nederland.
              </p>
              <p className="body-md">
                De offertepagina is ontworpen als een stapsgewijs formulier — postcode en huisnummer invoeren, en binnen een minuut is de aanvraag compleet. Minimale drempel, maximale conversie.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Image: Offerte */}
      <section className="pb-20">
        <div className="swiss-container">
          <motion.img {...fadeUp} src={lohuesOfferte} alt="Lohues offerte aanvragen pagina" className="w-full h-auto rounded-sm" />
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

export default CaseLohues;
