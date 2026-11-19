import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import Reveal from '../Reveal';
import { SERVICES } from '../../data/mdtData';

export default function DesktopServices({ onOpenProjectDrawer }) {
  return (
    <section id="services" className="w-full bg-[#F8F5EE] dark:bg-[#131211] py-20 sm:py-32 border-b border-[#E6DFD3] dark:border-[#242220] transition-colors">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Heading */}
        <Reveal delay={0}>
          <div className="max-w-2xl mb-16 sm:mb-24">
            <p className="text-[11px] font-mono uppercase tracking-[0.22em] text-[#A0633B] dark:text-[#C98858] mb-3">
              WHAT WE BUILD
            </p>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[#191816] dark:text-[#EFECE6] leading-tight">
              From raw concept to finished reality<span className="text-[#A0633B]">.</span>
            </h2>
            <p className="font-sans text-base sm:text-lg text-neutral-600 dark:text-neutral-400 font-light mt-4 leading-relaxed">
              Design and construction together from the beginning, balancing your vision with real-world buildability.
            </p>
          </div>
        </Reveal>

        {/* Staggered Alternating Editorial Lookbook */}
        <div className="space-y-20 sm:space-y-32">
          {SERVICES.map((srv, idx) => {
            const isEven = idx % 2 === 1;
            return (
              <Reveal key={srv.id} delay={idx * 80}>
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center ${
                  isEven ? 'lg:grid-flow-dense' : ''
                }`}>
                  {/* Photo Frame */}
                  <div className={`lg:col-span-7 ${isEven ? 'lg:col-start-6' : ''}`}>
                    <div className="relative h-[340px] sm:h-[460px] w-full rounded-xs overflow-hidden bg-neutral-200 dark:bg-neutral-900 border border-[#E6DFD3] dark:border-[#242220] group">
                      <img
                        src={srv.image}
                        alt={srv.title}
                        className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-1000 ease-out"
                        loading="lazy"
                      />
                      <div className="absolute top-4 left-4 font-mono text-[10px] uppercase text-white bg-black/60 backdrop-blur-xs px-3 py-1 rounded-xs">
                        {srv.number} · {srv.title}
                      </div>
                    </div>
                  </div>

                  {/* Narrative Frame */}
                  <div className={`lg:col-span-5 space-y-5 ${isEven ? 'lg:col-start-1' : ''}`}>
                    <span className="font-mono text-xs font-semibold text-[#A0633B] dark:text-[#C98858] tracking-widest block">
                      0{idx + 1} / 03
                    </span>
                    <h3 className="font-serif text-3xl sm:text-4xl font-normal text-[#191816] dark:text-[#EFECE6] leading-snug">
                      {srv.title}
                    </h3>
                    <p className="font-sans text-xs uppercase tracking-wider text-[#A0633B] dark:text-[#C98858] font-medium">
                      {srv.tagline}
                    </p>
                    <p className="font-sans text-sm sm:text-base text-neutral-600 dark:text-neutral-400 font-light leading-relaxed">
                      {srv.summary}
                    </p>
                    <div className="pt-2">
                      <button
                        onClick={() => onOpenProjectDrawer(srv.title)}
                        className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#191816] dark:text-[#EFECE6] hover:text-[#A0633B] dark:hover:text-[#C98858] transition-colors border-b border-neutral-400 dark:border-neutral-600 pb-0.5 cursor-pointer"
                      >
                        <span>Discuss this project</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
