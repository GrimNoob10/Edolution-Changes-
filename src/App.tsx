import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import Projects from "./pages/Projects";
import Index from "./pages/Index";
import Offerings from "./pages/Offerings";
import Clients from "./pages/Clients";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import { LearningPlatform } from "./pages/Aipowered";
import { CareerMaps } from "./pages/CareerMaps";
import { SkillCertification } from "./pages/SkillCertification";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
       
        <Routes>
          <Route path="/" element={<Index />} />
         <Route path="/offerings" element={<Offerings />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/aipowered-learning-platform" element={<LearningPlatform />} />
        <Route path="/career-maps" element={<CareerMaps />} />
        <Route path="/skill-certification" element={<SkillCertification />} />
      
   

          <Route path="*" element={<NotFound />} />
        </Routes>
        
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
