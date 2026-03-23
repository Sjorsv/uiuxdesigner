import { motion } from "framer-motion";
import { ArrowLeft, Construction, HardHat, Wrench, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useLanguage } from "@/hooks/useLanguage";
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
import jawelWebsiteConcept from "@/assets/jawel-website-concept.png";
import jawelHeaders from "@/assets/jawel-headers.png";
import jawelFullpage from "@/assets/jawel-fullpage.png";
import jawelToepassingen from "@/assets/jawel-toepassingen.png";
import jawelVisitekaartje from "@/assets/jawel-visitekaartje.png";
import jawelBriefpapier from "@/assets/jawel-briefpapier.png";
import jawelSocialmedia from "@/assets/jawel-socialmedia.png";
import jawelCampagne from "@/assets/jawel-campagne.png";

const fadeUp = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 } };
const icons = [Construction, Shield, HardHat, Wrench];

const CaseJawel = () => {
  const { t } = useTranslation();
  const { localePath } = useLanguage();
  const values = t("caseJawel.values", { returnObjects: true }) as { title: string; desc: string }[];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-32 pb-20"><div className="swiss-container">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}><Link to={localePath("/portfolio")} className="inline-flex items-center gap-2 font-body text-sm text-muted-foreground hover:text-foreground transition-colors mb-12"><ArrowLeft className="w-4 h-4" />{t("caseShared.go_back")}</Link></motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          <motion.div className="lg:col-span-7" {...fadeUp}>
            <span className="section-label mb-4 block">{t("caseJawel.label")}</span>
            <h1 className="heading-xl mb-6">{t("caseJawel.title_jawel")} <span className="text-accent">{t("caseJawel.title_infra")}</span></h1>
            <p className="body-lg max-w-xl text-muted-foreground">{t("caseJawel.description")}</p>
          </motion.div>
          <motion.div className="lg:col-span-5" {...fadeUp} transition={{ duration: 0.6, delay: 0.2 }}>
            <div className="grid grid-cols-2 gap-4">
              <div><span className="section-label mb-1 block">{t("caseJawel.client_label")}</span><p className="font-display font-bold text-foreground">{t("caseJawel.client")}</p></div>
              <div><span className="section-label mb-1 block">{t("caseJawel.industry_label")}</span><p className="font-display font-bold text-foreground">{t("caseJawel.industry")}</p></div>
              <div><span className="section-label mb-1 block">{t("caseJawel.services_label")}</span><p className="font-display font-bold text-foreground">{t("caseJawel.services")}</p></div>
              <div><span className="section-label mb-1 block">{t("caseJawel.year_label")}</span><p className="font-display font-bold text-foreground">{t("caseJawel.year")}</p></div>
            </div>
          </motion.div>
        </div>
      </div></section>
      <motion.section {...fadeUp}><img src={jawelHero} alt="Jawel Infra" className="w-full h-auto" /></motion.section>
      <section className="py-24"><div className="swiss-container"><div className="grid grid-cols-1 lg:grid-cols-12 gap-16"><motion.div className="lg:col-span-5" {...fadeUp}><span className="section-number">{t("caseJawel.intro_number")}</span><span className="section-label ml-4">{t("caseJawel.intro_label")}</span><h2 className="heading-lg mt-4">{t("caseJawel.intro_title")}</h2></motion.div><motion.div className="lg:col-span-7 space-y-6" {...fadeUp} transition={{ duration: 0.6, delay: 0.15 }}><p className="body-lg text-muted-foreground">{t("caseJawel.intro_p1")}</p><p className="body-md text-muted-foreground">{t("caseJawel.intro_p2")}</p></motion.div></div></div></section>
      <motion.section className="pb-24" {...fadeUp}><img src={jawelIntro} alt="Jawel Infra intro" className="w-full h-auto" /></motion.section>
      <section className="py-24"><div className="swiss-container"><div className="grid grid-cols-1 lg:grid-cols-12 gap-16"><motion.div className="lg:col-span-5" {...fadeUp}><span className="section-number">{t("caseJawel.strategy_number")}</span><span className="section-label ml-4">{t("caseJawel.strategy_label")}</span><h2 className="heading-lg mt-4">{t("caseJawel.strategy_title")}</h2></motion.div><motion.div className="lg:col-span-7 space-y-6" {...fadeUp} transition={{ duration: 0.6, delay: 0.15 }}><div className="grid grid-cols-1 sm:grid-cols-2 gap-6">{values.map((item, i) => { const Icon = icons[i]; return (<div key={item.title} className="border border-border rounded-sm p-6"><Icon className="w-8 h-8 text-accent mb-3" /><h3 className="font-display font-bold text-foreground mb-2">{item.title}</h3><p className="text-sm text-muted-foreground font-body">{item.desc}</p></div>); })}</div></motion.div></div></div></section>
      <motion.section className="pb-24" {...fadeUp}><img src={jawelStrategie} alt="Jawel strategie" className="w-full h-auto" /></motion.section>
      <section className="py-24"><div className="swiss-container"><motion.div {...fadeUp}><span className="section-number">{t("caseJawel.logo_number")}</span><span className="section-label ml-4">{t("caseJawel.logo_label")}</span><h2 className="heading-lg mt-4 mb-12">{t("caseJawel.logo_title")}</h2></motion.div></div></section>
      <motion.section className="pb-12" {...fadeUp}><img src={jawelLogo} alt="Logo" className="w-full h-auto" /></motion.section>
      <motion.section className="pb-12" {...fadeUp}><img src={jawelLogoVarianten} alt="Logo varianten" className="w-full h-auto" /></motion.section>
      <motion.section className="pb-24" {...fadeUp}><img src={jawelLogoVoorstellen} alt="Logo voorstellen" className="w-full h-auto" /></motion.section>
      <section className="py-24"><div className="swiss-container"><div className="grid grid-cols-1 lg:grid-cols-12 gap-16"><motion.div className="lg:col-span-5" {...fadeUp}><span className="section-number">{t("caseJawel.typo_number")}</span><span className="section-label ml-4">{t("caseJawel.typo_label")}</span><h2 className="heading-lg mt-4">{t("caseJawel.typo_title")}</h2></motion.div><motion.div className="lg:col-span-7" {...fadeUp} transition={{ duration: 0.6, delay: 0.15 }}><p className="body-lg text-muted-foreground">{t("caseJawel.typo_description")}</p></motion.div></div></div></section>
      <motion.section className="pb-24" {...fadeUp}><img src={jawelTypografie} alt="Typografie" className="w-full h-auto" /></motion.section>
      <section className="py-24"><div className="swiss-container"><motion.div {...fadeUp}><span className="section-number">{t("caseJawel.icons_number")}</span><span className="section-label ml-4">{t("caseJawel.icons_label")}</span><h2 className="heading-lg mt-4 mb-12">{t("caseJawel.icons_title")}</h2></motion.div></div></section>
      <motion.section className="pb-12" {...fadeUp}><img src={jawelIconen} alt="Iconen" className="w-full h-auto" /></motion.section>
      <motion.section className="pb-24" {...fadeUp}><img src={jawelBranding} alt="Branding" className="w-full h-auto" /></motion.section>
      <section className="py-24"><div className="swiss-container"><div className="grid grid-cols-1 lg:grid-cols-12 gap-16"><motion.div className="lg:col-span-5" {...fadeUp}><span className="section-number">{t("caseJawel.photo_number")}</span><span className="section-label ml-4">{t("caseJawel.photo_label")}</span><h2 className="heading-lg mt-4">{t("caseJawel.photo_title")}</h2></motion.div><motion.div className="lg:col-span-7" {...fadeUp} transition={{ duration: 0.6, delay: 0.15 }}><p className="body-lg text-muted-foreground">{t("caseJawel.photo_description")}</p></motion.div></div></div></section>
      <motion.section className="pb-24" {...fadeUp}><img src={jawelFotografie} alt="Fotografie" className="w-full h-auto" /></motion.section>
      <section className="py-24"><div className="swiss-container"><div className="grid grid-cols-1 lg:grid-cols-12 gap-16"><motion.div className="lg:col-span-5" {...fadeUp}><span className="section-number">{t("caseJawel.web_number")}</span><span className="section-label ml-4">{t("caseJawel.web_label")}</span><h2 className="heading-lg mt-4">{t("caseJawel.web_title")}</h2></motion.div><motion.div className="lg:col-span-7" {...fadeUp} transition={{ duration: 0.6, delay: 0.15 }}><p className="body-lg text-muted-foreground">{t("caseJawel.web_description")}</p></motion.div></div></div></section>
      <motion.section className="pb-12" {...fadeUp}><img src={jawelWebsiteConcept} alt="Website concept" className="w-full h-auto" /></motion.section>
      <motion.section className="pb-12" {...fadeUp}><img src={jawelHeaders} alt="Headers" className="w-full h-auto" /></motion.section>
      <motion.section className="pb-24" {...fadeUp}><img src={jawelFullpage} alt="Full page" className="w-full h-auto" /></motion.section>
      <section className="py-24"><div className="swiss-container"><motion.div {...fadeUp}><span className="section-number">{t("caseJawel.applications_number")}</span><span className="section-label ml-4">{t("caseJawel.applications_label")}</span><h2 className="heading-lg mt-4 mb-12">{t("caseJawel.applications_title")}</h2></motion.div></div></section>
      <motion.section className="pb-12" {...fadeUp}><img src={jawelToepassingen} alt="Toepassingen" className="w-full h-auto" /></motion.section>
      <motion.section className="pb-12" {...fadeUp}><img src={jawelVisitekaartje} alt="Visitekaartje" className="w-full h-auto" /></motion.section>
      <motion.section className="pb-24" {...fadeUp}><img src={jawelBriefpapier} alt="Briefpapier" className="w-full h-auto" /></motion.section>
      <section className="py-24"><div className="swiss-container"><div className="grid grid-cols-1 lg:grid-cols-12 gap-16"><motion.div className="lg:col-span-5" {...fadeUp}><span className="section-number">{t("caseJawel.social_number")}</span><span className="section-label ml-4">{t("caseJawel.social_label")}</span><h2 className="heading-lg mt-4">{t("caseJawel.social_title")}</h2></motion.div><motion.div className="lg:col-span-7" {...fadeUp} transition={{ duration: 0.6, delay: 0.15 }}><p className="body-lg text-muted-foreground">{t("caseJawel.social_description")}</p></motion.div></div></div></section>
      <motion.section className="pb-12" {...fadeUp}><img src={jawelSocialmedia} alt="Social media" className="w-full h-auto" /></motion.section>
      <motion.section className="pb-24" {...fadeUp}><img src={jawelCampagne} alt="Campagne" className="w-full h-auto" /></motion.section>
      <section className="py-24 border-t border-border"><div className="swiss-container text-center"><motion.div {...fadeUp}><h2 className="heading-lg mb-6">{t("caseCta.next_case")}</h2><Link to={localePath("/case/gmt-equipment")} className="btn-outline">{t("caseCta.view_gmt")}</Link></motion.div></div></section>
      <Footer />
    </div>
  );
};

export default CaseJawel;
