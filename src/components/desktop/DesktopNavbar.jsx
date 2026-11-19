import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { COMPANY_INFO } from '../../data/mdtData';
import { useTheme } from '../../context/ThemeContext';

export default function DesktopNavbar({
  onOpenProjectDrawer,
  onOpenCallModal,
  onOpenAreaModal,
  selectedArea
}) {
  const { theme, toggleTheme } = useTheme();

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="h-16 border-b border-neutral-200 dark:border-neutral-800 bg-white/95 dark:bg-[#121311]/95 backdrop-blur-sm sticky top-0 z-40 transition-colors">
      <div className="max-w-6xl mx-auto px-6 lg:px-10 h-full flex items-center justify-between">
        {/* Left: Clean Brand Wordmark */}
        <a
          href="#"
          className="flex items-center gap-3 text-neutral-950 dark:text-white font-semibold text-base tracking-tight hover:opacity-85 transition-opacity"
        >
          <span className="font-mono text-xs font-bold px-1.5 py-0.5 border border-neutral-950 dark:border-white rounded-xs">
            MDT
          </span>
          <span className="hidden sm:inline">Design + Build</span>
        </a>

        {/* Center: Concise Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-[13px] font-medium text-neutral-600 dark:text-neutral-300">
          <button
            onClick={() => scrollTo('services')}
            className="hover:text-neutral-950 dark:hover:text-white transition-colors cursor-pointer"
          >
            What We Build
          </button>
          <button
            onClick={() => scrollTo('work')}
            className="hover:text-neutral-950 dark:hover:text-white transition-colors cursor-pointer"
          >
            Our Work
          </button>
          <button
            onClick={() => scrollTo('process')}
            className="hover:text-neutral-950 dark:hover:text-white transition-colors cursor-pointer"
          >
            How It Works
          </button>
          <button
            onClick={() => scrollTo('story')}
            className="hover:text-neutral-950 dark:hover:text-white transition-colors cursor-pointer"
          >
            Our Story
          </button>
          <button
            onClick={onOpenAreaModal}
            className="hover:text-neutral-950 dark:hover:text-white transition-colors cursor-pointer flex items-center gap-1 font-mono text-xs"
          >
            <span>Service Areas</span>
            <span className="text-[10px] text-neutral-400">▾</span>
          </button>
        </nav>

        {/* Right: Phone, Theme Toggle & Single High-Contrast CTA */}
        <div className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-xs border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white transition-colors cursor-pointer"
            aria-label="Toggle dark/light mode"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          <a
            href={`tel:${COMPANY_INFO.phoneRaw}`}
            className="hidden lg:inline text-xs font-mono text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white transition-colors"
          >
            {COMPANY_INFO.phone}
          </a>

          <button
            onClick={() => onOpenProjectDrawer('Whole-Home Remodel')}
            className="px-4 py-2 bg-neutral-950 hover:bg-neutral-800 text-white dark:bg-white dark:text-neutral-950 dark:hover:bg-neutral-200 text-xs font-medium tracking-wide transition-colors cursor-pointer flex items-center gap-1.5 rounded-xs shadow-xs"
          >
            <span>Start Your Project</span>
            <span aria-hidden="true">↗</span>
          </button>
        </div>
      </div>
    </header>
  );
}
