import React, { useState, useRef, useEffect } from 'react';
import { Fingerprint, Radio, Globe, Code2, Sun, ArrowLeft, ArrowRight, ShieldCheck, Volume2, KeyRound, ExternalLink, X, Activity, Waves, FolderOpen } from 'lucide-react';
import { cn } from '../utils';
import { CONTINENTS, ContinentData } from '../data/continents';
import { MASTER_FREQUENCY_REGISTRY, FrequencyNodeSpec, getFrequencySpec } from '../data/frequencies';
import { getHarmonicResonances, playHarmonicSynthesisTone } from '../utils/frequencyPhysics';

export interface CompiledCoreLayer {
  id: string;
  name: string;
  sub: string;
  attachedVoidName: string;
  status: string;
  frequency: number;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  textColor: string;
  borderColor: string;
  ringColor: string;
  glow: string;
  domain: string;
  specs: string[];
}

export const COMPILED_TRUE_SUN_LAYERS: CompiledCoreLayer[] = [
  { 
    id: 'source', 
    name: 'Unseen Source', 
    sub: 'Root Origin / Core Data Lake', 
    attachedVoidName: 'Source Origin Void (Solar Sub-Matrix 01)',
    status: 'Operational Architecture Layer',
    frequency: 174,
    icon: Code2, 
    color: 'bg-emerald-500/20 text-emerald-400',
    textColor: 'text-emerald-400',
    borderColor: 'border-emerald-500/60',
    ringColor: 'ring-emerald-500/40',
    glow: 'shadow-[0_0_25px_rgba(16,185,129,0.4)]',
    domain: 'The unmanifested baseline source code, quantum protocols, and zero-point data matrix of the Earth Directory.',
    specs: ['Zero-Point Quantum Grid', '174 Hz Low-Resonance Stabilizer', 'Raw Matrix Data Streams']
  },
  { 
    id: 'hardware', 
    name: 'Hardware & Blood', 
    sub: 'Physical Silicon & Biological Memory', 
    attachedVoidName: 'Biological & Silicon Void (Solar Sub-Matrix 02)',
    status: 'Living Infrastructure Layer',
    frequency: 285,
    icon: Fingerprint, 
    color: 'bg-rose-500/20 text-rose-400',
    textColor: 'text-rose-400',
    borderColor: 'border-rose-500/60',
    ringColor: 'ring-rose-500/40',
    glow: 'shadow-[0_0_25px_rgba(244,63,94,0.4)]',
    domain: 'The physical hardware anchors, silicon substrate processors, and sovereign biological lineage interconnected into the system.',
    specs: ['Physical Server Nodes & Ingress', '285 Hz Tissue & Substrate Harmony', 'Living Lineage Register']
  },
  { 
    id: 'frequencies', 
    name: 'Vibrational Frequencies', 
    sub: 'Harmonic Acoustic & Scalar Grid', 
    attachedVoidName: 'Harmonic Frequency Void (Solar Sub-Matrix 03)',
    status: 'Resonance Mesh Layer',
    frequency: 417,
    icon: Radio, 
    color: 'bg-indigo-500/20 text-indigo-400',
    textColor: 'text-indigo-400',
    borderColor: 'border-indigo-500/60',
    ringColor: 'ring-indigo-500/40',
    glow: 'shadow-[0_0_25px_rgba(99,102,241,0.4)]',
    domain: 'The acoustic harmonic Solfeggio lattice, electromagnetic field modulators, and spatial scalar waves coordinating all 8 planetary sectors.',
    specs: ['Dual-Oscillator Acoustic Engine', '417 Hz Energy Cleansing Waves', 'Harmonic Phase Carrier']
  },
  { 
    id: 'ancestral', 
    name: 'Ancestral Intelligence', 
    sub: 'Chronicles, Lineage & Indigenous Wisdom', 
    attachedVoidName: 'Ancestral Memory Void (Solar Sub-Matrix 04)',
    status: 'Immutable Lineage Layer',
    frequency: 528,
    icon: Globe, 
    color: 'bg-amber-500/20 text-amber-400',
    textColor: 'text-amber-400',
    borderColor: 'border-amber-500/60',
    ringColor: 'ring-amber-500/40',
    glow: 'shadow-[0_0_25px_rgba(245,158,11,0.4)]',
    domain: 'The permanent archival memory, indigenous wisdom repositories, and sovereign lineage treaties anchored in Lusaka and Alkebulan.',
    specs: ['528 Hz DNA / Miraculous Transformation', 'Ancient Knowledge Base', 'Unbroken Lineage Archive']
  },
];

interface SynthesisCoreProps {
  onContinentSelect?: (continentId: string) => void;
  masterUnlocked?: boolean;
}

