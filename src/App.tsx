import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Steps from "./pages/Steps";
import Craftsman from "./pages/Craftsman";
import Client from "./pages/Client";
import Login from "./pages/Login";
import ChooseRole from "./pages/ChooseRole";
import CraftsmanBenefits from "./pages/CraftsmanBenefits";
import CreateAccount from "./pages/CreateAccount";
import AccountSuccess from "./pages/AccountSuccess";
import CompleteProfile from "./pages/CompleteProfile";
import NotFound from "./pages/NotFound";
import Profile from "./pages/Profile";
import EditProfile from "./pages/EditProfile";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import TermsPage from "./pages/TermsPage";
import AboutPage from "./pages/AboutPage";
import CraftsmanDetails from "./pages/CraftsmanDetails";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* الصفحة الجديدة: تفاصيل الحرفي */}
          <Route path="/craftsman/:id" element={<CraftsmanDetails />} />
          {/* الصفحة الجديدة: حول الموقع */}
          <Route path="/about" element={<AboutPage />} />
          {/* الصفحة الجديدة: تواصل معنا */}
          <Route path="/contact" element={<ContactPage />} />
          {/* باقي المسارات */}
          <Route path="/home" element={<HomePage />} />
          <Route path="/" element={<Index />} />
          <Route path="/steps" element={<Steps />} />
          <Route path="/craftsman" element={<Craftsman />} />
          <Route path="/client" element={<Client />} />
          <Route path="/login" element={<Login />} />
          <Route path="/choose-role" element={<ChooseRole />} />
          <Route path="/craftsman-benefits" element={<CraftsmanBenefits />} />
          <Route path="/create-account" element={<CreateAccount />} />
          <Route path="/account-success" element={<AccountSuccess />} />
          <Route path="/complete-profile" element={<CompleteProfile />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile/edit" element={<EditProfile />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="/terms" element={<TermsPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
