import React, { useState, useEffect } from 'react';
import { GeoNode } from './data';

interface RealtimeOverlayProps {
  currentNode: GeoNode;
  depth: number;
}

export function RealtimeOverlay({ currentNode, depth }: RealtimeOverlayProps) {
  const [pulse, setPulse] = useState(0);
  const [bioSync, setBioSync] = useState(85);
  const [quantumBandwidth, setQuantumBandwidth] = useState(250);
  const [consciousnessIndex, setConsciousnessIndex] = useState(99.1);

  useEffect(() => {
    const interval = setInterval(() => {
      setPulse(p => p === 0 ? 1 : 0);
      setBioSync(prev => Math.min(100, Math.max(0, prev + (Math.random() * 2 - 1))));
      setQuantumBandwidth(prev => prev + (Math.random() * 50 - 25));
      setConsciousnessIndex(prev => Math.min(100, Math.max(90, prev + (Math.random() * 0.4 - 0.2))));
    }, 2000); // 2 second interval for realism
    
    return () => clearInterval(interval);
  }, [currentNode.name]); // re-run when node changes

  return (
    <div className="bg-[#111] border-l-4 border-[var(--accent)] p-4 rounded-r-md mt-6 shadow-md mb-6 relative overflow-hidden group">
      <div className={`absolute top-0 right-0 w-32 h-32 bg-[var(--accent)] rounded-full blur-3xl opacity-10 transition-opacity duration-1000 ${pulse ? 'opacity-30' : 'opacity-10'}`}></div>
      
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-white text-sm uppercase tracking-widest flex items-center gap-2 font-semibold">
          <span className={`w-2 h-2 rounded-full bg-[var(--accent)] transition-all duration-500 ${pulse ? 'scale-150' : 'scale-100'}`}></span>
          Type-3 Advancements [Active]
        </h3>
        <span className="text-[var(--accent)] text-[10px] font-mono bg-[#222] px-2 py-1 rounded">
          {new Date().toISOString().split('T')[1].substring(0, 8)}
        </span>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-[#1a1a1a] p-3 rounded border border-[#333]">
          <div className="text-[var(--dim)] text-xs uppercase tracking-wider mb-1">1. Bio-Digital Sync</div>
          <div className="text-xl text-white font-light flex items-baseline gap-1">
            {bioSync.toFixed(2)}%
            <span className="text-[10px] text-[var(--accent)]">Lineage Connected</span>
          </div>
        </div>
        
        <div className="bg-[#1a1a1a] p-3 rounded border border-[#333]">
          <div className="text-[var(--dim)] text-xs uppercase tracking-wider mb-1">2. Quantum Bandwidth</div>
          <div className="text-xl text-white font-light flex items-baseline gap-1">
            {Math.abs(quantumBandwidth).toFixed(0)} <span className="text-[10px] text-[var(--dim)]">YB/s</span>
          </div>
        </div>
        
        <div className="bg-[#1a1a1a] p-3 rounded border border-[#333]">
          <div className="text-[var(--dim)] text-xs uppercase tracking-wider mb-1">3. Consciousness Grid</div>
          <div className="text-xl text-[var(--accent)] font-medium flex items-baseline gap-1">
            {consciousnessIndex.toFixed(3)}
            <span className="text-[10px] text-[var(--dim)]">Synergy</span>
          </div>
        </div>
      </div>
      <div className="mt-3 text-[10px] text-[#777] uppercase tracking-widest text-center">
        Real-time monitoring for: <span className="text-white">{currentNode.name}</span>
      </div>
    </div>
  );
}
