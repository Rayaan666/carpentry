import React from 'react';
import { ArrowUpRight, ArrowRight, Mail, Phone, MapPin, Globe } from 'lucide-react';

const InstagramIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const LinkedinIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect width="4" height="12" x="2" y="9"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

export default function Footer({ onOpenQuote, onNavigate, currentPage = 'home' }) {
  const navigationLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Capabilities', href: '#capabilities' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e, link) => {
    e.preventDefault();
    if (onNavigate) {
      if (link.name === 'About') {
        onNavigate('about');
      } else if (link.name === 'Services') {
        onNavigate('services');
      } else if (link.name === 'Home') {
        onNavigate('home');
      } else {
        onNavigate('home', link.href);
      }
    } else {
      window.location.hash = link.href;
    }
  };

  const servicesList = [
    { name: 'Exhibition Stand Fabrication', target: '#exhibitions' },
    { name: 'Event Stage Fabrication', target: '#events-stages' },
    { name: 'Brand Activations', target: '#brand-experiences' },
    { name: 'Kiosks & Displays', target: '#exhibitions' },
    { name: 'Custom Fabrication', target: '#custom-brief' },
    { name: 'Installation & Finishing', target: '#site-execution' },
  ];

  return (
    <footer id="contact" className="bg-[#FAF8F5] text-charcoal pt-8 sm:pt-10 pb-8 border-t border-ivory-border relative overflow-hidden">
      {/* Background Micro Grid */}
      <div className="absolute inset-0 bg-grid-ivory pointer-events-none opacity-40" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Top Section: Large Official Pioneer Logo & Tagline */}
        <div className="border-b border-ivory-border pb-8 sm:pb-10 mb-8 sm:mb-10">
          <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8">
            <div className="space-y-4">
              <a
                href="#hero"
                onClick={(e) => {
                  e.preventDefault();
                  if (onNavigate) onNavigate('home');
                }}
                className="inline-block group cursor-pointer"
              >
                <img
                  src="/logo.png"
                  alt="Pioneer Carpentry"
                  className="h-20 sm:h-24 lg:h-28 w-auto object-contain transition-transform duration-300 group-hover:scale-102"
                />
              </a>
              <div className="text-xs sm:text-sm font-mono tracking-[0.25em] text-copper uppercase font-semibold">
                EVENTS • EXHIBITIONS • FABRICATION
              </div>
            </div>

            <div className="max-w-md">
              <p className="text-sm text-warmgrey font-light leading-relaxed">
                Specialist UAE fabrication company taking bespoke architectural concepts and turning them into reality across the United Arab Emirates.
              </p>
            </div>
          </div>
        </div>

        {/* Middle Section: 4 Distinct Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 pb-10 border-b border-ivory-border">
          
          {/* Col 1: Navigation Links */}
          <div className="lg:col-span-3 space-y-5">
            <div className="text-xs font-mono tracking-[0.25em] text-copper uppercase font-semibold">
              NAVIGATION
            </div>
            <ul className="space-y-3">
              {navigationLinks.map((link) => {
                const isActive =
                  (link.name === 'About' && currentPage === 'about') ||
                  (link.name === 'Services' && currentPage === 'services') ||
                  (link.name === 'Home' && currentPage === 'home');
                return (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link)}
                      className={`text-sm transition-colors uppercase font-mono tracking-wider flex items-center gap-2 cursor-pointer group ${
                        isActive ? 'text-copper font-bold' : 'text-charcoal/80 hover:text-copper'
                      }`}
                    >
                      <span className={`w-1.5 h-1.5 rounded-full transition-colors ${isActive ? 'bg-copper' : 'bg-copper/40 group-hover:bg-copper'}`} />
                      <span>{link.name}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Col 2: Services */}
          <div className="lg:col-span-4 space-y-5">
            <div className="text-xs font-mono tracking-[0.25em] text-copper uppercase font-semibold">
              SPECIALIST SERVICES
            </div>
            <ul className="space-y-3">
              {servicesList.map((service) => (
                <li key={service.name}>
                  <button
                    onClick={() => {
                      if (onNavigate) {
                        onNavigate('services', service.target);
                      } else {
                        onOpenQuote();
                      }
                    }}
                    className="text-left text-sm text-charcoal/80 hover:text-copper transition-colors uppercase font-mono tracking-wider flex items-center gap-2 cursor-pointer group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-copper/40 group-hover:bg-copper transition-colors" />
                    <span>{service.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 & 4: Contact Information & Location */}
          <div className="lg:col-span-5 space-y-6">
            <div className="text-xs font-mono tracking-[0.25em] text-copper uppercase font-semibold">
              CONTACT & WORKSHOP
            </div>

            <div className="space-y-4 text-sm font-light text-charcoal/85">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-copper shrink-0" />
                <a href="mailto:Charles@pioneerexhibition.ae" className="hover:text-copper transition-colors">
                  Charles@pioneerexhibition.ae
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-copper shrink-0" />
                <a href="tel:+97165259878" className="hover:text-copper transition-colors">
                  +971 6 525 9878
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Globe className="w-4 h-4 text-copper shrink-0" />
                <a href="https://pioneerexhibition.ae" target="_blank" rel="noopener noreferrer" className="hover:text-copper transition-colors">
                  pioneerexhibition.ae
                </a>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-copper shrink-0 mt-1" />
                <div className="text-warmgrey leading-relaxed">
                  Unit 01, Industrial Area 4, <br />
                  Al Senaiyat, Al Sharjah, <br />
                  United Arab Emirates
                </div>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-6">
              <a
                href="https://maps.google.com/?q=Sharjah+Industrial+Area+4+UAE"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-mono tracking-[0.18em] uppercase text-copper font-semibold hover:underline cursor-pointer"
              >
                <span>GET DIRECTIONS</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              <div className="flex items-center gap-4 text-warmgrey">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs font-mono uppercase hover:text-copper transition-colors cursor-pointer"
                >
                  <InstagramIcon className="w-4 h-4 text-copper" />
                  <span>Instagram</span>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs font-mono uppercase hover:text-copper transition-colors cursor-pointer"
                >
                  <LinkedinIcon className="w-4 h-4 text-copper" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Legal */}
        <div className="pt-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-warmgrey">
          <div>
            © Pioneer Carpentry. All Rights Reserved.
          </div>
          <div className="flex items-center gap-6">
            <span>DESIGN → FABRICATION → BUILD → INSTALLATION</span>
            <span className="text-copper font-semibold">UAE</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
