import React, { useState } from 'react';
import Reveal from '../Reveal';
import { FAQS } from '../../data/mdtData';

export default function DesktopFaq() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex(prev => prev === idx ? null : idx);
  };

  return (
    <section className="bg-[#FFFFFF] dark:bg-[#121311] py-16 lg:py-24 border-b border-neutral-200 dark:border-neutral-800 transition-colors" id="faq" aria-labelledby="faq-title">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Left Column Heading */}
          <div className="lg:col-span-4">
            <Reveal delay={0}>
              <p className="text-[11px] font-mono uppercase tracking-[0.14em] text-neutral-500 dark:text-neutral-400">
                COMMON QUESTIONS
              </p>
            </Reveal>
            <Reveal delay={80}>
              <h2
                id="faq-title"
                className="text-3xl lg:text-4xl font-semibold tracking-tight text-neutral-950 dark:text-white mt-2 leading-tight"
              >
                Good to know before you build<span className="text-[#9E6B47]">.</span>
              </h2>
            </Reveal>
            <Reveal delay={140}>
              <p className="text-sm text-neutral-600 dark:text-neutral-300 mt-4 leading-relaxed font-sans">
                Clear answers regarding city permitting, architectural coordination, and construction budgets across Southern California.
              </p>
            </Reveal>
          </div>

          {/* Right Column Accordion Stack */}
          <div className="lg:col-span-8 divide-y divide-neutral-200 dark:divide-neutral-800 border-y border-neutral-200 dark:border-neutral-800">
            {FAQS.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <Reveal key={index} delay={index * 60}>
                  <div className="py-4">
                    <button
                      onClick={() => toggle(index)}
                      className="w-full flex items-center justify-between text-left group cursor-pointer"
                    >
                      <span className={`text-base font-semibold tracking-tight transition-colors ${
                        isOpen
                          ? 'text-[#9E6B47]'
                          : 'text-neutral-950 dark:text-white group-hover:text-[#9E6B47]'
                      }`}>
                        {faq.q}
                      </span>
                      <span className="font-mono text-xl text-neutral-400 group-hover:text-neutral-950 dark:group-hover:text-white transition-colors leading-none pl-4">
                        {isOpen ? '−' : '+'}
                      </span>
                    </button>
                    {isOpen && (
                      <div className="pt-3 pr-6 animate-fade-in">
                        <p className="text-[15px] text-neutral-600 dark:text-neutral-300 leading-relaxed font-sans">
                          {faq.a}
                        </p>
                      </div>
                    )}
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
