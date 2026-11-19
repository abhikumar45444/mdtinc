import React, { useState } from 'react';
import Reveal from '../Reveal';
import GalleryLightbox from '../GalleryLightbox';
import { PROJECTS } from '../../data/mdtData';

export default function DesktopProjects({ onOpenProjectDrawer }) {
  const [filter, setFilter] = useState('ALL');
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const categories = [
    { id: 'ALL', label: 'All Projects' },
    { id: 'WHOLE-HOME', label: 'Whole-Home' },
    { id: 'ADU', label: 'ADUs & Guesthouses' },
    { id: 'KITCHEN', label: 'Kitchens & Baths' },
    { id: 'ADDITION', label: 'Additions & Expansions' }
  ];

  const filteredProjects = PROJECTS.filter((item) => {
    if (filter === 'ALL') return true;
    if (filter === 'WHOLE-HOME') return item.tag.includes('WHOLE-HOME') || item.tag.includes('HISTORIC');
    if (filter === 'ADU') return item.tag.includes('ADU');
    if (filter === 'KITCHEN') return item.tag.includes('KITCHEN') || item.tag.includes('BATH');
    if (filter === 'ADDITION') return item.tag.includes('ADDITION') || item.tag.includes('OUTDOOR');
    return true;
  });

  const handleOpenPhoto = (projectItem) => {
    const originalIndex = PROJECTS.findIndex(p => p.id === projectItem.id);
    setLightboxIndex(originalIndex >= 0 ? originalIndex : 0);
    setIsLightboxOpen(true);
  };

  return (
    <section className="bg-[#FFFFFF] dark:bg-[#121311] py-16 lg:py-24 border-b border-neutral-200 dark:border-neutral-800 transition-colors" id="work" aria-labelledby="work-title">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <Reveal delay={0}>
              <p className="text-[11px] font-mono uppercase tracking-[0.14em] text-neutral-500 dark:text-neutral-400">
                PROJECT PORTFOLIO
              </p>
            </Reveal>
            <Reveal delay={80}>
              <h2
                id="work-title"
                className="text-3xl lg:text-4xl font-semibold tracking-tight text-neutral-950 dark:text-white mt-2"
              >
                Homes we’ve designed and built<span className="text-[#9E6B47]">.</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={120}>
            <button
              onClick={() => {
                setLightboxIndex(0);
                setIsLightboxOpen(true);
              }}
              className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-950 dark:text-white border-b border-neutral-950 dark:border-white pb-0.5 hover:text-[#9E6B47] hover:border-[#9E6B47] transition-colors cursor-pointer w-max"
            >
              <span>Explore full portfolio</span>
              <span aria-hidden="true">↗</span>
            </button>
          </Reveal>
        </div>

        {/* Tactile Filter Pills */}
        <Reveal delay={140}>
          <div className="flex flex-wrap gap-2 pb-8 border-b border-neutral-200 dark:border-neutral-800">
            {categories.map((cat) => {
              const active = filter === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setFilter(cat.id)}
                  className={`px-3 py-1.5 text-xs font-mono tracking-wider uppercase rounded-xs transition-colors cursor-pointer ${
                    active
                      ? 'bg-neutral-950 text-white dark:bg-white dark:text-neutral-950 border border-neutral-950 dark:border-white'
                      : 'bg-neutral-50 hover:bg-neutral-100 dark:bg-white/5 dark:hover:bg-white/10 text-neutral-600 dark:text-neutral-400 border border-neutral-200 dark:border-white/10'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* 3-Column Uniform Photo Grid with Staggered Cascading Reveals */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pt-8">
          {filteredProjects.map((item, index) => (
            <Reveal key={item.id} delay={index * 80}>
              <button
                onClick={() => handleOpenPhoto(item)}
                type="button"
                className="group relative aspect-[4/3] w-full overflow-hidden bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-sm text-left cursor-zoom-in"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500 ease-out"
                  loading="lazy"
                />

                {/* Bottom Subtle Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-4 flex flex-col justify-end text-white">
                  <span className="font-mono text-[9px] uppercase tracking-wider text-neutral-300">
                    {item.location} &bull; {item.tag}
                  </span>
                  <p className="text-xs font-semibold mt-0.5 line-clamp-1">
                    {item.title}
                  </p>
                </div>

                {/* Corner ↗ Indicator: Subtle Dark-Glass Badge */}
                <span className="absolute bottom-3 right-3 w-7 h-7 bg-black/50 backdrop-blur-sm text-white/90 border border-white/15 text-xs font-medium flex items-center justify-center rounded-xs transition-colors group-hover:bg-white group-hover:text-black group-hover:border-white">
                  ↗
                </span>
              </button>
            </Reveal>
          ))}
        </div>

        {/* Minimal Bottom Label */}
        <Reveal delay={250}>
          <div className="mt-8 pt-4 border-t border-neutral-200 dark:border-neutral-800 flex flex-wrap items-center justify-between gap-4 font-mono text-[11px] text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">
            <span>&bull; Whole-Home Remodels &bull; Permitted ADUs &bull; Additions</span>
            <span>Riverside &bull; Norco &bull; Upland &bull; Corona del Mar &bull; Orange County</span>
          </div>
        </Reveal>
      </div>

      {/* Full-Viewport Interactive Lightbox Overlay */}
      <GalleryLightbox
        isOpen={isLightboxOpen}
        onClose={() => setIsLightboxOpen(false)}
        items={PROJECTS}
        currentIndex={lightboxIndex}
        onIndexChange={(idx) => setLightboxIndex(idx)}
        onInquireProject={(preset) => onOpenProjectDrawer(preset)}
      />
    </section>
  );
}
