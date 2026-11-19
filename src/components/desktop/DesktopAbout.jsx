import React from 'react';
import MaskedReveal from '../MaskedReveal';
import { STORY } from '../../data/mdtData';

export default function DesktopAbout() {
  return (
    <section id="story" className="w-full bg-[#F8F8F8] dark:bg-[#151515] py-24 sm:py-36 border-b border-[#E2E2E2] dark:border-[#222222] transition-colors">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Team Photograph */}
          <div className="lg:col-span-5">
            <div className="relative h-[440px] sm:h-[540px] w-full rounded-xs overflow-hidden border border-[#E2E2E2] dark:border-[#222222] bg-neutral-200 dark:bg-neutral-900 shadow-sm">
              <img
                src={STORY.teamImage}
                alt="MDT Design + Build Team: Martin, Domika, Ashlee, and Alexis"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md text-white font-mono text-[10px] uppercase tracking-wider px-3.5 py-1.5 rounded-xs border border-white/15">
                EST. RIVERSIDE, CA · THE MEJIA TEAM
              </div>
            </div>
          </div>

          {/* Right Column: Narrative */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.25em] text-[#666666] dark:text-[#999999] mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#111111] dark:bg-[#FFFFFF]" />
                <span>OUR STORY</span>
              </div>
              <MaskedReveal>
                <h2 className="font-sans text-4xl sm:text-6xl font-bold tracking-tight text-[#111111] dark:text-[#FFFFFF] leading-[1.02]">
                  {STORY.tagline}
                </h2>
              </MaskedReveal>
            </div>

            <div className="space-y-4 text-base sm:text-lg text-[#555555] dark:text-[#AAAAAA] font-sans font-light leading-relaxed">
              {STORY.paragraphs.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>

            {/* Credential Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6 border-t border-[#E2E2E2] dark:border-[#222222] font-mono text-xs">
              {STORY.stats.map((s, idx) => (
                <div key={idx} className="space-y-1">
                  <span className="font-bold text-[#111111] dark:text-[#FFFFFF] block font-sans text-base">
                    {s.value}
                  </span>
                  <span className="text-[10px] uppercase text-[#777777] dark:text-[#888888]">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
