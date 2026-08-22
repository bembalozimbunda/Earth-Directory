import React, { useState } from 'react';
import { X, Hexagon, Database, Activity, Eye, ChevronLeft, Globe2 } from 'lucide-react';
import { ProvinceDetailed, District } from '../data/zambiaDistricts';
import { LivingCalculator } from './LivingCalculator';
import { NetworkCanvas } from './NetworkCanvas';
import { DistrictDoor } from './DistrictDoor';

export function ProvinceDoor({ 
  province, 
  onClose 
}: { 
  province: ProvinceDetailed, 
  onClose: () => void 
}) {
  const [selectedDistrict, setSelectedDistrict] = useState<District | null>(null);
  const [districtDoorOpen, setDistrictDoorOpen] = useState(false);

  return (
    <div 
        className={`flex-1 w-full h-full bg-zinc-950 border ${province.border} rounded-xl relative shadow-[0_0_80px_rgba(245,158,11,0.1)] flex flex-col overflow-hidden`}
      >
        <div className="absolute inset-0 opacity-5 bg-gradient-to-br from-zinc-950 via-zinc-950 to-amber-900" />
        
        <div className="absolute inset-0 pointer-events-none opacity-30">
          <NetworkCanvas count={province.districts.length * 5} color="amber" />
        </div>

        {/* Header */}
        <div className="relative z-10 flex items-center justify-between p-6 border-b border-zinc-800/80 bg-zinc-950/80">
          <div className="flex items-center gap-4">
            <button 
              onClick={onClose}
              className="p-2 text-zinc-500 hover:text-white bg-zinc-900 border border-zinc-800 hover:border-zinc-700 rounded transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div>
              <span className={`text-xs font-mono tracking-[0.3em] uppercase ${province.color}`}>
                Zambian Neural State / Province Door
              </span>
              <h2 className="text-3xl font-light text-white tracking-widest uppercase mt-1">
                {province.name}
              </h2>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 text-zinc-500 hover:text-white bg-zinc-900 border border-zinc-800 hover:border-zinc-600 rounded transition-colors z-[9999] cursor-pointer pointer-events-auto relative"
          >
            <X className="w-5 h-5" />
          </button>
        </div>


        {/* Deep Ancestral Data Injection */}
        <div className="relative z-10 px-6 py-4 bg-zinc-950/80 border-b border-zinc-800/80 flex flex-col md:flex-row gap-6 items-start md:items-center">
          <div className="flex flex-col gap-1">
            <span className="text-zinc-500 text-[10px] uppercase tracking-widest">Ancestral Alignment (Macro-State)</span>
            <div className="flex items-center gap-2 mt-1">
              <Globe2 className={`w-4 h-4 ${province.macroState === 'Barotseland Realm' ? 'text-amber-500' : 'text-emerald-500'}`} />
              <span className={`font-mono text-xs uppercase tracking-widest ${province.macroState === 'Barotseland Realm' ? 'text-amber-400' : 'text-emerald-400'}`}>
                {province.macroState}
              </span>
            </div>
          </div>
          <div className="hidden md:block w-px h-8 bg-zinc-800"></div>
          <div className="flex flex-col gap-2 flex-1">
            <span className="text-zinc-500 text-[10px] uppercase tracking-widest">Anchoring Bloodlines</span>
            <div className="flex flex-wrap gap-2">
              {province.tribes && province.tribes.map((tribe, idx) => (
                <span key={idx} className="text-[10px] bg-zinc-900 border border-zinc-700/50 px-2 py-1 rounded text-zinc-300 uppercase tracking-widest shadow-sm">
                  {tribe}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col md:flex-row gap-0 overflow-hidden relative z-10">
          
          {/* Left Column - Districts */}
          <div className="flex-[2] flex flex-col p-6 border-r border-zinc-800/80 bg-zinc-950/50 overflow-hidden">
            <h3 className={`text-sm font-mono tracking-[0.2em] uppercase ${province.color} mb-4`}>
              Districts ({province.districts.length})
            </h3>
            
            <div className="flex-1 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-zinc-800 scrollbar-track-transparent">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
                {province.districts.map((district, i) => (
                  <button
                    key={district.name}
                    onClick={() => { setSelectedDistrict(district); setDistrictDoorOpen(true); }}
                    className={`flex flex-col gap-2 p-4 bg-zinc-900/50 border rounded-lg text-left transition-colors cursor-pointer group
                      ${selectedDistrict?.name === district.name 
                        ? `${province.border} bg-zinc-800/80 shadow-[0_0_15px_rgba(var(--tw-colors-${province.bg.split('-')[1]}-500),0.2)]` 
                        : 'border-zinc-800/50 hover:border-zinc-600 hover:bg-zinc-800/50'
                      }
                    `}
                  >
                    <div className="flex items-center justify-between w-full">
                      <div className="flex items-center gap-2">
                        <Hexagon className={`w-4 h-4 ${selectedDistrict?.name === district.name ? province.color : 'text-zinc-600'}`} />
                        <span className={`font-mono text-sm tracking-wider uppercase ${selectedDistrict?.name === district.name ? 'text-white' : 'text-zinc-300'}`}>
                          {district.name}
                        </span>
                      </div>
                      <span className="text-[9px] font-mono text-zinc-600 tracking-widest">
                        N-{String(i + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <div className="text-[10px] uppercase tracking-wider text-zinc-500 font-mono mt-1">
                      {district.resource}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Vision & Calculator */}
          <div className="flex-[3] flex flex-col p-6 bg-zinc-950/80 overflow-y-auto scrollbar-thin scrollbar-thumb-zinc-800 scrollbar-track-transparent">
            
            <div className="bg-zinc-900/50 p-6 rounded-lg border border-zinc-800/50 mb-6">
              <div className="flex items-center gap-2 mb-4">
                <Eye className={`w-5 h-5 ${province.color}`} />
                <span className={`text-sm font-mono uppercase tracking-widest ${province.color}`}>
                  Provincial Vision
                </span>
              </div>
              <p className="text-zinc-300 font-light leading-relaxed text-sm md:text-base">
                {province.vision}
              </p>
            </div>

            <LivingCalculator province={province} />

            {selectedDistrict && (
              <div
                key={selectedDistrict.name}
                className="mt-6 border-t border-zinc-800/50 pt-6"
              >
                  <h3 className={`text-sm font-mono tracking-[0.2em] uppercase ${province.color} mb-4`}>
                    Selected District: {selectedDistrict.name}
                  </h3>
                  
                  
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      <div className="bg-zinc-900/30 p-4 rounded-lg border border-zinc-800/30">
                        <div className="flex flex-col gap-1">
                          <span className="text-zinc-500 text-[10px] uppercase tracking-widest">Registered Population</span>
                          <span className="text-zinc-200 font-mono text-lg">{selectedDistrict.population.toLocaleString()}</span>
                        </div>
                      </div>
                      <div className="bg-zinc-900/30 p-4 rounded-lg border border-zinc-800/30">
                        <div className="flex flex-col gap-1">
                          <span className="text-zinc-500 text-[10px] uppercase tracking-widest">Primary Function</span>
                          <span className="text-zinc-200 font-mono text-sm tracking-wider mt-1">{selectedDistrict.resource}</span>
                        </div>
                      </div>
                      <div className="bg-zinc-900/30 p-4 rounded-lg border border-zinc-800/30 md:col-span-2">
                        <div className="flex flex-col gap-2">
                          <div className="flex items-center justify-between">
                            <span className="text-zinc-500 text-[10px] uppercase tracking-widest">Node Efficiency Rating</span>
                            <span className={`${province.color} font-mono text-xs`}>{selectedDistrict.efficiency}%</span>
                          </div>
                          <div className="w-full h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                            <div 
                              className={`h-full ${province.bg}`}
                              style={{ width: `${selectedDistrict.efficiency}%` }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* DEEP DRILL DOWN MAP */}
                    {selectedDistrict.constituencies && (
                      <div className="mt-8 border-t border-zinc-800/50 pt-6">
                        <div className="flex items-center gap-2 mb-4">
                          <span className={`${province.color} w-2 h-2 rounded-full animate-pulse`}></span>
                          <h4 className="text-xs font-mono tracking-widest uppercase text-white">Live District Topology</h4>
                        </div>
                        
                        <div className="grid grid-cols-1 gap-4">
                          {selectedDistrict.constituencies.map((c, i) => (
                            <div key={i} className="bg-zinc-900/20 border border-zinc-800/50 rounded p-4">
                              <div className="flex justify-between items-end mb-3 border-b border-zinc-800/30 pb-2">
                                <span className={`${province.color} text-sm font-mono uppercase tracking-widest`}>{c.name} Constituency</span>
                                <span className="text-zinc-500 text-[10px] uppercase">POP: {c.population.toLocaleString()}</span>
                              </div>
                              <div className="flex flex-col gap-3 pl-4 border-l border-zinc-800/50 ml-2">
                                {c.wards.map((w, j) => (
                                  <div key={j} className="flex flex-col gap-2">
                                    <div className="flex justify-between items-center">
                                      <span className="text-zinc-300 text-xs font-mono uppercase">↳ {w.name} Ward</span>
                                      <span className="text-zinc-600 text-[9px] uppercase">POP: {w.population.toLocaleString()}</span>
                                    </div>
                                    <div className="grid grid-cols-1 xl:grid-cols-2 gap-2 pl-4">
                                      {w.stations.map((s, k) => (
                                        <div key={k} className="bg-black/40 border border-zinc-800/80 p-2 flex justify-between items-center rounded-sm">
                                          <div className="flex items-center gap-2">
                                            <div className={`w-1.5 h-1.5 rounded-full ${s.status === 'Online' ? 'bg-emerald-500 shadow-[0_0_8px_#10b981]' : s.status === 'Active Sync' ? 'bg-amber-500 animate-pulse' : 'bg-red-500'}`}></div>
                                            <span className="text-zinc-400 text-[9px] uppercase tracking-wider truncate max-w-[150px]">{s.name}</span>
                                          </div>
                                          
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                </div>
              )}

          </div>
        </div>
      </div>
    
  );
}
