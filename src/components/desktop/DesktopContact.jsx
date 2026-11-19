import React from 'react';
import { Mail, Phone, MessageSquare, Calendar } from 'lucide-react';
import { COMPANY_INFO } from '../../data/mdtData';
import Reveal from '../Reveal';

export default function DesktopContact({ onOpenProjectDrawer, onOpenCallModal }) {
  return (
    <section className="bg-[#F8F7F4] dark:bg-[#181916] py-16 lg:py-24 border-b border-neutral-200 dark:border-neutral-800 transition-colors" id="contact" aria-labelledby="contact-title">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <Reveal delay={0}>
          <p className="text-[11px] font-mono uppercase tracking-[0.14em] text-neutral-500 dark:text-neutral-400">
            START YOUR INQUIRY
          </p>
        </Reveal>

        <Reveal delay={80}>
          <h2
            id="contact-title"
            className="text-4xl lg:text-5xl font-semibold tracking-tight text-neutral-950 dark:text-white mt-3"
          >
            Let’s talk about your home<span className="text-[#9E6B47]">.</span>
          </h2>
        </Reveal>

        <Reveal delay={120}>
          <p className="text-[15px] lg:text-[16px] text-neutral-600 dark:text-neutral-300 max-w-xl mt-3 leading-relaxed">
            Whether you have approved architectural drawings or are beginning with a blank slate, the Mejia Team provides honest feasibility and construction pricing.
          </p>
        </Reveal>

        {/* Action Links Row */}
        <Reveal delay={160}>
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 mt-8">
            <button
              onClick={() => onOpenProjectDrawer('Whole-Home Remodel')}
              className="px-6 py-3.5 bg-neutral-950 hover:bg-neutral-800 text-white dark:bg-white dark:text-neutral-950 dark:hover:bg-neutral-200 text-sm font-medium tracking-wide transition-colors cursor-pointer flex items-center gap-2 rounded-xs shadow-xs"
            >
              <span>Start your project inquiry</span>
              <span aria-hidden="true">↗</span>
            </button>

            <a
              href={COMPANY_INFO.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-950 dark:text-white border-b border-neutral-950 dark:border-white pb-0.5 hover:text-[#9E6B47] hover:border-[#9E6B47] transition-colors"
            >
              <Calendar className="w-4 h-4 text-[#9E6B47]" />
              <span>Book Discovery Call (Calendly) ↗</span>
            </a>

            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-950 dark:text-white border-b border-neutral-950 dark:border-white pb-0.5 hover:text-[#9E6B47] hover:border-[#9E6B47] transition-colors"
            >
              <Phone className="w-4 h-4 text-[#9E6B47]" />
              <span>Call {COMPANY_INFO.phone}</span>
            </a>

            <a
              href={`sms:${COMPANY_INFO.phoneRaw}?body=Hi%20Mejia%20Team!%20I%20have%20a%20project%20question%20for%20MDT%20Design%20%2B%20Build.`}
              className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-950 dark:text-white border-b border-neutral-950 dark:border-white pb-0.5 hover:text-[#9E6B47] hover:border-[#9E6B47] transition-colors"
            >
              <MessageSquare className="w-4 h-4 text-[#9E6B47]" />
              <span>Text photos or plans ↗</span>
            </a>

            <a
              href={`mailto:${COMPANY_INFO.email}`}
              className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-950 dark:text-white border-b border-neutral-950 dark:border-white pb-0.5 hover:text-[#9E6B47] hover:border-[#9E6B47] transition-colors"
            >
              <Mail className="w-4 h-4 text-[#9E6B47]" />
              <span>Email The Mejia Team</span>
            </a>
          </div>
        </Reveal>

        {/* Clean Service Area Strip */}
        <Reveal delay={240}>
          <div className="border-t border-neutral-200 dark:border-neutral-800 pt-6 mt-12 flex flex-wrap items-center justify-between gap-4 font-mono text-[11px] text-neutral-500 dark:text-neutral-400">
            <span className="uppercase tracking-wider">Service Regions:</span>
            <span>Riverside &bull; Norco &bull; Corona &bull; Murrieta &bull; Upland &bull; Corona del Mar &bull; Orange County</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
