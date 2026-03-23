import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useLanguage } from "@/hooks/useLanguage";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import bouwmeesterFull from "@/assets/bouwmeester-full.png";

const fadeUp = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 } };

const CaseBouwmeester = () => {
  const { t } = useTranslation();
  const { localePath } = useLanguage();
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-32 pb-20"><div className="swiss-container">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}><Link to={localePath("/portfolio")} className="inline-flex items-center gap-2 font-body text-sm text-muted-foreground hover:text-foreground transition-colors mb-12"><ArrowLeft className="w-4 h-4" />{t("caseShared.go_back")}</Link></motion.div>
        <div className="max-w-2xl"><motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="section-label mb-4 block">{t("caseBouwmeester.label")}</span>
          <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 leading-[1.1]">{t("caseBouwmeester.title")}</h1>
          <p className="body-md mb-8 max-w-lg">{t("caseBouwmeester.description")}</p>
          <a href="https://bouwmeesterinstallatietechniek.nl" target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex items-center gap-2">{t("caseShared.view_website")}<ExternalLink className="w-4 h-4" /></a>
        </motion.div></div>
      </div></section>
      <section><div className="swiss-container"><motion.img {...fadeUp} src={bouwmeesterFull} alt="Bouwmeester website" className="w-full h-auto rounded-sm" /></div></section>
      <section className="py-24 md:py-32"><div className="swiss-container"><motion.div {...fadeUp} className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16"><div className="lg:col-span-5"><span className="section-label mb-4 block">{t("caseBouwmeester.opdracht_label")}</span><h2 className="heading-md text-foreground">{t("caseBouwmeester.opdracht_title")}</h2></div><div className="lg:col-span-6 lg:col-start-7 flex flex-col justify-center"><p className="body-md mb-6">{t("caseBouwmeester.opdracht_p1")}</p><p className="body-md">{t("caseBouwmeester.opdracht_p2")}</p></div></motion.div></div></section>
      <section className="py-24 md:py-32 border-t border-border"><div className="swiss-container"><motion.div {...fadeUp} className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16"><div className="lg:col-span-5"><span className="section-label mb-4 block">{t("caseBouwmeester.aanpak_label")}</span><h2 className="heading-md text-foreground">{t("caseBouwmeester.aanpak_title")}</h2></div><div className="lg:col-span-6 lg:col-start-7 flex flex-col justify-center"><p className="body-md mb-6">{t("caseBouwmeester.aanpak_p1")}</p><p className="body-md">{t("caseBouwmeester.aanpak_p2")}</p></div></motion.div></div></section>
      <section className="py-24 md:py-32 border-t border-border"><div className="swiss-container"><motion.div {...fadeUp} className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16"><div className="lg:col-span-5"><span className="section-label mb-4 block">{t("caseBouwmeester.resultaat_label")}</span><h2 className="heading-md text-foreground">{t("caseBouwmeester.resultaat_title")}</h2></div><div className="lg:col-span-6 lg:col-start-7 flex flex-col justify-center"><p className="body-md mb-6">{t("caseBouwmeester.resultaat_p1")}</p><p className="body-md">{t("caseBouwmeester.resultaat_p2")}</p></div></motion.div></div></section>
      <section className="py-20 border-t border-border"><div className="swiss-container text-center"><motion.div {...fadeUp}><h2 className="font-display font-bold text-2xl md:text-3xl text-foreground mb-6">{t("caseCta.strong_platform")}</h2><a href={`${localePath("/")}#contact`} className="btn-primary">{t("caseCta.start_project")}</a></motion.div></div></section>
      <Footer />
    </div>
  );
};

export default CaseBouwmeester;
