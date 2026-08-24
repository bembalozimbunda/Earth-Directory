import React, { useState, useMemo } from 'react';
import { Phone, Globe, X, Search, Coins, Filter, CheckCircle2, Copy, ArrowRightLeft, Clock, MapPin, Check } from 'lucide-react';
import { NATIONS_BY_CONTINENT } from '../data/nations';
import { getNationFinancials } from '../data/nationFinancials';
import { playHarmonicSynthesisTone } from '../utils/frequencyPhysics';

interface ContinentTab {
  id: string;
  label: string;
  sub: string;
  codePrefix: string;
}

const CONTINENT_TABS: ContinentTab[] = [
  { id: 'ALL', label: 'All Continents', sub: '198+ Sovereign Nations', codePrefix: 'All (+1..+998)' },
  { id: 'AFRICA', label: 'Africa', sub: '54 Sovereign Nations', codePrefix: '+20 to +29' },
  { id: 'ASIA', label: 'Asia', sub: '48 Sovereign Nations', codePrefix: '+60 to +98' },
  { id: 'EUROPE', label: 'Europe', sub: '45 Sovereign Nations', codePrefix: '+30 to +49' },
  { id: 'NORTH AMERICA', label: 'North America', sub: '23 Sovereign Nations', codePrefix: '+1 Series' },
  { id: 'SOUTH AMERICA', label: 'South America', sub: '12 Sovereign Nations', codePrefix: '+50 to +59' },
  { id: 'OCEANIA', label: 'Oceania & Pacific', sub: '14 Sovereign Nations', codePrefix: '+61 to +69' },
  { id: 'TERRITORIES', label: 'Territories', sub: '33+ Autonomous Islands', codePrefix: 'Global' }
];

