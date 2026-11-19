import React from 'react';
import { Home, Layers, Image, BookOpen, Send } from 'lucide-react';

export default function BottomNav({ activeTab, onSelectTab, onOpenProjectDrawer }) {
  const tabs = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'services', label: 'Build', icon: Layers },
    { id: 'portfolio', label: 'Work', icon: Image },
    { id: 'story', label: 'Story', icon: BookOpen }
  ];

  return (
    <div className="fixed bottom-3 left-4 right-4 z-40 md:hidden flex items-center justify-between bg-white/95 dark:bg-[#181916]/95 backdrop-blur-md border border-neutral-200 dark:border-white/10 rounded-full px-3 py-2 shadow-lg">
      <div className="flex items-center gap-1">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => onSelectTab(tab.id)}
              className={`flex flex-col items-center justify-center py-1 px-3 rounded-full transition-colors ${
                isActive
                  ? 'text-[#9E6B47] dark:text-[#C28854] font-semibold'
                  : 'text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span className="text-[10px] mt-0.5 font-mono">{tab.label}</span>
            </button>
          );
        })}
      </div>

      <button
        onClick={() => onOpenProjectDrawer('Whole-Home Remodel')}
        className="px-3.5 py-2 rounded-full bg-neutral-950 text-white dark:bg-white dark:text-neutral-950 font-semibold text-xs flex items-center gap-1.5 shadow-sm active:scale-95 transition-transform"
      >
        <Send className="w-3.5 h-3.5 text-[#9E6B47]" />
        <span>Inquire</span>
      </button>
    </div>
  );
}
