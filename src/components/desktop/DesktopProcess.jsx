import React from 'react';
import Reveal from '../Reveal';
import { PROCESS_STEPS } from '../../data/mdtData';

export default function DesktopProcess() {
  return (
    <section id="how-it-works" className="w-full bg-[#F8F5EE] dark:bg-[#131211] py-20 sm:py-32 border-b border-[#E6DFD3] dark:border-[#242220] transition-colors">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <Reveal delay={0}>
          <div className="max-w-2xl mb-16 pb-10 border-b border-[#E6DFD3] dark:border-[#242220]">
            <p className="text-[11px] font-mono uppercase tracking-[0.22em] text-[#A0633B] dark:text-[#C98858] mb-3">
              HOW IT WORKS
            </p>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal tracking-tight text-[#191816] dark:text-[#EFECE6]">
              A clear plan changes everything<span className="text-[#A0633B]">.</span>
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {PROCESS_STEPS.map((step, idx) => (
            <Reveal key={step.step} delay={idx * 60}>
              <div className="space-y-4">
                <span className="font-mono text-xs font-semibold text-[#A0633B] dark:text-[#C98858] tracking-widest block">
                  PHASE {step.step}
                </span>
                <h3 className="font-serif text-2xl font-normal text-[#191816] dark:text-[#EFECE6]">
                  {step.title}
                </h3>
                <p className="font-sans text-sm text-neutral-600 dark:text-neutral-400 font-light leading-relaxed">
                  {step.summary}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
