import React, { useState } from 'react';
import DesktopNavbar from './DesktopNavbar';
import DesktopHero from './DesktopHero';
import DesktopServices from './DesktopServices';
import WorkListShowcase from './WorkListShowcase';
import DesktopProcess from './DesktopProcess';
import DesktopTestimonials from './DesktopTestimonials';
import DesktopAbout from './DesktopAbout';
import DesktopFaq from './DesktopFaq';
import DesktopContact from './DesktopContact';
import DesktopFooter from './DesktopFooter';
import GalleryLightbox from '../GalleryLightbox';
import { PROJECTS } from '../../data/mdtData';

export default function DesktopApp({ onOpenProjectDrawer }) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);

  const handleSelectProject = (project) => {
    const idx = PROJECTS.findIndex((p) => p.id === project.id);
    setActiveProjectIndex(idx !== -1 ? idx : 0);
    setLightboxOpen(true);
  };

  return (
    <div className="w-full min-h-screen bg-[#F8F8F8] dark:bg-[#111111] font-sans text-[#111111] dark:text-[#FFFFFF] antialiased selection:bg-[#111111] selection:text-white dark:selection:bg-white dark:selection:text-black transition-colors duration-200">
      {/* 1. Minimal Header with Rolling Dual-Layer Links */}
      <DesktopNavbar onOpenProjectDrawer={onOpenProjectDrawer} />

      {/* 2. High-Impact Swiss Editorial Hero */}
      <DesktopHero onOpenProjectDrawer={onOpenProjectDrawer} />

      {/* 3. Numbered Services Grid (01, 02, 03) */}
      <DesktopServices onOpenProjectDrawer={onOpenProjectDrawer} />

      {/* 4. Interactive Editorial Showcase & Work List with Pinned Preview */}
      <WorkListShowcase onSelectProject={handleSelectProject} />

      {/* 5. Structured Process (01, 02, 03) */}
      <DesktopProcess />

      {/* 6. Minimalist Testimonials with Fractional Counter (01/03) */}
      <DesktopTestimonials />

      {/* 7. Studio & Sister-Led Heritage */}
      <DesktopAbout />

      {/* 8. Common Questions Accordion */}
      <DesktopFaq />

      {/* 9. Closing Project CTA ("Do you have a project in mind?") */}
      <DesktopContact onOpenProjectDrawer={onOpenProjectDrawer} />

      {/* 10. Architectural Footer with Live Clock & Giant Wordmark */}
      <DesktopFooter />

      {/* Full-Viewport Photo Lightbox */}
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
    </div>
  );
}
