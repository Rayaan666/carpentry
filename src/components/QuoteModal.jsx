import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, ArrowRight, Calendar, MapPin, Building, Phone, Mail, User } from 'lucide-react';

export default function QuoteModal({ isOpen, onClose }) {
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState('Exhibition Stand');
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    venue: 'Exhibition Hall / Trade Center',
    dates: '',
    standDimensions: '',
    details: '',
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const serviceOptions = [
    'Exhibition Stand',
    'Event Stage & Backdrop',
    'Brand Activation',
    'Kiosk & Display Counter',
    'Custom Fabrication',
    'LED Cladding / Structure',
  ];

  const venueOptions = [
    'Exhibition Hall / Trade Center',
    'Convention Center',
    'Hotel Ballroom / Private Venue',
    'Outdoor Event Arena',
    'Other UAE Location',
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setStep(1);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="relative w-full max-w-2xl bg-[#161616] border border-copper/40 text-white shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
      >
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#121212]">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-copper" />
            <span className="text-xs font-mono tracking-[0.2em] uppercase text-copper font-medium">
              PROJECT INQUIRY & QUOTE SPECIFICATION
            </span>
          </div>
          <button
            onClick={handleReset}
            className="p-1.5 text-white/70 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close quote modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 overflow-y-auto">
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-12 text-center space-y-5"
            >
              <div className="w-16 h-16 rounded-full bg-copper/20 border border-copper flex items-center justify-center mx-auto">
                <CheckCircle className="w-8 h-8 text-copper" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-display font-bold uppercase text-white">
                INQUIRY RECEIVED
              </h3>
              <p className="text-sm text-white/70 max-w-md mx-auto leading-relaxed">
                Thank you, <span className="text-white font-medium">{formData.name || 'Valued Client'}</span>. 
                Our senior fabrication estimator will review your specifications and contact you within 24 hours.
              </p>
              <div className="pt-4 border-t border-white/10 text-xs font-mono text-white/50 space-y-1">
                <div>Direct Line: <a href="tel:+97165259878" className="text-copper hover:underline">+971 6 525 9878</a></div>
                <div>Email: <a href="mailto:Charles@pioneerexhibition.ae" className="text-copper hover:underline">Charles@pioneerexhibition.ae</a></div>
              </div>
              <button
                onClick={handleReset}
                className="mt-6 bg-copper hover:bg-copper-hover text-white text-xs uppercase tracking-[0.2em] font-semibold px-8 py-3.5 transition-colors"
              >
                CLOSE
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Step 1: Select Service Category */}
              <div>
                <label className="block text-xs font-mono tracking-widest text-copper uppercase mb-3">
                  01 // SELECT PROJECT TYPE
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {serviceOptions.map((srv) => (
                    <button
                      type="button"
                      key={srv}
                      onClick={() => setSelectedService(srv)}
                      className={`text-left p-3 text-xs font-mono uppercase tracking-wider border transition-all duration-200 ${
                        selectedService === srv
                          ? 'border-copper bg-copper/15 text-white font-semibold shadow-sm'
                          : 'border-white/10 bg-[#1F1F1F] text-white/70 hover:border-white/30'
                      }`}
                    >
                      {srv}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Venue & Location */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono tracking-widest text-copper uppercase mb-2">
                    02 // TARGET VENUE / CITY
                  </label>
                  <select
                    value={formData.venue}
                    onChange={(e) => setFormData({ ...formData, venue: e.target.value })}
                    className="w-full bg-[#1F1F1F] border border-white/15 text-white text-xs p-3 font-mono focus:border-copper focus:outline-none"
                  >
                    {venueOptions.map((v) => (
                      <option key={v} value={v} className="bg-charcoal text-white">
                        {v}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono tracking-widest text-copper uppercase mb-2">
                    03 // STAND SIZE / DIMENSIONS
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 12m x 8m, Double-deck, or 60 sqm"
                    value={formData.standDimensions}
                    onChange={(e) => setFormData({ ...formData, standDimensions: e.target.value })}
                    className="w-full bg-[#1F1F1F] border border-white/15 text-white text-xs p-3 font-mono focus:border-copper focus:outline-none"
                  />
                </div>
              </div>

              {/* Step 3: Contact Details */}
              <div className="space-y-4 pt-2 border-t border-white/10">
                <label className="block text-xs font-mono tracking-widest text-copper uppercase">
                  04 // CONTACT SPECIFICATIONS
                </label>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      required
                      placeholder="Your Full Name *"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#1F1F1F] border border-white/15 text-white text-xs p-3 font-mono focus:border-copper focus:outline-none"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Company / Agency Name"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full bg-[#1F1F1F] border border-white/15 text-white text-xs p-3 font-mono focus:border-copper focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="email"
                      required
                      placeholder="Email Address (e.g. info@domain.com) *"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#1F1F1F] border border-white/15 text-white text-xs p-3 font-mono focus:border-copper focus:outline-none"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      required
                      placeholder="Phone / WhatsApp (+971 ...) *"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-[#1F1F1F] border border-white/15 text-white text-xs p-3 font-mono focus:border-copper focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <textarea
                    rows={3}
                    placeholder="Brief project details, key dates, or structural requirements..."
                    value={formData.details}
                    onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                    className="w-full bg-[#1F1F1F] border border-white/15 text-white text-xs p-3 font-mono focus:border-copper focus:outline-none resize-none"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-4 flex items-center justify-between">
                <div className="text-[10px] font-mono text-white/50">
                  * All structural inquiries kept strictly confidential
                </div>
                <button
                  type="submit"
                  className="bg-copper hover:bg-copper-hover text-white text-xs font-semibold uppercase tracking-[0.2em] px-8 py-3.5 transition-colors flex items-center gap-2 shadow-copper-sm"
                >
                  <span>SUBMIT INQUIRY</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          )}
        </div>
      </motion.div>
    </div>
  );
}
