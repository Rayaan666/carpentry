import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Phone, Mail, MapPin } from 'lucide-react';

export default function Navbar({ onOpenQuote }) {
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
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Capabilities', href: '#capabilities' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-ivory-border shadow-sm ${
          isScrolled ? 'py-3' : 'py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" className="flex items-center group transition-transform duration-300 hover:scale-[1.02]">
            <img
              src="/logo.png"
              alt="Pioneer Carpentry"
              className="h-14 sm:h-16 w-auto object-contain transition-all duration-300"
            />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8 lg:space-x-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs uppercase tracking-[0.18em] font-medium transition-all duration-300 relative group py-1 text-charcoal hover:text-copper"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-copper transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={onOpenQuote}
              className="text-xs uppercase tracking-[0.16em] font-semibold px-6 py-2.5 rounded-none border border-copper bg-copper text-white hover:bg-copper-hover transition-all duration-300 flex items-center gap-2 group shadow-sm"
            >
              <span>REQUEST A QUOTE</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>

          {/* Mobile Burger Toggle */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 transition-colors duration-200 text-charcoal"
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
              <div className="flex flex-col space-y-4">
                {navLinks.map((link, idx) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * idx }}
                    className="text-xl font-display uppercase tracking-wider text-white hover:text-copper flex items-center justify-between py-2 border-b border-white/5"
                  >
                    <span>{link.name}</span>
                    <span className="text-xs font-mono text-copper/60">0{idx + 1}</span>
                  </motion.a>
                ))}
              </div>

              <div className="pt-4">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenQuote();
                  }}
                  className="w-full bg-copper hover:bg-copper-hover text-white text-xs uppercase tracking-[0.2em] py-4 flex items-center justify-center gap-2 font-medium transition-colors"
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
              <div className="flex items-center gap-3 text-white/50">
                <MapPin className="w-4 h-4 text-copper" />
                <span>Al Sharjah, UAE</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
