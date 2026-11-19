import React, { useState } from 'react';
import { Sun, Moon, Menu, X, ArrowUpRight } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

export default function DesktopNavbar({ onOpenProjectDrawer }) {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollTo = (id) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#F8F5EE]/95 dark:bg-[#131211]/95 backdrop-blur-md border-b border-[#E6DFD3] dark:border-[#242220] transition-colors">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        {/* Architectural Studio Wordmark */}
        <a
          href="#"
          className="flex flex-col group"
          aria-label="MDT Design + Build Home"
        >
          <span className="font-serif text-xl sm:text-2xl font-normal tracking-tight text-[#191816] dark:text-[#EFECE6] leading-none">
            MDT
          </span>
          <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-[#A0633B] dark:text-[#C98858] mt-1">
            Design + Build · Riverside
          </span>
        </a>

        {/* Center Editorial Links */}
        <nav className="hidden md:flex items-center gap-10 text-[13px] font-sans font-light tracking-wide text-neutral-600 dark:text-neutral-400">
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
            onClick={() => scrollTo('how-it-works')}
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
            onClick={() => scrollTo('contact')}
            className="hover:text-neutral-950 dark:hover:text-white transition-colors cursor-pointer"
          >
            Contact
          </button>
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="p-2 text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors cursor-pointer"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4 text-[#C98858]" /> : <Moon className="w-4 h-4" />}
          </button>

          <button
            onClick={() => onOpenProjectDrawer('Whole-Home Remodel')}
            className="px-5 py-2.5 bg-[#191816] hover:bg-[#A0633B] text-white dark:bg-[#EFECE6] dark:text-[#191816] dark:hover:bg-[#C98858] dark:hover:text-white text-xs font-mono uppercase tracking-wider rounded-xs transition-colors cursor-pointer flex items-center gap-2 shadow-xs"
          >
            <span>Start Your Project</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-neutral-700 dark:text-neutral-300"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#E6DFD3] dark:border-[#242220] bg-[#F8F5EE] dark:bg-[#131211] px-6 py-8 space-y-4">
          <nav className="flex flex-col space-y-4 font-serif text-xl text-neutral-900 dark:text-neutral-100">
            <button
              onClick={() => scrollTo('services')}
              className="text-left hover:text-[#A0633B] transition-colors"
            >
              What We Build
            </button>
            <button
              onClick={() => scrollTo('work')}
              className="text-left hover:text-[#A0633B] transition-colors"
            >
              Our Work
            </button>
            <button
              onClick={() => scrollTo('how-it-works')}
              className="text-left hover:text-[#A0633B] transition-colors"
            >
              How It Works
            </button>
            <button
              onClick={() => scrollTo('story')}
              className="text-left hover:text-[#A0633B] transition-colors"
            >
              Our Story
            </button>
            <button
              onClick={() => scrollTo('contact')}
              className="text-left hover:text-[#A0633B] transition-colors"
            >
              Contact
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
