
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { UserProvider } from "@/contexts/UserContext";
import Index from "./pages/Index";
import RoleSelection from "./components/RoleSelection";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import CareerPaths from "./pages/CareerPaths";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Simulation from "./pages/Simulation";
import HRSimulation from "./pages/simulations/HRSimulation";
import AccountingSimulation from "./pages/simulations/AccountingSimulation";
import SalesSimulation from "./pages/simulations/SalesSimulation";
import MarketingSimulation from "./pages/simulations/MarketingSimulation";
import OperationsSimulation from "./pages/simulations/OperationsSimulation";
import ManagementSimulation from "./pages/simulations/ManagementSimulation";
import EducationSimulation from "./pages/simulations/EducationSimulation";
import CustomerServiceSimulation from "./pages/simulations/CustomerServiceSimulation";
import ProductSimulation from "./pages/simulations/ProductSimulation";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <UserProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/select-role" element={<RoleSelection />} />
              <Route path="/simulation" element={<Simulation />} />
              <Route path="/simulation/hr" element={<HRSimulation />} />
              <Route path="/simulation/accounting" element={<AccountingSimulation />} />
              <Route path="/simulation/sales" element={<SalesSimulation />} />
              <Route path="/simulation/marketing" element={<MarketingSimulation />} />
              <Route path="/simulation/operations" element={<OperationsSimulation />} />
              <Route path="/simulation/management" element={<ManagementSimulation />} />
              <Route path="/simulation/product" element={<ProductSimulation />} />
              <Route path="/simulation/education" element={<EducationSimulation />} />
              <Route path="/simulation/customer" element={<CustomerServiceSimulation />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/career-paths" element={<CareerPaths />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </UserProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
