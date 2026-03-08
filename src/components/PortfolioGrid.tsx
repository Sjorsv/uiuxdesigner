import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import caseGmt from "@/assets/case-gmt.png";
import caseMaxled from "@/assets/case-maxled.png";
import caseBouwmeester from "@/assets/case-bouwmeester.png";

const projects = [
  { title: "GMT Equipment", industry: "Industrial", description: "Website redesign met focus op conversie", image: caseGmt },
  { title: "MaxLED", industry: "E-commerce", description: "E-commerce platform redesign", image: caseMaxled },
  { title: "Bouwmeester", industry: "Bouw", description: "Professionele bedrijfswebsite", image: caseBouwmeester },
  { title: "HBM Juristen", industry: "Legal", description: "Juridisch kantoor website", image: caseGmt },
  { title: "Iriszorg", industry: "Recruitment", description: "Recruitment platform redesign", image: caseMaxled },
  { title: "De Steigerman", industry: "Lokaal bedrijf", description: "Lokale dienstverlener website", image: caseBouwmeester },
  { title: "TechFlow Solutions", industry: "Corporate", description: "Corporate website redesign", image: caseGmt },
  { title: "GreenEnergy NL", industry: "Energie", description: "Duurzame energie platform", image: caseMaxled },
  { title: "Studio Blend", industry: "Creatief", description: "Portfolio en brand website", image: caseBouwmeester },
  { title: "Autobedrijf Jansen", industry: "Automotive", description: "Automotive dealer website", image: caseGmt },
  { title: "FreshMarkt", industry: "E-commerce", description: "Online supermarkt platform", image: caseMaxled },
  { title: "Kliniek Plus", industry: "Zorg", description: "Medische kliniek website", image: caseBouwmeester },
  { title: "Van Dijk Transport", industry: "Logistiek", description: "Transport bedrijf website", image: caseGmt },
  { title: "FinAdvies", industry: "Financieel", description: "Financieel adviesbureau", image: caseMaxled },
  { title: "SportClub Elite", industry: "Sport", description: "Sportschool website en platform", image: caseBouwmeester },
];

const PortfolioGrid = () => {
  return (
    <section className="py-32 border-t border-border" id="portfolio">
      <div className="swiss-container">
        <div className="mb-16">
          <span className="section-number">02</span>
          <span className="section-label ml-4">Portfolio</span>
          <h2 className="heading-lg mt-4">Alle projecten</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
            >
              <div className="bg-surface rounded-sm overflow-hidden mb-4 relative">
                <div className="overflow-hidden">
                  <img
                    src={project.image}
                    alt={`${project.title} project`}
                    className="w-full h-auto transition-all duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <span className="font-body text-sm uppercase tracking-widest text-foreground">Bekijk project</span>
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
