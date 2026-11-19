import React from 'react';
import { Phone, Calendar, ArrowUpRight, Mail } from 'lucide-react';
import { COMPANY_INFO } from '../../data/mdtData';
import Reveal from '../Reveal';

export default function DesktopContact({ onOpenProjectDrawer }) {
  return (
    <section id="contact" className="w-full bg-[#F8F5EE] dark:bg-[#131211] py-20 sm:py-32 border-b border-[#E6DFD3] dark:border-[#242220] transition-colors">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <Reveal delay={0}>
          <p className="text-[11px] font-mono uppercase tracking-[0.22em] text-[#A0633B] dark:text-[#C98858] mb-3">
            START YOUR PROJECT
          </p>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[#191816] dark:text-[#EFECE6]">
            Let's talk about your home<span className="text-[#A0633B]">.</span>
          </h2>
        </Reveal>

        <Reveal delay={80}>
          <p className="font-sans text-base sm:text-lg text-neutral-600 dark:text-neutral-300 font-light max-w-xl mt-4 leading-relaxed">
            Whether you have approved architectural drawings or are beginning with an idea, we're here to help bring clarity and intention to your project.
          </p>
        </Reveal>

        <Reveal delay={140}>
          <div className="flex flex-wrap items-center gap-6 mt-10">
            <button
              onClick={() => onOpenProjectDrawer('Whole-Home Remodel')}
              className="px-6 py-4 bg-[#191816] hover:bg-[#A0633B] text-white dark:bg-[#EFECE6] dark:text-[#191816] dark:hover:bg-[#C98858] dark:hover:text-white text-xs font-mono uppercase tracking-wider rounded-xs transition-colors cursor-pointer flex items-center gap-2 shadow-xs"
            >
              <span>Start Your Project</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            <a
              href={COMPANY_INFO.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#191816] dark:text-[#EFECE6] hover:text-[#A0633B] dark:hover:text-[#C98858] transition-colors py-2 border-b border-[#D8D0C2] dark:border-[#2E2C28] hover:border-[#A0633B]"
            >
              <Calendar className="w-3.5 h-3.5 text-[#A0633B] dark:text-[#C98858]" />
              <span>Book a Discovery Call (Calendly) ↗</span>
            </a>

            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#191816] dark:text-[#EFECE6] hover:text-[#A0633B] dark:hover:text-[#C98858] transition-colors py-2 border-b border-[#D8D0C2] dark:border-[#2E2C28] hover:border-[#A0633B]"
            >
              <Phone className="w-3.5 h-3.5 text-[#A0633B] dark:text-[#C98858]" />
              <span>Call {COMPANY_INFO.phone}</span>
            </a>

            <a
              href={`mailto:${COMPANY_INFO.email}`}
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#191816] dark:text-[#EFECE6] hover:text-[#A0633B] dark:hover:text-[#C98858] transition-colors py-2 border-b border-[#D8D0C2] dark:border-[#2E2C28] hover:border-[#A0633B]"
            >
              <Mail className="w-3.5 h-3.5 text-[#A0633B] dark:text-[#C98858]" />
              <span>Email The Team</span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
