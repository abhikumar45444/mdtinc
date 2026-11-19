import React, { useState, useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { PROJECTS } from '../../data/mdtData';
import MaskedReveal from '../MaskedReveal';

export default function WorkListShowcase({ onSelectProject }) {
  const [activeProject, setActiveProject] = useState(PROJECTS[0]);
  const previewRef = useRef(null);

  const handleMouseEnter = (proj) => {
    setActiveProject(proj);
  };

  return (
    <section id="work" className="w-full bg-[#FFFFFF] dark:bg-[#111111] py-24 sm:py-36 border-b border-[#E2E2E2] dark:border-[#222222] transition-colors relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Section Eyebrow & Headline */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-12 sm:pb-16 border-b border-[#E2E2E2] dark:border-[#222222]">
          <div>
            <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.25em] text-[#666666] dark:text-[#999999] mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#111111] dark:bg-[#FFFFFF]" />
              <span>SELECTED WORK</span>
            </div>
            <MaskedReveal>
              <h2 className="font-sans text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#111111] dark:text-[#FFFFFF] leading-[0.98]">
                Featured Projects.
              </h2>
            </MaskedReveal>
          </div>

          <p className="font-sans text-sm sm:text-base text-[#666666] dark:text-[#AAAAAA] font-light max-w-xs leading-relaxed">
            Selected residential projects across Southern California.
          </p>
        </div>

        {/* Two-Column Swiss Layout: Editorial List on Left, Pinned Interactive Preview Card on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pt-8 items-start">
          {/* Left Column: Interactive Project List */}
          <div className="lg:col-span-7 divide-y divide-[#E2E2E2] dark:divide-[#222222]">
            {PROJECTS.map((project, idx) => {
              const isActive = activeProject.id === project.id;
              const formattedIndex = String(idx + 1).padStart(2, '0');

              return (
                <div
                  key={project.id}
                  onMouseEnter={() => handleMouseEnter(project)}
                  onClick={() => onSelectProject && onSelectProject(project)}
                  className="group py-6 sm:py-7 flex items-center justify-between cursor-pointer transition-colors"
                >
                  <div className="flex items-baseline gap-4 sm:gap-6 min-w-0 pr-4">
                    <span className="font-mono text-xs sm:text-sm text-[#888888] dark:text-[#666666] shrink-0">
                      ({formattedIndex})
                    </span>

                    <div className="min-w-0">
                      <h3 className={`font-sans text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight transition-colors duration-200 truncate ${
                        isActive
                          ? 'text-[#111111] dark:text-[#FFFFFF]'
                          : 'text-[#555555] dark:text-[#888888] group-hover:text-[#111111] dark:group-hover:text-[#FFFFFF]'
                      }`}>
                        {project.title}
                      </h3>
                      <div className="flex items-center gap-2 mt-1 font-mono text-[11px] text-[#777777] dark:text-[#999999] uppercase tracking-wider">
                        <span>{project.location}</span>
                        <span className="opacity-40">·</span>
                        <span className="text-[#111111] dark:text-[#FFFFFF]">{project.tag}</span>
                      </div>
                    </div>
                  </div>

                  <div className="w-10 h-10 rounded-full border border-[#E2E2E2] dark:border-[#333333] flex items-center justify-center shrink-0 group-hover:border-[#111111] dark:group-hover:border-[#FFFFFF] group-hover:bg-[#111111] dark:group-hover:bg-[#FFFFFF] group-hover:text-white dark:group-hover:text-black transition-all">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Sticky Swiss Editorial Preview Card */}
          <div className="hidden lg:block lg:col-span-5 sticky top-28">
            <div
              ref={previewRef}
              onClick={() => onSelectProject && onSelectProject(activeProject)}
              className="relative w-full rounded-xs overflow-hidden border border-[#E2E2E2] dark:border-[#222222] bg-[#F8F8F8] dark:bg-[#1A1A1A] shadow-md group cursor-pointer"
            >
              {/* Media Frame */}
              <div className="relative h-[480px] w-full overflow-hidden bg-neutral-900">
                <img
                  key={activeProject.id}
                  src={activeProject.image}
                  alt={activeProject.title}
                  className="w-full h-full object-cover animate-fade-in group-hover:scale-103 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent pointer-events-none" />

                {/* Top Badge */}
                <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 font-mono text-[10px] uppercase text-white rounded-xs border border-white/10">
                  {activeProject.tag} · {activeProject.location}
                </div>

                {/* Bottom Overlay Info */}
                <div className="absolute bottom-5 inset-x-5 text-white space-y-1">
                  <h4 className="font-sans text-xl font-bold tracking-tight">
                    {activeProject.title}
                  </h4>
                  <p className="font-sans text-xs text-white/80 font-light line-clamp-2">
                    {activeProject.description}
                  </p>
                  <div className="pt-2 flex items-center gap-1.5 font-mono text-[10px] text-white/90 uppercase tracking-wider">
                    <span>Inspect Gallery</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
