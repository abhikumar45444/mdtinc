import React from 'react';
import { Phone, Calendar, ArrowRight, ShieldCheck, MapPin, Sparkles } from 'lucide-react';
import { COMPANY_INFO, SERVICES, PROJECTS } from '../data/mdtData';

export default function HomeScreen({
  onSelectTab,
  onOpenServiceModal,
  onOpenCallModal,
  onOpenProjectDrawer,
  onOpenAreaModal,
  selectedArea
}) {
  return (
    <div className="flex-1 overflow-y-auto pb-24 text-neutral-950 dark:text-neutral-100 bg-[#F8F7F4] dark:bg-[#121311]">
      {/* Top Mobile Bar */}
      <div className="p-4 bg-white/80 dark:bg-[#121311]/80 backdrop-blur-sm sticky top-0 z-30 border-b border-neutral-200 dark:border-neutral-800 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs font-bold px-1.5 py-0.5 border border-neutral-950 dark:border-white rounded-xs">
            MDT
          </span>
          <span className="font-semibold text-sm">Design + Build</span>
        </div>

        <button
          onClick={onOpenAreaModal}
          className="flex items-center gap-1 font-mono text-[10px] text-neutral-600 dark:text-neutral-400 bg-neutral-100 dark:bg-white/10 px-2 py-1 rounded-xs"
        >
          <MapPin className="w-3 h-3 text-[#9E6B47]" />
          <span className="truncate max-w-[120px]">{selectedArea || 'Riverside, CA'}</span>
        </button>
      </div>

      {/* Hero Section */}
      <div className="p-5 pt-6 bg-white dark:bg-[#121311] border-b border-neutral-200 dark:border-neutral-800">
        <p className="text-[10px] font-mono uppercase tracking-[0.14em] text-neutral-500 dark:text-neutral-400">
          RIVERSIDE &bull; INLAND EMPIRE &bull; ORANGE COUNTY
        </p>
        <h1 className="text-2xl font-bold tracking-tight text-neutral-950 dark:text-white mt-1.5 leading-snug">
          A home that feels like it was made for you<span className="text-[#9E6B47]">.</span>
        </h1>
        <p className="text-xs text-neutral-600 dark:text-neutral-300 mt-2 leading-relaxed">
          Additions, ADUs, and whole-home remodels designed and built by one dedicated family team.
        </p>

        {/* Feature Hero Image */}
        <div className="relative aspect-[16/10] w-full rounded-sm overflow-hidden mt-4 bg-neutral-200 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-800">
          <img
            src="https://st.hzcdn.com/simgs/5941c7460920ce87_14-7704/home-design.jpg"
            alt="MDT Design + Build Upland Whole-Home"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-2 left-2 bg-black/60 backdrop-blur-xs px-2 py-1 rounded-xs text-[9px] font-mono text-white">
            CSLB #1054266 &bull; Licensed General Contractor
          </div>
        </div>

        {/* Fast Action Buttons */}
        <div className="grid grid-cols-2 gap-2 mt-4">
          <button
            onClick={() => onOpenProjectDrawer('Whole-Home Remodel')}
            className="py-3 px-3 bg-neutral-950 text-white dark:bg-white dark:text-neutral-950 font-semibold text-xs rounded-xs flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
          >
            <span>Start Inquiry</span>
            <span>↗</span>
          </button>
          <a
            href={`tel:${COMPANY_INFO.phoneRaw}`}
            className="py-3 px-3 border border-neutral-200 dark:border-neutral-800 text-neutral-900 dark:text-white font-semibold text-xs rounded-xs flex items-center justify-center gap-1.5"
          >
            <Phone className="w-3.5 h-3.5 text-[#9E6B47]" />
            <span>(951) 373-9868</span>
          </a>
        </div>
      </div>

      {/* Flagship Services Carousel / Grid */}
      <div className="p-5">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-sm font-semibold tracking-tight uppercase font-mono text-neutral-500 dark:text-neutral-400">
            What We Build
          </h2>
          <button
            onClick={() => onSelectTab('services')}
            className="text-xs font-semibold text-[#9E6B47] flex items-center gap-1"
          >
            <span>All Services</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>

        <div className="space-y-3">
          {SERVICES.slice(0, 3).map((s) => (
            <div
              key={s.id}
              onClick={() => onOpenServiceModal(s)}
              className="p-3 bg-white dark:bg-[#181916] border border-neutral-200 dark:border-neutral-800 rounded-sm flex items-center gap-3 active:scale-[0.99] transition-transform cursor-pointer"
            >
              <img
                src={s.image}
                alt={s.title}
                className="w-16 h-16 rounded-xs object-cover shrink-0"
              />
              <div className="flex-1 min-w-0">
                <span className="text-[9px] font-mono uppercase tracking-wider text-[#9E6B47]">
                  {s.badge}
                </span>
                <h3 className="text-sm font-semibold text-neutral-950 dark:text-white truncate">
                  {s.title}
                </h3>
                <p className="text-[11px] text-neutral-500 dark:text-neutral-400 line-clamp-1 mt-0.5">
                  {s.summary}
                </p>
              </div>
              <span className="text-xs text-neutral-400">↗</span>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Projects Strip */}
      <div className="p-5 pt-0">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-sm font-semibold tracking-tight uppercase font-mono text-neutral-500 dark:text-neutral-400">
            Recent Work
          </h2>
          <button
            onClick={() => onSelectTab('portfolio')}
            className="text-xs font-semibold text-[#9E6B47] flex items-center gap-1"
          >
            <span>View 12 Projects</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>

        <div className="grid grid-cols-2 gap-2.5">
          {PROJECTS.slice(0, 4).map((p) => (
            <div
              key={p.id}
              onClick={() => onSelectTab('portfolio')}
              className="bg-white dark:bg-[#181916] border border-neutral-200 dark:border-neutral-800 rounded-sm overflow-hidden"
            >
              <img
                src={p.image}
                alt={p.title}
                className="aspect-[4/3] w-full object-cover"
              />
              <div className="p-2">
                <p className="text-[10px] font-mono text-[#9E6B47] uppercase truncate">{p.location}</p>
                <h4 className="text-xs font-semibold text-neutral-950 dark:text-white line-clamp-1">{p.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Calendly Discovery Call Card */}
      <div className="p-5 pt-0">
        <div className="p-4 bg-white dark:bg-[#181916] border border-neutral-200 dark:border-neutral-800 rounded-sm space-y-2">
          <div className="flex items-center gap-2 text-xs font-mono font-semibold text-[#9E6B47]">
            <Calendar className="w-4 h-4" />
            <span>COMPLIMENTARY CONSULTATION</span>
          </div>
          <h3 className="text-base font-semibold text-neutral-950 dark:text-white">
            Schedule a 15-Minute Project Clarity Session
          </h3>
          <p className="text-xs text-neutral-600 dark:text-neutral-300 leading-relaxed">
            Review zoning feasibility, municipal plan checks, and construction budgets directly with Martin Mejia and our lead builders.
          </p>
          <a
            href={COMPANY_INFO.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2.5 px-3 bg-neutral-950 text-white dark:bg-white dark:text-neutral-950 font-semibold text-xs rounded-xs flex items-center justify-center gap-1 mt-2"
          >
            <span>Book on Calendly</span>
            <span>↗</span>
          </a>
        </div>
      </div>
    </div>
  );
}
