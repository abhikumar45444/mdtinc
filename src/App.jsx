import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import DesktopApp from './components/desktop/DesktopApp';
import ProjectDrawer from './components/ProjectDrawer';

export default function App() {
  const [isProjectDrawerOpen, setIsProjectDrawerOpen] = useState(false);
  const [projectPreset, setProjectPreset] = useState('Whole-Home Remodel');

  const handleOpenProjectDrawer = (preset = 'Whole-Home Remodel') => {
    setProjectPreset(typeof preset === 'string' ? preset : 'Whole-Home Remodel');
    setIsProjectDrawerOpen(true);
  };

  return (
    <ThemeProvider>
      <div className="w-full min-h-screen bg-[#F8F5EE] dark:bg-[#131211] font-sans text-[#191816] dark:text-[#EFECE6] selection:bg-[#A0633B] selection:text-white">
        <DesktopApp
          onOpenProjectDrawer={handleOpenProjectDrawer}
        />
      </div>

      {/* Slide-Over Project Inquiry Drawer */}
      <ProjectDrawer
        isOpen={isProjectDrawerOpen}
        onClose={() => setIsProjectDrawerOpen(false)}
        initialProject={projectPreset}
      />
    </ThemeProvider>
  );
}
