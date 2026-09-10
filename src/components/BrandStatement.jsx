import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Compass, Hammer, Eye, ArrowRight } from 'lucide-react';

export default function BrandStatement() {
  const [activeStage, setActiveStage] = useState(1); // 0: Sketch, 1: Structure, 2: Experience

  const stages = [
    {
      id: 0,
      title: 'SKETCH',
      subtitle: 'Technical Line Drawing & Engineering',
      icon: Compass,
      image: '/images/trans-01-concept.jpg',
      caption: 'Precision 2D/3D CAD blueprints, structural calculations, and joinery detailing.',
    },
    {
      id: 1,
      title: 'STRUCTURE',
      subtitle: 'Workshop Assembly & Fabrication',
      icon: Hammer,
      image: '/images/trans-02-workshop.jpg',
      caption: 'CNC cutting, steel framing, modular timber carpentry, and acoustic cladding in Sharjah facility.',
    },
    {
      id: 2,
      title: 'EXPERIENCE',
      subtitle: 'Finished Architectural Pavilion',
      icon: Eye,
      image: '/images/trans-03-experience.jpg',
      caption: 'Seamless on-site installation at Dubai World Trade Centre with concealed LED lighting and luxury finishes.',
    },
  ];

  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Pioneer Carpentry & Exhibition Fabrication',
    image: 'https://pioneercarpentry.ae/logo.png',
    description: 'Leading exhibition stand builder, event stage fabricator, and custom joinery workshop in Sharjah, Dubai, and Abu Dhabi UAE.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Unit 01, Industrial Area 4, Al Senaiyat',
      addressLocality: 'Sharjah',
      addressRegion: 'Sharjah',
      addressCountry: 'AE',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '25.3223',
      longitude: '55.3853',
    },
    url: 'https://pioneercarpentry.ae',
    telephone: '+971509689671',
    areaServed: ['Dubai', 'Abu Dhabi', 'Sharjah', 'United Arab Emirates', 'GCC'],
    priceRange: '$$$',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Exhibition & Joinery Fabrication Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Exhibition Stand Fabrication Dubai & DWTC',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Custom Carpentry & CNC Joinery Sharjah',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Event Stage & Backdrop Fabrication ADNEC',
          },
        },
      ],
    },
  };

  return (
    <section id="about" aria-label="About Pioneer Carpentry & Exhibition Fabrication UAE" className="relative bg-ivory text-charcoal py-8 sm:py-10 lg:py-12 overflow-hidden border-b border-ivory-border">
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      {/* Background Subtle Architectural Grid */}
      <div className="absolute inset-0 bg-grid-ivory pointer-events-none opacity-60" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Massive Editorial Typographic Statement */}
          <div className="lg:col-span-7 space-y-3 sm:space-y-4">
            {/* Small Copper Label */}
            <div className="inline-flex items-center gap-3">
              <span className="w-8 h-[1.5px] bg-copper inline-block" />
              <span className="text-xs uppercase tracking-[0.25em] font-mono text-copper font-semibold">
                WHAT WE BUILD // UAE EXHIBITION & JOINERY FABRICATORS
              </span>
            </div>

            {/* Main Section H2 Keyword-Rich Heading */}
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold uppercase tracking-tight leading-[1.05] text-charcoal">
              FROM AN IDEA <br />
              <span className="text-copper">TO SOMETHING</span> <br />
              YOU CAN WALK INTO.
            </h2>

            {/* Keyword-rich Copy */}
            <p className="text-base sm:text-lg text-warmgrey font-light leading-relaxed max-w-xl">
              As a premier <strong className="font-normal text-charcoal">UAE exhibition stand contractor</strong> and <strong className="font-normal text-charcoal">custom joinery workshop in Sharjah</strong>, Pioneer Carpentry turns architectural blueprints into high-impact venue environments across Dubai (DWTC), Abu Dhabi (ADNEC), and the GCC.
            </p>

            {/* SEO Key Capabilities Badges */}
            <div className="flex flex-wrap gap-2 pt-1">
              {[
                'Exhibition Stand Contractor Dubai',
                'Sharjah Joinery Workshop',
                'Custom CNC Woodworking',
                'Turnkey Event Stage Fabrication',
              ].map((badge) => (
                <span
                  key={badge}
                  className="text-[10px] font-mono uppercase tracking-wider bg-white text-copper px-2.5 py-1 border border-copper/30 font-medium"
                >
                  ✓ {badge}
                </span>
              ))}
            </div>

            {/* Core Narrative Indicator: SKETCH → STRUCTURE → EXPERIENCE */}
            <div className="pt-3 border-t border-ivory-border">
              <div className="text-[11px] font-mono tracking-[0.25em] text-copper uppercase font-semibold mb-2">
                THE FABRICATION PIPELINE
              </div>
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs font-mono font-medium text-charcoal">
                {stages.map((stage, idx) => {
                  const Icon = stage.icon;
                  return (
                    <button
                      key={stage.id}
                      onClick={() => setActiveStage(stage.id)}
                      className={`flex items-center gap-2 px-3 py-1.5 transition-all duration-300 border ${
                        activeStage === stage.id
                          ? 'border-copper bg-copper/10 text-copper shadow-sm'
                          : 'border-ivory-border bg-white text-charcoal/70 hover:border-copper/40'
                      }`}
                    >
                      <Icon className={`w-3.5 h-3.5 ${activeStage === stage.id ? 'text-copper' : 'text-warmgrey'}`} />
                      <span className="tracking-wider">{stage.title}</span>
                      {idx < stages.length - 1 && (
                        <span className="text-warmgrey/40 ml-1">→</span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Architectural Visual Transformation Preview */}
          <div className="lg:col-span-5">
            <div className="relative group">
              {/* Technical Drawing Border & Accent Box */}
              <div className="relative bg-white border border-ivory-border p-3 sm:p-4 shadow-architectural">
                {/* Header Tag */}
                <div className="flex items-center justify-between border-b border-ivory-border pb-3 mb-3 text-[10px] font-mono tracking-widest text-warmgrey uppercase">
                  <span>STAGE 0{stages[activeStage].id + 1} — {stages[activeStage].title}</span>
                  <span className="text-copper font-medium">PRECISION SPEC</span>
                </div>

                {/* Transitioning Image Frame */}
                <div className="relative aspect-[4/3] overflow-hidden bg-ivory-warm">
                  <motion.img
                    key={activeStage}
                    src={stages[activeStage].image}
                    alt={`${stages[activeStage].title} - ${stages[activeStage].subtitle} | Pioneer Carpentry UAE`}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className="w-full h-full object-cover"
                  />
                  {/* Subtle technical corner marks */}
                  <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-copper" />
                  <div className="absolute top-2 right-2 w-3 h-3 border-t border-r border-copper" />
                  <div className="absolute bottom-2 left-2 w-3 h-3 border-b border-l border-copper" />
                  <div className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-copper" />
                </div>

                {/* Caption & Subtitle */}
                <div className="pt-4 space-y-1">
                  <h3 className="text-xs font-semibold text-charcoal tracking-wide uppercase font-mono flex items-center justify-between">
                    <span>{stages[activeStage].subtitle}</span>
                  </h3>
                  <p className="text-xs text-warmgrey leading-relaxed">
                    {stages[activeStage].caption}
                  </p>
                </div>
              </div>

              {/* Decorative technical backdrop box */}
              <div className="absolute -bottom-3 -right-3 w-full h-full border border-copper/30 -z-10 pointer-events-none" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
