import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  ArrowDown,
  ArrowUpRight,
  Phone,
  Mail,
  MapPin,
  X,
  CheckCircle2,
} from 'lucide-react';


const WhatsAppIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.694.065-2.227-.565-1.956-.807-3.21-2.822-3.308-2.952-.097-.13-1.07-1.423-1.07-2.714 0-1.292.673-1.926.912-2.186.239-.261.522-.326.696-.326.174 0 .348.002.5.01.161.008.377-.061.59.45.22.528.75 1.83.815 1.963.065.13.109.283.022.456-.087.173-.13.281-.26.434-.13.151-.274.338-.391.454-.13.13-.265.27-.114.53.151.26.671 1.107 1.439 1.792.988.88 1.821 1.152 2.081 1.282.26.13.413.109.565-.065.152-.174.652-.761.826-1.021.174-.26.348-.217.587-.13.239.087 1.522.717 1.783.847.26.13.435.195.5.304.065.109.065.63-.079 1.035z" />
  </svg>
);

export default function ContactPage({ onNavigate }) {
  // 02 — Project Types
  const projectTypes = [
    { num: '01', title: 'EXHIBITION STAND', val: 'Exhibition Stand' },
    { num: '02', title: 'EVENT / STAGE', val: 'Custom Stage' },
    { num: '03', title: 'KIOSK / DISPLAY', val: 'Kiosk / Display Counter' },
    { num: '04', title: 'BRAND ACTIVATION', val: 'Brand Activation' },
    { num: '05', title: 'CUSTOM FABRICATION', val: 'Custom Props' },
    { num: '06', title: 'FURNITURE / JOINERY', val: 'Custom Furniture' },
    { num: '07', title: 'INSTALLATION', val: 'Installation & Finishing' },
    { num: '08', title: 'OTHER', val: 'Other' },
  ];

  // Dropdown options for form
  const formProjectOptions = [
    'Exhibition Stand',
    'Custom Stage',
    'Event Backdrop',
    'Kiosk / Display Counter',
    'Brand Activation',
    'Corporate Event',
    'Conference / Seminar Stage',
    'Product Launch',
    'Custom Props',
    'LED Screen Structure / Cladding',
    'Truss / Lighting Support',
    'Custom Furniture',
    'Installation & Finishing',
    'Other',
  ];

  // Form State
  const [selectedTypeIndex, setSelectedTypeIndex] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    projectType: 'Exhibition Stand',
    venue: '',
    projectDate: '',
    approximateSize: '',
    details: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState(null);


  // Handle Project Type Selection from Section 02
  const handleSelectProjectType = (type, index) => {
    setSelectedTypeIndex(index);
    setFormData((prev) => ({ ...prev, projectType: type.val }));
    // Smoothly scroll to the brief form
    const briefSection = document.getElementById('project-brief');
    if (briefSection) {
      briefSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Scroll Helpers
  const scrollToEntry = () => {
    const el = document.getElementById('project-entry');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    const formSection = document.getElementById('project-brief');
    if (formSection) formSection.scrollIntoView({ behavior: 'smooth' });
  };

  // LocalBusiness Schema with strictly verified details
  const verifiedSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Pioneer Carpentry',
    telephone: '+971 6 525 9878',
    email: 'Charles@Pioneerexhibition.ae',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Warehouse 1, Sheikh Khalifa Bin Zayed Al Nahyan Rd, Industrial Area 4',
      addressLocality: 'Al Sharjah',
      addressRegion: 'Sharjah',
      addressCountry: 'AE',
    },
  };

  return (
    <div className="bg-[#FAF8F5] text-charcoal font-sans selection:bg-copper selection:text-white">
      {/* Verified LocalBusiness Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(verifiedSchema) }}
      />

      {/* =========================================================
          01 — CONTACT HERO (Warm Ivory Background, 75–85vh)
          ========================================================= */}
      <section
        id="contact-hero"
        aria-label="Start a Fabrication Project with Pioneer Carpentry"
        className="relative min-h-[78vh] lg:min-h-[85vh] flex flex-col justify-between pt-32 pb-16 lg:pt-36 lg:pb-20 border-b border-ivory-border overflow-hidden"
      >
        {/* Subtle Architectural Grid Background */}
        <div className="absolute inset-0 bg-grid-ivory pointer-events-none opacity-40" />

        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full flex-1 flex flex-col justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* LEFT COLUMN: Huge Architectural Typography */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8">
              {/* Small Copper Eyebrow */}
              <div className="inline-flex items-center gap-3">
                <span className="w-8 h-[1.5px] bg-copper inline-block" />
                <span className="text-xs uppercase tracking-[0.25em] font-mono text-copper font-semibold">
                  START A PROJECT // UAE
                </span>
              </div>

              {/* Sole H1 on the page */}
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.4rem] font-display font-black uppercase tracking-tight text-charcoal leading-[0.96]">
                LET'S BUILD <br />
                SOMETHING <br />
                <span className="text-copper">REAL.</span>
              </h1>

              {/* Supporting copy */}
              <p className="text-base sm:text-lg lg:text-xl text-warmgrey font-light leading-relaxed max-w-xl">
                Planning an exhibition stand, event environment, branded installation or custom fabrication project? Share the brief with Pioneer and start the conversation.
              </p>

              {/* Actions: Primary CTA & Secondary Contact */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-5 sm:gap-6">
                <button
                  type="button"
                  onClick={scrollToEntry}
                  className="px-9 py-4 bg-copper hover:bg-copper-hover text-white text-xs uppercase tracking-[0.2em] font-semibold flex items-center justify-center gap-3 transition-all duration-300 shadow-copper-sm hover:shadow-copper-lg group cursor-pointer"
                >
                  <span>START YOUR BRIEF ↓</span>
                </button>

                <a
                  href="tel:+97165259878"
                  className="inline-flex items-center gap-3 text-xs sm:text-sm font-mono tracking-wider text-charcoal hover:text-copper transition-colors py-2"
                >
                  <span className="w-2 h-2 rounded-full bg-copper animate-pulse" />
                  <span className="font-semibold">+971 6 525 9878</span>
                </a>
              </div>
            </div>

            {/* RIGHT COLUMN: Realistic Fabrication Planning Table Visual */}
            <div className="lg:col-span-5">
              <div className="relative group">
                {/* Architectural Frame with Technical Border */}
                <div className="relative bg-white border border-ivory-border p-3 sm:p-4 shadow-architectural">
                  {/* Technical Spec Header Tag */}
                  <div className="flex items-center justify-between border-b border-ivory-border pb-3 mb-3 text-[10px] font-mono tracking-widest text-warmgrey uppercase">
                    <span className="text-copper font-semibold">STAGE 00 // INTAKE</span>
                    <span>BRIEF SPECIFICATION</span>
                  </div>

                  {/* Photograph Window */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-[#1E1E1E]">
                    <img
                      src="/images/contact-planning-desk.jpg"
                      alt="Pioneer Carpentry fabrication planning table with architectural drawings, blueprints, timber samples and measuring tools"
                      className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-103"
                    />

                    {/* Subtle Technical Corner Ticks */}
                    <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-copper" />
                    <div className="absolute top-2 right-2 w-3 h-3 border-t border-r border-copper" />
                    <div className="absolute bottom-2 left-2 w-3 h-3 border-b border-l border-copper" />
                    <div className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-copper" />
                  </div>

                  {/* Caption */}
                  <div className="pt-3 flex items-center justify-between text-[11px] font-mono text-warmgrey">
                    <span>DRAWINGS • MATERIAL SAMPLES • TIMBER PROFILES</span>
                    <span className="text-copper font-medium">SHARJAH</span>
                  </div>
                </div>

                {/* Decorative Technical Linework Backdrop */}
                <div className="absolute -bottom-3 -right-3 w-full h-full border border-copper/30 -z-10 pointer-events-none" />
              </div>
            </div>

          </div>
        </div>

        {/* Subtle Technical Copper Linework connecting to Enquiry */}
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full pt-8 sm:pt-12">
          <div className="w-full h-[1px] bg-ivory-border relative overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: 'easeInOut' }}
              className="h-full bg-copper/60"
            />
          </div>
        </div>
      </section>


      {/* =========================================================
          02 — PROJECT ENTRY (Selection Rows)
          ========================================================= */}
      <section
        id="project-entry"
        aria-label="Select Project Type"
        className="bg-[#FAF8F5] py-14 sm:py-20 border-b border-ivory-border"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* Section Header */}
          <div className="mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-3 mb-3">
              <span className="w-6 h-[1.5px] bg-copper inline-block" />
              <span className="text-xs uppercase tracking-[0.25em] font-mono text-copper font-semibold">
                WHAT ARE WE BUILDING?
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold uppercase tracking-tight text-charcoal leading-[1.02]">
              START WITH <br />
              <span className="text-copper">THE PROJECT.</span>
            </h2>
          </div>

          {/* 8 Large Typographic Selection Rows */}
          <div className="border-t border-ivory-border divide-y divide-ivory-border">
            {projectTypes.map((type, idx) => {
              const isSelected = selectedTypeIndex === idx;
              return (
                <button
                  type="button"
                  key={type.num}
                  onClick={() => handleSelectProjectType(type, idx)}
                  className={`w-full py-5 sm:py-6 px-4 sm:px-6 flex items-center justify-between text-left transition-all duration-300 group cursor-pointer relative ${
                    isSelected
                      ? 'bg-copper/10 text-charcoal'
                      : 'hover:bg-white text-charcoal/80 hover:text-charcoal'
                  }`}
                >
                  {/* Left Indicator Line on Selected */}
                  {isSelected && (
                    <motion.div
                      layoutId="selectedProjectIndicator"
                      className="absolute left-0 top-0 bottom-0 w-1.5 bg-copper"
                    />
                  )}

                  {/* Number and Title */}
                  <div className="flex items-center gap-6 sm:gap-10">
                    <span
                      className={`text-sm sm:text-base font-mono font-bold transition-colors ${
                        isSelected ? 'text-copper' : 'text-warmgrey group-hover:text-copper'
                      }`}
                    >
                      {type.num}
                    </span>
                    <span
                      className={`text-xl sm:text-3xl lg:text-4xl font-display font-bold uppercase tracking-wide transition-colors ${
                        isSelected ? 'text-copper' : 'group-hover:text-copper'
                      }`}
                    >
                      {type.title}
                    </span>
                  </div>

                  {/* Right Arrow */}
                  <div className="flex items-center gap-3">
                    <span className="hidden sm:inline-block text-xs font-mono tracking-widest text-warmgrey uppercase group-hover:text-copper transition-colors">
                      {isSelected ? 'SELECTED // PROCEED BELOW' : 'SELECT'}
                    </span>
                    <div
                      className={`w-9 h-9 border rounded-none flex items-center justify-center transition-all duration-300 ${
                        isSelected
                          ? 'border-copper bg-copper text-white'
                          : 'border-ivory-border bg-white text-charcoal group-hover:border-copper group-hover:text-copper'
                      }`}
                    >
                      <ArrowRight
                        className={`w-4 h-4 transition-transform duration-300 ${
                          isSelected ? 'translate-x-1' : 'group-hover:translate-x-1'
                        }`}
                      />
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="mt-6 text-xs font-mono text-warmgrey tracking-wider">
            * Selecting a project type automatically populates your brief specification below.
          </div>
        </div>
      </section>


      {/* =========================================================
          03 — THE PROJECT BRIEF (Main Section, Dark Charcoal)
          ========================================================= */}
      <section
        id="project-brief"
        aria-label="Submit Project Brief"
        className="bg-[#141414] text-white py-16 sm:py-24 border-b border-white/10 relative overflow-hidden"
      >
        {/* Architectural Grid Background */}
        <div className="absolute inset-0 bg-grid-charcoal pointer-events-none opacity-30" />

        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* LEFT SIDE: Sticky Content */}
            <div className="lg:col-span-5">
              <div className="lg:sticky lg:top-32 space-y-8">
                <div>
                  <div className="inline-flex items-center gap-3 mb-4">
                    <span className="w-8 h-[1.5px] bg-copper inline-block" />
                    <span className="text-xs uppercase tracking-[0.25em] font-mono text-copper font-semibold">
                      YOUR BRIEF
                    </span>
                  </div>

                  <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold uppercase tracking-tight text-white leading-[1.02] mb-6">
                    TELL US <br />
                    WHAT NEEDS <br />
                    <span className="text-copper">TO BE BUILT.</span>
                  </h2>

                  <p className="text-base text-white/70 font-light leading-relaxed mb-8">
                    You don't need to have every detail finalized. Send us what you have — a concept, drawing, dimensions, reference or simply the project idea.
                  </p>
                </div>

                {/* Technical Prompts with Small Copper Marks (NO Generic Icons) */}
                <div className="space-y-4 pt-6 border-t border-white/10">
                  <div className="flex items-start gap-4">
                    <span className="w-2 h-2 rounded-none bg-copper mt-1.5 shrink-0" />
                    <div>
                      <div className="text-sm font-mono uppercase tracking-wider font-semibold text-white">
                        HAVE DRAWINGS? UPLOAD THEM.
                      </div>
                      <p className="text-xs text-white/50 font-light pt-0.5">
                        PDFs, CAD blueprints, 3D renders, or hand sketches are welcome.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="w-2 h-2 rounded-none bg-copper mt-1.5 shrink-0" />
                    <div>
                      <div className="text-sm font-mono uppercase tracking-wider font-semibold text-white">
                        HAVE A DEADLINE? TELL US.
                      </div>
                      <p className="text-xs text-white/50 font-light pt-0.5">
                        Event dates, staging windows, or trade show exhibition setup days.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="w-2 h-2 rounded-none bg-copper mt-1.5 shrink-0" />
                    <div>
                      <div className="text-sm font-mono uppercase tracking-wider font-semibold text-white">
                        HAVE A VENUE? ADD IT.
                      </div>
                      <p className="text-xs text-white/50 font-light pt-0.5">
                        Exhibition centers, event ballrooms, mall atriums, or outdoor arenas across the UAE.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Direct Line Note */}
                <div className="pt-6 border-t border-white/10 text-xs font-mono text-white/60 space-y-2">
                  <div className="text-copper uppercase tracking-wider font-medium">
                    DIRECT FABRICATION ESTIMATION
                  </div>
                  <div>Phone: <a href="tel:+97165259878" className="text-white hover:text-copper transition-colors">+971 6 525 9878</a></div>
                  <div>Email: <a href="mailto:Charles@Pioneerexhibition.ae" className="text-white hover:text-copper transition-colors">Charles@Pioneerexhibition.ae</a></div>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE: Minimal Architectural Form */}
            <div className="lg:col-span-7">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-[#1C1C1C] border border-copper p-8 sm:p-12 text-white space-y-6"
                >
                  <div className="w-14 h-14 border border-copper bg-copper/10 flex items-center justify-center">
                    <Check className="w-7 h-7 text-copper" />
                  </div>

                  <div className="space-y-2">
                    <span className="text-xs font-mono tracking-widest text-copper uppercase font-semibold">
                      BRIEF RECEIVED // SPECIFICATION RECORDED
                    </span>
                    <h3 className="text-3xl sm:text-4xl font-display font-bold uppercase text-white">
                      THANK YOU, {formData.name.toUpperCase() || 'CLIENT'}.
                    </h3>
                    <p className="text-sm text-white/80 font-light leading-relaxed">
                      Your project brief for <span className="text-copper font-medium">{formData.projectType}</span> has been routed to our Sharjah workshop engineering and estimating team.
                    </p>
                  </div>

                  <div className="border-t border-white/10 pt-6 space-y-3 text-xs font-mono text-white/70">
                    <div className="flex justify-between py-1 border-b border-white/5">
                      <span className="text-white/40">PROJECT TYPE:</span>
                      <span className="text-white">{formData.projectType}</span>
                    </div>
                    {formData.venue && (
                      <div className="flex justify-between py-1 border-b border-white/5">
                        <span className="text-white/40">VENUE / LOCATION:</span>
                        <span className="text-white">{formData.venue}</span>
                      </div>
                    )}
                    {formData.approximateSize && (
                      <div className="flex justify-between py-1 border-b border-white/5">
                        <span className="text-white/40">SIZE:</span>
                        <span className="text-white">{formData.approximateSize}</span>
                      </div>
                    )}
                  </div>

                  <div className="pt-4 flex flex-col sm:flex-row gap-4">
                    <button
                      type="button"
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({
                          name: '',
                          company: '',
                          email: '',
                          phone: '',
                          projectType: 'Exhibition Stand',
                          venue: '',
                          projectDate: '',
                          approximateSize: '',
                          details: '',
                        });
                      }}
                      className="px-8 py-3.5 bg-copper hover:bg-copper-hover text-white text-xs uppercase tracking-[0.2em] font-semibold transition-colors cursor-pointer"
                    >
                      SEND ANOTHER BRIEF
                    </button>
                    <a
                      href="tel:+97165259878"
                      className="px-8 py-3.5 border border-white/20 hover:border-copper text-white text-xs uppercase tracking-[0.2em] font-semibold transition-colors flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span>CALL WORKSHOP</span>
                      <Phone className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8 bg-[#181818] border border-white/10 p-6 sm:p-10">
                  
                  {/* Form Header Spec */}
                  <div className="border-b border-white/10 pb-4 flex items-center justify-between text-[11px] font-mono tracking-widest text-white/50 uppercase">
                    <span>PROJECT BRIEF SPECIFICATION</span>
                    <span className="text-copper font-medium">* REQUIRED FIELDS</span>
                  </div>

                  {/* Name & Company */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {/* YOUR NAME */}
                    <div className="relative">
                      <label className="block text-[11px] font-mono tracking-[0.2em] uppercase text-white/70 mb-2">
                        YOUR NAME *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        onFocus={() => setFocusedField('name')}
                        onBlur={() => setFocusedField(null)}
                        className="w-full bg-transparent border-b border-white/20 text-white font-sans text-sm sm:text-base py-2 focus:outline-none focus:border-copper transition-colors rounded-none placeholder-white/20"
                        placeholder="e.g. Tariq Al Mansoori"
                      />
                      <div
                        className={`h-[1.5px] bg-copper absolute bottom-0 left-0 transition-all duration-300 ${
                          focusedField === 'name' ? 'w-full' : 'w-0'
                        }`}
                      />
                    </div>

                    {/* COMPANY NAME */}
                    <div className="relative">
                      <label className="block text-[11px] font-mono tracking-[0.2em] uppercase text-white/70 mb-2">
                        COMPANY NAME
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        onFocus={() => setFocusedField('company')}
                        onBlur={() => setFocusedField(null)}
                        className="w-full bg-transparent border-b border-white/20 text-white font-sans text-sm sm:text-base py-2 focus:outline-none focus:border-copper transition-colors rounded-none placeholder-white/20"
                        placeholder="Agency / Brand / Enterprise"
                      />
                      <div
                        className={`h-[1.5px] bg-copper absolute bottom-0 left-0 transition-all duration-300 ${
                          focusedField === 'company' ? 'w-full' : 'w-0'
                        }`}
                      />
                    </div>
                  </div>

                  {/* Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {/* EMAIL ADDRESS */}
                    <div className="relative">
                      <label className="block text-[11px] font-mono tracking-[0.2em] uppercase text-white/70 mb-2">
                        EMAIL ADDRESS *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        onFocus={() => setFocusedField('email')}
                        onBlur={() => setFocusedField(null)}
                        className="w-full bg-transparent border-b border-white/20 text-white font-sans text-sm sm:text-base py-2 focus:outline-none focus:border-copper transition-colors rounded-none placeholder-white/20"
                        placeholder="name@company.com"
                      />
                      <div
                        className={`h-[1.5px] bg-copper absolute bottom-0 left-0 transition-all duration-300 ${
                          focusedField === 'email' ? 'w-full' : 'w-0'
                        }`}
                      />
                    </div>

                    {/* PHONE NUMBER */}
                    <div className="relative">
                      <label className="block text-[11px] font-mono tracking-[0.2em] uppercase text-white/70 mb-2">
                        PHONE NUMBER *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        onFocus={() => setFocusedField('phone')}
                        onBlur={() => setFocusedField(null)}
                        className="w-full bg-transparent border-b border-white/20 text-white font-sans text-sm sm:text-base py-2 focus:outline-none focus:border-copper transition-colors rounded-none placeholder-white/20"
                        placeholder="+971 50 000 0000"
                      />
                      <div
                        className={`h-[1.5px] bg-copper absolute bottom-0 left-0 transition-all duration-300 ${
                          focusedField === 'phone' ? 'w-full' : 'w-0'
                        }`}
                      />
                    </div>
                  </div>

                  {/* PROJECT TYPE DROPDOWN */}
                  <div className="relative">
                    <label className="block text-[11px] font-mono tracking-[0.2em] uppercase text-white/70 mb-2">
                      PROJECT TYPE *
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      onFocus={() => setFocusedField('projectType')}
                      onBlur={() => setFocusedField(null)}
                      className="w-full bg-[#1F1F1F] border-b border-white/20 text-white font-mono text-xs sm:text-sm py-3 px-2 focus:outline-none focus:border-copper transition-colors rounded-none cursor-pointer"
                    >
                      {formProjectOptions.map((opt) => (
                        <option key={opt} value={opt} className="bg-[#141414] text-white">
                          {opt}
                        </option>
                      ))}
                    </select>
                    <div
                      className={`h-[1.5px] bg-copper absolute bottom-0 left-0 transition-all duration-300 ${
                        focusedField === 'projectType' ? 'w-full' : 'w-0'
                      }`}
                    />
                  </div>

                  {/* Venue, Date, Size */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
                    {/* PROJECT LOCATION / VENUE */}
                    <div className="relative sm:col-span-1">
                      <label className="block text-[11px] font-mono tracking-[0.2em] uppercase text-white/70 mb-2">
                        VENUE / LOCATION
                      </label>
                      <input
                        type="text"
                        value={formData.venue}
                        onChange={(e) => setFormData({ ...formData, venue: e.target.value })}
                        onFocus={() => setFocusedField('venue')}
                        onBlur={() => setFocusedField(null)}
                        className="w-full bg-transparent border-b border-white/20 text-white font-sans text-xs sm:text-sm py-2 focus:outline-none focus:border-copper transition-colors rounded-none placeholder-white/20"
                        placeholder="Dubai, Abu Dhabi, Sharjah..."
                      />
                      <div
                        className={`h-[1.5px] bg-copper absolute bottom-0 left-0 transition-all duration-300 ${
                          focusedField === 'venue' ? 'w-full' : 'w-0'
                        }`}
                      />
                    </div>

                    {/* PROJECT DATE */}
                    <div className="relative sm:col-span-1">
                      <label className="block text-[11px] font-mono tracking-[0.2em] uppercase text-white/70 mb-2">
                        PROJECT DATE
                      </label>
                      <input
                        type="text"
                        value={formData.projectDate}
                        onChange={(e) => setFormData({ ...formData, projectDate: e.target.value })}
                        onFocus={() => setFocusedField('projectDate')}
                        onBlur={() => setFocusedField(null)}
                        className="w-full bg-transparent border-b border-white/20 text-white font-sans text-xs sm:text-sm py-2 focus:outline-none focus:border-copper transition-colors rounded-none placeholder-white/20"
                        placeholder="e.g. Q4 2026 or Event Date"
                      />
                      <div
                        className={`h-[1.5px] bg-copper absolute bottom-0 left-0 transition-all duration-300 ${
                          focusedField === 'projectDate' ? 'w-full' : 'w-0'
                        }`}
                      />
                    </div>

                    {/* APPROXIMATE SIZE */}
                    <div className="relative sm:col-span-1">
                      <label className="block text-[11px] font-mono tracking-[0.2em] uppercase text-white/70 mb-2">
                        APPROXIMATE SIZE
                      </label>
                      <input
                        type="text"
                        value={formData.approximateSize}
                        onChange={(e) => setFormData({ ...formData, approximateSize: e.target.value })}
                        onFocus={() => setFocusedField('approximateSize')}
                        onBlur={() => setFocusedField(null)}
                        className="w-full bg-transparent border-b border-white/20 text-white font-sans text-xs sm:text-sm py-2 focus:outline-none focus:border-copper transition-colors rounded-none placeholder-white/20"
                        placeholder="e.g. 6m × 8m or 50 sqm"
                      />
                      <div
                        className={`h-[1.5px] bg-copper absolute bottom-0 left-0 transition-all duration-300 ${
                          focusedField === 'approximateSize' ? 'w-full' : 'w-0'
                        }`}
                      />
                    </div>
                  </div>

                  {/* TELL US ABOUT THE PROJECT */}
                  <div className="relative">
                    <label className="block text-[11px] font-mono tracking-[0.2em] uppercase text-white/70 mb-2">
                      TELL US ABOUT THE PROJECT *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.details}
                      onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                      onFocus={() => setFocusedField('details')}
                      onBlur={() => setFocusedField(null)}
                      className="w-full bg-transparent border-b border-white/20 text-white font-sans text-sm sm:text-base py-2 focus:outline-none focus:border-copper transition-colors rounded-none placeholder-white/20 resize-none"
                      placeholder="Share the concept, requirements, dimensions or anything we should know..."
                    />
                    <div
                      className={`h-[1.5px] bg-copper absolute bottom-0 left-0 transition-all duration-300 ${
                        focusedField === 'details' ? 'w-full' : 'w-0'
                      }`}
                    />
                  </div>

                  {/* Submit Action */}
                  <div className="pt-4 border-t border-white/10 space-y-4">
                    <button
                      type="submit"
                      className="w-full sm:w-auto px-10 py-4 bg-copper hover:bg-copper-hover text-white text-xs uppercase tracking-[0.2em] font-semibold transition-all duration-300 shadow-copper-sm hover:shadow-copper-lg flex items-center justify-center gap-3 cursor-pointer"
                    >
                      <span>SEND PROJECT BRIEF →</span>
                    </button>

                    <div className="text-xs font-mono text-white/60 pt-2">
                      Prefer a quick conversation?{' '}
                      <a href="tel:+97165259878" className="text-copper hover:underline font-semibold">
                        CALL +971 6 525 9878
                      </a>{' '}
                      or{' '}
                      <a href="mailto:Charles@Pioneerexhibition.ae" className="text-copper hover:underline font-semibold">
                        EMAIL Charles@Pioneerexhibition.ae
                      </a>
                    </div>
                  </div>

                </form>
              )}
            </div>

          </div>
        </div>
      </section>


      {/* =========================================================
          04 — WHAT HAPPENS NEXT? (Warm Ivory, Progressive Line)
          ========================================================= */}
      <section
        aria-label="What Happens Next"
        className="bg-[#FAF8F5] pt-10 pb-16 sm:pt-12 sm:pb-20 border-b border-ivory-border"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          
          <div className="max-w-3xl mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-3 mb-3">
              <span className="w-8 h-[1.5px] bg-copper inline-block" />
              <span className="text-xs uppercase tracking-[0.25em] font-mono text-copper font-semibold">
                AFTER YOU HIT SEND
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold uppercase tracking-tight text-charcoal leading-[1.02]">
              FROM ENQUIRY <br />
              <span className="text-copper">TO WORKSHOP.</span>
            </h2>
          </div>

          {/* Continuous Progressive Line & 4 Steps */}
          <div className="relative">
            {/* Horizontal Line on Desktop */}
            <div className="hidden md:block absolute top-7 left-0 right-0 h-[2px] bg-ivory-border z-0">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                viewport={{ once: true }}
                transition={{ duration: 1.6, ease: 'easeInOut' }}
                className="h-full bg-copper"
              />
            </div>

            {/* Vertical Line on Mobile */}
            <div className="md:hidden absolute top-0 bottom-0 left-6 w-[2px] bg-ivory-border z-0">
              <div className="h-full w-full bg-copper" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8 relative z-10">
              {[
                {
                  num: '01',
                  title: 'BRIEF RECEIVED',
                  desc: 'We review the project requirements.',
                },
                {
                  num: '02',
                  title: 'REQUIREMENTS REVIEW',
                  desc: 'Scope, dimensions, venue and technical requirements are clarified.',
                },
                {
                  num: '03',
                  title: 'FABRICATION APPROACH',
                  desc: 'Production requirements and execution approach are established.',
                },
                {
                  num: '04',
                  title: 'PROJECT COORDINATION',
                  desc: 'The next steps are coordinated directly with the client.',
                },
              ].map((step, idx) => (
                <div key={step.num} className="flex md:flex-col items-start gap-5 md:gap-4">
                  {/* Step Badge */}
                  <div className="w-12 h-12 md:w-14 md:h-14 border border-copper bg-white flex items-center justify-center font-mono font-bold text-sm md:text-base text-copper shadow-sm shrink-0">
                    {step.num}
                  </div>

                  <div className="space-y-1.5">
                    <h3 className="text-base sm:text-lg font-display font-bold uppercase tracking-wider text-charcoal">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-warmgrey font-light leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>


      {/* =========================================================
          05 — DIRECT CONTACT (Dark Charcoal, 3 Huge Typographic Rows)
          ========================================================= */}
      <section
        aria-label="Direct Contact Details"
        className="bg-[#141414] text-white py-16 sm:py-24 border-b border-white/10"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          
          <div className="border-b border-white/10 pb-6 mb-8 sm:mb-12 flex items-center justify-between">
            <span className="text-xs uppercase tracking-[0.25em] font-mono text-copper font-semibold">
              DIRECT CHANNELS // SHARJAH WORKSHOP
            </span>
            <span className="text-xs font-mono text-white/40 hidden sm:inline-block">
              UAE FABRICATION CONTRACTOR
            </span>
          </div>

          <div className="divide-y divide-white/10">
            
            {/* ROW 01 / CALL */}
            <a
              href="tel:+97165259878"
              className="py-8 sm:py-12 flex flex-col md:flex-row md:items-center justify-between gap-4 group transition-colors hover:bg-white/[0.02] cursor-pointer"
            >
              <div className="flex items-baseline gap-4 sm:gap-8">
                <span className="text-xs sm:text-sm font-mono text-copper font-bold tracking-widest">
                  01 / CALL
                </span>
                <span className="text-2xl sm:text-4xl lg:text-5xl font-display font-bold tracking-tight text-white group-hover:text-copper transition-colors">
                  +971 6 525 9878
                </span>
              </div>
              <div className="flex items-center gap-3 text-white/50 group-hover:text-copper transition-colors">
                <span className="text-xs font-mono tracking-widest uppercase">DIRECT WORKSHOP LINE</span>
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" />
              </div>
            </a>

            {/* ROW 02 / EMAIL */}
            <a
              href="mailto:Charles@Pioneerexhibition.ae"
              className="py-8 sm:py-12 flex flex-col md:flex-row md:items-center justify-between gap-4 group transition-colors hover:bg-white/[0.02] cursor-pointer"
            >
              <div className="flex items-baseline gap-4 sm:gap-8">
                <span className="text-xs sm:text-sm font-mono text-copper font-bold tracking-widest">
                  02 / EMAIL
                </span>
                <span className="text-2xl sm:text-4xl lg:text-5xl font-display font-bold tracking-tight text-white group-hover:text-copper transition-colors truncate">
                  Charles@Pioneerexhibition.ae
                </span>
              </div>
              <div className="flex items-center gap-3 text-white/50 group-hover:text-copper transition-colors">
                <span className="text-xs font-mono tracking-widest uppercase">DRAWINGS & BRIEFS</span>
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" />
              </div>
            </a>

            {/* ROW 03 / VISIT */}
            <div className="py-8 sm:py-12 flex flex-col md:flex-row md:items-center justify-between gap-4 group">
              <div className="flex flex-col sm:flex-row sm:items-baseline gap-3 sm:gap-8">
                <span className="text-xs sm:text-sm font-mono text-copper font-bold tracking-widest">
                  03 / VISIT
                </span>
                <span className="text-lg sm:text-2xl lg:text-3xl font-display font-bold tracking-wide text-white leading-relaxed">
                  Warehouse 1, Sheikh Khalifa Bin Zayed Al Nahyan Rd, Industrial Area 4, Sharjah, UAE
                </span>
              </div>
              <a
                href="https://maps.google.com/?q=Warehouse+1+Sheikh+Khalifa+Bin+Zayed+Al+Nahyan+Rd+Industrial+Area+4+Sharjah+UAE"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/50 hover:text-copper transition-colors cursor-pointer"
              >
                <span className="text-xs font-mono tracking-widest uppercase">GOOGLE MAPS</span>
                <ArrowUpRight className="w-5 h-5" />
              </a>
            </div>

          </div>

        </div>
      </section>


      {/* =========================================================
          08 — WHATSAPP CONTACT (Warm Ivory, Pioneer Branded)
          ========================================================= */}
      <section
        aria-label="Direct WhatsApp Conversation"
        className="bg-[#FAF8F5] py-14 sm:py-20 border-b border-ivory-border"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="bg-white border border-ivory-border p-8 sm:p-12 lg:p-14 shadow-architectural flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            
            <div className="max-w-xl space-y-3">
              <div className="inline-flex items-center gap-3">
                <WhatsAppIcon className="w-4 h-4 text-copper" />
                <span className="text-xs uppercase tracking-[0.25em] font-mono text-copper font-semibold">
                  INSTANT MESSAGING
                </span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-display font-extrabold uppercase tracking-tight text-charcoal leading-[1.08]">
                NEED TO SHARE <br />
                SOMETHING QUICKLY?
              </h2>

              <p className="text-sm sm:text-base text-warmgrey font-light leading-relaxed">
                Send project references, drawings or initial requirements directly to the Pioneer team.
              </p>
            </div>

            <div className="shrink-0">
              <a
                href="https://wa.me/97165259878?text=Hello%20Pioneer%20Carpentry%2C%20I%20would%20like%20to%20discuss%20a%20fabrication%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-copper hover:bg-copper-hover text-white text-xs uppercase tracking-[0.2em] font-semibold transition-all duration-300 shadow-copper-sm hover:shadow-copper-lg inline-flex items-center gap-3 cursor-pointer"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>MESSAGE ON WHATSAPP ↗</span>
              </a>
              <div className="text-[11px] font-mono text-warmgrey pt-2 text-center lg:text-left">
                +971 6 525 9878
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
