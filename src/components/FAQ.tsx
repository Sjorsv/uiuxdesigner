import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Wat kost een nieuwe website?",
    answer:
      "De prijs van een website hangt af van de omvang en complexiteit van het project. Kleinere websites starten meestal rond €1200–€2500, terwijl grotere maatwerk projecten hoger kunnen liggen. Na een korte kennismaking kan ik een duidelijke prijsindicatie geven.",
  },
  {
    question: "Hoe lang duurt het om een website te laten maken?",
    answer:
      "De meeste websites worden binnen 3 tot 6 weken ontworpen en gebouwd. Dit hangt af van de omvang van het project en hoe snel content zoals teksten en beelden beschikbaar zijn.",
  },
  {
    question: "Werk je alleen met bedrijven uit Nederland?",
    answer:
      "Nee. Hoewel ik gevestigd ben in Nederland werk ik ook met bedrijven uit andere landen. De meeste communicatie verloopt online, waardoor samenwerken op afstand eenvoudig is.",
  },
  {
    question: "Werk je met WordPress, Webflow of iets anders?",
    answer:
      "Dat hangt af van het project. De meeste websites bouw ik in WordPress of Webflow, maar maatwerk oplossingen met code zijn ook mogelijk wanneer dat beter past bij het project.",
  },
  {
    question: "Kan ik mijn website later zelf aanpassen?",
    answer:
      "Ja. Websites worden zo opgezet dat je eenvoudig teksten, afbeeldingen en pagina's kunt aanpassen zonder technische kennis.",
  },
  {
    question: "Kun je ook mijn bestaande website verbeteren?",
    answer:
      "Ja. Naast het bouwen van nieuwe websites help ik ook bedrijven met het redesign of verbeteren van bestaande websites, bijvoorbeeld op het gebied van structuur, design of conversie.",
  },
  {
    question: "Help je ook met branding, fotografie of video?",
    answer:
      "Ja. Naast webdesign kan ik ook helpen met visuele identiteit, fotografie en video zodat je website een sterke en consistente uitstraling krijgt.",
  },
  {
    question: "Hoe start een samenwerking?",
    answer:
      "Het proces begint met een korte kennismaking waarin we jouw bedrijf, doelen en wensen bespreken. Daarna ontvang je een voorstel met planning en prijs. Na akkoord start het ontwerp van de website.",
  },
];

const FAQ = () => {
  return (
    <section className="py-32 border-t border-border" id="faq">
      <div className="swiss-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-number">08</span>
            <span className="section-label ml-4">FAQ</span>
            <h2 className="heading-lg mt-4 mb-8">
              Veelgestelde<br />vragen
            </h2>
            <p className="body-md max-w-md">
              Antwoorden op de meest gestelde vragen over samenwerken, kosten en het proces.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-border">
                  <AccordionTrigger className="text-left font-body text-base text-foreground hover:no-underline hover:text-muted-foreground py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="font-body text-sm text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
