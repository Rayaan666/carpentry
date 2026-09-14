import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export default function IndustriesSection({ onOpenQuote }) {
  const [activeIndustry, setActiveIndustry] = useState(0);

  const industries = [
    {
      name: 'EXHIBITIONS',
      desc: 'Dubai World Trade Centre, ADNEC, Expo City Dubai & GCC pavilions.',
      image: '/images/hero-main.jpg',
      stat: 'DWTC • ADNEC • EXPO CITY',
    },
    {
      name: 'CORPORATE EVENTS',
      desc: 'Annual general meetings, VIP summits, awards galas & executive setups.',
      image: '/images/project-stage-keynote.jpg',
      stat: 'HOTEL BALLROOMS • ARENAS',
    },
    {
      name: 'CONFERENCES',
      desc: 'Tiered speaker stages, breakout session stages & media backdrops.',
      image: '/images/service-stage.jpg',
      stat: 'AUDITORIUMS • PLENARY HALLS',
    },
    {
      name: 'PRODUCT LAUNCHES',
      desc: 'Automotive reveal stages, luxury brand unveils & immersive showcases.',
      image: '/images/cta-lighting.jpg',
      stat: 'CUSTOM REVEAL PLATFORMS',
    },
    {
      name: 'RETAIL',
      desc: 'Flagship store pop-ups, luxury mall kiosks & point-of-sale display counters.',
      image: '/images/kiosk-luxury.jpg',
      stat: 'PREMIUM SHOPPING DESTINATIONS',
    },
    {
      name: 'BRAND ACTIVATIONS',
      desc: 'Sensory experiential pavilions, interactive brand hubs & consumer installations.',
      image: '/images/project-brand-activation.jpg',
      stat: 'EXPERIENTIAL ATRIUMS • PUBLIC PLAZAS',
    },
  ];

  return (
    <section className="relative bg-[#111111] text-white py-6 sm:py-8 lg:py-10 overflow-hidden border-b border-white/10">
      {/* Dynamic Background Image that shifts subtly on category hover */}
      <div className="absolute inset-0 z-0">
        {industries.map((ind, idx) => (
          <motion.div
            key={ind.name}
            initial={false}
            animate={{ opacity: activeIndustry === idx ? 0.35 : 0 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0"
          >
            <img
              src={ind.image}
              alt={ind.name}
              className="w-full h-full object-cover scale-105"
            />
          </motion.div>
        ))}
        {/* Dark Architectural Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/70 to-[#111111]/90" />
        <div className="absolute inset-0 bg-grid-charcoal opacity-30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="max-w-2xl mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-3 mb-3">
            <span className="w-8 h-[1.5px] bg-copper inline-block" />
            <span className="text-xs uppercase tracking-[0.25em] font-mono text-copper font-semibold">
              WHERE WE BUILD
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold uppercase tracking-tight text-white leading-[1.05]">
            SPACES FOR <br />
            <span className="text-copper">BRANDS TO SHOW UP.</span>
          </h2>
        </div>

        {/* Sophisticated Horizontal Visual Category List */}
        <div className="divide-y divide-white/10 border-t border-b border-white/10">
          {industries.map((ind, idx) => {
            const isActive = activeIndustry === idx;
            return (
              <div
                key={ind.name}
                onMouseEnter={() => setActiveIndustry(idx)}
                onClick={onOpenQuote}
                className="py-5 sm:py-6 px-4 sm:px-6 flex flex-col md:flex-row md:items-center justify-between gap-4 group cursor-pointer hover:bg-white/[0.03] transition-colors"
              >
                {/* Left: Number & Oversized Typography */}
                <div className="flex items-center gap-6 sm:gap-10">
                  <span className="text-xs sm:text-sm font-mono text-copper/70 font-semibold w-8">
                    0{idx + 1}
                  </span>
                  <h3 className="text-2xl sm:text-4xl lg:text-5xl font-display font-extrabold uppercase tracking-tight text-white/80 group-hover:text-white group-hover:translate-x-3 transition-all duration-300">
                    {ind.name}
                  </h3>
                </div>

                {/* Right: Category Context & Arrow */}
                <div className="flex items-center justify-between md:justify-end gap-6 sm:gap-10 text-left md:text-right pl-14 md:pl-0">
                  <div className="space-y-1">
                    <p className="text-xs sm:text-sm text-white/60 font-light max-w-xs">
                      {ind.desc}
                    </p>
                    <span className="text-[10px] font-mono tracking-widest text-copper uppercase block">
                      {ind.stat}
                    </span>
                  </div>

                  <div className="w-10 h-10 rounded-full border border-white/20 group-hover:border-copper group-hover:bg-copper flex items-center justify-center transition-all duration-300 shrink-0">
                    <ArrowUpRight className="w-4 h-4 text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Scope Line */}
        <div className="mt-6 flex items-center justify-between text-xs font-mono text-white/50 tracking-wider">
          <span>ALL PROJECTS FABRICATED IN THE UAE</span>
          <span className="text-copper">END-TO-END EXECUTION</span>
        </div>
      </div>
    </section>
  );
}
