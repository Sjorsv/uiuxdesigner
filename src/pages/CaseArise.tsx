import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useLanguage } from "@/hooks/useLanguage";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ariseHero from "@/assets/arise-hero.png";
import ariseRole from "@/assets/arise-351.png";
import ariseProcess from "@/assets/arise-352.png";
import ariseTimeline from "@/assets/arise-353.png";
import ariseDiscover from "@/assets/arise-354.png";
import ariseLeanCanvas from "@/assets/arise-357.png";
import ariseCardSorting from "@/assets/arise-358.png";
import ariseHypotheses from "@/assets/arise-359.png";
import ariseFeatures from "@/assets/arise-360.png";
import arisePersonas from "@/assets/arise-361.png";
import ariseEmpathyMap from "@/assets/arise-362.png";
import ariseUserFlow from "@/assets/arise-363.png";
import ariseDataFlow from "@/assets/arise-dataflow.png";
import ariseIdeation from "@/assets/arise-365.png";
import ariseWireframes from "@/assets/arise-367.png";
import ariseDesign from "@/assets/arise-368.png";
import ariseHifi from "@/assets/arise-369.png";
import arisePrototype from "@/assets/arise-370.png";
import ariseTesting from "@/assets/arise-371.png";
import ariseTestResults from "@/assets/arise-372.png";
import ariseFeedback from "@/assets/arise-373.png";
import ariseScreens from "@/assets/arise-374.png";
import ariseUserFlow2 from "@/assets/arise-UserFlow-iteratie-2.png";
import ariseDiopsis from "@/assets/arise-image-68.png";

const fadeUp = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 } };

