import React from 'react';
import { Phone, Mail, Calendar } from 'lucide-react';
import { STORY, COMPANY_INFO } from '../data/mdtData';

export default function StoryScreen({ onOpenProjectDrawer, onOpenCallModal }) {
  return (
    <div className="flex-1 overflow-y-auto pb-24 text-neutral-950 dark:text-neutral-100 bg-[#F8F7F4] dark:bg-[#121311] p-5">
      <div className="mb-4">
        <p className="text-[10px] font-mono uppercase tracking-[0.14em] text-neutral-500 dark:text-neutral-400">
          OUR STORY
        </p>
        <h1 className="text-2xl font-bold tracking-tight text-neutral-950 dark:text-white mt-1">
          {STORY.headline}<span className="text-[#9E6B47]">.</span>
        </h1>
      </div>

      <div className="relative aspect-[16/10] w-full rounded-sm overflow-hidden mb-5 border border-neutral-200 dark:border-neutral-800">
        <img
          src="https://st.hzcdn.com/simgs/e8110886086b09c3_14-8183/home-design.jpg"
          alt="MDT Design + Build Craftsmanship"
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-2 left-2 bg-black/60 px-2 py-1 rounded-xs text-[10px] font-mono text-white">
          Martin Mejia &amp; The Mejia Team
        </div>
      </div>

      {/* Narrative */}
      <div className="space-y-3 text-xs leading-relaxed text-neutral-600 dark:text-neutral-300">
        {STORY.paragraphs.map((p, idx) => (
          <p key={idx}>{p}</p>
        ))}
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-2.5 my-6">
        {STORY.stats.map((s, idx) => (
          <div key={idx} className="p-3 bg-white dark:bg-[#181916] border border-neutral-200 dark:border-neutral-800 rounded-sm">
            <span className="text-lg font-bold text-[#9E6B47] block">{s.value}</span>
            <span className="text-[10px] font-mono text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">{s.label}</span>
          </div>
        ))}
      </div>

      {/* Direct Contact Options */}
      <div className="space-y-2 pt-2 border-t border-neutral-200 dark:border-neutral-800">
        <button
          onClick={() => onOpenProjectDrawer('Whole-Home Remodel')}
          className="w-full py-3 bg-neutral-950 text-white dark:bg-white dark:text-neutral-950 font-semibold text-xs rounded-xs flex items-center justify-center gap-2 cursor-pointer shadow-xs"
        >
          <span>Start Your Project Inquiry</span>
          <span>↗</span>
        </button>

        <a
          href={COMPANY_INFO.bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-3 border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#181916] text-neutral-900 dark:text-white font-semibold text-xs rounded-xs flex items-center justify-center gap-2"
        >
          <Calendar className="w-4 h-4 text-[#9E6B47]" />
          <span>Book Discovery Call on Calendly</span>
        </a>

        <a
          href={`tel:${COMPANY_INFO.phoneRaw}`}
          className="w-full py-2.5 text-center text-xs font-mono text-neutral-500 hover:text-neutral-950 dark:hover:text-white block"
        >
          Direct Line: {COMPANY_INFO.phone}
        </a>
      </div>
    </div>
  );
}
