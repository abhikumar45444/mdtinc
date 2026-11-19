import React from 'react';
import Reveal from '../Reveal';
import { PROCESS_STEPS, COMPANY_INFO } from '../../data/mdtData';

export default function DesktopProcess({ onOpenProjectDrawer }) {
  return (
    <section className="bg-[#F8F7F4] dark:bg-[#181916] py-16 lg:py-24 border-b border-neutral-200 dark:border-neutral-800 transition-colors" id="process" aria-labelledby="process-title">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left: Architectural Photo Frame */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <Reveal delay={120}>
              <figure className="relative w-full h-[clamp(320px,38vw,500px)] overflow-hidden bg-neutral-200 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-800 rounded-sm group">
                <img
                  src="https://st.hzcdn.com/simgs/7ca14abf08152aff_14-7730/design-20services.jpg"
                  alt="Interior space planning and architectural design by MDT Design + Build"
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                />
                <figcaption className="absolute bottom-3 left-3 bg-white/95 dark:bg-[#121311]/95 border border-neutral-200 dark:border-neutral-800 px-3 py-1.5 font-mono text-[10px] tracking-wider uppercase text-neutral-800 dark:text-neutral-200 rounded-xs">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#9E6B47] mr-2"></span>
                  DESIGN DOCUMENTATION &amp; 3D ELEVATIONS
                </figcaption>
              </figure>
            </Reveal>
          </div>

          {/* Right: 3-Step Clean Architectural Roadmap */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <div>
              <Reveal delay={0}>
                <p className="text-[11px] font-mono uppercase tracking-[0.14em] text-neutral-500 dark:text-neutral-400">
                  HOW IT WORKS
                </p>
              </Reveal>
              <Reveal delay={80}>
                <h2
                  id="process-title"
                  className="text-3xl lg:text-4xl font-semibold tracking-tight text-neutral-950 dark:text-white mt-2"
                >
                  A clear plan changes everything<span className="text-[#9E6B47]">.</span>
                </h2>
              </Reveal>
            </div>

            {/* Vertical Stack Separated by 1px Dividers */}
            <div className="divide-y divide-neutral-200 dark:divide-neutral-800 border-y border-neutral-200 dark:border-neutral-800">
              {PROCESS_STEPS.map((step, idx) => (
                <Reveal key={step.step} delay={100 + idx * 80}>
                  <div className="py-5">
                    <div className="flex items-baseline gap-3 mb-1.5">
                      <span className="font-mono text-xs font-bold text-[#9E6B47]">
                        {step.step}
                      </span>
                      <h3 className="text-xl font-semibold tracking-tight text-neutral-950 dark:text-white">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-[15px] text-neutral-600 dark:text-neutral-300 leading-relaxed pl-7">
                      {step.summary}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Bottom Discovery Session CTA */}
            <Reveal delay={340}>
              <div className="pt-2 flex flex-wrap items-center gap-6">
                <a
                  href={COMPANY_INFO.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-950 dark:text-white border-b border-neutral-950 dark:border-white pb-0.5 hover:text-[#9E6B47] hover:border-[#9E6B47] transition-colors cursor-pointer"
                >
                  <span>Schedule a Project Clarity Session</span>
                  <span aria-hidden="true">↗</span>
                </a>

                <button
                  onClick={() => onOpenProjectDrawer('Whole-Home Remodel')}
                  className="text-xs font-mono text-neutral-500 hover:text-neutral-950 dark:hover:text-white transition-colors cursor-pointer"
                >
                  Or submit plans online ↗
                </button>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
