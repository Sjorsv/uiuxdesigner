import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Portfolio from "./pages/Portfolio";
import CaseGmt from "./pages/CaseGmt";
import CaseMaxled from "./pages/CaseMaxled";
import CaseBouwmeester from "./pages/CaseBouwmeester";
import CaseLohues from "./pages/CaseLohues";
import CaseTheoriedoen from "./pages/CaseTheoriedoen";
import CaseBatterij from "./pages/CaseBatterij";
import CaseSoortenregister from "./pages/CaseSoortenregister";
import NotFound from "./pages/NotFound";
import { ScrollToTop } from "./components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/case/gmt-equipment" element={<CaseGmt />} />
          <Route path="/case/maxled" element={<CaseMaxled />} />
          <Route path="/case/bouwmeester" element={<CaseBouwmeester />} />
          <Route path="/case/lohues" element={<CaseLohues />} />
          <Route path="/case/theoriedoen" element={<CaseTheoriedoen />} />
          <Route path="/case/batterij" element={<CaseBatterij />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
