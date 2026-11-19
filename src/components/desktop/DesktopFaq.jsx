import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import Reveal from '../Reveal';
import { FAQS } from '../../data/mdtData';

export default function DesktopFaq() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex(prev => prev === idx ? null : idx);
  };

  return (
    <section className="w-full bg-[#F8F5EE] dark:bg-[#131211] py-20 sm:py-32 border-b border-[#E6DFD3] dark:border-[#242220] transition-colors">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <Reveal delay={0}>
              <p className="text-[11px] font-mono uppercase tracking-[0.22em] text-[#A0633B] dark:text-[#C98858] mb-3">
                QUESTIONS
              </p>
              <h2 className="font-serif text-3xl sm:text-5xl font-normal tracking-tight text-[#191816] dark:text-[#EFECE6]">
                Good to know<span className="text-[#A0633B]">.</span>
              </h2>
            </Reveal>
          </div>

          <div className="lg:col-span-8 divide-y divide-[#E6DFD3] dark:divide-[#242220] border-y border-[#E6DFD3] dark:border-[#242220]">
            {FAQS.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={index} className="py-5">
                  <button
                    onClick={() => toggle(index)}
                    className="w-full flex items-center justify-between text-left group cursor-pointer"
                  >
                    <span className="font-serif text-xl font-normal text-[#191816] dark:text-[#EFECE6] group-hover:text-[#A0633B] dark:group-hover:text-[#C98858] transition-colors">
                      {faq.q}
                    </span>
                    <span className="text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors ml-4">
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="pt-3 pr-6 animate-fade-in">
                      <p className="font-sans text-sm text-neutral-600 dark:text-neutral-400 font-light leading-relaxed">
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
