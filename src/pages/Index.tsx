import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CaseSlider from "@/components/CaseSlider";
import Services from "@/components/Services";
import Comparison from "@/components/Comparison";
import Process from "@/components/Process";
import About from "@/components/About";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <CaseSlider />
      <Services />
      <Comparison />
      <Process />
      <About />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
