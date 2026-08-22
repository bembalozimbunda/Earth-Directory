import React, { useState, useEffect } from 'react';
import { TRUE_SUN_MEMORY } from './data/TrueSunMemory';
import { SynthesisCore } from './components/SynthesisCore';
import { ContinentDoor } from './components/ContinentDoor';
import { CONTINENTS, ContinentData } from './data/continents';
import { ZambiaNodeAuth } from './components/ZambiaNodeAuth';
import { MotorOS } from './components/MotorOS';
import { DirectoryTree } from './components/DirectoryTree';
import { SystemCurrencyPortal } from './components/SystemCurrencyPortal';
import { VoidPortal } from './components/VoidPortal';
import { AncestralIntelligence } from './components/AncestralIntelligence';
import { AncientTechnology } from './components/AncientTechnology';
import { SystemBlueprint } from './components/SystemBlueprint';
import { ZambiaHealthSupportPortal } from './components/ZambiaHealthSupportPortal';
import { EternalNowMotionHeader } from './components/EternalNowMotionHeader';
import { SevenLivingWordsPortal } from './components/SevenLivingWordsPortal';
import { OmniCommandPalette } from './components/OmniCommandPalette';
import { ResonanceWaveVisualizer } from './components/ResonanceWaveVisualizer';
import { GlobalInternetSyncPortal } from './components/GlobalInternetSyncPortal';
import { globalInternetSync } from './data/globalInternetSync';
import { Orbit, LifeBuoy, Search, Globe, Wifi } from 'lucide-react';

