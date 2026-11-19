import React from 'react';
import Reveal from '../Reveal';
import { STORY } from '../../data/mdtData';

export default function DesktopAbout() {
  return (
    <section id="story" className="w-full bg-[#F8F5EE] dark:bg-[#131211] py-20 sm:py-32 border-b border-[#E6DFD3] dark:border-[#242220] transition-colors">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Team Photo */}
          <div className="lg:col-span-5">
            <Reveal delay={100}>
              <div className="relative h-[420px] sm:h-[520px] w-full rounded-xs overflow-hidden bg-neutral-200 dark:bg-neutral-900 border border-[#E6DFD3] dark:border-[#242220] shadow-sm">
                <img
                  src={STORY.teamImage}
                  alt="MDT Design + Build Team: Martin, Domika, Ashlee, and Alexis"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-xs text-white font-mono text-[10px] uppercase tracking-wider px-3 py-1.5 rounded-xs">
                  FOUNDED IN RIVERSIDE, CA
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Narrative */}
          <div className="lg:col-span-7 space-y-8">
            <Reveal delay={0}>
              <p className="text-[11px] font-mono uppercase tracking-[0.22em] text-[#A0633B] dark:text-[#C98858] mb-3">
                OUR STORY
              </p>
              <h2 className="font-serif text-3xl sm:text-5xl font-normal tracking-tight text-[#191816] dark:text-[#EFECE6] leading-[1.12]">
                {STORY.tagline}
              </h2>
            </Reveal>

            <Reveal delay={100} className="space-y-4 text-sm sm:text-base text-neutral-600 dark:text-neutral-300 font-sans font-light leading-relaxed">
              {STORY.paragraphs.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </Reveal>

            {/* Credential Grid */}
            <Reveal delay={200}>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6 border-t border-[#E6DFD3] dark:border-[#242220] font-mono text-xs">
                {STORY.stats.map((s, idx) => (
                  <div key={idx} className="space-y-1">
                    <span className="font-semibold text-[#191816] dark:text-[#EFECE6] block font-sans text-sm">
                      {s.value}
                    </span>
                    <span className="text-[10px] uppercase text-neutral-500 dark:text-neutral-400">
                      {s.label}
                    </span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
