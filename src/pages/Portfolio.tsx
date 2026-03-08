import Navbar from "@/components/Navbar";
import PortfolioGrid from "@/components/PortfolioGrid";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

const Portfolio = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-20">
          <PortfolioGrid />
        </div>
        <Footer />
      </div>
    </PageTransition>
  );
};

export default Portfolio;
