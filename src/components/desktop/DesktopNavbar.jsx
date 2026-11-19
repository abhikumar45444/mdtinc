import React, { useState } from 'react';
import { Sun, Moon, Menu, X, ArrowUpRight } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import RollingLink from '../RollingLink';

export default function DesktopNavbar({ onOpenProjectDrawer }) {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollTo = (id) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#FFFFFF]/90 dark:bg-[#111111]/90 backdrop-blur-md border-b border-[#E2E2E2] dark:border-[#222222] transition-colors">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 h-20 flex items-center justify-between">
        {/* Brand / Logo */}
        <a
          href="#"
          className="flex items-center gap-3 group"
          aria-label="MDT Design + Build Home"
        >
          <div className="w-8 h-8 rounded-full bg-[#111111] dark:bg-[#FFFFFF] text-white dark:text-[#111111] flex items-center justify-center font-mono font-bold text-xs">
            M
          </div>
          <div className="flex flex-col">
            <span className="font-sans text-lg font-bold tracking-tight text-[#111111] dark:text-[#FFFFFF] leading-tight">
              MDT Design + Build
            </span>
            <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#888888] dark:text-[#666666]">
              Riverside, CA · CSLB #1054266
            </span>
          </div>
        </a>

        {/* Dual-Layer Kinetic Rolling Links (Middle) */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-10 font-sans text-xs uppercase tracking-widest text-[#555555] dark:text-[#AAAAAA]">
          <RollingLink onClick={() => scrollTo('services')}>
            What We Build
          </RollingLink>
          <RollingLink onClick={() => scrollTo('work')}>
            Featured Work
          </RollingLink>
          <RollingLink onClick={() => scrollTo('how-it-works')}>
            How It Works
          </RollingLink>
          <RollingLink onClick={() => scrollTo('story')}>
            Our Story
          </RollingLink>
          <RollingLink onClick={() => scrollTo('contact')}>
            Contact
          </RollingLink>
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={toggleTheme}
            className="p-2 text-[#666666] hover:text-[#111111] dark:text-[#888888] dark:hover:text-white transition-colors cursor-pointer"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* Primary CTA Button */}
          <button
            type="button"
            onClick={() => onOpenProjectDrawer('Whole-Home Remodel')}
            className="group px-5 py-2.5 rounded-full bg-[#111111] dark:bg-[#FFFFFF] text-white dark:text-[#111111] text-xs font-mono uppercase tracking-wider flex items-center gap-2 cursor-pointer shadow-xs active:scale-95 transition-transform"
          >
            <span>Start Your Project</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-neutral-800 dark:text-neutral-200"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#E2E2E2] dark:border-[#222222] bg-[#FFFFFF] dark:bg-[#111111] px-6 py-8 space-y-4">
          <nav className="flex flex-col space-y-4 font-sans text-xl font-semibold text-[#111111] dark:text-[#FFFFFF]">
            <button
              onClick={() => scrollTo('services')}
              className="text-left hover:opacity-60 transition-opacity"
            >
              What We Build
            </button>
            <button
              onClick={() => scrollTo('work')}
              className="text-left hover:opacity-60 transition-opacity"
            >
              Featured Work
            </button>
            <button
              onClick={() => scrollTo('how-it-works')}
              className="text-left hover:opacity-60 transition-opacity"
            >
              How It Works
            </button>
            <button
              onClick={() => scrollTo('story')}
              className="text-left hover:opacity-60 transition-opacity"
            >
              Our Story
            </button>
            <button
              onClick={() => scrollTo('contact')}
              className="text-left hover:opacity-60 transition-opacity"
            >
              Contact
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
