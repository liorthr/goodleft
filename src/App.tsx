
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Services from "./pages/Services";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import WhatsAppButton from "./components/WhatsAppButton";
import AddBlogArticle from "./pages/AddBlogArticle";
import ScrollToTop from "./components/ScrollToTop";
import GoogleAds from "./pages/GoogleAds";
import NativeAds from "./pages/NativeAds";
import MetaAds from "./pages/MetaAds";
import Emailing from "./pages/Emailing";
import SEO from "./pages/SEO";
import LinkedIn from "./pages/LinkedIn";
import Israel from "./pages/Israel";

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
          <Route path="/services" element={<Services />} />
          <Route path="/services/google-ads" element={<GoogleAds />} />
          <Route path="/services/native-ads" element={<NativeAds />} />
          <Route path="/services/meta-ads" element={<MetaAds />} />
          <Route path="/services/emailing" element={<Emailing />} />
          <Route path="/services/seo" element={<SEO />} />
          <Route path="/services/linkedin" element={<LinkedIn />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/israel" element={<Israel />} />
          <Route path="/admin/blog/new" element={<AddBlogArticle />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <WhatsAppButton phoneNumber="+33782979479" message="Bonjour, je vous contacte depuis votre site web Goodleft." />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
