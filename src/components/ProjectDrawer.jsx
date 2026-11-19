import React, { useState, useEffect, useRef } from 'react';
import { X, CheckCircle2, MessageSquare, Calendar, Camera, ArrowRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/mdtData';

const PROJECT_TYPES = [
  'Whole-Home Remodel',
  'ADU / Guesthouse',
  'Kitchen & Bath',
  'Custom Addition',
  'Interior Design'
];

const CITIES = [
  'Riverside',
  'Norco / Corona',
  'Murrieta / Temecula',
  'Upland / Rancho Cucamonga',
  'Orange County (Newport / CDM / Orange)',
  'Other Southern California'
];

export default function ProjectDrawer({
  isOpen,
  onClose,
  initialProject = 'Whole-Home Remodel'
}) {
  const [projectType, setProjectType] = useState(initialProject);
  const [city, setCity] = useState('Riverside');
  const [hasPlans, setHasPlans] = useState('No, starting from scratch');
  const [description, setDescription] = useState('');
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [files, setFiles] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const fileInputRef = useRef(null);

  useEffect(() => {
    if (initialProject) {
      setProjectType(initialProject);
    }
  }, [initialProject, isOpen]);

  // Lock scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Escape key listener
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const handleFileChange = (e) => {
    if (e.target.files) {
      setFiles((prev) => [...prev, ...Array.from(e.target.files)]);
    }
  };

  const removeFile = (idx) => {
    setFiles((prev) => prev.filter((_, i) => i !== idx));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 450);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setDescription('');
    setName('');
    setContact('');
    setFiles([]);
    onClose();
  };

  const handleTextDirectly = () => {
    const textMsg = `Hi Mejia Team! Project Inquiry for MDT Design + Build:\nProject: ${projectType}\nCity: ${city}, CA\nPlans: ${hasPlans}\nName: ${name}\nContact: ${contact}\nNotes: ${description || 'N/A'}`;
    window.location.href = `sms:${COMPANY_INFO.phoneRaw}?body=${encodeURIComponent(textMsg)}`;
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex justify-end bg-black/40 dark:bg-black/75 backdrop-blur-xs transition-opacity duration-300"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-drawer-title"
    >
      <div
        className="relative max-w-md w-full h-full bg-white dark:bg-[#121316] border-l border-neutral-200 dark:border-white/10 shadow-2xl flex flex-col z-50 overflow-hidden transform transition-transform duration-300 ease-out"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-6 border-b border-black/10 dark:border-white/10 flex items-start justify-between bg-[#EAEAEA] dark:bg-[#121212]">
          <div>
            <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-400">
              START YOUR PROJECT / INTAKE
            </p>
            <h2
              id="project-drawer-title"
              className="font-serif text-3xl font-normal tracking-tight text-black dark:text-white mt-1"
            >
              Tell us about your home<span className="italic">.</span>
            </h2>
            <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1 font-mono">
              CSLB #1054266 · Direct review by Martin &amp; The Mejia Team
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 -mr-2 text-neutral-500 hover:text-black dark:hover:text-white transition-colors cursor-pointer rounded-full"
            aria-label="Close Project Drawer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {isSubmitted ? (
            /* Confirmation Screen */
            <div className="py-6 flex flex-col items-start space-y-5 animate-fade-in text-neutral-950 dark:text-white">
              <div className="w-12 h-12 rounded-full bg-neutral-100 dark:bg-white/10 text-[#9E6B47] flex items-center justify-center border border-neutral-200 dark:border-white/10">
                <CheckCircle2 className="w-6 h-6" />
              </div>

              <div>
                <h3 className="font-serif text-2xl font-normal tracking-tight text-neutral-950 dark:text-white">
                  Project details received<span className="text-[#9E6B47]">.</span>
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-300 mt-2 leading-relaxed">
                  The Mejia Team reviews your property scope and reaches out within 24 hours to schedule your preliminary consultation or plan review.
                </p>
              </div>

              {/* Summary Card */}
              <div className="w-full p-4 rounded-xs bg-neutral-50 dark:bg-white/5 border border-neutral-200 dark:border-white/10 space-y-2 font-mono text-xs text-neutral-700 dark:text-neutral-300">
                <div className="flex justify-between">
                  <span className="text-neutral-500 dark:text-neutral-400">Project:</span>
                  <span className="font-semibold text-neutral-900 dark:text-white">{projectType}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-500 dark:text-neutral-400">Location:</span>
                  <span className="font-semibold text-neutral-900 dark:text-white">{city}, CA</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-500 dark:text-neutral-400">Status:</span>
                  <span className="font-semibold text-neutral-900 dark:text-white">{hasPlans}</span>
                </div>
                {name && (
                  <div className="flex justify-between">
                    <span className="text-neutral-500 dark:text-neutral-400">Contact:</span>
                    <span className="font-semibold text-neutral-900 dark:text-white">{name} ({contact})</span>
                  </div>
                )}
              </div>

              <div className="w-full pt-2 space-y-3">
                <a
                  href={COMPANY_INFO.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 bg-neutral-950 hover:bg-neutral-800 text-white dark:bg-white dark:text-neutral-950 dark:hover:bg-neutral-200 text-xs font-semibold tracking-wide transition-colors flex items-center justify-center gap-2 rounded-xs cursor-pointer text-center"
                >
                  <Calendar className="w-4 h-4 text-[#9E6B47]" />
                  <span>Schedule 15-Min Discovery Call on Calendly ↗</span>
                </a>

                <button
                  type="button"
                  onClick={handleTextDirectly}
                  className="w-full py-3 px-4 border border-neutral-200 dark:border-white/15 hover:bg-neutral-100 dark:hover:bg-white/5 text-neutral-900 dark:text-white text-xs font-semibold tracking-wide transition-colors flex items-center justify-center gap-2 rounded-xs cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4 text-[#9E6B47]" />
                  <span>Text Photos or Plans to Jessie / Mejia Team</span>
                </button>

                <button
                  type="button"
                  onClick={handleReset}
                  className="w-full py-2 text-xs font-mono text-neutral-500 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white transition-colors cursor-pointer text-center"
                >
                  Done &amp; Close Window
                </button>
              </div>
            </div>
          ) : (
            /* Project Intake Form */
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* 1. Project Type Selector */}
              <div>
                <label className="block text-[11px] font-mono uppercase tracking-[0.14em] text-neutral-500 dark:text-neutral-400 mb-2.5">
                  1. Project Type
                </label>
                <div className="flex flex-wrap gap-2">
                  {PROJECT_TYPES.map((type) => {
                    const isSelected = projectType === type;
                    return (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setProjectType(type)}
                        className={`px-3 py-1.5 text-xs font-medium rounded-xs transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-neutral-950 text-white dark:bg-white dark:text-neutral-950 border border-neutral-950 dark:border-white shadow-xs'
                            : 'bg-neutral-50 hover:bg-neutral-100 dark:bg-white/5 dark:hover:bg-white/10 text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-white/10'
                        }`}
                      >
                        {type}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 2. City Selector */}
              <div>
                <label
                  htmlFor="drawer-city"
                  className="block text-[11px] font-mono uppercase tracking-[0.14em] text-neutral-500 dark:text-neutral-400 mb-2"
                >
                  2. Project Location
                </label>
                <select
                  id="drawer-city"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-neutral-50 dark:bg-white/5 border border-neutral-200 dark:border-white/10 text-neutral-950 dark:text-white text-xs font-sans rounded-xs focus:border-neutral-900 dark:focus:border-white focus:outline-none transition-colors cursor-pointer"
                >
                  {CITIES.map((c) => (
                    <option key={c} value={c} className="bg-white dark:bg-[#121316] text-neutral-950 dark:text-white">
                      {c}, CA
                    </option>
                  ))}
                </select>
              </div>

              {/* 3. Architectural Plans Status */}
              <div>
                <label className="block text-[11px] font-mono uppercase tracking-[0.14em] text-neutral-500 dark:text-neutral-400 mb-2">
                  3. Do You Already Have Architectural Plans?
                </label>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  {['No, need design-build', 'Yes, approved city plans'].map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => setHasPlans(opt)}
                      className={`p-2.5 rounded-xs border text-center transition-all cursor-pointer ${
                        hasPlans === opt
                          ? 'border-neutral-950 dark:border-white bg-neutral-950 dark:bg-white text-white dark:text-neutral-950 font-semibold'
                          : 'border-neutral-200 dark:border-white/10 bg-neutral-50 dark:bg-white/5 text-neutral-700 dark:text-neutral-300'
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              {/* 4. Project Vision & Description */}
              <div>
                <label
                  htmlFor="drawer-desc"
                  className="block text-[11px] font-mono uppercase tracking-[0.14em] text-neutral-500 dark:text-neutral-400 mb-2"
                >
                  4. Tell Us What You're Imagining
                </label>
                <textarea
                  id="drawer-desc"
                  rows={3}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Describe your vision, square footage, timeline, or current bottlenecks in your home..."
                  className="w-full px-3.5 py-2.5 bg-neutral-50 dark:bg-white/5 border border-neutral-200 dark:border-white/10 text-neutral-950 dark:text-white placeholder:text-neutral-400 dark:placeholder:text-neutral-600 text-xs rounded-xs focus:border-neutral-900 dark:focus:border-white focus:outline-none transition-colors resize-none leading-relaxed"
                />
              </div>

              {/* 5. Attach Photos or Plans (Optional) */}
              <div>
                <label className="block text-[11px] font-mono uppercase tracking-[0.14em] text-neutral-500 dark:text-neutral-400 mb-2">
                  5. Photos, Floor Plans, or Inspiration (Optional)
                </label>
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  multiple
                  className="hidden"
                />
                <div
                  onClick={() => fileInputRef.current?.click()}
                  className="w-full p-4 border border-dashed border-neutral-300 dark:border-white/20 hover:border-neutral-950 dark:hover:border-white/40 bg-neutral-50/50 dark:bg-white/[0.02] rounded-xs flex flex-col items-center justify-center text-center cursor-pointer transition-colors group"
                >
                  <Camera className="w-5 h-5 text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors mb-1.5" />
                  <span className="text-xs font-medium text-neutral-800 dark:text-neutral-200">
                    Upload photos or architectural sets
                  </span>
                  <span className="text-[10px] text-neutral-500 dark:text-neutral-400 mt-0.5 font-mono">
                    PDF, JPG, PNG &bull; Speeds up preliminary pricing
                  </span>
                </div>

                {files.length > 0 && (
                  <div className="mt-2.5 space-y-1.5">
                    {files.map((file, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-between px-3 py-1.5 bg-neutral-100 dark:bg-white/10 rounded-xs text-xs font-mono text-neutral-800 dark:text-neutral-200"
                      >
                        <span className="truncate max-w-[240px] text-[11px]">{file.name}</span>
                        <button
                          type="button"
                          onClick={() => removeFile(idx)}
                          className="text-neutral-400 hover:text-red-500 transition-colors cursor-pointer text-sm leading-none pl-2"
                        >
                          &times;
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* 6. Contact Information */}
              <div className="space-y-3 pt-1 border-t border-neutral-200 dark:border-white/10">
                <label className="block text-[11px] font-mono uppercase tracking-[0.14em] text-neutral-500 dark:text-neutral-400 mb-1">
                  6. Contact Information
                </label>
                <div>
                  <input
                    type="text"
                    required
                    placeholder="Your Full Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-neutral-50 dark:bg-white/5 border border-neutral-200 dark:border-white/10 text-neutral-950 dark:text-white placeholder:text-neutral-400 dark:placeholder:text-neutral-600 text-xs rounded-xs focus:border-neutral-900 dark:focus:border-white focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    required
                    placeholder="Phone Number or Email Address"
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-neutral-50 dark:bg-white/5 border border-neutral-200 dark:border-white/10 text-neutral-950 dark:text-white placeholder:text-neutral-400 dark:placeholder:text-neutral-600 text-xs rounded-xs focus:border-neutral-900 dark:focus:border-white focus:outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-4 bg-neutral-950 hover:bg-neutral-800 text-white dark:bg-white dark:text-neutral-950 dark:hover:bg-neutral-200 text-xs font-semibold tracking-wide transition-all flex items-center justify-center gap-2 rounded-xs cursor-pointer disabled:opacity-50"
                >
                  <span>{isSubmitting ? 'Submitting Details...' : 'Submit Project Inquiry'}</span>
                  <span aria-hidden="true">↗</span>
                </button>
                <p className="font-mono text-[10px] text-center text-neutral-500 dark:text-neutral-400 mt-2">
                  No obligation &bull; Family-run design-build team since day one
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
