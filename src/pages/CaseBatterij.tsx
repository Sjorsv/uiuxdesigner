import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Leaf, Recycle, Battery, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useLanguage } from "@/hooks/useLanguage";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import batterijLanding from "@/assets/batterij-landing.png";
import batterijHome from "@/assets/batterij-home.png";

const fadeUp = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 } };

const CaseBatterij = () => {
  const { t } = useTranslation();
  const { localePath } = useLanguage();

  const badges = [
    { icon: Battery, label: t("caseBatterij.badge_batterij") },
    { icon: Recycle, label: t("caseBatterij.badge_recycling") },
    { icon: Leaf, label: t("caseBatterij.badge_duurzaamheid") },
    { icon: Globe, label: t("caseBatterij.badge_groene") },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-32 pb-20"><div className="swiss-container">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}><Link to={localePath("/portfolio")} className="inline-flex items-center gap-2 font-body text-sm text-muted-foreground hover:text-foreground transition-colors mb-12"><ArrowLeft className="w-4 h-4" />{t("caseShared.go_back")}</Link></motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          <motion.div className="lg:col-span-7" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="section-label mb-4 block">{t("caseBatterij.label")}</span>
            <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 leading-[1.1]">{t("caseBatterij.title")}</h1>
            <p className="body-md mb-8 max-w-lg">{t("caseBatterij.description")}</p>
            <a href="https://batterij-recyclen.nl" target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex items-center gap-2">{t("caseShared.view_website")}<ExternalLink className="w-4 h-4" /></a>
          </motion.div>
          <motion.div className="lg:col-span-5 flex gap-6 justify-end" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.3 }}>
            {badges.map((item) => (
              <div key={item.label} className="flex flex-col items-center gap-2 text-center">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center"><item.icon className="w-5 h-5 text-accent-foreground" /></div>
                <span className="text-xs font-body text-muted-foreground">{item.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div></section>
      <section><div className="swiss-container"><motion.img {...fadeUp} src={batterijLanding} alt="Batterij-recyclen.nl hero" className="w-full h-auto rounded-sm" /></div></section>
      <section className="py-24 md:py-32"><div className="swiss-container"><motion.div {...fadeUp} className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16"><div className="lg:col-span-5"><span className="section-label mb-4 block">{t("caseBatterij.opdracht_label")}</span><h2 className="heading-md text-foreground">{t("caseBatterij.opdracht_title")}</h2></div><div className="lg:col-span-6 lg:col-start-7 flex flex-col justify-center"><p className="body-md mb-6">{t("caseBatterij.opdracht_p1")}</p><p className="body-md">{t("caseBatterij.opdracht_p2")}</p></div></motion.div></div></section>
      <section className="py-24 md:py-32 border-t border-border"><div className="swiss-container"><motion.div {...fadeUp} className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16"><div className="lg:col-span-5"><span className="section-label mb-4 block">{t("caseBatterij.inspiratie_label")}</span><h2 className="heading-md text-foreground">{t("caseBatterij.inspiratie_title")}</h2></div><div className="lg:col-span-6 lg:col-start-7 flex flex-col justify-center"><p className="body-md mb-6">{t("caseBatterij.inspiratie_p1")}</p><p className="body-md mb-6">{t("caseBatterij.inspiratie_p2")}</p><p className="body-md">{t("caseBatterij.inspiratie_p3")}</p></div></motion.div></div></section>
      <section><div className="swiss-container"><motion.img {...fadeUp} src={batterijHome} alt="Batterij-recyclen.nl homepage" className="w-full h-auto rounded-sm" /></div></section>
      <section className="py-24 md:py-32"><div className="swiss-container"><motion.div {...fadeUp} className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16"><div className="lg:col-span-5"><span className="section-label mb-4 block">{t("caseBatterij.aanpak_label")}</span><h2 className="heading-md text-foreground">{t("caseBatterij.aanpak_title")}</h2></div><div className="lg:col-span-6 lg:col-start-7 flex flex-col justify-center"><p className="body-md mb-6">{t("caseBatterij.aanpak_p1")}</p><p className="body-md">{t("caseBatterij.aanpak_p2")}</p></div></motion.div></div></section>
      <section className="py-24 md:py-32 border-t border-border"><div className="swiss-container"><motion.div {...fadeUp} className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16"><div className="lg:col-span-5"><span className="section-label mb-4 block">{t("caseBatterij.resultaat_label")}</span><h2 className="heading-md text-foreground">{t("caseBatterij.resultaat_title")}</h2></div><div className="lg:col-span-6 lg:col-start-7 flex flex-col justify-center"><p className="body-md mb-6">{t("caseBatterij.resultaat_p1")}</p><p className="body-md">{t("caseBatterij.resultaat_p2")}</p></div></motion.div></div></section>
      <section className="py-20 border-t border-border"><div className="swiss-container text-center"><motion.div {...fadeUp}><h2 className="font-display font-bold text-2xl md:text-3xl text-foreground mb-6">{t("caseCta.mission_platform")}</h2><a href={`${localePath("/")}#contact`} className="btn-primary">{t("caseCta.start_project")}</a></motion.div></div></section>
      <Footer />
    </div>
  );
};

export default CaseBatterij;
