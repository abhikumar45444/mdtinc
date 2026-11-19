import React from 'react';
import { SERVICES } from '../data/mdtData';

export default function ServicesScreen({ onOpenServiceModal, onOpenProjectDrawer }) {
  return (
    <div className="flex-1 overflow-y-auto pb-24 text-neutral-950 dark:text-neutral-100 bg-[#F8F7F4] dark:bg-[#121311] p-5">
      <div className="mb-6">
        <p className="text-[10px] font-mono uppercase tracking-[0.14em] text-neutral-500 dark:text-neutral-400">
          WHAT WE BUILD
        </p>
        <h1 className="text-2xl font-bold tracking-tight text-neutral-950 dark:text-white mt-1">
          Services &amp; Capabilities<span className="text-[#9E6B47]">.</span>
        </h1>
        <p className="text-xs text-neutral-600 dark:text-neutral-300 mt-1.5 leading-relaxed">
          Design, permitting, and turnkey construction delivered by one family team.
        </p>
      </div>

      <div className="space-y-4">
        {SERVICES.map((s) => (
          <div
            key={s.id}
            onClick={() => onOpenServiceModal(s)}
            className="bg-white dark:bg-[#181916] border border-neutral-200 dark:border-neutral-800 rounded-sm overflow-hidden active:scale-[0.99] transition-transform cursor-pointer"
          >
            <img
              src={s.image}
              alt={s.title}
              className="w-full h-44 object-cover"
            />
            <div className="p-4">
              <span className="text-[9px] font-mono uppercase tracking-wider text-[#9E6B47]">
                {s.badge}
              </span>
              <h2 className="text-lg font-bold text-neutral-950 dark:text-white mt-0.5">
                {s.title}
              </h2>
              <p className="text-xs text-neutral-600 dark:text-neutral-300 mt-1 leading-relaxed">
                {s.summary}
              </p>
              <div className="mt-3 pt-3 border-t border-neutral-100 dark:border-neutral-800 flex items-center justify-between font-mono text-[11px] text-neutral-500 dark:text-neutral-400">
                <span>Timeline: {s.typicalTimeline}</span>
                <span className="text-neutral-950 dark:text-white font-semibold">View Scope ↗</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
