import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ArrowRight, X, MapPin, Wrench, Layers } from 'lucide-react';

export default function FeaturedProjects({ onOpenQuote }) {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 'proj-1',
      title: 'EXHIBITION PAVILION',
      location: 'Dubai, UAE',
      service: 'Design, Fabrication & Installation',
      specs: 'Double-decker bespoke exhibition stand with curved charcoal walls, burnished copper fins, VIP lounge & ambient LED integration.',
      venue: 'Dubai World Trade Centre (DWTC)',
      year: '2026',
      image: '/images/hero-main.jpg',
      layout: 'lg:col-span-8 aspect-[16/10]',
      badge: 'FLAGSHIP EXPO',
    },
    {
      id: 'proj-2',
      title: 'IMMERSIVE BRAND ACTIVATION',
      location: 'Abu Dhabi, UAE',
      service: 'Turnkey Structural Production',
      specs: 'Cantilevered architectural copper arches, acoustic charcoal louvers, interactive digital touchpoints & illuminated floor plinths.',
      venue: 'ADNEC Convention Centre',
      year: '2026',
      image: '/images/project-brand-activation.jpg',
      layout: 'lg:col-span-4 aspect-[4/5] lg:aspect-auto',
      badge: 'EXPERIENTIAL',
    },
    {
      id: 'proj-3',
      title: 'KEYNOTE LEADERSHIP STAGE',
      location: 'Dubai, UAE',
      service: 'Stage Cladding & LED Integration',
      specs: 'Faceted geometric charcoal backdrop with flush copper reveal trims, curved LED video wall surround & presidential walnut podium.',
      venue: 'Dubai Opera / Convention Hall',
      year: '2026',
      image: '/images/project-stage-keynote.jpg',
      layout: 'lg:col-span-6 aspect-[16/10]',
      badge: 'LIVE EVENT',
    },
    {
      id: 'proj-4',
      title: 'PRECISION ARCHITECTURAL JOINERY',
      location: 'Sharjah, UAE',
      service: 'Custom Joinery & Metallic Detailing',
      specs: 'Hand-finished slatted timber wall panels, integrated concealed warm lighting, CNC milled brackets & metallic brass/copper accents.',
      venue: 'Sharjah Expo & Exhibition Center',
      year: '2026',
      image: '/images/trans-03-experience.jpg',
      layout: 'lg:col-span-6 aspect-[16/10]',
      badge: 'CRAFTSMANSHIP',
    },
    {
      id: 'proj-5',
      title: 'BESPOKE RETAIL DISPLAY & KIOSK',
      location: 'Dubai, UAE',
      service: 'High-Gloss Millwork & Display Engineering',
      specs: 'Custom-contoured counter with integrated vitrines, concealed under-counter lighting, security lockups & premium lacquered finishes.',
      venue: 'Downtown Dubai Luxury Retail',
      year: '2026',
      image: '/images/kiosk-luxury.jpg',
      layout: 'lg:col-span-12 aspect-[21/9]',
      badge: 'RETAIL ARCHITECTURE',
    },
  ];

  return (
    <section id="projects" className="bg-[#141414] text-white py-24 sm:py-32 lg:py-36 relative overflow-hidden">
      {/* Background Subtle Charcoal Technical Grid */}
      <div className="absolute inset-0 bg-grid-charcoal pointer-events-none opacity-40" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 sm:mb-20">
          <div>
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="w-8 h-[1.5px] bg-copper inline-block" />
              <span className="text-xs uppercase tracking-[0.25em] font-mono text-copper font-semibold">
                SELECTED WORK
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold uppercase tracking-tight text-white leading-[1.05]">
              BUILT TO <br />
              <span className="text-copper">BE REMEMBERED.</span>
            </h2>
          </div>

          <p className="text-base sm:text-lg text-[#FAF8F5]/70 font-light max-w-md leading-relaxed">
            Every environment is precision-engineered in our workshop and installed on venue floors across the UAE.
          </p>
        </div>

        {/* Asymmetric Editorial Portfolio Gallery */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className={`${project.layout} group relative overflow-hidden bg-[#1C1C1C] cursor-pointer border border-white/10 hover:border-copper/60 transition-all duration-500 shadow-architectural-dark`}
            >
              {/* Image Container */}
              <div className="absolute inset-0 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover brightness-[0.72] group-hover:brightness-[0.85] group-hover:scale-105 transition-all duration-700 ease-out"
                />
                {/* Contrast Vignette Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/95 via-charcoal/40 to-transparent" />
              </div>

              {/* Top Meta Bar */}
              <div className="absolute top-4 sm:top-6 inset-x-6 flex items-center justify-between z-10">
                <span className="text-[10px] font-mono tracking-[0.2em] uppercase bg-black/60 backdrop-blur-md text-copper px-3 py-1 border border-copper/30">
                  {project.badge}
                </span>
                <div className="w-8 h-8 rounded-full bg-black/60 backdrop-blur-md border border-white/20 group-hover:border-copper group-hover:bg-copper flex items-center justify-center transition-all duration-300">
                  <ArrowUpRight className="w-4 h-4 text-white group-hover:scale-110" />
                </div>
              </div>

              {/* Bottom Project Info Overlay */}
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 z-10 flex flex-col justify-end">
                <div className="space-y-2">
                  <div className="text-[11px] font-mono tracking-[0.2em] text-copper uppercase font-semibold">
                    {project.location}
                  </div>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-display font-bold uppercase tracking-tight text-white group-hover:text-copper transition-colors duration-300">
                    {project.title}
                  </h3>
                  <div className="text-xs text-white/70 font-mono tracking-wider pt-1 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-copper" />
                    <span>{project.service}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Call to Action */}
        <div className="mt-16 sm:mt-20 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <span className="text-xs font-mono text-white/50 tracking-[0.2em] uppercase">
            Turnkey Production • Rigorous Engineering • 24/7 Site Support
          </span>
          <button
            onClick={onOpenQuote}
            className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.2em] font-semibold text-white hover:text-copper transition-colors group"
          >
            <span>VIEW ALL PROJECTS</span>
            <ArrowRight className="w-4 h-4 text-copper transition-transform duration-300 group-hover:translate-x-1.5" />
          </button>
        </div>
      </div>

      {/* Project Lightbox Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-5xl bg-[#181818] border border-white/15 text-white overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
            >
              {/* Modal Top Bar */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#141414]">
                <div className="flex items-center gap-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-copper" />
                  <span className="text-xs font-mono tracking-[0.2em] uppercase text-copper font-medium">
                    PROJECT ARCHIVE // {selectedProject.year}
                  </span>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-1.5 text-white/70 hover:text-white hover:bg-white/10 transition-colors"
                  aria-label="Close project modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="overflow-y-auto p-6 sm:p-8 space-y-6">
                <div className="aspect-[16/9] w-full overflow-hidden bg-black border border-white/10">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-2">
                  <div className="md:col-span-7 space-y-3">
                    <span className="text-xs font-mono text-copper uppercase tracking-widest">
                      {selectedProject.badge}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-display font-bold uppercase text-white">
                      {selectedProject.title}
                    </h3>
                    <p className="text-sm text-white/80 font-light leading-relaxed">
                      {selectedProject.specs}
                    </p>
                  </div>

                  <div className="md:col-span-5 bg-[#202020] p-5 border border-white/5 space-y-4 text-xs font-mono">
                    <div className="flex items-center gap-3 border-b border-white/10 pb-3">
                      <MapPin className="w-4 h-4 text-copper shrink-0" />
                      <div>
                        <div className="text-white/50 text-[10px] uppercase">Location & Venue</div>
                        <div className="text-white">{selectedProject.venue}, {selectedProject.location}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 border-b border-white/10 pb-3">
                      <Wrench className="w-4 h-4 text-copper shrink-0" />
                      <div>
                        <div className="text-white/50 text-[10px] uppercase">Service Scope</div>
                        <div className="text-white">{selectedProject.service}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Layers className="w-4 h-4 text-copper shrink-0" />
                      <div>
                        <div className="text-white/50 text-[10px] uppercase">Fabrication</div>
                        <div className="text-white">Pioneer Sharjah Workshop</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="px-6 py-4 border-t border-white/10 bg-[#141414] flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-xs text-white/60 font-mono">
                  Ready to build a similar structure?
                </span>
                <button
                  onClick={() => {
                    setSelectedProject(null);
                    onOpenQuote();
                  }}
                  className="bg-copper hover:bg-copper-hover text-white text-xs font-semibold uppercase tracking-[0.2em] px-6 py-3 transition-colors flex items-center gap-2"
                >
                  <span>REQUEST ESTIMATE</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
