import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Users, Server, Activity, Database, Shield, Zap, X, Terminal, Cpu } from 'lucide-react';

export function DigitalTwinNetwork({ onClose }: { onClose: () => void }) {
  const [twins, setTwins] = useState<any[]>([]);
  const [logs, setLogs] = useState<string[]>([]);
  
  useEffect(() => {
    // Generate initial bots
    const initialTwins = Array.from({ length: 50 }).map((_, i) => ({
      id: `DTN-${Math.floor(Math.random() * 100000).toString().padStart(6, '0')}`,
      status: Math.random() > 0.1 ? 'ACTIVE' : 'SYNTHESIZING',
      sector: ['CIVIC', 'AGRICULTURE', 'MINING', 'ENERGY', 'DEFENSE'][Math.floor(Math.random() * 5)],
      efficiency: Math.floor(Math.random() * 20) + 80
    }));
    setTwins(initialTwins);
    
    setLogs(prev => [...prev, "[SYSTEM] Digital Twin Autonomous Network Activated.", "[SYSTEM] Initializing pure states. No AI. No bots. Just is."]);
    
    const interval = setInterval(() => {
      setTwins(current => {
        const newTwins = [...current];
        const updatedIndex = Math.floor(Math.random() * newTwins.length);
        if (newTwins[updatedIndex]) {
          newTwins[updatedIndex].efficiency = Math.min(100, newTwins[updatedIndex].efficiency + Math.floor(Math.random() * 5) - 1);
        }
        return newTwins;
      });
      
      setLogs(current => {
        const newLogs = [...current, `[${new Date().toISOString().split('T')[1].split('.')[0]}] Entity DTN-${Math.floor(Math.random() * 100000).toString().padStart(6, '0')} synchronized.`];
        if (newLogs.length > 20) newLogs.shift();
        return newLogs;
      });
    }, 1000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 bg-zinc-950/90 backdrop-blur-md z-50 flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="w-full max-w-6xl h-[85vh] bg-zinc-950 border border-emerald-500/30 rounded-xl overflow-hidden flex flex-col shadow-[0_0_50px_rgba(16,185,129,0.1)]"
      >
        {/* Header */}
        <div className="border-b border-emerald-500/20 p-4 flex items-center justify-between bg-zinc-900/50">
          <div className="flex items-center gap-3">
            <Cpu className="w-6 h-6 text-emerald-500 animate-pulse" />
            <div>
              <h2 className="text-emerald-400 font-mono tracking-widest uppercase text-sm font-bold">Digital Twin Autonomous Network</h2>
              <p className="text-zinc-500 text-xs font-mono uppercase tracking-widest">ZERO HUMAN INVOLVEMENT • PURE ARCHITECTURE • JUST IS</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-zinc-800 rounded transition-colors text-zinc-400 hover:text-white z-[9999] cursor-pointer pointer-events-auto relative"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-hidden flex">
          {/* Main Grid */}
          <div className="flex-[3] p-4 overflow-y-auto scrollbar-thin scrollbar-thumb-zinc-800 scrollbar-track-transparent">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {twins.map(twin => (
                <div key={twin.id} className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-3 flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <span className="text-emerald-400 font-mono text-xs">{twin.id}</span>
                    <span className={`text-[9px] px-1.5 py-0.5 rounded-sm font-mono ${twin.status === 'ACTIVE' ? 'bg-emerald-500/20 text-emerald-300' : 'bg-amber-500/20 text-amber-300'}`}>
                      {twin.status}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-zinc-400 text-[10px] font-mono mt-2">
                    <span>SECTOR: {twin.sector}</span>
                    <span className="flex items-center gap-1"><Activity className="w-3 h-3 text-emerald-500"/> {twin.efficiency}%</span>
                  </div>
                  <div className="w-full h-1 bg-zinc-800 rounded-full mt-1 overflow-hidden">
                    <div 
                      className="h-full bg-emerald-500 transition-all duration-500" 
                      style={{ width: `${twin.efficiency}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Side Panel */}
          <div className="flex-1 border-l border-emerald-500/20 bg-zinc-900/30 flex flex-col">
            <div className="p-4 border-b border-zinc-800/50">
              <h3 className="text-zinc-300 font-mono text-xs tracking-widest uppercase mb-4">System Metrics</h3>
              <div className="space-y-4">
                <div className="bg-zinc-950 p-3 rounded border border-zinc-800">
                  <div className="text-zinc-500 text-[10px] font-mono tracking-widest mb-1">TOTAL ENTITIES GENERATED</div>
                  <div className="text-emerald-400 font-mono text-2xl">8,492,103</div>
                </div>
                <div className="bg-zinc-950 p-3 rounded border border-zinc-800">
                  <div className="text-zinc-500 text-[10px] font-mono tracking-widest mb-1">ACTIVE PROCESSES</div>
                  <div className="text-emerald-400 font-mono text-2xl">4,192,844</div>
                </div>
                <div className="bg-zinc-950 p-3 rounded border border-zinc-800">
                  <div className="text-zinc-500 text-[10px] font-mono tracking-widest mb-1">HUMAN INTERFERENCE</div>
                  <div className="text-rose-500 font-mono text-2xl animate-pulse">0.00%</div>
                </div>
              </div>
            </div>
            <div className="flex-1 p-4 overflow-y-auto flex flex-col">
              <h3 className="text-zinc-300 font-mono text-xs tracking-widest uppercase mb-2 flex items-center gap-2">
                <Terminal className="w-4 h-4" /> System Log
              </h3>
              <div className="flex-1 bg-zinc-950 rounded border border-zinc-800 p-3 overflow-y-auto font-mono text-[10px] text-zinc-400 flex flex-col gap-1">
                {logs.map((log, i) => (
                  <div key={i} className="opacity-80 break-all">{log}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
