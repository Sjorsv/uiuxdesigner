import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CaseSlider from "@/components/CaseSlider";
import Services from "@/components/Services";
import Comparison from "@/components/Comparison";
import Process from "@/components/Process";
import About from "@/components/About";
import ContactForm from "@/components/ContactForm";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      <Navbar />
      <Hero />
      <CaseSlider />
      <Services />
      <Comparison />
      <Process />
      <About />
      <ContactForm />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
