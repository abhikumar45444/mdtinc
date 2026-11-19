import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
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
    <section id="work" className="w-full bg-[#EAEAEA] dark:bg-[#121212] py-20 sm:py-32 border-b border-black/10 dark:border-white/10 transition-colors">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <Reveal delay={0}>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-12 border-b border-black/10 dark:border-white/10">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-neutral-600 dark:text-neutral-400 mb-3">
                <span className="w-2 h-2 rounded-full bg-black dark:bg-white" />
                <span>FEATURED RESIDENCES</span>
              </div>
              <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-black dark:text-white">
                Homes we've designed and built<span className="italic">.</span>
              </h2>
            </div>

            <p className="font-sans text-sm sm:text-base text-neutral-600 dark:text-neutral-400 font-light max-w-sm">
              We design around the way you live, then bring every detail together to build it.
            </p>
          </div>
        </Reveal>

        {/* Filter Pills (Komma Pill Style) */}
        <div className="flex flex-wrap items-center gap-2.5 py-10">
          {tags.map((t) => (
            <button
              key={t.id}
              onClick={() => setSelectedTag(t.id)}
              className={`px-4 py-2 font-mono text-xs uppercase tracking-wider rounded-full border transition-all cursor-pointer ${
                selectedTag === t.id
                  ? 'bg-black text-white border-black dark:bg-white dark:text-black dark:border-white'
                  : 'bg-transparent text-neutral-600 dark:text-neutral-400 border-black/15 dark:border-white/15 hover:border-black dark:hover:border-white'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Komma Editorial Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
          {filteredProjects.map((proj, idx) => (
            <Reveal key={proj.id} delay={idx * 50}>
              <div
                onClick={() => openLightbox(proj)}
                className="group cursor-pointer flex flex-col space-y-4"
              >
                <div className="relative h-[360px] sm:h-[460px] w-full rounded-xl sm:rounded-2xl overflow-hidden bg-neutral-300 dark:bg-neutral-800 border border-black/10 dark:border-white/10">
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-1000 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 dark:bg-black/90 backdrop-blur-md flex items-center justify-center text-black dark:text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                  <div className="absolute bottom-4 left-4 font-mono text-[10px] uppercase tracking-wider text-white bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
                    {proj.location} · {proj.tag}
                  </div>
                </div>

                <div className="space-y-1">
                  <h3 className="font-serif text-2xl sm:text-3xl font-normal text-black dark:text-white group-hover:opacity-75 transition-opacity">
                    {proj.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 font-light leading-relaxed line-clamp-2">
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
