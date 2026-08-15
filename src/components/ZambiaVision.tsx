import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { NetworkCanvas } from './NetworkCanvas';
import { Map, Zap, Database, Activity, Target, Shield, Cpu, Globe2, Eye, Hexagon, Component, DoorOpen, Camera, Hammer } from 'lucide-react';
import { ZAMBIA_DETAILED_PROVINCES, ProvinceDetailed } from '../data/zambiaDistricts';
import { ProvinceDoor } from './ProvinceDoor';
import { VisionCore } from './VisionCore';
import { CreationForge } from './CreationForge';
import { DigitalTwinNetwork } from './DigitalTwinNetwork';

export function ZambiaVision() {
  const [activeNode, setActiveNode] = useState<ProvinceDetailed>(ZAMBIA_DETAILED_PROVINCES[0]);
  const [doorOpen, setDoorOpen] = useState(false);
  const [visionCoreOpen, setVisionCoreOpen] = useState(false);
  const [creationForgeOpen, setCreationForgeOpen] = useState(false);
  const [digitalTwinOpen, setDigitalTwinOpen] = useState(false);

  return (
    <>
      <div className="flex-1 flex flex-col md:flex-row gap-6 h-full relative z-10 p-2">
        <div className="absolute inset-0 pointer-events-none rounded-xl overflow-hidden border border-emerald-500/20 shadow-[0_0_100px_rgba(16,185,129,0.05)]">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-950/40 via-zinc-950/80 to-amber-950/40" />
          <NetworkCanvas count={60} color="#10b981" maxConnections={80} connectionDistance={120} />
        </div>

        <div className="flex-[3] flex flex-col relative z-10">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-3">
              <Globe2 className="w-6 h-6 text-emerald-500" />
              <h3 className="text-xl font-light text-white tracking-[0.2em] uppercase">
                Zambian Neural States
              </h3>
            </div>
            
            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={() => setVisionCoreOpen(true)}
                className="flex items-center gap-2 px-3 py-1.5 bg-emerald-500/10 border border-emerald-500/30 hover:border-emerald-500/80 rounded transition-all group"
              >
                <Camera className="w-4 h-4 text-emerald-500 group-hover:text-emerald-400" />
                <span className="font-mono text-[10px] tracking-widest uppercase text-emerald-500 group-hover:text-emerald-400">
                  Engage Vision Core
                </span>
              </button>
              <button
                onClick={() => setCreationForgeOpen(true)}
                className="flex items-center gap-2 px-3 py-1.5 bg-violet-500/10 border border-violet-500/30 hover:border-violet-500/80 rounded transition-all group"
              >
                <Hammer className="w-4 h-4 text-violet-500 group-hover:text-violet-400" />
                <span className="font-mono text-[10px] tracking-widest uppercase text-violet-500 group-hover:text-violet-400">
                  Engage Creation Forge
                </span>
              </button>
              <button
                onClick={() => setDigitalTwinOpen(true)}
                className="flex items-center gap-2 px-3 py-1.5 bg-blue-500/10 border border-blue-500/30 hover:border-blue-500/80 rounded transition-all group"
              >
                <Cpu className="w-4 h-4 text-blue-500 group-hover:text-blue-400" />
                <span className="font-mono text-[10px] tracking-widest uppercase text-blue-500 group-hover:text-blue-400">
                  Digital Twins
                </span>
              </button>
            </div>
          </div>

          


          <div className="flex-1 overflow-hidden flex flex-col relative">
            <AnimatePresence mode="wait">
              {doorOpen ? (
                <ProvinceDoor 
                  
                  province={activeNode} 
                  onClose={() => setDoorOpen(false)} 
                />
              ) : (
                <motion.div 
                  key="province-grid"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex-1 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-zinc-800 scrollbar-track-transparent h-full"
                >
                  <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 auto-rows-fr pb-10">
                    {ZAMBIA_DETAILED_PROVINCES.map((prov, i) => (
                      <motion.button
                        layoutId={`province-card-${prov.name}`}
                        key={prov.name}
                        onClick={() => { setActiveNode(prov); setDoorOpen(true); }}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.05, duration: 0.4 }}
                        className={`relative p-4 rounded-xl border flex flex-col items-start gap-2 text-left transition-all overflow-hidden group
                          ${activeNode.name === prov.name 
                            ? `${prov.border} bg-zinc-900/80 shadow-[0_0_30px_rgba(var(--tw-colors-${prov.bg.split('-')[1]}-500),0.2)]`
                            : 'border-zinc-800/50 bg-zinc-950/50 hover:border-zinc-600'
                          }
                        `}
                      >
                        {activeNode.name === prov.name && (
                          <motion.div 
                            layoutId="active-province-glow"
                            className={`absolute inset-0 opacity-10 ${prov.bg}`}
                          />
                        )}
                        
                        <div className="flex items-center justify-between w-full relative z-10">
                          <Hexagon className={`w-5 h-5 ${activeNode.name === prov.name ? prov.color : 'text-zinc-500 group-hover:text-zinc-400'} transition-colors`} />
                          <span className="text-[10px] font-mono text-zinc-600 tracking-widest">NODE {String(i + 1).padStart(2, '0')}</span>
                        </div>
                        
                        <div className="mt-2 relative z-10 w-full">
                          <h4 className={`font-mono uppercase tracking-widest text-sm transition-colors ${activeNode.name === prov.name ? 'text-white' : 'text-zinc-300 group-hover:text-white'}`}>
                            {prov.name}
                          </h4>
                          <p className={`text-[10px] tracking-wider uppercase mt-1 transition-colors ${activeNode.name === prov.name ? prov.color : 'text-zinc-500 group-hover:text-zinc-400'}`}>
                            {prov.role}
                          </p>
                        </div>
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
      
      <AnimatePresence>
        {visionCoreOpen && (
          <VisionCore onClose={() => setVisionCoreOpen(false)} />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {creationForgeOpen && (
          <CreationForge onClose={() => setCreationForgeOpen(false)} />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {digitalTwinOpen && (
          <DigitalTwinNetwork onClose={() => setDigitalTwinOpen(false)} />
        )}
      </AnimatePresence>
    </>
  );
}
