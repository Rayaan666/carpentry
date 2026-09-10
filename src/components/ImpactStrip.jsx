import React from 'react';

export default function ImpactStrip() {
  const statements = [
    {
      title: 'CONCEPT TO INSTALLATION',
      render: () => (
        <span>
          CONCEPT <span className="text-copper font-mono">TO</span> INSTALLATION
        </span>
      ),
    },
    {
      title: 'CUSTOM BUILT SOLUTIONS',
      render: () => (
        <span>
          CUSTOM <span className="text-copper font-mono">BUILT</span> SOLUTIONS
        </span>
      ),
    },
    {
      title: 'UAE BASED FABRICATION',
      render: () => (
        <span>
          UAE <span className="text-copper font-mono">BASED</span> FABRICATION
        </span>
      ),
    },
    {
      title: 'EVENTS • EXHIBITIONS • ACTIVATIONS',
      render: () => (
        <span>
          EVENTS <span className="text-copper font-mono font-bold">•</span> EXHIBITIONS <span className="text-copper font-mono font-bold">•</span> ACTIVATIONS
        </span>
      ),
    },
  ];

  return (
    <section className="bg-[#0B0B0B] text-white py-10 sm:py-12 border-y border-white/10 relative overflow-hidden">
      {/* Background Micro Dots */}
      <div className="absolute inset-0 bg-dots-copper opacity-20 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-4 divide-y sm:divide-y-0 sm:divide-x divide-copper/30">
          {statements.map((stmt, idx) => (
            <div
              key={idx}
              className={`flex items-center justify-center text-center px-4 py-4 sm:py-2 ${
                idx > 0 ? 'sm:pl-6' : ''
              }`}
            >
              <div className="text-xs sm:text-sm lg:text-base font-display font-extrabold tracking-[0.14em] uppercase text-white/95 leading-relaxed">
                {stmt.render()}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
