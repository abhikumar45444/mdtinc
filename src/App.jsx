import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ThemeProvider } from './context/ThemeContext';
import DesktopApp from './components/desktop/DesktopApp';
import ProjectDrawer from './components/ProjectDrawer';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [isProjectDrawerOpen, setIsProjectDrawerOpen] = useState(false);
  const [projectPreset, setProjectPreset] = useState('Whole-Home Remodel');

  // Initialize Lenis Smooth Inertia Scroll & Sync with GSAP ScrollTrigger
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1.05,
      touchMultiplier: 1.5
    });

    // Sync scroll event to GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    const tickerCb = (time) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(tickerCb);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(tickerCb);
      lenis.destroy();
    };
  }, []);

  const handleOpenProjectDrawer = (preset = 'Whole-Home Remodel') => {
    setProjectPreset(typeof preset === 'string' ? preset : 'Whole-Home Remodel');
    setIsProjectDrawerOpen(true);
  };

  return (
    <ThemeProvider>
      <div className="w-full min-h-screen bg-[#F8F8F8] dark:bg-[#111111] font-sans text-[#111111] dark:text-[#FFFFFF] antialiased">
        <DesktopApp
          onOpenProjectDrawer={handleOpenProjectDrawer}
        />
      </div>

      {/* Slide-Over Project Inquiry Drawer */}
      <ProjectDrawer
        isOpen={isProjectDrawerOpen}
        onClose={() => setIsProjectDrawerOpen(false)}
        initialProject={projectPreset}
      />
    </ThemeProvider>
  );
}
