import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useLanguage } from "@/hooks/useLanguage";
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

const fadeUp = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 } };

const CaseMaxled = () => {
  const { t } = useTranslation();
  const { localePath } = useLanguage();
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-32 pb-20"><div className="swiss-container">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}><Link to={localePath("/portfolio")} className="inline-flex items-center gap-2 font-body text-sm text-muted-foreground hover:text-foreground transition-colors mb-12"><ArrowLeft className="w-4 h-4" />{t("caseShared.go_back")}</Link></motion.div>
        <div className="max-w-2xl"><motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="section-label mb-4 block">{t("caseMaxled.label")}</span>
          <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 leading-[1.1]">{t("caseMaxled.title")}</h1>
          <p className="body-md mb-8 max-w-lg">{t("caseMaxled.description")}</p>
          <a href="https://maxled.be" target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex items-center gap-2">{t("caseShared.view_website")}<ExternalLink className="w-4 h-4" /></a>
        </motion.div></div>
      </div></section>
      <section><div className="swiss-container"><motion.img {...fadeUp} src={maxledHero} alt="MaxLED hero" className="w-full h-auto rounded-sm" /></div></section>
      <section className="py-24 md:py-32"><div className="swiss-container"><motion.div {...fadeUp} className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16"><div className="lg:col-span-5"><span className="section-label mb-4 block">{t("caseMaxled.ux_label")}</span><h2 className="heading-md text-foreground">{t("caseMaxled.ux_title")}</h2></div><div className="lg:col-span-6 lg:col-start-7 flex flex-col justify-center"><p className="body-md mb-6">{t("caseMaxled.ux_p1")}</p><p className="body-md">{t("caseMaxled.ux_p2")}</p></div></motion.div></div></section>
      <section><div className="swiss-container"><motion.img {...fadeUp} src={maxledUx} alt="MaxLED UX" className="w-full h-auto rounded-sm" /></div></section>
      <section className="py-24 md:py-32"><div className="swiss-container"><motion.div {...fadeUp} className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16"><div className="lg:col-span-5"><span className="section-label mb-4 block">{t("caseMaxled.before_label")}</span><h2 className="heading-md text-foreground">{t("caseMaxled.before_title")}</h2></div><div className="lg:col-span-6 lg:col-start-7 flex flex-col justify-center"><p className="body-md mb-6">{t("caseMaxled.before_p1")}</p><p className="body-md">{t("caseMaxled.before_p2")}</p></div></motion.div></div></section>
      <section><div className="swiss-container"><motion.img {...fadeUp} src={maxledComparison} alt="MaxLED comparison" className="w-full h-auto rounded-sm" /></div></section>
      <section className="py-24 md:py-32"><div className="swiss-container"><motion.div {...fadeUp} className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16"><div className="lg:col-span-5"><span className="section-label mb-4 block">{t("caseMaxled.visual_label")}</span><h2 className="heading-md text-foreground">{t("caseMaxled.visual_title")}</h2></div><div className="lg:col-span-6 lg:col-start-7 flex flex-col justify-center"><p className="body-md mb-6">{t("caseMaxled.visual_p1")}</p><p className="body-md">{t("caseMaxled.visual_p2")}</p></div></motion.div></div></section>
      <section><div className="swiss-container"><motion.img {...fadeUp} src={maxledVisual} alt="MaxLED visual" className="w-full h-auto rounded-sm" /></div></section>
      <section className="py-24 md:py-32"><div className="swiss-container"><motion.div {...fadeUp} className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16"><div className="lg:col-span-5"><span className="section-label mb-4 block">{t("caseMaxled.uxapproach_label")}</span><h2 className="heading-md text-foreground">{t("caseMaxled.uxapproach_title")}</h2></div><div className="lg:col-span-6 lg:col-start-7 flex flex-col justify-center"><p className="body-md mb-6">{t("caseMaxled.uxapproach_p1")}</p><p className="body-md">{t("caseMaxled.uxapproach_p2")}</p></div></motion.div></div></section>
      <section><div className="swiss-container"><motion.img {...fadeUp} src={maxledUxAanpak} alt="MaxLED UX approach" className="w-full h-auto rounded-sm" /></div></section>
      <section className="py-24 md:py-32"><div className="swiss-container"><motion.div {...fadeUp} className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16"><div className="lg:col-span-5"><span className="section-label mb-4 block">{t("caseMaxled.ecommerce_label")}</span><h2 className="heading-md text-foreground">{t("caseMaxled.ecommerce_title")}</h2></div><div className="lg:col-span-6 lg:col-start-7 flex flex-col justify-center"><p className="body-md mb-6">{t("caseMaxled.ecommerce_p1")}</p><p className="body-md">{t("caseMaxled.ecommerce_p2")}</p></div></motion.div></div></section>
      <section><div className="swiss-container"><motion.img {...fadeUp} src={maxledEcommerce} alt="MaxLED e-commerce" className="w-full h-auto rounded-sm" /></div></section>
      <section className="py-24 md:py-32"><div className="swiss-container"><motion.div {...fadeUp} className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16"><div className="lg:col-span-5"><span className="section-label mb-4 block">{t("caseMaxled.mobile_label")}</span><h2 className="heading-md text-foreground">{t("caseMaxled.mobile_title")}</h2></div><div className="lg:col-span-6 lg:col-start-7 flex flex-col justify-center"><p className="body-md mb-6">{t("caseMaxled.mobile_p1")}</p><p className="body-md">{t("caseMaxled.mobile_p2")}</p></div></motion.div></div></section>
      <section><div className="swiss-container"><motion.img {...fadeUp} src={maxledMobile} alt="MaxLED mobile" className="w-full h-auto rounded-sm" /></div></section>
      <section className="py-24 md:py-32"><div className="swiss-container"><motion.div {...fadeUp} className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16"><div className="lg:col-span-5"><span className="section-label mb-4 block">{t("caseMaxled.result_label")}</span><h2 className="heading-md text-foreground">{t("caseMaxled.result_title")}</h2></div><div className="lg:col-span-6 lg:col-start-7 flex flex-col justify-center"><p className="body-md mb-6">{t("caseMaxled.result_p1")}</p><p className="body-md">{t("caseMaxled.result_p2")}</p></div></motion.div></div></section>
      <section><div className="swiss-container"><motion.img {...fadeUp} src={maxledScreens} alt="MaxLED screens" className="w-full h-auto rounded-sm" /></div></section>
      <section className="pt-8 pb-20"><div className="swiss-container"><motion.img {...fadeUp} src={maxledPages} alt="MaxLED pages" className="w-full h-auto rounded-sm" /></div></section>
      <section className="pb-20"><div className="swiss-container"><motion.div {...fadeUp}><video src="/videos/maxled-video.mp4" autoPlay loop muted playsInline className="w-full h-auto rounded-sm" /></motion.div></div></section>
      <section className="py-20 border-t border-border"><div className="swiss-container text-center"><motion.div {...fadeUp}><h2 className="font-display font-bold text-2xl md:text-3xl text-foreground mb-6">{t("caseCta.strong_platform")}</h2><a href={`${localePath("/")}#contact`} className="btn-primary">{t("caseCta.start_project")}</a></motion.div></div></section>
      <Footer />
    </div>
  );
};

export default CaseMaxled;
