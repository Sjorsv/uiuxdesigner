import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink } from "lucide-react";
import { useEffect } from "react";

export interface CasePopupData {
  title: string;
  industry: string;
  description: string;
  url?: string;
  image: string;
  sections: {
    label: string;
    heading: string;
    paragraphs: string[];
  }[];
}

interface CasePopupProps {
  data: CasePopupData | null;
  onClose: () => void;
}

const CasePopup = ({ data, onClose }: CasePopupProps) => {
  useEffect(() => {
    if (data) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [data]);

  return (
    <AnimatePresence>
      {data && (
        <motion.div
          className="fixed inset-0 z-50 flex items-start justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-background/90 backdrop-blur-sm" onClick={onClose} />

          {/* Content */}
          <motion.div
            className="relative w-full max-w-5xl mx-4 my-8 max-h-[calc(100vh-4rem)] overflow-y-auto rounded-lg border border-border bg-background"
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.97 }}
            transition={{ duration: 0.35 }}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="sticky top-4 float-right mr-4 mt-4 z-10 w-10 h-10 rounded-full bg-surface border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="p-8 md:p-12 lg:p-16">
              {/* Header */}
              <div className="max-w-2xl mb-12">
                <span className="section-label mb-4 block">{data.industry}</span>
                <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-4 leading-[1.1]">
                  {data.title}
                </h2>
                <p className="body-md mb-6">{data.description}</p>
                {data.url && (
                  <a
                    href={data.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary inline-flex items-center gap-2"
                  >
                    Bekijk website
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>

              {/* Main image */}
              <img
                src={data.image}
                alt={`${data.title} website overzicht`}
                className="w-full h-auto rounded-sm mb-16"
              />

              {/* Text sections */}
              {data.sections.map((section, index) => (
                <div key={index} className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-16 last:mb-0">
                  <div className="lg:col-span-5">
                    <span className="section-label mb-4 block">{section.label}</span>
                    <h3 className="heading-md text-foreground">{section.heading}</h3>
                  </div>
                  <div className="lg:col-span-6 lg:col-start-7 flex flex-col justify-center">
                    {section.paragraphs.map((p, i) => (
                      <p key={i} className={`body-md ${i < section.paragraphs.length - 1 ? "mb-6" : ""}`}>
                        {p}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CasePopup;
