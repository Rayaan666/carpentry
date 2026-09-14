import React, { useState, useEffect } from 'react';
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
import AboutPage from './components/AboutPage';

export default function App() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(() => {
    return window.location.hash.includes('about') || window.location.pathname === '/about' ? 'about' : 'home';
  });

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash.includes('about')) {
        setCurrentPage('about');
      } else if (
        window.location.hash === '#home' ||
        window.location.hash === '' ||
        window.location.hash === '#hero'
      ) {
        setCurrentPage('home');
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    // Always start at top of page when switching pages
    window.scrollTo(0, 0);

    if (currentPage === 'about') {
      document.title = 'About Pioneer Carpentry | Exhibition & Event Fabrication UAE';
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute(
          'content',
          'Learn about Pioneer Carpentry, a UAE-based fabrication company delivering exhibition stands, event stages, kiosks, branded structures and custom installations.'
        );
      }
    } else {
      document.title = 'PIONEER CARPENTRY | Events • Exhibitions • Fabrication | UAE';
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute(
          'content',
          'Pioneer Carpentry is a UAE specialist fabrication and production company transforming creative concepts into physical experiences: exhibition stands, event stages, brand activations, kiosks, and custom structures.'
        );
      }
    }
  }, [currentPage]);

  const handleNavigate = (page, targetHash) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);

    if (page === 'about') {
      window.location.hash = 'about';
    } else {
      if (targetHash) {
        window.location.hash = targetHash.replace('#', '');
        setTimeout(() => {
          const el = document.querySelector(targetHash);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 80);
      } else {
        window.location.hash = 'hero';
      }
    }
  };

  const handleOpenQuote = () => setQuoteModalOpen(true);
  const handleCloseQuote = () => setQuoteModalOpen(false);

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-charcoal font-sans flex flex-col selection:bg-copper selection:text-white">
      {/* 01 — Navigation */}
      <Navbar
        onOpenQuote={handleOpenQuote}
        currentPage={currentPage}
        onNavigate={handleNavigate}
      />

      {/* Main Content: About Page or Home Page */}
      {currentPage === 'about' ? (
        <main className="flex-1 flex flex-col">
          <AboutPage
            onOpenQuote={handleOpenQuote}
            onNavigateHome={() => handleNavigate('home')}
          />
        </main>
      ) : (
        <main className="flex-1 flex flex-col">
          {/* 02 — Hero Section */}
          <Hero onOpenQuote={handleOpenQuote} />

          {/* 03 — Intro / Brand Statement */}
          <BrandStatement />

          {/* 04 — Services */}
          <ServicesSection onOpenQuote={handleOpenQuote} />

          {/* 06 — Capabilities / From Workshop to Venue */}
          <CapabilitiesProcess />

          {/* 07 — Visual Transformation Section */}
          <VisualTransformation />

          {/* 08 — Why Pioneer */}
          <WhyPioneer />

          {/* 09 — Numbers / Impact Strip */}
          <ImpactStrip />

          {/* 10 — Industries / Where We Build */}
          <IndustriesSection onOpenQuote={handleOpenQuote} />

          {/* 11 — CTA / Start A Project */}
          <CallToAction onOpenQuote={handleOpenQuote} />
        </main>
      )}

      {/* 12 — Footer */}
      <Footer onOpenQuote={handleOpenQuote} onNavigate={handleNavigate} />

      {/* Interactive Project Inquiry & Quote Modal */}
      <QuoteModal isOpen={quoteModalOpen} onClose={handleCloseQuote} />
    </div>
  );
}
