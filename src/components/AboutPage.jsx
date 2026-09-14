import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  ArrowUpRight,
  Phone,
  Mail,
  MapPin,
  CheckCircle2,
  Sliders,
  Maximize2,
  Layers,
  Ruler,
  Compass,
  Hammer,
  Sparkles,
  ShieldCheck,
  Cpu,
  Zap,
  Check,
  Eye,
  Activity,
  Box,
  Target
} from 'lucide-react';

export default function AboutPage({ onOpenQuote, onNavigateHome }) {
  // Active state for 03 — Evolution stages
  const [activeStoryStage, setActiveStoryStage] = useState(0);

  // 03 — Story Sequence
  const storySteps = [
    {
      num: '01',
      title: 'UNDERSTAND',
      subtitle: 'The Architectural Brief',
      desc: 'We study the brief, space, brand and functional requirements. Every sightline, venue restriction, and visitor circulation pathway is analyzed before a single cut is made.',
      technicalSpec: 'VENUE AUDIT • TRAFFIC FLOW • DWTC / ADNEC REGULATIONS',
      image: '/images/trans-01-concept.jpg',
    },
    {
      num: '02',
      title: 'PLAN',
      subtitle: 'Structural Engineering & Detailing',
      desc: 'Materials, structure, production requirements and installation approach are coordinated. Exploded 3D joinery files and structural load calculations ensure flawless fit on site.',
      technicalSpec: 'CAD BREAKDOWN • CNC TOOLPATHS • MATERIAL SPECIFICATION',
      image: '/about/1.png',
    },
    {
      num: '03',
      title: 'FABRICATE',
      subtitle: 'Sharjah Workshop Construction',
      desc: 'The concept moves into workshop production and physical construction. Timber frames, curved ribs, and internal steel trusses are precision-milled and dry-assembled.',
      technicalSpec: 'CNC ROUTING • TIMBER JOINERY • STEEL REINFORCEMENT',
      image: '/about/2.png',
    },
    {
      num: '04',
      title: 'FINISH',
      subtitle: 'Luxury Detailing & Illumination',
      desc: 'Surfaces, detailing, branding and final finishes are carefully executed. Automotive spray booths, flawless HPL lamination, and concealed warm LED profiles bring warmth and prestige.',
      technicalSpec: 'SPRAY LACQUER • METALLIC CLADDING • CONCEALED WIRING',
      image: '/about/3.png',
    },
    {
      num: '05',
      title: 'INSTALL',
      subtitle: 'Turnkey 24/7 Venue Handover',
      desc: 'The completed structure is delivered and installed on site. Experienced UAE event staging crews manage leveling, AV integration, and millimeter adjustments ahead of opening hour.',
      technicalSpec: 'LOGISTICS CONVOY • 24/7 RAPID BUILD • FINAL SIGN-OFF',
      image: '/about/4.png',
    },
  ];

  // 04 — What Defines Us Panels
  const definePanels = [
    {
      num: '01',
      title: 'CRAFT',
      tagline: 'Careful fabrication and finish at every stage.',
      desc: 'From structural framing to the tactile edges touched by VIP guests, our cabinetmakers and fabricators treat every millimetre as a testament to brand quality.',
    },
    {
      num: '02',
      title: 'CONTROL',
      tagline: 'Workshop production and installation managed with clear coordination.',
      desc: 'No middleman delays or unaccountable subcontractors. In-house machining, paint booths, transport fleets, and venue crews stay under one unified command.',
    },
    {
      num: '03',
      title: 'FLEXIBILITY',
      tagline: 'Custom solutions designed around each project rather than fixed templates.',
      desc: 'Every brand brief demands bespoke geometry. We tailor materials, modular breakdown strategies, and structural spans to the exact venue and concept.',
    },
    {
      num: '04',
      title: 'DELIVERY',
      tagline: 'Production focused on the demanding timelines of exhibitions and events.',
      desc: 'Trade show doors open on fixed minutes. Our Sharjah workshop operates with sequenced 24/7 shifts and strict logistics buffers to ensure total peace of mind.',
    },
  ];

  // 06 — Pioneer Approach Principles
  const approachPrinciples = [
    {
      num: '01',
      title: 'UNDERSTAND THE SPACE',
      desc: 'Every project begins with the real environment it needs to occupy. We analyze venue ceiling heights, rigging capacities, and audience approach angles.',
    },
    {
      num: '02',
      title: 'FABRICATE FOR FUNCTION',
      desc: 'Structures must not only look good, they must work physically. Hidden cable chaseways, concealed access hatches, and structural stability are built into the core.',
    },
    {
      num: '03',
      title: 'FINISH WITH INTENT',
      desc: 'Materials, surfaces and details are treated as part of the final experience. No raw edges, no visible screwheads, and no inconsistent texture transitions.',
    },
    {
      num: '04',
      title: 'INSTALL WITH CONTROL',
      desc: 'The final stage is executed on-site with care and coordination. Our venue staging team is disciplined, polite, fully accredited, and equipped for rapid handover.',
    },
  ];

  // 08 — Capabilities Grid
  const capabilities = [
    { name: 'EXHIBITION STANDS', category: 'Turnkey Pavilions & Double-Deck Stands', img: '/images/hero-main.jpg' },
    { name: 'EVENT STAGES', category: 'Keynote Podiums & Plenary Platforms', img: '/images/project-stage-keynote.jpg' },
    { name: 'EVENT BACKDROPS', category: 'Geometric Clad & Branded Media Walls', img: '/images/service-stage.jpg' },
    { name: 'DISPLAY COUNTERS', category: 'Custom Reception & Product Vitrines', img: '/images/kiosk-luxury.jpg' },
    { name: 'KIOSKS', category: 'High-End Retail & Mall Pop-Up Modules', img: '/images/service-kiosk.jpg' },
    { name: 'BRAND ACTIVATION STRUCTURES', category: 'Immersive Tunnels & Experiential Pods', img: '/images/project-brand-activation.jpg' },
    { name: 'CUSTOM PROPS', category: 'Sculptural Replicas & Thematic Builds', img: '/images/service-custom.jpg' },
    { name: 'CUSTOM FURNITURE', category: 'Bespoke Lounges, Meeting Pods & Bars', img: '/images/trans-03-experience.jpg' },
    { name: 'LED SCREEN CLADDING', category: 'Seamless Bezel Enclosures & Fascias', img: '/images/cta-lighting.jpg' },
    { name: 'TRUSS SUPPORT STRUCTURES', category: 'Disguised Overhead Rigging & Totems', img: '/images/hero-exhibition.jpg' },
    { name: 'PRODUCT LAUNCH INSTALLATIONS', category: 'Reveal Chambers & Automotive Plinths', img: '/images/hero-pavilion.jpg' },
    { name: 'ON-SITE FINISHING', category: 'Seamless Touch-ups & VIP Standby', img: '/images/trans-02-workshop.jpg' },
  ];

  // 09 — Materials Showcase
  const materials = [
    {
      title: 'ARCHITECTURAL TIMBER & VENEER',
      desc: 'Engineered hardwoods, acoustic slatted fluting, warm oak and walnut veneers treated with protective fire-retardant clear sealants.',
      spec: 'Grade A Hardwood • CNC Micro-ribs • Class 1 Flame Retardant',
      image: '/images/trans-03-experience.jpg',
    },
    {
      title: 'AUTOMOTIVE-GRADE LACQUER',
      desc: 'Multi-stage spray polyurethane paint finishes in custom corporate brand Pantone codes with velvety matte or mirror-gloss luster.',
      spec: 'Dust-free Booth Application • Zero Orange Peel • Edge Seal',
      image: '/images/craft-finish-detail.jpg',
    },
    {
      title: 'METALLIC COPPER & BRASS ACCENTS',
      desc: 'Burnished copper laminates, brushed brass inlays, and precision anodized aluminum reveal channels creating distinctive luxury depth.',
      spec: 'Hairline Brushed Textures • Flush Mitred Joints • Anti-tarnish',
      image: '/images/trans-01-concept.jpg',
    },
    {
      title: 'INTEGRATED WARM LINEAR LIGHTING',
      desc: 'Recessed aluminum channels with high-CRI 3000K warm LED ribbons, frosted diffusers, and concealed internal driver channels.',
      spec: 'No Visible Diodes • 24V Flicker-Free • Smooth 0-100% Dimmable',
      image: '/images/cta-lighting.jpg',
    },
  ];

  // 10 — Why Clients Choose Pioneer
  const clientReasons = [
    {
      num: '01',
      title: 'CUSTOM FABRICATION',
      desc: 'Built around the brief rather than off-the-shelf solutions. We fabricate unique architectural forms that set brands apart on crowded trade show floors.',
    },
    {
      num: '02',
      title: 'END-TO-END EXECUTION',
      desc: 'From production through delivery and installation. A single accountable partner handling engineering, joinery, logistics, and venue liaison.',
    },
    {
      num: '03',
      title: 'PROJECT FLEXIBILITY',
      desc: 'Solutions adapted to scale, venue and requirements. Whether an intimate luxury counter or a 500 sqm double-deck DWTC pavilion, we scale smoothly.',
    },
    {
      num: '04',
      title: 'DETAIL-LED FINISHING',
      desc: 'Attention carried through to the final visible surface. Millimeter alignment, seamless mitres, and pristine surface handoffs are standard.',
    },
    {
      num: '05',
      title: 'UAE-BASED PRODUCTION',
      desc: 'Local workshop capability supporting event and exhibition projects across the UAE. Rapid mock-ups, client workshop inspections, and instant responsiveness.',
    },
  ];

  // State for 01 — Masterpiece About Hero Phase Switcher
  const [heroStage, setHeroStage] = useState(0);

  const heroStages = [
    {
      id: 'stage-1',
      code: 'PHASE 01',
      label: 'WORKSHOP PRODUCTION',
      title: 'SHARJAH FABRICATION FACILITY',
      image: '/images/trans-02-workshop.jpg',
      specCode: 'SEC-01 // CNC JOINERY & TIMBER',
      span: 'SPAN: 18,400mm × 12,200mm',
      tol: 'PRECISION: ±0.25mm',
      caption: 'In-house CNC milling, timber joinery breakdown & 3D dry assembly.',
      detailImg: '/images/hero-pavilion.jpg',
      detailLabel: 'CNC Milling & Structural Trusses',
    },
    {
      id: 'stage-2',
      code: 'PHASE 02',
      label: 'FINISHING & LACQUER',
      title: 'AUTOMOTIVE SPRAY BOOTH',
      image: '/images/craft-finish-detail.jpg',
      specCode: 'SEC-02 // DUST-FREE SPRAY BOOTH',
      span: 'COATINGS: VELVET MATTE & COPPER',
      tol: 'SURFACE: HAND-FINISHED',
      caption: 'Multi-stage polyurethane lacquer, burnished copper inlays & LED reveals.',
      detailImg: '/images/trans-01-concept.jpg',
      detailLabel: 'Polyurethane Spray & Metallic Trims',
    },
    {
      id: 'stage-3',
      code: 'PHASE 03',
      label: 'DWTC VENUE LAUNCH',
      title: 'LIVE EXHIBITION PAVILION',
      image: '/images/trans-03-experience.jpg',
      specCode: 'SEC-03 // LIVE EVENT HANDOVER',
      span: 'VENUE: DUBAI WORLD TRADE CENTRE',
      tol: 'HANDOVER: 24H AHEAD',
      caption: 'Turnkey 24/7 venue build, laser leveling, concealed wiring & VIP handover.',
      detailImg: '/images/hero-main.jpg',
      detailLabel: 'Turnkey Trade Show Installation',
    },
  ];

  // SEO Schema
  const aboutSchema = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'About Pioneer Carpentry | Exhibition & Event Fabrication UAE',
    description: 'Learn about Pioneer Carpentry, a UAE-based fabrication company delivering exhibition stands, event stages, kiosks, branded structures and custom installations.',
    mainEntity: {
      '@type': 'Organization',
      name: 'Pioneer Carpentry & Exhibition Fabrication',
      url: 'https://pioneercarpentry.ae',
      telephone: '+971509689671',
      email: 'info@leadevents.com',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Unit 01, Industrial Area 4, Al Senaiyat',
        addressLocality: 'Sharjah',
        addressRegion: 'Sharjah',
        addressCountry: 'AE',
      },
      foundingLocation: {
        '@type': 'Place',
        name: 'Sharjah, UAE',
      },
      areaServed: ['Dubai', 'Abu Dhabi', 'Sharjah', 'United Arab Emirates', 'GCC'],
    },
  };

  return (
    <article className="min-h-screen bg-[#FAF8F5] text-charcoal font-sans selection:bg-copper selection:text-white pt-20">
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />

      {/* ==================================================
          01 — ABOUT HERO (Minimalist Architectural Left-Aligned Redesign)
          ================================================== */}
      <section
        aria-label="About Pioneer Carpentry Hero"
        className="relative min-h-[75vh] lg:min-h-[82vh] flex flex-col justify-between bg-[#0C0C0C] text-white overflow-hidden border-b border-white/10"
      >
        {/* Full-Bleed Background Image with Dark Architectural Vignette Overlay */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src="/about/hero.png"
            alt="Pioneer Carpentry Fabrication Facility UAE"
            className="w-full h-full object-cover object-center filter brightness-[0.55] contrast-[1.2]"
          />
          {/* Heavy Dark Gradients for Text Legibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0C0C0C] via-[#0C0C0C]/85 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0C0C0C]/80 via-transparent to-[#0C0C0C]" />
          {/* Subtle Grid Accent */}
          <div className="absolute inset-0 bg-grid-charcoal opacity-15 pointer-events-none" />
          {/* Accent Copper Glow */}
          <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-copper/15 rounded-full blur-[140px] pointer-events-none" />
        </div>

        {/* Hero Content Container — Left Aligned, Clean & Uncluttered */}
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-24 pb-16 sm:pt-28 sm:pb-20 lg:pt-36 lg:pb-24 relative z-10 w-full my-auto text-left">
          <div className="max-w-3xl space-y-8">
            
            {/* Eyebrow Label & Live Facility Operational Beacon */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="inline-flex items-center gap-2 bg-[#141414]/90 border border-copper/50 px-3.5 py-1.5 text-[10px] font-mono text-copper uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>UAE PRODUCTION FACILITY</span>
              </div>
              <span className="text-xs sm:text-sm uppercase tracking-[0.25em] font-mono text-copper font-medium">
                ABOUT PIONEER
              </span>
            </motion.div>

            {/* Single H1 Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold tracking-tight leading-[1.04] uppercase text-white mb-6"
            >
              WE DON'T JUST <br />
              <span className="text-copper">BUILD STRUCTURES.</span> <br />
              WE BUILD WHAT <br />
              <span className="text-white/90">BRANDS EXPERIENCE.</span>
            </motion.h1>

            {/* Supporting Copy */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-base sm:text-lg lg:text-xl text-[#FAF8F5]/80 font-light leading-relaxed max-w-2xl mb-10"
            >
              Pioneer Carpentry is a UAE-based fabrication company specializing in exhibition stands, event environments, branded structures, custom displays and turnkey on-site installation.
            </motion.p>

            {/* Clean Metrics Strip */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="pt-2 flex flex-wrap items-center gap-6 sm:gap-10 border-t border-white/10"
            >
              <div>
                <div className="text-[10px] font-mono text-copper tracking-widest uppercase font-bold">PRODUCTION</div>
                <div className="text-sm font-display font-extrabold text-white uppercase mt-0.5">100% IN-HOUSE</div>
              </div>
              <div className="h-8 w-px bg-white/15 hidden sm:block" />
              <div>
                <div className="text-[10px] font-mono text-copper tracking-widest uppercase font-bold">LOCATION</div>
                <div className="text-sm font-display font-extrabold text-white uppercase mt-0.5">SHARJAH IND. 4</div>
              </div>
              <div className="h-8 w-px bg-white/15 hidden sm:block" />
              <div>
                <div className="text-[10px] font-mono text-copper tracking-widest uppercase font-bold">VENUES</div>
                <div className="text-sm font-display font-extrabold text-white uppercase mt-0.5">DWTC & ADNEC</div>
              </div>
              <div className="h-8 w-px bg-white/15 hidden sm:block" />
              <div>
                <div className="text-[10px] font-mono text-copper tracking-widest uppercase font-bold">PRECISION</div>
                <div className="text-sm font-display font-extrabold text-white uppercase mt-0.5">±0.25MM CNC</div>
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-5"
            >
              <button
                onClick={onOpenQuote}
                className="bg-copper hover:bg-copper-hover text-white text-xs uppercase tracking-[0.2em] font-semibold px-8 py-4 flex items-center justify-center gap-3 transition-all duration-300 shadow-copper-sm hover:shadow-copper-lg group cursor-pointer"
              >
                <span>START A PROJECT</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
              <a
                href="#who-we-are"
                className="bg-copper hover:bg-copper-hover text-white text-xs uppercase tracking-[0.2em] font-semibold px-8 py-4 flex items-center justify-center gap-3 transition-all duration-300 shadow-copper-sm hover:shadow-copper-lg group cursor-pointer"
              >
                <span>DISCOVER OUR STORY</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </motion.div>

          </div>
        </div>

        {/* Minimal Bottom Micro Statement Strip */}
        <div className="border-t border-white/10 bg-[#080808]/90 backdrop-blur-md py-4 px-6 relative z-10">
          <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-start gap-4 text-xs font-mono tracking-[0.25em] text-white/70 uppercase">
            <span className="hover:text-copper transition-colors cursor-default">EVENTS</span>
            <span className="text-copper">•</span>
            <span className="hover:text-copper transition-colors cursor-default">EXHIBITIONS</span>
            <span className="text-copper">•</span>
            <span className="hover:text-copper transition-colors cursor-default">FABRICATION</span>
            <span className="text-copper">•</span>
            <span className="hover:text-copper transition-colors cursor-default">INSTALLATION</span>
          </div>
        </div>
      </section>

      {/* ==================================================
          02 — WHO WE ARE (Clean Architectural Editorial)
          ================================================== */}
      <section
        id="who-we-are"
        aria-labelledby="who-we-are-heading"
        itemScope
        itemType="https://schema.org/AboutPage"
        className="bg-[#FAF8F5] text-charcoal py-16 sm:py-24 border-b border-[#E2DDD5] relative overflow-hidden"
      >
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 bg-grid-ivory pointer-events-none opacity-40" />

        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          
          {/* Header Bar */}
          <div className="flex flex-wrap items-center justify-between border-t-2 border-charcoal pt-6 mb-12 sm:mb-16 gap-4">
            <div className="flex items-center gap-3">
              <span className="w-6 h-[2px] bg-copper inline-block" />
              <h2 className="text-xs font-mono tracking-[0.25em] font-bold uppercase text-charcoal">
                02 // WHO WE ARE
              </h2>
            </div>
            <span className="text-xs font-mono uppercase tracking-widest text-warmgrey">
              SHARJAH • DUBAI • ABU DHABI
            </span>
          </div>

          {/* Main 2-Column Architectural Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-16 sm:mb-20">
            
            {/* Left Narrative */}
            <div className="lg:col-span-6 space-y-6">
              <h3
                id="who-we-are-heading"
                className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold uppercase tracking-tight text-charcoal leading-[1.02]"
              >
                WE SHAPE SPACES <br />
                THAT <span className="text-copper">COMMAND ATTENTION.</span>
              </h3>

              <div className="space-y-4 text-base sm:text-lg text-charcoal/80 font-light leading-relaxed">
                <p>
                  Pioneer Carpentry is a UAE specialist fabrication company turning complex architectural concepts into physical venue environments across <strong className="font-semibold text-charcoal">Dubai (DWTC)</strong>, <strong className="font-semibold text-charcoal">Abu Dhabi (ADNEC)</strong>, and the GCC.
                </p>
                <p className="text-sm sm:text-base text-warmgrey leading-relaxed">
                  Operating from our <strong className="font-semibold text-charcoal">15,000+ sq ft Sharjah joinery facility</strong>, we manage multi-axis CNC woodworking, structural steel, lacquer finishing, and 24/7 venue staging completely in-house — delivering precision craftsmanship with zero delays.
                </p>
              </div>

              {/* Clean Metric Badges Strip */}
              <div className="pt-4 grid grid-cols-3 gap-4 border-t border-[#E2DDD5]">
                <div>
                  <div className="text-xl sm:text-2xl font-display font-bold text-charcoal">15,000+</div>
                  <div className="text-[10px] font-mono text-copper uppercase tracking-wider font-bold mt-0.5">SQ FT FACILITY</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-display font-bold text-charcoal">±0.25MM</div>
                  <div className="text-[10px] font-mono text-copper uppercase tracking-wider font-bold mt-0.5">CNC ACCURACY</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-display font-bold text-charcoal">100%</div>
                  <div className="text-[10px] font-mono text-copper uppercase tracking-wider font-bold mt-0.5">IN-HOUSE FABRICATION</div>
                </div>
              </div>
            </div>

            {/* Right Editorial Showcase (Layered Creative Image Frame) */}
            <div className="lg:col-span-6 relative">
              <div className="relative aspect-[4/3] sm:aspect-[16/11] w-full overflow-hidden bg-charcoal shadow-2xl group border border-[#E2DDD5]">
                <img
                  src="/about/who.png"
                  alt="Precision Joinery Workshop Detail Pioneer Carpentry UAE"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 filter brightness-[0.9] contrast-[1.05]"
                />
                
                {/* Floating Architectural Badge Overlay */}
                <div className="absolute bottom-4 left-4 right-4 bg-[#141414]/90 backdrop-blur-md p-4 border border-white/10 flex items-center justify-between text-white">
                  <div>
                    <div className="text-[10px] font-mono text-copper uppercase tracking-widest font-bold">PRODUCTION FACILITY</div>
                    <div className="text-xs font-display font-bold uppercase tracking-wide mt-0.5">SHARJAH INDUSTRIAL AREA 4</div>
                  </div>
                  <div className="w-8 h-8 rounded-full border border-copper/50 flex items-center justify-center text-copper">
                    <Compass className="w-4 h-4" />
                  </div>
                </div>
              </div>

              {/* Offset Accent Box Line */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-copper/30 -z-10 pointer-events-none hidden sm:block" />
            </div>

          </div>

          {/* 4 Clean Capability Cards (Horizontal & Uncluttered) */}
          <div className="pt-8 border-t border-[#E2DDD5]">
            <div className="text-xs font-mono text-copper uppercase tracking-[0.2em] font-bold mb-8">
              CORE FABRICATION SERVICES // UAE & GCC
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  num: '01',
                  title: 'EXHIBITION STANDS',
                  desc: 'Turnkey double-deck pavilions, VIP lounges & DWTC venue builds.',
                },
                {
                  num: '02',
                  title: 'JOINERY WORKSHOP',
                  desc: 'Custom CNC woodworking, automotive spray lacquer & timber paneling.',
                },
                {
                  num: '03',
                  title: 'EVENT STAGES',
                  desc: 'Heavy-duty plenary stages, speaker podiums & LED screen cladding.',
                },
                {
                  num: '04',
                  title: 'BRAND ACTIVATIONS',
                  desc: 'Experiential retail kiosks, pop-up modules & 3D sculptural props.',
                },
              ].map((service, idx) => (
                <div
                  key={idx}
                  className="p-6 bg-white border border-[#E2DDD5] hover:border-copper transition-all duration-300 group relative"
                >
                  <div className="text-2xl font-display font-extrabold text-copper/40 group-hover:text-copper transition-colors mb-3">
                    {service.num}
                  </div>
                  <h4 className="text-base font-display font-bold uppercase text-charcoal mb-2">
                    {service.title}
                  </h4>
                  <p className="text-xs text-warmgrey leading-relaxed font-light">
                    {service.desc}
                  </p>
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-copper scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>


      {/* ==================================================
          03 — OUR STORY / HOW WE WORK (Project Evolution Sequence)
          ================================================== */}
      <section
        id="how-we-work"
        aria-label="How We Work - Project Evolution"
        className="bg-[#101010] text-white pt-10 sm:pt-12 lg:pt-14 pb-10 sm:pb-12 lg:pb-14 border-b border-white/10 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-grid-charcoal opacity-30 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          {/* Header */}
          <div className="max-w-3xl mb-6 sm:mb-8">
            <div className="inline-flex items-center gap-3 mb-3">
              <span className="w-8 h-[1.5px] bg-copper inline-block" />
              <span className="text-xs uppercase tracking-[0.25em] font-mono text-copper font-semibold">
                HOW WE WORK // EVOLUTION OF A PROJECT
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold uppercase tracking-tight text-white leading-[1.05]">
              EVERY PROJECT <br />
              <span className="text-copper">STARTS WITH AN IDEA.</span>
            </h2>
            <p className="text-base sm:text-lg text-white/70 font-light mt-4 leading-relaxed">
              We do not measure our history by arbitrary dates, but by the relentless precision of our fabrication pipeline. From initial sketch to venue handover, each stage is strictly sequenced.
            </p>
          </div>

          {/* Desktop Sequential Story Navigator / Mobile Vertical Timeline */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Step Selection Tabs (Left 5 cols on Desktop) */}
            <div className="lg:col-span-5 space-y-3">
              {storySteps.map((step, idx) => {
                const isActive = activeStoryStage === idx;
                return (
                  <div
                    key={step.num}
                    onClick={() => setActiveStoryStage(idx)}
                    className={`p-5 border transition-all duration-300 cursor-pointer flex items-start gap-5 ${
                      isActive
                        ? 'border-copper bg-[#1A1A1A] shadow-copper-sm'
                        : 'border-white/10 bg-[#141414] hover:border-white/30 text-white/70'
                    }`}
                  >
                    <span
                      className={`font-mono font-bold text-lg transition-colors ${
                        isActive ? 'text-copper' : 'text-white/30'
                      }`}
                    >
                      {step.num}
                    </span>
                    <div className="space-y-1">
                      <div className="flex items-center justify-between">
                        <h3 className={`text-base font-display font-bold uppercase tracking-wider ${isActive ? 'text-white' : 'text-white/80'}`}>
                          {step.title}
                        </h3>
                        {isActive && (
                          <span className="text-[10px] font-mono text-copper tracking-widest uppercase">
                            ACTIVE
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-white/60 line-clamp-2">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Step Visual Preview & Technical Callout (Right 7 cols on Desktop) */}
            <div className="lg:col-span-7">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStoryStage}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4 }}
                  className="bg-[#181818] border border-white/15 p-6 sm:p-8 space-y-6"
                >
                  {/* Top Bar */}
                  <div className="flex items-center justify-between border-b border-white/10 pb-4 text-xs font-mono">
                    <span className="text-copper tracking-[0.2em] font-semibold">
                      STAGE 0{activeStoryStage + 1} — {storySteps[activeStoryStage].title}
                    </span>
                    <span className="text-white/50 tracking-wider">
                      {storySteps[activeStoryStage].subtitle}
                    </span>
                  </div>

                  {/* Main Visual */}
                  <div className="relative aspect-[16/9] overflow-hidden bg-black border border-white/10">
                    <img
                      src={storySteps[activeStoryStage].image}
                      alt={storySteps[activeStoryStage].title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-transparent to-transparent" />
                    
                    {/* Technical badge */}
                    <div className="absolute bottom-3 left-4 text-[10px] font-mono text-copper bg-black/80 px-3 py-1 border border-copper/30">
                      {storySteps[activeStoryStage].technicalSpec}
                    </div>
                  </div>

                  {/* Detailed Description */}
                  <div className="space-y-3">
                    <h3 className="text-xl sm:text-2xl font-display font-bold uppercase text-white">
                      {storySteps[activeStoryStage].title}: {storySteps[activeStoryStage].subtitle}
                    </h3>
                    <p className="text-sm text-white/80 font-light leading-relaxed">
                      {storySteps[activeStoryStage].desc}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

          </div>
        </div>
      </section>


      {/* ==================================================
          04 — WHAT DEFINES US (Diagonal Waterfall Layout)
          ================================================== */}
      <section
        id="what-defines-us"
        aria-label="What Defines Pioneer Carpentry"
        className="bg-[#141414] text-white pt-8 sm:pt-12 pb-24 sm:pb-32 relative overflow-hidden"
      >
        <div className="max-w-[100rem] mx-auto px-6 sm:px-12 lg:px-20 relative z-10">
          
          {/* Centered Editorial Header */}
          <div className="mb-20 sm:mb-24 text-center">
            <div className="inline-flex items-center gap-4 mb-8 justify-center">
              <span className="w-16 h-[1px] bg-copper inline-block" />
              <span className="text-xs uppercase tracking-[0.4em] font-mono text-copper font-bold">
                WHAT DEFINES PIONEER
              </span>
              <span className="w-16 h-[1px] bg-copper inline-block" />
            </div>
            <h2 className="text-5xl sm:text-7xl lg:text-[7rem] font-display font-black uppercase tracking-tighter text-white leading-[0.85] mb-8">
              PRECISION <br />
              <span className="text-copper font-light italic tracking-normal">BEHIND THE</span> <br />
              VISIBLE RESULT.
            </h2>
            <p className="text-lg sm:text-xl text-white/50 font-light leading-relaxed max-w-2xl mx-auto">
              Four architectural pillars that govern our workshop floor, fabrication standards, and live venue handovers.
            </p>
          </div>

          {/* Core Content - Diagonal Waterfall Flow */}
          <div className="relative pt-10">
            {/* Subtle background guiding lines */}
            <div className="hidden lg:block absolute left-[20%] top-0 bottom-0 w-[1px] bg-white/5" />
            <div className="hidden lg:block absolute left-[50%] top-0 bottom-0 w-[1px] bg-white/5" />
            <div className="hidden lg:block absolute left-[80%] top-0 bottom-0 w-[1px] bg-white/5" />

            <div className="space-y-28 sm:space-y-40">
              {definePanels.map((panel, idx) => {
                // Calculate staggered horizontal offset (0%, 25%, 50%, 25%)
                const margins = ['lg:ml-[5%]', 'lg:ml-[25%]', 'lg:ml-[45%]', 'lg:ml-[25%]'];
                return (
                  <div key={panel.num} className={`group ${margins[idx % margins.length]} max-w-2xl relative`}>
                    
                    {/* Floating Watermark Number */}
                    <div className="absolute -top-16 -left-6 lg:-left-24 text-[8rem] sm:text-[14rem] font-display font-black leading-none text-white/5 group-hover:text-copper/10 transition-colors duration-1000 -z-10 select-none">
                      {panel.num}
                    </div>

                    <div className="pl-6 sm:pl-10 border-l-2 border-copper/20 group-hover:border-copper transition-colors duration-500 relative z-10">
                      <div className="flex items-center gap-3 mb-5">
                        <span className="w-6 h-[1px] bg-copper" />
                        <span className="text-xs font-mono text-copper tracking-[0.3em] uppercase font-bold">
                          PILLAR {panel.num}
                        </span>
                      </div>
                      
                      <h3 className="text-3xl sm:text-5xl font-display font-bold uppercase tracking-tight text-white mb-4">
                        {panel.title}
                      </h3>
                      
                      <div className="text-xs font-mono text-white/40 uppercase tracking-widest mb-6">
                        {panel.tagline}
                      </div>
                      
                      <p className="text-lg sm:text-xl text-white/70 font-light leading-relaxed">
                        {panel.desc}
                      </p>
                    </div>

                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </section>


      {/* ==================================================
          05 — WORKSHOP / FABRICATION CULTURE
          ================================================== */}
      <section
        id="workshop-culture"
        aria-label="Pioneer Workshop and Fabrication Culture"
        className="relative bg-black text-white pt-8 sm:pt-12 pb-8 sm:pb-12 overflow-hidden border-b border-white/10"
      >
        {/* Full-width Cinematic Workshop Image Background */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/trans-02-workshop.jpg"
            alt="Pioneer Carpentry Fabrication Culture Sharjah Facility"
            className="w-full h-full object-cover object-center brightness-[0.45] contrast-[1.15] scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/80" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-3">
              <span className="w-8 h-[1.5px] bg-copper inline-block" />
              <span className="text-xs uppercase tracking-[0.25em] font-mono text-copper font-semibold">
                WORKSHOP CULTURE // AL SENAIYAT, SHARJAH
              </span>
            </div>

            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold uppercase tracking-tight text-white leading-[1.03]">
              WHERE IDEAS <br />
              <span className="text-copper">BECOME PHYSICAL.</span>
            </h2>

            <p className="text-lg sm:text-2xl text-[#FAF8F5]/90 font-light leading-relaxed max-w-2xl border-l-2 border-copper pl-6 py-1">
              "Our workshop is where drawings become structures, materials become finishes and details become experiences."
            </p>

            <p className="text-sm sm:text-base text-white/70 font-light max-w-xl leading-relaxed">
              Equipped with precision CNC routers, heavy-duty timber joinery machinery, dedicated spray-painting booths, and modular dry-run assembly zones, our facility gives architects, brand agencies, and event organizers total confidence.
            </p>
          </div>

          {/* Capabilities Horizontal Strip */}
          <div className="mt-8 pt-6 border-t border-white/15">
            <div className="text-[11px] font-mono tracking-[0.25em] text-copper uppercase font-semibold mb-4">
              IN-HOUSE PRODUCTION CAPABILITIES
            </div>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-xs sm:text-sm font-mono tracking-wider text-white/80">
              {[
                'CARPENTRY',
                'STRUCTURAL FABRICATION',
                'CUSTOM FURNITURE',
                'FINISHING',
                'CLADDING',
                'DISPLAY PRODUCTION',
                'PROPS',
                'INSTALLATION',
              ].map((item, idx) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="text-copper font-bold">✓</span>
                  <span className="hover:text-copper transition-colors cursor-default">{item}</span>
                  {idx < 7 && <span className="text-white/20 hidden sm:inline">•</span>}
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>


      {/* ==================================================
          06 — THE PIONEER APPROACH (Warm Off-white 2-Column)
          ================================================== */}
      <section
        id="our-approach"
        aria-label="The Pioneer Fabrication Approach"
        className="bg-[#FAF8F5] text-charcoal pt-4 sm:pt-6 pb-8 sm:pb-12 border-b border-ivory-border relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          
          {/* Section Header */}
          <div className="max-w-3xl mb-6 sm:mb-8">
            <div className="inline-flex items-center gap-3 mb-3">
              <span className="w-8 h-[1.5px] bg-copper inline-block" />
              <span className="text-xs uppercase tracking-[0.25em] font-mono text-copper font-semibold">
                OUR APPROACH
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold uppercase tracking-tight text-charcoal leading-[1.05]">
              BUILT AROUND <br />
              <span className="text-copper">THE PROJECT.</span> <br />
              NOT A TEMPLATE.
            </h2>
          </div>

          {/* 2-Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* LEFT: 4 Principles */}
            <div className="lg:col-span-7 space-y-8">
              {approachPrinciples.map((principle) => (
                <div key={principle.num} className="border-l-2 border-copper/30 hover:border-copper pl-6 py-1 transition-colors space-y-2 group">
                  <div className="text-xs font-mono text-copper font-semibold tracking-widest uppercase">
                    PRINCIPLE // {principle.num}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-display font-bold uppercase tracking-tight text-charcoal group-hover:text-copper transition-colors">
                    {principle.title}
                  </h3>
                  <p className="text-sm sm:text-base text-warmgrey font-light leading-relaxed">
                    {principle.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* RIGHT: Close-up Material & Fabrication Photography */}
            <div className="lg:col-span-5">
              <div className="relative bg-white border border-ivory-border p-4 shadow-architectural space-y-4">
                <div className="aspect-[4/5] overflow-hidden bg-ivory-warm relative">
                  <img
                    src="/about/approach.png"
                    alt="Pioneer Carpentry Precision Surface Craftsmanship and Wood Finishing"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent" />
                  
                  <div className="absolute bottom-4 left-4 right-4 text-white text-xs font-mono">
                    <span className="text-copper uppercase tracking-widest block font-bold">TACTILE LUXURY</span>
                    <span>FLUSH REVEALS • AUTOMOTIVE LACQUERS • INTEGRATED LEDS</span>
                  </div>
                </div>

                <div className="pt-2 text-xs font-mono text-warmgrey flex items-center justify-between border-t border-ivory-border">
                  <span>PRECISION TOLERANCE: ±0.5MM</span>
                  <span className="text-charcoal font-semibold">ZERO COMPROMISE</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* ==================================================
          07 — FROM WORKSHOP TO VENUE (Split-Screen Composition)
          ================================================== */}
      <section
        id="workshop-to-venue"
        aria-label="From Workshop to Venue Split Transformation"
        className="bg-[#121212] text-white pt-10 sm:pt-12 lg:pt-14 pb-10 sm:pb-12 lg:pb-14 border-b border-white/10 relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8">
            <div className="inline-flex items-center gap-3 mb-3">
              <span className="w-8 h-[1.5px] bg-copper inline-block" />
              <span className="text-xs uppercase tracking-[0.25em] font-mono text-copper font-semibold">
                WORKSHOP → SITE TRANSFORMATION
              </span>
              <span className="w-8 h-[1.5px] bg-copper inline-block" />
            </div>
            
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold uppercase tracking-tight text-white leading-[1.05] mb-4">
              BUILT IN THE WORKSHOP. <br />
              <span className="text-copper">FINISHED ON SITE.</span>
            </h2>

            <p className="text-base sm:text-lg text-white/70 font-light leading-relaxed">
              What begins as frames, panels, surfaces and structures in the workshop becomes a finished branded environment at the venue.
            </p>
          </div>

          {/* Interactive Split-Screen Comparison Showcase */}
          <div className="relative border border-white/15 bg-[#181818] p-4 sm:p-6 shadow-architectural-dark">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 relative">
              
              {/* LEFT: Workshop Fabrication Image */}
              <div className="relative group overflow-hidden border border-white/10">
                <div className="aspect-[16/10] overflow-hidden bg-black">
                  <img
                    src="/images/trans-02-workshop.jpg"
                    alt="Workshop Structural Assembly and Sub-framing at Pioneer Facility"
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                </div>
                {/* Label */}
                <div className="absolute top-4 left-4 bg-black/80 text-copper px-3 py-1 border border-copper/40 text-xs font-mono tracking-widest uppercase font-semibold">
                  01 // WORKSHOP FABRICATION
                </div>
                <div className="p-4 bg-[#141414] border-t border-white/10 text-xs font-mono text-white/70">
                  CNC timber frames, structural steel, mock dry-assembly & prep.
                </div>
              </div>

              {/* RIGHT: Finished Event/Exhibition Installation */}
              <div className="relative group overflow-hidden border border-white/10">
                <div className="aspect-[16/10] overflow-hidden bg-black">
                  <img
                    src="/images/trans-03-experience.jpg"
                    alt="Finished Venue Exhibition Pavilion Installation at Dubai World Trade Centre"
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                </div>
                {/* Label */}
                <div className="absolute top-4 left-4 bg-copper text-white px-3 py-1 text-xs font-mono tracking-widest uppercase font-semibold shadow-sm">
                  02 // LIVE VENUE LAUNCH
                </div>
                <div className="p-4 bg-[#141414] border-t border-white/10 text-xs font-mono text-white/70">
                  Fully illuminated, seamless luxury finishing, ready for trade visitors.
                </div>
              </div>

              {/* Continuous Copper Line Connecting Both Sides (Center Marker on Desktop) */}
              <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-copper text-white items-center justify-center font-mono font-bold text-xs shadow-copper-lg">
                →
              </div>
            </div>

            {/* Bottom Transformation Summary */}
            <div className="mt-4 pt-3 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-white/50">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-copper" />
                SHARJAH WORKSHOP (AL SENAIYAT) → DUBAI WORLD TRADE CENTRE (DWTC) & ADNEC
              </span>
              <span className="text-copper font-medium">ZERO VENUE SURPRISES</span>
            </div>
          </div>

        </div>
      </section>


      {/* ==================================================
          09 — UAE PRESENCE (Minimal Local Presence)
          ================================================== */}
      <section
        id="uae-presence"
        aria-label="UAE Fabrication Presence and Location"
        className="bg-[#FAF8F5] text-charcoal pt-8 sm:pt-12 pb-6 sm:pb-8 border-b border-ivory-border relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left: Statement & Coordinates */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-3">
                <span className="w-8 h-[1.5px] bg-copper inline-block" />
                <span className="text-xs uppercase tracking-[0.25em] font-mono text-copper font-semibold">
                  BASED IN SHARJAH. BUILDING ACROSS THE UAE.
                </span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-display font-extrabold uppercase tracking-tight text-charcoal leading-[1.08]">
                STRATEGIC WORKSHOP <br />
                <span className="text-copper">NEAR MAJOR VENUES.</span>
              </h2>

              <p className="text-base sm:text-lg text-warmgrey font-light leading-relaxed max-w-xl">
                Pioneer Carpentry operates from Industrial Area 4, Al Senaiyat, Sharjah, supporting exhibition, event and custom fabrication projects across the UAE.
              </p>

              {/* Direct Venue Access Pills */}
              <div className="pt-2 space-y-2">
                <div className="text-xs font-mono uppercase tracking-wider text-copper font-bold">
                  DIRECT RAPID LOGISTICS ACCESS TO:
                </div>
                <div className="flex flex-wrap gap-2 text-xs font-mono">
                  {[
                    'Dubai World Trade Centre (DWTC) • 25 Mins',
                    'ADNEC Abu Dhabi • 75 Mins',
                    'Expo City Dubai • 35 Mins',
                    'Sharjah Expo Centre • 12 Mins',
                  ].map((venue) => (
                    <span key={venue} className="bg-white border border-ivory-border px-3 py-1.5 text-charcoal font-medium">
                      ✓ {venue}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={onOpenQuote}
                  className="bg-copper hover:bg-copper-hover text-white text-xs uppercase tracking-[0.2em] font-semibold px-8 py-4 flex items-center gap-3 transition-colors cursor-pointer shadow-copper-sm"
                >
                  <span>GET IN TOUCH</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right: Abstract UAE Coordinate & Facility Card */}
            <div className="lg:col-span-5">
              <div className="bg-charcoal text-white p-8 border border-copper/30 shadow-architectural-dark space-y-6 relative overflow-hidden">
                {/* Subtle Coordinate Lines Graphic */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-copper/10 rounded-full blur-3xl pointer-events-none" />

                <div className="flex items-center justify-between border-b border-white/10 pb-4 text-xs font-mono">
                  <span className="text-copper font-bold">FACILITY SPECIFICATION</span>
                  <span className="text-white/50">25.3223° N, 55.3853° E</span>
                </div>

                <div className="space-y-4">
                  <div className="text-xs font-mono text-copper uppercase tracking-widest">
                    PRIMARY WORKSHOP ADDRESS
                  </div>
                  <div className="text-lg font-display uppercase tracking-wider text-white leading-relaxed font-bold">
                    UNIT 01 <br />
                    INDUSTRIAL AREA 4 <br />
                    AL SENAIYAT <br />
                    AL SHARJAH <br />
                    UNITED ARAB EMIRATES
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono text-white/70">
                  <a href="tel:+971509689671" className="hover:text-copper transition-colors">
                    +971 50 9689671
                  </a>
                  <a href="mailto:info@leadevents.com" className="hover:text-copper transition-colors">
                    info@leadevents.com
                  </a>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* ==================================================
          12 — FINAL ABOUT CTA (Cinematic Closing Section)
          ================================================== */}
      <section
        id="final-cta"
        aria-label="Start Your Next Project with Pioneer Carpentry"
        className="relative bg-charcoal text-white pt-8 sm:pt-12 pb-10 sm:pb-14 overflow-hidden"
      >
        {/* Cinematic Backdrop Image with Dark Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/craft-finish-detail.jpg"
            alt="Pioneer Carpentry High-End Exhibition Craftsmanship"
            className="w-full h-full object-cover brightness-[0.35] contrast-[1.1] scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/90 to-charcoal/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-charcoal" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-3">
              <span className="w-8 h-[1.5px] bg-copper inline-block" />
              <span className="text-xs uppercase tracking-[0.25em] font-mono text-copper font-semibold">
                READY TO BUILD? // UAE ESTIMATION & PLANNING
              </span>
            </div>

            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold uppercase tracking-tight text-white leading-[1.03]">
              LET'S TURN <br />
              <span className="text-copper">THE NEXT IDEA</span> <br />
              INTO SOMETHING REAL.
            </h2>

            <p className="text-base sm:text-xl text-[#FAF8F5]/80 font-light leading-relaxed max-w-xl">
              From exhibition stands to custom event structures, Pioneer Carpentry is ready to bring the next project into production.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onOpenQuote}
                className="bg-copper hover:bg-copper-hover text-white text-xs uppercase tracking-[0.2em] font-semibold px-9 py-4 flex items-center justify-center gap-3 transition-colors cursor-pointer shadow-copper-sm"
              >
                <span>START A PROJECT</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="tel:+971509689671"
                className="border border-white/30 hover:border-copper hover:text-copper bg-black/40 text-white text-xs uppercase tracking-[0.18em] font-medium px-8 py-4 flex items-center justify-center gap-3 transition-colors cursor-pointer backdrop-blur-sm"
              >
                <Phone className="w-4 h-4 text-copper" />
                <span>+971 50 9689671</span>
              </a>
            </div>
          </div>
        </div>
      </section>

    </article>
  );
}
