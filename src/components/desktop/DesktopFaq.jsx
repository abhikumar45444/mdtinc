import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import MaskedReveal from '../MaskedReveal';
import { FAQS } from '../../data/mdtData';

export default function DesktopFaq() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex(prev => prev === idx ? null : idx);
  };

  return (
    <section className="w-full bg-[#FFFFFF] dark:bg-[#111111] py-24 sm:py-36 border-b border-[#E2E2E2] dark:border-[#222222] transition-colors">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.25em] text-[#666666] dark:text-[#999999] mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#111111] dark:bg-[#FFFFFF]" />
              <span>FAQ</span>
            </div>
            <MaskedReveal>
              <h2 className="font-sans text-4xl sm:text-6xl font-bold tracking-tight text-[#111111] dark:text-[#FFFFFF] leading-[0.98]">
                Good to know.
              </h2>
            </MaskedReveal>
          </div>

          <div className="lg:col-span-8 divide-y divide-[#E2E2E2] dark:divide-[#222222] border-y border-[#E2E2E2] dark:border-[#222222]">
            {FAQS.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={index} className="py-6">
                  <button
                    type="button"
                    onClick={() => toggle(index)}
                    className="w-full flex items-center justify-between text-left group cursor-pointer"
                  >
                    <span className="font-sans text-xl sm:text-2xl font-semibold tracking-tight text-[#111111] dark:text-[#FFFFFF] group-hover:opacity-60 transition-opacity">
                      {faq.q}
                    </span>
                    <span className="w-8 h-8 rounded-full border border-[#E2E2E2] dark:border-[#333333] flex items-center justify-center text-[#111111] dark:text-[#FFFFFF] group-hover:border-[#111111] dark:group-hover:border-[#FFFFFF] transition-colors ml-4 shrink-0">
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="pt-3 pr-6 animate-fade-in">
                      <p className="font-sans text-sm sm:text-base text-[#555555] dark:text-[#AAAAAA] font-light leading-relaxed">
                        {faq.a}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
