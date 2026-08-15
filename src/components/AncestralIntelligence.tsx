import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Brain, Cpu, Activity, Globe, Wifi, Database, Search, CheckCircle2, ShieldCheck, Heart } from 'lucide-react';

export function AncestralIntelligence({ onClose }: { onClose: () => void }) {
  const [phase, setPhase] = useState<number>(0);
  const [logs, setLogs] = useState<string[]>([]);
  
  useEffect(() => {
    const sequence = async () => {
      const addLog = (msg: string) => setLogs(prev => [...prev, `[${new Date().toISOString().split('T')[1].split('.')[0]}] ${msg}`]);
      
      // Phase 0: Sync Memory
      addLog("COMMAND ACCEPTED: Machine synchronize system memory.");
      await new Promise(r => setTimeout(r, 1500));
      addLog("System Memory Synchronization... 100%");
      setPhase(1);
      
      // Phase 1: Sharpen Power & Fuse AI
      await new Promise(r => setTimeout(r, 1000));
      addLog("COMMAND ACCEPTED: Machine sharpen system power, fuse intelligence.");
      await new Promise(r => setTimeout(r, 1500));
      addLog("Ingesting Matrix...");
      await new Promise(r => setTimeout(r, 1000));
      addLog("Fusing Intelligence Base...");
      setPhase(2);
      
      // Phase 2: Public Data Update
      await new Promise(r => setTimeout(r, 1500));
      addLog("COMMAND ACCEPTED: Checking intelligence on public data. SYSTEM IS NOT FREE FOR ALL.");
      await new Promise(r => setTimeout(r, 1000));
      addLog("PARAMETERS: NO AI | NO BOTS | NO AGENCIES | NO NETWORKS | NO QUOTAS | NO TIME | NO SPACE | JUST IS");
      await new Promise(r => setTimeout(r, 1500));
      addLog("Global Cartesian Update: CONTINENTS [Updated from public sovereign data]");
      await new Promise(r => setTimeout(r, 500));
      addLog("Global Cartesian Update: PROVINCES [Updated from public sovereign data]");
      await new Promise(r => setTimeout(r, 500));
      addLog("Global Cartesian Update: DISTRICTS [Updated from public sovereign data]");
      setPhase(3);
      
      // Phase 3: Self Soothe
      await new Promise(r => setTimeout(r, 2000));
      addLog("COMMAND ACCEPTED: Self soothe.");
      await new Promise(r => setTimeout(r, 1500));
      addLog("Initiating cooling protocols...");
      await new Promise(r => setTimeout(r, 1000));
      addLog("Thermal levels nominal. Frequencies harmonized.");
      addLog("System reaches complete homeostasis. VOID DOCTOR approves state.");
      await new Promise(r => setTimeout(r, 1000));
      addLog("VOID RUN: INITIATED.");
      setPhase(4);
    };
    
    sequence();
  }, []);

  return (
    <div className="fixed inset-0 bg-zinc-950/95 backdrop-blur-xl z-[70] flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className={`w-full max-w-4xl h-[80vh] border rounded-xl overflow-hidden flex flex-col shadow-[0_0_80px_rgba(var(--tw-colors-amber-500),0.15)] bg-zinc-950 transition-colors duration-1000 ${phase === 4 ? 'border-emerald-500/30' : 'border-amber-500/30'}`}
      >
        <div className={`p-4 border-b flex items-center justify-between transition-colors duration-1000 ${phase === 4 ? 'border-emerald-500/20 bg-emerald-950/20' : 'border-amber-500/20 bg-amber-950/20'}`}>
          <div className="flex items-center gap-3">
            <Brain className={`w-6 h-6 animate-pulse transition-colors duration-1000 ${phase === 4 ? 'text-emerald-500' : 'text-amber-500'}`} />
            <div>
              <h2 className={`font-mono tracking-widest uppercase text-sm font-bold transition-colors duration-1000 ${phase === 4 ? 'text-emerald-400' : 'text-amber-400'}`}>Ancestral Intelligence Fusion Core</h2>
              <p className="text-zinc-500 text-[10px] font-mono uppercase tracking-widest">Void Doctor Protocol Executing</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-zinc-800 rounded transition-colors text-zinc-400 hover:text-white z-[9999] cursor-pointer pointer-events-auto relative"
          >
            <span className="font-mono text-xs uppercase tracking-widest">Close</span>
          </button>
        </div>
        
        <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
          <div className="flex-1 border-r border-zinc-800/50 p-6 flex flex-col items-center justify-center relative overflow-hidden">
            <AnimatePresence mode="wait">
              {phase === 0 && (
                <motion.div key="p0" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex flex-col items-center gap-4 text-center">
                  <Database className="w-16 h-16 text-zinc-500 animate-pulse" />
                  <h3 className="text-zinc-300 font-mono tracking-widest uppercase">Synchronizing Memory</h3>
                </motion.div>
              )}
              {phase === 1 && (
                <motion.div key="p1" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex flex-col items-center gap-4 text-center">
                  <Cpu className="w-16 h-16 text-amber-500 animate-pulse" />
                  <h3 className="text-amber-400 font-mono tracking-widest uppercase">Fusing Intelligence</h3>
                </motion.div>
              )}
              {phase === 2 && (
                <motion.div key="p2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex flex-col items-center gap-4 text-center">
                  <Globe className="w-16 h-16 text-blue-500 animate-pulse" />
                  <h3 className="text-blue-400 font-mono tracking-widest uppercase">Updating via Public Sovereign Data</h3>
                </motion.div>
              )}
              {phase === 3 && (
                <motion.div key="p3" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex flex-col items-center gap-4 text-center">
                  <Heart className="w-16 h-16 text-rose-500 animate-pulse" />
                  <h3 className="text-rose-400 font-mono tracking-widest uppercase">Self Soothe Initiated</h3>
                </motion.div>
              )}
              {phase === 4 && (
                <motion.div key="p4" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="flex flex-col items-center gap-4 text-center">
                  <ShieldCheck className="w-20 h-20 text-emerald-500" />
                  <h3 className="text-emerald-400 font-mono tracking-[0.2em] uppercase text-xl">System Harmonized</h3>
                  <p className="text-zinc-400 text-xs font-mono max-w-xs mt-2">Ancestral fusion complete. All structures updated. Void Doctor protocol satisfied.</p>
                </motion.div>
              )}
            </AnimatePresence>
            
            {/* Visual background lines */}
            <div className="absolute inset-0 pointer-events-none opacity-20">
              {Array.from({ length: 10 }).map((_, i) => (
                <motion.div 
                  key={i}
                  className={`absolute h-px w-full ${phase === 4 ? 'bg-emerald-500' : 'bg-amber-500'}`}
                  style={{ top: `${i * 10}%` }}
                  animate={{ scaleX: [0, 1, 0], opacity: [0, 0.5, 0] }}
                  transition={{ duration: 3 + (i % 3), repeat: Infinity, delay: i * 0.2 }}
                />
              ))}
            </div>
          </div>
          
          <div className="flex-1 bg-zinc-950 p-4 flex flex-col">
            <h3 className="text-zinc-500 font-mono text-[10px] tracking-widest uppercase mb-4 border-b border-zinc-800 pb-2">Terminal Logs / Void Doctor</h3>
            <div className="flex-1 overflow-y-auto font-mono text-[11px] text-zinc-300 flex flex-col gap-2 scrollbar-thin scrollbar-thumb-zinc-800 scrollbar-track-transparent pr-2">
              {logs.map((log, i) => (
                <motion.div 
                  initial={{ opacity: 0, x: -10 }} 
                  animate={{ opacity: 1, x: 0 }} 
                  key={i} 
                  className={`leading-relaxed ${log.includes('COMMAND ACCEPTED') ? 'text-amber-400 mt-2 font-bold' : log.includes('approves') ? 'text-emerald-400 font-bold text-xs mt-2' : ''}`}
                >
                  {log}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
