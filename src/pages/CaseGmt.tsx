import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import gmtHero from "@/assets/gmt-hero.png";
import gmtStory from "@/assets/gmt-story.png";
import gmtWireframes from "@/assets/gmt-wireframes.png";
import gmtDesignpak from "@/assets/gmt-designpak.png";
import gmtProcess from "@/assets/gmt-process.png";
import gmtUx from "@/assets/gmt-ux.png";
import gmtScreens from "@/assets/gmt-screens.png";
import gmtDecisions from "@/assets/gmt-decisions.png";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const CaseGmt = () => {
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
              <span className="section-label mb-4 block">Industrial · UI/UX Design · Webdesign</span>
              <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 leading-[1.1]">
                GMT Equipment
              </h1>
              <p className="body-md mb-8 max-w-lg">
                Website redesign voor GMT Equipment, fabrikant van innovatieve zaag- en grijpsystemen. De focus lag op structuur, conversie en het versterken van hun technische merkidentiteit.
              </p>
              <a
                href="https://gmtequipment.com"
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
          <motion.img {...fadeUp} src={gmtHero} alt="GMT Equipment hero mockup" className="w-full h-auto rounded-sm" />
        </div>
      </section>

      {/* Text: Het verhaal */}
      <section className="py-24 md:py-32">
        <div className="swiss-container">
          <motion.div {...fadeUp} className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-5">
              <span className="section-label mb-4 block">Het verhaal</span>
              <h2 className="heading-md text-foreground">
                GMT Equipment is een fabrikant van innovatieve zaag- en grijpsystemen voor de sloop- en recyclingindustrie.
              </h2>
            </div>
            <div className="lg:col-span-6 lg:col-start-7 flex flex-col justify-center">
              <p className="body-md mb-6">
                Hun bestaande website sloot niet meer aan bij de kwaliteit en het niveau van hun producten. De website miste structuur, had onduidelijke navigatie en was niet geoptimaliseerd voor conversie.
              </p>
              <p className="body-md">
                De opdracht: een complete website redesign die het technische karakter van GMT versterkt, de producten helder presenteert en bezoekers begeleidt naar een offerte-aanvraag of contactmoment.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Image: Story */}
      <section>
        <div className="swiss-container">
          <motion.img {...fadeUp} src={gmtStory} alt="GMT Equipment verhaal en doel van opdracht" className="w-full h-auto rounded-sm" />
        </div>
      </section>

      {/* Text: Wireframes & Structuur */}
      <section className="py-24 md:py-32">
        <div className="swiss-container">
          <motion.div {...fadeUp} className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-5">
              <span className="section-label mb-4 block">Structuur & Wireframes</span>
              <h2 className="heading-md text-foreground">
                Van sitemap tot wireframe: een fundament voor conversie.
              </h2>
            </div>
            <div className="lg:col-span-6 lg:col-start-7 flex flex-col justify-center">
              <p className="body-md mb-6">
                Op basis van de doelgroepanalyse en bedrijfsdoelstellingen is een nieuwe sitemap opgezet. Elke pagina is ontworpen met een duidelijke hiërarchie en call-to-actions die bezoekers richting conversie sturen.
              </p>
              <p className="body-md">
                De wireframes zijn iteratief opgebouwd en gevalideerd, zodat de structuur staat voordat er visueel ontworpen wordt.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Image: Wireframes */}
      <section>
        <div className="swiss-container">
          <motion.img {...fadeUp} src={gmtWireframes} alt="GMT Equipment wireframes" className="w-full h-auto rounded-sm" />
        </div>
      </section>

      {/* Text: Designaanpak */}
      <section className="py-24 md:py-32">
        <div className="swiss-container">
          <motion.div {...fadeUp} className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-5">
              <span className="section-label mb-4 block">Designaanpak</span>
              <h2 className="heading-md text-foreground">
                Visueel ontwerp dat het technische karakter van GMT versterkt.
              </h2>
            </div>
            <div className="lg:col-span-6 lg:col-start-7 flex flex-col justify-center">
              <p className="body-md mb-6">
                Het ontwerp combineert industriële kracht met moderne minimalisme. Donkere achtergronden benadrukken de gele merkkleur van GMT en zorgen voor een premium uitstraling die past bij hun marktpositie.
              </p>
              <p className="body-md">
                Typografie, kleurgebruik en witruimte zijn bewust ingezet om de technische producten overzichtelijk en overtuigend te presenteren.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Image: Designpak */}
      <section>
        <div className="swiss-container">
          <motion.img {...fadeUp} src={gmtDesignpak} alt="GMT Equipment designaanpak" className="w-full h-auto rounded-sm" />
        </div>
      </section>

      {/* Text: Iteratief proces */}
      <section className="py-24 md:py-32">
        <div className="swiss-container">
          <motion.div {...fadeUp} className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-5">
              <span className="section-label mb-4 block">Iteratief proces</span>
              <h2 className="heading-md text-foreground">
                Ontwerpen, testen en verbeteren in korte cycli.
              </h2>
            </div>
            <div className="lg:col-span-6 lg:col-start-7 flex flex-col justify-center">
              <p className="body-md mb-6">
                Het ontwerpproces verliep in meerdere rondes. Elke iteratie werd besproken met het team van GMT om feedback te verwerken en het ontwerp steeds dichter bij de ideale gebruikerservaring te brengen.
              </p>
              <p className="body-md">
                Door vroegtijdig prototypes te delen en te valideren, werd voorkomen dat er in de bouwfase grote aanpassingen nodig waren.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Image: Process */}
      <section>
        <div className="swiss-container">
          <motion.img {...fadeUp} src={gmtProcess} alt="GMT Equipment iteratief proces" className="w-full h-auto rounded-sm" />
        </div>
      </section>

      {/* Text: UX */}
      <section className="py-24 md:py-32">
        <div className="swiss-container">
          <motion.div {...fadeUp} className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-5">
              <span className="section-label mb-4 block">UX-aanpak</span>
              <h2 className="heading-md text-foreground">
                Gebruikservaring als basis voor elke designbeslissing.
              </h2>
            </div>
            <div className="lg:col-span-6 lg:col-start-7 flex flex-col justify-center">
              <p className="body-md mb-6">
                De navigatie is vereenvoudigd en het productoverzicht volledig herstructureerd. Bezoekers vinden nu in twee klikken het juiste product, inclusief technische specificaties en een directe offerte-optie.
              </p>
              <p className="body-md">
                Mobiele gebruikerservaring kreeg extra aandacht, gezien een groot deel van de doelgroep de website op locatie via telefoon bezoekt.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Image: UX */}
      <section>
        <div className="swiss-container">
          <motion.img {...fadeUp} src={gmtUx} alt="GMT Equipment UX-aanpak" className="w-full h-auto rounded-sm" />
        </div>
      </section>

      {/* Text: Resultaat */}
      <section className="py-24 md:py-32">
        <div className="swiss-container">
          <motion.div {...fadeUp} className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-5">
              <span className="section-label mb-4 block">Schermen & Resultaat</span>
              <h2 className="heading-md text-foreground">
                Een website die de kracht van GMT uitstraalt.
              </h2>
            </div>
            <div className="lg:col-span-6 lg:col-start-7 flex flex-col justify-center">
              <p className="body-md mb-6">
                Het eindresultaat is een volledig responsieve website die op elk apparaat sterk presteert. De productpagina's zijn geoptimaliseerd voor zowel informatievergaring als conversie.
              </p>
              <p className="body-md">
                De nieuwe website versterkt het professionele imago van GMT en biedt een solide basis voor toekomstige groei en uitbreiding van hun online aanwezigheid.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Image: Screens */}
      <section>
        <div className="swiss-container">
          <motion.img {...fadeUp} src={gmtScreens} alt="GMT Equipment schermen overzicht" className="w-full h-auto rounded-sm" />
        </div>
      </section>

      {/* Text: Designbeslissingen */}
      <section className="py-24 md:py-32">
        <div className="swiss-container">
          <motion.div {...fadeUp} className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-5">
              <span className="section-label mb-4 block">Designbeslissingen</span>
              <h2 className="heading-md text-foreground">
                Bewuste keuzes voor maximale impact.
              </h2>
            </div>
            <div className="lg:col-span-6 lg:col-start-7 flex flex-col justify-center">
              <p className="body-md mb-6">
                Elke visuele keuze is onderbouwd: van de donkere kleurpaletten die industriële kracht communiceren, tot de typografie die technische betrouwbaarheid uitstraalt.
              </p>
              <p className="body-md">
                De gele accentkleur van GMT wordt strategisch ingezet als visuele gids, waardoor call-to-actions en belangrijke elementen direct opvallen zonder de rust van het ontwerp te verstoren.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Image: Decisions */}
      <section className="pb-20">
        <div className="swiss-container">
          <motion.img {...fadeUp} src={gmtDecisions} alt="GMT Equipment designbeslissingen" className="w-full h-auto rounded-sm" />
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

export default CaseGmt;
