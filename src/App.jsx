import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import DesktopApp from './components/desktop/DesktopApp';
import BottomNav from './components/BottomNav';
import HomeScreen from './screens/HomeScreen';
import ServicesScreen from './screens/ServicesScreen';
import PortfolioScreen from './screens/PortfolioScreen';
import StoryScreen from './screens/StoryScreen';
import ServiceModal from './components/ServiceModal';
import CallModal from './components/CallModal';
import AreaModal from './components/AreaModal';
import ProjectDrawer from './components/ProjectDrawer';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [selectedService, setSelectedService] = useState(null);
  const [isCallModalOpen, setIsCallModalOpen] = useState(false);
  const [isProjectDrawerOpen, setIsProjectDrawerOpen] = useState(false);
  const [projectPreset, setProjectPreset] = useState('Whole-Home Remodel');
  const [showAreaModal, setShowAreaModal] = useState(false);
  const [selectedArea, setSelectedArea] = useState('Riverside & Central IE Hub');

  const handleOpenProjectDrawer = (preset = 'Whole-Home Remodel') => {
    setProjectPreset(typeof preset === 'string' ? preset : 'Whole-Home Remodel');
    setIsProjectDrawerOpen(true);
  };

  return (
    <ThemeProvider>
      {/* =========================================================================
          1. DESKTOP VIEWPORT (md: breakpoint and up)
          Full architectural editorial website redesign with 1-column & multi-column
          layouts, sticky top navbar, interactive project portfolio, and drawer flows.
          ========================================================================= */}
      <div className="hidden md:block w-full min-h-screen bg-[#F8F7F4] dark:bg-[#121311]">
        <DesktopApp
          onOpenServiceModal={(srv) => setSelectedService(srv)}
          onOpenCallModal={() => setIsCallModalOpen(true)}
          onOpenProjectDrawer={handleOpenProjectDrawer}
          onOpenAreaModal={() => setShowAreaModal(true)}
          selectedArea={selectedArea}
        />
      </div>

      {/* =========================================================================
          2. REAL MOBILE DEVICE VIEWPORT (< md breakpoint)
          100% native edge-to-edge mobile web app with bottom floating pill nav.
          ========================================================================= */}
      <div className="block md:hidden w-full h-[100dvh] overflow-hidden bg-[#F8F7F4] dark:bg-[#121311] font-sans">
        <div className="flex flex-col w-full h-full relative overflow-hidden bg-[#F8F7F4] dark:bg-[#121311]">
          <div className="flex-1 flex flex-col relative h-full min-h-0 overflow-hidden bg-[#F8F7F4] dark:bg-[#121311]">
            {activeTab === 'home' && (
              <HomeScreen
                onSelectTab={setActiveTab}
                onOpenServiceModal={(srv) => setSelectedService(srv)}
                onOpenCallModal={() => setIsCallModalOpen(true)}
                onOpenProjectDrawer={handleOpenProjectDrawer}
                onOpenAreaModal={() => setShowAreaModal(true)}
                selectedArea={selectedArea}
              />
            )}

            {activeTab === 'services' && (
              <ServicesScreen
                onOpenServiceModal={(srv) => setSelectedService(srv)}
                onOpenProjectDrawer={handleOpenProjectDrawer}
              />
            )}

            {activeTab === 'portfolio' && (
              <PortfolioScreen
                onOpenProjectDrawer={handleOpenProjectDrawer}
              />
            )}

            {activeTab === 'story' && (
              <StoryScreen
                onOpenProjectDrawer={handleOpenProjectDrawer}
                onOpenCallModal={() => setIsCallModalOpen(true)}
              />
            )}
          </div>

          <BottomNav
            activeTab={activeTab}
            onSelectTab={setActiveTab}
            onOpenProjectDrawer={handleOpenProjectDrawer}
          />
        </div>
      </div>

      {/* =========================================================================
          3. SHARED ARCHITECTURAL DIALOGS & OVERLAYS
          ========================================================================= */}
      <ServiceModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onOpenProjectDrawer={handleOpenProjectDrawer}
        onOpenCallModal={() => setIsCallModalOpen(true)}
      />

      <CallModal
        isOpen={isCallModalOpen}
        onClose={() => setIsCallModalOpen(false)}
      />

      <ProjectDrawer
        isOpen={isProjectDrawerOpen}
        onClose={() => setIsProjectDrawerOpen(false)}
        initialProject={projectPreset}
      />

      <AreaModal
        isOpen={showAreaModal}
        onClose={() => setShowAreaModal(false)}
        selectedArea={selectedArea}
        onSelectArea={(area) => setSelectedArea(area)}
      />
    </ThemeProvider>
  );
}
