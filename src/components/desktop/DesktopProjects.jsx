import React, { useState } from 'react';
import Reveal from '../Reveal';
import { PROJECTS } from '../../data/mdtData';
import GalleryLightbox from '../GalleryLightbox';

export default function DesktopProjects({ onOpenProjectDrawer }) {
  const [selectedTag, setSelectedTag] = useState('ALL');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);

  const tags = [
    { id: 'ALL', label: 'All Projects' },
    { id: 'WHOLE-HOME', label: 'Whole-Home' },
    { id: 'ADU', label: 'ADUs' },
    { id: 'KITCHEN', label: 'Kitchens' },
    { id: 'BATH', label: 'Baths' }
  ];

  const filteredProjects = PROJECTS.filter((p) => {
    if (selectedTag === 'ALL') return true;
    return p.tag === selectedTag;
  });

  const openLightbox = (project) => {
    const idx = PROJECTS.findIndex(p => p.id === project.id);
    setActiveProjectIndex(idx !== -1 ? idx : 0);
    setLightboxOpen(true);
  };

  return (
    <section id="work" className="w-full bg-[#F8F5EE] dark:bg-[#131211] py-20 sm:py-32 border-b border-[#E6DFD3] dark:border-[#242220] transition-colors">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <Reveal delay={0}>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-12 border-b border-[#E6DFD3] dark:border-[#242220]">
            <div>
              <p className="text-[11px] font-mono uppercase tracking-[0.22em] text-[#A0633B] dark:text-[#C98858] mb-3">
                PORTFOLIO
              </p>
              <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[#191816] dark:text-[#EFECE6]">
                Homes we've designed and built<span className="text-[#A0633B]">.</span>
              </h2>
            </div>
            <p className="font-sans text-sm sm:text-base text-neutral-600 dark:text-neutral-400 font-light max-w-sm">
              Every home is personal, intentional, and designed around how our clients live.
            </p>
          </div>
        </Reveal>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2.5 py-10">
          {tags.map((t) => (
            <button
              key={t.id}
              onClick={() => setSelectedTag(t.id)}
              className={`px-4 py-2 font-mono text-xs uppercase tracking-wider rounded-xs border transition-colors cursor-pointer ${
                selectedTag === t.id
                  ? 'bg-[#191816] text-white border-[#191816] dark:bg-[#EFECE6] dark:text-[#191816] dark:border-[#EFECE6]'
                  : 'bg-transparent text-neutral-600 dark:text-neutral-400 border-[#D8D0C2] dark:border-[#2E2C28] hover:border-[#A0633B]'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Curated Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {filteredProjects.map((proj, idx) => (
            <Reveal key={proj.id} delay={idx * 40}>
              <div
                onClick={() => openLightbox(proj)}
                className="group cursor-pointer flex flex-col space-y-3"
              >
                <div className="relative h-72 w-full overflow-hidden rounded-xs bg-neutral-200 dark:bg-neutral-900 border border-[#E6DFD3] dark:border-[#242220]">
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-xs text-white font-mono text-[9px] uppercase tracking-wider px-2.5 py-1 rounded-xs">
                    {proj.location}
                  </div>
                </div>

                <div className="space-y-1">
                  <h3 className="font-serif text-xl font-normal text-[#191816] dark:text-[#EFECE6] group-hover:text-[#A0633B] dark:group-hover:text-[#C98858] transition-colors">
                    {proj.title}
                  </h3>
                  <p className="font-sans text-xs text-neutral-600 dark:text-neutral-400 font-light leading-relaxed line-clamp-2">
                    {proj.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <GalleryLightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        items={PROJECTS}
        currentIndex={activeProjectIndex}
        onIndexChange={setActiveProjectIndex}
        onInquireProject={(preset) => {
          setLightboxOpen(false);
          onOpenProjectDrawer(preset);
        }}
      />
    </section>
  );
}
