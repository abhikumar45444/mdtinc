import React from 'react';
import { COMPANY_INFO } from '../../data/mdtData';

export default function DesktopFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#F8F5EE] dark:bg-[#131211] text-neutral-500 dark:text-neutral-400 py-12 transition-colors">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs">
        <div>
          <span>{COMPANY_INFO.name} · {COMPANY_INFO.license} · {COMPANY_INFO.address}</span>
        </div>

        <button
          onClick={scrollToTop}
          className="hover:text-neutral-900 dark:hover:text-white transition-colors cursor-pointer border-b border-neutral-300 dark:border-neutral-700 pb-0.5"
        >
          <span>Back to top ↑</span>
        </button>
      </div>
    </footer>
  );
}
