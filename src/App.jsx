import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BrandStatement from './components/BrandStatement';
import ServicesSection from './components/ServicesSection';
import CapabilitiesProcess from './components/CapabilitiesProcess';
import VisualTransformation from './components/VisualTransformation';
import WhyPioneer from './components/WhyPioneer';
import ImpactStrip from './components/ImpactStrip';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import QuoteModal from './components/QuoteModal';
import AboutPage from './components/AboutPage';
import ServicesPage from './components/ServicesPage';
import ContactPage from './components/ContactPage';

export default function App() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Determine active page from path or hash
  const getCurrentPage = () => {
    const path = location.pathname.toLowerCase();
    const hash = location.hash.toLowerCase();

    if (path === '/contact' || hash.includes('contact')) return 'contact';
    if (path === '/services' || hash.includes('service')) return 'services';
    if (path === '/about' || hash.includes('about')) return 'about';
    return 'home';
  };

  const currentPage = getCurrentPage();

  // Scroll to top and set SEO Metadata on page changes
  useEffect(() => {
    window.scrollTo(0, 0);

    const metaDesc = document.querySelector('meta[name="description"]');
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }

    if (currentPage === 'contact') {
      document.title = 'Contact Pioneer Carpentry | UAE Exhibition & Event Fabrication';
      if (metaDesc) {
        metaDesc.setAttribute(
          'content',
          'Contact Pioneer Carpentry in Sharjah for exhibition stands, event fabrication, kiosks, brand activations, custom joinery and installation projects across the UAE.'
        );
      }
      canonical.setAttribute('href', 'https://pioneercarpentry.ae/contact');
    } else if (currentPage === 'services') {
      document.title = 'Exhibition & Event Fabrication Services UAE | Pioneer Carpentry';
      if (metaDesc) {
        metaDesc.setAttribute(
          'content',
          "Explore Pioneer Carpentry's exhibition stand, event stage, kiosk, brand activation, custom fabrication and installation services across the UAE."
        );
      }
      canonical.setAttribute('href', 'https://pioneercarpentry.ae/services');
    } else if (currentPage === 'about') {
      document.title = 'About Pioneer Carpentry | Exhibition & Event Fabrication UAE';
      if (metaDesc) {
        metaDesc.setAttribute(
          'content',
          'Learn about Pioneer Carpentry, a UAE-based fabrication company delivering exhibition stands, event stages, kiosks, branded structures and custom installations.'
        );
      }
      canonical.setAttribute('href', 'https://pioneercarpentry.ae/about');
    } else {
      document.title = 'PIONEER CARPENTRY | Events • Exhibitions • Fabrication | UAE';
      if (metaDesc) {
        metaDesc.setAttribute(
          'content',
          'Pioneer Carpentry is a UAE specialist fabrication and production company transforming creative concepts into physical experiences: exhibition stands, event stages, brand activations, kiosks, and custom structures.'
        );
      }
      canonical.setAttribute('href', 'https://pioneercarpentry.ae/');
    }
  }, [currentPage, location.pathname]);

  // Unified canonical navigation handler
  const handleNavigate = (page, targetHash) => {
    if (page === 'contact') {
      navigate('/contact');
      if (targetHash) {
        setTimeout(() => {
          const el = document.querySelector(targetHash);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else if (page === 'services') {
      navigate('/services' + (targetHash ? targetHash : ''));
      if (targetHash) {
        setTimeout(() => {
          const el = document.querySelector(targetHash);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else if (page === 'about') {
      navigate('/about');
      if (targetHash) {
        setTimeout(() => {
          const el = document.querySelector(targetHash);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      navigate('/' + (targetHash ? targetHash : ''));
      if (targetHash) {
        setTimeout(() => {
          const el = document.querySelector(targetHash);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  };

  // Direct CTAs across the entire website canonical destination: /contact
  const handleOpenQuote = () => {
    navigate('/contact');
  };

  const handleCloseQuote = () => setQuoteModalOpen(false);

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-charcoal font-sans flex flex-col selection:bg-copper selection:text-white">
      {/* 01 — Navigation */}
      <Navbar
        onOpenQuote={handleOpenQuote}
        currentPage={currentPage}
        onNavigate={handleNavigate}
      />

      {/* Main Content with React Router */}
      <div className="flex-1 flex flex-col">
        <Routes>
          {/* Canonical /contact Route */}
          <Route
            path="/contact"
            element={
              <main className="flex-1 flex flex-col">
                <ContactPage onNavigate={handleNavigate} />
              </main>
            }
          />

          {/* Dedicated /services Route */}
          <Route
            path="/services"
            element={
              <main className="flex-1 flex flex-col">
                <ServicesPage
                  onOpenQuote={handleOpenQuote}
                  onNavigate={handleNavigate}
                />
              </main>
            }
          />

          {/* Dedicated /about Route */}
          <Route
            path="/about"
            element={
              <main className="flex-1 flex flex-col">
                <AboutPage
                  onOpenQuote={handleOpenQuote}
                  onNavigateHome={() => handleNavigate('home')}
                  onNavigate={handleNavigate}
                />
              </main>
            }
          />

          {/* Home Route */}
          <Route
            path="/"
            element={
              <main className="flex-1 flex flex-col">
                {/* 02 — Hero Section */}
                <Hero onOpenQuote={handleOpenQuote} onNavigate={handleNavigate} />

                {/* 03 — Intro / Brand Statement */}
                <BrandStatement />

                {/* 04 — Services */}
                <ServicesSection onOpenQuote={handleOpenQuote} onNavigate={handleNavigate} />

                {/* 06 — Capabilities / From Workshop to Venue */}
                <CapabilitiesProcess />

                {/* 07 — Visual Transformation Section */}
                <VisualTransformation />

                {/* 08 — Why Pioneer */}
                <WhyPioneer />

                {/* 09 — Numbers / Impact Strip */}
                <ImpactStrip />

                {/* 11 — CTA / Start A Project */}
                <CallToAction onOpenQuote={handleOpenQuote} />
              </main>
            }
          />

          {/* Catch-all redirect to Home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>

      {/* 12 — Footer (Exact Existing Component Reused) */}
      <Footer
        onOpenQuote={handleOpenQuote}
        onNavigate={handleNavigate}
        currentPage={currentPage}
      />

      {/* Interactive Project Inquiry & Quote Modal (Optional Fallback) */}
      <QuoteModal isOpen={quoteModalOpen} onClose={handleCloseQuote} />
    </div>
  );
}
