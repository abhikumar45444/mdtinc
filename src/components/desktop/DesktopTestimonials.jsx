import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import Reveal from '../Reveal';
import { TESTIMONIALS } from '../../data/mdtData';

export default function DesktopTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const current = TESTIMONIALS[currentIndex];
  const total = TESTIMONIALS.length;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  return (
    <section className="w-full bg-[#F8F8F8] dark:bg-[#151515] py-24 sm:py-36 border-b border-[#E2E2E2] dark:border-[#222222] transition-colors">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <Reveal delay={0}>
          <div className="flex items-center justify-between pb-8 border-b border-[#E2E2E2] dark:border-[#222222]">
            <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.25em] text-[#666666] dark:text-[#999999]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#111111] dark:bg-[#FFFFFF]" />
              <span>TESTIMONIALS</span>
            </div>

            {/* Fractional Counter (01 / 03) */}
            <div className="font-mono text-xs tracking-widest text-[#111111] dark:text-[#FFFFFF] font-semibold">
              0{currentIndex + 1} <span className="text-[#888888] font-normal">/ 0{total}</span>
            </div>
          </div>
        </Reveal>

        {/* Big Swiss Testimonial Quote */}
        <div className="py-12 sm:py-16 min-h-[220px] flex flex-col justify-between">
          <blockquote className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#111111] dark:text-[#FFFFFF] leading-[1.2] max-w-4xl animate-fade-in">
            "{current.quote}"
          </blockquote>

          <div className="pt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-t border-[#E2E2E2] dark:border-[#222222] mt-10">
            <div className="flex items-center gap-3">
              <div className="flex items-center text-amber-500 gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
              <span className="font-mono text-xs uppercase tracking-wider text-[#111111] dark:text-[#FFFFFF] font-semibold">
                {current.author}
              </span>
              <span className="text-[#888888] text-xs font-mono">· {current.project}</span>
            </div>

            {/* Prev / Next Kinetic Buttons */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous quote"
                className="w-10 h-10 rounded-full border border-[#E2E2E2] dark:border-[#333333] hover:border-[#111111] dark:hover:border-[#FFFFFF] flex items-center justify-center text-[#111111] dark:text-[#FFFFFF] hover:bg-[#111111] hover:text-white dark:hover:bg-[#FFFFFF] dark:hover:text-black transition-colors cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                aria-label="Next quote"
                className="w-10 h-10 rounded-full border border-[#E2E2E2] dark:border-[#333333] hover:border-[#111111] dark:hover:border-[#FFFFFF] flex items-center justify-center text-[#111111] dark:text-[#FFFFFF] hover:bg-[#111111] hover:text-white dark:hover:bg-[#FFFFFF] dark:hover:text-black transition-colors cursor-pointer"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
