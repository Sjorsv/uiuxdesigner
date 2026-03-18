import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import CursorBadge from "./CursorBadge";
import caseGmt from "@/assets/case-gmt.png";
import caseMaxled from "@/assets/case-maxled.png";
import caseBouwmeester from "@/assets/case-bouwmeester.png";
import caseLohues from "@/assets/case-lohues.png";
import caseBatterij from "@/assets/case-batterij.png";
import caseTheoriedoen from "@/assets/case-theoriedoen.png";
import caseSoortenregister from "@/assets/case-soortenregister.png";
import caseBiodiversity from "@/assets/case-biodiversity.png";
import caseJawel from "@/assets/case-jawel.png";

const projects = [
  { title: "GMT Equipment", industry: "Industrial", description: "Website redesign met focus op conversie en technische merkidentiteit", image: caseGmt, slug: "/case/gmt-equipment" },
  { title: "MaxLED", industry: "E-commerce", description: "E-commerce platform voor verhuur en verkoop van ledschermen", image: caseMaxled, slug: "/case/maxled" },
  { title: "Bouwmeester", industry: "Bouw & Installatie", description: "Professionele website voor loodgieter- en installatiebedrijf", image: caseBouwmeester, slug: "/case/bouwmeester" },
  { title: "Lohues Installatie Techniek", industry: "Energie & Duurzaamheid", description: "Website voor familiebedrijf in verduurzaming", image: caseLohues, slug: "/case/lohues" },
  { title: "Batterij-recyclen.nl", industry: "Duurzaamheid", description: "Platform voor verantwoord batterijbeheer en recycling", image: caseBatterij },
  { title: "Theoriedoen.be", industry: "EdTech", description: "Online platform voor autotheorie-examens", image: caseTheoriedoen },
  { title: "Nederlands Soortenregister", industry: "Overheid & Wetenschap", description: "Database voor Nederlandse biodiversiteit", image: caseSoortenregister },
  { title: "Biodiversity", industry: "Wetenschap", description: "Platform voor het ontdekken van soorten", image: caseBiodiversity },
  { title: "Jawel Infra", industry: "Infrastructuur", description: "Krachtige website voor infrastructuurbedrijf", image: caseJawel },
];

const PortfolioGrid = () => {
  const navigate = useNavigate();
  const [hovering, setHovering] = useState(false);

  return (
    <section className="py-32 border-t border-border" id="portfolio">
      <CursorBadge text={"Bekijk\ncase"} active={hovering} />
      <div className="swiss-container">
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-300 font-body text-sm uppercase tracking-wide mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Ga terug
        </button>

        <div className="mb-16">
          <span className="section-number">02</span>
          <span className="section-label ml-4">Portfolio</span>
          <h2 className="heading-lg mt-4">Alle projecten</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="group cursor-none"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
              onMouseEnter={() => setHovering(true)}
              onMouseLeave={() => setHovering(false)}
              onClick={() => {
                if (project.slug) navigate(project.slug);
              }}
            >
              <div className="bg-surface rounded-sm overflow-hidden mb-4 relative">
                <div className="overflow-hidden">
                  <img
                    src={project.image}
                    alt={`${project.title} project`}
                    className="w-full h-auto transition-all duration-700 group-hover:scale-105"
                  />
                </div>
              </div>
              <span className="section-label block mb-1">{project.industry}</span>
              <h3 className="font-display font-bold text-lg text-foreground">{project.title}</h3>
              <p className="text-sm text-muted-foreground font-body mt-1">{project.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioGrid;