const CaseArise = () => {
  const { t } = useTranslation();
  const { localePath } = useLanguage();
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-32 pb-20"><div className="swiss-container">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}><Link to={localePath("/portfolio")} className="inline-flex items-center gap-2 font-body text-sm text-muted-foreground hover:text-foreground transition-colors mb-12"><ArrowLeft className="w-4 h-4" />{t("caseShared.go_back")}</Link></motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          <motion.div className="lg:col-span-7" {...fadeUp}>
            <span className="section-label mb-4 block">{t("caseArise.label")}</span>
            <h1 className="heading-xl mb-6">{t("caseArise.title_arise")} <span className="text-accent">{t("caseArise.title_bio")}</span></h1>
            <p className="body-lg max-w-xl text-muted-foreground">{t("caseArise.description")}</p>
          </motion.div>
          <motion.div className="lg:col-span-5" {...fadeUp} transition={{ duration: 0.6, delay: 0.2 }}>
            <div className="grid grid-cols-2 gap-4">
              <div><span className="section-label mb-1 block">{t("caseArise.client_label")}</span><p className="font-display font-bold text-foreground">{t("caseArise.client")}</p></div>
              <div><span className="section-label mb-1 block">{t("caseArise.industry_label")}</span><p className="font-display font-bold text-foreground">{t("caseArise.industry")}</p></div>
              <div><span className="section-label mb-1 block">{t("caseArise.services_label")}</span><p className="font-display font-bold text-foreground">{t("caseArise.services")}</p></div>
              <div><span className="section-label mb-1 block">{t("caseArise.year_label")}</span><p className="font-display font-bold text-foreground">{t("caseArise.year")}</p></div>
            </div>
          </motion.div>
        </div>
      </div></section>
      <motion.section {...fadeUp}><img src={ariseHero} alt="ARISE UX Case Study" className="w-full h-auto" /></motion.section>
      <motion.section {...fadeUp}><img src={ariseRole} alt="Our Role" className="w-full h-auto" /></motion.section>
      <section className="py-24"><div className="swiss-container"><div className="grid grid-cols-1 lg:grid-cols-12 gap-16"><motion.div className="lg:col-span-5" {...fadeUp}><span className="section-number">{t("caseArise.about_number")}</span><span className="section-label ml-4">{t("caseArise.about_label")}</span><h2 className="heading-lg mt-4">{t("caseArise.about_title")}</h2></motion.div><motion.div className="lg:col-span-7 space-y-6" {...fadeUp} transition={{ duration: 0.6, delay: 0.15 }}><p className="body-lg text-muted-foreground">{t("caseArise.about_p1")}</p><p className="body-md text-muted-foreground">{t("caseArise.about_p2")}</p><p className="body-md text-muted-foreground">{t("caseArise.about_p3")}</p></motion.div></div></div></section>
      <section className="py-24 border-t border-border"><div className="swiss-container"><div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center"><motion.div className="lg:col-span-5" {...fadeUp}><span className="section-number">{t("caseArise.diopsis_number")}</span><span className="section-label ml-4">{t("caseArise.diopsis_label")}</span><h2 className="heading-lg mt-4">{t("caseArise.diopsis_title")}</h2><div className="mt-6 space-y-4"><p className="body-md text-muted-foreground">{t("caseArise.diopsis_p1")}</p><p className="body-md text-muted-foreground">{t("caseArise.diopsis_p2")}</p><p className="body-md text-muted-foreground">{t("caseArise.diopsis_p3")}</p></div></motion.div><motion.div className="lg:col-span-7" {...fadeUp} transition={{ duration: 0.6, delay: 0.2 }}><img src={ariseDiopsis} alt="Diopsis camera" className="w-full max-w-md mx-auto h-auto rounded-sm" /></motion.div></div></div></section>
      <motion.section className="py-16" {...fadeUp}><div className="swiss-container"><img src={ariseDataFlow} alt="Data flow" className="w-full h-auto rounded-sm" /></div></motion.section>
      <section className="py-24 border-t border-border"><div className="swiss-container"><motion.div {...fadeUp} className="mb-16 text-center"><span className="section-number">{t("caseArise.process_number")}</span><span className="section-label ml-4">{t("caseArise.process_label")}</span><h2 className="heading-lg mt-4">{t("caseArise.process_title")}</h2></motion.div><motion.div {...fadeUp}><img src={ariseProcess} alt="UX Process" className="w-full h-auto" /></motion.div></div></section>
      <motion.section className="py-16" {...fadeUp}><div className="swiss-container"><img src={ariseTimeline} alt="Timeline" className="w-full h-auto rounded-sm" /></div></motion.section>
      <motion.section {...fadeUp}><img src={ariseDiscover} alt="Discover" className="w-full h-auto" /></motion.section>
      <section className="py-24"><div className="swiss-container"><div className="grid grid-cols-1 lg:grid-cols-12 gap-16"><motion.div className="lg:col-span-5" {...fadeUp}><span className="section-number">{t("caseArise.lean_number")}</span><span className="section-label ml-4">{t("caseArise.lean_label")}</span><h2 className="heading-lg mt-4">{t("caseArise.lean_title")}</h2><p className="body-md text-muted-foreground mt-4">{t("caseArise.lean_description")}</p><div className="mt-8 bg-surface border border-border rounded-sm p-6"><p className="body-md text-muted-foreground italic">{t("caseArise.lean_quote")}</p></div></motion.div><motion.div className="lg:col-span-7" {...fadeUp} transition={{ duration: 0.6, delay: 0.15 }}><img src={ariseLeanCanvas} alt="Lean Canvas" className="w-full h-auto rounded-sm" /></motion.div></div></div></section>
      <section className="py-24 border-t border-border"><div className="swiss-container"><motion.div {...fadeUp} className="mb-12"><span className="section-number">{t("caseArise.personas_number")}</span><span className="section-label ml-4">{t("caseArise.personas_label")}</span><h2 className="heading-lg mt-4">{t("caseArise.personas_title")}</h2></motion.div><motion.div {...fadeUp}><img src={arisePersonas} alt="Personas" className="w-full h-auto rounded-sm" /></motion.div></div></section>
      <section className="py-24 border-t border-border"><div className="swiss-container"><motion.div {...fadeUp} className="mb-12"><span className="section-number">{t("caseArise.empathy_number")}</span><span className="section-label ml-4">{t("caseArise.empathy_label")}</span><h2 className="heading-lg mt-4">{t("caseArise.empathy_title")}</h2><p className="body-md text-muted-foreground mt-4 max-w-2xl">{t("caseArise.empathy_description")}</p></motion.div><motion.div {...fadeUp}><img src={ariseEmpathyMap} alt="Empathy Map" className="w-full h-auto rounded-sm" /></motion.div></div></section>
      <section className="py-24 border-t border-border"><div className="swiss-container"><motion.div {...fadeUp} className="mb-12"><span className="section-number">{t("caseArise.hypotheses_number")}</span><span className="section-label ml-4">{t("caseArise.hypotheses_label")}</span><h2 className="heading-lg mt-4">{t("caseArise.hypotheses_title")}</h2><p className="body-md text-muted-foreground mt-4 max-w-2xl">{t("caseArise.hypotheses_description")}</p></motion.div><motion.div {...fadeUp}><img src={ariseHypotheses} alt="Hypotheses" className="w-full h-auto rounded-sm" /></motion.div></div></section>
      <section className="py-24 border-t border-border"><div className="swiss-container"><motion.div {...fadeUp} className="mb-12"><span className="section-number">{t("caseArise.cardsorting_number")}</span><span className="section-label ml-4">{t("caseArise.cardsorting_label")}</span><h2 className="heading-lg mt-4">{t("caseArise.cardsorting_title")}</h2><p className="body-md text-muted-foreground mt-4 max-w-2xl">{t("caseArise.cardsorting_description")}</p></motion.div><motion.div {...fadeUp}><img src={ariseCardSorting} alt="Card Sorting" className="w-full h-auto rounded-sm" /></motion.div></div></section>
      <section className="py-24 border-t border-border"><div className="swiss-container"><motion.div {...fadeUp} className="mb-12"><span className="section-number">{t("caseArise.features_number")}</span><span className="section-label ml-4">{t("caseArise.features_label")}</span><h2 className="heading-lg mt-4">{t("caseArise.features_title")}</h2></motion.div><motion.div {...fadeUp}><img src={ariseFeatures} alt="Feature Prioritization" className="w-full h-auto rounded-sm" /></motion.div></div></section>
      <motion.section {...fadeUp}><img src={ariseIdeation} alt="Ideation" className="w-full h-auto" /></motion.section>
      <section className="py-24"><div className="swiss-container"><motion.div {...fadeUp} className="mb-12"><span className="section-number">{t("caseArise.userflow_number")}</span><span className="section-label ml-4">{t("caseArise.userflow_label")}</span><h2 className="heading-lg mt-4">{t("caseArise.userflow_title")}</h2><p className="body-md text-muted-foreground mt-4 max-w-2xl">{t("caseArise.userflow_description")}</p></motion.div><motion.div {...fadeUp} className="mb-12"><img src={ariseUserFlow} alt="User flow 1" className="w-full h-auto rounded-sm" /></motion.div><motion.div {...fadeUp}><img src={ariseUserFlow2} alt="User flow 2" className="w-full h-auto rounded-sm" /></motion.div></div></section>
      <motion.section {...fadeUp}><img src={ariseDesign} alt="Design" className="w-full h-auto" /></motion.section>
      <section className="py-24"><div className="swiss-container"><motion.div {...fadeUp} className="mb-12"><span className="section-number">{t("caseArise.wireframes_number")}</span><span className="section-label ml-4">{t("caseArise.wireframes_label")}</span><h2 className="heading-lg mt-4">{t("caseArise.wireframes_title")}</h2><p className="body-md text-muted-foreground mt-4 max-w-2xl">{t("caseArise.wireframes_description")}</p></motion.div><motion.div {...fadeUp}><img src={ariseWireframes} alt="Wireframes" className="w-full h-auto rounded-sm" /></motion.div></div></section>
      <section className="py-24 border-t border-border"><div className="swiss-container"><motion.div {...fadeUp} className="mb-12"><span className="section-number">{t("caseArise.hifi_number")}</span><span className="section-label ml-4">{t("caseArise.hifi_label")}</span><h2 className="heading-lg mt-4">{t("caseArise.hifi_title")}</h2><p className="body-md text-muted-foreground mt-4 max-w-2xl">{t("caseArise.hifi_description")}</p></motion.div><motion.div {...fadeUp} className="mb-12"><img src={ariseHifi} alt="Hi-fi designs" className="w-full h-auto rounded-sm" /></motion.div><motion.div {...fadeUp}><img src={arisePrototype} alt="Prototype" className="w-full h-auto rounded-sm" /></motion.div></div></section>
      <motion.section {...fadeUp} className="py-16"><div className="swiss-container"><img src={ariseScreens} alt="UI screens" className="w-full h-auto rounded-sm" /></div></motion.section>
      <motion.section {...fadeUp}><img src={ariseTesting} alt="Testing" className="w-full h-auto" /></motion.section>
      <section className="py-24"><div className="swiss-container"><motion.div {...fadeUp} className="mb-12"><span className="section-number">{t("caseArise.testing_number")}</span><span className="section-label ml-4">{t("caseArise.testing_label")}</span><h2 className="heading-lg mt-4">{t("caseArise.testing_title")}</h2><p className="body-md text-muted-foreground mt-4 max-w-2xl">{t("caseArise.testing_description")}</p></motion.div><motion.div {...fadeUp} className="mb-12"><img src={ariseTestResults} alt="Test results" className="w-full h-auto rounded-sm" /></motion.div><motion.div {...fadeUp}><img src={ariseFeedback} alt="Feedback" className="w-full h-auto rounded-sm" /></motion.div></div></section>
      <section className="py-24 border-t border-border"><div className="swiss-container"><div className="grid grid-cols-1 lg:grid-cols-12 gap-16"><motion.div className="lg:col-span-5" {...fadeUp}><span className="section-number">{t("caseArise.conclusion_number")}</span><span className="section-label ml-4">{t("caseArise.conclusion_label")}</span><h2 className="heading-lg mt-4">{t("caseArise.conclusion_title")}</h2></motion.div><motion.div className="lg:col-span-7 space-y-6" {...fadeUp} transition={{ duration: 0.6, delay: 0.15 }}><p className="body-lg text-muted-foreground">{t("caseArise.conclusion_p1")}</p><p className="body-md text-muted-foreground">{t("caseArise.conclusion_p2")}</p></motion.div></div></div></section>
      <section className="py-24 border-t border-border"><div className="swiss-container text-center"><motion.div {...fadeUp}><h2 className="heading-lg mb-6">{t("caseCta.next_case")}</h2><Link to={localePath("/case/soortenregister")} className="btn-outline">{t("caseCta.view_soortenregister")}</Link></motion.div></div></section>
      <Footer />
    </div>
  );
};

export default CaseArise;
