import Navbar from "@/components/Navbar";
import PortfolioGrid from "@/components/PortfolioGrid";
import Footer from "@/components/Footer";

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20">
        <PortfolioGrid />
      </div>
      <Footer />
    </div>
  );
};

export default Portfolio;