export default function App() {
  // Initialize True Sun Memory
  if (typeof window !== 'undefined') {
    (window as any).__TRUE_SUN_MEMORY = TRUE_SUN_MEMORY;
  }

  const [isLocked, setIsLocked] = useState(false);
  const [masterUnlocked, setMasterUnlocked] = useState(false);
  const [showInput, setShowInput] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [selectedContinent, setSelectedContinent] = useState<ContinentData | null>(null);
  const [showZambiaAuth, setShowZambiaAuth] = useState(false);
  const [showMotorOS, setShowMotorOS] = useState(false);
  const [activeVoid, setActiveVoid] = useState<string | null>(null);
  const [showAncestralSync, setShowAncestralSync] = useState(false);
  const [showAncientBlueprint, setShowAncientBlueprint] = useState(false);
  const [showBlueprint, setShowBlueprint] = useState(false);
  const [showHealthSupport, setShowHealthSupport] = useState(false);
  const [showCommandPalette, setShowCommandPalette] = useState(false);
  const [showInternetSync, setShowInternetSync] = useState(false);
  const [latencyMs, setLatencyMs] = useState(24);

  useEffect(() => {
    const unsubscribe = globalInternetSync.subscribe(state => {
      setLatencyMs(state.averageLatencyMs);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const handleMaster = () => setMasterUnlocked(true);
    window.addEventListener('MASTER_UNLOCK', handleMaster);
    return () => window.removeEventListener('MASTER_UNLOCK', handleMaster);
  }, []);

  useEffect(() => {
    const handleOpenHealth = () => setShowHealthSupport(true);
    window.addEventListener('OPEN_HEALTH_SUPPORT', handleOpenHealth);
    return () => window.removeEventListener('OPEN_HEALTH_SUPPORT', handleOpenHealth);
  }, []);

  useEffect(() => {
    const handleOpenSync = () => setShowInternetSync(true);
    window.addEventListener('OPEN_GLOBAL_INTERNET_SYNC', handleOpenSync);
    return () => window.removeEventListener('OPEN_GLOBAL_INTERNET_SYNC', handleOpenSync);
  }, []);

  useEffect(() => {
    const handleToggleCmd = () => setShowCommandPalette(prev => !prev);
    window.addEventListener('TOGGLE_COMMAND_PALETTE', handleToggleCmd);
    return () => window.removeEventListener('TOGGLE_COMMAND_PALETTE', handleToggleCmd);
  }, []);

  const handleOpenSystem = (systemName: string) => {
    if (systemName === 'blueprint') setShowBlueprint(true);
    else if (systemName === 'ancient') setShowAncientBlueprint(true);
    else if (systemName === 'motor') setShowMotorOS(true);
    else if (systemName === 'health') setShowHealthSupport(true);
    else if (systemName === 'internet-sync') setShowInternetSync(true);
    else if (systemName === 'currency') window.dispatchEvent(new CustomEvent('OPEN_SYSTEM_CURRENCY'));
    else if (systemName === 'living-words') window.dispatchEvent(new CustomEvent('OPEN_SEVEN_LIVING_WORDS'));
  };
  
  useEffect(() => {
    if (inputValue.includes('0000')) {
      setIsLocked(false);
    }
  }, [inputValue]);

  useEffect(() => {
    const handleOpenVoid = (e: any) => setActiveVoid(e.detail);
    window.addEventListener('OPEN_VOID', handleOpenVoid);
    return () => window.removeEventListener('OPEN_VOID', handleOpenVoid);
  }, []);

  const handleContinentSelect = (id: string) => {
    const continent = CONTINENTS.find(c => c.id === id);
    if (continent) {
      setSelectedContinent(continent);
    }
  };

  if (activeVoid) {
    return <VoidPortal voidName={activeVoid} onClose={() => setActiveVoid(null)} />;
  }

  return (
    <div className="min-h-screen bg-zinc-950 flex flex-col items-center justify-center py-12 px-6 relative overflow-hidden font-sans">
      
      {/* Blueprint Access Button */}
      {!isLocked && (
        <button
          onClick={() => setShowBlueprint(true)}
          className="fixed bottom-8 right-8 z-40 flex items-center gap-2 bg-black/40 hover:bg-cyan-950/40 border border-zinc-800 hover:border-cyan-800 text-zinc-500 hover:text-cyan-400 backdrop-blur px-4 py-2 rounded-full transition-colors group cursor-pointer"
        >
          <Orbit className="w-4 h-4 group-hover:animate-spin" />
          <span className="text-[10px] tracking-widest uppercase font-mono">System Blueprint</span>
        </button>
      )}

      {/* Dashes Portal Floating Button (Direct Access to Real-World Health & Counseling Support in Zambia) */}
      <button
        onClick={() => setShowHealthSupport(true)}
        title="Open Dashes Portal: Real-World Health & Counseling Support Resources in Zambia"
        className="fixed bottom-6 left-4 sm:bottom-6 sm:left-6 z-40 flex items-center gap-3 bg-zinc-950/90 hover:bg-emerald-950/70 border border-zinc-800 hover:border-emerald-500/60 text-zinc-300 hover:text-emerald-300 backdrop-blur-md px-4 py-2.5 rounded-full transition-colors shadow-[0_0_20px_rgba(0,0,0,0.8)] group cursor-pointer"
      >
        {/* The 3 Dashes Element */}
        <div className="flex flex-col items-center justify-center gap-1 w-2.5 h-4">
          <div className="w-2.5 h-0.5 bg-emerald-400 rounded-full group-hover:w-3 transition-all" />
          <div className="w-2.5 h-0.5 bg-emerald-400 rounded-full group-hover:w-3 transition-all" />
          <div className="w-2.5 h-0.5 bg-emerald-400 rounded-full group-hover:w-3 transition-all" />
        </div>
        <div className="flex flex-col text-left">
          <span className="text-[10px] tracking-widest uppercase font-mono font-bold text-emerald-400 group-hover:text-emerald-300 flex items-center gap-1.5">
            Dashes Portal <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping inline-block" />
          </span>
          <span className="text-[9px] text-zinc-400 font-mono hidden sm:inline">
            Zambia Health & Support (116 / 933)
          </span>
        </div>
      </button>

      <SystemCurrencyPortal />
      <SevenLivingWordsPortal />
      <DirectoryTree onNodeSelect={() => {}} />

      {/* Top Floating Command Bar & Witness Resonance Visualizer */}
      {!isLocked && (
        <div className="fixed top-4 left-1/2 -translate-x-1/2 z-40 flex items-center gap-2 max-w-[95vw]">
          {/* Global Open Internet Live Status & Trigger */}
          <button
            onClick={() => setShowInternetSync(true)}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-950/80 hover:bg-emerald-900/90 border border-emerald-500/50 hover:border-emerald-400 text-emerald-300 backdrop-blur-md transition-all shadow-[0_0_20px_rgba(16,185,129,0.25)] cursor-pointer group"
            title="Global Open Internet: Connected • Click to View Planetary Telemetry & Update System"
          >
            <div className="relative flex items-center justify-center">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping absolute" />
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
            </div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-300 font-medium">
              Internet: Live
            </span>
            <span className="hidden sm:inline-block px-1.5 py-0.2 rounded bg-emerald-900/60 border border-emerald-700/50 text-[9px] font-mono text-emerald-300">
              {latencyMs}ms
            </span>
          </button>

          {/* 02. Transducer / Reasoner Search Trigger */}
          <button
            onClick={() => setShowCommandPalette(true)}
            className="flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-zinc-950/85 hover:bg-zinc-900/90 border border-zinc-800/80 hover:border-amber-500/50 text-zinc-300 hover:text-white backdrop-blur-md transition-colors shadow-[0_0_20px_rgba(0,0,0,0.6)] cursor-pointer group"
            title="02. The Transducer / Reasoner — Global Command & Node Search (Cmd+K / Ctrl+K)"
          >
            <Search className="w-3.5 h-3.5 text-zinc-400 group-hover:text-amber-400 transition-colors" />
            <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 group-hover:text-zinc-200">
              Query Matrix
            </span>
            <span className="hidden sm:inline-block px-1.5 py-0.2 rounded bg-zinc-900 border border-zinc-800 text-[9px] font-mono text-zinc-500">
              ⌘K
            </span>
          </button>

          {/* 07. Witness / Feedback Loop Real-time Audio Spectrum */}
          <ResonanceWaveVisualizer />
        </div>
      )}

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(24,24,27,1)_0%,rgba(9,9,11,1)_100%)] pointer-events-none" />
      
      <div className="z-10 w-full flex-1 flex flex-col items-center justify-between">
        <div className="text-center mt-6 mb-10 flex flex-col items-center">
          <EternalNowMotionHeader />
          <h1 className="text-2xl md:text-4xl font-light tracking-[0.3em] text-white mb-6 uppercase">
            Universal <span className="text-amber-500 font-medium">Core Engine</span>
          </h1>
          <p className="text-zinc-400 text-xs md:text-sm tracking-[0.15em] uppercase max-w-2xl mx-auto leading-relaxed">
            The ultimate synthesis. Fusing unseen source codes, hardware, bloodlines, and frequencies into a single unified language. All is in the one.
          </p>
        </div>

        <div className="flex-1 w-full flex items-center justify-center my-8 relative z-20">
          <SynthesisCore onContinentSelect={handleContinentSelect} masterUnlocked={masterUnlocked} />
        </div>
      </div>

      {selectedContinent && (
        <ContinentDoor 
          continent={selectedContinent} 
          onClose={() => setSelectedContinent(null)} 
        />
      )}

      {showZambiaAuth && (
        <ZambiaNodeAuth onClose={() => setShowZambiaAuth(false)} />
      )}

      {showMotorOS && (
        <MotorOS onClose={() => setShowMotorOS(false)} />
      )}

      {showAncestralSync && (
        <AncestralIntelligence onClose={() => setShowAncestralSync(false)} />
      )}
      
      {showBlueprint && (
        <SystemBlueprint onClose={() => setShowBlueprint(false)} />
      )}

      {showAncientBlueprint && (
        <AncientTechnology onClose={() => setShowAncientBlueprint(false)} />
      )}

      {showHealthSupport && (
        <ZambiaHealthSupportPortal onClose={() => setShowHealthSupport(false)} />
      )}

      {showInternetSync && (
        <GlobalInternetSyncPortal onClose={() => setShowInternetSync(false)} />
      )}

      <OmniCommandPalette 
        isOpen={showCommandPalette}
        onClose={() => setShowCommandPalette(false)}
        onOpenContinent={(continent) => setSelectedContinent(continent)}
        onOpenSystem={handleOpenSystem}
      />
    </div>
  );
}