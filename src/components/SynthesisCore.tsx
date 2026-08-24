import React, { useState, useRef, useEffect } from 'react';
import { 
  Fingerprint, Radio, Globe, Code2, Sun, ArrowLeft, Volume2, X,
  Search, Music, Compass, Mountain, Sparkles, ChevronRight, Phone, Coins, Clock
} from 'lucide-react';
import { cn } from '../utils';
import { CONTINENTS, ContinentData } from '../data/continents';
import { getFrequencySpec, MASTER_FREQUENCY_REGISTRY } from '../data/frequencies';
import { playHarmonicSynthesisTone } from '../utils/frequencyPhysics';
import { getNationLocalTime } from '../utils/timeZoneUtils';
import { NATIONS_BY_CONTINENT } from '../data/nations';
import { getNationFinancials } from '../data/nationFinancials';
import { getNationDemographics } from '../data/nationDemographics';
import { africanFlags } from '../flags';

const FLAG_MAP: Record<string, string> = {
  ...africanFlags,
  "DR Congo": "🇨🇩",
  "Democratic Republic of the Congo": "🇨🇩",
  "Republic of the Congo": "🇨🇬",
  "Ivory Coast": "🇨🇮",
  "Côte d'Ivoire": "🇨🇮",
  "United States": "🇺🇸",
  "Canada": "🇨🇦",
  "Mexico": "🇲🇽",
  "China": "🇨🇳",
  "India": "🇮🇳",
  "Japan": "🇯🇵",
  "United Kingdom": "🇬🇧",
  "Germany": "🇩🇪",
  "France": "🇫🇷",
  "Brazil": "🇧🇷",
  "Australia": "🇦🇺",
  "Argentina": "🇦🇷",
  "Russia": "🇷🇺",
  "Italy": "🇮🇹",
  "Spain": "🇪🇸"
};

export interface CompiledCoreLayer {
  id: string;
  name: string;
  sub: string;
  attachedVoidName: string;
  simpleTitle: string;
  simpleDescription: string;
  frequency: number;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  textColor: string;
  borderColor: string;
  glow: string;
  funFact: string;
  keyConcepts: string[];
}

export const COMPILED_TRUE_SUN_LAYERS: CompiledCoreLayer[] = [
  { 
    id: 'source', 
    name: 'Cosmic Science & Origin', 
    sub: 'Physics, Mathematics & Planetary Data', 
    attachedVoidName: 'Module 01: Natural Science',
    simpleTitle: '🔬 Natural Science & Cosmos',
    simpleDescription: 'Learn how Earth, the solar system, physics, and mathematical laws work together to create our planet.',
    frequency: 174,
    icon: Code2, 
    color: 'bg-emerald-500/20 text-emerald-300',
    textColor: 'text-emerald-300',
    borderColor: 'border-emerald-500/50',
    glow: 'shadow-[0_0_30px_rgba(16,185,129,0.35)]',
    funFact: '174 Hz is known as a calming foundational sound wave that helps focus the mind.',
    keyConcepts: ['Planetary Physics & Orbit', 'Zero-Point Math & Logic', 'Climate & Solar Energy']
  },
  { 
    id: 'hardware', 
    name: 'Technology & Living Infrastructure', 
    sub: 'Computers, Satellites & Network Cables', 
    attachedVoidName: 'Module 02: Global Infrastructure',
    simpleTitle: '💻 Technology & Connected World',
    simpleDescription: 'Discover how submarine fiber-optic cables, data centers, and satellites connect all 8 billion humans across the continents.',
    frequency: 285,
    icon: Fingerprint, 
    color: 'bg-rose-500/20 text-rose-300',
    textColor: 'text-rose-300',
    borderColor: 'border-rose-500/50',
    glow: 'shadow-[0_0_30px_rgba(244,63,94,0.35)]',
    funFact: 'Over 99% of global internet traffic travels through underwater cables beneath the world’s oceans.',
    keyConcepts: ['Global Internet Subsea Cables', 'Satellite Navigation & GPS', 'Computer Processors & Code']
  },
  { 
    id: 'frequencies', 
    name: 'Sound, Acoustics & Music Physics', 
    sub: 'Harmonic Waves, Hertz & Audio Science', 
    attachedVoidName: 'Module 03: Acoustic Harmony',
    simpleTitle: '🎵 Sound Waves & Music Science',
    simpleDescription: 'Explore how sound travels through air, how frequencies (Hertz) create musical notes, and how harmonic waves resonate.',
    frequency: 417,
    icon: Radio, 
    color: 'bg-indigo-500/20 text-indigo-300',
    textColor: 'text-indigo-300',
    borderColor: 'border-indigo-500/50',
    glow: 'shadow-[0_0_30px_rgba(99,102,241,0.35)]',
    funFact: 'Sound travels through air at approximately 343 meters per second (767 miles per hour)!',
    keyConcepts: ['Dual-Oscillator Sound Waves', 'Solfeggio Harmonic Scales', 'Acoustic Wavelengths (cm)']
  },
  { 
    id: 'ancestral', 
    name: 'World History & Global Civics', 
    sub: 'Civilizations, Treaties & Cultural Heritage', 
    attachedVoidName: 'Module 04: Cultural Heritage',
    simpleTitle: '📜 World History, Culture & Peace',
    simpleDescription: 'Travel through ancient civilizations, indigenous histories, sovereign constitutions, and global peace agreements.',
    frequency: 528,
    icon: Globe, 
    color: 'bg-amber-500/20 text-amber-300',
    textColor: 'text-amber-300',
    borderColor: 'border-amber-500/50',
    glow: 'shadow-[0_0_30px_rgba(245,158,11,0.35)]',
    funFact: '528 Hz is historically known as the frequency of transformation and natural harmony.',
    keyConcepts: ['African & Indigenous Heritage', 'United Nations & World Treaties', 'Constitutional Law & Rights']
  },
];

