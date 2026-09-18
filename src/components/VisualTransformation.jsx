import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sliders, ArrowRight, Compass, Wrench, Sparkles, CheckCircle2 } from 'lucide-react';

export default function VisualTransformation() {
  const [activeFrame, setActiveFrame] = useState(2); // default to finished experience or let user toggle

  const stages = [
    {
      step: '01',
      phase: 'CONCEPT & CAD',
      label: 'Architectural Technical Drawing & CAD Engineering',
      image: '/images/trans-01-concept.jpg',
      icon: Compass,
      tag: 'STAGE 01 // DRAFTING & CAD BLUEPRINTS',
      description: 'Orthographic projections, isometric structural breakdowns, axonometric sightlines, and joinery engineering designed to exact venue specifications.',
      attributes: [
        'Detailed Millimeter Tolerances',
        'UAE Venue Fire & Safety Compliance',
        'Structural Load Calculations',
        '3D Exploded Cladding Files',
      ]
    },
    {
      step: '02',
      phase: 'FABRICATION',
      label: 'Sharjah Workshop Construction in Progress',
      image: '/images/trans-02-workshop.jpg',
      icon: Wrench,
      tag: 'STAGE 02 // JOINERY & PRODUCTION',
      description: 'Skilled joiners and steel fabricators shaping timber ribs, CNC-milled panels, internal support trusses, and acoustic slatted facades in our Sharjah industrial facility.',
      attributes: [
        'Sharjah In-House Workshop',
        'CNC Precision Routing & Cutting',
        'Sub-Assembly Quality Control',
        'Modular Crating for Fast Transit',
      ]
    },
    {
      step: '03',
      phase: 'EXPERIENCE',
      label: 'Completed Exhibition Pavilion Installation',
      image: '/images/trans-03-experience.jpg',
      icon: Sparkles,
      tag: 'STAGE 03 // LIVE VENUE LAUNCH',
      description: 'The finished branded pavilion standing tall on the trade show floor, fully illuminated with warm concealed LED lines and luxury custom joinery finishes.',
      attributes: [
        'Turnkey Handover on Venue Floor',
        'Embedded Warm Linear Illumination',
        'Flawless Metallic & Wood Grain Finish',
        'VIP Lounge & Reception Execution',
      ]
    }
  ];

  const gallerySchema = {
    '@context': 'https://schema.org',
    '@type': 'ImageGallery',
    name: 'Pioneer Carpentry Exhibition Stand Transformation Showcase',
    description: 'Visual transformation of exhibition stand fabrication from 2D CAD blueprint drawing, to Sharjah workshop production, to live venue launch.',
    image: stages.map((s) => ({
      '@type': 'ImageObject',
      name: s.label,
      contentUrl: `https://pioneercarpentry.ae${s.image}`,
      caption: s.description,
    })),
  };

  return (
    <section aria-label="Signature Architectural Transformation Exhibition Stand Showcase" className="bg-[#101010] text-white py-6 sm:py-8 lg:py-10 relative overflow-hidden border-b border-white/10">
      {/* ImageGallery Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(gallerySchema) }}
      />

      {/* Background Subtle Technical Grid */}
      <div className="absolute inset-0 bg-grid-charcoal pointer-events-none opacity-30" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-3 mb-3">
            <span className="w-8 h-[1.5px] bg-copper inline-block" />
            <span className="text-xs uppercase tracking-[0.25em] font-mono text-copper font-semibold">
              SIGNATURE TRANSFORMATION // CONCEPT TO VENUE LAUNCH
            </span>
            <span className="w-8 h-[1.5px] bg-copper inline-block" />
          </div>
          
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold uppercase tracking-tight text-white leading-[1.05] mb-4">
            FROM DRAWING <br />
            <span className="text-copper">TO REALITY.</span>
          </h2>

          <p className="text-base sm:text-lg text-white/70 font-light leading-relaxed">
            Every memorable <strong className="font-normal text-white">exhibition stand in Dubai</strong> starts as a line on paper. As leading <strong className="font-normal text-white">UAE joinery contractors</strong>, we turn architectural drawings into physical reality.
          </p>

          {/* Interactive Phase Selector Pills */}
          <div className="inline-flex flex-wrap items-center justify-center gap-2 sm:gap-4 mt-6 p-1.5 bg-[#181818] border border-white/10">
            {stages.map((st, idx) => (
              <button
                key={st.step}
                onClick={() => setActiveFrame(idx)}
                aria-label={`View stage ${st.step}: ${st.phase}`}
                className={`text-xs font-mono uppercase tracking-[0.18em] px-4 py-2 transition-all duration-300 flex items-center gap-2 ${
                  activeFrame === idx
                    ? 'bg-copper text-white shadow-copper-sm'
                    : 'text-white/60 hover:text-white hover:bg-white/5'
                }`}
              >
                <span className="font-bold">{st.step}</span>
                <span>{st.phase}</span>
              </button>
            ))}
          </div>
        </div>

        {/* 3 Large Connected Visual Frames (Desktop Connected View / Mobile Stack) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-4 relative mb-8">
          {stages.map((stage, idx) => {
            const isSelected = activeFrame === idx;
            const Icon = stage.icon;

            return (
              <div
                key={stage.step}
                onClick={() => setActiveFrame(idx)}
                className={`relative group cursor-pointer transition-all duration-500 flex flex-col bg-[#161616] border ${
                  isSelected
                    ? 'border-copper ring-1 ring-copper shadow-copper-lg'
                    : 'border-white/10 hover:border-copper/50 opacity-80 hover:opacity-100'
                }`}
              >
                {/* Frame Header Tag */}
                <div className="p-4 border-b border-white/10 flex items-center justify-between bg-[#121212]">
                  <div className="flex items-center gap-2.5">
                    <span className="text-xs font-mono font-bold text-copper">{stage.step}</span>
                    <span className="text-xs font-mono uppercase tracking-wider text-white/90">
                      {stage.phase}
                    </span>
                  </div>
                  <Icon className={`w-4 h-4 ${isSelected ? 'text-copper' : 'text-white/40'}`} />
                </div>

                {/* Main Visual Window */}
                <div className="relative aspect-[16/10] overflow-hidden bg-black">
                  <img
                    src={stage.image}
                    alt={`${stage.label} - Pioneer Carpentry UAE`}
                    className={`w-full h-full object-cover transition-all duration-700 ${
                      isSelected ? 'scale-105 brightness-[0.9]' : 'scale-100 brightness-[0.7] group-hover:brightness-[0.85]'
                    }`}
                  />
                  {/* Technical Overlay Coordinate Grid */}
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-transparent to-transparent" />
                  
                  {/* Subtle technical corner tick */}
                  <div className="absolute top-2 left-2 text-[9px] font-mono text-copper/80 tracking-widest bg-black/70 px-2 py-0.5 border border-copper/30">
                    STAGE // 0{idx + 1}
                  </div>
                </div>

                {/* Frame Body Description */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-base font-display font-bold uppercase tracking-wider text-white mb-2">
                      {stage.label}
                    </h3>
                    <p className="text-xs text-white/70 font-light leading-relaxed">
                      {stage.description}
                    </p>
                  </div>

                  {/* Micro Specs List */}
                  <div className="pt-3 border-t border-white/10 space-y-1.5">
                    {stage.attributes.slice(0, 2).map((attr) => (
                      <div key={attr} className="flex items-center gap-2 text-[11px] font-mono text-white/60">
                        <span className="w-1 h-1 rounded-full bg-copper" />
                        <span>{attr}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Connecting arrow indicator between frames on desktop */}
                {idx < stages.length - 1 && (
                  <div className="hidden lg:flex absolute -right-3.5 top-1/2 -translate-y-1/2 z-20 w-7 h-7 rounded-full bg-copper text-white items-center justify-center shadow-md">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Deep Dive Focal Banner for the Active Selection */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFrame}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="border border-copper/40 bg-[#161616] p-6 sm:p-8 lg:p-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6"
          >
            <div className="space-y-2 max-w-2xl">
              <span className="text-xs font-mono tracking-[0.25em] text-copper uppercase font-semibold">
                {stages[activeFrame].tag}
              </span>
              <h3 className="text-xl sm:text-2xl font-display font-bold uppercase text-white">
                {stages[activeFrame].label}
              </h3>
              <p className="text-xs sm:text-sm text-white/80 font-light leading-relaxed">
                {stages[activeFrame].description}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full lg:w-auto shrink-0">
              {stages[activeFrame].attributes.map((attr) => (
                <div key={attr} className="flex items-center gap-2.5 text-xs font-mono text-white/85 bg-[#202020] px-4 py-2 border border-white/5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-copper shrink-0" />
                  <span>{attr}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
