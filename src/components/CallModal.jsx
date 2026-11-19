import React, { useState } from 'react';
import { Phone, MessageSquare, Copy, Check, X, Calendar, Clock } from 'lucide-react';
import { COMPANY_INFO } from '../data/mdtData';

export default function CallModal({ isOpen, onClose }) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard?.writeText(COMPANY_INFO.phone);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/50 dark:bg-black/80 backdrop-blur-xs p-0 sm:p-4 transition-opacity"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="call-modal-title"
    >
      <div className="absolute inset-0" />

      {/* Architectural Dialog Card */}
      <div
        className="relative w-full sm:max-w-md bg-white dark:bg-[#121316] rounded-t-xl sm:rounded-sm border-t sm:border border-neutral-200 dark:border-white/10 shadow-2xl p-6 overflow-hidden z-10 animate-fade-in text-neutral-950 dark:text-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Mobile Grab Handle */}
        <div className="sm:hidden flex justify-center pb-3">
          <div className="w-10 h-1 bg-neutral-300 dark:bg-neutral-700 rounded-full" />
        </div>

        {/* Header */}
        <div className="flex items-start justify-between pb-4 border-b border-neutral-200 dark:border-white/10">
          <div>
            <p className="text-[11px] font-mono uppercase tracking-[0.14em] text-neutral-500 dark:text-neutral-400">
              DIRECT LINE / THE MEJIA TEAM
            </p>
            <h3
              id="call-modal-title"
              className="font-serif text-2xl font-normal tracking-tight text-neutral-950 dark:text-white mt-1"
            >
              Call MDT Design + Build<span className="text-[#9E6B47]">.</span>
            </h3>
            <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">
              Riverside Headquarters &bull; CSLB #1054266
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 -mr-1.5 text-neutral-400 hover:text-neutral-950 dark:hover:text-white transition-colors cursor-pointer rounded-xs"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Discovery Call Note */}
        <div className="my-4 p-3.5 rounded-xs bg-neutral-50 dark:bg-white/5 border border-neutral-200 dark:border-white/10 flex items-start gap-3">
          <Clock className="w-4 h-4 text-[#9E6B47] shrink-0 mt-0.5" />
          <div className="text-xs text-neutral-700 dark:text-neutral-300 leading-relaxed font-sans">
            <span className="font-semibold text-neutral-950 dark:text-white">Project Clarity Sessions:</span> We evaluate architectural plans, municipal zoning setbacks, and construction budgets across Riverside &amp; Orange County.
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-2.5 mt-4">
          {/* Direct Phone Call */}
          <a
            href={`tel:${COMPANY_INFO.phoneRaw}`}
            className="w-full flex items-center justify-between p-3.5 rounded-xs bg-neutral-950 hover:bg-neutral-800 text-white dark:bg-white dark:text-neutral-950 dark:hover:bg-neutral-200 font-semibold text-xs tracking-wide transition-colors cursor-pointer"
          >
            <div className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-[#9E6B47]" />
              <span>Call The Mejia Team Directly</span>
            </div>
            <span className="font-mono text-xs opacity-80">
              {COMPANY_INFO.phone} ↗
            </span>
          </a>

          {/* Book on Calendly */}
          <a
            href={COMPANY_INFO.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-between p-3.5 rounded-xs bg-neutral-50 hover:bg-neutral-100 dark:bg-white/5 dark:hover:bg-white/10 text-neutral-950 dark:text-white border border-neutral-200 dark:border-white/10 font-semibold text-xs tracking-wide transition-colors cursor-pointer"
          >
            <div className="flex items-center gap-2.5">
              <Calendar className="w-4 h-4 text-[#9E6B47]" />
              <span>Schedule 15-Min Discovery Call</span>
            </div>
            <span className="font-mono text-[11px] text-neutral-500 dark:text-neutral-400">
              Calendly ↗
            </span>
          </a>

          {/* Text Message / SMS */}
          <a
            href={`sms:${COMPANY_INFO.phoneRaw}?body=Hi%20MDT%20Team!%20I%20would%20like%20to%20discuss%20a%20home%20renovation%20or%20ADU%20project.`}
            className="w-full flex items-center justify-between p-3 rounded-xs border border-neutral-200 dark:border-white/15 hover:bg-neutral-50 dark:hover:bg-white/5 text-neutral-900 dark:text-white font-semibold text-xs transition-colors cursor-pointer"
          >
            <div className="flex items-center gap-2.5">
              <MessageSquare className="w-4 h-4 text-[#9E6B47]" />
              <span>Text Photos or Plan Sets</span>
            </div>
            <span className="font-mono text-[11px] text-neutral-500 dark:text-neutral-400">
              SMS ↗
            </span>
          </a>

          {/* Copy Number */}
          <button
            onClick={handleCopy}
            className="w-full flex items-center justify-center gap-2 p-2.5 rounded-xs border border-dashed border-neutral-300 dark:border-white/20 hover:border-neutral-950 dark:hover:border-white text-neutral-600 dark:text-neutral-300 font-mono text-xs transition-colors cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-[#9E6B47]" />
                <span className="text-neutral-950 dark:text-white font-sans font-semibold">
                  Copied {COMPANY_INFO.phone} to clipboard!
                </span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-neutral-400" />
                <span>Copy Phone Number ({COMPANY_INFO.phone})</span>
              </>
            )}
          </button>
        </div>

        {/* Operating Hours */}
        <p className="font-mono text-[10px] text-center text-neutral-400 dark:text-neutral-500 mt-4">
          Hours: {COMPANY_INFO.hours} &bull; Riverside &amp; Orange County
        </p>
      </div>
    </div>
  );
}