// Friendly continent icons & short badges
const CONTINENT_BADGES: Record<string, { emoji: string; shortName: string; highlight: string }> = {
  'af': { emoji: '🌍', shortName: 'Africa', highlight: '54 Nations • Mt. Kilimanjaro' },
  'as': { emoji: '🌏', shortName: 'Asia', highlight: '48 Nations • Mt. Everest' },
  'eu': { emoji: '🏰', shortName: 'Europe', highlight: '45 Nations • Mt. Elbrus' },
  'na': { emoji: '🦅', shortName: 'North America', highlight: '23 Nations • Denali' },
  'sa': { emoji: '🌴', shortName: 'South America', highlight: '12 Nations • Aconcagua' },
  'oc': { emoji: '🏝️', shortName: 'Oceania', highlight: '14 Nations • Puncak Jaya' },
  'an': { emoji: '❄️', shortName: 'Antarctica', highlight: '7 Sectors • Mt. Vinson' },
  'non-sovereign': { emoji: '🌐', shortName: 'Islands & Territories', highlight: '33 Global Autonomous Islands' },
};

interface SynthesisCoreProps {
  onContinentSelect?: (continentId: string) => void;
  onOpenImmersion?: (sectorId: string) => void;
  masterUnlocked?: boolean;
}

export function SynthesisCore({ onContinentSelect, onOpenImmersion }: SynthesisCoreProps) {
  const [selectedOrbId, setSelectedOrbId] = useState<string | null>(null);
  const [hoveredOrbId, setHoveredOrbId] = useState<string | null>(null);
  const [showTrueSunDecomposition, setShowTrueSunDecomposition] = useState(false);
  const [activeDecomposedLayerId, setActiveDecomposedLayerId] = useState<string | null>(null);
  
  // Modals for youth & explorer discovery
  const [showSoundChamber, setShowSoundChamber] = useState(false);
  const [showGlobalSearch, setShowGlobalSearch] = useState(false);
  const [globalSearchQuery, setGlobalSearchQuery] = useState('');
  const [activeTonePlaying, setActiveTonePlaying] = useState<number | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);

  // Play harmonic frequency audio with dual-oscillator acoustic resonance
  const playResonance = (freq: number) => {
    try {
      setActiveTonePlaying(freq);
      playHarmonicSynthesisTone(freq, 2.5, 0.25);
      setTimeout(() => {
        setActiveTonePlaying(null);
      }, 2500);
    } catch {
      // Audio failsafe
    }
  };

  const triggerImmersion = (sectorId: string) => {
    if (onOpenImmersion) {
      onOpenImmersion(sectorId);
    } else {
      window.dispatchEvent(new CustomEvent('OPEN_IMMERSION', { detail: sectorId }));
    }
  };

  // Aggregate all 236 countries across continents for easy global search
  const allGlobalCountries = React.useMemo(() => {
    const list: Array<{ 
      name: string; 
      continentName: string; 
      continentId: string; 
      flag: string; 
      capital: string; 
      dialCode: string; 
      currencyCode: string;
      population: string;
      landArea: string;
      timeZone: string;
    }> = [];
    CONTINENTS.forEach(c => {
      (c.countries || []).forEach(countryName => {
        const fin = getNationFinancials(countryName);
        const demo = getNationDemographics(countryName);
        const flag = FLAG_MAP[countryName] || 
                     FLAG_MAP[countryName.replace('&', 'and')] || 
                     FLAG_MAP[countryName.replace('and', '&')] || 
                     CONTINENT_BADGES[c.id]?.emoji || '🌐';
        list.push({
          name: countryName,
          continentName: c.name,
          continentId: c.id,
          flag,
          capital: demo?.capital || fin?.capital || 'Capital City',
          dialCode: fin?.dialCode || '+00',
          currencyCode: fin?.currencyCode || 'USD',
          population: demo?.population || 'N/A',
          landArea: demo?.landArea || 'N/A',
          timeZone: demo?.timeZone || fin?.timeZone || 'UTC'
        });
      });
    });
    return list;
  }, []);

  const filteredGlobalCountries = React.useMemo(() => {
    if (!globalSearchQuery.trim()) return allGlobalCountries.slice(0, 36);
    const q = globalSearchQuery.toLowerCase().trim();
    return allGlobalCountries.filter(item => 
      item.name.toLowerCase().includes(q) ||
      item.capital.toLowerCase().includes(q) ||
      item.dialCode.toLowerCase().includes(q) ||
      item.currencyCode.toLowerCase().includes(q) ||
      item.continentName.toLowerCase().includes(q) ||
      item.population.toLowerCase().includes(q)
    );
  }, [allGlobalCountries, globalSearchQuery]);

  // Click on any Void or True Sun:
  const handleOrbClick = (e: React.MouseEvent | React.TouchEvent, id: string) => {
    e.stopPropagation();
    setSelectedOrbId(id);
    
    // Frequency determination & acoustic resonance
    const spec = getFrequencySpec(id);
    playResonance(spec.frequency);

    // Direct Action: If it's one of the 8 planetary continents, open its immersion directly
    const continent = CONTINENTS.find(c => c.id === id);
    if (continent) {
      if (onOpenImmersion) {
        onOpenImmersion(id);
        return;
      }
      if (onContinentSelect) {
        onContinentSelect(id);
        return;
      }
    }

    // Direct Action: If it's the True Sun, open its Immersion / Educational Atlas
    if (id === 'true-sun') {
      if (onOpenImmersion) {
        onOpenImmersion('true-sun');
        return;
      }
      setShowTrueSunDecomposition(true);
      return;
    }
  };

  const FULL_COLORS: Record<string, string> = {
    'af': 'color(display-p3 0.9 0.1 0.25)',
    'as': 'color(display-p3 0.05 0.8 0.4)',
    'eu': 'color(display-p3 0.5 0.1 0.9)',
    'na': 'color(display-p3 0.9 0.5 0.05)',
    'sa': 'color(display-p3 0.8 0.1 0.8)',
    'oc': 'color(display-p3 0.05 0.8 0.8)',
    'an': 'color(display-p3 0.1 0.3 0.9)',
    'non-sovereign': 'color(display-p3 0.6 0.6 0.6)',
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
    'non-sovereign': '#64748b',
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
    'non-sovereign': '#0f172a',
    'true-sun': '#451a03',
  };

  // Solfeggio sound chamber scale list
  const SOLFEGGIO_TONES = [
    { freq: 174, name: 'Foundation Tone', note: 'F', color: 'text-emerald-400 border-emerald-500/50 bg-emerald-500/10', desc: 'Calming ground tone for natural focus.' },
    { freq: 285, name: 'Energy Restorer', note: 'C#', color: 'text-rose-400 border-rose-500/50 bg-rose-500/10', desc: 'Cellular recovery and technology flow.' },
    { freq: 396, name: 'Polar Grounding', note: 'G', color: 'text-blue-400 border-blue-500/50 bg-blue-500/10', desc: 'Antarctica sector frequency for peaceful release.' },
    { freq: 417, name: 'Change & Waves', note: 'G#', color: 'text-indigo-400 border-indigo-500/50 bg-indigo-500/10', desc: 'Acoustic wave generator and clarity.' },
    { freq: 432, name: 'Natural Harmony', note: 'A', color: 'text-rose-400 border-rose-500/50 bg-rose-500/10', desc: 'Africa cosmic root standard tone.' },
    { freq: 528, name: 'Transformation', note: 'C', color: 'text-violet-400 border-violet-500/50 bg-violet-500/10', desc: 'Europe sector & DNA biological harmony.' },
    { freq: 639, name: 'Connection', note: 'Eb', color: 'text-emerald-400 border-emerald-500/50 bg-emerald-500/10', desc: 'Asia sector frequency for community connection.' },
    { freq: 741, name: 'Expression', note: 'F#', color: 'text-amber-400 border-amber-500/50 bg-amber-500/10', desc: 'North America sector tone for creative clarity.' },
    { freq: 852, name: 'Deep Intuition', note: 'Ab', color: 'text-fuchsia-400 border-fuchsia-500/50 bg-fuchsia-500/10', desc: 'South America sector tone for balance.' },
    { freq: 963, name: 'Solar Apex Core', note: 'B', color: 'text-yellow-400 border-yellow-500/50 bg-yellow-500/10', desc: 'True Sun and Oceania peak consciousness.' },
  ];

  return (
    <div ref={containerRef} className="relative w-full max-w-[1100px] flex flex-col items-center justify-center select-none">
      
      {/* Friendly Guide & Quick Tools Navigation Bar */}
      <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-3 mb-2 px-3 py-2.5 rounded-2xl bg-zinc-900/80 border border-zinc-800 backdrop-blur-md z-30 shadow-lg">
        <div className="flex items-center gap-2.5 text-xs text-zinc-300">
          <span className="flex h-2.5 w-2.5 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-500"></span>
          </span>
          <span className="font-medium text-white">Interactive World Atlas:</span>
          <span className="text-zinc-400 hidden md:inline">Tap any continent orb to explore countries, flags, geography & sound frequencies.</span>
          <span className="text-zinc-400 md:hidden">Tap any orb to explore!</span>
        </div>

        <div className="flex items-center gap-2">
          {/* Quick Global Search Button */}
          <button
            onClick={() => setShowGlobalSearch(true)}
            className="px-3 py-1.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 text-xs text-zinc-200 hover:text-white transition-all flex items-center gap-1.5 cursor-pointer shadow-sm"
            title="Search all 236 countries and territories"
          >
            <Search className="w-3.5 h-3.5 text-amber-400" />
            <span className="font-medium">Search 236 Nations</span>
          </button>

          {/* Sound Chamber Button */}
          <button
            onClick={() => setShowSoundChamber(true)}
            className="px-3 py-1.5 rounded-xl bg-amber-500/15 hover:bg-amber-500/25 border border-amber-500/40 text-xs text-amber-300 hover:text-amber-200 transition-all flex items-center gap-1.5 cursor-pointer shadow-sm"
            title="Open Interactive Sound Chamber"
          >
            <Music className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
            <span className="font-medium">Sound Chamber</span>
          </button>
        </div>
      </div>

      {/* Visual Radial Matrix Canvas */}
      <div className="relative w-full aspect-square max-w-[760px] md:max-w-[860px] lg:max-w-[920px] flex items-center justify-center select-none overflow-visible py-8">
        
        {/* Orbital Resonance Grid Rings */}
        <div className="absolute inset-2 rounded-full border border-zinc-800/40 pointer-events-none" />
        <div className="absolute inset-12 rounded-full border border-zinc-800/30 border-dashed pointer-events-none" />
        <div className="absolute inset-28 rounded-full border border-zinc-800/35 pointer-events-none" />
        <div className="absolute inset-44 rounded-full border border-zinc-800/25 border-dashed pointer-events-none" />

        {/* Harmonic Resonance Vectors */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" viewBox="-100 -100 200 200">
          <circle cx="0" cy="0" r="82" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-amber-500/50 stroke-dasharray-[2_4]" />
          <circle cx="0" cy="0" r="46" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-indigo-500/50" />
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
                className="text-zinc-700/60" 
              />
            );
          })}
        </svg>

        {/* 8 Outer Planetary Continent Orbs */}
        {CONTINENTS.map((continent, i) => {
          const angleDeg = (i * 360) / CONTINENTS.length - 90;
          const rad = (angleDeg * Math.PI) / 180;
          const radiusPercent = 41;
          const leftPercent = 50 + radiusPercent * Math.cos(rad);
          const topPercent = 50 + radiusPercent * Math.sin(rad);

          const isSelected = selectedOrbId === continent.id;
          const isHovered = hoveredOrbId === continent.id;
          const spec = getFrequencySpec(continent.id);
          const badge = CONTINENT_BADGES[continent.id] || { emoji: '🌐', shortName: continent.name, highlight: '' };
          
          const colors = (() => {
            switch (continent.id) {
              case 'af': return { from: 'from-rose-500/70', via: 'via-rose-600/60', border: 'border-rose-400', activeBorder: 'border-rose-300 ring-4 ring-rose-500/60', shadow: 'shadow-[0_0_35px_rgba(225,29,72,0.4)]', activeShadow: 'shadow-[0_0_60px_rgba(244,63,94,0.9)]', blur: 'bg-rose-500/40', tagBg: 'bg-rose-950/90 border-rose-700/70 text-rose-200' };
              case 'as': return { from: 'from-emerald-500/70', via: 'via-emerald-600/60', border: 'border-emerald-400', activeBorder: 'border-emerald-300 ring-4 ring-emerald-500/60', shadow: 'shadow-[0_0_35px_rgba(16,185,129,0.4)]', activeShadow: 'shadow-[0_0_60px_rgba(16,185,129,0.9)]', blur: 'bg-emerald-500/40', tagBg: 'bg-emerald-950/90 border-emerald-700/70 text-emerald-200' };
              case 'eu': return { from: 'from-violet-500/70', via: 'via-violet-600/60', border: 'border-violet-400', activeBorder: 'border-violet-300 ring-4 ring-violet-500/60', shadow: 'shadow-[0_0_35px_rgba(139,92,246,0.4)]', activeShadow: 'shadow-[0_0_60px_rgba(139,92,246,0.9)]', blur: 'bg-violet-500/40', tagBg: 'bg-violet-950/90 border-violet-700/70 text-violet-200' };
              case 'na': return { from: 'from-amber-500/70', via: 'via-amber-600/60', border: 'border-amber-400', activeBorder: 'border-amber-300 ring-4 ring-amber-500/60', shadow: 'shadow-[0_0_35px_rgba(245,158,11,0.4)]', activeShadow: 'shadow-[0_0_60px_rgba(245,158,11,0.9)]', blur: 'bg-amber-500/40', tagBg: 'bg-amber-950/90 border-amber-700/70 text-amber-200' };
              case 'sa': return { from: 'from-fuchsia-500/70', via: 'via-fuchsia-600/60', border: 'border-fuchsia-400', activeBorder: 'border-fuchsia-300 ring-4 ring-fuchsia-500/60', shadow: 'shadow-[0_0_35px_rgba(217,70,239,0.4)]', activeShadow: 'shadow-[0_0_60px_rgba(217,70,239,0.9)]', blur: 'bg-fuchsia-500/40', tagBg: 'bg-fuchsia-950/90 border-fuchsia-700/70 text-fuchsia-200' };
              case 'oc': return { from: 'from-cyan-500/70', via: 'via-cyan-600/60', border: 'border-cyan-400', activeBorder: 'border-cyan-300 ring-4 ring-cyan-500/60', shadow: 'shadow-[0_0_35px_rgba(6,182,212,0.4)]', activeShadow: 'shadow-[0_0_60px_rgba(6,182,212,0.9)]', blur: 'bg-cyan-500/40', tagBg: 'bg-cyan-950/90 border-cyan-700/70 text-cyan-200' };
              case 'an': return { from: 'from-blue-500/70', via: 'via-blue-600/60', border: 'border-blue-400', activeBorder: 'border-blue-300 ring-4 ring-blue-500/60', shadow: 'shadow-[0_0_35px_rgba(59,130,246,0.4)]', activeShadow: 'shadow-[0_0_60px_rgba(59,130,246,0.9)]', blur: 'bg-blue-500/40', tagBg: 'bg-blue-950/90 border-blue-700/70 text-blue-200' };
              case 'non-sovereign': return { from: 'from-slate-400/70', via: 'via-slate-600/60', border: 'border-slate-300', activeBorder: 'border-slate-200 ring-4 ring-slate-400/60', shadow: 'shadow-[0_0_35px_rgba(148,163,184,0.4)]', activeShadow: 'shadow-[0_0_60px_rgba(148,163,184,0.9)]', blur: 'bg-slate-400/40', tagBg: 'bg-slate-950/90 border-slate-700/70 text-slate-200' };
              default: return { from: 'from-zinc-400/70', via: 'via-zinc-600/60', border: 'border-zinc-400', activeBorder: 'border-zinc-300 ring-4 ring-zinc-400/60', shadow: 'shadow-[0_0_35px_rgba(161,161,170,0.4)]', activeShadow: 'shadow-[0_0_60px_rgba(161,161,170,0.9)]', blur: 'bg-zinc-500/40', tagBg: 'bg-zinc-950/90 border-zinc-700/70 text-zinc-200' };
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
              onMouseEnter={() => setHoveredOrbId(continent.id)}
              onMouseLeave={() => setHoveredOrbId(null)}
              onClick={(e) => handleOrbClick(e, continent.id)}
              title={`${continent.name} (${spec.frequency} Hz) • Click to open`}
            >
              <div className="relative group cursor-pointer flex flex-col items-center justify-center">
                {/* Spherical Interactive Continent Orb */}
                <div 
                  className={cn(
                    "relative w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-full transition-all hover:scale-110 active:scale-95 duration-200 flex flex-col items-center justify-center border bg-[radial-gradient(circle_at_30%_30%,_var(--tw-gradient-stops))] to-zinc-950 shadow-2xl", 
                    isSelected ? colors.activeBorder : colors.border,
                    colors.from, 
                    colors.via, 
                    isSelected ? colors.activeShadow : colors.shadow
                  )}
                >
                  {/* Inner glowing harmonic core */}
                  <div className={cn("absolute inset-1 rounded-full blur-[6px] opacity-80", colors.blur)} />

                  {/* Continent Emoji & Short Name directly visible on the orb */}
                  <div className="relative z-10 flex flex-col items-center justify-center text-center p-1">
                    <span className="text-xl md:text-2xl drop-shadow-md select-none">
                      {badge.emoji}
                    </span>
                    <span className="text-[10px] md:text-xs font-bold text-white tracking-wide uppercase font-sans drop-shadow leading-tight mt-0.5 max-w-[70px] truncate">
                      {badge.shortName}
                    </span>
                    <span className="text-[8px] md:text-[9px] font-mono text-zinc-200 opacity-90">
                      {spec.frequency}Hz
                    </span>
                  </div>

                  {/* Active Selected Pulse */}
                  {isSelected && (
                    <div className="absolute inset-0 rounded-full border-2 border-white/80 animate-ping opacity-40 pointer-events-none" />
                  )}
                </div>

                {/* Permanent Clean Pill Label Beneath Orb */}
                <div className={cn(
                  "mt-1.5 px-2 py-0.5 rounded-full border text-[9px] md:text-[10px] font-mono font-bold tracking-wider uppercase transition-all shadow-md flex items-center gap-1 backdrop-blur-md",
                  colors.tagBg
                )}>
                  <span>{continent.countries?.length || 0} Entities</span>
                </div>
              </div>
            </div>
          );
        })}

        {/* Central Root: True Sun Core (Rich, Radiant & Inviting) */}
        {(() => {
          const isSelected = selectedOrbId === 'true-sun';

          return (
            <div 
              className="relative z-10 flex flex-col items-center justify-center cursor-pointer group"
              onClick={(e) => handleOrbClick(e, 'true-sun')}
              onMouseEnter={() => setHoveredOrbId('true-sun')}
              onMouseLeave={() => setHoveredOrbId(null)}
              title="True Sun Core (963 Hz Apex) • Tap to open 4 Educational Modules"
            >
              <div 
                className={cn(
                  "relative flex flex-col items-center justify-center w-36 h-36 md:w-44 md:h-44 lg:w-48 lg:h-48 rounded-full transition-all hover:scale-105 active:scale-95 duration-200 cursor-pointer",
                  isSelected ? "ring-4 ring-amber-300 shadow-[0_0_100px_rgba(251,191,36,0.85)]" : "shadow-[0_0_70px_rgba(251,191,36,0.45)]"
                )}
              >
                {/* 4 Internal Module Concentric Rings */}
                <div className="absolute -inset-5 rounded-full border border-emerald-500/30 border-dashed pointer-events-none" />
                <div className="absolute -inset-3.5 rounded-full border border-rose-500/30 pointer-events-none" />
                <div className="absolute -inset-2 rounded-full border border-indigo-500/35 border-dashed pointer-events-none" />
                <div className="absolute inset-0 rounded-full border border-amber-400/50 pointer-events-none" />

                {/* Glowing Radiant Sun Core */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-yellow-400 via-amber-400 to-amber-600 opacity-95 shadow-[0_0_70px_rgba(253,230,138,0.6)]" />
                <div className="absolute inset-2.5 rounded-full bg-white/70 blur-md" />
                
                {/* Central Visual Text & Icon */}
                <div className="relative z-10 flex flex-col items-center justify-center text-center p-2">
                  <Sun className="w-6 h-6 md:w-7 md:h-7 text-amber-950 animate-spin-slow drop-shadow" />
                  <span className="text-xs md:text-sm font-bold text-zinc-950 tracking-wider uppercase font-mono mt-0.5 drop-shadow">
                    True Sun
                  </span>
                  <span className="text-[9px] md:text-[10px] font-mono text-zinc-900 font-bold bg-white/60 px-2 py-0.5 rounded-full mt-1">
                    963 Hz Core
                  </span>
                  <span className="text-[8px] md:text-[9px] font-sans text-amber-950 font-medium mt-0.5">
                    Tap to Learn
                  </span>
                </div>
              </div>

              {/* True Sun Bottom Badge */}
              <div className="mt-2 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/50 text-[10px] font-mono font-bold text-amber-300 uppercase tracking-wider backdrop-blur-md shadow">
                4 Core Disciplines Unified
              </div>
            </div>
          );
        })()}

      </div>

      {/* Floating Hover Card to help young learners & new visitors */}
      {hoveredOrbId && (
        <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 bg-zinc-900/95 border border-zinc-700 px-4 py-2.5 rounded-2xl shadow-2xl backdrop-blur-md flex items-center gap-3 pointer-events-none animate-fade-in max-w-md text-center">
          {(() => {
            if (hoveredOrbId === 'true-sun') {
              return (
                <div className="flex items-center gap-2.5 text-left">
                  <span className="text-2xl">☀️</span>
                  <div>
                    <div className="text-xs font-bold text-amber-300 uppercase font-mono">True Sun Solar Atlas (963 Hz)</div>
                    <div className="text-[11px] text-zinc-300">Tap to explore Science, Technology, Sound Physics & World History!</div>
                  </div>
                </div>
              );
            }
            const continent = CONTINENTS.find(c => c.id === hoveredOrbId);
            const badge = CONTINENT_BADGES[hoveredOrbId];
            if (!continent) return null;
            return (
              <div className="flex items-center gap-2.5 text-left">
                <span className="text-2xl">{badge?.emoji || '🌍'}</span>
                <div>
                  <div className="text-xs font-bold text-white uppercase font-mono flex items-center gap-2">
                    <span>{continent.name}</span>
                    <span className="text-amber-400 font-normal">({continent.frequency} Hz)</span>
                  </div>
                  <div className="text-[11px] text-zinc-300">{badge?.highlight || `${continent.countries.length} Nations`} • Click to open countries & tools</div>
                </div>
              </div>
            );
          })()}
        </div>
      )}

      {/* MODAL 1: Interactive True Sun Educational Atlas Modal */}
      {showTrueSunDecomposition && (
        <div
          className="fixed inset-0 z-[9990] flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md"
          onClick={() => {
            setShowTrueSunDecomposition(false);
            setActiveDecomposedLayerId(null);
          }}
        >
          <div
            className="relative w-full max-w-4xl bg-zinc-950 border border-amber-500/40 rounded-3xl p-5 sm:p-8 shadow-[0_0_80px_rgba(245,158,11,0.25)] overflow-hidden max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Background Glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

            {/* Header */}
            <div className="flex items-start justify-between pb-4 border-b border-zinc-800 relative z-10">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-amber-500 to-yellow-300 p-0.5 shadow-lg flex items-center justify-center shrink-0">
                  <div className="w-full h-full bg-zinc-950 rounded-[14px] flex items-center justify-center">
                    <Sun className="w-6 h-6 text-amber-400 animate-pulse" />
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="text-xl sm:text-2xl font-bold text-white tracking-wide">
                      True Sun Learning Center
                    </h2>
                    <span className="px-2.5 py-0.5 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300 font-mono text-xs font-bold">
                      963 Hz Core
                    </span>
                  </div>
                  <p className="text-xs text-zinc-300 mt-0.5">
                    Explore the 4 core disciplines connecting natural science, computers, acoustic sound waves, and global human history.
                  </p>
                </div>
              </div>
              <button
                onClick={() => {
                  setShowTrueSunDecomposition(false);
                  setActiveDecomposedLayerId(null);
                }}
                className="p-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-zinc-400 hover:text-white transition-colors cursor-pointer"
                title="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Discipline Tabs */}
            <div className="flex items-center gap-2 py-3.5 border-b border-zinc-800/80 overflow-x-auto relative z-10 custom-scrollbar">
              <button
                onClick={() => setActiveDecomposedLayerId(null)}
                className={cn(
                  "px-4 py-2 rounded-xl text-xs font-mono tracking-wider uppercase transition-all whitespace-nowrap flex items-center gap-2 border cursor-pointer",
                  activeDecomposedLayerId === null
                    ? "bg-amber-500 text-black border-amber-400 font-bold shadow-md"
                    : "bg-zinc-900/80 border-zinc-800 text-zinc-400 hover:text-zinc-200"
                )}
              >
                <Sun className="w-3.5 h-3.5" />
                <span>All 4 Modules Overview</span>
              </button>

              {COMPILED_TRUE_SUN_LAYERS.map(layer => (
                <button
                  key={layer.id}
                  onClick={() => setActiveDecomposedLayerId(layer.id)}
                  className={cn(
                    "px-3.5 py-2 rounded-xl text-xs font-mono tracking-wider transition-all whitespace-nowrap flex items-center gap-2 border cursor-pointer",
                    activeDecomposedLayerId === layer.id
                      ? `${layer.color} ${layer.borderColor} font-bold shadow-lg`
                      : "bg-zinc-900/80 border-zinc-800 text-zinc-400 hover:text-zinc-200"
                  )}
                >
                  <layer.icon className="w-3.5 h-3.5" />
                  <span>{layer.simpleTitle}</span>
                </button>
              ))}
            </div>

            {/* Body Content */}
            <div className="flex-1 overflow-y-auto py-5 space-y-5 relative z-10 pr-1">
              {activeDecomposedLayerId === null ? (
                /* All 4 Disciplines Grid */
                <div className="space-y-4">
                  <div className="p-4 rounded-2xl bg-gradient-to-r from-amber-950/40 via-zinc-900/80 to-amber-950/40 border border-amber-500/30 flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
                    <div>
                      <span className="text-[11px] font-mono text-amber-400 font-bold tracking-widest uppercase">
                        Unified Multi-Disciplinary Atlas
                      </span>
                      <h3 className="text-base font-bold text-white mt-0.5">
                        Everything is Connected in One Simple Model
                      </h3>
                      <p className="text-xs text-zinc-300 mt-1 max-w-xl">
                        Click on any module below to discover how physics, internet infrastructure, acoustic sound waves, and human civics work together.
                      </p>
                    </div>
                    <button
                      onClick={() => playResonance(963)}
                      className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 shadow-lg whitespace-nowrap cursor-pointer"
                    >
                      <Volume2 className="w-4 h-4" />
                      <span>Play 963 Hz Solar Tone</span>
                    </button>
                  </div>

                  {/* 4 Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                    {COMPILED_TRUE_SUN_LAYERS.map((layer) => (
                      <div
                        key={layer.id}
                        onClick={() => setActiveDecomposedLayerId(layer.id)}
                        className={cn(
                          "p-4 rounded-2xl border transition-all cursor-pointer group bg-zinc-900/70 hover:bg-zinc-900 flex flex-col justify-between",
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
                                <h4 className="font-bold text-sm text-white">
                                  {layer.simpleTitle}
                                </h4>
                                <span className="text-[11px] font-mono text-amber-400 font-semibold">
                                  {layer.frequency} Hz Solfeggio Wave
                                </span>
                              </div>
                            </div>
                            <ChevronRight className="w-4 h-4 text-zinc-500 group-hover:text-white transition-colors" />
                          </div>

                          <p className="text-xs text-zinc-300 mt-3 leading-relaxed">
                            {layer.simpleDescription}
                          </p>
                        </div>

                        <div className="mt-4 pt-3 border-t border-zinc-800 flex items-center justify-between">
                          <span className="text-[10px] text-zinc-400 font-mono">
                            💡 {layer.funFact.slice(0, 48)}...
                          </span>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              playResonance(layer.frequency);
                            }}
                            className="p-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white transition-colors cursor-pointer"
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
                /* Single Layer Detailed View */
                (() => {
                  const layer = COMPILED_TRUE_SUN_LAYERS.find(l => l.id === activeDecomposedLayerId);
                  if (!layer) return null;
                  const spec = getFrequencySpec(layer.id);

                  return (
                    <div className="space-y-4">
                      <div className={cn("p-5 rounded-2xl border", layer.color, layer.borderColor)}>
                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                          <div className="flex items-center gap-3">
                            <div className={cn("p-3 rounded-2xl border", layer.borderColor, "bg-zinc-950/80")}>
                              <layer.icon className={cn("w-7 h-7", layer.textColor)} />
                            </div>
                            <div>
                              <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-amber-400">
                                Educational Module
                              </span>
                              <h3 className="text-xl font-bold text-white">
                                {layer.simpleTitle}
                              </h3>
                              <p className="text-xs text-zinc-300">
                                Frequency: {layer.frequency} Hz • {spec.solfeggioName}
                              </p>
                            </div>
                          </div>

                          <button
                            onClick={() => playResonance(layer.frequency)}
                            className="px-4 py-2 rounded-xl font-mono text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 shadow-lg bg-white text-zinc-950 hover:bg-zinc-200 cursor-pointer"
                          >
                            <Volume2 className="w-4 h-4" />
                            <span>Play {layer.frequency} Hz Tone</span>
                          </button>
                        </div>
                      </div>

                      {/* Fun Fact Card */}
                      <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-start gap-3">
                        <Sparkles className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                        <div>
                          <span className="text-xs font-bold text-amber-300 uppercase tracking-wider block">
                            Did You Know?
                          </span>
                          <p className="text-xs text-zinc-200 mt-0.5">
                            {layer.funFact}
                          </p>
                        </div>
                      </div>

                      {/* Simple Concepts Breakdown */}
                      <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800 space-y-2.5">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-300">
                          Key Things to Understand:
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                          {layer.keyConcepts.map((concept, idx) => (
                            <div key={idx} className="p-3 rounded-lg bg-zinc-950 border border-zinc-800 text-xs text-zinc-200 flex items-center gap-2">
                              <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
                              <span>{concept}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Plain Language Explanation */}
                      <div className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-800">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-1">
                          Overview & Real-World Importance:
                        </h4>
                        <p className="text-xs text-zinc-300 leading-relaxed">
                          {layer.simpleDescription} This discipline provides foundational insights into how our modern world operates and how human ingenuity bridges nature and technology.
                        </p>
                      </div>
                    </div>
                  );
                })()
              )}
            </div>
          </div>
        </div>
      )}

      {/* MODAL 2: Interactive Sound Chamber / Solfeggio Scale Board */}
      {showSoundChamber && (
        <div
          className="fixed inset-0 z-[9990] flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md"
          onClick={() => setShowSoundChamber(false)}
        >
          <div
            className="relative w-full max-w-3xl bg-zinc-950 border border-indigo-500/40 rounded-3xl p-5 sm:p-7 shadow-[0_0_80px_rgba(99,102,241,0.25)] overflow-hidden max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-start justify-between pb-4 border-b border-zinc-800">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/20 border border-indigo-500/40 flex items-center justify-center text-indigo-400">
                  <Music className="w-5 h-5 animate-pulse" />
                </div>
                <div>
                  <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
                    <span>Harmonic Sound Chamber</span>
                  </h2>
                  <p className="text-xs text-zinc-400">
                    Tap any frequency to hear its pure dual-oscillator acoustic sound wave.
                  </p>
                </div>
              </div>
              <button
                onClick={() => setShowSoundChamber(false)}
                className="p-1.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-zinc-400 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Sound Board Grid */}
            <div className="flex-1 overflow-y-auto py-4 grid grid-cols-1 sm:grid-cols-2 gap-2.5 custom-scrollbar pr-1">
              {SOLFEGGIO_TONES.map(tone => {
                const isPlaying = activeTonePlaying === tone.freq;
                return (
                  <button
                    key={tone.freq}
                    onClick={() => playResonance(tone.freq)}
                    className={cn(
                      "p-3.5 rounded-2xl border text-left transition-all flex items-center justify-between cursor-pointer group",
                      isPlaying 
                        ? "bg-amber-500/20 border-amber-400 ring-2 ring-amber-400/50 shadow-lg scale-[1.02]" 
                        : "bg-zinc-900/60 hover:bg-zinc-900 border-zinc-800 hover:border-zinc-700"
                    )}
                  >
                    <div className="flex items-center gap-3">
                      <div className={cn("w-10 h-10 rounded-xl border flex flex-col items-center justify-center font-mono font-bold text-xs shrink-0", tone.color)}>
                        <span>{tone.note}</span>
                        <span className="text-[9px] opacity-80">{tone.freq}</span>
                      </div>
                      <div>
                        <div className="font-bold text-xs text-white group-hover:text-amber-300 transition-colors">
                          {tone.name} ({tone.freq} Hz)
                        </div>
                        <div className="text-[11px] text-zinc-400 mt-0.5">
                          {tone.desc}
                        </div>
                      </div>
                    </div>
                    <div className="p-2 rounded-lg bg-zinc-800 group-hover:bg-zinc-700 text-zinc-300 group-hover:text-white transition-colors shrink-0">
                      <Volume2 className={cn("w-4 h-4", isPlaying && "text-amber-400 animate-pulse")} />
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="pt-3 border-t border-zinc-800 text-[11px] font-mono text-zinc-400 flex items-center justify-between">
              <span>🔊 Powered by Web Audio API Dual-Oscillator Synthesis</span>
              <span>Smooth Exponential Envelopes</span>
            </div>
          </div>
        </div>
      )}

      {/* MODAL 3: Global Country Finder / 236 Nations Search */}
      {showGlobalSearch && (
        <div
          className="fixed inset-0 z-[9990] flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md"
          onClick={() => setShowGlobalSearch(false)}
        >
          <div
            className="relative w-full max-w-3xl bg-zinc-950 border border-zinc-800 rounded-3xl p-5 sm:p-7 shadow-[0_0_80px_rgba(0,0,0,0.9)] overflow-hidden max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header & Search Input */}
            <div className="flex flex-col gap-3 pb-4 border-b border-zinc-800">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Globe className="w-5 h-5 text-amber-400" />
                  <h2 className="text-lg font-bold text-white">
                    Global Sovereign Directory ({allGlobalCountries.length} Entities)
                  </h2>
                </div>
                <button
                  onClick={() => setShowGlobalSearch(false)}
                  className="p-1.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-zinc-400 hover:text-white transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Search Bar */}
              <div className="relative">
                <Search className="w-4 h-4 text-zinc-500 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={globalSearchQuery}
                  onChange={(e) => setGlobalSearchQuery(e.target.value)}
                  placeholder="Type any country name, capital (e.g. Lusaka, Tokyo, Paris), dialing code (+260), or currency..."
                  className="w-full pl-9 pr-4 py-2 bg-zinc-900 border border-zinc-700 rounded-xl text-xs font-mono text-zinc-200 placeholder-zinc-500 outline-none focus:border-amber-500 transition-colors"
                  autoFocus
                />
              </div>
            </div>

            {/* Results Grid */}
            <div className="flex-1 overflow-y-auto py-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5 custom-scrollbar pr-1">
              {filteredGlobalCountries.map((c, idx) => {
                const localTime = getNationLocalTime(c.timeZone);

                return (
                  <button
                    key={`${c.name}-${idx}`}
                    onClick={() => {
                      setShowGlobalSearch(false);
                      if (onOpenImmersion) {
                        onOpenImmersion(c.continentId);
                      } else if (onContinentSelect) {
                        onContinentSelect(c.continentId);
                      }
                    }}
                    className="p-3 bg-zinc-900/60 hover:bg-zinc-800 border border-zinc-800 hover:border-amber-500/50 rounded-xl text-left transition-all group flex flex-col justify-between gap-2 cursor-pointer shadow-sm"
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="text-xl select-none">{c.flag}</span>
                      <div className="min-w-0 flex-1">
                        <span className="text-xs font-bold text-white group-hover:text-amber-300 transition-colors truncate block">
                          {c.name}
                        </span>
                        <span className="text-[11px] text-zinc-400 truncate block">
                          {c.capital} • {c.continentName.split(' ')[0]}
                        </span>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-1 text-[10px] font-mono pt-1.5 border-t border-zinc-800/60 text-zinc-400">
                      <div className="flex items-center gap-1">
                        <Phone className="w-3 h-3 text-emerald-400 shrink-0" />
                        <span className="text-emerald-400 font-bold truncate">{c.dialCode}</span>
                      </div>
                      <div className="flex items-center justify-center gap-1">
                        <Coins className="w-3 h-3 text-amber-400 shrink-0" />
                        <span className="text-amber-400 font-bold truncate">{c.currencyCode}</span>
                      </div>
                      <div className="flex items-center justify-end gap-1">
                        <Clock className="w-3 h-3 text-cyan-400 shrink-0" />
                        <span className="text-cyan-300 font-bold truncate">{localTime.timeFormatted}</span>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="pt-3 border-t border-zinc-800 text-[11px] text-zinc-400 text-center font-mono">
              Showing {filteredGlobalCountries.length} results • Tap any country to open its full continental directory
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
