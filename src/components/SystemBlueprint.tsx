import React, { useEffect, useState, useRef, useLayoutEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ZoomIn, ZoomOut, Maximize, Orbit, Activity } from 'lucide-react';
import { CONTINENTS } from '../data/continents';

interface BlueprintProps {
  onClose: () => void;
}

export function SystemBlueprint({ onClose }: BlueprintProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  const [activeUpdates, setActiveUpdates] = useState<Record<string, boolean>>({});
  
  // Fit to screen scaling
  useLayoutEffect(() => {
    const calculateScale = () => {
      if (typeof window === 'undefined') return;
      const BASE_WIDTH = 1200; // Increased base width for all branches
      const BASE_HEIGHT = 800;
      
      const availableWidth = window.innerWidth - 40; 
      const availableHeight = window.innerHeight - 80;
      
      const scaleX = availableWidth / BASE_WIDTH;
      const scaleY = availableHeight / BASE_HEIGHT;
      
      const finalScale = Math.min(scaleX, scaleY, 1.1); // slightly cap scale up
      setScale(Math.max(finalScale, 0.3)); // ensure it doesn't get ridiculously tiny
    };

    calculateScale();
    window.addEventListener('resize', calculateScale);
    return () => window.removeEventListener('resize', calculateScale);
  }, []);

  // Simulate live population fluctuations
  useEffect(() => {
    const interval = setInterval(() => {
      const randomBranch = CONTINENTS[Math.floor(Math.random() * CONTINENTS.length)].id;
      setActiveUpdates(prev => ({ ...prev, [randomBranch]: true }));
      setTimeout(() => {
        setActiveUpdates(prev => ({ ...prev, [randomBranch]: false }));
      }, 1000);
    }, 2000);
    return () => clearInterval(interval);
  }, []);
  
  // Roots (4 Inner Nodes)
  const roots = [
    { id: 'source', label: 'UNSEEN SOURCE', desc: 'Core Origin / Data Lake' },
    { id: 'hardware', label: 'HARDWARE & BLOOD', desc: 'Physical Manifestation' },
    { id: 'frequencies', label: 'FREQUENCIES', desc: 'Vibrational Grid' },
    { id: 'ancestral', label: 'ANCESTRAL INTEL', desc: 'Historical Archives' }
  ];

  // Branches (7 Continents / Voids)
  const branches = CONTINENTS.map(c => ({
    id: c.id,
    label: c.name,
    sub: c.sub,
    population: c.population,
    fruits: c.countries ? c.countries.length : 0
  }));

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 1.2, ease: "easeInOut" }}
      className="fixed inset-0 z-[9999] bg-[#020202] text-cyan-500 font-mono overflow-hidden select-none"
    >
      {/* Background blueprint grid */}
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, #0891b2 1px, transparent 1px),
            linear-gradient(to bottom, #0891b2 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />
      <div className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, #0891b2 1px, transparent 1px),
            linear-gradient(to bottom, #0891b2 1px, transparent 1px)
          `,
          backgroundSize: '10px 10px'
        }}
      />
      
      {/* Radial fade for the grid */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,#020202_90%)] pointer-events-none" />

      {/* Blueprint Header UI */}
      <div className="absolute top-6 left-6 right-6 flex justify-between items-start z-50 pointer-events-none">
        <div className="flex flex-col gap-1">
          <div className="text-cyan-400 text-sm tracking-[0.3em] uppercase flex items-center gap-3">
            <Orbit className="w-5 h-5 text-cyan-500" />
            EARTH DIRECTORY // ARCHITECTURAL SCHEMATIC
          </div>
          <div className="text-cyan-800 text-[10px] tracking-[0.2em] uppercase">
            SYSTEM TREE // ROOTS TO FRUITS // DIGITAL WIREFRAME
          </div>
        </div>
        
        <button 
          onClick={onClose}
          className="pointer-events-auto p-3 text-cyan-600 hover:text-cyan-300 hover:bg-cyan-900/30 rounded border border-transparent hover:border-cyan-800/50 transition-all"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Main Diagram Area (Scaled to fit) */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
        <div 
          className="relative w-[1200px] h-[800px] flex flex-col items-center justify-center mx-auto"
          style={{ transform: `scale(${scale})`, transformOrigin: 'center center' }}
        >
          
          {/* THE CANOPY / FRUITS (Leaves/Nations) */}
          <div className="w-full flex justify-between items-end h-[300px] border-b border-cyan-900/50 relative pb-10">
            {branches.map((branch, i) => {
              const height = 150 + (i % 3) * 50; // Staggered heights
              const isUpdating = activeUpdates[branch.id];
              return (
                <motion.div 
                  key={branch.id}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: height, opacity: 1 }}
                  transition={{ delay: 1 + i * 0.1, duration: 1.5, ease: "easeOut" }}
                  className="flex flex-col items-center justify-end relative w-[130px] group"
                >
                  {/* The Live Data Cluster (Population + Nodes) */}
                  <div className="absolute -top-24 flex flex-col items-center w-[160px] opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="flex items-center gap-1">
                      {isUpdating && <Activity className="w-3 h-3 text-emerald-400 animate-pulse" />}
                      <span className={`text-[10px] tracking-widest font-bold ${isUpdating ? 'text-emerald-400' : 'text-cyan-300'}`}>
                        POP: {branch.population}
                      </span>
                    </div>
                    <span className="text-cyan-700 text-[8px] tracking-widest mt-1">{branch.fruits} ACTIVE LEAVES</span>
                    <div className={`w-full h-[1px] mt-2 ${isUpdating ? 'bg-emerald-500/50' : 'bg-cyan-800/50'}`} />
                  </div>
                  
                  {/* Branch Structure */}
                  <div className="w-full border-t border-cyan-800 relative h-full flex justify-center">
                    <div className={`absolute top-0 w-2 h-2 rounded-full shadow-[0_0_10px_#22d3ee] transition-colors duration-300 ${isUpdating ? 'bg-emerald-400' : 'bg-cyan-400'}`} />
                    <div className="w-[1px] h-full bg-gradient-to-t from-cyan-900 to-cyan-500" />
                  </div>
                  <div className="mt-4 text-center">
                    <div className="text-cyan-400 text-xs tracking-widest uppercase mb-1">{branch.label}</div>
                    <div className="text-cyan-800 text-[8px] tracking-[0.2em]">{branch.sub}</div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* THE TRUNK (Mainframe/Central Processor) */}
          <motion.div 
            initial={{ height: 0 }}
            animate={{ height: 200 }}
            transition={{ delay: 0.5, duration: 1.5, ease: "easeInOut" }}
            className="w-32 border-x border-cyan-900/80 flex justify-center relative bg-cyan-950/10"
          >
            {/* Energy flow lines */}
            <div className="absolute inset-0 flex justify-evenly opacity-30">
              <div className="w-[1px] h-full bg-cyan-500" />
              <div className="w-[1px] h-full bg-cyan-500" />
              <div className="w-[1px] h-full bg-cyan-500" />
            </div>
            
            {/* Central Hub Core (Renamed/Re-styled) */}
            <div className="absolute top-1/2 -translate-y-1/2 flex flex-col items-center z-10 bg-[#020202] p-4 border border-cyan-800 rounded">
              <div className="w-12 h-12 border-2 border-cyan-500 rounded-full flex items-center justify-center animate-[spin_10s_linear_infinite]">
                <div className="w-8 h-8 border border-cyan-300 border-dashed rounded-full flex items-center justify-center">
                   <div className="w-2 h-2 bg-cyan-400 rounded-full shadow-[0_0_10px_#22d3ee]" />
                </div>
              </div>
              <div className="text-cyan-300 text-[10px] tracking-widest mt-3 uppercase">CORE ENGINE</div>
              <div className="text-cyan-600 text-[8px] tracking-widest uppercase">Central Processor</div>
            </div>
          </motion.div>

          {/* THE ROOTS (Foundation) */}
          <div className="w-full flex justify-center gap-12 pt-0 relative border-t border-cyan-900/50">
            <motion.div 
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1 }}
              className="absolute top-0 w-2/3 h-[1px] bg-cyan-800" 
            />
            {roots.map((root, i) => (
              <motion.div 
                key={root.id}
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 2 + i * 0.2, duration: 1 }}
                className="flex flex-col items-center relative pt-8 w-40"
              >
                <div className="absolute top-0 w-[1px] h-8 bg-gradient-to-b from-cyan-800 to-transparent" />
                <div className="w-2 h-2 rounded bg-cyan-700 rotate-45 mb-4 shadow-[0_0_10px_#0e7490]" />
                <div className="text-cyan-500 text-[10px] tracking-widest uppercase text-center font-bold">{root.label}</div>
                <div className="text-cyan-800 text-[8px] tracking-widest uppercase text-center mt-1">{root.desc}</div>
                
                {/* Root deep extending lines */}
                <div className="w-[1px] h-20 bg-gradient-to-b from-cyan-900 to-transparent mt-4 opacity-50" />
              </motion.div>
            ))}
          </div>

        </div>
      </div>
      
      {/* Legend / Metrics */}
      <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end pointer-events-none">
        <div className="text-cyan-800 text-[10px] uppercase tracking-widest flex flex-col gap-1">
          <span>STATUS: ONLINE</span>
          <span>STRUCTURAL INTEGRITY: 100%</span>
          <span>DATA FLOW: SYNCHRONIZED</span>
        </div>
        <div className="text-cyan-900 text-xs font-mono">
          <div className="flex gap-1 items-end">
            {[1, 2, 3, 4, 5, 6].map(bar => (
              <motion.div 
                key={bar}
                animate={{ height: [10, Math.random() * 30 + 10, 10] }}
                transition={{ repeat: Infinity, duration: 1 + Math.random(), ease: "linear" }}
                className="w-1 bg-cyan-800" 
              />
            ))}
          </div>
        </div>
      </div>

    </motion.div>
  );
}
