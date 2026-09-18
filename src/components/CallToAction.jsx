import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Phone, MessageSquare } from 'lucide-react';

export default function CallToAction({ onOpenQuote }) {
  const ctaSchema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPoint',
    telephone: '+97165259878',
    contactType: 'sales & estimation',
    email: 'Charles@pioneerexhibition.ae',
    areaServed: ['United Arab Emirates'],
    availableLanguage: ['English', 'Arabic'],
    hoursAvailable: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '08:00',
      closes: '20:00',
    },
  };

  return (
    <section aria-label="Request a Custom Exhibition Stand Quote & Joinery Inquiry UAE" className="relative bg-charcoal text-white py-6 sm:py-8 lg:py-10 overflow-hidden">
      {/* ContactPoint Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ctaSchema) }}
      />

      {/* Background Architectural Craftsmanship Close-up with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/craft-finish-detail.jpg"
          alt="Pioneer Carpentry Custom Woodworking & Exhibition Joinery Craftsmanship UAE"
          className="w-full h-full object-cover object-center brightness-[0.45] contrast-[1.1] scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/80 to-charcoal/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-charcoal" />
        
        {/* Warm copper ambient glow */}
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-copper/20 rounded-full blur-3xl pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-3xl">
          {/* Small Copper Eyebrow */}
          <div className="inline-flex items-center gap-3 mb-3">
            <span className="w-8 h-[1.5px] bg-copper inline-block" />
            <span className="text-xs uppercase tracking-[0.25em] font-mono text-copper font-semibold">
              HAVE SOMETHING TO BUILD? // UAE EXHIBITION STAND ESTIMATION
            </span>
          </div>

          {/* Main Section Heading */}
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold uppercase tracking-tight text-white leading-[0.95] mb-4">
            LET'S TURN <br />
            <span className="text-copper">YOUR IDEA</span> <br />
            INTO REALITY.
          </h2>

          {/* Supporting Copy rich in intent keywords */}
          <p className="text-base sm:text-xl text-[#FAF8F5]/80 font-light leading-relaxed max-w-xl mb-6">
            Planning an upcoming event or trade show? Request a fast, transparent quote from our expert <strong className="font-normal text-white">Sharjah joinery workshop</strong> and <strong className="font-normal text-white">exhibition stand builders</strong>.
          </p>

          {/* Micro Trust Indicators for High Conversion */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mb-6 text-xs font-mono text-copper font-medium uppercase tracking-wider">
            <span>✓ Fast 24-Hour Quotation</span>
            <span>✓ In-House Workshop Fabrication</span>
            <span>✓ Turnkey Event Delivery</span>
          </div>

          {/* Dual Action CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-5">
            <button
              onClick={onOpenQuote}
              aria-label="Request a custom exhibition stand or joinery fabrication quote"
              className="bg-copper hover:bg-copper-hover text-white text-xs uppercase tracking-[0.2em] font-semibold px-9 py-4 flex items-center justify-center gap-3 transition-all duration-300 shadow-copper-sm hover:shadow-copper-lg group"
            >
              <span>START YOUR PROJECT</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
            </button>

            <a
              href="tel:+97165259878"
              aria-label="Call Pioneer Carpentry direct phone line +971 6 525 9878"
              className="bg-copper hover:bg-copper-hover text-white text-xs uppercase tracking-[0.2em] font-semibold px-9 py-4 flex items-center justify-center gap-3 transition-all duration-300 shadow-copper-sm hover:shadow-copper-lg group cursor-pointer"
            >
              <Phone className="w-4 h-4" />
              <span>+971 6 525 9878</span>
            </a>
          </div>

          {/* Direct Workshop Inquiry */}
          <div className="mt-5 flex flex-wrap items-center gap-4 text-xs font-mono text-white/50">
            <span>DIRECT WORKSHOP ESTIMATION</span>
            <span>•</span>
            <a href="mailto:Charles@pioneerexhibition.ae" className="hover:text-copper transition-colors">
              Charles@pioneerexhibition.ae
            </a>
            <span>•</span>
            <span className="text-white/40">Sharjah Industrial Area 4, UAE</span>
          </div>
        </div>
      </div>
    </section>
  );
}
