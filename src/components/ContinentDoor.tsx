import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Globe2, Users, Crown, Clock, Database, Map, ArrowLeft, LayoutGrid } from 'lucide-react';
import { ContinentData } from '../data/continents';
import { NATIONS_BY_CONTINENT } from '../data/nations';
import { africanProvinces } from '../provinces';
import { NetworkCanvas } from './NetworkCanvas';
import { ZambiaVision } from './ZambiaVision';
import { ZambiaGatekeeper } from './ZambiaGatekeeper';

const getContinentKey = (name: string): keyof typeof NATIONS_BY_CONTINENT | null => {
  if (name === 'Africa') return 'ALKEBULAN';
  if (name === 'Asia') return 'JAMBUDVIIPA';
  if (name === 'Europe') return 'KRAUNCADVIIPA';
  if (name === 'North America' || name === 'South America') return 'PLAKSHADVIIPA';
  if (name === 'Oceania') return 'SHALMALIDVIIPA';
  return null;
};

export function ContinentDoor({ continent, onClose }: { continent: ContinentData, onClose: () => void }) {
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  
  const continentKey = getContinentKey(continent.name);
  const displayNations = continentKey 
    ? NATIONS_BY_CONTINENT[continentKey] 
    : continent.countries?.map(c => ({ name: c, flag: null })) || [];


  const getProvinces = (countryName: string) => {
    return africanProvinces[countryName] || [];
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute inset-0 z-[100] flex items-start justify-center pt-16 md:pt-24 pb-16  bg-zinc-950/95 backdrop-blur-md p-4 md:p-12 overflow-y-auto"
    >
      <motion.div 
        initial={{ scale: 0.95, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.95, y: -20 }}
        className="w-full max-w-4xl bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 md:p-10 relative shadow-[0_0_50px_rgba(245,158,11,0.05)] min-h-[600px] flex flex-col"
      >
        <button 
          onClick={onClose}
          className="fixed top-4 right-4 md:top-8 md:right-8 p-2 text-zinc-500 hover:text-white bg-zinc-900 border border-zinc-800 hover:border-zinc-600 rounded transition-colors z-[9999] cursor-pointer pointer-events-auto"
        >
          <X className="w-5 h-5" />
        </button>

        <AnimatePresence mode="wait">
          {!selectedCountry ? (
            <motion.div 
              key="continent-view"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
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
                      <span className="text-zinc-200 font-mono">{continent.flag}</span>
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
                         className="flex items-center gap-3 p-3 bg-zinc-900/50 border border-zinc-800/50 hover:border-amber-500/50 hover:bg-zinc-800/50 rounded-md transition-all text-left group"
                       >
                         {nation.flag ? (
                           <span className="text-lg md:text-xl drop-shadow-[0_0_8px_rgba(255,255,255,0.1)] group-hover:scale-110 transition-transform">{nation.flag}</span>
                         ) : (
                           <div className="w-1.5 h-1.5 rounded-full bg-amber-500/50 group-hover:bg-amber-400 transition-colors" />
                         )}
                         <span className="text-zinc-300 group-hover:text-amber-100 font-mono text-[10px] md:text-xs tracking-wider uppercase transition-colors">{nation.name}</span>
                       </button>
                     ))}
                   </div>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="country-view"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="flex flex-col h-full flex-1 relative"
            >
              <NetworkCanvas count={Math.max(20, getProvinces(selectedCountry).length * 8)} color="emerald" />
              <div className="flex items-center gap-4 mb-8 border-b border-zinc-800/50 pb-6 relative z-10">
                <button 
                  onClick={() => setSelectedCountry(null)}
                  className="p-2 text-zinc-500 hover:text-amber-500 bg-zinc-900 border border-zinc-800 hover:border-amber-500/50 rounded transition-colors"
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
                </div>
              </div>

              {selectedCountry === 'Zambia' ? (
                <ZambiaGatekeeper />
              ) : (
                <div className="flex-1 flex flex-col items-center justify-center gap-6 bg-zinc-950/80 p-8 rounded-lg border border-zinc-800/50 overflow-hidden relative z-10 text-center">
                  <Globe2 className="w-16 h-16 text-amber-500/20 mb-2" />
                  <h3 className="text-amber-500 font-mono text-lg tracking-[0.3em] uppercase">
                    Under Development
                  </h3>
                  <p className="text-zinc-400 font-mono text-xs tracking-[0.15em] uppercase leading-relaxed max-w-md">
                    Internal provinces bypassed. Each nation seeking to participate in the system must route through the Zambia Root Node.
                  </p>
                  <p className="text-zinc-500 font-mono text-[10px] tracking-widest uppercase leading-relaxed max-w-sm mt-4 p-4 border border-zinc-800 bg-black/50 rounded">
                    Waiting for developers to synchronize and fill localized data securely.
                  </p>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}
