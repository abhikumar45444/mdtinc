import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import MaskedReveal from '../MaskedReveal';

export default function DesktopHero({ onOpenProjectDrawer }) {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="w-full bg-[#F8F8F8] dark:bg-[#111111] pt-12 sm:pt-20 pb-20 sm:pb-32 border-b border-[#E2E2E2] dark:border-[#222222] transition-colors">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Top Micro-Label Grid */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-8 mb-8 sm:mb-12 border-b border-[#E2E2E2] dark:border-[#222222]">
          <div className="flex items-center gap-2 text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.25em] text-[#666666] dark:text-[#999999]">
            <span className="w-2 h-2 rounded-full bg-[#111111] dark:bg-[#FFFFFF] animate-pulse" />
            <span>RIVERSIDE, CA · CSLB #1054266 · DESIGN + BUILD</span>
          </div>

          <div className="font-mono text-[10px] text-[#666666] dark:text-[#888888] uppercase tracking-wider">
            33.9533° N, 117.3962° W
          </div>
        </div>

        {/* High-Impact Typographic Headline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-end pb-12 sm:pb-16">
          <div className="lg:col-span-8">
            <MaskedReveal>
              <h1 className="font-sans text-5xl sm:text-7xl lg:text-[5.5rem] font-bold tracking-tight text-[#111111] dark:text-[#FFFFFF] leading-[0.96]">
                A home that feels like it was made for you.
              </h1>
            </MaskedReveal>
          </div>

          <div className="lg:col-span-4 space-y-6">
            <p className="font-sans text-base sm:text-lg text-[#555555] dark:text-[#AAAAAA] font-light leading-relaxed">
              We design around how you live, then bring every detail together to build it.
            </p>

            <div className="flex items-center gap-4 pt-2">
              <button
                type="button"
                onClick={() => onOpenProjectDrawer('Whole-Home Remodel')}
                className="group px-6 py-3.5 rounded-full bg-[#111111] dark:bg-[#FFFFFF] text-white dark:text-[#111111] text-xs font-mono uppercase tracking-wider flex items-center gap-2 cursor-pointer shadow-sm active:scale-95 transition-transform"
              >
                <span>Start Your Project</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>

              <button
                type="button"
                onClick={() => scrollTo('services')}
                className="text-xs font-mono uppercase tracking-wider text-[#111111] dark:text-[#FFFFFF] border-b border-[#111111] dark:border-[#FFFFFF] pb-0.5 hover:opacity-60 transition-opacity cursor-pointer"
              >
                Explore Services ↘
              </button>
            </div>
          </div>
        </div>

        {/* Featured Highlight Card */}
        <div className="relative w-full h-[400px] sm:h-[540px] lg:h-[620px] rounded-xs overflow-hidden border border-[#E2E2E2] dark:border-[#222222] bg-neutral-900 shadow-lg group">
          <img
            src="https://st.hzcdn.com/simgs/5941c7460920ce87_16-7704/the-bold-and-beautiful-kitchen.jpg"
            alt="MDT Design + Build Whole-Home Renovation in Upland, CA"
            className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-1000 ease-out"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20 pointer-events-none" />

          {/* Top Bar */}
          <div className="absolute top-4 inset-x-4 sm:top-6 sm:inset-x-6 flex items-center justify-between text-white font-mono text-[10px] sm:text-[11px] uppercase tracking-wider bg-black/50 backdrop-blur-md px-4 py-2.5 rounded-xs border border-white/15">
            <span>FEATURED RESIDENCE: THE BOLD &amp; THE BEAUTIFUL</span>
            <span>UPLAND, CA · 2026</span>
          </div>

          {/* Bottom Caption */}
          <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-white">
            <div className="max-w-lg">
              <span className="font-mono text-[10px] uppercase tracking-widest text-neutral-300 block mb-1">
                WHOLE-HOME REMODEL
              </span>
              <h3 className="font-sans text-2xl sm:text-3xl font-semibold tracking-tight text-white">
                Mid-century architecture reimagined for modern family life.
              </h3>
            </div>

            <button
              type="button"
              onClick={() => onOpenProjectDrawer('Whole-Home Remodel')}
              className="hidden sm:inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-white border-b border-white pb-0.5 hover:opacity-80 transition-opacity"
            >
              <span>View Project Scope ↗</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
