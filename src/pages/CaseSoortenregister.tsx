import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useLanguage } from "@/hooks/useLanguage";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroImg from "@/assets/soortenregister-hero.png";
import homeImg from "@/assets/soortenregister-home.png";
import detailImg from "@/assets/soortenregister-detail.png";
import taxaImg from "@/assets/soortenregister-taxa.png";
import browseImg from "@/assets/soortenregister-browse.png";

const fadeUp = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 } };

const CaseSoortenregister = () => {
  const { t } = useTranslation();
  const { localePath } = useLanguage();
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-32 pb-20"><div className="swiss-container">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}><Link to={localePath("/portfolio")} className="inline-flex items-center gap-2 font-body text-sm text-muted-foreground hover:text-foreground transition-colors mb-12"><ArrowLeft className="w-4 h-4" />{t("caseShared.go_back")}</Link></motion.div>
        <div className="max-w-2xl"><motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="section-label mb-4 block">{t("caseSoortenregister.label")}</span>
          <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 leading-[1.1]">{t("caseSoortenregister.title")}</h1>
          <p className="body-md mb-8 max-w-lg">{t("caseSoortenregister.description")}</p>
          <a href="https://nederlandsesoorten.nl" target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex items-center gap-2">{t("caseShared.view_website")}<ExternalLink className="w-4 h-4" /></a>
        </motion.div></div>
      </div></section>
      <section><div className="swiss-container"><motion.img {...fadeUp} src={heroImg} alt="Nederlands Soortenregister" className="w-full h-auto rounded-sm" /></div></section>
      <section className="py-24 md:py-32"><div className="swiss-container"><motion.div {...fadeUp} className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16"><div className="lg:col-span-5"><span className="section-label mb-4 block">{t("caseSoortenregister.opdracht_label")}</span><h2 className="heading-md text-foreground">{t("caseSoortenregister.opdracht_title")}</h2></div><div className="lg:col-span-6 lg:col-start-7 flex flex-col justify-center"><p className="body-md mb-6">{t("caseSoortenregister.opdracht_p1")}</p><p className="body-md">{t("caseSoortenregister.opdracht_p2")}</p></div></motion.div></div></section>
      <section><div className="swiss-container"><motion.img {...fadeUp} src={homeImg} alt="Soortenregister homepage" className="w-full h-auto rounded-sm" /></div></section>
      <section className="py-24 md:py-32"><div className="swiss-container"><motion.div {...fadeUp} className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16"><div className="lg:col-span-5"><span className="section-label mb-4 block">{t("caseSoortenregister.ux_label")}</span><h2 className="heading-md text-foreground">{t("caseSoortenregister.ux_title")}</h2></div><div className="lg:col-span-6 lg:col-start-7 flex flex-col justify-center"><p className="body-md mb-6">{t("caseSoortenregister.ux_p1")}</p><p className="body-md">{t("caseSoortenregister.ux_p2")}</p></div></motion.div></div></section>
      <section><div className="swiss-container"><div className="grid grid-cols-1 md:grid-cols-2 gap-6"><motion.img {...fadeUp} src={browseImg} alt="Browse" className="w-full h-auto rounded-sm" /><motion.img {...fadeUp} src={taxaImg} alt="Taxa" className="w-full h-auto rounded-sm" /></div></div></section>
      <section className="py-24 md:py-32"><div className="swiss-container"><motion.div {...fadeUp} className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16"><div className="lg:col-span-5"><span className="section-label mb-4 block">{t("caseSoortenregister.detail_label")}</span><h2 className="heading-md text-foreground">{t("caseSoortenregister.detail_title")}</h2></div><div className="lg:col-span-6 lg:col-start-7 flex flex-col justify-center"><p className="body-md mb-6">{t("caseSoortenregister.detail_p1")}</p><p className="body-md">{t("caseSoortenregister.detail_p2")}</p></div></motion.div></div></section>
      <section><div className="swiss-container"><motion.img {...fadeUp} src={detailImg} alt="Soort detail" className="w-full h-auto rounded-sm" /></div></section>
      <section className="py-24 md:py-32 border-t border-border"><div className="swiss-container"><motion.div {...fadeUp} className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16"><div className="lg:col-span-5"><span className="section-label mb-4 block">{t("caseSoortenregister.resultaat_label")}</span><h2 className="heading-md text-foreground">{t("caseSoortenregister.resultaat_title")}</h2></div><div className="lg:col-span-6 lg:col-start-7 flex flex-col justify-center"><p className="body-md mb-6">{t("caseSoortenregister.resultaat_p1")}</p><p className="body-md">{t("caseSoortenregister.resultaat_p2")}</p></div></motion.div></div></section>
      <section className="py-20 border-t border-border"><div className="swiss-container text-center"><motion.div {...fadeUp}><h2 className="font-display font-bold text-2xl md:text-3xl text-foreground mb-6">{t("caseCta.complex_platform")}</h2><a href={`${localePath("/")}#contact`} className="btn-primary">{t("caseCta.start_project")}</a></motion.div></div></section>
      <Footer />
    </div>
  );
};

export default CaseSoortenregister;
