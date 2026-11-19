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

export default function DesktopApp({ onOpenProjectDrawer }) {
  return (
    <div className="w-full min-h-screen bg-[#F8F5EE] dark:bg-[#131211] font-sans text-[#191816] dark:text-[#EFECE6] antialiased selection:bg-[#A0633B] selection:text-white transition-colors duration-200">
      {/* 1. Architectural Header */}
      <DesktopNavbar onOpenProjectDrawer={onOpenProjectDrawer} />

      {/* 2. Asymmetric Editorial Hero */}
      <DesktopHero onOpenProjectDrawer={onOpenProjectDrawer} />

      {/* 3. What We Build (Asymmetric Editorial Lookbook) */}
      <DesktopServices onOpenProjectDrawer={onOpenProjectDrawer} />

      {/* 4. How It Works */}
      <DesktopProcess />

      {/* 5. Our Work Portfolio */}
      <DesktopProjects onOpenProjectDrawer={onOpenProjectDrawer} />

      {/* 6. Our Story (Authentic Sister-Led Team) */}
      <DesktopAbout />

      {/* 7. Common Questions */}
      <DesktopFaq />

      {/* 8. Contact & Scheduling */}
      <DesktopContact onOpenProjectDrawer={onOpenProjectDrawer} />

      {/* 9. Minimal Footer */}
      <DesktopFooter />
    </div>
  );
}
