import React, { useState } from 'react';
import { X, Globe2, Users, Crown, Clock, Database, Map, ArrowLeft, LayoutGrid, Volume2, Phone, Coins } from 'lucide-react';
import { ContinentData } from '../data/continents';
import { NATIONS_BY_CONTINENT } from '../data/nations';
import { africanProvinces } from '../provinces';
import { africanFlags } from '../flags';
import { getNationFinancials } from '../data/nationFinancials';
import { NetworkCanvas } from './NetworkCanvas';
import { ZambiaVision } from './ZambiaVision';
import { ZambiaGatekeeper } from './ZambiaGatekeeper';

const GLOBAL_FLAG_MAP: Record<string, string> = {
  ...africanFlags,
  // Antarctica
  "Antarctic Treaty System": "🇦🇶",
  "Research Stations": "🇦🇶",
  "Ross Dependency": "🇦🇶",
  "Adélie Land": "🇦🇶",
  "British Antarctic Territory": "🇦🇶",
  "Queen Maud Land": "🇦🇶",
  "Australian Antarctic Territory": "🇦🇶",
  // Non-Sovereign Territories
  "American Samoa": "🇦🇸",
  "Anguilla": "🇦🇮",
  "Aruba": "🇦🇼",
  "Bermuda": "🇧🇲",
  "Bonaire, Sint Eustatius and Saba": "🇧🇶",
  "British Virgin Islands": "🇻🇬",
  "Cayman Islands": "🇰🇾",
  "Cook Islands": "🇨🇰",
  "Curaçao": "🇨🇼",
  "Falkland Islands": "🇫🇰",
  "Faroe Islands": "🇫🇴",
  "French Polynesia": "🇵🇫",
  "Gibraltar": "🇬🇮",
  "Greenland": "🇬🇱",
  "Guam": "🇬🇺",
  "Guernsey": "🇬🇬",
  "Hong Kong": "🇭🇰",
  "Isle of Man": "🇮🇲",
  "Jersey": "🇯🇪",
  "Macau": "🇲🇴",
  "Montserrat": "🇲🇸",
  "New Caledonia": "🇳🇨",
  "Niue": "🇳🇺",
  "Northern Mariana Islands": "🇲🇵",
  "Puerto Rico": "🇵🇷",
  "Saint Helena, Ascension and Tristan da Cunha": "🇸🇭",
  "Saint Pierre and Miquelon": "🇵🇲",
  "Sint Maarten": "🇸🇽",
  "Svalbard and Jan Mayen": "🇸🇯",
  "Tokelau": "🇹🇰",
  "Turks and Caicos Islands": "🇹🇨",
  "Wallis and Futuna": "🇼🇫",
  "Åland Islands": "🇦🇽"
};

const GLOBAL_LANGUAGE_MAP: Record<string, string> = {};

// Index all nations and their spoken languages from NATIONS_BY_CONTINENT
Object.values(NATIONS_BY_CONTINENT).forEach(list => {
  list.forEach((n: any) => {
    if (n.name) {
      if (n.flag) {
        GLOBAL_FLAG_MAP[n.name] = n.flag;
        GLOBAL_FLAG_MAP[n.name.replace('&', 'and')] = n.flag;
        GLOBAL_FLAG_MAP[n.name.replace('and', '&')] = n.flag;
      }
      if (n.spokenLanguage) {
        GLOBAL_LANGUAGE_MAP[n.name] = n.spokenLanguage;
        GLOBAL_LANGUAGE_MAP[n.name.replace('&', 'and')] = n.spokenLanguage;
        GLOBAL_LANGUAGE_MAP[n.name.replace('and', '&')] = n.spokenLanguage;
      }
    }
  });
});

