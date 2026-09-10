import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BrandStatement from './components/BrandStatement';
import ServicesSection from './components/ServicesSection';
import CapabilitiesProcess from './components/CapabilitiesProcess';
import VisualTransformation from './components/VisualTransformation';
import WhyPioneer from './components/WhyPioneer';
import ImpactStrip from './components/ImpactStrip';
import IndustriesSection from './components/IndustriesSection';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import QuoteModal from './components/QuoteModal';

export default function App() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);

  const handleOpenQuote = () => {};
  const handleCloseQuote = () => setQuoteModalOpen(false);

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-charcoal font-sans flex flex-col selection:bg-copper selection:text-white">
      {/* 01 — Navigation */}
      <Navbar onOpenQuote={handleOpenQuote} />

      {/* Main Content Sections */}
      <main className="flex-1 flex flex-col">
        {/* 02 — Hero Section */}
        <Hero onOpenQuote={handleOpenQuote} />

        {/* 03 — Intro / Brand Statement */}
        <BrandStatement />

        {/* 04 — Services */}
        <ServicesSection onOpenQuote={handleOpenQuote} />

        {/* 05 — Capabilities / From Workshop to Venue */}
        <CapabilitiesProcess />

        {/* 06 — Visual Transformation Section (Signature Feature) */}
        <VisualTransformation />

        {/* 07 — Why Pioneer */}
        <WhyPioneer />

        {/* 08 — Numbers / Impact Strip */}
        <ImpactStrip />

        {/* 09 — Industries / Where We Build */}
        <IndustriesSection onOpenQuote={handleOpenQuote} />

        {/* 10 — CTA / Start A Project */}
        <CallToAction onOpenQuote={handleOpenQuote} />
      </main>

      {/* 11 — Footer */}
      <Footer onOpenQuote={handleOpenQuote} />

      {/* Interactive Project Inquiry & Quote Modal */}
      <QuoteModal isOpen={quoteModalOpen} onClose={handleCloseQuote} />
    </div>
  );
}
