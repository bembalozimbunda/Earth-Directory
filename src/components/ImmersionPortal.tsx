import React, { useState, useEffect, useMemo } from 'react';
import { 
  ArrowLeft, X, Volume2, Globe2, Phone, Coins, Clock, Users, 
  MapPin, Sparkles, Search, Building2, Landmark, ShieldCheck,
  ChevronRight, Compass, Sun, Radio, Cpu, BookOpen, Layers
} from 'lucide-react';
import { CONTINENTS, ContinentData } from '../data/continents';
import { getFrequencySpec } from '../data/frequencies';
import { getNationFinancials } from '../data/nationFinancials';
import { getNationDemographics } from '../data/nationDemographics';
import { africanFlags } from '../flags';
import { playHarmonicSynthesisTone } from '../utils/frequencyPhysics';
import { getNationLocalTime } from '../utils/timeZoneUtils';
import { COMPILED_TRUE_SUN_LAYERS } from './SynthesisCore';
import { ZAMBIA_DETAILED_PROVINCES } from '../data/zambiaDistricts';
import { getDistrictsForProvince } from '../provinces';
import { getNationSpokenLanguage } from '../data/nations';

const GLOBAL_FLAG_MAP: Record<string, string> = {
  ...africanFlags,
  "DR Congo": "🇨🇩",
  "Democratic Republic of the Congo": "🇨🇩",
  "Republic of the Congo": "🇨🇬",
  "Ivory Coast": "🇨🇮",
  "Côte d'Ivoire": "🇨🇮",
  "Eswatini": "🇸🇿",
  "The Gambia": "🇬🇲",
  "Cabo Verde": "🇨🇻",
  "Sao Tome and Principe": "🇸🇹",
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
  "Spain": "🇪🇸",
  "Antarctic Treaty System": "🇦🇶",
  "Research Stations": "🇦🇶"
};

const FULL_COLORS: Record<string, string> = {
  'af': '#e11d48',
  'as': '#059669',
  'eu': '#7c3aed',
  'na': '#d97706',
  'sa': '#c026d3',
  'oc': '#0891b2',
  'an': '#2563eb',
  'non-sovereign': '#64748b',
  'true-sun': '#fbbf24',
  'source': '#10b981',
  'hardware': '#f43f5e',
  'frequencies': '#6366f1',
  'ancestral': '#f59e0b'
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
  'source': '#022c22',
  'hardware': '#4c0519',
  'frequencies': '#1e1b4b',
  'ancestral': '#451a03'
};

// 10 Zambian Provinces list
const ZAMBIA_PROVINCES_LIST = [
  'Lusaka', 'Copperbelt', 'Central', 'Eastern', 'Luapula', 
  'Muchinga', 'Northern', 'North-Western', 'Southern', 'Western'
];

interface ImmersionPortalProps {
  sectorId: string;
  onClose: () => void;
  onSelectContinent?: (id: string) => void;
}