export function ContinentDoor({ continent, onClose }: { continent: ContinentData, onClose: () => void }) {
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  
  const displayNations = (continent.countries || []).map(countryName => {
    const flag = GLOBAL_FLAG_MAP[countryName] || 
                 GLOBAL_FLAG_MAP[countryName.replace('&', 'and')] || 
                 GLOBAL_FLAG_MAP[countryName.replace('and', '&')] || 
                 null;
    const spokenLanguage = GLOBAL_LANGUAGE_MAP[countryName] || 
                           GLOBAL_LANGUAGE_MAP[countryName.replace('&', 'and')] || 
                           GLOBAL_LANGUAGE_MAP[countryName.replace('and', '&')] || 
                           'Indigenous Spoken Tongue';
    const financials = getNationFinancials(countryName);
    return { 
      name: countryName, 
      flag, 
      spokenLanguage,
      dialCode: financials.dialCode,
      currencyCode: financials.currencyCode,
      currencyName: financials.currencyName,
      currencySymbol: financials.currencySymbol
    };
  });


  const getProvinces = (countryName: string) => {
    return africanProvinces[countryName] || [];
  };

  return (
    <div
      className="absolute inset-0 z-[100] flex items-start justify-center pt-16 md:pt-24 pb-16 bg-zinc-950/95 backdrop-blur-md p-4 md:p-12 overflow-y-auto"
    >
      <div 
        className="w-full max-w-4xl bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 md:p-10 relative shadow-[0_0_50px_rgba(245,158,11,0.05)] min-h-[600px] flex flex-col"
      >
        <button 
          onClick={onClose}
          className="fixed top-4 right-4 md:top-8 md:right-8 p-2 text-zinc-500 hover:text-white bg-zinc-900 border border-zinc-800 hover:border-zinc-600 rounded transition-colors z-[9999] cursor-pointer pointer-events-auto"
        >
          <X className="w-5 h-5" />
        </button>

        {!selectedCountry ? (
          <div 
            key="continent-view"
            className="flex flex-col md:flex-row gap-8 flex-1 relative"
          >
              <NetworkCanvas count={Math.max(30, displayNations.length * 3)} color="amber" />
              {/* Main Info Column */}
              <div className="flex-1 flex flex-col gap-6 relative z-10">
                <div className="flex flex-col gap-2 border-b border-zinc-800/50 pb-6">
                  <span className="text-amber-500/80 font-mono text-sm tracking-[0.3em] uppercase">
                    Geographical Synchronization
                  </span>
                  <h2 className="text-4xl font-light text-white tracking-widest uppercase">
                    {continent.name}
                  </h2>
                  <span className="text-zinc-400 font-mono tracking-widest uppercase text-sm">
                    Root: {continent.sub}
                  </span>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3 p-4 bg-zinc-950/50 border border-zinc-800/50 rounded-lg">
                    <Globe2 className="w-5 h-5 text-indigo-400 mt-0.5" />
                    <div className="flex flex-col gap-1">
                      <span className="text-zinc-500 text-[10px] uppercase tracking-widest">Identity Flag</span>
                      <span className="text-zinc-200 font-mono font-semibold">{displayNations.length} Flags</span>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-4 bg-zinc-950/50 border border-zinc-800/50 rounded-lg">
                    <Users className="w-5 h-5 text-emerald-400 mt-0.5" />
                    <div className="flex flex-col gap-1">
                      <span className="text-zinc-500 text-[10px] uppercase tracking-widest">Population</span>
                      <span className="text-zinc-200 font-mono">{continent.population}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-4 bg-zinc-950/50 border border-zinc-800/50 rounded-lg">
                    <Crown className="w-5 h-5 text-amber-400 mt-0.5" />
                    <div className="flex flex-col gap-1">
                      <span className="text-zinc-500 text-[10px] uppercase tracking-widest">Leadership Structure</span>
                      <div className="flex flex-col gap-0.5">
                        {continent.leaders.map((leader, i) => (
                          <span key={i} className="text-zinc-200 text-sm">{leader}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-4 bg-zinc-950/50 border border-zinc-800/50 rounded-lg">
                    <Clock className="w-5 h-5 text-blue-400 mt-0.5" />
                    <div className="flex flex-col gap-1">
                      <span className="text-zinc-500 text-[10px] uppercase tracking-widest">Temporal Zone</span>
                      <span className="text-zinc-200 font-mono">{continent.time}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-4 bg-zinc-950/50 border border-zinc-800/50 rounded-lg md:col-span-2">
                    <Database className="w-5 h-5 text-red-400 mt-0.5" />
                    <div className="flex flex-col gap-1">
                      <span className="text-zinc-500 text-[10px] uppercase tracking-widest">National Registration (NRC)</span>
                      <span className="text-zinc-200 font-mono">{continent.nrcData}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Countries Column */}
              <div className="flex-1 flex flex-col gap-4 bg-zinc-950/80 p-6 rounded-lg border border-zinc-800/50 overflow-hidden relative z-10">
                <div className="flex items-center gap-2 mb-2">
                  <Map className="w-4 h-4 text-amber-500" />
                  <h3 className="text-amber-500 font-mono text-sm tracking-[0.2em] uppercase">
                    Geographic Nodes ({displayNations.length})
                  </h3>
                </div>
                
                <div className="flex-1 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-zinc-800 scrollbar-track-transparent">
                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                     {displayNations.map((nation, i) => (
                       <button
                          key={i}
                          onClick={() => setSelectedCountry(nation.name)}
                         className="flex items-start gap-3 p-3 bg-zinc-900/60 border border-zinc-800/60 hover:border-amber-500/60 hover:bg-zinc-800/80 rounded-md transition-all text-left group"
                       >
                         {nation.flag ? (
                           <span className="text-xl md:text-2xl drop-shadow-[0_0_8px_rgba(255,255,255,0.1)] group-hover:scale-110 transition-transform mt-0.5 shrink-0">{nation.flag}</span>
                         ) : (
                           <div className="w-1.5 h-1.5 rounded-full bg-amber-500/50 group-hover:bg-amber-400 transition-colors mt-2 shrink-0" />
                         )}
                         <div className="flex flex-col min-w-0 flex-1">
                           <div className="flex items-center justify-between gap-1">
                             <span className="text-zinc-200 group-hover:text-amber-300 font-mono text-xs tracking-wider uppercase font-semibold transition-colors truncate">
                               {nation.name}
                             </span>
                             <span className="text-cyan-400 font-mono text-[9px] font-bold shrink-0">
                               {nation.dialCode}
                             </span>
                           </div>
                           <span className="text-zinc-400 group-hover:text-zinc-300 font-mono text-[10px] tracking-normal leading-tight mt-0.5 line-clamp-1">
                             {nation.spokenLanguage}
                           </span>
                           <div className="flex items-center gap-1.5 mt-1 text-[9px] font-mono text-amber-400/90">
                             <Coins className="w-2.5 h-2.5 text-amber-400" />
                             <span>{nation.currencyCode} ({nation.currencySymbol})</span>
                           </div>
                         </div>
                       </button>
                     ))}
                   </div>
                </div>
              </div>
            </div>
          ) : (
            <div
              key="country-view"
              className="flex flex-col h-full flex-1 relative"
            >
              <NetworkCanvas count={Math.max(20, getProvinces(selectedCountry).length * 8)} color="emerald" />
              <div className="flex items-center gap-4 mb-8 border-b border-zinc-800/50 pb-6 relative z-10">
                <button 
                  onClick={() => setSelectedCountry(null)}
                  className="p-2 text-zinc-500 hover:text-amber-500 bg-zinc-900 border border-zinc-800 hover:border-amber-500/50 rounded transition-colors cursor-pointer"
                >
                  <ArrowLeft className="w-5 h-5" />
                </button>
                <div className="flex flex-col">
                  <span className="text-amber-500/80 font-mono text-xs tracking-[0.3em] uppercase">
                    {continent.name} / Sovereign Node
                  </span>
                  <h2 className="text-3xl font-light text-white tracking-widest uppercase mt-1">
                    {selectedCountry}
                  </h2>
                  <div className="flex flex-wrap items-center gap-3 mt-1.5 font-mono text-xs">
                    {GLOBAL_LANGUAGE_MAP[selectedCountry] && (
                      <span className="text-emerald-400 flex items-center gap-1.5">
                        <Volume2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>Spoken: {GLOBAL_LANGUAGE_MAP[selectedCountry]}</span>
                      </span>
                    )}
                    <span className="text-cyan-400 flex items-center gap-1">
                      <Phone className="w-3 h-3" />
                      <span>{getNationFinancials(selectedCountry).dialCode}</span>
                    </span>
                    <span className="text-amber-400 flex items-center gap-1">
                      <Coins className="w-3 h-3" />
                      <span>{getNationFinancials(selectedCountry).currencyName} ({getNationFinancials(selectedCountry).currencyCode})</span>
                    </span>
                  </div>
                </div>
              </div>

              {selectedCountry === 'Zambia' ? (
                <ZambiaVision />
              ) : (
                <div className="flex-1 flex flex-col items-center justify-center gap-6 bg-zinc-950/80 p-8 rounded-lg border border-zinc-800/50 overflow-hidden relative z-10 text-center">
                  <Globe2 className="w-16 h-16 text-amber-500/20 mb-2" />
                  <h3 className="text-amber-500 font-mono text-lg tracking-[0.3em] uppercase">
                    Direct Sovereign Matrix
                  </h3>
                  <p className="text-zinc-300 font-mono text-xs tracking-[0.15em] uppercase leading-relaxed max-w-md">
                    Direct node synchronization active. Spoken Language: {GLOBAL_LANGUAGE_MAP[selectedCountry] || 'Indigenous'}. Currency: {getNationFinancials(selectedCountry).currencyName} ({getNationFinancials(selectedCountry).currencyCode}).
                  </p>
                  <button
                    onClick={() => setSelectedCountry('Zambia')}
                    className="px-4 py-2 bg-emerald-500/20 border border-emerald-500/50 hover:bg-emerald-500/30 text-emerald-300 rounded font-mono text-xs uppercase tracking-widest transition-colors cursor-pointer"
                  >
                    Open Zambia Root Hub
                  </button>
                </div>
              )}
            </div>
          )}
      </div>
    </div>
  );
}
