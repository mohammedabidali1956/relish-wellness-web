import React, { Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import {
  AboutPage,
  ServicesPage,
  ReviewsPage,
  BlogsPage,
  BlogPostPage,
  ConditionsPage,
  ServiceDetailPage,
  ContactPage,
  PrivacyPolicyPage,
  TermsAndConditionsPage,
  NotFound,
} from "@/lib/routeModules";

const LazyRoute = ({ Page }: { Page: React.ComponentType }) => (
  <Suspense
    fallback={
      <div className="sr-only" role="status" aria-live="polite">
        Loading page
      </div>
    }
  >
    <Page />
  </Suspense>
);

export const AppContent = () => (
  <TooltipProvider>
    <Toaster />
    <Sonner />
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<LazyRoute Page={AboutPage} />} />
        <Route path="services" element={<LazyRoute Page={ServicesPage} />} />
        <Route path="services/:slug" element={<LazyRoute Page={ServiceDetailPage} />} />
        <Route path="conditions" element={<LazyRoute Page={ConditionsPage} />} />
        <Route path="reviews" element={<LazyRoute Page={ReviewsPage} />} />
        <Route path="blogs" element={<LazyRoute Page={BlogsPage} />} />
        <Route path="blogs/:slug" element={<LazyRoute Page={BlogPostPage} />} />
        <Route path="contact" element={<LazyRoute Page={ContactPage} />} />
        <Route path="privacy-policy" element={<LazyRoute Page={PrivacyPolicyPage} />} />
        <Route path="terms-and-conditions" element={<LazyRoute Page={TermsAndConditionsPage} />} />
        <Route path=":slug" element={<LazyRoute Page={ServiceDetailPage} />} />
        <Route path="*" element={<LazyRoute Page={NotFound} />} />
      </Route>
    </Routes>
  </TooltipProvider>
);

const App = () => (
  <BrowserRouter>
    <AppContent />
  </BrowserRouter>
);

export default App;
