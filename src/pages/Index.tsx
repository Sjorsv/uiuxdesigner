import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CaseSlider from "@/components/CaseSlider";
import Services from "@/components/Services";
import Comparison from "@/components/Comparison";
import Process from "@/components/Process";
import About from "@/components/About";
import ContactForm from "@/components/ContactForm";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

const Index = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background relative">
        <Navbar />
        <Hero />
        <CaseSlider />
        <Services />
        <Comparison />
        <Process />
        <About />
        <ContactForm />
        <FinalCTA />
        <Footer />
      </div>
    </PageTransition>
  );
};

export default Index;
