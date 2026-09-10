import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';

export default function Hero({ onOpenQuote }) {
  const bottomCategories = [
    'EXHIBITIONS',
    'EVENTS',
    'ACTIVATIONS',
    'CUSTOM FABRICATION'
  ];

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-between bg-charcoal text-white overflow-hidden">
      {/* Background Image Container with Cinematic Scale */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.2, ease: [0.25, 1, 0.5, 1] }}
          className="w-full h-full"
        >
          <img
            src="/images/hero-main.jpg"
            alt="Pioneer Carpentry Exhibition Fabrication"
            className="w-full h-full object-cover object-center brightness-[0.78] contrast-[1.05]"
          />
        </motion.div>

        {/* Sophisticated Architectural Gradient Overlays for Extreme Legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/95 via-charcoal/70 to-charcoal/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-charcoal/60" />
        {/* Subtle warm copper vignette at corner */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-copper/10 rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* Main Content Area (Lower-Left / Center-Left Focus) */}
      <div className="relative z-10 flex-1 flex items-center pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="max-w-7xl w-full mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl">
            {/* Small Copper Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center gap-3 mb-6"
            >
              <span className="w-6 h-[1.5px] bg-copper inline-block" />
              <span className="text-xs sm:text-sm uppercase tracking-[0.25em] font-mono text-copper font-medium">
                EVENTS • EXHIBITIONS • FABRICATION
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.4 }}
              className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold tracking-tight leading-[1.04] uppercase text-white mb-6"
            >
              EXHIBITION STAND & <br />
              <span className="text-copper">EVENT FABRICATION</span> <br />
              IN THE UAE.
            </motion.h1>

            {/* Supporting Copy */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-base sm:text-lg lg:text-xl text-[#FAF8F5]/80 font-light leading-relaxed max-w-2xl mb-10"
            >
              Pioneer Carpentry delivers custom exhibition stands, event stages, brand activation structures, kiosks and bespoke fabrication across Dubai, Sharjah and the UAE.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-5"
            >
              <a
                href="#capabilities"
                className="bg-copper hover:bg-copper-hover text-white text-xs uppercase tracking-[0.2em] font-semibold px-8 py-4 flex items-center justify-center gap-3 transition-all duration-300 shadow-copper-sm hover:shadow-copper-lg group"
              >
                <span>VIEW OUR PROJECTS</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              <button
                onClick={onOpenQuote}
                className="bg-copper hover:bg-copper-hover text-white text-xs uppercase tracking-[0.2em] font-semibold px-8 py-4 flex items-center justify-center gap-3 transition-all duration-300 shadow-copper-sm hover:shadow-copper-lg group"
              >
                <span>REQUEST A QUOTE</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Elegant Bottom Information Strip & Scroll Indicator */}
      <div className="relative z-10 border-t border-white/10 bg-charcoal/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-5 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Bottom strip categories */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 sm:gap-8 lg:gap-12">
            {bottomCategories.map((item, idx) => (
              <div key={item} className="flex items-center gap-3 sm:gap-6">
                <span className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.22em] text-white/70 font-medium hover:text-copper transition-colors cursor-default">
                  {item}
                </span>
                {idx < bottomCategories.length - 1 && (
                  <span className="w-1.5 h-1.5 rounded-full bg-copper/40 hidden sm:inline-block" />
                )}
              </div>
            ))}
          </div>

          {/* Minimal Animated Scroll Indicator */}
          <a
            href="#about"
            className="flex items-center gap-2.5 text-[10px] font-mono tracking-[0.25em] text-white/50 hover:text-copper transition-colors uppercase py-1"
          >
            <span>SCROLL</span>
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            >
              <ChevronDown className="w-3.5 h-3.5 text-copper" />
            </motion.div>
          </a>
        </div>
      </div>
    </section>
  );
}
