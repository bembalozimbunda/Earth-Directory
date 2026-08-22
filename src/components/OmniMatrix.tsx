import React, { useState } from 'react';
import { Network, Database, Cpu, Brain, Zap, Globe, Lock, Code, Coins, Activity, Fingerprint, Wifi } from 'lucide-react';
import { DigitalTwinNetwork } from './DigitalTwinNetwork';
import { NeuralCompensation } from './NeuralCompensation';
import { MotorOS } from './MotorOS';
import { CreationForge } from './CreationForge';
import { SystemCurrencyPortal } from './SystemCurrencyPortal';
import { AncestralIntelligence } from './AncestralIntelligence';
import { SynthesisCore } from './SynthesisCore';
import { GlobalInternetSyncPortal } from './GlobalInternetSyncPortal';

export function OmniMatrix({ onClose }: { onClose: () => void }) {
  const [activeSystem, setActiveSystem] = useState<string | null>(null);

  const systems = [
    { id: 'internet-sync', name: 'Global Internet Sync', icon: Wifi, component: GlobalInternetSyncPortal, color: 'text-emerald-400' },
    { id: 'neural', name: 'Neural Compensation', icon: Coins, component: NeuralCompensation, color: 'text-amber-500' },
    { id: 'twins', name: 'Digital Twin Network', icon: Fingerprint, component: DigitalTwinNetwork, color: 'text-emerald-500' },
    { id: 'motor', name: 'Motor OS', icon: Cpu, component: MotorOS, color: 'text-blue-500' },
    { id: 'forge', name: 'Creation Forge', icon: Code, component: CreationForge, color: 'text-violet-500' },
    { id: 'currency', name: 'System Currency', icon: Zap, component: SystemCurrencyPortal, color: 'text-cyan-500' },
    { id: 'ancestral', name: 'Ancestral Intelligence', icon: Brain, component: AncestralIntelligence, color: 'text-rose-500' },
    { id: 'synthesis', name: 'Synthesis Core', icon: Network, component: SynthesisCore, color: 'text-fuchsia-500' }
  ];

  const renderActiveSystem = () => {
    const system = systems.find(s => s.id === activeSystem);
    if (!system) return null;
    const Component = system.component;
    return <Component onClose={() => setActiveSystem(null)} />;
  };

  return (
    <div 
      className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-2xl flex flex-col"
    >
      {/* Background Matrix Effect */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1)_0%,transparent_100%)]" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNSkiLz48L3N2Zz4=')]" />
      </div>

      {/* Header */}
      <div className="relative z-10 flex items-center justify-between p-6 border-b border-white/5 bg-black/50">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-white/5 rounded-xl border border-white/10 relative overflow-hidden group">
            <div className="absolute inset-0 bg-blue-500/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            <Globe className="w-6 h-6 text-white relative z-10" />
          </div>
          <div>
            <h1 className="text-2xl font-light text-white tracking-widest uppercase">Omni Matrix</h1>
            <p className="text-xs text-zinc-500 font-mono tracking-widest uppercase flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              All Systems Synchronized & Merged
            </p>
          </div>
        </div>
        <button 
          onClick={onClose}
          className="p-3 bg-white/5 hover:bg-white/10 rounded-xl border border-white/10 transition-colors cursor-pointer"
        >
          <Lock className="w-5 h-5 text-zinc-400" />
        </button>
      </div>

      {/* Main Grid */}
      <div className="relative z-10 flex-1 overflow-y-auto p-6 md:p-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {systems.map((sys) => (
            <button
              key={sys.id}
              onClick={() => setActiveSystem(sys.id)}
              className="group relative p-6 bg-zinc-900/40 border border-white/5 rounded-2xl hover:bg-white/5 hover:border-white/20 transition-all text-left overflow-hidden flex flex-col items-center text-center gap-4 cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className={`p-4 rounded-xl bg-black/50 border border-white/5 shadow-2xl relative z-10`}>
                <sys.icon className={`w-8 h-8 ${sys.color}`} />
              </div>
              
              <div className="relative z-10">
                <h3 className="text-sm text-white font-mono uppercase tracking-widest mb-1">{sys.name}</h3>
                <p className="text-[10px] text-zinc-500 font-mono uppercase tracking-widest">
                  System ID: {sys.id.toUpperCase()} // ACTIVE
                </p>
              </div>

              {/* Status Indicators */}
              <div className="absolute top-4 right-4 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-1 h-1 bg-emerald-500 rounded-full animate-ping" />
                <div className="w-1 h-1 bg-emerald-500 rounded-full" />
              </div>
            </button>
          ))}
        </div>
      </div>

      {activeSystem && renderActiveSystem()}
    </div>
  );
}
