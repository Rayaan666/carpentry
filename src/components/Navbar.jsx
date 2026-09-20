import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Phone, Mail, MapPin, Globe } from 'lucide-react';

export default function Navbar({ onOpenQuote, currentPage = 'home', onNavigate }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
  ];

  const handleLinkClick = (e, link) => {
    e.preventDefault();
    if (onNavigate) {
      if (link.name === 'About') {
        onNavigate('about');
      } else if (link.name === 'Services') {
        onNavigate('services');
      } else if (link.name === 'Contact') {
        onNavigate('contact');
      } else if (link.name === 'Home') {
        onNavigate('home');
      } else {
        onNavigate('home', link.href);
      }
    } else {
      window.location.hash = link.href;
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-ivory-border shadow-sm ${
          isScrolled ? 'py-3' : 'py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              if (onNavigate) onNavigate('home');
            }}
            className="flex items-center group transition-transform duration-300 hover:scale-[1.02] cursor-pointer"
          >
            <img
              src="/logo.png"
              alt="Pioneer Carpentry"
              className="h-14 sm:h-16 w-auto object-contain transition-all duration-300"
            />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navLinks.map((link) => {
              const isActive =
                (link.name === 'About' && currentPage === 'about') ||
                (link.name === 'Services' && currentPage === 'services') ||
                (link.name === 'Contact' && currentPage === 'contact') ||
                (link.name === 'Home' && currentPage === 'home' && !isScrolled);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link)}
                  className={`text-xs uppercase tracking-[0.18em] font-medium py-1 transition-colors cursor-pointer relative ${
                    isActive ? 'text-copper font-semibold' : 'text-charcoal hover:text-copper'
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-copper"
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              type="button"
              onClick={onOpenQuote}
              className="text-xs uppercase tracking-[0.16em] font-semibold px-6 py-2.5 rounded-none border border-copper bg-copper hover:bg-copper-hover text-white flex items-center gap-2 shadow-sm transition-colors cursor-pointer"
            >
              <span>REQUEST A QUOTE</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Burger Toggle */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 transition-colors duration-200 text-charcoal cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-charcoal text-white pt-24 px-8 pb-10 flex flex-col justify-between md:hidden"
          >
            <div className="space-y-6">
              <div className="border-b border-white/10 pb-4">
                <span className="text-[10px] tracking-[0.25em] text-copper uppercase font-mono">
                  Events • Exhibitions • Fabrication
                </span>
              </div>
              <div className="flex flex-col space-y-3">
                {navLinks.map((link, idx) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link)}
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * idx }}
                    className={`text-lg font-display uppercase tracking-wider flex items-center justify-between py-2 border-b border-white/5 cursor-pointer transition-colors ${
                      (link.name === 'About' && currentPage === 'about') ||
                      (link.name === 'Services' && currentPage === 'services') ||
                      (link.name === 'Contact' && currentPage === 'contact') ||
                      (link.name === 'Home' && currentPage === 'home')
                        ? 'text-copper font-bold'
                        : 'text-white hover:text-copper'
                    }`}
                  >
                    <span>{link.name}</span>
                    <span className="text-xs font-mono text-copper/60">0{idx + 1}</span>
                  </motion.a>
                ))}
              </div>

              <div className="pt-4">
                <button
                  type="button"
                  onClick={() => {
                    onOpenQuote();
                    setMobileMenuOpen(false);
                  }}
                  className="w-full bg-copper hover:bg-copper-hover text-white text-xs uppercase tracking-[0.2em] py-4 flex items-center justify-center gap-2 font-medium transition-colors cursor-pointer"
                >
                  <span>REQUEST A QUOTE</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Mobile Contact Quick Bar */}
            <div className="border-t border-white/10 pt-6 space-y-3 text-xs text-white/70">
              <a href="tel:+971509689671" className="flex items-center gap-3 hover:text-copper transition-colors">
                <Phone className="w-4 h-4 text-copper" />
                <span>+971 50 9689671</span>
              </a>
              <a href="mailto:info@leadevents.com" className="flex items-center gap-3 hover:text-copper transition-colors">
                <Mail className="w-4 h-4 text-copper" />
                <span>info@leadevents.com</span>
              </a>
              <a href="https://pioneerexhibition.ae" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-copper transition-colors">
                <Globe className="w-4 h-4 text-copper" />
                <span>pioneerexhibition.ae</span>
              </a>
              <div className="flex items-center gap-3 text-white/50">
                <MapPin className="w-4 h-4 text-copper" />
                <span>Industrial Area 4, Sharjah</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
