import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
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

const CaseGmt = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="swiss-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 font-body text-sm text-muted-foreground hover:text-foreground transition-colors mb-12"
            >
              <ArrowLeft className="w-4 h-4" />
              Ga terug
            </Link>
          </motion.div>

          <div className="max-w-2xl">
            {/* Left — Text */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="section-label mb-4 block">Industrial · UI/UX Design · Webdesign</span>
              <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 leading-[1.1]">
                GMT Equipment
              </h1>
              <p className="body-md mb-8 max-w-lg">
                Website redesign voor GMT Equipment, fabrikant van innovatieve zaag- en grijpsystemen. De focus lag op structuur, conversie en het versterken van hun technische merkidentiteit.
              </p>
              <a
                href="https://gmtequipment.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2"
              >
                Bekijk website
                <ExternalLink className="w-4 h-4" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Case Images */}
      <section className="pb-20">
        <div className="swiss-container space-y-16">
          {[
            { src: gmtStory, alt: "GMT Equipment verhaal en doel van opdracht" },
            { src: gmtWireframes, alt: "GMT Equipment wireframes" },
            { src: gmtDesignpak, alt: "GMT Equipment designaanpak" },
            { src: gmtProcess, alt: "GMT Equipment iteratief proces" },
            { src: gmtUx, alt: "GMT Equipment UX-aanpak" },
            { src: gmtScreens, alt: "GMT Equipment schermen overzicht" },
            { src: gmtDecisions, alt: "GMT Equipment designbeslissingen" },
          ].map((img, index) => (
            <motion.div
              key={img.alt}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-auto rounded-sm"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 border-t border-border">
        <div className="swiss-container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display font-bold text-2xl md:text-3xl text-foreground mb-6">
              Ook een sterk online platform nodig?
            </h2>
            <a href="/#contact" className="btn-primary">
              Start een project
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CaseGmt;
