import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function WhyPioneer() {
  const [activeCol, setActiveCol] = useState(null);

  const reasons = [
    {
      num: '01',
      code: 'ARCHITECTURAL CONTROL',
      title: '100% CUSTOM BUILT',
      description: 'Every exhibition stand and venue installation is bespoke-fabricated in our Sharjah facility. No generic off-the-shelf modular compromises.',
      spec: 'CNC PRECISION WOODWORKING',
    },
    {
      num: '02',
      code: 'SINGLE WORKFLOW',
      title: 'END-TO-END EXECUTION',
      description: 'Production, finishing, transport logistics, and 24/7 on-site venue build managed under one seamless in-house UAE joinery team.',
      spec: 'SHARJAH IN-HOUSE PRODUCTION',
    },
    {
      num: '03',
      code: 'DEADLINE GUARANTEE',
      title: 'BUILT FOR DEADLINES',
      description: 'Strict production timelines built around non-negotiable event launches across Dubai World Trade Centre (DWTC) and ADNEC Abu Dhabi.',
      spec: '24/7 LIVE VENUE SUPPORT',
    },
    {
      num: '04',
      code: 'CRAFTSMANSHIP SPEC',
      title: 'LUXURY FINISHING',
      description: 'From concealed internal steel trusses to hand-finished timber cladding and lacquer painting, craftsmanship matters at every millimeter.',
      spec: 'HAND-FINISHED JOINERY',
    },
  ];

  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Why Choose Pioneer Carpentry - UAE Exhibition Stand Contractors',
    description: 'Four core pillars of UAE fabrication excellence: 100% custom built, single in-house workflow, guaranteed exhibition deadlines, and luxury hand-finished joinery.',
    itemListElement: reasons.map((r, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: r.title,
      description: r.description,
    })),
  };

  return (
    <section aria-label="Why Choose Pioneer Carpentry UAE Exhibition Fabricators" className="bg-[#FAF8F5] text-charcoal py-8 sm:py-10 lg:py-12 relative overflow-hidden border-b border-ivory-border">
      {/* ItemList Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />

      {/* Background Subtle Architectural Grid */}
      <div className="absolute inset-0 bg-grid-ivory pointer-events-none opacity-40" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Top Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 border-b border-ivory-border pb-6">
          <div>
            <div className="inline-flex items-center gap-3 mb-3">
              <span className="w-8 h-[1.5px] bg-copper inline-block" />
              <span className="text-xs uppercase tracking-[0.25em] font-mono text-copper font-semibold">
                WHY PIONEER // UAE FABRICATION CONTRACTORS
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold uppercase tracking-tight text-charcoal leading-[1.05]">
              PRECISION BEHIND <br />
              <span className="text-copper">EVERY DETAIL.</span>
            </h2>
          </div>

          <div className="text-xs font-mono text-warmgrey tracking-[0.2em] uppercase max-w-xs">
            FOUR PILLARS OF UAE EXHIBITION & JOINERY EXCELLENCE
          </div>
        </div>

        {/* Cardless 4-Column Architectural Matrix (Split by Thin Vertical Lines) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-ivory-border border-b border-ivory-border">
          {reasons.map((item, idx) => {
            const isHovered = activeCol === idx;
            return (
              <div
                key={item.num}
                onMouseEnter={() => setActiveCol(idx)}
                onMouseLeave={() => setActiveCol(null)}
                className="py-6 md:py-2 px-0 md:px-6 first:pl-0 last:pr-0 group transition-all duration-300 relative flex flex-col justify-between min-h-[260px]"
              >
                {/* Top Active Indicator Line */}
                <div className="w-full h-[2px] bg-transparent relative overflow-hidden mb-4">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: isHovered ? '100%' : '0%' }}
                    transition={{ duration: 0.3 }}
                    className="h-full bg-copper"
                  />
                </div>

                {/* Top Header: Code Tag & Number */}
                <div className="space-y-1">
                  <div className="flex items-center justify-between text-[10px] font-mono tracking-[0.18em] text-copper uppercase font-semibold">
                    <span>{item.code}</span>
                    <span className="text-warmgrey/50">0{idx + 1}</span>
                  </div>

                  {/* Giant Number & Title */}
                  <div className="pt-2">
                    <span className="text-3xl sm:text-4xl font-mono font-extrabold text-charcoal/15 group-hover:text-copper/30 transition-colors block mb-1">
                      {item.num}
                    </span>
                    <h3 className="text-lg sm:text-xl font-display font-extrabold uppercase tracking-tight text-charcoal group-hover:text-copper transition-colors leading-tight">
                      {item.title}
                    </h3>
                  </div>
                </div>

                {/* Description Text */}
                <div className="pt-4 space-y-3">
                  <p className="text-xs text-warmgrey font-light leading-relaxed">
                    {item.description}
                  </p>

                  <div className="pt-2 border-t border-ivory-border/60 text-[10px] font-mono text-copper uppercase tracking-wider flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-copper" />
                    <span>{item.spec}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
