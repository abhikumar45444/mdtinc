import React from 'react';
import { Phone, Calendar, ArrowUpRight, Mail } from 'lucide-react';
import { COMPANY_INFO } from '../../data/mdtData';
import MaskedReveal from '../MaskedReveal';

export default function DesktopContact({ onOpenProjectDrawer }) {
  return (
    <section id="contact" className="w-full bg-[#FFFFFF] dark:bg-[#111111] py-24 sm:py-36 border-b border-[#E2E2E2] dark:border-[#222222] transition-colors">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.25em] text-[#666666] dark:text-[#999999] mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-[#111111] dark:bg-[#FFFFFF]" />
          <span>INQUIRIES</span>
        </div>

        <MaskedReveal>
          <h2 className="font-sans text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-[#111111] dark:text-[#FFFFFF] leading-[0.96]">
            Do you have a project in mind?
          </h2>
        </MaskedReveal>

        <p className="font-sans text-base sm:text-lg text-[#555555] dark:text-[#AAAAAA] font-light max-w-lg mt-6 leading-relaxed">
          Tell us about your home. We'll review your scope and schedule a discovery call.
        </p>

        <div className="flex flex-wrap items-center gap-5 mt-10">
          <button
            type="button"
            onClick={() => onOpenProjectDrawer('Whole-Home Remodel')}
            className="group px-7 py-3.5 rounded-full bg-[#111111] dark:bg-[#FFFFFF] text-white dark:text-[#111111] text-xs font-mono uppercase tracking-wider flex items-center gap-2 cursor-pointer shadow-sm active:scale-95 transition-transform"
          >
            <span>Start Project</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>

          <a
            href={COMPANY_INFO.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-[#111111] dark:text-[#FFFFFF] hover:opacity-60 transition-opacity py-2 border-b border-[#111111] dark:border-[#FFFFFF]"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Book Discovery Call ↗</span>
          </a>

          <a
            href={`tel:${COMPANY_INFO.phoneRaw}`}
            className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-[#111111] dark:text-[#FFFFFF] hover:opacity-60 transition-opacity py-2 border-b border-[#111111] dark:border-[#FFFFFF]"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>{COMPANY_INFO.phone}</span>
          </a>

          <a
            href={`mailto:${COMPANY_INFO.email}`}
            className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-[#111111] dark:text-[#FFFFFF] hover:opacity-60 transition-opacity py-2 border-b border-[#111111] dark:border-[#FFFFFF]"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Email</span>
          </a>
        </div>
      </div>
    </section>
  );
}
