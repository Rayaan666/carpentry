import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowRight } from 'lucide-react';

export default function ServicesSection({ onOpenQuote, onNavigate }) {
  const [hoveredService, setHoveredService] = useState(null);

  const services = [
    {
      num: '01',
      title: 'EXHIBITION STANDS',
      target: '#service-exhibition-stands',
      desc: 'Custom-built exhibition environments engineered around your brand.',
      details: 'Turnkey exhibition stands, double-decker pavilions, hanging banners, VIP client lounges, and venue-approved structural fabrication across all major UAE exhibition venues.',
      image: '/service/1.png',
      aspect: 'md:col-span-7 aspect-[16/10]',
    },
    {
      num: '02',
      title: 'EVENTS & STAGES',
      target: '#service-custom-stages',
      desc: 'Stages, backdrops and complete structures for corporate and live events.',
      details: 'Modular speaker stages, keynote amphitheaters, geometric branded backdrops, LED video-wall support frameworks, and presidential podiums.',
      image: '/service/2.png',
      aspect: 'md:col-span-5 aspect-[4/3] md:aspect-auto',
    },
    {
      num: '03',
      title: 'BRAND ACTIVATIONS',
      target: '#service-brand-activations',
      desc: 'Immersive structures and installations designed to bring brands into the physical world.',
      details: 'Experiential experiential tunnels, interactive product launch displays, pop-up architectural pavilions, and high-impact mall activations.',
      image: '/service/5.png',
      aspect: 'md:col-span-4 aspect-[4/3]',
    },
    {
      num: '04',
      title: 'KIOSKS & DISPLAYS',
      target: '#service-kiosks-displays',
      desc: 'Custom retail kiosks, display counters and branded presentation units.',
      details: 'Luxury retail kiosks, museum vitrines, display plinths with integrated concealed LED illumination, high-gloss lacquers, and metallic edge trims.',
      image: '/service/4.png',
      aspect: 'md:col-span-4 aspect-[4/3]',
    },
    {
      num: '05',
      title: 'CUSTOM FABRICATION',
      target: '#service-custom-brief',
      desc: 'Props, furniture, decorative elements, LED cladding and purpose-built structures.',
      details: 'Bespoke sculptural joinery, 3D brand emblems, acoustic slatted paneling, metallic copper/brass finishes, and complex architectural assemblies.',
      image: '/service/9.png',
      aspect: 'md:col-span-4 aspect-[4/3]',
    },
  ];

  const handleExploreClick = () => {
    if (onNavigate) {
      onNavigate('services');
    } else {
      onOpenQuote();
    }
  };

  const handleCardClick = (item) => {
    if (onNavigate) {
      onNavigate('services', item.target);
    } else {
      onOpenQuote();
    }
  };

  return (
    <section id="services" className="bg-[#FAF8F5] text-charcoal py-8 sm:py-10 lg:py-12 border-b border-ivory-border relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 sm:mb-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="w-8 h-[1.5px] bg-copper inline-block" />
              <span className="text-xs uppercase tracking-[0.25em] font-mono text-copper font-semibold">
                CORE CAPABILITIES
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold uppercase tracking-tight text-charcoal leading-[1.05]">
              BUILT FOR <br />
              <span className="text-copper">EVERY EXPERIENCE.</span>
            </h2>
          </div>

          <p className="text-base sm:text-lg text-warmgrey font-light max-w-md leading-relaxed">
            From exhibition floors to product launches, we fabricate environments designed to perform, impress and last.
          </p>
        </div>

        {/* Editorial Asymmetric Panels Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8">
          {services.map((item, index) => {
            const isHovered = hoveredService === index;
            return (
              <div
                key={item.num}
                onMouseEnter={() => setHoveredService(index)}
                onMouseLeave={() => setHoveredService(null)}
                onClick={() => handleCardClick(item)}
                className={`${item.aspect} relative group overflow-hidden bg-charcoal cursor-pointer border border-ivory-border shadow-architectural transition-all duration-500`}
              >
                {/* Background Image with Hover Scale */}
                <div className="absolute inset-0 overflow-hidden">
                  <motion.img
                    src={item.image}
                    alt={item.title}
                    animate={{ scale: isHovered ? 1.06 : 1 }}
                    transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
                    className="w-full h-full object-cover brightness-[0.75] group-hover:brightness-[0.85] transition-all duration-500"
                  />
                  {/* Subtle Dark Gradient Overlay for Reading */}
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/95 via-charcoal/50 to-charcoal/20" />
                </div>

                {/* Oversized Number in Space Grotesk */}
                <div className="absolute top-4 sm:top-6 right-6 sm:right-8 z-10 pointer-events-none">
                  <span className="text-4xl sm:text-5xl font-mono font-bold text-white/20 group-hover:text-copper/40 transition-colors duration-300">
                    {item.num}
                  </span>
                </div>

                {/* Content Overlay at Bottom */}
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 z-10 flex flex-col justify-end">
                  {/* Category Title */}
                  <div className="flex items-center justify-between gap-4 mb-2">
                    <h3 className="text-xl sm:text-2xl font-display font-bold uppercase tracking-wide text-white group-hover:text-copper transition-colors duration-300">
                      {item.title}
                    </h3>
                    <div className="w-8 h-8 rounded-full border border-white/20 group-hover:border-copper group-hover:bg-copper flex items-center justify-center transition-all duration-300">
                      <ArrowUpRight className="w-4 h-4 text-white transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>

                  {/* Primary Description */}
                  <p className="text-sm sm:text-base text-[#FAF8F5]/80 font-light max-w-lg mb-3">
                    {item.desc}
                  </p>

                  {/* Extending Copper Technical Line on Hover */}
                  <div className="w-full h-[2px] bg-white/20 mb-3 relative overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: isHovered ? '100%' : '24px' }}
                      transition={{ duration: 0.4 }}
                      className="h-full bg-copper"
                    />
                  </div>

                  {/* Subtly Revealed Details on Hover */}
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{
                      opacity: isHovered ? 1 : 0,
                      height: isHovered ? 'auto' : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="text-xs font-mono text-white/70 tracking-wide pt-1">
                      {item.details}
                    </p>
                  </motion.div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Section Footer CTA */}
        <div className="mt-6 sm:mt-8 pt-4 border-t border-ivory-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="text-xs font-mono tracking-[0.2em] text-warmgrey uppercase">
            Specialist Joinery • Structural Steel • Turnkey Installation • UAE
          </div>
          <button
            onClick={handleExploreClick}
            className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.2em] font-semibold text-charcoal hover:text-copper transition-colors group cursor-pointer"
          >
            <span>EXPLORE ALL SERVICES</span>
            <ArrowRight className="w-4 h-4 text-copper transition-transform duration-300 group-hover:translate-x-1.5" />
          </button>
        </div>
      </div>
    </section>
  );
}
