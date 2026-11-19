import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import MaskedReveal from '../MaskedReveal';
import { SERVICES } from '../../data/mdtData';

export default function DesktopServices({ onOpenProjectDrawer }) {
  return (
    <section id="services" className="w-full bg-[#FFFFFF] dark:bg-[#111111] py-24 sm:py-36 border-b border-[#E2E2E2] dark:border-[#222222] transition-colors">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-12 sm:pb-16 border-b border-[#E2E2E2] dark:border-[#222222]">
          <div>
            <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.25em] text-[#666666] dark:text-[#999999] mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#111111] dark:bg-[#FFFFFF]" />
              <span>DISCIPLINES</span>
            </div>
            <MaskedReveal>
              <h2 className="font-sans text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#111111] dark:text-[#FFFFFF] leading-[0.98]">
                What We Build.
              </h2>
            </MaskedReveal>
          </div>

          <p className="font-sans text-sm sm:text-base text-[#666666] dark:text-[#AAAAAA] font-light max-w-xs leading-relaxed">
            Design and construction under one roof.
          </p>
        </div>

        {/* Structured 3-Column Swiss Grid (01, 02, 03) */}
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#E2E2E2] dark:divide-[#222222] border-b border-[#E2E2E2] dark:border-[#222222]">
          {SERVICES.map((srv, idx) => (
            <div
              key={srv.id}
              className={`py-10 md:py-12 flex flex-col justify-between ${
                idx === 0 ? 'md:pr-10' : idx === 1 ? 'md:px-10' : 'md:pl-10'
              }`}
            >
              <div className="space-y-6">
                <span className="font-mono text-sm font-semibold tracking-wider text-[#111111] dark:text-[#FFFFFF] block">
                  ({srv.number})
                </span>

                <div className="relative h-60 w-full overflow-hidden rounded-xs border border-[#E2E2E2] dark:border-[#222222] bg-[#F8F8F8] dark:bg-[#1A1A1A]">
                  <img
                    src={srv.image}
                    alt={srv.title}
                    className="w-full h-full object-cover hover:scale-103 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                </div>

                <div className="space-y-2">
                  <h3 className="font-sans text-2xl sm:text-3xl font-bold tracking-tight text-[#111111] dark:text-[#FFFFFF]">
                    {srv.title}
                  </h3>
                  <p className="font-mono text-[11px] uppercase tracking-wider text-[#666666] dark:text-[#999999] font-medium">
                    {srv.tagline}
                  </p>
                  <p className="font-sans text-sm text-[#555555] dark:text-[#AAAAAA] font-light leading-relaxed pt-1">
                    {srv.summary}
                  </p>
                </div>
              </div>

              <div className="pt-8">
                <button
                  type="button"
                  onClick={() => onOpenProjectDrawer(srv.title)}
                  className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#111111] dark:text-[#FFFFFF] border-b border-[#111111] dark:border-[#FFFFFF] pb-0.5 hover:opacity-60 transition-opacity cursor-pointer"
                >
                  <span>Start Inquiry</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
