import React, { useState, useEffect } from 'react';
import { COMPANY_INFO } from '../../data/mdtData';
import { ArrowUp } from 'lucide-react';

export default function DesktopFooter() {
  const [currentTime, setCurrentTime] = useState('');

  // Live Local Clock for Riverside, CA (Pacific Time)
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options = {
        timeZone: 'America/Los_Angeles',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      };
      setCurrentTime(new Intl.DateTimeFormat('en-US', options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#111111] text-white pt-20 pb-12 transition-colors overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 space-y-16">
        {/* 4-Column Organized Studio Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-16 border-b border-white/10 font-mono text-xs">
          {/* Column 1: Contact Info */}
          <div className="space-y-4">
            <p className="text-white/40 uppercase tracking-[0.25em] text-[10px]">
              CONTACT
            </p>
            <div className="space-y-2">
              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="block text-white hover:text-white/70 transition-colors"
              >
                {COMPANY_INFO.email}
              </a>
              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="block text-white hover:text-white/70 transition-colors"
              >
                {COMPANY_INFO.phone}
              </a>
              <a
                href={COMPANY_INFO.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-white/70 hover:text-white transition-colors"
              >
                Book Discovery Call ↗
              </a>
            </div>
          </div>

          {/* Column 2: Studio Coordinates & Live Clock */}
          <div className="space-y-4">
            <p className="text-white/40 uppercase tracking-[0.25em] text-[10px]">
              LOCATION &amp; TIME
            </p>
            <div className="space-y-1 text-white/80">
              <p>Riverside, CA</p>
              <p>{COMPANY_INFO.address}</p>
              <p className="text-emerald-400 flex items-center gap-1.5 pt-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>{currentTime ? `${currentTime} PST` : 'Pacific Time'}</span>
              </p>
              <p className="text-white/40 text-[10px] pt-1">
                33.9533° N, 117.3962° W · CSLB #1054266
              </p>
            </div>
          </div>

          {/* Column 3: Navigation */}
          <div className="space-y-4">
            <p className="text-white/40 uppercase tracking-[0.25em] text-[10px]">
              NAVIGATION
            </p>
            <div className="space-y-2 text-white/80">
              <button
                onClick={() => scrollTo('services')}
                className="block hover:text-white transition-colors cursor-pointer text-left"
              >
                What We Build
              </button>
              <button
                onClick={() => scrollTo('work')}
                className="block hover:text-white transition-colors cursor-pointer text-left"
              >
                Featured Work
              </button>
              <button
                onClick={() => scrollTo('how-it-works')}
                className="block hover:text-white transition-colors cursor-pointer text-left"
              >
                How It Works
              </button>
              <button
                onClick={() => scrollTo('story')}
                className="block hover:text-white transition-colors cursor-pointer text-left"
              >
                Our Story
              </button>
            </div>
          </div>

          {/* Column 4: Hours & Legal */}
          <div className="space-y-4">
            <p className="text-white/40 uppercase tracking-[0.25em] text-[10px]">
              LEGAL
            </p>
            <div className="space-y-1 text-white/80">
              <p>{COMPANY_INFO.hours}</p>
              <p className="text-white/40 text-[11px] pt-2">
                © 2026 MDT, Inc.
              </p>
              <p className="text-white/40 text-[11px]">
                Class B General Building Contractor
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Colophon with Back to Top & Responsive Vector Wordmark */}
        <div className="pt-2 flex flex-col items-center">
          <div className="w-full flex items-center justify-between text-white/40 font-mono text-[11px] pb-6">
            <span>RESIDENTIAL DESIGN + BUILD · SOUTHERN CALIFORNIA</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-white/60 hover:text-white transition-colors cursor-pointer"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Full-width responsive SVG wordmark — 100% visible, never cut off */}
          <div className="w-full select-none text-white opacity-90 hover:opacity-100 transition-opacity pt-4">
            <svg
              viewBox="0 0 1080 82"
              className="w-full h-auto max-h-24 sm:max-h-32 block"
              preserveAspectRatio="xMidYMid meet"
              aria-label="MDT DESIGN + BUILD"
              role="img"
            >
              <text
                x="50%"
                y="52%"
                textAnchor="middle"
                dominantBaseline="central"
                fill="currentColor"
                className="font-sans font-black tracking-tighter"
                fontSize="72"
                letterSpacing="-0.03em"
              >
                MDT DESIGN + BUILD
              </text>
            </svg>
          </div>
        </div>
      </div>
    </footer>
  );
}
