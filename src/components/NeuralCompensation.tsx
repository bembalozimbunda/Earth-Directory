import React, { useState, useEffect } from 'react';
import { Brain, Coins, Activity, Fingerprint, Zap, ShieldCheck, ArrowRight, X } from 'lucide-react';

interface NodeData {
  id: string;
  designation: string;
  intelligenceWeight: number; // 0-100 scale
  resonanceFreq: number; // Hz
  allocatedCurrency: number;
  status: 'pending' | 'authorized';
}

const generateMockNodes = (): NodeData[] => {
  return Array.from({ length: 8 }).map((_, i) => {
    const weight = 60 + Math.random() * 39.9; // High intelligence weights
    return {
      id: `HN-${Math.floor(Math.random() * 9000) + 1000}`,
      designation: `Human Node 0${i + 1}`,
      intelligenceWeight: weight,
      resonanceFreq: 432 + Math.random() * 531, // 432Hz to 963Hz
      allocatedCurrency: Math.floor(weight * 144 * (Math.random() * 0.5 + 0.8)), // Payout formula
      status: 'pending'
    };
  });
};

export function NeuralCompensation({ onClose }: { onClose: () => void }) {
  const [nodes, setNodes] = useState<NodeData[]>([]);
  const [isAuthorizing, setIsAuthorizing] = useState(false);
  const [systemAuthorized, setSystemAuthorized] = useState(false);

  useEffect(() => {
    setNodes(generateMockNodes().sort((a, b) => b.intelligenceWeight - a.intelligenceWeight));
  }, []);

  const handleAuthorizeAll = () => {
    setIsAuthorizing(true);
    setTimeout(() => {
      setNodes(prev => prev.map(n => ({ ...n, status: 'authorized' })));
      setIsAuthorizing(false);
      setSystemAuthorized(true);
    }, 2000);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 lg:p-8 bg-black/95 backdrop-blur-xl"
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.05)_0%,transparent_100%)]" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjQ1LCAxNTgsIDExLCAwLjA1KSIvPjwvc3ZnPg==')] opacity-30" />
      </div>

      <div 
        className="w-full max-w-5xl max-h-full flex flex-col bg-zinc-950/80 border border-amber-500/20 rounded-2xl overflow-hidden shadow-[0_0_100px_rgba(245,158,11,0.1)] relative z-10"
      >
        <div className="flex items-center justify-between p-4 border-b border-amber-500/20 bg-zinc-900/50">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-amber-500/10 rounded-lg">
              <Brain className="w-5 h-5 text-amber-500" />
            </div>
            <div>
              <h2 className="text-lg text-white font-mono uppercase tracking-widest">Neural Weight Compensation</h2>
              <p className="text-[10px] text-amber-500/70 font-mono tracking-widest uppercase">Digital Currency Authorization Matrix</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 text-zinc-500 hover:text-white hover:bg-zinc-800 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-thin scrollbar-thumb-amber-500/20 scrollbar-track-transparent">
          {/* Dashboard Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 border border-zinc-800 rounded-xl bg-zinc-900/30 flex items-center gap-4">
              <div className="p-3 bg-zinc-800/50 rounded-lg text-emerald-500">
                <Activity className="w-6 h-6" />
              </div>
              <div>
                <p className="text-[10px] text-zinc-500 font-mono uppercase tracking-widest">Average Matrix Intel</p>
                <p className="text-2xl font-light text-white font-mono">
                  {(nodes.reduce((acc, n) => acc + n.intelligenceWeight, 0) / (nodes.length || 1)).toFixed(2)} <span className="text-xs text-zinc-500">WT</span>
                </p>
              </div>
            </div>
            
            <div className="p-4 border border-zinc-800 rounded-xl bg-zinc-900/30 flex items-center gap-4">
              <div className="p-3 bg-zinc-800/50 rounded-lg text-amber-500">
                <Coins className="w-6 h-6" />
              </div>
              <div>
                <p className="text-[10px] text-zinc-500 font-mono uppercase tracking-widest">Total Currency Allocation</p>
                <p className="text-2xl font-light text-white font-mono">
                  {nodes.reduce((acc, n) => acc + n.allocatedCurrency, 0).toLocaleString()} <span className="text-xs text-zinc-500">TSC</span>
                </p>
              </div>
            </div>

            <div className="p-4 border border-zinc-800 rounded-xl bg-zinc-900/30 flex items-center justify-between">
               <div>
                <p className="text-[10px] text-zinc-500 font-mono uppercase tracking-widest mb-2">Network Status</p>
                {systemAuthorized ? (
                  <div className="flex items-center gap-2 text-emerald-500">
                    <ShieldCheck className="w-5 h-5" />
                    <span className="text-xs font-mono tracking-widest">AUTHORIZED</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-2 text-amber-500">
                    <Fingerprint className="w-5 h-5 animate-pulse" />
                    <span className="text-xs font-mono tracking-widest">PENDING AUTH</span>
                  </div>
                )}
               </div>
               
               <button
                  onClick={handleAuthorizeAll}
                  disabled={systemAuthorized || isAuthorizing}
                  className={`px-4 py-2 rounded border font-mono text-[10px] tracking-widest transition-all flex items-center gap-2
                    ${systemAuthorized 
                      ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-500 opacity-50 cursor-not-allowed' 
                      : isAuthorizing
                        ? 'bg-amber-500/20 border-amber-500 text-amber-500 animate-pulse'
                        : 'bg-amber-500/10 border-amber-500/50 text-amber-500 hover:bg-amber-500/20'
                    }`}
               >
                 {isAuthorizing ? 'PROCESSING...' : systemAuthorized ? 'FUNDS DISPERSED' : 'AUTHORIZE PAYOUT'}
                 {!systemAuthorized && !isAuthorizing && <Zap className="w-3 h-3" />}
               </button>
            </div>
          </div>

          {/* Node List */}
          <div className="space-y-3">
            <h3 className="text-xs text-zinc-500 font-mono tracking-widest uppercase border-b border-zinc-800 pb-2">Human Nodes Awaiting Compensation</h3>
            
            {nodes.map((node) => (
              <div 
                key={node.id}
                className="flex flex-col md:flex-row items-start md:items-center justify-between p-4 bg-zinc-900/40 border border-zinc-800/50 rounded-xl hover:border-amber-500/30 transition-colors gap-4"
              >
                <div className="flex items-center gap-4">
                  <div className={`p-2 rounded bg-zinc-950 border ${node.status === 'authorized' ? 'border-emerald-500/50 text-emerald-500' : 'border-zinc-800 text-zinc-500'}`}>
                    <Fingerprint className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-sm text-white font-mono tracking-widest">{node.designation}</p>
                    <p className="text-[10px] text-zinc-500 font-mono tracking-widest">ID: {node.id}</p>
                  </div>
                </div>

                <div className="flex-1 w-full md:w-auto flex flex-col md:flex-row items-center justify-center gap-8 border-y md:border-y-0 md:border-x border-zinc-800/50 py-3 md:py-0 md:px-8">
                  <div className="flex flex-col items-center">
                    <span className="text-[9px] text-zinc-500 uppercase tracking-widest font-mono mb-1">Intelligence Wt.</span>
                    <div className="flex items-center gap-2">
                      <Brain className="w-4 h-4 text-violet-500" />
                      <span className="text-base text-violet-400 font-mono">{node.intelligenceWeight.toFixed(2)}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-col items-center">
                    <span className="text-[9px] text-zinc-500 uppercase tracking-widest font-mono mb-1">Resonance</span>
                    <div className="flex items-center gap-2">
                      <Activity className="w-4 h-4 text-blue-500" />
                      <span className="text-base text-blue-400 font-mono">{node.resonanceFreq.toFixed(1)} Hz</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between md:justify-end gap-6 w-full md:w-auto">
                  <div className="text-right">
                    <span className="text-[9px] text-zinc-500 uppercase tracking-widest font-mono block mb-1">Calculated Payout</span>
                    <span className="text-lg text-amber-500 font-mono">{node.allocatedCurrency.toLocaleString()} TSC</span>
                  </div>
                  <div className="flex items-center justify-center w-8 h-8">
                    {node.status === 'authorized' ? (
                      <ShieldCheck className="w-5 h-5 text-emerald-500" />
                    ) : (
                      <ArrowRight className="w-5 h-5 text-zinc-600" />
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}
