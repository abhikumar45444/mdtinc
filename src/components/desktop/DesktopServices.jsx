import React from 'react';
import Reveal from '../Reveal';
import { SERVICES } from '../../data/mdtData';

export default function DesktopServices({ onOpenServiceModal, onOpenProjectDrawer }) {
  return (
    <section className="bg-[#FFFFFF] dark:bg-[#121311] py-16 lg:py-24 border-b border-neutral-200 dark:border-neutral-800 transition-colors" id="services" aria-labelledby="services-title">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <Reveal delay={0}>
              <p className="text-[11px] font-mono uppercase tracking-[0.14em] text-neutral-500 dark:text-neutral-400">
                WHAT WE BUILD
              </p>
            </Reveal>
            <Reveal delay={80}>
              <h2
                id="services-title"
                className="text-3xl lg:text-4xl font-semibold tracking-tight text-neutral-950 dark:text-white mt-2 leading-tight"
              >
                From raw concept<br />to finished reality<span className="text-[#9E6B47]">.</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={120}>
            <p className="text-[15px] text-neutral-600 dark:text-neutral-300 leading-relaxed max-w-sm">
              We eliminate the gap between architectural plans and field construction. One contract, one dedicated team, zero finger-pointing.
            </p>
          </Reveal>
        </div>

        {/* 2-Column Clean Hairline-Bordered Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {SERVICES.map((service, index) => (
            <Reveal key={service.id} delay={index * 100} className="h-full">
              <article
                className="group cursor-pointer flex flex-col h-full text-left"
                onClick={() => onOpenServiceModal(service)}
              >
                <div className="relative w-full h-[clamp(260px,28vw,360px)] overflow-hidden bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-sm">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <span className="absolute bottom-3 left-3 bg-white/95 dark:bg-[#121311]/95 border border-neutral-200 dark:border-neutral-800 px-2.5 py-1 font-mono text-[10px] tracking-wider text-neutral-800 dark:text-neutral-200 uppercase">
                    {service.badge}
                  </span>
                </div>

                <div className="border-b border-neutral-200 dark:border-neutral-800 pt-5 pb-6 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-[0.12em] text-[#9E6B47] block mb-1">
                      {service.eyebrow}
                    </span>
                    <h3 className="text-2xl font-semibold tracking-tight text-neutral-950 dark:text-white group-hover:text-[#9E6B47] transition-colors flex items-center justify-between">
                      <span>{service.title}</span>
                      <span aria-hidden="true" className="text-xl font-normal opacity-60 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                        ↗
                      </span>
                    </h3>
                    <p className="text-[14px] text-neutral-600 dark:text-neutral-300 leading-relaxed mt-2.5">
                      {service.summary}
                    </p>
                  </div>

                  <div className="pt-4 flex items-center gap-4 text-xs font-mono text-neutral-500 dark:text-neutral-400">
                    <span>Timeline: {service.typicalTimeline}</span>
                    <span>&bull;</span>
                    <span className="text-neutral-950 dark:text-white font-medium group-hover:underline">
                      View details ↘
                    </span>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Bottom Fast Action Strip */}
        <Reveal delay={240}>
          <div className="mt-10 pt-6 border-t border-neutral-200 dark:border-neutral-800 flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
            <span className="text-neutral-500 dark:text-neutral-400">
              Already have approved city plans? We review and bid directly.
            </span>
            <button
              onClick={() => onOpenProjectDrawer('Whole-Home Remodel')}
              className="inline-flex items-center gap-2 font-sans font-semibold text-neutral-950 dark:text-white border-b border-neutral-950 dark:border-white pb-0.5 hover:text-[#9E6B47] hover:border-[#9E6B47] transition-colors cursor-pointer"
            >
              <span>Discuss your project with our builders</span>
              <span aria-hidden="true">↗</span>
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
