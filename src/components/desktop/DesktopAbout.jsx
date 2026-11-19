import React from 'react';
import Reveal from '../Reveal';
import { STORY, COMPANY_INFO } from '../../data/mdtData';

export default function DesktopAbout({ onOpenProjectDrawer, onOpenCallModal }) {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="bg-[#F8F7F4] dark:bg-[#181916] py-16 lg:py-24 border-b border-neutral-200 dark:border-neutral-800 transition-colors" id="story" aria-labelledby="story-title">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left: Craftsmanship Photo */}
          <div className="lg:col-span-5">
            <Reveal delay={120}>
              <figure className="relative w-full h-[clamp(320px,36vw,480px)] overflow-hidden bg-neutral-200 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-800 rounded-sm group">
                <img
                  src="https://st.hzcdn.com/simgs/e8110886086b09c3_14-8183/home-design.jpg"
                  alt="MDT Design + Build craftsmanship and historic home restoration in Riverside, CA"
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <figcaption className="absolute bottom-3 left-3 bg-white/95 dark:bg-[#121311]/95 border border-neutral-200 dark:border-neutral-800 px-3 py-1.5 font-mono text-[10px] uppercase tracking-wider text-neutral-800 dark:text-neutral-200 rounded-xs">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#9E6B47] mr-2"></span>
                  FOUNDER: MARTIN MEJIA &amp; THE MEJIA TEAM
                </figcaption>
              </figure>
            </Reveal>
          </div>

          {/* Right: Editorial Story */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <Reveal delay={0}>
                <p className="text-[11px] font-mono uppercase tracking-[0.14em] text-neutral-500 dark:text-neutral-400">
                  OUR STORY
                </p>
              </Reveal>
              <Reveal delay={80}>
                <h2
                  id="story-title"
                  className="text-3xl lg:text-4xl font-semibold tracking-tight text-neutral-950 dark:text-white mt-2"
                >
                  {STORY.headline}<span className="text-[#9E6B47]">.</span>
                </h2>
              </Reveal>
            </div>

            <Reveal delay={140} className="space-y-3.5 text-[15px] text-neutral-600 dark:text-neutral-300 leading-relaxed">
              {STORY.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </Reveal>

            {/* Clean Monospace Metric Strip */}
            <Reveal delay={200}>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 border-y border-neutral-200 dark:border-neutral-800 py-4 font-mono text-xs text-neutral-950 dark:text-white">
                {STORY.stats.map((s, idx) => (
                  <div key={idx}>
                    <span className="text-xl sm:text-2xl font-semibold block text-[#9E6B47]">
                      {s.value}
                    </span>
                    <span className="text-neutral-500 dark:text-neutral-400 text-[10px] uppercase tracking-wider">
                      {s.label}
                    </span>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={260}>
              <div className="pt-1 flex flex-wrap items-center gap-6">
                <button
                  onClick={() => scrollTo('contact')}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-950 dark:text-white border-b border-neutral-950 dark:border-white pb-0.5 hover:text-[#9E6B47] hover:border-[#9E6B47] transition-colors cursor-pointer"
                >
                  <span>Connect with our builders</span>
                  <span aria-hidden="true">↘</span>
                </button>
                <button
                  onClick={onOpenCallModal}
                  className="font-mono text-xs text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white transition-colors cursor-pointer"
                >
                  Call office: {COMPANY_INFO.phone}
                </button>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
