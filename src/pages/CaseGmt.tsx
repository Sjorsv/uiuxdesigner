import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useLanguage } from "@/hooks/useLanguage";
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

const fadeUp = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 } };

const CaseGmt = () => {
  const { t } = useTranslation();
  const { localePath } = useLanguage();
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-32 pb-20">
        <div className="swiss-container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Link to={localePath("/portfolio")} className="inline-flex items-center gap-2 font-body text-sm text-muted-foreground hover:text-foreground transition-colors mb-12">
              <ArrowLeft className="w-4 h-4" />{t("caseShared.go_back")}
            </Link>
          </motion.div>
          <div className="max-w-2xl">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <span className="section-label mb-4 block">{t("caseGmt.label")}</span>
              <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 leading-[1.1]">{t("caseGmt.title")}</h1>
              <p className="body-md mb-8 max-w-lg">{t("caseGmt.description")}</p>
              <a href="https://gmtequipment.com" target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex items-center gap-2">{t("caseShared.view_website")}<ExternalLink className="w-4 h-4" /></a>
            </motion.div>
          </div>
        </div>
      </section>
      <section><div className="swiss-container"><motion.img {...fadeUp} src={gmtHero} alt="GMT Equipment hero mockup" className="w-full h-auto rounded-sm" /></div></section>
      <section className="py-24 md:py-32"><div className="swiss-container"><motion.div {...fadeUp} className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16"><div className="lg:col-span-5"><span className="section-label mb-4 block">{t("caseGmt.story_label")}</span><h2 className="heading-md text-foreground">{t("caseGmt.story_title")}</h2></div><div className="lg:col-span-6 lg:col-start-7 flex flex-col justify-center"><p className="body-md mb-6">{t("caseGmt.story_p1")}</p><p className="body-md">{t("caseGmt.story_p2")}</p></div></motion.div></div></section>
      <section><div className="swiss-container"><motion.img {...fadeUp} src={gmtStory} alt="GMT Equipment story" className="w-full h-auto rounded-sm" /></div></section>
      <section className="py-24 md:py-32"><div className="swiss-container"><motion.div {...fadeUp} className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16"><div className="lg:col-span-5"><span className="section-label mb-4 block">{t("caseGmt.wireframes_label")}</span><h2 className="heading-md text-foreground">{t("caseGmt.wireframes_title")}</h2></div><div className="lg:col-span-6 lg:col-start-7 flex flex-col justify-center"><p className="body-md mb-6">{t("caseGmt.wireframes_p1")}</p><p className="body-md">{t("caseGmt.wireframes_p2")}</p></div></motion.div></div></section>
      <section><div className="swiss-container"><motion.img {...fadeUp} src={gmtWireframes} alt="GMT Equipment wireframes" className="w-full h-auto rounded-sm" /></div></section>
      <section className="py-24 md:py-32"><div className="swiss-container"><motion.div {...fadeUp} className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16"><div className="lg:col-span-5"><span className="section-label mb-4 block">{t("caseGmt.design_label")}</span><h2 className="heading-md text-foreground">{t("caseGmt.design_title")}</h2></div><div className="lg:col-span-6 lg:col-start-7 flex flex-col justify-center"><p className="body-md mb-6">{t("caseGmt.design_p1")}</p><p className="body-md">{t("caseGmt.design_p2")}</p></div></motion.div></div></section>
      <section><div className="swiss-container"><motion.img {...fadeUp} src={gmtDesignpak} alt="GMT Equipment design" className="w-full h-auto rounded-sm" /></div></section>
      <section className="py-24 md:py-32"><div className="swiss-container"><motion.div {...fadeUp} className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16"><div className="lg:col-span-5"><span className="section-label mb-4 block">{t("caseGmt.process_label")}</span><h2 className="heading-md text-foreground">{t("caseGmt.process_title")}</h2></div><div className="lg:col-span-6 lg:col-start-7 flex flex-col justify-center"><p className="body-md mb-6">{t("caseGmt.process_p1")}</p><p className="body-md">{t("caseGmt.process_p2")}</p></div></motion.div></div></section>
      <section><div className="swiss-container"><motion.img {...fadeUp} src={gmtProcess} alt="GMT Equipment process" className="w-full h-auto rounded-sm" /></div></section>
      <section className="pt-8"><div className="swiss-container"><motion.div {...fadeUp}><video src="/videos/gmt-video-1.mp4" autoPlay loop muted playsInline className="w-full h-auto rounded-sm" /></motion.div></div></section>
      <section className="py-24 md:py-32"><div className="swiss-container"><motion.div {...fadeUp} className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16"><div className="lg:col-span-5"><span className="section-label mb-4 block">{t("caseGmt.ux_label")}</span><h2 className="heading-md text-foreground">{t("caseGmt.ux_title")}</h2></div><div className="lg:col-span-6 lg:col-start-7 flex flex-col justify-center"><p className="body-md mb-6">{t("caseGmt.ux_p1")}</p><p className="body-md">{t("caseGmt.ux_p2")}</p></div></motion.div></div></section>
      <section><div className="swiss-container"><motion.img {...fadeUp} src={gmtUx} alt="GMT Equipment UX" className="w-full h-auto rounded-sm" /></div></section>
      <section className="pt-8"><div className="swiss-container"><motion.div {...fadeUp}><video src="/videos/gmt-video-5.mp4" autoPlay loop muted playsInline className="w-full h-auto rounded-sm" /></motion.div></div></section>
      <section className="py-24 md:py-32"><div className="swiss-container"><motion.div {...fadeUp} className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16"><div className="lg:col-span-5"><span className="section-label mb-4 block">{t("caseGmt.result_label")}</span><h2 className="heading-md text-foreground">{t("caseGmt.result_title")}</h2></div><div className="lg:col-span-6 lg:col-start-7 flex flex-col justify-center"><p className="body-md mb-6">{t("caseGmt.result_p1")}</p><p className="body-md">{t("caseGmt.result_p2")}</p></div></motion.div></div></section>
      <section><div className="swiss-container"><motion.img {...fadeUp} src={gmtScreens} alt="GMT Equipment screens" className="w-full h-auto rounded-sm" /></div></section>
      <section className="py-24 md:py-32"><div className="swiss-container"><motion.div {...fadeUp} className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16"><div className="lg:col-span-5"><span className="section-label mb-4 block">{t("caseGmt.decisions_label")}</span><h2 className="heading-md text-foreground">{t("caseGmt.decisions_title")}</h2></div><div className="lg:col-span-6 lg:col-start-7 flex flex-col justify-center"><p className="body-md mb-6">{t("caseGmt.decisions_p1")}</p><p className="body-md">{t("caseGmt.decisions_p2")}</p></div></motion.div></div></section>
      <section className="pb-20"><div className="swiss-container"><motion.div {...fadeUp}><video src="/videos/gmt-video-4.mp4" autoPlay loop muted playsInline className="w-full h-auto rounded-sm" /></motion.div></div></section>
      <section className="py-20 border-t border-border"><div className="swiss-container text-center"><motion.div {...fadeUp}><h2 className="font-display font-bold text-2xl md:text-3xl text-foreground mb-6">{t("caseCta.strong_platform")}</h2><a href={`${localePath("/")}#contact`} className="btn-primary">{t("caseCta.start_project")}</a></motion.div></div></section>
      <Footer />
    </div>
  );
};

export default CaseGmt;
