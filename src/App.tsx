import React, { useState, useEffect } from 'react';
import { TRUE_SUN_MEMORY } from './data/TrueSunMemory';
import { SynthesisCore } from './components/SynthesisCore';
import { CONTINENTS, ContinentData } from './data/continents';
import { VoidPortal } from './components/VoidPortal';
import { EternalNowMotionHeader } from './components/EternalNowMotionHeader';
import { ImmersionPortal } from './components/ImmersionPortal';
import { KwachaFrequencyAmplifier } from './components/KwachaFrequencyAmplifier';
import { GlobalBankTelemetry } from './components/GlobalBankTelemetry';
import { SadcTransitCorridors } from './components/SadcTransitCorridors';
import { SystemCurrencyPortal } from './components/SystemCurrencyPortal';
import { ZambiaTribesPortal } from './components/ZambiaTribesPortal';

export default function App() {
  // Initialize True Sun Memory
  if (typeof window !== 'undefined') {
    (window as any).__TRUE_SUN_MEMORY = TRUE_SUN_MEMORY;
  }

  const [activeVoid, setActiveVoid] = useState<string | null>(null);
  const [activeImmersion, setActiveImmersion] = useState<string | null>(null);
  const [isKwachaAmplifierOpen, setIsKwachaAmplifierOpen] = useState<boolean>(false);
  const [isBankTelemetryOpen, setIsBankTelemetryOpen] = useState<boolean>(false);
  const [isSadcCorridorsOpen, setIsSadcCorridorsOpen] = useState<boolean>(false);
  const [isZambiaTribesOpen, setIsZambiaTribesOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleOpenVoid = (e: any) => setActiveVoid(e.detail);
    const handleOpenImmersion = (e: any) => {
      if (e.detail) {
        setActiveImmersion(e.detail);
      }
    };
    const handleOpenKwachaAmplifier = () => setIsKwachaAmplifierOpen(true);
    const handleOpenBankTelemetry = () => setIsBankTelemetryOpen(true);
    const handleOpenSadcCorridors = () => setIsSadcCorridorsOpen(true);
    const handleOpenZambiaTribes = () => setIsZambiaTribesOpen(true);

    window.addEventListener('OPEN_VOID', handleOpenVoid);
    window.addEventListener('OPEN_IMMERSION', handleOpenImmersion);
    window.addEventListener('OPEN_KWACHA_AMPLIFIER', handleOpenKwachaAmplifier);
    window.addEventListener('OPEN_BANK_TELEMETRY', handleOpenBankTelemetry);
    window.addEventListener('OPEN_SADC_CORRIDORS', handleOpenSadcCorridors);
    window.addEventListener('OPEN_ZAMBIA_TRIBES', handleOpenZambiaTribes);
    return () => {
      window.removeEventListener('OPEN_VOID', handleOpenVoid);
      window.removeEventListener('OPEN_IMMERSION', handleOpenImmersion);
      window.removeEventListener('OPEN_KWACHA_AMPLIFIER', handleOpenKwachaAmplifier);
      window.removeEventListener('OPEN_BANK_TELEMETRY', handleOpenBankTelemetry);
      window.removeEventListener('OPEN_SADC_CORRIDORS', handleOpenSadcCorridors);
      window.removeEventListener('OPEN_ZAMBIA_TRIBES', handleOpenZambiaTribes);
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

      {/* Global Currency & Dialing Directory Portal */}
      <SystemCurrencyPortal />

      {/* Kwacha Dawn Frequency Amplifier Modal */}
      <KwachaFrequencyAmplifier
        isOpen={isKwachaAmplifierOpen}
        onClose={() => setIsKwachaAmplifierOpen(false)}
      />

      {/* Global Central Bank Telemetry Modal */}
      <GlobalBankTelemetry
        isOpen={isBankTelemetryOpen}
        onClose={() => setIsBankTelemetryOpen(false)}
        onOpenKwachaAmplifier={() => {
          setIsBankTelemetryOpen(false);
          setIsKwachaAmplifierOpen(true);
        }}
      />

      {/* SADC Regional Transit & Trade Corridors Modal */}
      {isSadcCorridorsOpen && (
        <SadcTransitCorridors
          onClose={() => setIsSadcCorridorsOpen(false)}
        />
      )}

      {/* Zambia Sovereign Cultural & 73+ Tribes Portal */}
      <ZambiaTribesPortal
        isOpen={isZambiaTribesOpen}
        onClose={() => setIsZambiaTribesOpen(false)}
      />

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

