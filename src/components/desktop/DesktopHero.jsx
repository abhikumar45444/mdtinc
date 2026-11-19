import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import Reveal from '../Reveal';

export default function DesktopHero({ onOpenProjectDrawer }) {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="w-full bg-[#F8F5EE] dark:bg-[#131211] pt-12 sm:pt-20 pb-20 sm:pb-32 border-b border-[#E6DFD3] dark:border-[#242220] transition-colors">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Editorial Headline & Narrative */}
          <div className="lg:col-span-6 space-y-8">
            <Reveal delay={0}>
              <p className="text-[11px] font-mono uppercase tracking-[0.22em] text-[#A0633B] dark:text-[#C98858]">
                RIVERSIDE, CA · CSLB #1054266 · DESIGN + BUILD
              </p>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-[#191816] dark:text-[#EFECE6] leading-[1.05]">
                A home that feels<br />
                like it was made<br />
                <span className="italic font-light">for you</span><span className="text-[#A0633B]">.</span>
              </h1>
            </Reveal>

            <Reveal delay={160}>
              <p className="font-sans text-base sm:text-lg text-neutral-600 dark:text-neutral-300 font-light leading-relaxed max-w-lg">
                We design around the way you live, then bring every detail together to build it. Additions, ADUs, and whole-home remodels across the Inland Empire and Orange County.
              </p>
            </Reveal>

            <Reveal delay={240}>
              <div className="flex flex-wrap items-center gap-6 pt-2">
                <button
                  onClick={() => onOpenProjectDrawer('Whole-Home Remodel')}
                  className="px-6 py-3.5 bg-[#191816] hover:bg-[#A0633B] text-white dark:bg-[#EFECE6] dark:text-[#191816] dark:hover:bg-[#C98858] dark:hover:text-white text-xs font-mono uppercase tracking-wider rounded-xs transition-colors cursor-pointer flex items-center gap-2 shadow-xs"
                >
                  <span>Start Your Project</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => scrollTo('services')}
                  className="text-xs font-mono uppercase tracking-wider text-neutral-700 dark:text-neutral-300 hover:text-[#A0633B] dark:hover:text-[#C98858] transition-colors cursor-pointer border-b border-neutral-400 dark:border-neutral-600 pb-0.5"
                >
                  Explore What We Build ↘
                </button>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Architectural Photography Frame */}
          <div className="lg:col-span-6">
            <Reveal delay={180}>
              <div className="relative w-full h-[420px] sm:h-[540px] lg:h-[620px] rounded-xs overflow-hidden bg-neutral-200 dark:bg-neutral-900 border border-[#E6DFD3] dark:border-[#242220] shadow-sm">
                <img
                  src="https://st.hzcdn.com/simgs/5941c7460920ce87_16-7704/the-bold-and-beautiful-kitchen.jpg"
                  alt="MDT Design + Build Whole-Home Modernization in Upland, CA"
                  className="w-full h-full object-cover"
                  fetchPriority="high"
                />
                <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-xs text-white font-mono text-[10px] uppercase tracking-wider px-3 py-1.5 rounded-xs">
                  WHOLE-HOME REMODEL · UPLAND, CA
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
