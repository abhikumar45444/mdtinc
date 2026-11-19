import React from 'react';
import { COMPANY_INFO } from '../../data/mdtData';

export default function DesktopFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#FFFFFF] dark:bg-[#121311] text-neutral-500 dark:text-neutral-400 py-10 transition-colors">
      <div className="max-w-6xl mx-auto px-6 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-xs">
        <div>
          <span>{COMPANY_INFO.name} &bull; {COMPANY_INFO.license} &bull; &copy; {new Date().getFullYear()} All rights reserved.</span>
          <span className="hidden sm:inline opacity-40 mx-2">|</span>
          <span className="text-[11px] block sm:inline mt-1 sm:mt-0">{COMPANY_INFO.address}</span>
        </div>

        <button
          onClick={scrollToTop}
          className="hover:text-neutral-950 dark:hover:text-white transition-colors cursor-pointer border-b border-neutral-300 dark:border-neutral-700 pb-0.5"
        >
          <span>Back to top</span>
          <span aria-hidden="true" className="ml-1">↑</span>
        </button>
      </div>
    </footer>
  );
}