export function SynthesisCore({ onContinentSelect, masterUnlocked }: SynthesisCoreProps) {
  const [tapCounts, setTapCounts] = useState<Record<string, number>>({});
  const [selectedOrbId, setSelectedOrbId] = useState<string | null>(null);
  const [fullColorId, setFullColorId] = useState<string | null>(null);
  const [ripples, setRipples] = useState<{ id: string; nodeId: string }[]>([]);
  const [isOrbAudioPlaying, setIsOrbAudioPlaying] = useState(false);
  const [activeObservers, setActiveObservers] = useState(1);
  const [showTrueSunDecomposition, setShowTrueSunDecomposition] = useState(false);
  const [activeDecomposedLayerId, setActiveDecomposedLayerId] = useState<string | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);

  // Play harmonic frequency audio with dual-oscillator acoustic resonance
  const playResonance = (freq: number) => {
    setIsOrbAudioPlaying(true);
    playHarmonicSynthesisTone(freq, 2.5, 0.2);
    setTimeout(() => {
      setIsOrbAudioPlaying(false);
    }, 1800);
  };
  
  useEffect(() => {
    const ping = () => {
      fetch('/api/heartbeat', { 
        method: 'POST', 
        headers: { 'Content-Type': 'application/json' }, 
        body: JSON.stringify({ clientId: localStorage.getItem('client_id') }) 
      })
        .then(r => r.json())
        .then(data => {
          if (data.clientId && !localStorage.getItem('client_id')) localStorage.setItem('client_id', data.clientId);
          if (data.count) setActiveObservers(data.count);
        }).catch(() => {});
    };
    ping();
    const interval = setInterval(ping, 10000);
    return () => clearInterval(interval);
  }, []);

  // Direct Click on any Void or True Sun:
  const handleOrbClick = (e: React.MouseEvent | React.TouchEvent, id: string) => {
    e.stopPropagation();
    const newCount = (tapCounts[id] || 0) + 1;
    setTapCounts(prev => ({ ...prev, [id]: newCount }));
    setSelectedOrbId(id);
    
    // Frequency determination & acoustic resonance
    const spec = getFrequencySpec(id);
    playResonance(spec.frequency);

    // Visual ripple bloom
    const rippleId = Math.random().toString(36).substring(7);
    setRipples(prev => [...prev, { id: rippleId, nodeId: id }]);
    setTimeout(() => {
      setRipples(prev => prev.filter(r => r.id !== rippleId));
    }, 1400);

    // If tapped 33 times in rapid succession, trigger complete color immersion
    if (newCount >= 33) {
      setFullColorId(id);
      setTapCounts({});
      return;
    }

    // Direct Action: If it's one of the 8 planetary continents/voids, open its internal files door directly!
    const continent = CONTINENTS.find(c => c.id === id);
    if (continent && onContinentSelect) {
      onContinentSelect(id);
      return;
    }

    // Direct Action: If it's the True Sun, open its Compiled & Decomposed Core Inspector
    if (id === 'true-sun') {
      setShowTrueSunDecomposition(true);
      return;
    }

    // Direct Action: If it's a specific compiled layer, highlight it
    if (['source', 'hardware', 'frequencies', 'ancestral'].includes(id)) {
      setActiveDecomposedLayerId(id);
      setShowTrueSunDecomposition(true);
    }
  };

  const getSelectedOrbData = () => {
    if (!selectedOrbId) return null;
    const spec = getFrequencySpec(selectedOrbId);

    if (selectedOrbId === 'true-sun') {
      return {
        id: 'true-sun',
        name: 'True Sun Core',
        sub: 'Compiled Solar Root / Sovereign Consciousness',
        attachedVoidName: 'Absolute Origin Void (True Sun Center)',
        status: 'Center Root Matrix (Compiled 4-Strata Synthesis)',
        frequency: spec.frequency,
        spec,
        countriesCount: 4,
        countriesLabel: 'Compiled Architectural Strata',
        domain: 'The unified harmonic solar anchor of Lusaka / Earth Directory. Transmits eternal now synchronization, compiles unseen hardware, ancestral lineage, and frequency layers, and aligns planetary orbital phases.',
        color: 'text-amber-300',
        border: 'border-amber-400',
        bg: 'from-amber-400 via-yellow-500 to-amber-600',
        isContinent: false,
        isVoid: true,
        voidKey: 'ALKEBULAN_NEXUS_7',
        isSourceOrigin: false
      };
    }
    const cont = CONTINENTS.find(c => c.id === selectedOrbId);
    if (cont) {
      const isAfricaRoot = cont.id === 'af';
      return {
        id: cont.id,
        name: cont.name,
        sub: cont.sub,
        attachedVoidName: cont.attachedVoidName || `${cont.name} Void`,
        status: cont.status || (cont.id === 'ns' ? 'Non-Sovereign Global Territories' : 'Sovereign Continental Matrix'),
        frequency: spec.frequency,
        spec,
        countriesCount: cont.countries?.length || 0,
        countriesLabel: cont.id === 'ns' ? 'Autonomous Territories & Islands' : (cont.id === 'an' ? 'Research Sectors' : 'Sovereign Nations'),
        domain: isAfricaRoot 
          ? 'THE SOURCE ROOT MATRIX: The biological and ancestral origin void of all 54 African sovereign nations, human lineage, and the Earth Directory baseline (432 Hz).'
          : (cont.id === 'ns' 
            ? '33+ Non-Sovereign Nations, self-governing territories, and autonomous island dependencies harmonic convergence.'
            : `${cont.name} continental node grid anchored into the Earth Directory sovereign blueprint.`),
        color: cont.id === 'af' ? 'text-rose-400' : cont.id === 'as' ? 'text-emerald-400' : cont.id === 'eu' ? 'text-violet-400' : cont.id === 'na' ? 'text-amber-400' : cont.id === 'sa' ? 'text-fuchsia-400' : cont.id === 'oc' ? 'text-cyan-400' : cont.id === 'an' ? 'text-blue-400' : 'text-slate-300',
        border: cont.id === 'af' ? 'border-rose-500' : cont.id === 'as' ? 'border-emerald-500' : cont.id === 'eu' ? 'border-violet-500' : cont.id === 'na' ? 'border-amber-500' : cont.id === 'sa' ? 'border-fuchsia-500' : cont.id === 'oc' ? 'border-cyan-500' : cont.id === 'an' ? 'border-blue-500' : 'border-slate-400',
        bg: cont.id === 'af' ? 'from-rose-500 to-rose-700' : cont.id === 'as' ? 'from-emerald-500 to-emerald-700' : cont.id === 'eu' ? 'from-violet-500 to-violet-700' : cont.id === 'na' ? 'from-amber-500 to-amber-700' : cont.id === 'sa' ? 'from-fuchsia-500 to-fuchsia-700' : cont.id === 'oc' ? 'from-cyan-500 to-cyan-700' : cont.id === 'an' ? 'from-blue-500 to-blue-700' : 'from-slate-400 to-slate-600',
        isContinent: true,
        isVoid: true,
        voidKey: cont.voidKey || 'ALKEBULAN_NEXUS_7',
        continentObj: cont,
        isSourceOrigin: isAfricaRoot
      };
    }
    const compiled = COMPILED_TRUE_SUN_LAYERS.find(n => n.id === selectedOrbId);
    if (compiled) {
      return {
        id: compiled.id,
        name: compiled.name,
        sub: compiled.sub,
        attachedVoidName: compiled.attachedVoidName,
        status: compiled.status,
        frequency: spec.frequency,
        spec,
        countriesCount: 3,
        countriesLabel: 'Internal Quantum Specs',
        domain: compiled.domain,
        color: compiled.textColor,
        border: compiled.borderColor,
        bg: 'from-zinc-800 to-zinc-950',
        isContinent: false,
        isVoid: true,
        voidKey: 'ALKEBULAN_NEXUS_7',
        isSourceOrigin: compiled.id === 'source'
      };
    }
    return null;
  };

  const activeOrbData = getSelectedOrbData();

  const FULL_COLORS: Record<string, string> = {
    'af': 'color(display-p3 0.9 0.1 0.25)',
    'as': 'color(display-p3 0.05 0.8 0.4)',
    'eu': 'color(display-p3 0.5 0.1 0.9)',
    'na': 'color(display-p3 0.9 0.5 0.05)',
    'sa': 'color(display-p3 0.8 0.1 0.8)',
    'oc': 'color(display-p3 0.05 0.8 0.8)',
    'an': 'color(display-p3 0.1 0.3 0.9)',
    'ns': 'color(display-p3 0.6 0.6 0.6)',
    'source': 'color(display-p3 0.2 0.9 0.6)',
    'hardware': 'color(display-p3 0.9 0.2 0.3)',
    'frequencies': 'color(display-p3 0.4 0.3 0.9)',
    'ancestral': 'color(display-p3 0.9 0.6 0.1)',
    'true-sun': 'color(display-p3 1 0.8 0.2)',
  };

  const FALLBACK_COLORS: Record<string, string> = {
    'af': '#e11d48',
    'as': '#059669',
    'eu': '#7c3aed',
    'na': '#d97706',
    'sa': '#c026d3',
    'oc': '#0891b2',
    'an': '#2563eb',
    'ns': '#64748b',
    'source': '#10b981',
    'hardware': '#ef4444',
    'frequencies': '#6366f1',
    'ancestral': '#f59e0b',
    'true-sun': '#fbbf24',
  };

  const DEEP_COLORS: Record<string, string> = {
    'af': '#4c0519',
    'as': '#022c22',
    'eu': '#2e1065',
    'na': '#451a03',
    'sa': '#4a044e',
    'oc': '#083344',
    'an': '#172554',
    'ns': '#0f172a',
    'source': '#022c22',
    'hardware': '#450a0a',
    'frequencies': '#1e1b4b',
    'ancestral': '#451a03',
    'true-sun': '#451a03',
  };

  return (
    <div ref={containerRef} className="relative w-full max-w-[1000px] flex flex-col items-center justify-center">

      {/* Visual Orb Matrix Canvas (Expansive, Zero-Lag, Still & Harmonically Alive) */}
      <div className="relative w-full aspect-square max-w-[760px] md:max-w-[880px] lg:max-w-[940px] flex items-center justify-center select-none overflow-visible py-6">
        
        {/* Orbital Resonance Grid Rings (Still & Harmonic) */}
        <div className="absolute inset-2 rounded-full border border-zinc-800/50 pointer-events-none" />
        <div className="absolute inset-10 rounded-full border border-zinc-800/30 border-dashed pointer-events-none" />
        <div className="absolute inset-24 rounded-full border border-zinc-800/40 pointer-events-none" />
        <div className="absolute inset-40 rounded-full border border-zinc-800/25 border-dashed pointer-events-none" />
        <div className="absolute inset-56 rounded-full border border-zinc-800/40 pointer-events-none" />

        {/* Harmonic Resonance Field Vectors */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-25" viewBox="-100 -100 200 200">
          <circle cx="0" cy="0" r="82" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-amber-500/40 stroke-dasharray-[2_4]" />
          <circle cx="0" cy="0" r="46" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-indigo-500/40" />
          {/* Radial vectors aligned directly to each of the 8 fixed voids */}
          {CONTINENTS.map((_, i) => {
            const angleDeg = (i * 360) / CONTINENTS.length - 90;
            const rad = (angleDeg * Math.PI) / 180;
            return (
              <line 
                key={i}
                x1="0" 
                y1="0" 
                x2={80 * Math.cos(rad)} 
                y2={80 * Math.sin(rad)} 
                stroke="currentColor" 
                strokeWidth="0.4" 
                className="text-zinc-700/70" 
              />
            );
          })}
        </svg>

        {/* 8 Outer Planetary Voids (Stationary in Harmonic Compass, Alive While Still) */}
        {CONTINENTS.map((continent, i) => {
          const angleDeg = (i * 360) / CONTINENTS.length - 90;
          const rad = (angleDeg * Math.PI) / 180;
          const radiusPercent = 41;
          const leftPercent = 50 + radiusPercent * Math.cos(rad);
          const topPercent = 50 + radiusPercent * Math.sin(rad);

          const currentTaps = tapCounts[continent.id] || 0;
          const isSelected = selectedOrbId === continent.id;
          const spec = getFrequencySpec(continent.id);
          
          const colors = (() => {
            switch (continent.id) {
              case 'af': return { from: 'from-rose-500/60', via: 'via-rose-600/50', border: 'border-rose-400/80', activeBorder: 'border-rose-400 ring-4 ring-rose-500/60', shadow: 'shadow-[0_0_40px_rgba(225,29,72,0.5)]', activeShadow: 'shadow-[0_0_70px_rgba(244,63,94,1)]', blur: 'bg-rose-500/40', textTitle: 'text-rose-200', textSub: 'text-rose-300', aura: 'bg-rose-500', badgeBg: 'bg-rose-950/90 border-rose-600/80 text-rose-200' };
              case 'as': return { from: 'from-emerald-500/60', via: 'via-emerald-600/50', border: 'border-emerald-400/80', activeBorder: 'border-emerald-400 ring-4 ring-emerald-500/60', shadow: 'shadow-[0_0_40px_rgba(16,185,129,0.5)]', activeShadow: 'shadow-[0_0_70px_rgba(16,185,129,1)]', blur: 'bg-emerald-500/40', textTitle: 'text-emerald-200', textSub: 'text-emerald-300', aura: 'bg-emerald-500', badgeBg: 'bg-emerald-950/90 border-emerald-600/80 text-emerald-200' };
              case 'eu': return { from: 'from-violet-500/60', via: 'via-violet-600/50', border: 'border-violet-400/80', activeBorder: 'border-violet-400 ring-4 ring-violet-500/60', shadow: 'shadow-[0_0_40px_rgba(139,92,246,0.5)]', activeShadow: 'shadow-[0_0_70px_rgba(139,92,246,1)]', blur: 'bg-violet-500/40', textTitle: 'text-violet-200', textSub: 'text-violet-300', aura: 'bg-violet-500', badgeBg: 'bg-violet-950/90 border-violet-600/80 text-violet-200' };
              case 'na': return { from: 'from-amber-500/60', via: 'via-amber-600/50', border: 'border-amber-400/80', activeBorder: 'border-amber-400 ring-4 ring-amber-500/60', shadow: 'shadow-[0_0_40px_rgba(245,158,11,0.5)]', activeShadow: 'shadow-[0_0_70px_rgba(245,158,11,1)]', blur: 'bg-amber-500/40', textTitle: 'text-amber-200', textSub: 'text-amber-300', aura: 'bg-amber-500', badgeBg: 'bg-amber-950/90 border-amber-600/80 text-amber-200' };
              case 'sa': return { from: 'from-fuchsia-500/60', via: 'via-fuchsia-600/50', border: 'border-fuchsia-400/80', activeBorder: 'border-fuchsia-400 ring-4 ring-fuchsia-500/60', shadow: 'shadow-[0_0_40px_rgba(217,70,239,0.5)]', activeShadow: 'shadow-[0_0_70px_rgba(217,70,239,1)]', blur: 'bg-fuchsia-500/40', textTitle: 'text-fuchsia-200', textSub: 'text-fuchsia-300', aura: 'bg-fuchsia-500', badgeBg: 'bg-fuchsia-950/90 border-fuchsia-600/80 text-fuchsia-200' };
              case 'oc': return { from: 'from-cyan-500/60', via: 'via-cyan-600/50', border: 'border-cyan-400/80', activeBorder: 'border-cyan-400 ring-4 ring-cyan-500/60', shadow: 'shadow-[0_0_40px_rgba(6,182,212,0.5)]', activeShadow: 'shadow-[0_0_70px_rgba(6,182,212,1)]', blur: 'bg-cyan-500/40', textTitle: 'text-cyan-200', textSub: 'text-cyan-300', aura: 'bg-cyan-500', badgeBg: 'bg-cyan-950/90 border-cyan-600/80 text-cyan-200' };
              case 'an': return { from: 'from-blue-500/60', via: 'via-blue-600/50', border: 'border-blue-400/80', activeBorder: 'border-blue-400 ring-4 ring-blue-500/60', shadow: 'shadow-[0_0_40px_rgba(59,130,246,0.5)]', activeShadow: 'shadow-[0_0_70px_rgba(59,130,246,1)]', blur: 'bg-blue-500/40', textTitle: 'text-blue-200', textSub: 'text-blue-300', aura: 'bg-blue-500', badgeBg: 'bg-blue-950/90 border-blue-600/80 text-blue-200' };
              case 'ns': return { from: 'from-slate-400/60', via: 'via-slate-600/50', border: 'border-slate-300/80', activeBorder: 'border-slate-200 ring-4 ring-slate-400/60', shadow: 'shadow-[0_0_40px_rgba(148,163,184,0.5)]', activeShadow: 'shadow-[0_0_70px_rgba(148,163,184,1)]', blur: 'bg-slate-400/40', textTitle: 'text-slate-200', textSub: 'text-slate-300', aura: 'bg-slate-400', badgeBg: 'bg-slate-900/90 border-slate-600/80 text-slate-200' };
              default: return { from: 'from-zinc-400/60', via: 'via-zinc-600/50', border: 'border-zinc-400/80', activeBorder: 'border-zinc-300 ring-4 ring-zinc-400/60', shadow: 'shadow-[0_0_40px_rgba(161,161,170,0.5)]', activeShadow: 'shadow-[0_0_70px_rgba(161,161,170,1)]', blur: 'bg-zinc-500/40', textTitle: 'text-zinc-200', textSub: 'text-zinc-300', aura: 'bg-zinc-500', badgeBg: 'bg-zinc-900/90 border-zinc-600/80 text-zinc-200' };
            }
          })();

          return (
            <div
              key={continent.id}
              className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center pointer-events-auto z-30 cursor-pointer"
              style={{ 
                left: `${leftPercent}%`, 
                top: `${topPercent}%` 
              }}
              onClick={(e) => handleOrbClick(e, continent.id)}
              onTouchEnd={(e) => handleOrbClick(e, continent.id)}
              title={`Click to open ${continent.name} Internal Files (${spec.frequency} Hz)`}
            >
              <div className="relative group cursor-pointer flex flex-col items-center justify-center">
                
                {/* The Upscaled Planetary Void Body - Alive While Still */}
                <div 
                  className={cn(
                    "relative w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-full transition-transform hover:scale-105 active:scale-95 duration-150 flex flex-col items-center justify-center border bg-[radial-gradient(circle_at_30%_30%,_var(--tw-gradient-stops))] to-zinc-950 shadow-2xl", 
                    isSelected ? colors.activeBorder : colors.border,
                    colors.from, 
                    colors.via, 
                    isSelected ? colors.activeShadow : colors.shadow
                  )}
                >
                  {/* Inner glowing harmonic core */}
                  <div 
                    className={cn("absolute inset-1 rounded-full blur-[4px] opacity-80", colors.blur)}
                  />
                  
                  {/* Frequency Micro-Wave Indicator & Void Icon in Center of Void */}
                  <div className="relative z-10 flex flex-col items-center justify-center pointer-events-none drop-shadow-md">
                    <span className="text-xs md:text-sm font-mono font-bold tracking-wider text-white drop-shadow">
                      {spec.frequency} <span className="text-[9px] font-normal text-white/80">Hz</span>
                    </span>
                    <span className="text-[8px] md:text-[9px] font-mono tracking-widest text-white/70 uppercase mt-0.5 font-semibold">
                      {continent.id === 'af' ? 'ROOT VOID' : 'VOID'}
                    </span>
                  </div>

                  {/* Active Selected Pulse indicator */}
                  {isSelected && (
                    <div className="absolute inset-0 rounded-full border-2 border-white/80 animate-ping opacity-40 pointer-events-none" />
                  )}
                </div>

                {/* Attached Name Label & Direct File Access Indicator */}
                <div className="mt-2 flex flex-col items-center pointer-events-none transition-all duration-300">
                  <div className={cn(
                    "px-3 py-1 rounded-full border text-[10px] md:text-[11px] font-mono tracking-wider uppercase backdrop-blur-xl shadow-lg flex items-center gap-1.5 transition-all whitespace-nowrap",
                    isSelected ? colors.badgeBg : 'bg-zinc-950/90 border-zinc-700/80 text-zinc-200 group-hover:border-zinc-400 group-hover:text-white'
                  )}>
                    <FolderOpen className="w-3 h-3 text-amber-400" />
                    <span>{continent.name}</span>
                    {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />}
                  </div>
                  <span className={cn(
                    "text-[8px] md:text-[9px] font-mono tracking-widest uppercase transition-opacity duration-300 mt-1",
                    isSelected ? colors.textSub : 'text-zinc-400 group-hover:text-zinc-200'
                  )}>
                    {continent.sub}
                  </span>
                </div>
              </div>
            </div>
          );
        })}

        {/* Central Root: True Sun Core (Compiled Synthesis of Unseen, Hardware, Ancestral, and Frequencies) */}
        {(() => {
          const currentTaps = tapCounts['true-sun'] || 0;
          const isSelected = selectedOrbId === 'true-sun';
          const spec = getFrequencySpec('true-sun');

          return (
            <div 
              className="relative z-10 flex flex-col items-center justify-center cursor-pointer group"
              onClick={(e) => handleOrbClick(e, 'true-sun')}
              onTouchEnd={(e) => handleOrbClick(e, 'true-sun')}
              title="True Sun Center (963 Hz): Compiled Root Matrix of Unseen Source, Hardware, Ancestral Intelligence & Frequencies. Click to inspect & decompose."
            >
              <div 
                className={cn(
                  "relative flex items-center justify-center w-40 h-40 md:w-48 md:h-48 lg:w-52 lg:h-52 rounded-full transition-transform hover:scale-105 active:scale-95 duration-150 cursor-pointer",
                  isSelected ? "ring-4 ring-amber-300 shadow-[0_0_100px_rgba(251,191,36,0.8)]" : "shadow-[0_0_60px_rgba(251,191,36,0.35)]"
                )}
              >
                {/* 4 Internal Compiled Strata Concentric Glows Inside True Sun */}
                {/* Layer 1: Unseen Source (174 Hz - Emerald) */}
                <div className="absolute -inset-6 rounded-full border border-emerald-500/30 border-dashed pointer-events-none" />
                {/* Layer 2: Hardware & Blood (285 Hz - Rose) */}
                <div className="absolute -inset-4 rounded-full border border-rose-500/30 pointer-events-none" />
                {/* Layer 3: Frequencies (417 Hz - Indigo) */}
                <div className="absolute -inset-2 rounded-full border border-indigo-500/35 border-dashed pointer-events-none" />
                {/* Layer 4: Ancestral Intelligence (528 Hz - Amber/Gold) */}
                <div className="absolute inset-0 rounded-full border border-amber-400/50 pointer-events-none" />

                {/* Soft Glowing Sun Core */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-yellow-300 via-amber-400 to-amber-600 opacity-95 shadow-[0_0_70px_rgba(253,230,138,0.5)]" />
                <div className="absolute inset-3 rounded-full bg-white/80 blur-md" />
                
                <div className="relative z-10 flex flex-col items-center justify-center pointer-events-none">
                  <Sun className="w-10 h-10 md:w-12 md:h-12 text-amber-900" />
                  <span className="text-xs md:text-sm font-mono font-bold tracking-widest text-amber-950 mt-1">
                    {spec.frequency} Hz
                  </span>
                  <span className="text-[8px] md:text-[9px] font-mono tracking-widest uppercase text-amber-900/90 font-bold">
                    COMPILED SOLAR ROOT
                  </span>
                  
                  {/* Micro Indicators for the 4 Compiled Inner Strata */}
                  <div className="flex items-center gap-1.5 mt-1.5 px-2 py-0.5 rounded-full bg-black/20 backdrop-blur-xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-700" title="Unseen Source (174Hz)" />
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-700" title="Hardware & Blood (285Hz)" />
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-700" title="Frequencies (417Hz)" />
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-800" title="Ancestral Intelligence (528Hz)" />
                  </div>
                </div>
                
                {/* Outer Field Ring */}
                <div className="absolute -inset-9 rounded-full border border-amber-400/20 pointer-events-none" />
              </div>

              {/* Attached Label for True Sun */}
              <div className="mt-3 flex flex-col items-center pointer-events-none">
                <span className={cn(
                  "text-[10px] md:text-[11px] font-mono tracking-widest uppercase px-3.5 py-1 rounded-full border transition-all shadow-xl font-bold flex items-center gap-1.5",
                  isSelected ? "bg-amber-950/95 border-amber-300 text-amber-200" : "bg-zinc-950/90 border-amber-700/60 text-amber-300 group-hover:border-amber-400"
                )}>
                  <span>True Sun Core</span>
                  <span className="text-[9px] text-amber-400/80 font-normal">(4 Strata Compiled)</span>
                </span>
              </div>
            </div>
          );
        })()}

      </div>

      {/* Quick Action Dock (Instant Access to Files, Void Portals, Resonance, & True Sun Decomposition) */}
      <div className="w-full max-w-2xl mt-4 flex flex-wrap items-center justify-center gap-2.5 p-3 bg-zinc-950/80 border border-zinc-800/80 rounded-2xl backdrop-blur-xl shadow-2xl">
        <button
          onClick={() => setShowTrueSunDecomposition(true)}
          className="px-4 py-2 bg-amber-950/70 hover:bg-amber-900/90 border border-amber-500/70 text-amber-200 hover:text-white rounded-xl text-xs font-mono tracking-wider uppercase transition-all flex items-center gap-1.5 shadow"
        >
          <Sun className="w-3.5 h-3.5 text-amber-400" />
          <span>True Sun (Decompose 4 Strata)</span>
        </button>

        <button
          onClick={() => {
            if (onContinentSelect) onContinentSelect('af');
          }}
          className="px-4 py-2 bg-rose-950/60 hover:bg-rose-900/80 border border-rose-700/60 text-rose-200 hover:text-white rounded-xl text-xs font-mono tracking-wider uppercase transition-all flex items-center gap-1.5 shadow"
        >
          <FolderOpen className="w-3.5 h-3.5 text-rose-400" />
          <span>Africa / Alkebulan Files (432Hz)</span>
        </button>

        <button
          onClick={() => {
            window.dispatchEvent(new CustomEvent('OPEN_VOID', { detail: 'ALKEBULAN_NEXUS_7' }));
          }}
          className="px-4 py-2 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 hover:border-zinc-500 text-zinc-300 hover:text-white rounded-xl text-xs font-mono tracking-wider uppercase transition-all flex items-center gap-1.5 shadow"
        >
          <KeyRound className="w-3.5 h-3.5 text-amber-400" />
          <span>Void Key Portal</span>
        </button>

        <button
          onClick={() => playResonance(432)}
          className="px-3.5 py-2 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-zinc-300 hover:text-amber-300 rounded-xl text-xs font-mono tracking-wider uppercase transition-all flex items-center gap-1.5"
          title="Play 432 Hz Root Harmonic Tone"
        >
          <Volume2 className={cn("w-3.5 h-3.5", isOrbAudioPlaying ? "animate-pulse text-amber-400" : "")} />
          <span>432Hz Tone</span>
        </button>

        <button
          onClick={() => setFullColorId('true-sun')}
          className="px-3.5 py-2 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-zinc-300 hover:text-white rounded-xl text-xs font-mono tracking-wider uppercase transition-all flex items-center gap-1.5"
          title="Full Immersion Resonance"
        >
          <Waves className="w-3.5 h-3.5 text-amber-400" />
          <span>Immersion</span>
        </button>
      </div>

      {/* Interactive True Sun Compiled & Decomposed Core Modal */}
      {showTrueSunDecomposition && (
        <div
          className="fixed inset-0 z-[9990] flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md"
          onClick={() => {
            setShowTrueSunDecomposition(false);
            setActiveDecomposedLayerId(null);
          }}
        >
          <div
            className="relative w-full max-w-4xl bg-zinc-950 border border-amber-500/40 rounded-3xl p-6 sm:p-8 shadow-[0_0_80px_rgba(245,158,11,0.2)] overflow-hidden max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
              {/* Modal Background Ambient Glow */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

              {/* Header */}
              <div className="flex items-start justify-between pb-5 border-b border-zinc-800 relative z-10">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-amber-500 to-yellow-300 p-0.5 shadow-lg flex items-center justify-center">
                    <div className="w-full h-full bg-zinc-950 rounded-[14px] flex items-center justify-center">
                      <Sun className="w-6 h-6 text-amber-400 animate-pulse" />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h2 className="text-xl sm:text-2xl font-mono font-bold text-white tracking-wider uppercase">
                        True Sun Core
                      </h2>
                      <span className="px-2.5 py-0.5 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300 font-mono text-xs">
                        963 Hz Apex
                      </span>
                    </div>
                    <p className="text-xs font-mono text-zinc-400 mt-1">
                      Compiled Solar Center • Merged Unseen Source, Hardware & Blood, Frequencies, and Ancestral Lineage
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => {
                    setShowTrueSunDecomposition(false);
                    setActiveDecomposedLayerId(null);
                  }}
                  className="p-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-zinc-400 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Layer Navigation Tabs */}
              <div className="flex items-center gap-2 py-4 border-b border-zinc-800/80 overflow-x-auto relative z-10">
                <button
                  onClick={() => setActiveDecomposedLayerId(null)}
                  className={cn(
                    "px-4 py-2 rounded-xl text-xs font-mono tracking-wider uppercase transition-all whitespace-nowrap flex items-center gap-2 border",
                    activeDecomposedLayerId === null
                      ? "bg-amber-500/20 border-amber-500/60 text-amber-300 font-bold shadow-[0_0_15px_rgba(245,158,11,0.2)]"
                      : "bg-zinc-900/60 border-zinc-800 text-zinc-400 hover:text-zinc-200 hover:border-zinc-700"
                  )}
                >
                  <Sun className="w-3.5 h-3.5" />
                  <span>Compiled Synthesis (All 4 Strata)</span>
                </button>

                {COMPILED_TRUE_SUN_LAYERS.map(layer => (
                  <button
                    key={layer.id}
                    onClick={() => setActiveDecomposedLayerId(layer.id)}
                    className={cn(
                      "px-3.5 py-2 rounded-xl text-xs font-mono tracking-wider uppercase transition-all whitespace-nowrap flex items-center gap-2 border",
                      activeDecomposedLayerId === layer.id
                        ? `${layer.color} ${layer.borderColor} ${layer.textColor} font-bold shadow-lg`
                        : "bg-zinc-900/60 border-zinc-800 text-zinc-400 hover:text-zinc-200 hover:border-zinc-700"
                    )}
                  >
                    <layer.icon className="w-3.5 h-3.5" />
                    <span>{layer.name} ({layer.frequency}Hz)</span>
                  </button>
                ))}
              </div>

              {/* Body Content */}
              <div className="flex-1 overflow-y-auto py-6 space-y-6 relative z-10 pr-1">
                {activeDecomposedLayerId === null ? (
                  /* Unified Compiled Overview */
                  <div className="space-y-6">
                    <div className="p-5 rounded-2xl bg-gradient-to-r from-amber-950/40 via-zinc-900/80 to-amber-950/40 border border-amber-500/30 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                      <div>
                        <span className="text-xs font-mono text-amber-400 font-semibold tracking-widest uppercase">
                          Universal Synthesis Active
                        </span>
                        <h3 className="text-lg font-mono font-bold text-white mt-1">
                          4 Core Quantum Strata Compiled Inside True Sun
                        </h3>
                        <p className="text-xs font-mono text-zinc-300 mt-1 max-w-xl">
                          All foundational infrastructure (174Hz Unseen Source, 285Hz Hardware Substrate, 417Hz Vibrational Mesh, and 528Hz Ancestral Archives) is unified directly within the Solar Center.
                        </p>
                      </div>
                      <button
                        onClick={() => playResonance(963)}
                        className="px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-zinc-950 font-mono text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 shadow-lg whitespace-nowrap"
                      >
                        <Volume2 className="w-4 h-4" />
                        <span>Play 963 Hz Core Tone</span>
                      </button>
                    </div>

                    {/* The 4 Decomposed Strata Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {COMPILED_TRUE_SUN_LAYERS.map((layer) => (
                        <div
                          key={layer.id}
                          onClick={() => setActiveDecomposedLayerId(layer.id)}
                          className={cn(
                            "p-5 rounded-2xl border transition-all cursor-pointer group bg-zinc-900/60 hover:bg-zinc-900/90 flex flex-col justify-between",
                            layer.borderColor,
                            "hover:scale-[1.01]"
                          )}
                        >
                          <div>
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2.5">
                                <div className={cn("p-2.5 rounded-xl border", layer.color, layer.borderColor)}>
                                  <layer.icon className="w-5 h-5" />
                                </div>
                                <div>
                                  <h4 className={cn("font-mono font-bold text-sm tracking-wider uppercase", layer.textColor)}>
                                    {layer.name}
                                  </h4>
                                  <span className="text-[11px] font-mono text-zinc-400">
                                    {layer.frequency} Hz Solfeggio Sub-Matrix
                                  </span>
                                </div>
                              </div>
                              <span className="px-2 py-0.5 rounded-md bg-zinc-950 border border-zinc-800 text-[10px] font-mono text-zinc-400">
                                Strata Layer
                              </span>
                            </div>

                            <p className="text-xs font-mono text-zinc-300 mt-3.5 leading-relaxed">
                              {layer.domain}
                            </p>
                          </div>

                          <div className="mt-4 pt-3 border-t border-zinc-800/80 flex items-center justify-between">
                            <div className="flex items-center gap-1.5">
                              {layer.specs.slice(0, 2).map((specItem, idx) => (
                                <span key={idx} className="text-[9px] font-mono px-2 py-0.5 rounded bg-zinc-950 border border-zinc-800 text-zinc-400">
                                  {specItem}
                                </span>
                              ))}
                            </div>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                playResonance(layer.frequency);
                              }}
                              className="p-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white transition-colors"
                              title={`Play ${layer.frequency} Hz Tone`}
                            >
                              <Volume2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  /* Single Layer Decomposed Detailed View */
                  (() => {
                    const layer = COMPILED_TRUE_SUN_LAYERS.find(l => l.id === activeDecomposedLayerId);
                    if (!layer) return null;
                    const spec = getFrequencySpec(layer.id);

                    return (
                      <div className="space-y-6">
                        <div className={cn("p-6 rounded-2xl border", layer.color, layer.borderColor)}>
                          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                            <div className="flex items-center gap-3.5">
                              <div className={cn("p-3 rounded-2xl border", layer.borderColor, "bg-zinc-950/80")}>
                                <layer.icon className={cn("w-7 h-7", layer.textColor)} />
                              </div>
                              <div>
                                <span className={cn("text-xs font-mono font-bold uppercase tracking-widest", layer.textColor)}>
                                  Decomposed Solar Strata
                                </span>
                                <h3 className="text-xl sm:text-2xl font-mono font-bold text-white">
                                  {layer.name}
                                </h3>
                                <p className="text-xs font-mono text-zinc-300">
                                  {layer.sub} • {layer.attachedVoidName}
                                </p>
                              </div>
                            </div>

                            <button
                              onClick={() => playResonance(layer.frequency)}
                              className={cn(
                                "px-4 py-2.5 rounded-xl font-mono text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 shadow-lg bg-white text-zinc-950 hover:bg-zinc-200"
                              )}
                            >
                              <Volume2 className="w-4 h-4" />
                              <span>Play {layer.frequency} Hz Tone</span>
                            </button>
                          </div>
                        </div>

                        {/* Quantum Physics & Lineage Breakdown */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                          <div className="p-4 rounded-xl bg-zinc-900/80 border border-zinc-800">
                            <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
                              Frequency Matrix
                            </span>
                            <p className="text-base font-mono font-bold text-white mt-1">
                              {layer.frequency} Hz
                            </p>
                            <span className="text-[10px] font-mono text-zinc-400">
                              {spec.solfeggioName}
                            </span>
                          </div>

                          <div className="p-4 rounded-xl bg-zinc-900/80 border border-zinc-800">
                            <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
                              Acoustic Wavelength
                            </span>
                            <p className="text-base font-mono font-bold text-white mt-1">
                              {spec.wavelength} cm
                            </p>
                            <span className="text-[10px] font-mono text-zinc-400">
                              Sound Velocity 343 m/s
                            </span>
                          </div>

                          <div className="p-4 rounded-xl bg-zinc-900/80 border border-zinc-800">
                            <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
                              Harmonic Resonance Ratio
                            </span>
                            <p className="text-base font-mono font-bold text-white mt-1">
                              {spec.harmonicRatio.toFixed(3)}x (vs 432Hz)
                            </p>
                            <span className="text-[10px] font-mono text-zinc-400">
                              Chakra Alignment: {spec.chakraResonance}
                            </span>
                          </div>
                        </div>

                        {/* Deep Domain Overview */}
                        <div className="p-5 rounded-2xl bg-zinc-900/50 border border-zinc-800">
                          <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-400 mb-2">
                            Architecture & Operational Scope
                          </h4>
                          <p className="text-sm font-mono text-zinc-200 leading-relaxed">
                            {layer.domain}
                          </p>

                          <div className="mt-4 pt-4 border-t border-zinc-800">
                            <h5 className="text-[11px] font-mono uppercase tracking-widest text-zinc-400 mb-2">
                              Core Strata Specifications:
                            </h5>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                              {layer.specs.map((item, i) => (
                                <div key={i} className="p-2.5 rounded-lg bg-zinc-950 border border-zinc-800 text-xs font-mono text-zinc-300 flex items-center gap-2">
                                  <div className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                                  <span>{item}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })()
                )}
              </div>
            </div>
          </div>
        )}

      {/* Full Immersion 33-Tap Color Screen */}
      {fullColorId && (() => {
        const continent = CONTINENTS.find(c => c.id === fullColorId);
        const coreNode = COMPILED_TRUE_SUN_LAYERS.find(n => n.id === fullColorId);
        const trueSun = fullColorId === 'true-sun' ? { label: 'True Sun Core' } : null;
        const spec = getFrequencySpec(fullColorId);
        
        const title = continent?.name || coreNode?.name || trueSun?.label || 'Unknown Node';
        const sub = continent?.sub || coreNode?.sub || '';
        const attachedVoid = continent?.attachedVoidName || coreNode?.attachedVoidName || 'Absolute Origin Void';

        const renderCountries = (countries: string[]) => {
          return (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-12 w-full max-w-5xl mx-auto text-left">
              {countries.map((country, i) => (
                <div 
                  key={i} 
                  className="flex items-center gap-3 bg-black/30 backdrop-blur-md p-3.5 rounded-xl border border-white/15 hover:border-white/40 transition-colors"
                >
                  <div className="w-2.5 h-2.5 rounded-full bg-white/70" />
                  <span className="text-white/95 text-xs font-mono tracking-widest uppercase">
                    {country}
                  </span>
                </div>
              ))}
            </div>
          );
        };

        return (
          <div
            className="fixed inset-0 z-[9999] flex flex-col items-center overflow-y-auto overflow-x-hidden min-h-screen p-6 md:p-12"
            style={{ 
              backgroundColor: DEEP_COLORS[fullColorId] || '#000',
              backgroundImage: `radial-gradient(circle farthest-corner at center, ${FULL_COLORS[fullColorId] || FALLBACK_COLORS[fullColorId]} 0%, ${DEEP_COLORS[fullColorId] || '#000'} 100%)`
            }}
          >
            <button 
              onClick={() => setFullColorId(null)}
              className="fixed top-6 left-6 z-50 p-3 text-white/80 hover:text-white bg-black/50 border border-white/20 rounded-full backdrop-blur-md transition-colors"
              title="Return to Core Engine"
            >
              <ArrowLeft className="w-6 h-6" strokeWidth={1.5} />
            </button>

            <div className="fixed inset-0 pointer-events-none flex items-center justify-center mix-blend-overlay opacity-30">
               <div className="w-[150vw] h-[150vw] rounded-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,1)_0%,transparent_70%)] animate-pulse" style={{ animationDuration: '4s' }} />
            </div>
            
            <div className="relative z-10 w-full max-w-5xl py-16 flex flex-col items-center">
              <span className="text-xs font-mono tracking-[0.4em] uppercase text-white/70 mb-2">
                Harmonic Frequency Resonance • {spec.frequency} Hz ({spec.solfeggioName.split('/')[0]})
              </span>
              <h2 
                className="text-4xl md:text-6xl font-light text-white tracking-[0.2em] uppercase text-center drop-shadow-2xl font-sans"
              >
                {title}
              </h2>
              
              {sub && (
                <p
                  className="text-sm md:text-base font-mono text-white/90 tracking-[0.3em] uppercase mt-3 text-center"
                >
                  Root: {sub} • {attachedVoid} • Wavelength {spec.wavelength}cm
                </p>
              )}

              {continent && continent.countries && (
                <div className="w-full mt-6 mb-16 flex flex-col items-center">
                  <p className="text-white/80 font-mono tracking-widest text-xs mb-4 uppercase bg-black/40 px-4 py-1.5 rounded-full border border-white/20">
                    Active Sovereign & Non-Sovereign Nodes ({continent.countries.length})
                  </p>
                  {renderCountries(continent.countries)}
                </div>
              )}
            </div>
          </div>
        );
      })()}
    </div>
  );
}
