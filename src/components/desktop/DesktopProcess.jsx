import React from 'react';
import MaskedReveal from '../MaskedReveal';
import { PROCESS_STEPS } from '../../data/mdtData';

export default function DesktopProcess() {
  return (
    <section id="how-it-works" className="w-full bg-[#FFFFFF] dark:bg-[#111111] py-24 sm:py-36 border-b border-[#E2E2E2] dark:border-[#222222] transition-colors">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="max-w-2xl mb-16 pb-12 border-b border-[#E2E2E2] dark:border-[#222222]">
          <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.25em] text-[#666666] dark:text-[#999999] mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#111111] dark:bg-[#FFFFFF]" />
            <span>PROCESS</span>
          </div>
          <MaskedReveal>
            <h2 className="font-sans text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#111111] dark:text-[#FFFFFF] leading-[0.98]">
              A clear plan changes everything.
            </h2>
          </MaskedReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#E2E2E2] dark:divide-[#222222]">
          {PROCESS_STEPS.map((step, idx) => (
            <div
              key={step.step}
              className={`py-8 md:py-0 ${
                idx === 0 ? 'md:pr-10' : idx === 1 ? 'md:px-10' : 'md:pl-10'
              } space-y-3`}
            >
              <span className="font-mono text-sm font-semibold tracking-wider text-[#111111] dark:text-[#FFFFFF] block">
                ({step.step})
              </span>
              <h3 className="font-sans text-2xl sm:text-3xl font-bold tracking-tight text-[#111111] dark:text-[#FFFFFF]">
                {step.title}
              </h3>
              <p className="font-sans text-sm sm:text-base text-[#555555] dark:text-[#AAAAAA] font-light leading-relaxed">
                {step.summary}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
