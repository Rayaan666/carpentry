import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function CapabilitiesProcess() {
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    {
      num: '01',
      title: 'PLAN & CAD DRAFTING',
      desc: 'Technical 3D/2D CAD drafting, CNC structural breakdown, structural engineering compliance, and production timeline phasing.',
    },
    {
      num: '02',
      title: 'PRECISION FABRICATION',
      desc: 'Custom carpentry, steel substructures, curved timber ribs, and modular exhibition panel fabrication in our Sharjah workshop facility.',
    },
    {
      num: '03',
      title: 'SURFACE FINISHING',
      desc: 'Automotive spray painting booth, high-pressure laminates (HPL), metallic copper/brass cladding, and concealed wiring channels.',
    },
    {
      num: '04',
      title: 'UAE VENUE LOGISTICS',
      desc: 'Direct scheduled logistics transit to DWTC, ADNEC & Expo City Dubai with custom crating and dedicated staging crews.',
    },
    {
      num: '05',
      title: 'ON-SITE INSTALLATION',
      desc: '24/7 venue build, structural leveling, AV integration, seamless touch-ups, and live event standby team across UAE & GCC.',
    },
  ];

  const capabilitiesList = [
    'Custom Carpentry & Joinery',
    'Exhibition Structural Steel',
    'Luxury Surface Finishing',
    'Bespoke Event Furniture',
    'LED & Architectural Cladding',
    'Retail Display Production',
    '3D Props & Brand Sculptures',
    '24/7 On-Site Venue Build',
  ];

  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How Pioneer Carpentry Fabricates & Delivers Exhibition Stands in the UAE',
    description: 'A 5-step industrial fabrication process from Sharjah workshop to live venue installation across Dubai, Abu Dhabi, and the GCC.',
    step: steps.map((s) => ({
      '@type': 'HowToStep',
      name: s.title,
      text: s.desc,
      position: s.num,
    })),
  };

  return (
    <section id="capabilities" aria-label="Workshop to Venue Exhibition Fabrication Process UAE" className="bg-[#141414] text-white py-6 sm:py-8 lg:py-10 border-b border-white/10 relative overflow-hidden">
      {/* HowTo Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />

      {/* Background Subtle Charcoal Technical Grid */}
      <div className="absolute inset-0 bg-grid-charcoal pointer-events-none opacity-40" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="w-8 h-[1.5px] bg-copper inline-block" />
            <span className="text-xs uppercase tracking-[0.25em] font-mono text-copper font-semibold">
              FROM WORKSHOP TO VENUE // UAE FABRICATION & LOGISTICS
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold uppercase tracking-tight text-white leading-[1.05] mb-6">
            BUILT HERE. <br />
            <span className="text-copper">DELIVERED ANYWHERE.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#FAF8F5]/70 font-light leading-relaxed max-w-2xl">
            From our fully-equipped <strong className="font-normal text-white">Sharjah joinery workshop</strong> to turnkey venue builds at <strong className="font-normal text-white">Dubai World Trade Centre (DWTC)</strong> and <strong className="font-normal text-white">ADNEC Abu Dhabi</strong>, our team manages every stage of custom exhibition stand fabrication with millimeter precision.
          </p>
        </div>

        {/* Wide Cinematic Workshop Visual */}
        <div className="relative aspect-[21/9] sm:aspect-[16/7] w-full overflow-hidden bg-charcoal border border-white/10 shadow-architectural-dark mb-14 sm:mb-16 group">
          <img
            src="/images/trans-02-workshop.jpg"
            alt="Pioneer Carpentry Sharjah Workshop - Custom Exhibition Fabrication & Woodworking UAE"
            className="w-full h-full object-cover brightness-[0.8] group-hover:scale-102 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-transparent to-transparent" />
          
          {/* Workshop Facility Badge */}
          <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-8 z-10 flex items-center gap-3 text-white">
            <div className="w-2.5 h-2.5 rounded-full bg-copper animate-pulse" />
            <span className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.2em] text-white/90">
              PIONEER FABRICATION FACILITY // AL SENAIYAT, SHARJAH
            </span>
          </div>
        </div>

        {/* Elegant Horizontal Process Steps with Thin Copper Technical Line */}
        <div className="relative mb-16 sm:mb-20">
          {/* Continuous Copper Technical Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-7 left-0 right-0 h-[1.5px] bg-white/15 z-0">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: 'easeInOut' }}
              className="h-full bg-copper"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 sm:gap-6 relative z-10">
            {steps.map((step, idx) => {
              const isActive = activeStep === idx;
              return (
                <div
                  key={step.num}
                  onClick={() => setActiveStep(idx)}
                  className="cursor-pointer group flex flex-col"
                >
                  {/* Step Top Anchor with Number */}
                  <div className="flex items-center gap-4 md:block mb-4">
                    <div
                      className={`w-14 h-14 rounded-none border flex items-center justify-center font-mono font-bold text-sm sm:text-base transition-all duration-300 ${
                        isActive
                          ? 'bg-copper text-white border-copper shadow-copper-sm'
                          : 'bg-[#1E1E1E] text-white/80 border-white/15 group-hover:border-copper group-hover:text-white'
                      }`}
                    >
                      {step.num}
                    </div>
                    <span className="md:hidden text-lg font-display font-bold uppercase tracking-wider text-white">
                      {step.title}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-2">
                    <h3 className="hidden md:block text-base font-display font-bold uppercase tracking-wider text-white group-hover:text-copper transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-xs text-white/70 leading-relaxed font-light">
                      {step.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Subtle Non-Icon Capabilities Taxonomy List */}
        <div className="pt-10 border-t border-white/10">
          <div className="text-[11px] font-mono tracking-[0.25em] text-copper uppercase font-semibold mb-6">
            PRODUCTION & FABRICATION SCOPE // SHARJAH, DUBAI, ABU DHABI
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-6 gap-x-8">
            {capabilitiesList.map((cap) => (
              <div
                key={cap}
                className="group flex items-center gap-3 border-l-2 border-white/15 hover:border-copper pl-4 py-1 transition-colors"
              >
                <h4 className="text-xs sm:text-sm uppercase tracking-wider font-mono font-medium text-white/90 group-hover:text-copper transition-colors">
                  {cap}
                </h4>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
