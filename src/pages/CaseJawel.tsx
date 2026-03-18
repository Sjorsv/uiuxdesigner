import { motion } from "framer-motion";
import { ArrowLeft, Construction, HardHat, Wrench, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import jawelHero from "@/assets/jawel-hero.png";
import jawelIntro from "@/assets/jawel-intro.png";
import jawelStrategie from "@/assets/jawel-strategie.png";
import jawelTypografie from "@/assets/jawel-typografie.png";
import jawelLogo from "@/assets/jawel-logo.png";
import jawelLogoVarianten from "@/assets/jawel-logo-varianten.png";
import jawelLogoVoorstellen from "@/assets/jawel-logo-voorstellen.png";
import jawelIconen from "@/assets/jawel-iconen.png";
import jawelBranding from "@/assets/jawel-branding.png";
import jawelFotografie from "@/assets/jawel-fotografie.png";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const CaseJawel = () => {
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
            <motion.div className="lg:col-span-7" {...fadeUp}>
              <span className="section-label mb-4 block">Branding & Webdesign</span>
              <h1 className="heading-xl mb-6">
                Jawel <span className="text-accent">Infra</span>
              </h1>
              <p className="body-lg max-w-xl text-muted-foreground">
                Ontwikkeling van een krachtige merkidentiteit en moderne website voor een infrastructuurbedrijf uit Zeeland. Focus op betrouwbaarheid, kracht en Zeeuwse roots.
              </p>
            </motion.div>
            <motion.div className="lg:col-span-5" {...fadeUp} transition={{ duration: 0.6, delay: 0.2 }}>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <span className="section-label mb-1 block">Klant</span>
                  <p className="font-display font-bold text-foreground">Jawel Infra</p>
                </div>
                <div>
                  <span className="section-label mb-1 block">Industrie</span>
                  <p className="font-display font-bold text-foreground">Infrastructuur</p>
                </div>
                <div>
                  <span className="section-label mb-1 block">Diensten</span>
                  <p className="font-display font-bold text-foreground">Branding, Webdesign</p>
                </div>
                <div>
                  <span className="section-label mb-1 block">Jaar</span>
                  <p className="font-display font-bold text-foreground">2024</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <motion.section {...fadeUp}>
        <img src={jawelHero} alt="Jawel Infra website mockup" className="w-full h-auto" />
      </motion.section>

      {/* Intro & Doel */}
      <section className="py-24">
        <div className="swiss-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <motion.div className="lg:col-span-5" {...fadeUp}>
              <span className="section-number">01</span>
              <span className="section-label ml-4">Intro & Doel</span>
              <h2 className="heading-lg mt-4">De opdracht</h2>
            </motion.div>
            <motion.div className="lg:col-span-7 space-y-6" {...fadeUp} transition={{ duration: 0.6, delay: 0.15 }}>
              <p className="body-lg text-muted-foreground">
                Jawel Infra had behoefte aan een professionele merkidentiteit die past bij hun nuchtere, betrouwbare werkwijze in de infra-sector. Het doel: een herkenbaar merk dat vertrouwen uitstraalt en aansluit bij de mentaliteit van het infra-werk.
              </p>
              <p className="body-md text-muted-foreground">
                Het project omvatte de volledige ontwikkeling van logo, huisstijl, iconografie, fotografie en een moderne website — gericht op het aantrekken van zowel particuliere als zakelijke opdrachten.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Intro Visual */}
      <motion.section className="pb-24" {...fadeUp}>
        <img src={jawelIntro} alt="Jawel Infra intro en doel" className="w-full h-auto" />
      </motion.section>

      {/* Merkwaarden */}
      <section className="py-24">
        <div className="swiss-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <motion.div className="lg:col-span-5" {...fadeUp}>
              <span className="section-number">02</span>
              <span className="section-label ml-4">Strategie</span>
              <h2 className="heading-lg mt-4">Merkwaarden</h2>
            </motion.div>
            <motion.div className="lg:col-span-7 space-y-6" {...fadeUp} transition={{ duration: 0.6, delay: 0.15 }}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { icon: Construction, title: "Krachtig", desc: "Brede, geometrische vormen en bold typografie voor een stevige indruk" },
                  { icon: Shield, title: "Betrouwbaar", desc: "Strakke structuur, duidelijke hiërarchie en ritme" },
                  { icon: HardHat, title: "Nuchter & To The Point", desc: "Heldere taal en functioneel design" },
                  { icon: Wrench, title: "Zeeuwse Roots", desc: "Golfvormen als subtiele link naar water, rust en stabiliteit" },
                ].map((item) => (
                  <div key={item.title} className="border border-border rounded-sm p-6">
                    <item.icon className="w-8 h-8 text-accent mb-3" />
                    <h3 className="font-display font-bold text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground font-body">{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Strategie Visual */}
      <motion.section className="pb-24" {...fadeUp}>
        <img src={jawelStrategie} alt="Jawel Infra merkwaarden en strategie" className="w-full h-auto" />
      </motion.section>

      {/* Logo */}
      <section className="py-24">
        <div className="swiss-container">
          <motion.div {...fadeUp}>
            <span className="section-number">03</span>
            <span className="section-label ml-4">Logo Design</span>
            <h2 className="heading-lg mt-4 mb-12">Logo ontwerp</h2>
          </motion.div>
        </div>
      </section>

      <motion.section className="pb-12" {...fadeUp}>
        <img src={jawelLogo} alt="Jawel Infra logo voorstel" className="w-full h-auto" />
      </motion.section>

      <motion.section className="pb-12" {...fadeUp}>
        <img src={jawelLogoVarianten} alt="Jawel Infra logo varianten" className="w-full h-auto" />
      </motion.section>

      <motion.section className="pb-24" {...fadeUp}>
        <img src={jawelLogoVoorstellen} alt="Jawel Infra overige logo voorstellen" className="w-full h-auto" />
      </motion.section>

      {/* Typografie & Kleuren */}
      <section className="py-24">
        <div className="swiss-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <motion.div className="lg:col-span-5" {...fadeUp}>
              <span className="section-number">04</span>
              <span className="section-label ml-4">Visuele Identiteit</span>
              <h2 className="heading-lg mt-4">Typografie & Kleuren</h2>
            </motion.div>
            <motion.div className="lg:col-span-7" {...fadeUp} transition={{ duration: 0.6, delay: 0.15 }}>
              <p className="body-lg text-muted-foreground">
                Barlow Condensed als krachtig display lettertype, gecombineerd met Barlow en Inter voor body tekst. Het kleurenpalet — zwart (#0F0F10), oranje (#EC5406) en wit — weerspiegelt kracht en energie.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <motion.section className="pb-24" {...fadeUp}>
        <img src={jawelTypografie} alt="Jawel Infra typografie en kleuren" className="w-full h-auto" />
      </motion.section>

      {/* Iconen & Branding */}
      <section className="py-24">
        <div className="swiss-container">
          <motion.div {...fadeUp}>
            <span className="section-number">05</span>
            <span className="section-label ml-4">Elementen</span>
            <h2 className="heading-lg mt-4 mb-12">Iconenstijl & Branding</h2>
          </motion.div>
        </div>
      </section>

      <motion.section className="pb-12" {...fadeUp}>
        <img src={jawelIconen} alt="Jawel Infra iconenstijl" className="w-full h-auto" />
      </motion.section>

      <motion.section className="pb-24" {...fadeUp}>
        <img src={jawelBranding} alt="Jawel Infra branding elementen" className="w-full h-auto" />
      </motion.section>

      {/* Fotografie */}
      <section className="py-24">
        <div className="swiss-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <motion.div className="lg:col-span-5" {...fadeUp}>
              <span className="section-number">06</span>
              <span className="section-label ml-4">Fotografie</span>
              <h2 className="heading-lg mt-4">Fotografie stijl</h2>
            </motion.div>
            <motion.div className="lg:col-span-7" {...fadeUp} transition={{ duration: 0.6, delay: 0.15 }}>
              <p className="body-lg text-muted-foreground">
                Professionele fotografie op locatie die de kracht en vakmanschap van het infra-werk vastlegt. De branded werkkleding met het nieuwe logo versterkt de herkenbaarheid in het veld.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <motion.section className="pb-24" {...fadeUp}>
        <img src={jawelFotografie} alt="Jawel Infra fotografie stijl" className="w-full h-auto" />
      </motion.section>

      {/* CTA */}
      <section className="py-24 border-t border-border">
        <div className="swiss-container text-center">
          <motion.div {...fadeUp}>
            <h2 className="heading-lg mb-6">Volgende case bekijken?</h2>
            <Link to="/case/gmt-equipment" className="btn-outline">
              Bekijk GMT Equipment →
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CaseJawel;
