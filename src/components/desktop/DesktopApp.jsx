import React from 'react';
import DesktopNavbar from './DesktopNavbar';
import DesktopHero from './DesktopHero';
import DesktopServices from './DesktopServices';
import DesktopProcess from './DesktopProcess';
import DesktopProjects from './DesktopProjects';
import DesktopAbout from './DesktopAbout';
import DesktopFaq from './DesktopFaq';
import DesktopContact from './DesktopContact';
import DesktopFooter from './DesktopFooter';

export default function DesktopApp({
  onOpenServiceModal,
  onOpenCallModal,
  onOpenProjectDrawer,
  onOpenAreaModal,
  selectedArea
}) {
  return (
    <div className="w-full min-h-screen bg-[#FFFFFF] dark:bg-[#121311] font-sans text-neutral-950 dark:text-neutral-100 antialiased selection:bg-[#9E6B47] selection:text-white transition-colors duration-200">
      {/* 1. Minimal Top Header */}
      <DesktopNavbar
        onOpenProjectDrawer={onOpenProjectDrawer}
        onOpenCallModal={onOpenCallModal}
        onOpenAreaModal={onOpenAreaModal}
        selectedArea={selectedArea}
      />

      {/* 2. Editorial Hero Section: "A home that feels like it was made for you." */}
      <DesktopHero
        onOpenCallModal={onOpenCallModal}
        onOpenProjectDrawer={onOpenProjectDrawer}
      />

      {/* 3. Services Grid: "From raw concept to finished reality." */}
      <DesktopServices
        onOpenServiceModal={onOpenServiceModal}
        onOpenProjectDrawer={onOpenProjectDrawer}
      />

      {/* 4. Design-Build Process: "A clear plan changes everything." */}
      <DesktopProcess
        onOpenProjectDrawer={onOpenProjectDrawer}
      />

      {/* 5. Project Portfolio: "Homes we've designed and built." */}
      <DesktopProjects
        onOpenProjectDrawer={onOpenProjectDrawer}
      />

      {/* 6. Editorial About Section: 2nd Gen Family Craftsmanship */}
      <DesktopAbout
        onOpenCallModal={onOpenCallModal}
        onOpenProjectDrawer={onOpenProjectDrawer}
      />

      {/* 7. Clean FAQ Accordion: "Good to know." */}
      <DesktopFaq />

      {/* 8. Streamlined Contact CTA: "Let's talk about your home." */}
      <DesktopContact
        onOpenCallModal={onOpenCallModal}
        onOpenProjectDrawer={onOpenProjectDrawer}
      />

      {/* 9. Quiet Minimal Footer */}
      <DesktopFooter />
    </div>
  );
}
