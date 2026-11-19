import React from 'react';
import Reveal from '../Reveal';
import { COMPANY_INFO } from '../../data/mdtData';

export default function DesktopHero({ onOpenProjectDrawer, onOpenCallModal }) {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="bg-[#FFFFFF] dark:bg-[#121311] pt-12 pb-16 border-b border-neutral-200 dark:border-neutral-800 transition-colors" aria-labelledby="hero-title">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        {/* Top Tracked Micro-Label */}
        <Reveal delay={0}>
          <p className="text-[11px] font-mono uppercase tracking-[0.14em] text-neutral-500 dark:text-neutral-400">
            RIVERSIDE, CA <span className="opacity-40">/</span> CSLB #1054266 <span className="opacity-40">/</span> DESIGN + BUILD
          </p>
        </Reveal>

        {/* Hero Copy Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_auto] gap-8 items-end my-6 lg:my-8">
          <Reveal delay={80}>
            <h1
              id="hero-title"
              className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-neutral-950 dark:text-white leading-[1.08]"
            >
              A home that feels<br />like it was made for you<span className="text-[#9E6B47]">.</span>
            </h1>
          </Reveal>

          <Reveal delay={160} className="max-w-md pb-1 space-y-4">
            <p className="text-[15px] lg:text-[16px] text-neutral-600 dark:text-neutral-300 leading-relaxed">
              We design around the way you live, then bring every detail together to build it. Additions, ADUs, and whole-home remodels across the Inland Empire and Orange County.
            </p>
            <div className="flex items-center gap-6 pt-1">
              <button
                onClick={() => scrollTo('services')}
                className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-950 dark:text-white border-b border-neutral-950 dark:border-white pb-0.5 hover:text-[#9E6B47] hover:border-[#9E6B47] transition-colors cursor-pointer"
              >
                <span>Explore what we build</span>
                <span aria-hidden="true">↘</span>
              </button>

              <button
                onClick={() => onOpenProjectDrawer('Whole-Home Remodel')}
                className="text-xs font-mono text-neutral-500 hover:text-neutral-950 dark:hover:text-white transition-colors cursor-pointer"
              >
                Start an inquiry ↗
              </button>
            </div>
          </Reveal>
        </div>

        {/* Architectural Hero Image Frame with Scale Settle Reveal */}
        <Reveal delay={240}>
          <figure className="relative w-full h-[clamp(320px,40vw,540px)] overflow-hidden bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-sm group">
            <img
              src="https://st.hzcdn.com/simgs/5941c7460920ce87_14-7704/home-design.jpg"
              alt="The Bold & The Beautiful luxury whole-home renovation in Upland, CA by MDT Design + Build"
              className="w-full h-full object-cover object-[50%_45%] group-hover:scale-[1.02] transition-transform duration-700 ease-out"
              fetchPriority="high"
            />
            {/* Subtle bottom gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

            {/* Caption Pill */}
            <figcaption className="absolute bottom-3.5 left-3.5 bg-black/55 backdrop-blur-sm text-white/95 border border-white/15 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.08em] rounded-xs flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#9E6B47] animate-pulse"></span>
              <span>FEATURED PROJECT: WHOLE-HOME RENOVATION &bull; UPLAND, CA</span>
            </figcaption>
          </figure>
        </Reveal>

        {/* 3-Column Hairline Trust Strip */}
        <Reveal delay={320}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 mt-6 border-t border-neutral-200 dark:border-neutral-800 font-mono text-xs text-neutral-600 dark:text-neutral-400">
            <div>
              <span className="font-semibold text-neutral-950 dark:text-white block font-sans text-sm">
                Turnkey Design-Build
              </span>
              <p className="text-[11px] mt-0.5 leading-relaxed">
                Design and construction together from day one, balancing vision with real-world buildability.
              </p>
            </div>
            <div>
              <span className="font-semibold text-neutral-950 dark:text-white block font-sans text-sm">
                Licensed &amp; Insured
              </span>
              <p className="text-[11px] mt-0.5 leading-relaxed">
                CSLB #1054266 &bull; California General Contractor B with full liability &amp; workers' comp.
              </p>
            </div>
            <div>
              <span className="font-semibold text-neutral-950 dark:text-white block font-sans text-sm">
                Family-Owned Craftsmanship
              </span>
              <p className="text-[11px] mt-0.5 leading-relaxed">
                Hands-on project supervision on site daily by Martin Mejia and his sons.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
