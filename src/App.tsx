import React, { useState, useEffect } from 'react';
import { TRUE_SUN_MEMORY } from './data/TrueSunMemory';
import { SynthesisCore } from './components/SynthesisCore';
import { CONTINENTS, ContinentData } from './data/continents';
import { VoidPortal } from './components/VoidPortal';
import { EternalNowMotionHeader } from './components/EternalNowMotionHeader';
import { ImmersionPortal } from './components/ImmersionPortal';

export default function App() {
  // Initialize True Sun Memory
  if (typeof window !== 'undefined') {
    (window as any).__TRUE_SUN_MEMORY = TRUE_SUN_MEMORY;
  }

  const [activeVoid, setActiveVoid] = useState<string | null>(null);
  const [activeImmersion, setActiveImmersion] = useState<string | null>(null);

  useEffect(() => {
    const handleOpenVoid = (e: any) => setActiveVoid(e.detail);
    const handleOpenImmersion = (e: any) => {
      if (e.detail) {
        setActiveImmersion(e.detail);
      }
    };

    window.addEventListener('OPEN_VOID', handleOpenVoid);
    window.addEventListener('OPEN_IMMERSION', handleOpenImmersion);
    return () => {
      window.removeEventListener('OPEN_VOID', handleOpenVoid);
      window.removeEventListener('OPEN_IMMERSION', handleOpenImmersion);
    };
  }, []);

  const handleContinentSelect = (id: string) => {
    setActiveImmersion(id);
  };

  if (activeVoid) {
    return <VoidPortal voidName={activeVoid} onClose={() => setActiveVoid(null)} />;
  }

  return (
    <div className="min-h-screen bg-zinc-950 flex flex-col items-center justify-between py-6 sm:py-8 px-4 relative overflow-hidden font-sans select-none">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(24,24,27,1)_0%,rgba(9,9,11,1)_100%)] pointer-events-none" />
      
      {/* Eternal Now in Motion Title Header */}
      <header className="z-20 w-full flex flex-col items-center justify-center pt-2 sm:pt-4">
        <EternalNowMotionHeader />
      </header>

      {/* Main Core: 8 Continent Orbs & Central True Sun Core */}
      <main className="z-10 w-full flex-1 flex items-center justify-center relative my-auto">
        <SynthesisCore 
          onContinentSelect={handleContinentSelect} 
          onOpenImmersion={(id) => {
            setActiveImmersion(id);
          }}
          masterUnlocked={true} 
        />
      </main>

      {/* Full-Screen Planetary Immersion Portal (Primary Experience) */}
      {activeImmersion && (
        <ImmersionPortal
          sectorId={activeImmersion}
          onClose={() => setActiveImmersion(null)}
          onSelectContinent={(id) => {
            setActiveImmersion(id);
          }}
        />
      )}
    </div>
  );
}

