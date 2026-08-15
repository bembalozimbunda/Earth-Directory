const fs = require('fs');

const content = `import React, { useState } from 'react';
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

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-fr overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-zinc-800 scrollbar-track-transparent">
            {ZAMBIA_DETAILED_PROVINCES.map((prov, i) => (
              <motion.button
                key={prov.name}
                onClick={() => setActiveNode(prov)}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                className={\`relative p-4 rounded-xl border flex flex-col items-start gap-2 text-left transition-all overflow-hidden group
                  \${activeNode.name === prov.name 
                    ? \`\${prov.border} bg-zinc-900/80 shadow-[0_0_30px_rgba(var(--tw-colors-\${prov.bg.split('-')[1]}-500),0.2)]\`
                    : 'border-zinc-800/50 bg-zinc-950/50 hover:border-zinc-600'
                  }
                \`}
              >
                {activeNode.name === prov.name && (
                  <motion.div 
                    layoutId="active-province-glow"
                    className={\`absolute inset-0 opacity-10 \${prov.bg}\`}
                  />
                )}
                
                <div className="flex items-center justify-between w-full relative z-10">
                  <Hexagon className={\`w-5 h-5 \${activeNode.name === prov.name ? prov.color : 'text-zinc-500 group-hover:text-zinc-400'} transition-colors\`} />
                  <span className="text-[10px] font-mono text-zinc-600 tracking-widest">NODE {String(i + 1).padStart(2, '0')}</span>
                </div>
                
                <div className="mt-2 relative z-10">
                  <h4 className={\`font-mono uppercase tracking-widest text-sm transition-colors \${activeNode.name === prov.name ? 'text-white' : 'text-zinc-300 group-hover:text-white'}\`}>
                    {prov.name}
                  </h4>
                  <p className={\`text-[10px] tracking-wider uppercase mt-1 transition-colors \${activeNode.name === prov.name ? prov.color : 'text-zinc-500 group-hover:text-zinc-400'}\`}>
                    {prov.role}
                  </p>
                </div>
              </motion.button>
            ))}
          </div>
        </div>

        <div className="flex-[2] flex flex-col relative z-10 border-l border-zinc-800/50 pl-6 h-full overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeNode.name}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col h-full"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className={\`w-2 h-2 rounded-full \${activeNode.bg} animate-pulse shadow-[0_0_10px_currentColor]\`} />
                <span className={\`font-mono text-xs tracking-[0.3em] uppercase \${activeNode.color}\`}>
                  Active State Node
                </span>
              </div>
              
              <h2 className="text-4xl font-light text-white tracking-widest uppercase mb-2 mt-2">
                {activeNode.name}
              </h2>
              <p className="text-zinc-500 font-mono text-xs uppercase tracking-widest mb-6">
                {activeNode.role}
              </p>
              
              <div className="flex-1 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-zinc-800 scrollbar-track-transparent">
                <button
                  onClick={() => setDoorOpen(true)}
                  className={\`w-full flex items-center justify-between p-4 mb-6 rounded-lg border \${activeNode.border} bg-zinc-900/80 hover:bg-zinc-800 transition-colors group\`}
                >
                  <div className="flex items-center gap-3">
                    <DoorOpen className={\`w-5 h-5 \${activeNode.color}\`} />
                    <span className={\`font-mono tracking-widest uppercase text-sm \${activeNode.color} group-hover:text-white transition-colors\`}>
                      Open Provincial Door
                    </span>
                  </div>
                  <Hexagon className={\`w-4 h-4 \${activeNode.color} animate-pulse\`} />
                </button>
                <div className="bg-zinc-900/50 p-5 rounded-lg border border-zinc-800/50 mb-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Eye className={\`w-4 h-4 \${activeNode.color}\`} />
                    <span className={\`text-xs font-mono uppercase tracking-widest \${activeNode.color}\`}>System Vision</span>
                  </div>
                  <p className="text-zinc-300 font-light leading-relaxed text-sm">
                    {activeNode.vision}
                  </p>
                </div>
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <Component className="w-4 h-4 text-zinc-500" />
                      <span className="text-zinc-400 font-mono text-xs uppercase tracking-widest">Sub-Nodes (Districts)</span>
                    </div>
                    <span className="text-zinc-600 font-mono text-xs">{activeNode.districts.length}</span>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {activeNode.districts.map((sub, i) => (
                      <span 
                        key={i} 
                        className={\`px-3 py-1.5 text-[10px] font-mono tracking-wider uppercase bg-zinc-900/80 border border-zinc-800/80 rounded-full text-zinc-300 \${activeNode.color.replace('text', 'hover:border').replace('-500', '-500/50')} transition-colors\`}
                      >
                        {sub.name}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="grid grid-cols-1 gap-3 mt-auto">
                  <div className="flex items-center gap-4 bg-zinc-900/30 p-3 rounded-lg border border-zinc-800/30">
                    <Database className={\`w-4 h-4 \${activeNode.color}\`} />
                    <div className="flex flex-col">
                      <span className="text-zinc-500 text-[9px] uppercase tracking-widest">Data Sync</span>
                      <span className="text-zinc-200 font-mono text-xs tracking-wider">99.9% / STABLE</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 bg-zinc-900/30 p-3 rounded-lg border border-zinc-800/30">
                    <Activity className={\`w-4 h-4 \${activeNode.color}\`} />
                    <div className="flex flex-col">
                      <span className="text-zinc-500 text-[9px] uppercase tracking-widest">Resource Output</span>
                      <span className="text-zinc-200 font-mono text-xs tracking-wider">OPTIMAL CAPACITY</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <AnimatePresence>
        {doorOpen && (
          <ProvinceDoor 
            province={activeNode} 
            onClose={() => setDoorOpen(false)} 
          />
        )}
      </AnimatePresence>
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
`;

fs.writeFileSync('src/components/ZambiaVision.tsx', content);
