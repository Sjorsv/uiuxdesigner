import bouwmeesterFull from "@/assets/bouwmeester-full.png";
import type { CasePopupData } from "@/components/CasePopup";

export const casePopups: Record<string, CasePopupData> = {
  "Bouwmeester": {
    title: "Bouwmeester",
    industry: "Bouw & Installatie · Webdesign",
    description: "Professionele website voor een loodgieter- en installatiebedrijf in de regio Zwolle. Focus op dienstverlening, vertrouwen en lokale vindbaarheid.",
    url: "https://bouwmeesterinstallatietechniek.nl",
    image: bouwmeesterFull,
    sections: [
      {
        label: "De opdracht",
        heading: "Een betrouwbare online uitstraling voor een vakman.",
        paragraphs: [
          "Bouwmeester Installatietechniek is een loodgieter- en installatiebedrijf in de regio Zwolle. Ze hadden behoefte aan een professionele website die hun vakmanschap en betrouwbaarheid uitstraalt.",
          "De doelstelling was helder: meer aanvragen genereren via de website, lokaal beter vindbaar worden en vertrouwen opbouwen bij potentiële klanten.",
        ],
      },
      {
        label: "Aanpak",
        heading: "Structuur, vertrouwen en conversie als leidraad.",
        paragraphs: [
          "We hebben de website opgezet rond de kernwaarden van het bedrijf: vakmanschap, betrouwbaarheid en snelle service. De sitemap is gericht op duidelijke dienstverlening en laagdrempelig contact.",
          "Met sterke fotografie, heldere teksten en prominente call-to-actions wordt de bezoeker snel naar een contactmoment begeleid.",
        ],
      },
      {
        label: "Resultaat",
        heading: "Een website die vertrouwen wekt en converteert.",
        paragraphs: [
          "Het eindresultaat is een volledig responsieve website die op elk apparaat professioneel oogt. De projectenpagina en expertises geven bezoekers direct inzicht in het werk van Bouwmeester.",
          "De website is geoptimaliseerd voor lokale vindbaarheid en heeft bijgedragen aan een significante toename in online aanvragen.",
        ],
      },
    ],
  },
};
