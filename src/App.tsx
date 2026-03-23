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
import CaseArise from "./pages/CaseArise";
import CaseJawel from "./pages/CaseJawel";
import NotFound from "./pages/NotFound";
import { ScrollToTop } from "./components/ScrollToTop";
import LanguageSync from "./components/LanguageSync";

const queryClient = new QueryClient();

const caseRoutes = [
  { path: "case/gmt-equipment", element: <CaseGmt /> },
  { path: "case/maxled", element: <CaseMaxled /> },
  { path: "case/bouwmeester", element: <CaseBouwmeester /> },
  { path: "case/lohues", element: <CaseLohues /> },
  { path: "case/theoriedoen", element: <CaseTheoriedoen /> },
  { path: "case/batterij", element: <CaseBatterij /> },
  { path: "case/soortenregister", element: <CaseSoortenregister /> },
  { path: "case/jawel", element: <CaseJawel /> },
  { path: "case/arise", element: <CaseArise /> },
];

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <LanguageSync />
        <Routes>
          {/* Dutch routes (no prefix) */}
          <Route path="/" element={<Index />} />
          <Route path="/portfolio" element={<Portfolio />} />
          {caseRoutes.map((r) => (
            <Route key={r.path} path={`/${r.path}`} element={r.element} />
          ))}

          {/* English routes (/en prefix) */}
          <Route path="/en" element={<Index />} />
          <Route path="/en/portfolio" element={<Portfolio />} />
          {caseRoutes.map((r) => (
            <Route key={`en-${r.path}`} path={`/en/${r.path}`} element={r.element} />
          ))}

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
