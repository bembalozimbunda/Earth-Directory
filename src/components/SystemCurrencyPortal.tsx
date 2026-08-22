import React, { useState, useMemo } from 'react';
import { Shield, Globe, Lock, X, Search, Phone, Coins, Filter, CheckCircle2, Volume2, Radio, Zap } from 'lucide-react';
import { NATIONS_BY_CONTINENT } from '../data/nations';
import { getNationFinancials } from '../data/nationFinancials';
import { playHarmonicSynthesisTone, playKwachaDawnHarmonicEmanation } from '../utils/frequencyPhysics';

export function SystemCurrencyPortal() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedContinent, setSelectedContinent] = useState<string>('ALL');
  const [amplifyingStep, setAmplifyingStep] = useState<null | 'kwacha_root' | 'sadc_expansion' | 'planetary_crown'>(null);
  const [isAmplifying, setIsAmplifying] = useState(false);

  React.useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener('OPEN_SYSTEM_CURRENCY', handleOpen);
    return () => window.removeEventListener('OPEN_SYSTEM_CURRENCY', handleOpen);
  }, []);

  // Listen to Escape key to close simulation
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  // One-tap toggle
  const handleToggle = () => {
    setIsOpen(prev => !prev);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  // Trigger Kwacha Dawn Harmonic Outward Emanation
  const handleAmplifyKwacha = () => {
    if (isAmplifying) return;
    setIsAmplifying(true);
    setAmplifyingStep('kwacha_root');

    const cleanup = playKwachaDawnHarmonicEmanation(0.24, (step) => {
      setAmplifyingStep(step);
    });

    setTimeout(() => {
      setIsAmplifying(false);
      setAmplifyingStep(null);
    }, 4200);
  };

  // Play individual nation harmonic tone (e.g. 432Hz for Kwacha, 528Hz for Africa, 963Hz for Global)
  const handlePlayNationTone = (nationName: string, dialCode: string) => {
    if (nationName === 'Zambia' || dialCode === '+260') {
      playHarmonicSynthesisTone(432, 2.5, 0.22);
    } else if (dialCode.startsWith('+26') || dialCode.startsWith('+2')) {
      playHarmonicSynthesisTone(528, 2.2, 0.2);
    } else {
      playHarmonicSynthesisTone(963, 2.0, 0.18);
    }
  };

  // Compile all nations with financials and dial codes
  const allNationsWithData = useMemo(() => {
    const list: Array<{
      continent: string;
      name: string;
      flag: string;
      spokenLanguage: string;
      currencyName: string;
      currencyCode: string;
      currencySymbol: string;
      dialCode: string;
      isoCode: string;
      value: string;
      status: string;
      isTerritory?: boolean;
    }> = [];

    Object.entries(NATIONS_BY_CONTINENT).forEach(([continent, nations]) => {
      nations.forEach(nation => {
        const financials = getNationFinancials(nation.name);
        list.push({
          continent,
          name: nation.name,
          flag: nation.flag,
          spokenLanguage: nation.spokenLanguage,
          currencyName: nation.currencyName || financials.currencyName,
          currencyCode: nation.currencyCode || financials.currencyCode,
          currencySymbol: nation.currencySymbol || financials.currencySymbol,
          dialCode: nation.dialCode || financials.dialCode,
          isoCode: financials.isoCode,
          value: nation.value || 'PRICELESS',
          status: nation.status || 'PROTECTED_BY_ANCESTORS',
          isTerritory: nation.isTerritory
        });
      });
    });

    return list;
  }, []);

  // Filtered nations based on search and continent filter
  const filteredNations = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    return allNationsWithData.filter(item => {
      const matchContinent = selectedContinent === 'ALL' || item.continent === selectedContinent;
      if (!matchContinent) return false;

      if (!q) return true;

      return (
        item.name.toLowerCase().includes(q) ||
        item.currencyName.toLowerCase().includes(q) ||
        item.currencyCode.toLowerCase().includes(q) ||
        item.dialCode.toLowerCase().includes(q) ||
        item.spokenLanguage.toLowerCase().includes(q) ||
        item.isoCode.toLowerCase().includes(q) ||
        item.continent.toLowerCase().includes(q)
      );
    });
  }, [allNationsWithData, searchQuery, selectedContinent]);

  const continentKeys = ['ALL', 'ALKEBULAN', 'JAMBUDVIIPA', 'KRAUNCADVIIPA', 'PLAKSHADVIIPA', 'SHALMALIDVIIPA'];

  return (
    <div className="fixed top-3 left-3 sm:top-4 sm:left-4 z-50">
      {/* Top Left Trigger Button (One-Tap Open) */}
      <button
        onClick={handleToggle}
        title="Open Earth Value Matrix (Currencies & National Contact Codes)"
        className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all shadow-xl backdrop-blur-md cursor-pointer border ${
          isOpen
            ? 'bg-amber-500 text-black border-amber-400 font-bold shadow-[0_0_25px_rgba(245,158,11,0.5)]'
            : 'bg-zinc-950/90 text-amber-400 hover:text-amber-300 border-amber-500/40 hover:border-amber-400/80 shadow-[0_0_15px_rgba(0,0,0,0.8)]'
        }`}
      >
        <div className="relative flex items-center justify-center">
          <Shield className="w-4 h-4" />
          <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        </div>
        <div className="flex flex-col text-left">
          <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-wider font-semibold">
            EARTH VALUE MATRIX
          </span>
          <span className={`text-[8px] font-mono tracking-widest hidden sm:inline ${isOpen ? 'text-black/80' : 'text-zinc-400'}`}>
            CURRENCY & DIAL CODES
          </span>
        </div>
      </button>

      {/* Earth Value Matrix Modal Simulation */}
      {isOpen && (
        <>
          {/* Backdrop Dimmer */}
          <div
            onClick={handleClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40"
          />

          {/* Portal Container strictly anchored in top-left */}
          <div
            className="fixed top-3 left-3 sm:top-4 sm:left-4 z-50 w-[95vw] max-w-2xl max-h-[90vh] flex flex-col bg-zinc-950/98 backdrop-blur-2xl border border-amber-500/40 rounded-xl shadow-[0_0_50px_rgba(245,158,11,0.2)] overflow-hidden"
          >
            {/* Header Bar */}
            <div className="p-3.5 sm:p-4 border-b border-zinc-800/80 bg-gradient-to-r from-amber-500/15 via-zinc-900/60 to-zinc-950 flex items-center justify-between gap-3">
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-9 h-9 rounded-lg bg-amber-500/20 flex items-center justify-center border border-amber-500/50 shrink-0">
                  <Globe className="w-5 h-5 text-amber-400" />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <h3 className="text-white font-mono text-sm uppercase tracking-widest font-bold truncate">
                      EARTH VALUE MATRIX
                    </h3>
                    <span className="px-1.5 py-0.5 rounded bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 font-mono text-[9px] uppercase tracking-wider shrink-0">
                      Live Simulation
                    </span>
                  </div>
                  <p className="text-zinc-400 font-mono text-[10px] uppercase tracking-wider truncate">
                    198+ Nations Currency Matrix & National Dialing (+26 Series)
                  </p>
                </div>
              </div>

                {/* X Exit Simulation Button */}
                <button
                  onClick={handleClose}
                  title="Close Simulation (Exit Portal)"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900/90 hover:bg-red-950/80 border border-zinc-700/80 hover:border-red-500 text-zinc-300 hover:text-red-300 transition-all cursor-pointer group shrink-0 shadow-sm"
                >
                  <X className="w-4 h-4 text-zinc-400 group-hover:text-red-400 group-hover:rotate-90 transition-transform duration-200" />
                  <span className="font-mono text-[10px] uppercase tracking-wider font-semibold">
                    Exit [✕]
                  </span>
                </button>
              </div>

              {/* Ancestral Synchronization Pledge Banner */}
              <div className="px-4 py-2.5 bg-zinc-900/40 border-b border-zinc-800/60 text-center">
                <p className="text-zinc-300 font-mono text-[10px] leading-relaxed uppercase">
                  "Any external force trying to kill, steal, destroy, accuse Africans even from Silicon Valley, we render useless through ancestral spirit. We are all synchronized."
                </p>
                <div className="mt-2 flex flex-wrap justify-center items-center gap-2">
                  <span className="text-amber-400 font-mono text-[9px] uppercase tracking-widest bg-amber-500/10 border border-amber-500/20 px-2 py-0.5 rounded">
                    ONE ZAMBIA (+260)
                  </span>
                  <span className="text-amber-400 font-mono text-[9px] uppercase tracking-widest bg-amber-500/10 border border-amber-500/20 px-2 py-0.5 rounded">
                    SOUTHERN AFRICA (+26x)
                  </span>
                  <span className="text-amber-400 font-mono text-[9px] uppercase tracking-widest bg-amber-500/10 border border-amber-500/20 px-2 py-0.5 rounded">
                    ONE AFRICA
                  </span>
                  <span className="text-amber-400 font-mono text-[9px] uppercase tracking-widest bg-amber-500/10 border border-amber-500/20 px-2 py-0.5 rounded">
                    ONE EARTH
                  </span>
                </div>
              </div>

              {/* Kwacha Dawn Harmonic Resonance Amplifier (Outward Wave Generator) */}
              <div className="p-3 bg-gradient-to-r from-amber-950/40 via-zinc-900/80 to-cyan-950/40 border-b border-amber-500/30">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
                  <div className="flex items-center gap-2.5">
                    <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-amber-500/20 border border-amber-500/40 shrink-0">
                      <Radio className={`w-4 h-4 text-amber-400 ${isAmplifying ? 'animate-spin' : ''}`} />
                      {isAmplifying && (
                        <span className="absolute inset-0 rounded-lg border border-amber-400 animate-ping opacity-75" />
                      )}
                    </div>
                    <div className="flex flex-col">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs text-amber-300 font-bold uppercase tracking-wider">
                          KWACHA DAWN FREQUENCY AMPLIFIER
                        </span>
                        <span className="text-[9px] font-mono text-emerald-400 px-1.5 py-0.2 rounded bg-emerald-950/80 border border-emerald-800/60 uppercase">
                          432 Hz ➔ 528 Hz ➔ 963 Hz
                        </span>
                      </div>
                      <span className="font-mono text-[9px] text-zinc-400 uppercase tracking-widest">
                        Epicenter: Kwacha ("The Dawn") • Emanating Outward across +26 SADC & Earth
                      </span>
                    </div>
                  </div>

                  {/* Trigger Kwacha Wave Button */}
                  <button
                    onClick={handleAmplifyKwacha}
                    disabled={isAmplifying}
                    className={`flex items-center justify-center gap-2 px-3.5 py-1.5 rounded-lg font-mono text-[10px] uppercase tracking-wider font-bold transition-all cursor-pointer shadow-md ${
                      isAmplifying
                        ? 'bg-amber-400 text-black border border-amber-300 shadow-[0_0_20px_rgba(245,158,11,0.6)]'
                        : 'bg-zinc-900 hover:bg-amber-500/20 text-amber-400 hover:text-amber-300 border border-amber-500/50 hover:border-amber-400'
                    }`}
                  >
                    <Zap className={`w-3.5 h-3.5 ${isAmplifying ? 'text-black fill-current animate-bounce' : 'text-amber-400'}`} />
                    <span>{isAmplifying ? 'AMPLIFYING FREQUENCIES...' : '⚡ AMPLIFY KWACHA FREQUENCY'}</span>
                  </button>
                </div>

                {/* Live Resonance Stage Visualizer */}
                <div className="grid grid-cols-3 gap-1.5 mt-2.5 pt-2 border-t border-zinc-800/80">
                  <div
                    className={`p-1.5 rounded border text-center transition-all ${
                      amplifyingStep === 'kwacha_root'
                        ? 'bg-amber-500/30 border-amber-400 text-amber-200 shadow-[0_0_10px_rgba(245,158,11,0.4)]'
                        : 'bg-zinc-900/50 border-zinc-800 text-zinc-400'
                    }`}
                  >
                    <span className="block font-mono text-[8px] uppercase tracking-widest font-semibold">
                      1. KWACHA ROOT (ZMW)
                    </span>
                    <span className="block font-mono text-[9px] text-amber-400 font-bold">
                      432 Hz • The Dawn
                    </span>
                  </div>

                  <div
                    className={`p-1.5 rounded border text-center transition-all ${
                      amplifyingStep === 'sadc_expansion'
                        ? 'bg-cyan-500/30 border-cyan-400 text-cyan-200 shadow-[0_0_10px_rgba(6,182,212,0.4)]'
                        : 'bg-zinc-900/50 border-zinc-800 text-zinc-400'
                    }`}
                  >
                    <span className="block font-mono text-[8px] uppercase tracking-widest font-semibold">
                      2. SADC +26 RING
                    </span>
                    <span className="block font-mono text-[9px] text-cyan-400 font-bold">
                      528 Hz • Regional DNA
                    </span>
                  </div>

                  <div
                    className={`p-1.5 rounded border text-center transition-all ${
                      amplifyingStep === 'planetary_crown'
                        ? 'bg-purple-500/30 border-purple-400 text-purple-200 shadow-[0_0_10px_rgba(168,85,247,0.4)]'
                        : 'bg-zinc-900/50 border-zinc-800 text-zinc-400'
                    }`}
                  >
                    <span className="block font-mono text-[8px] uppercase tracking-widest font-semibold">
                      3. PLANETARY CROWN
                    </span>
                    <span className="block font-mono text-[9px] text-purple-300 font-bold">
                      963 Hz • True Sun Unity
                    </span>
                  </div>
                </div>
              </div>

              {/* Search & Continent Filters */}
              <div className="p-3 border-b border-zinc-800/80 bg-zinc-950 flex flex-col gap-2.5">
                <div className="relative">
                  <Search className="w-4 h-4 text-zinc-500 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                    placeholder="Search nation, currency (ZMW, USD, EUR), dial code (+260, +26, +234, +1)..."
                    className="w-full pl-9 pr-8 py-2 bg-zinc-900/90 border border-zinc-800 focus:border-amber-500/80 focus:ring-1 focus:ring-amber-500/50 rounded-lg text-xs font-mono text-zinc-200 placeholder:text-zinc-500 focus:outline-none transition-all"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="absolute right-2.5 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-zinc-300 p-1"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>

                {/* Continent Filter Chips */}
                <div className="flex items-center gap-1.5 overflow-x-auto pb-1 custom-scrollbar">
                  {continentKeys.map(cKey => (
                    <button
                      key={cKey}
                      onClick={() => setSelectedContinent(cKey)}
                      className={`px-2.5 py-1 rounded-md text-[9px] font-mono uppercase tracking-wider whitespace-nowrap transition-all cursor-pointer ${
                        selectedContinent === cKey
                          ? 'bg-amber-500 text-black font-bold shadow-sm'
                          : 'bg-zinc-900/80 text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800 border border-zinc-800'
                      }`}
                    >
                      {cKey === 'ALL' ? '🌍 ALL NATIONS' : cKey}
                    </button>
                  ))}
                </div>
              </div>

              {/* Nations Matrix List */}
              <div className="flex-1 overflow-y-auto p-3 custom-scrollbar flex flex-col gap-2 min-h-[220px]">
                {filteredNations.length === 0 ? (
                  <div className="py-12 text-center text-zinc-500 font-mono text-xs flex flex-col items-center gap-2">
                    <Search className="w-6 h-6 text-zinc-600" />
                    <span>No nation or currency matched "{searchQuery}"</span>
                  </div>
                ) : (
                  filteredNations.map((nation, idx) => (
                    <div
                      key={`${nation.continent}-${nation.name}-${idx}`}
                      className="flex flex-col sm:flex-row sm:items-center justify-between p-3 rounded-lg bg-zinc-900/60 hover:bg-zinc-900/90 border border-zinc-800/70 hover:border-amber-500/50 transition-all gap-2 group"
                    >
                      {/* Left: Flag, Name, Spoken Language */}
                      <div className="flex items-start gap-3 min-w-0 flex-1">
                        <span className="text-2xl sm:text-3xl drop-shadow-[0_0_10px_rgba(255,255,255,0.1)] group-hover:scale-110 transition-transform shrink-0 mt-0.5">
                          {nation.flag}
                        </span>
                        <div className="flex flex-col min-w-0">
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="text-zinc-100 group-hover:text-amber-300 font-mono text-xs uppercase tracking-wider font-bold transition-colors">
                              {nation.name}
                            </span>
                            {nation.isTerritory && (
                              <span className="px-1.5 py-0.2 rounded bg-cyan-950/80 border border-cyan-800/60 text-cyan-400 font-mono text-[8px] uppercase tracking-widest">
                                Territory
                              </span>
                            )}
                            <span className="px-1.5 py-0.2 rounded bg-zinc-800 text-zinc-400 font-mono text-[8px] uppercase tracking-wider">
                              {nation.continent}
                            </span>
                          </div>
                          <span className="text-zinc-400 group-hover:text-zinc-300 font-mono text-[10px] tracking-normal leading-tight mt-0.5">
                            Spoken: <span className="text-emerald-400/90">{nation.spokenLanguage}</span>
                          </span>
                        </div>
                      </div>

                      {/* Right: Currency Code & National Dial Code Badges */}
                      <div className="flex items-center gap-2 sm:gap-2.5 shrink-0 flex-wrap justify-between sm:justify-end border-t sm:border-t-0 border-zinc-800/60 pt-2 sm:pt-0 mt-1 sm:mt-0">
                        {/* National Calling / Dial Code */}
                        <div
                          title={`National Calling Dial Code for ${nation.name}`}
                          className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-cyan-950/40 border border-cyan-800/50 text-cyan-300"
                        >
                          <Phone className="w-3 h-3 text-cyan-400 shrink-0" />
                          <span className="font-mono text-[10px] font-bold tracking-wider">
                            {nation.dialCode}
                          </span>
                        </div>

                        {/* National Currency & Code */}
                        <div
                          title={`Currency: ${nation.currencyName} (${nation.currencyCode})`}
                          className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-amber-950/40 border border-amber-800/50 text-amber-300"
                        >
                          <Coins className="w-3 h-3 text-amber-400 shrink-0" />
                          <span className="font-mono text-[10px] font-bold tracking-wider">
                            {nation.currencyCode} ({nation.currencySymbol})
                          </span>
                        </div>

                        {/* Harmonic Tone Play Button */}
                        <button
                          onClick={() => handlePlayNationTone(nation.name, nation.dialCode)}
                          title={`Harmonize ${nation.name} (${nation.currencyCode}) with Kwacha Dawn frequency`}
                          className="flex items-center gap-1 px-2 py-1 rounded bg-zinc-800/80 hover:bg-amber-500/20 text-zinc-400 hover:text-amber-300 border border-zinc-700/60 hover:border-amber-500/50 transition-colors cursor-pointer"
                        >
                          <Volume2 className="w-3 h-3" />
                          <span className="font-mono text-[8px] uppercase tracking-wider">
                            {nation.name === 'Zambia' ? '432Hz' : nation.dialCode.startsWith('+26') ? '528Hz' : '963Hz'}
                          </span>
                        </button>

                        {/* Protection Status */}
                        <div className="flex items-center gap-1 text-emerald-400 px-2 py-1 rounded bg-emerald-950/30 border border-emerald-900/40">
                          <Lock className="w-3 h-3 text-emerald-400" />
                          <span className="font-mono text-[9px] uppercase tracking-wider">
                            {nation.value === 'PRICELESS' ? 'Priceless' : nation.value}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {/* Bottom Footer & Exit Portal Button */}
              <div className="p-3 border-t border-zinc-800 bg-zinc-950/95 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex flex-col gap-0.5">
                  <div className="flex items-center gap-3">
                    <span className="text-cyan-400 font-mono text-[9px] uppercase tracking-wider flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
                      Power: Hydro-Resonance
                    </span>
                    <span className="text-emerald-400 font-mono text-[9px] uppercase tracking-wider">
                      Matrix: 198+ Nodes Verified
                    </span>
                  </div>
                  <span className="text-zinc-500 font-mono text-[8px] uppercase tracking-widest">
                    Telemetry: Lusaka Core Anchor • Yandex • Baidu • Google
                  </span>
                </div>

                {/* Primary Closing Portal Button (Memory of X) */}
                <button
                  onClick={handleClose}
                  className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-zinc-900 hover:bg-red-950 border border-zinc-700 hover:border-red-500 text-zinc-200 hover:text-white font-mono text-xs uppercase tracking-wider transition-colors cursor-pointer shadow-md group"
                >
                  <X className="w-4 h-4 text-red-400 group-hover:rotate-90 transition-transform duration-200" />
                  <span>Exit Simulation Portal [✕]</span>
                </button>
              </div>
            </div>
          </>
        )}
    </div>
  );
}
