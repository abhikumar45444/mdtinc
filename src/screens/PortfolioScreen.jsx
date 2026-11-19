import React, { useState } from 'react';
import { PROJECTS } from '../data/mdtData';
import GalleryLightbox from '../components/GalleryLightbox';

export default function PortfolioScreen({ onOpenProjectDrawer }) {
  const [filter, setFilter] = useState('ALL');
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const categories = [
    { id: 'ALL', label: 'All' },
    { id: 'WHOLE-HOME', label: 'Whole-Home' },
    { id: 'ADU', label: 'ADUs' },
    { id: 'KITCHEN', label: 'Kitchen & Bath' },
    { id: 'ADDITION', label: 'Additions' }
  ];

  const filtered = PROJECTS.filter((item) => {
    if (filter === 'ALL') return true;
    if (filter === 'WHOLE-HOME') return item.tag.includes('WHOLE-HOME') || item.tag.includes('HISTORIC');
    if (filter === 'ADU') return item.tag.includes('ADU');
    if (filter === 'KITCHEN') return item.tag.includes('KITCHEN') || item.tag.includes('BATH');
    if (filter === 'ADDITION') return item.tag.includes('ADDITION') || item.tag.includes('OUTDOOR');
    return true;
  });

  const openLightbox = (proj) => {
    const idx = PROJECTS.findIndex(p => p.id === proj.id);
    setLightboxIndex(idx >= 0 ? idx : 0);
    setIsLightboxOpen(true);
  };

  return (
    <div className="flex-1 overflow-y-auto pb-24 text-neutral-950 dark:text-neutral-100 bg-[#F8F7F4] dark:bg-[#121311] p-5">
      <div className="mb-4">
        <p className="text-[10px] font-mono uppercase tracking-[0.14em] text-neutral-500 dark:text-neutral-400">
          OUR WORK
        </p>
        <h1 className="text-2xl font-bold tracking-tight text-neutral-950 dark:text-white mt-1">
          Project Portfolio<span className="text-[#9E6B47]">.</span>
        </h1>
      </div>

      {/* Filter Tabs */}
      <div className="flex gap-1.5 overflow-x-auto pb-3 mb-4 hide-scrollbar">
        {categories.map((c) => (
          <button
            key={c.id}
            onClick={() => setFilter(c.id)}
            className={`px-3 py-1 text-xs font-mono rounded-xs whitespace-nowrap transition-colors ${
              filter === c.id
                ? 'bg-neutral-950 text-white dark:bg-white dark:text-neutral-950 font-semibold'
                : 'bg-white dark:bg-[#181916] text-neutral-600 dark:text-neutral-400 border border-neutral-200 dark:border-neutral-800'
            }`}
          >
            {c.label}
          </button>
        ))}
      </div>

      {/* Project Grid */}
      <div className="space-y-4">
        {filtered.map((p) => (
          <div
            key={p.id}
            onClick={() => openLightbox(p)}
            className="bg-white dark:bg-[#181916] border border-neutral-200 dark:border-neutral-800 rounded-sm overflow-hidden active:scale-[0.99] transition-transform cursor-pointer"
          >
            <div className="relative aspect-[16/10] w-full">
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <span className="absolute bottom-2 right-2 px-2 py-1 bg-black/60 backdrop-blur-xs text-white text-[10px] font-mono rounded-xs">
                ↗ Details
              </span>
            </div>
            <div className="p-3.5">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#9E6B47]">
                {p.location} &bull; {p.tag}
              </span>
              <h3 className="text-base font-semibold text-neutral-950 dark:text-white mt-0.5">
                {p.title}
              </h3>
              <p className="text-xs text-neutral-600 dark:text-neutral-300 mt-1 line-clamp-2 leading-relaxed">
                {p.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <GalleryLightbox
        isOpen={isLightboxOpen}
        onClose={() => setIsLightboxOpen(false)}
        items={PROJECTS}
        currentIndex={lightboxIndex}
        onIndexChange={(idx) => setLightboxIndex(idx)}
        onInquireProject={(preset) => onOpenProjectDrawer(preset)}
      />
    </div>
  );
}