export function ImmersionPortal({ sectorId: initialSectorId, onClose, onSelectContinent }: ImmersionPortalProps) {
  const [activeSectorId, setActiveSectorId] = useState(initialSectorId);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentTime, setCurrentTime] = useState(new Date());
  
  // Selected country modal inside immersion
  const [selectedCountryName, setSelectedCountryName] = useState<string | null>(null);
  const [activeZambiaProvince, setActiveZambiaProvince] = useState<string>('Lusaka');
  const [activeTrueSunModule, setActiveTrueSunModule] = useState<string | null>(null);

  // Keep sector in sync with props
  useEffect(() => {
    setActiveSectorId(initialSectorId);
  }, [initialSectorId]);

  // Real-time local clock ticker (updates every second)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (selectedCountryName) {
          setSelectedCountryName(null);
        } else {
          onClose();
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedCountryName, onClose]);

  const continent: ContinentData | undefined = CONTINENTS.find(c => c.id === activeSectorId);
  const coreNode = COMPILED_TRUE_SUN_LAYERS.find(n => n.id === activeSectorId);
  const isTrueSun = activeSectorId === 'true-sun';
  const trueSun = isTrueSun ? { label: 'True Sun Core', sub: 'Planetary Harmonic Synthesis Core' } : null;
  const spec = getFrequencySpec(activeSectorId);

  const title = continent?.name || coreNode?.name || trueSun?.label || 'Planetary Immersion Sector';
  const sub = continent?.sub || coreNode?.sub || trueSun?.sub || '';
  const freq = spec?.frequency || coreNode?.frequency || 432;

  const handlePlayTone = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsPlayingAudio(true);
    playHarmonicSynthesisTone(freq, 3.5, 0.3);
    setTimeout(() => setIsPlayingAudio(false), 3500);
  };

  const bgColor = DEEP_COLORS[activeSectorId] || '#09090b';
  const glowColor = FULL_COLORS[activeSectorId] || '#fbbf24';

  // Filtered nations list
  const filteredCountries = useMemo(() => {
    if (!continent || !continent.countries) return [];
    if (!searchQuery.trim()) return continent.countries;
    const q = searchQuery.toLowerCase().trim();
    return continent.countries.filter(name => {
      const fin = getNationFinancials(name);
      const demo = getNationDemographics(name);
      return (
        name.toLowerCase().includes(q) ||
        (fin?.capital && fin.capital.toLowerCase().includes(q)) ||
        (demo?.capital && demo.capital.toLowerCase().includes(q)) ||
        (fin?.dialCode && fin.dialCode.toLowerCase().includes(q)) ||
        (fin?.currencyCode && fin.currencyCode.toLowerCase().includes(q))
      );
    });
  }, [continent, searchQuery]);

  // Selected Country Data
  const selectedNationFinancials = selectedCountryName ? getNationFinancials(selectedCountryName) : null;
  const selectedNationDemographics = selectedCountryName ? getNationDemographics(selectedCountryName) : null;
  const isSelectedZambia = selectedCountryName?.toLowerCase().trim() === 'zambia';

  // Zambia Detailed Province info
  const detailedZambiaProvince = useMemo(() => {
    return ZAMBIA_DETAILED_PROVINCES.find(
      p => p.name.toLowerCase() === activeZambiaProvince.toLowerCase()
    );
  }, [activeZambiaProvince]);

  const zambiaProvinceDistricts = useMemo(() => {
    if (detailedZambiaProvince && detailedZambiaProvince.districts) {
      return detailedZambiaProvince.districts.map(d => d.name);
    }
    return getDistrictsForProvince('Zambia', activeZambiaProvince);
  }, [detailedZambiaProvince, activeZambiaProvince]);

  return (
    <div
      id="immersion-portal-overlay"
      className="fixed inset-0 z-[99999] flex flex-col items-center overflow-y-auto overflow-x-hidden min-h-screen p-3 sm:p-6 md:p-8 select-none text-white animate-in fade-in duration-300 pointer-events-auto"
      style={{
        backgroundColor: bgColor,
        backgroundImage: `radial-gradient(circle farthest-corner at 50% 25%, ${glowColor}25 0%, ${bgColor} 92%)`
      }}
    >
      {/* Background Animated Pulse */}
      <div className="fixed inset-0 pointer-events-none flex items-center justify-center mix-blend-overlay opacity-30">
        <div
          className="w-[140vw] h-[140vw] rounded-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.8)_0%,transparent_70%)] animate-pulse"
          style={{ animationDuration: '4s' }}
        />
      </div>

      {/* Floating Sticky Navigation Bar */}
      <header className="w-full max-w-6xl flex flex-col gap-3 z-50 mb-4 sm:mb-6 sticky top-0 py-2 backdrop-blur-xl bg-black/40 px-3 sm:px-4 rounded-3xl border border-white/10 shadow-2xl">
        <div className="flex items-center justify-between gap-2">
          {/* Top-Left: High-Contrast Back Button */}
          <button
            id="immersion-back-button"
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
            className="flex items-center gap-2 px-3.5 py-2 sm:px-5 sm:py-2.5 bg-zinc-950/90 hover:bg-black text-zinc-100 hover:text-white border border-white/30 hover:border-amber-400 rounded-2xl shadow-[0_4px_25px_rgba(0,0,0,0.6)] transition-all active:scale-95 cursor-pointer font-bold text-xs sm:text-sm tracking-wider uppercase group shrink-0"
            title="Return to Main Directory (Esc)"
          >
            <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Directory</span>
          </button>

          {/* Center: Live Sector Indicator */}
          <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 border border-white/15 text-xs font-mono text-zinc-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Immersion Mode: <strong className="text-white">{title}</strong></span>
          </div>

          {/* Top-Right: Sound Tone Toggle & Close Button */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handlePlayTone}
              className={`flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2.5 rounded-2xl border text-xs sm:text-sm font-bold tracking-wider uppercase transition-all cursor-pointer shadow-lg active:scale-95 shrink-0 ${
                isPlayingAudio
                  ? 'bg-amber-500 text-black border-amber-400 shadow-[0_0_20px_rgba(245,158,11,0.6)] animate-pulse'
                  : 'bg-zinc-950/80 hover:bg-black text-amber-300 border-white/20 hover:border-amber-400'
              }`}
              title={`Play ${freq} Hz Harmonic Tone`}
            >
              <Volume2 className="w-4 h-4" />
              <span className="hidden sm:inline">{freq} Hz Audio</span>
            </button>

            <button
              id="immersion-close-button"
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onClose();
              }}
              className="p-2 sm:p-2.5 bg-zinc-950/80 hover:bg-black text-zinc-300 hover:text-white border border-white/20 hover:border-red-400 rounded-2xl shadow-[0_4px_25px_rgba(0,0,0,0.6)] transition-all active:scale-95 cursor-pointer shrink-0"
              title="Close Immersion (Esc)"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Quick Continental Sector Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 custom-scrollbar text-xs">
          {CONTINENTS.map(c => {
            const isActive = activeSectorId === c.id;
            return (
              <button
                key={c.id}
                onClick={() => {
                  setActiveSectorId(c.id);
                  setSearchQuery('');
                  setSelectedCountryName(null);
                }}
                className={`px-3 py-1.5 rounded-xl font-mono text-[11px] uppercase tracking-wider transition-all whitespace-nowrap flex items-center gap-1.5 border cursor-pointer ${
                  isActive
                    ? 'bg-white text-zinc-950 font-bold border-white shadow-lg'
                    : 'bg-zinc-950/60 hover:bg-zinc-900 border-white/10 text-zinc-400 hover:text-zinc-200'
                }`}
              >
                <span>{c.flag}</span>
                <span>{c.name.split(' ')[0]}</span>
                <span className="opacity-70 text-[9px]">({c.frequency}Hz)</span>
              </button>
            );
          })}

          <button
            onClick={() => {
              setActiveSectorId('true-sun');
              setSearchQuery('');
              setSelectedCountryName(null);
            }}
            className={`px-3 py-1.5 rounded-xl font-mono text-[11px] uppercase tracking-wider transition-all whitespace-nowrap flex items-center gap-1.5 border cursor-pointer ${
              activeSectorId === 'true-sun'
                ? 'bg-amber-400 text-black font-bold border-amber-300 shadow-lg'
                : 'bg-zinc-950/60 hover:bg-zinc-900 border-amber-500/30 text-amber-300 hover:text-amber-100'
            }`}
          >
            <span>☀️</span>
            <span>True Sun (963Hz)</span>
          </button>
        </div>
      </header>

      {/* Main Immersion Content Body */}
      <div className="relative z-10 w-full max-w-5xl flex flex-col items-center text-center space-y-6 pb-16">
        
        {/* Sector Identifier Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/60 border border-white/20 text-xs font-mono tracking-[0.25em] uppercase backdrop-blur-md shadow-md text-amber-300">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>Planetary Resonance • {freq} Hz Solfeggio Scale</span>
        </div>

        {/* Big Sector Title */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-light text-white tracking-[0.1em] uppercase drop-shadow-[0_4px_30px_rgba(0,0,0,0.8)]">
          {title}
        </h1>

        {/* Subtitle & Telemetry */}
        {sub && (
          <p className="text-xs sm:text-sm md:text-base font-mono text-zinc-300 tracking-[0.15em] uppercase max-w-2xl">
            {sub} {spec?.wavelength ? `• Acoustic Wavelength ${spec.wavelength}cm in air` : ''}
          </p>
        )}

        {/* Continental Sector Stats Bar */}
        {continent && (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full max-w-3xl pt-2">
            <div className="p-3.5 bg-black/50 border border-white/15 rounded-2xl backdrop-blur-md">
              <span className="text-[10px] text-zinc-400 uppercase font-bold block">Total Flags</span>
              <span className="text-white font-bold text-base sm:text-lg mt-0.5 block">{continent.flag}</span>
            </div>
            <div className="p-3.5 bg-black/50 border border-white/15 rounded-2xl backdrop-blur-md">
              <span className="text-[10px] text-zinc-400 uppercase font-bold block">Population</span>
              <span className="text-emerald-300 font-bold text-base sm:text-lg mt-0.5 block">{continent.population}</span>
            </div>
            <div className="p-3.5 bg-black/50 border border-white/15 rounded-2xl backdrop-blur-md">
              <span className="text-[10px] text-zinc-400 uppercase font-bold block">Land Area</span>
              <span className="text-amber-300 font-bold text-xs sm:text-sm font-mono mt-1 block">{continent.geography?.landArea || 'N/A'}</span>
            </div>
            <div className="p-3.5 bg-black/50 border border-white/15 rounded-2xl backdrop-blur-md">
              <span className="text-[10px] text-zinc-400 uppercase font-bold block">Calling Series</span>
              <span className="text-cyan-300 font-bold text-xs sm:text-sm font-mono mt-1 block">
                {continent.geography?.callingCodeSeries ? continent.geography.callingCodeSeries.split('(')[0].trim() : '+00'}
              </span>
            </div>
          </div>
        )}

        {/* Sovereign Nations Roster (If Continental Sector) */}
        {continent && continent.countries && (
          <div className="w-full mt-4 max-w-5xl bg-black/40 border border-white/15 rounded-3xl p-4 sm:p-6 backdrop-blur-xl shadow-2xl text-left">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pb-4 border-b border-white/10">
              <div className="flex items-center gap-2.5">
                <Globe2 className="w-5 h-5 text-amber-400 shrink-0" />
                <div>
                  <h3 className="text-sm sm:text-base font-bold uppercase tracking-wider text-white">
                    Sovereign Entities & National Capitals ({continent.countries.length})
                  </h3>
                  <p className="text-[11px] text-zinc-400">
                    Tap any nation card to open full sovereign details, dialing codes, and live local time.
                  </p>
                </div>
              </div>

              {/* Fast Search Input */}
              <div className="relative w-full md:w-72">
                <Search className="w-4 h-4 text-zinc-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={`Search ${continent.countries.length} nations in ${continent.name.split(' ')[0]}...`}
                  className="w-full pl-9 pr-8 py-2 bg-zinc-900/90 border border-zinc-700/80 rounded-xl text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-amber-400 transition-colors"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-white"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>

            {/* Nations Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-5 max-h-[460px] overflow-y-auto pr-1 custom-scrollbar">
              {filteredCountries.map((countryName, idx) => {
                const fin = getNationFinancials(countryName);
                const demo = getNationDemographics(countryName);
                const localTime = getNationLocalTime(demo?.timeZone || fin?.timeZone || 'UTC', currentTime);
                const isZambia = countryName.toLowerCase().trim() === 'zambia';
                const flag = GLOBAL_FLAG_MAP[countryName] || 
                             GLOBAL_FLAG_MAP[countryName.replace('&', 'and')] || 
                             GLOBAL_FLAG_MAP[countryName.replace('and', '&')] || 
                             '🌐';

                return (
                  <button
                    key={`${countryName}-${idx}`}
                    type="button"
                    onClick={() => setSelectedCountryName(countryName)}
                    className={`p-3 bg-zinc-950/80 hover:bg-black border rounded-2xl text-left transition-all group flex flex-col justify-between gap-2.5 cursor-pointer shadow-sm hover:scale-[1.02] ${
                      isZambia
                        ? 'border-emerald-500/60 hover:border-emerald-400 bg-emerald-950/30'
                        : 'border-white/10 hover:border-amber-400/70'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-center gap-2.5 min-w-0">
                        <span className="text-2xl select-none shrink-0">{flag}</span>
                        <div className="min-w-0 flex-1">
                          <span className="text-xs font-bold text-white group-hover:text-amber-300 transition-colors truncate block">
                            {countryName}
                          </span>
                          <span className="text-[11px] text-zinc-400 truncate block">
                            {demo?.capital || fin?.capital || 'National Capital'}
                          </span>
                        </div>
                      </div>

                      {isZambia && (
                        <span className="px-1.5 py-0.5 rounded bg-emerald-500/20 border border-emerald-500/40 text-[8px] font-mono font-bold text-emerald-300 uppercase shrink-0">
                          🇿🇲 Dev Node
                        </span>
                      )}
                    </div>

                    {/* Codes & Time Telemetry Strip */}
                    <div className="grid grid-cols-3 gap-1 py-1.5 px-2 bg-black/60 rounded-xl border border-white/10 text-[10px] font-mono text-zinc-300">
                      <div className="flex items-center gap-1">
                        <Phone className="w-3 h-3 text-emerald-400 shrink-0" />
                        <span className="text-emerald-300 font-bold truncate">{fin?.dialCode || '+00'}</span>
                      </div>
                      <div className="flex items-center justify-center gap-1">
                        <Coins className="w-3 h-3 text-amber-400 shrink-0" />
                        <span className="text-amber-300 font-bold truncate">{fin?.currencyCode || 'USD'}</span>
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
          </div>
        )}

        {/* True Sun Interactive Disciplines (If True Sun Sector Active) */}
        {isTrueSun && (
          <div className="w-full mt-4 max-w-4xl bg-black/50 border border-amber-500/40 rounded-3xl p-6 backdrop-blur-xl text-left space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-zinc-800">
              <div className="flex items-center gap-3">
                <Sun className="w-6 h-6 text-amber-400 animate-spin-slow" />
                <div>
                  <h3 className="text-lg font-bold text-white uppercase tracking-wider">
                    True Sun Harmonic Core (963 Hz Apex)
                  </h3>
                  <p className="text-xs text-zinc-300">
                    The central anchor uniting Natural Science, Computer Technology, Sound Waves & Human Ancestral Heritage.
                  </p>
                </div>
              </div>
            </div>

            {/* 4 Discipline Modules Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {COMPILED_TRUE_SUN_LAYERS.map(layer => (
                <div
                  key={layer.id}
                  className="p-5 rounded-2xl bg-zinc-950/80 border border-zinc-800 hover:border-amber-500/40 transition-all space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <layer.icon className="w-5 h-5 text-amber-400" />
                      <span className="text-sm font-bold text-white uppercase tracking-wider">{layer.name}</span>
                    </div>
                    <span className="px-2 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 font-mono text-[10px]">
                      {layer.frequency} Hz
                    </span>
                  </div>
                  <p className="text-xs text-zinc-300 leading-relaxed">
                    {layer.simpleDescription}
                  </p>
                  <div className="p-3 rounded-xl bg-zinc-900/90 border border-zinc-800 text-[11px] text-amber-200">
                    💡 <strong>Insight:</strong> {layer.funFact}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Bottom Return Button */}
        <div className="pt-6">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
            className="px-8 py-3.5 bg-white/10 hover:bg-white/20 text-white border border-white/30 hover:border-white/60 rounded-full font-bold text-xs sm:text-sm tracking-[0.2em] uppercase transition-all backdrop-blur-xl cursor-pointer shadow-2xl active:scale-95 flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Main Directory</span>
          </button>
        </div>

      </div>

      {/* MODAL: Sovereign Nation & Subnational Detail Inspector */}
      {selectedCountryName && (
        <div
          className="fixed inset-0 z-[999999] flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setSelectedCountryName(null)}
        >
          <div
            className="relative w-full max-w-3xl bg-zinc-950 border border-zinc-700 rounded-3xl p-5 sm:p-7 shadow-[0_0_80px_rgba(0,0,0,0.8)] overflow-hidden max-h-[92vh] flex flex-col space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-start justify-between pb-4 border-b border-zinc-800">
              <div className="flex items-center gap-3">
                <span className="text-3xl select-none">
                  {GLOBAL_FLAG_MAP[selectedCountryName] || '🌐'}
                </span>
                <div>
                  <div className="flex items-center gap-2.5">
                    <h2 className="text-xl sm:text-2xl font-bold text-white">
                      {selectedCountryName}
                    </h2>
                    {isSelectedZambia && (
                      <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-500/50 text-emerald-300 font-mono text-[10px] font-bold uppercase">
                        🇿🇲 Developer Origin Node
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-zinc-400 mt-0.5">
                    Capital: <strong className="text-zinc-200">{selectedNationDemographics?.capital || selectedNationFinancials?.capital || 'National Capital'}</strong>
                  </p>
                </div>
              </div>

              <button
                onClick={() => setSelectedCountryName(null)}
                className="p-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-zinc-400 hover:text-white transition-colors cursor-pointer"
                title="Close (Esc)"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Telemetry Header Bar */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs font-mono">
              <div className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-800/60 flex items-center justify-between">
                <span className="text-zinc-400 flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-emerald-400" />
                  ITU Dialing:
                </span>
                <span className="text-emerald-300 font-bold">{selectedNationFinancials?.dialCode || '+00'}</span>
              </div>

              <button
                type="button"
                onClick={() => {
                  window.dispatchEvent(new CustomEvent('OPEN_KWACHA_AMPLIFIER'));
                }}
                className="p-3 rounded-xl bg-amber-950/40 hover:bg-amber-900/50 border border-amber-800/60 hover:border-amber-500/80 flex items-center justify-between transition-colors cursor-pointer text-left group"
                title="Launch Kwacha Frequency Amplifier & BoZ Telemetry"
              >
                <span className="text-zinc-400 group-hover:text-amber-300 flex items-center gap-1.5 transition-colors">
                  <Coins className="w-3.5 h-3.5 text-amber-400" />
                  Currency:
                </span>
                <span className="text-amber-300 font-bold flex items-center gap-1.5">
                  {selectedNationFinancials?.currencyCode} ({selectedNationFinancials?.currencySymbol || '$'})
                  <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-200">
                    BoZ ↗
                  </span>
                </span>
              </button>

              {(() => {
                const nationTime = getNationLocalTime(
                  selectedNationDemographics?.timeZone || selectedNationFinancials?.timeZone || 'UTC',
                  currentTime
                );
                return (
                  <div className="p-3 rounded-xl bg-blue-950/40 border border-blue-800/60 flex items-center justify-between">
                    <span className="text-zinc-400 flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-cyan-400" />
                      Live Clock:
                    </span>
                    <span className="text-cyan-300 font-bold">
                      {nationTime.timeFormattedWithSeconds}
                    </span>
                  </div>
                );
              })()}
            </div>

            {/* Demographics Overview Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-xs">
              <div className="p-3 bg-zinc-900/70 border border-zinc-800 rounded-xl">
                <span className="text-[10px] uppercase text-zinc-400 font-bold block">Population</span>
                <span className="text-white font-bold text-sm block mt-0.5">
                  {selectedNationDemographics?.population?.split('(')[0]?.trim() || 'N/A'}
                </span>
              </div>

              <div className="p-3 bg-zinc-900/70 border border-zinc-800 rounded-xl">
                <span className="text-[10px] uppercase text-zinc-400 font-bold block">Land Area</span>
                <span className="text-zinc-200 font-mono text-xs block mt-0.5">
                  {selectedNationDemographics?.landArea || 'N/A'}
                </span>
              </div>

              <div className="p-3 bg-zinc-900/70 border border-zinc-800 rounded-xl">
                <span className="text-[10px] uppercase text-zinc-400 font-bold block">Official Language</span>
                <span className="text-zinc-200 text-xs block mt-0.5 truncate">
                  {selectedCountryName ? getNationSpokenLanguage(selectedCountryName) : 'National Language'}
                </span>
              </div>

              <div className="p-3 bg-zinc-900/70 border border-zinc-800 rounded-xl">
                <span className="text-[10px] uppercase text-zinc-400 font-bold block">Timezone Standard</span>
                <span className="text-cyan-300 font-mono text-xs block mt-0.5 truncate">
                  {selectedNationDemographics?.timeZone || selectedNationFinancials?.timeZone || 'UTC'}
                </span>
              </div>
            </div>

            {/* Subnational Continuation: Zambia Only vs. Other Sovereign Nations Stop at National */}
            {isSelectedZambia ? (
              /* ZAMBIA: Full Subnational Granularity (Provinces & Districts) */
              <div className="flex-1 flex flex-col gap-3 pt-1 overflow-y-auto pr-1 custom-scrollbar">
                {/* Developer Origin Banner */}
                <div className="p-3.5 rounded-2xl bg-emerald-950/70 border border-emerald-500/50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs shadow-md">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-xl bg-emerald-500/20 text-emerald-300 font-bold text-lg select-none">
                      🇿🇲
                    </div>
                    <div>
                      <div className="font-bold text-emerald-300 uppercase tracking-wider">
                        Zambian Developer Jurisdiction
                      </div>
                      <div className="text-zinc-300 text-[11px]">
                        Full subnational hierarchy active: 10 Provinces (Level 1) & 116 Municipal Districts (Level 2).
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 shrink-0 flex-wrap sm:flex-nowrap">
                    <button
                      type="button"
                      onClick={() => {
                        window.dispatchEvent(new CustomEvent('OPEN_ZAMBIA_TRIBES'));
                      }}
                      className="px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-mono text-[11px] uppercase font-bold transition-all cursor-pointer flex items-center gap-1.5 shadow-[0_0_20px_rgba(16,185,129,0.4)] active:scale-95"
                    >
                      <Users className="w-3.5 h-3.5" />
                      <span>73+ Zambian Tribes & Royalty</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        window.dispatchEvent(new CustomEvent('OPEN_BANK_TELEMETRY'));
                      }}
                      className="px-3 py-1.5 rounded-xl bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-500/50 hover:border-cyan-400 text-cyan-300 font-mono text-[10px] uppercase font-bold transition-all cursor-pointer flex items-center gap-1.5"
                    >
                      <Building2 className="w-3 h-3 text-cyan-400" />
                      <span>Central Banks</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        window.dispatchEvent(new CustomEvent('OPEN_SADC_CORRIDORS'));
                      }}
                      className="px-3 py-1.5 rounded-xl bg-purple-500/20 hover:bg-purple-500/30 border border-purple-500/50 hover:border-purple-400 text-purple-300 font-mono text-[10px] uppercase font-bold transition-all cursor-pointer flex items-center gap-1.5"
                    >
                      <span>🚛</span>
                      <span>SADC Corridors</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        window.dispatchEvent(new CustomEvent('OPEN_KWACHA_AMPLIFIER'));
                      }}
                      className="px-3 py-1.5 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 border border-amber-500/50 hover:border-amber-400 text-amber-300 font-mono text-[10px] uppercase font-bold transition-all cursor-pointer flex items-center gap-1.5"
                    >
                      <Coins className="w-3 h-3 text-amber-400" />
                      <span>Kwacha Amplifier</span>
                    </button>
                  </div>
                </div>

                {/* 10 Provinces Buttons */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs text-zinc-300 font-bold uppercase">
                    <span className="flex items-center gap-1.5">
                      <Building2 className="w-4 h-4 text-emerald-400" />
                      Zambian Provinces (10)
                    </span>
                    <span className="text-[11px] font-normal text-zinc-400">Click a province to inspect its districts</span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-5 gap-1.5">
                    {ZAMBIA_PROVINCES_LIST.map((prov) => {
                      const isActive = activeZambiaProvince === prov;
                      return (
                        <button
                          key={prov}
                          onClick={() => setActiveZambiaProvince(prov)}
                          className={`p-2 rounded-xl text-xs font-medium text-left transition-all flex items-center justify-between border cursor-pointer ${
                            isActive
                              ? 'bg-emerald-950 border-emerald-500 text-emerald-200 font-bold shadow'
                              : 'bg-zinc-900/70 border-zinc-800 hover:border-zinc-700 text-zinc-300'
                          }`}
                        >
                          <span className="truncate">{prov}</span>
                          {isActive && <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Active Province Districts Container */}
                <div className="p-4 bg-zinc-900/90 border border-zinc-800 rounded-2xl space-y-2.5">
                  <div className="flex items-center justify-between text-xs pb-2 border-b border-zinc-800">
                    <span className="font-bold text-white flex items-center gap-1.5 uppercase">
                      <Landmark className="w-4 h-4 text-cyan-400" />
                      Districts & Municipalities of {activeZambiaProvince} ({zambiaProvinceDistricts.length})
                    </span>
                    <span className="text-[10px] font-mono text-emerald-400">Subnational Level 2</span>
                  </div>

                  {detailedZambiaProvince && (
                    <div className="text-[11px] text-zinc-400 space-y-1 pb-1">
                      <div><strong className="text-zinc-300">Economic Role:</strong> {detailedZambiaProvince.role}</div>
                      <div><strong className="text-zinc-300">Constituent Tribes:</strong> {detailedZambiaProvince.tribes.join(', ')}</div>
                    </div>
                  )}

                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-1.5 max-h-36 overflow-y-auto pr-1 custom-scrollbar">
                    {zambiaProvinceDistricts.map((dist, dIdx) => (
                      <div
                        key={dIdx}
                        className="p-2 bg-zinc-950/80 border border-zinc-800 rounded-xl text-xs text-zinc-300 flex items-center gap-1.5"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                        <span className="truncate">{dist}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              /* OTHER NATIONS: Stop at Sovereign National Level */
              <div className="flex flex-col gap-3 pt-1">
                <div className="p-4 rounded-2xl bg-zinc-900/80 border border-zinc-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-xl bg-zinc-800 text-amber-400 shrink-0 border border-zinc-700">
                      <Globe2 className="w-5 h-5" />
                    </div>
                    <div className="space-y-1">
                      <div className="font-bold text-zinc-100 uppercase tracking-wider flex items-center gap-2">
                        <span>Sovereign Boundary: National Terminal Level</span>
                        <span className="px-2 py-0.5 rounded-md bg-zinc-800 text-zinc-300 font-mono text-[9px]">
                          ISO 3166-1 Sovereign
                        </span>
                      </div>
                      <p className="text-zinc-400 text-[11px] leading-relaxed">
                        Geopolitical data for {selectedCountryName} concludes at the sovereign National level with complete ITU international dialing codes, ISO currency standards, timezones, and national demographics. Deep subnational hierarchy (Level 1 Provinces & Level 2 Districts) is reserved exclusively for the Zambian developer jurisdiction.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
                  <div className="p-3 rounded-xl bg-zinc-900/60 border border-zinc-800 space-y-1">
                    <span className="text-[10px] uppercase text-zinc-400 font-bold block flex items-center gap-1.5">
                      <Phone className="w-3.5 h-3.5 text-emerald-400" />
                      ITU Dialing Standard
                    </span>
                    <span className="text-emerald-400 font-mono font-bold text-base block">
                      {selectedNationFinancials?.dialCode || '+00'}
                    </span>
                    <span className="text-[11px] text-zinc-400 block">
                      International Telephony E.164
                    </span>
                  </div>

                  <div className="p-3 rounded-xl bg-zinc-900/60 border border-zinc-800 space-y-1">
                    <span className="text-[10px] uppercase text-zinc-400 font-bold block flex items-center gap-1.5">
                      <Coins className="w-3.5 h-3.5 text-amber-400" />
                      Currency Standard
                    </span>
                    <span className="text-amber-300 font-mono font-bold text-base block">
                      {selectedNationFinancials?.currencyCode} ({selectedNationFinancials?.currencySymbol || '$'})
                    </span>
                    <span className="text-[11px] text-zinc-400 block truncate">
                      {selectedNationFinancials?.currencyName || 'National Currency'}
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
