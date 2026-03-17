import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import maxledHero from "@/assets/maxled-hero.png";
import maxledUx from "@/assets/maxled-ux.png";
import maxledComparison from "@/assets/maxled-comparison.png";
import maxledDesignpak from "@/assets/maxled-designpak.png";
import maxledMobile from "@/assets/maxled-mobile.png";
import maxledUxAanpak from "@/assets/maxled-ux-aanpak.png";
import maxledVisual from "@/assets/maxled-visual.png";
import maxledEcommerce from "@/assets/maxled-ecommerce.png";
import maxledScreens from "@/assets/maxled-screens.png";
import maxledPages from "@/assets/maxled-pages.png";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const CaseMaxled = () => {
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
              <span className="section-label mb-4 block">E-commerce · UI/UX Design · Webshop</span>
              <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 leading-[1.1]">
                MaxLED
              </h1>
              <p className="body-md mb-8 max-w-lg">
                E-commerce platform redesign voor de #1 in verhuur en verkoop van vaste en mobiele ledschermen. Focus op productpresentatie, gebruiksvriendelijkheid en offerte-aanvragen.
              </p>
              <a
                href="https://maxled.be"
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
          <motion.img {...fadeUp} src={maxledHero} alt="MaxLED hero mockup" className="w-full h-auto rounded-sm" />
        </div>
      </section>

      {/* Text: UX Proces */}
      <section className="py-24 md:py-32">
        <div className="swiss-container">
          <motion.div {...fadeUp} className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-5">
              <span className="section-label mb-4 block">UX Proces</span>
              <h2 className="heading-md text-foreground">
                De oude webshop analyseren en pijnpunten blootleggen.
              </h2>
            </div>
            <div className="lg:col-span-6 lg:col-start-7 flex flex-col justify-center">
              <p className="body-md mb-6">
                We analyseerden de oude webshop op mobiel en desktop, bekeken Google Analytics en voerden concurrentieonderzoek uit. De grootste pijnpunten waren onduidelijke product pagina's, trage laadtijden en visueel rommelige interfaces.
              </p>
              <p className="body-md">
                Het doel: ontwikkel een nieuwe webshop voor MaxLED die het brede assortiment LED-verlichting helder presenteert, vertrouwen wekt en gericht is op conversie.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Image: UX */}
      <section>
        <div className="swiss-container">
          <motion.img {...fadeUp} src={maxledUx} alt="MaxLED UX proces analyse" className="w-full h-auto rounded-sm" />
        </div>
      </section>

      {/* Text: Before & After */}
      <section className="py-24 md:py-32">
        <div className="swiss-container">
          <motion.div {...fadeUp} className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-5">
              <span className="section-label mb-4 block">Before & After</span>
              <h2 className="heading-md text-foreground">
                Van verouderd naar modern: een compleet nieuw platform.
              </h2>
            </div>
            <div className="lg:col-span-6 lg:col-start-7 flex flex-col justify-center">
              <p className="body-md mb-6">
                De oude website miste een duidelijke structuur en professionele uitstraling. De nieuwe website combineert de kracht van het merk met een intuïtieve gebruikerservaring.
              </p>
              <p className="body-md">
                Het resultaat is een platform dat vertrouwen uitstraalt en bezoekers moeiteloos naar het juiste product leidt.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Image: Comparison */}
      <section>
        <div className="swiss-container">
          <motion.img {...fadeUp} src={maxledComparison} alt="MaxLED before and after vergelijking" className="w-full h-auto rounded-sm" />
        </div>
      </section>



      {/* Text: Visual Design */}
      <section className="py-24 md:py-32">
        <div className="swiss-container">
          <motion.div {...fadeUp} className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-5">
              <span className="section-label mb-4 block">Visual Design</span>
              <h2 className="heading-md text-foreground">
                Een visueel systeem dat het merk versterkt op elk scherm.
              </h2>
            </div>
            <div className="lg:col-span-6 lg:col-start-7 flex flex-col justify-center">
              <p className="body-md mb-6">
                Het visuele ontwerp combineert de kenmerkende oranje merkkleur met donkere achtergronden voor een premium uitstraling. Elk element is ontworpen om de producten centraal te stellen.
              </p>
              <p className="body-md">
                Van de homepage tot productpagina's en verhuurformules — alles is visueel consistent en gericht op conversie.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Image: Visual */}
      <section>
        <div className="swiss-container">
          <motion.img {...fadeUp} src={maxledVisual} alt="MaxLED visual design overzicht" className="w-full h-auto rounded-sm" />
        </div>
      </section>

      {/* Text: UX-aanpak */}
      <section className="py-24 md:py-32">
        <div className="swiss-container">
          <motion.div {...fadeUp} className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-5">
              <span className="section-label mb-4 block">UX-aanpak</span>
              <h2 className="heading-md text-foreground">
                De UX-aanpak achter het ontwerp.
              </h2>
            </div>
            <div className="lg:col-span-6 lg:col-start-7 flex flex-col justify-center">
              <p className="body-md mb-6">
                We analyseerden de oude webshop op mobiel en desktop, bekeken Google Analytics en voerden concurrentieonderzoek uit. De grootste pijnpunten waren onduidelijke navigatie, trage laadtijden en visueel rommelige interfaces.
              </p>
              <p className="body-md">
                We herstructureerden de navigatie en producthiërarchie in duidelijke categorieën (bijv. LED-strips, spots, accessoires). Filters zijn opnieuw opgebouwd op basis van productkenmerken zoals schermoppervlakte, status en type.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Image: UX-aanpak */}
      <section>
        <div className="swiss-container">
          <motion.img {...fadeUp} src={maxledUxAanpak} alt="MaxLED UX-aanpak" className="w-full h-auto rounded-sm" />
        </div>
      </section>

      {/* Text: E-commerce Optimalisatie */}
      <section className="py-24 md:py-32">
        <div className="swiss-container">
          <motion.div {...fadeUp} className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-5">
              <span className="section-label mb-4 block">E-commerce Optimalisatie</span>
              <h2 className="heading-md text-foreground">
                Klikbare prototypes voor de belangrijkste user flows.
              </h2>
            </div>
            <div className="lg:col-span-6 lg:col-start-7 flex flex-col justify-center">
              <p className="body-md mb-6">
                We maakten klikbare Figma-prototypes van de meest essentiële user flows, waaronder het zoeken naar producten, toevoegen aan winkelwagen, en afrekenen. Hiermee konden we interne feedback snel verwerken.
              </p>
              <p className="body-md">
                We ontwierpen een moderne, lichte interface met een technisch en betrouwbaar gevoel. Er is veel gebruikgemaakt van witruimte, strakke typografie, productfoto's en conversiegerichte elementen zoals badges, reviews en levering-icons.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Image: E-commerce */}
      <section>
        <div className="swiss-container">
          <motion.img {...fadeUp} src={maxledEcommerce} alt="MaxLED e-commerce optimalisatie" className="w-full h-auto rounded-sm" />
        </div>
      </section>

      {/* Text: Mobiele ervaring */}
      <section className="py-24 md:py-32">
        <div className="swiss-container">
          <motion.div {...fadeUp} className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-5">
              <span className="section-label mb-4 block">Mobiele Ervaring</span>
              <h2 className="heading-md text-foreground">
                Geoptimaliseerd voor mobiel gebruik op locatie.
              </h2>
            </div>
            <div className="lg:col-span-6 lg:col-start-7 flex flex-col justify-center">
              <p className="body-md mb-6">
                Een groot deel van de doelgroep bezoekt de website onderweg of op evenementlocaties. De mobiele ervaring is daarom volledig geoptimaliseerd voor snelle navigatie en directe actie.
              </p>
              <p className="body-md">
                Touch-friendly elementen, een vereenvoudigd menu en prominente CTA's zorgen ervoor dat bezoekers ook op mobiel snel een offerte kunnen aanvragen.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Image: Mobile */}
      <section>
        <div className="swiss-container">
          <motion.img {...fadeUp} src={maxledMobile} alt="MaxLED mobiele ervaring" className="w-full h-auto rounded-sm" />
        </div>
      </section>

      {/* Text: Resultaat */}
      <section className="py-24 md:py-32">
        <div className="swiss-container">
          <motion.div {...fadeUp} className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-5">
              <span className="section-label mb-4 block">Schermen & Resultaat</span>
              <h2 className="heading-md text-foreground">
                Een webshop die vertrouwen wekt en converteert.
              </h2>
            </div>
            <div className="lg:col-span-6 lg:col-start-7 flex flex-col justify-center">
              <p className="body-md mb-6">
                Het eindresultaat is een volledig responsief e-commerce platform dat op elk apparaat sterk presteert. Productpagina's, verhuurformules en het assortiment zijn helder en overtuigend gepresenteerd.
              </p>
              <p className="body-md">
                De nieuwe webshop versterkt het professionele imago van MaxLED en biedt een solide basis voor verdere groei in zowel verhuur als verkoop.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Image: Screens */}
      <section>
        <div className="swiss-container">
          <motion.img {...fadeUp} src={maxledScreens} alt="MaxLED schermen overzicht" className="w-full h-auto rounded-sm" />
        </div>
      </section>

      {/* Image: Pages */}
      <section className="pt-8 pb-20">
        <div className="swiss-container">
          <motion.img {...fadeUp} src={maxledPages} alt="MaxLED pagina's detail" className="w-full h-auto rounded-sm" />
        </div>
      </section>

      {/* Video */}
      <section className="pb-20">
        <div className="swiss-container">
          <motion.div {...fadeUp}>
            <video src="/videos/maxled-video.mp4" autoPlay loop muted playsInline className="w-full h-auto rounded-sm" />
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

export default CaseMaxled;
