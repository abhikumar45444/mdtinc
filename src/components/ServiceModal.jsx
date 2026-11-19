import React from 'react';
import { X, CheckCircle2, Phone, Calendar, Clock, DollarSign, Shield } from 'lucide-react';
import { COMPANY_INFO } from '../data/mdtData';

export default function ServiceModal({
  service,
  onClose,
  onOpenProjectDrawer,
  onOpenCallModal
}) {
  if (!service) return null;

  const handleInquire = () => {
    onClose();
    if (onOpenProjectDrawer) {
      onOpenProjectDrawer(service.title);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-end md:items-center justify-center bg-black/50 dark:bg-black/80 backdrop-blur-xs transition-opacity duration-200 p-0 md:p-6"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="service-modal-title"
    >
      <div className="absolute inset-0" />

      {/* Architectural Modal Card */}
      <div
        className="relative w-full md:max-w-2xl bg-white dark:bg-[#121316] rounded-t-xl md:rounded-sm border-t md:border border-neutral-200 dark:border-white/10 shadow-2xl max-h-[90vh] md:max-h-[85vh] flex flex-col overflow-hidden z-10 animate-fade-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Mobile Grab Handle */}
        <div className="md:hidden flex justify-center pt-2.5 pb-1">
          <div className="w-10 h-1 bg-neutral-300 dark:bg-neutral-700 rounded-full" />
        </div>

        {/* Hero Photo Frame with Architectural Caption */}
        <div className="relative h-44 md:h-52 w-full bg-neutral-900 shrink-0 overflow-hidden">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent pointer-events-none" />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 p-2 rounded-xs bg-black/60 hover:bg-black/90 text-white backdrop-blur-sm border border-white/20 transition-all cursor-pointer z-10"
            aria-label="Close details"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Title & Micro-Tag */}
          <div className="absolute bottom-4 left-5 right-5 text-white">
            <span className="inline-block px-2 py-0.5 rounded-xs text-[10px] font-mono tracking-wider uppercase bg-white/95 text-neutral-950 dark:bg-white/15 dark:text-white border border-white/20 mb-2">
              {service.badge}
            </span>
            <h2
              id="service-modal-title"
              className="font-serif text-2xl md:text-3xl font-normal tracking-tight text-white leading-tight"
            >
              {service.title}<span className="text-[#9E6B47]">.</span>
            </h2>
          </div>
        </div>

        {/* Scrollable Details Body */}
        <div className="flex-1 overflow-y-auto p-5 md:p-6 space-y-5 text-neutral-950 dark:text-white">
          {/* Metrics Hairline Strip */}
          <div className="grid grid-cols-2 gap-3 text-xs font-mono">
            <div className="p-3 rounded-xs bg-neutral-50 dark:bg-white/5 border border-neutral-200 dark:border-white/10">
              <div className="flex items-center gap-1.5 text-neutral-500 dark:text-neutral-400 text-[10px] uppercase tracking-wider mb-1">
                <Clock className="w-3.5 h-3.5 text-[#9E6B47]" />
                <span>Typical Timeline</span>
              </div>
              <p className="font-semibold text-sm font-sans text-neutral-950 dark:text-white">
                {service.typicalTimeline}
              </p>
            </div>

            <div className="p-3 rounded-xs bg-neutral-50 dark:bg-white/5 border border-neutral-200 dark:border-white/10">
              <div className="flex items-center gap-1.5 text-neutral-500 dark:text-neutral-400 text-[10px] uppercase tracking-wider mb-1">
                <DollarSign className="w-3.5 h-3.5 text-[#9E6B47]" />
                <span>Investment Approach</span>
              </div>
              <p className="font-semibold text-sm font-sans text-neutral-950 dark:text-white">
                {service.investmentRange}
              </p>
            </div>
          </div>

          {/* Overview */}
          <div>
            <h3 className="text-[11px] font-mono uppercase tracking-[0.14em] text-neutral-500 dark:text-neutral-400 mb-1.5">
              Service Scope
            </h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
              {service.overview}
            </p>
          </div>

          {/* Deliverables Checklist */}
          {service.deliverables && (
            <div>
              <h3 className="text-[11px] font-mono uppercase tracking-[0.14em] text-neutral-500 dark:text-neutral-400 mb-2">
                What We Deliver
              </h3>
              <div className="space-y-2">
                {service.deliverables.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs md:text-[13px] text-neutral-700 dark:text-neutral-300">
                    <CheckCircle2 className="w-4 h-4 text-[#9E6B47] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Trust Guarantee */}
          <div className="p-3.5 rounded-xs bg-neutral-50 dark:bg-white/5 border border-neutral-200 dark:border-white/10 flex items-center gap-3 font-mono text-xs text-neutral-700 dark:text-neutral-300">
            <Shield className="w-4 h-4 text-[#9E6B47] shrink-0" />
            <div>
              <span className="font-semibold text-neutral-950 dark:text-white block font-sans">
                Turnkey Design-Build Accountability
              </span>
              <span className="text-[11px] text-neutral-500 dark:text-neutral-400">
                {COMPANY_INFO.license} &bull; Architecturally drawn and built by one dedicated family team.
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Actions */}
        <div className="p-4 md:px-6 md:py-4 bg-white dark:bg-[#121316] border-t border-neutral-200 dark:border-white/10 shrink-0 flex items-center justify-between gap-3">
          <button
            onClick={handleInquire}
            className="flex-1 py-3 px-4 rounded-xs bg-neutral-950 hover:bg-neutral-800 text-white dark:bg-white dark:text-neutral-950 dark:hover:bg-neutral-200 font-semibold text-xs tracking-wide flex items-center justify-center gap-2 transition-colors cursor-pointer"
          >
            <span>Inquire About {service.title}</span>
            <span aria-hidden="true">↗</span>
          </button>

          <button
            onClick={() => {
              onClose();
              if (onOpenCallModal) onOpenCallModal();
            }}
            className="py-3 px-4 rounded-xs border border-neutral-200 dark:border-white/15 hover:bg-neutral-100 dark:hover:bg-white/5 text-neutral-950 dark:text-white font-semibold text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
          >
            <Phone className="w-3.5 h-3.5 text-[#9E6B47]" />
            <span>Call MDT</span>
          </button>
        </div>
      </div>
    </div>
  );
}