export function SystemCurrencyPortal() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedContinent, setSelectedContinent] = useState<string>('ALL');
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  
  // Quick currency calculator state for travelers
  const [calcBaseAmount, setCalcBaseAmount] = useState<number>(100);
  const [calcBaseCurrency, setCalcBaseCurrency] = useState<'USD' | 'EUR' | 'GBP'>('USD');

  React.useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener('OPEN_SYSTEM_CURRENCY', handleOpen);
    return () => window.removeEventListener('OPEN_SYSTEM_CURRENCY', handleOpen);
  }, []);

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const handleToggle = () => {
    setIsOpen(prev => !prev);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const handlePlayNationTone = (dialCode: string) => {
    if (dialCode.startsWith('+26') || dialCode.startsWith('+2')) {
      playHarmonicSynthesisTone(432, 1.8, 0.18);
    } else if (dialCode.startsWith('+3') || dialCode.startsWith('+4')) {
      playHarmonicSynthesisTone(528, 1.8, 0.18);
    } else if (dialCode.startsWith('+8') || dialCode.startsWith('+9')) {
      playHarmonicSynthesisTone(639, 1.8, 0.18);
    } else if (dialCode.startsWith('+1')) {
      playHarmonicSynthesisTone(741, 1.8, 0.18);
    } else if (dialCode.startsWith('+5')) {
      playHarmonicSynthesisTone(852, 1.8, 0.18);
    } else {
      playHarmonicSynthesisTone(963, 1.8, 0.18);
    }
  };

  // Compile all nations with normalized continent names
  const allNationsWithData = useMemo(() => {
    const list: Array<{
      continentCategory: string;
      rawContinent: string;
      name: string;
      flag: string;
      spokenLanguage: string;
      currencyName: string;
      currencyCode: string;
      currencySymbol: string;
      dialCode: string;
      isoCode: string;
      capital: string;
      timezone: string;
      exchangeRateToUSD: number;
      isTerritory?: boolean;
    }> = [];

    // Helper to map continent keys
    const getNormalizedCategory = (rawKey: string, isTerritory?: boolean): string => {
      if (isTerritory) return 'TERRITORIES';
      if (rawKey === 'ALKEBULAN') return 'AFRICA';
      if (rawKey === 'JAMBUDVIIPA') return 'ASIA';
      if (rawKey === 'PLAKSHADVIIPA') return 'EUROPE';
      if (rawKey === 'KRAUNCADVIIPA') return 'NORTH AMERICA';
      if (rawKey === 'SHALMALIDVIIPA') return 'SOUTH AMERICA';
      return 'OTHER';
    };

    Object.entries(NATIONS_BY_CONTINENT).forEach(([continentKey, nations]) => {
      nations.forEach(nation => {
        const financials = getNationFinancials(nation.name);
        const normCat = getNormalizedCategory(continentKey, nation.isTerritory);

        // Approximate representative exchange rate for calculator
        let rateToUSD = 1.0;
        if (nation.name === 'Zambia' || financials.currencyCode === 'ZMW') rateToUSD = 27.5;
        else if (financials.currencyCode === 'EUR') rateToUSD = 0.92;
        else if (financials.currencyCode === 'GBP') rateToUSD = 0.78;
        else if (financials.currencyCode === 'JPY') rateToUSD = 155.0;
        else if (financials.currencyCode === 'CAD') rateToUSD = 1.38;
        else if (financials.currencyCode === 'AUD') rateToUSD = 1.52;
        else if (financials.currencyCode === 'CNY') rateToUSD = 7.24;
        else if (financials.currencyCode === 'INR') rateToUSD = 83.5;
        else if (financials.currencyCode === 'ZAR') rateToUSD = 18.2;
        else if (financials.currencyCode === 'NGN') rateToUSD = 1500.0;
        else if (financials.currencyCode === 'KES') rateToUSD = 130.0;
        else if (financials.currencyCode === 'EGP') rateToUSD = 48.0;
        else if (financials.currencyCode === 'BRL') rateToUSD = 5.6;

        list.push({
          continentCategory: normCat,
          rawContinent: continentKey,
          name: nation.name,
          flag: nation.flag,
          spokenLanguage: nation.spokenLanguage,
          currencyName: nation.currencyName || financials.currencyName,
          currencyCode: nation.currencyCode || financials.currencyCode,
          currencySymbol: nation.currencySymbol || financials.currencySymbol,
          dialCode: nation.dialCode || financials.dialCode,
          isoCode: financials.isoCode,
          capital: financials.capital || 'National Capital',
          timezone: financials.timeZone || 'Standard Time',
          exchangeRateToUSD: rateToUSD,
          isTerritory: nation.isTerritory
        });
      });
    });

    return list;
  }, []);

  // Filtered nations
  const filteredNations = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    return allNationsWithData.filter(item => {
      const matchContinent = selectedContinent === 'ALL' || item.continentCategory === selectedContinent;
      if (!matchContinent) return false;

      if (!q) return true;

      return (
        item.name.toLowerCase().includes(q) ||
        item.currencyName.toLowerCase().includes(q) ||
        item.currencyCode.toLowerCase().includes(q) ||
        item.dialCode.toLowerCase().includes(q) ||
        item.spokenLanguage.toLowerCase().includes(q) ||
        item.isoCode.toLowerCase().includes(q) ||
        item.capital.toLowerCase().includes(q)
      );
    });
  }, [allNationsWithData, searchQuery, selectedContinent]);

  return (
    <div className="fixed top-3 left-3 sm:top-4 sm:left-4 z-50">
      {/* Top Left Trigger Button (One-Tap Open) */}
      <button
        onClick={handleToggle}
        title="Open Nations Calling Codes & Currencies Directory (198+ Nations)"
        className={`flex items-center gap-2.5 px-3 py-2 rounded-xl transition-all shadow-xl backdrop-blur-md cursor-pointer border ${
          isOpen
            ? 'bg-amber-500 text-black border-amber-400 font-bold shadow-[0_0_25px_rgba(245,158,11,0.5)]'
            : 'bg-zinc-950/90 text-amber-400 hover:text-amber-300 border-amber-500/40 hover:border-amber-400/80 shadow-[0_0_15px_rgba(0,0,0,0.8)]'
        }`}
      >
        <div className="relative flex items-center justify-center">
          <Phone className="w-4 h-4 text-amber-400" />
          <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        </div>
        <div className="flex flex-col text-left">
          <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-wider font-bold text-amber-300">
            NATIONS CALLING CODES
          </span>
          <span className={`text-[8px] font-mono tracking-wider hidden sm:inline ${isOpen ? 'text-black/80' : 'text-zinc-400'}`}>
            & Currencies Matrix (198+)
          </span>
        </div>
      </button>

      {/* Nations Calling Codes & Currencies Modal */}
      {isOpen && (
        <>
          {/* Backdrop Dimmer */}
          <div
            onClick={handleClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-40"
          />

          {/* Modal Container anchored in top-left */}
          <div
            className="fixed top-3 left-3 sm:top-4 sm:left-4 z-50 w-[95vw] max-w-4xl max-h-[90vh] flex flex-col bg-zinc-950/98 backdrop-blur-2xl border border-amber-500/50 rounded-2xl shadow-[0_0_60px_rgba(245,158,11,0.25)] overflow-hidden"
          >
            {/* Header Bar */}
            <div className="p-4 border-b border-zinc-800/80 bg-gradient-to-r from-amber-500/15 via-zinc-900/80 to-zinc-950 flex items-center justify-between gap-3 shrink-0">
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 flex items-center justify-center border border-amber-500/50 shrink-0 text-amber-400">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <h3 className="text-white font-mono text-sm sm:text-base uppercase tracking-wider font-bold truncate">
                      Nations Calling Codes & Currencies Matrix
                    </h3>
                    <span className="px-2 py-0.5 rounded-full bg-emerald-950 border border-emerald-500/40 text-emerald-400 font-mono text-[9px] uppercase tracking-wider font-semibold shrink-0">
                      198+ Nations
                    </span>
                  </div>
                  <p className="text-zinc-400 font-mono text-[10px] sm:text-xs truncate mt-0.5">
                    International Dialing (+1 to +998), Sovereign Currencies, Exchange Values & Capital Cities for Travelers
                  </p>
                </div>
              </div>

              {/* Close Button */}
              <button
                onClick={handleClose}
                title="Close Matrix [Esc]"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900/90 hover:bg-red-950/80 border border-zinc-700/80 hover:border-red-500 text-zinc-300 hover:text-red-300 transition-all cursor-pointer group shrink-0 shadow-sm"
              >
                <X className="w-4 h-4 text-zinc-400 group-hover:text-red-400 group-hover:rotate-90 transition-transform duration-200" />
                <span className="font-mono text-[10px] uppercase tracking-wider font-semibold">
                  Close [✕]
                </span>
              </button>
            </div>

            {/* Travel Quick Calculator Bar */}
            <div className="px-4 py-2.5 bg-zinc-900/60 border-b border-zinc-800/80 flex flex-wrap items-center justify-between gap-3 text-xs font-mono shrink-0">
              <div className="flex items-center gap-2">
                <Coins className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="text-zinc-300 font-semibold">Traveler Quick Currency Reference:</span>
                <div className="flex items-center gap-1 bg-zinc-950 px-2 py-1 rounded border border-zinc-800">
                  <span className="text-zinc-400">Base:</span>
                  <input
                    type="number"
                    value={calcBaseAmount}
                    onChange={(e) => setCalcBaseAmount(Math.max(1, Number(e.target.value)))}
                    className="w-16 bg-transparent text-amber-300 font-bold outline-none text-right"
                  />
                  <select
                    value={calcBaseCurrency}
                    onChange={(e) => setCalcBaseCurrency(e.target.value as any)}
                    className="bg-zinc-900 text-zinc-200 rounded px-1 outline-none text-xs border border-zinc-700"
                  >
                    <option value="USD">USD ($)</option>
                    <option value="EUR">EUR (€)</option>
                    <option value="GBP">GBP (£)</option>
                  </select>
                </div>
              </div>

              <div className="text-[11px] text-zinc-400 flex items-center gap-2">
                <span>International dialing standard:</span>
                <span className="px-2 py-0.5 rounded bg-zinc-950 border border-zinc-800 text-emerald-400 font-bold">
                  +[Calling Code] [Area Code] [Number]
                </span>
              </div>
            </div>

            {/* Search and Continent Filter Bar */}
            <div className="p-4 border-b border-zinc-800/80 bg-zinc-950/90 flex flex-col gap-3 shrink-0">
              {/* Search input */}
              <div className="relative">
                <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search by country, dial code (+1, +44, +260, +81), currency (USD, EUR, ZMW), capital, or language..."
                  className="w-full pl-10 pr-10 py-2.5 bg-zinc-900/90 border border-zinc-700 focus:border-amber-500 rounded-xl text-zinc-200 placeholder-zinc-500 font-mono text-xs outline-none transition-colors"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-white text-xs"
                  >
                    Clear
                  </button>
                )}
              </div>

              {/* Continent Filter Tabs */}
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 custom-scrollbar">
                {CONTINENT_TABS.map(tab => {
                  const isActive = selectedContinent === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setSelectedContinent(tab.id)}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono whitespace-nowrap transition-all cursor-pointer shrink-0 border ${
                        isActive
                          ? 'bg-amber-500 text-black border-amber-400 font-bold shadow-md'
                          : 'bg-zinc-900/80 text-zinc-400 hover:text-zinc-200 border-zinc-800 hover:border-zinc-700'
                      }`}
                    >
                      <span>{tab.label}</span>
                      <span className={`text-[10px] px-1 py-0.2 rounded ${isActive ? 'bg-black/20 text-black' : 'bg-zinc-800 text-zinc-500'}`}>
                        {tab.codePrefix}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Results List */}
            <div className="flex-1 overflow-y-auto p-4 space-y-2.5 custom-scrollbar">
              <div className="text-xs font-mono text-zinc-400 mb-2 flex items-center justify-between">
                <span>Displaying {filteredNations.length} sovereign nations & territories</span>
                <span className="text-[11px] text-zinc-500">Click any calling code to copy</span>
              </div>

              {filteredNations.length === 0 ? (
                <div className="p-12 text-center text-zinc-500 font-mono text-xs">
                  No matching nation, calling code, currency, or capital found for "{searchQuery}".
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {filteredNations.map((item, idx) => {
                    const isCopied = copiedCode === item.dialCode;
                    // Compute travel currency estimation
                    const convertedAmount = (calcBaseAmount * item.exchangeRateToUSD).toLocaleString(undefined, {
                      maximumFractionDigits: 2
                    });

                    return (
                      <div
                        key={`${item.name}-${idx}`}
                        className="p-3.5 bg-zinc-900/50 hover:bg-zinc-900/90 border border-zinc-800/80 hover:border-amber-500/50 rounded-xl transition-all flex flex-col justify-between gap-3 group"
                      >
                        {/* Top: Country Name, Flag & Dial Code */}
                        <div className="flex items-start justify-between gap-2">
                          <div className="flex items-center gap-2.5 min-w-0">
                            <span className="text-2xl shrink-0 select-none">{item.flag}</span>
                            <div className="min-w-0">
                              <h4 className="font-mono font-bold text-zinc-100 text-sm truncate flex items-center gap-1.5">
                                <span>{item.name}</span>
                                {item.isTerritory && (
                                  <span className="text-[9px] px-1 py-0.2 rounded bg-blue-950 border border-blue-800 text-blue-300 font-normal">
                                    Territory
                                  </span>
                                )}
                              </h4>
                              <span className="text-zinc-400 font-mono text-[10px] flex items-center gap-1">
                                <MapPin className="w-3 h-3 text-zinc-500" />
                                {item.capital} • {item.timezone}
                              </span>
                            </div>
                          </div>

                          {/* Dial Code Button with Copy */}
                          <button
                            onClick={() => handleCopy(item.dialCode)}
                            title={`Copy calling code ${item.dialCode} for ${item.name}`}
                            className={`flex items-center gap-1 px-2.5 py-1 rounded-lg font-mono text-xs font-bold transition-all cursor-pointer shrink-0 border ${
                              isCopied
                                ? 'bg-emerald-500 text-black border-emerald-400 shadow-md'
                                : 'bg-emerald-950/80 hover:bg-emerald-900 text-emerald-300 border-emerald-700/60'
                            }`}
                          >
                            {isCopied ? <Check className="w-3.5 h-3.5" /> : <Phone className="w-3 h-3" />}
                            <span>{item.dialCode}</span>
                          </button>
                        </div>

                        {/* Middle: Currency & Financial Specifications */}
                        <div className="grid grid-cols-2 gap-2 pt-2 border-t border-zinc-800/60 text-xs font-mono">
                          <div className="bg-zinc-950/70 p-2 rounded-lg border border-zinc-800/50">
                            <span className="text-zinc-500 text-[9px] uppercase tracking-wider block">Sovereign Currency</span>
                            <span className="text-amber-300 font-bold flex items-center gap-1 mt-0.5">
                              <span>{item.currencyCode}</span>
                              <span className="text-zinc-400 font-normal">({item.currencySymbol})</span>
                            </span>
                            <span className="text-zinc-400 text-[10px] block truncate">{item.currencyName}</span>
                          </div>

                          <div className="bg-zinc-950/70 p-2 rounded-lg border border-zinc-800/50">
                            <span className="text-zinc-500 text-[9px] uppercase tracking-wider block">Travel Valuation</span>
                            <span className="text-zinc-200 font-bold mt-0.5 block">
                              ≈ {convertedAmount} {item.currencyCode}
                            </span>
                            <span className="text-zinc-500 text-[9px] block">For {calcBaseAmount} {calcBaseCurrency}</span>
                          </div>
                        </div>

                        {/* Bottom: Spoken Languages & Audio Frequency */}
                        <div className="flex items-center justify-between gap-2 text-[10px] font-mono text-zinc-400 pt-1">
                          <span className="truncate">
                            <strong className="text-zinc-300">Language:</strong> {item.spokenLanguage}
                          </span>
                          <button
                            onClick={() => handlePlayNationTone(item.dialCode)}
                            title="Play harmonic tone resonance"
                            className="px-2 py-0.5 rounded bg-zinc-800 hover:bg-zinc-700 text-zinc-300 text-[9px] shrink-0 cursor-pointer"
                          >
                            Tone ♬
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Footer Summary */}
            <div className="p-3 bg-zinc-950 border-t border-zinc-800 flex items-center justify-between text-[11px] font-mono text-zinc-400 shrink-0">
              <span>Universal Earth Directory • Global Calling Codes & Currencies Matrix</span>
              <span className="text-amber-400">All 7 Continents Synchronized</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
