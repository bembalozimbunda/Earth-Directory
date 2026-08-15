import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Hexagon, ChevronLeft, MapPin, CheckCircle2, AlertCircle, RefreshCw } from 'lucide-react';
import { District, Constituency, Ward, PollingStation } from '../data/zambiaDistricts';
import { NetworkCanvas } from './NetworkCanvas';

export function DistrictDoor({ 
  district, 
  provinceColor,
  provinceBg,
  provinceBorder,
  onClose 
}: { 
  district: District, 
  provinceColor: string,
  provinceBg: string,
  provinceBorder: string,
  onClose: () => void 
}) {
  const [selectedConstituency, setSelectedConstituency] = useState<Constituency | null>(
    district.constituencies ? district.constituencies[0] : null
  );

  return (
    <motion.div 
      layoutId={`district-card-${district.name}`}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className={`absolute inset-0 z-[200] bg-zinc-950 border ${provinceBorder} rounded-xl relative shadow-[0_0_80px_rgba(var(--tw-colors-${provinceBg.split('-')[1]}-500),0.1)] flex flex-col overflow-hidden`}
    >
      <div className={`absolute inset-0 opacity-5 bg-gradient-to-br from-zinc-950 via-zinc-950 to-${provinceBg.split('-')[1]}-900`} />
      
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <NetworkCanvas count={40} color={provinceColor.split('-')[1]} />
      </div>

      {/* Header */}
      <div className="relative z-10 flex items-center justify-between p-6 border-b border-zinc-800/80 bg-zinc-950/80 backdrop-blur-md">
        <div className="flex items-center gap-4">
          <button 
            onClick={onClose}
            className={`p-2 text-zinc-500 hover:${provinceColor} bg-zinc-900 border border-zinc-800 hover:${provinceBorder} rounded transition-colors`}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div>
            <span className={`text-xs font-mono tracking-[0.3em] uppercase ${provinceColor}`}>
              Sub-Node / District Door
            </span>
            <h2 className="text-3xl font-light text-white tracking-widest uppercase mt-1">
              {district.name}
            </h2>
          </div>
        </div>
        <div className="flex items-center gap-6">
           <div className="flex flex-col items-end hidden md:flex">
             <span className="text-zinc-500 text-[10px] uppercase tracking-widest">Primary Function</span>
             <span className={`font-mono text-sm tracking-widest ${provinceColor}`}>{district.resource}</span>
           </div>
           <button 
             onClick={onClose}
             className="p-2 text-zinc-500 hover:text-white bg-zinc-900 border border-zinc-800 hover:border-zinc-600 rounded transition-colors"
           >
             <X className="w-5 h-5" />
           </button>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col md:flex-row overflow-hidden relative z-10">
        
        {/* Left Column - Constituencies */}
        <div className="w-full md:w-1/3 flex flex-col p-6 border-r border-zinc-800/80 bg-zinc-950/50">
          <h3 className={`text-sm font-mono tracking-[0.2em] uppercase ${provinceColor} mb-4`}>
            Constituency Array {district.constituencies ? `(${district.constituencies.length})` : '(0)'}
          </h3>
          
          <div className="flex-1 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-zinc-800">
            <div className="flex flex-col gap-3">
              {district.constituencies ? (
                district.constituencies.map((constituency, i) => (
                  <motion.button
                    key={constituency.name}
                    onClick={() => setSelectedConstituency(constituency)}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className={`flex flex-col gap-2 p-4 bg-zinc-900/50 border rounded-lg text-left transition-all group
                      ${selectedConstituency?.name === constituency.name 
                        ? `${provinceBorder} bg-zinc-800/80 shadow-[0_0_15px_rgba(var(--tw-colors-${provinceBg.split('-')[1]}-500),0.2)]` 
                        : 'border-zinc-800/50 hover:border-zinc-600 hover:bg-zinc-800/50'
                      }
                    `}
                  >
                    <div className="flex items-center justify-between w-full">
                      <span className={`font-mono tracking-widest uppercase ${selectedConstituency?.name === constituency.name ? 'text-white' : 'text-zinc-300'}`}>
                        {constituency.name}
                      </span>
                      <span className="text-[10px] text-zinc-600 font-mono">C-{String(i + 1).padStart(2, '0')}</span>
                    </div>
                  </motion.button>
                ))
              ) : (
                <div className="text-zinc-600 font-mono text-xs uppercase tracking-widest p-4 border border-zinc-800/50 rounded border-dashed">
                  Constituency Telemetry Offline
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right Column - Wards & Polling Stations */}
        <div className="flex-1 flex flex-col p-6 bg-zinc-950/80 overflow-y-auto scrollbar-thin scrollbar-thumb-zinc-800">
          <AnimatePresence mode="wait">
            {selectedConstituency ? (
              <motion.div
                key={selectedConstituency.name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="flex flex-col gap-6"
              >
                <div className="flex items-center justify-between border-b border-zinc-800/50 pb-4">
                  <h3 className={`text-lg font-light tracking-[0.2em] uppercase text-white`}>
                    {selectedConstituency.name} <span className="text-zinc-500 text-sm">// Ward Matrix</span>
                  </h3>
                </div>

                <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                  {selectedConstituency.wards && selectedConstituency.wards.map((ward, idx) => (
                    <div key={idx} className="bg-zinc-900/30 border border-zinc-800/50 rounded-lg p-5 flex flex-col gap-4">
                      <div className="flex items-center justify-between">
                        <h4 className={`font-mono text-sm tracking-widest uppercase ${provinceColor}`}>{ward.name}</h4>
                        <span className="text-[10px] text-zinc-500 font-mono border border-zinc-700 px-1.5 py-0.5 rounded">
                          {ward.pollingStations ? ward.pollingStations.length : 0} STATIONS
                        </span>
                      </div>
                      
                      <div className="flex flex-col gap-2">
                        {ward.pollingStations ? (
                          ward.pollingStations.map((station, sIdx) => (
                            <div key={sIdx} className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-3 bg-zinc-950/50 border border-zinc-800/50 rounded">
                              <div className="flex items-center gap-2">
                                <MapPin className="w-3 h-3 text-zinc-500" />
                                <span className="text-xs text-zinc-300 font-mono uppercase tracking-wider">{station.name}</span>
                              </div>
                              <div className="flex items-center gap-4">
                                <div className="flex items-center gap-1">
                                  <span className="text-[9px] text-zinc-500 uppercase tracking-widest">Voters</span>
                                  <span className="text-xs text-white font-mono">{station.voters.toLocaleString()}</span>
                                </div>
                                <div className={`flex items-center gap-1.5 px-2 py-0.5 rounded text-[9px] uppercase tracking-widest border
                                  ${station.status === 'Online' ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400' : 
                                    station.status === 'Active Sync' ? 'bg-blue-500/10 border-blue-500/30 text-blue-400' : 
                                    'bg-amber-500/10 border-amber-500/30 text-amber-400'}
                                `}>
                                  {station.status === 'Online' && <CheckCircle2 className="w-3 h-3" />}
                                  {station.status === 'Active Sync' && <RefreshCw className="w-3 h-3 animate-spin-slow" />}
                                  {station.status === 'Standby' && <AlertCircle className="w-3 h-3" />}
                                  {station.status}
                                </div>
                              </div>
                            </div>
                          ))
                        ) : (
                          <div className="text-zinc-600 font-mono text-[10px] uppercase tracking-widest p-2">
                            Awaiting sync...
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ) : (
              <div className="flex items-center justify-center h-full">
                <span className="text-zinc-600 font-mono tracking-widest uppercase">Select a constituency</span>
              </div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </motion.div>
  );
}
