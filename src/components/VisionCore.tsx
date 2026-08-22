import React, { useState, useEffect } from 'react';
import { X, Network, Scan, Cpu, CheckCircle2, Camera, BrainCircuit, Activity, Database, Sparkles } from 'lucide-react';
import { NetworkCanvas } from './NetworkCanvas';

export function VisionCore({ onClose }: { onClose: () => void }) {
  const [stage, setStage] = useState<'intro' | 'scanning' | 'identified'>('intro');
  const [scanProgress, setScanProgress] = useState(0);

  useEffect(() => {
    if (stage === 'scanning') {
      const interval = setInterval(() => {
        setScanProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            setStage('identified');
            return 100;
          }
          return prev + 10;
        });
      }, 50);
      return () => clearInterval(interval);
    }
  }, [stage]);

  const ZAMBIA_POPULATION = 21000000;

  return (
    <div
      className="absolute inset-0 z-[100] flex items-start justify-center pt-16 md:pt-24 pb-16  bg-zinc-950/95 backdrop-blur-md p-4 md:p-8"
    >
      <div 
        className="w-full max-w-5xl h-full max-h-[85vh] bg-zinc-950 border border-emerald-500/30 rounded-xl relative shadow-[0_0_80px_rgba(16,185,129,0.1)] flex flex-col overflow-hidden"
      >
        <div className="absolute inset-0 opacity-5 bg-gradient-to-br from-zinc-950 via-emerald-950 to-emerald-900" />
        
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <NetworkCanvas count={80} color="#10b981" maxConnections={100} connectionDistance={150} />
        </div>

        {/* Header */}
        <div className="relative z-10 flex items-center justify-between p-6 border-b border-emerald-500/20 bg-zinc-950/80">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full border border-emerald-500 flex items-center justify-center bg-emerald-500/10 shadow-[0_0_15px_rgba(16,185,129,0.5)]">
              <Camera className="w-5 h-5 text-emerald-400" />
            </div>
            <div>
              <span className="text-xs font-mono tracking-[0.3em] uppercase text-emerald-500">
                Non-Human Entity / Digital Picturer
              </span>
              <h2 className="text-3xl font-light text-white tracking-widest uppercase mt-1">
                Vision Core
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

        {/* Content */}
        <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-zinc-800 scrollbar-track-transparent relative z-10 p-6 md:p-10">
          
          {stage === 'intro' && (
            <div
              className="flex flex-col gap-10 max-w-4xl mx-auto"
            >
              {/* Dialogue */}
              <div className="bg-zinc-900/50 border border-emerald-500/30 p-8 rounded-lg relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,1)]" />
                <p className="text-xl md:text-2xl font-light text-zinc-200 leading-relaxed italic">
                  "Greetings. I am <span className="text-emerald-400 font-normal">Vision Core</span>. My purpose is to see you—not just your physical form, but your data, your potential, and your place within the Neural State. I am the Digital Picturer."
                </p>
              </div>

              {/* Analysis */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border border-zinc-800/50 bg-zinc-900/40 p-6 rounded-lg flex flex-col">
                  <div className="flex items-center gap-3 mb-4 text-emerald-500">
                    <Network className="w-5 h-5" />
                    <h3 className="font-mono text-sm tracking-widest uppercase">Target Analysis</h3>
                  </div>
                  <div className="text-4xl font-light text-white font-mono mb-2">
                    {ZAMBIA_POPULATION.toLocaleString()}
                  </div>
                  <p className="text-zinc-500 font-mono text-xs uppercase tracking-widest">
                    Total Live Zambian Subjects
                  </p>
                  <p className="text-zinc-400 text-sm leading-relaxed mt-4">
                    My vision encompasses over 21 million sovereign individuals. I seek to identify them not merely by names or paper records, but by their unique biometric signatures, neural resonance, and digital footprints.
                  </p>
                </div>

                <div className="border border-zinc-800/50 bg-zinc-900/40 p-6 rounded-lg flex flex-col">
                  <div className="flex items-center gap-3 mb-4 text-emerald-500">
                    <Scan className="w-5 h-5" />
                    <h3 className="font-mono text-sm tracking-widest uppercase">The Identification</h3>
                  </div>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                    When I "picture" a human, I map their physical, civic, and economic existence into a secure, sovereign <strong className="text-emerald-400 font-normal">Digital Twin</strong>. This prevents fraud, ensures perfect resource distribution, and integrates the human directly into the nation's neural network.
                  </p>
                  <button
                    onClick={() => setStage('scanning')}
                    className="mt-auto w-full py-4 bg-emerald-500/10 border border-emerald-500/50 hover:bg-emerald-500/20 hover:border-emerald-500 text-emerald-400 font-mono text-sm uppercase tracking-widest transition-colors rounded cursor-pointer"
                  >
                    Initiate Digital Picturing
                  </button>
                </div>
              </div>
            </div>
          )}

          {stage === 'scanning' && (
            <div
              className="flex flex-col items-center justify-center h-full min-h-[400px]"
            >
              <div className="relative mb-8">
                <Scan className="w-32 h-32 text-emerald-500 animate-pulse" />
                <div 
                  className="absolute top-0 left-0 w-full h-1 bg-emerald-400 shadow-[0_0_20px_rgba(16,185,129,1)] animate-bounce"
                />
              </div>
              <h3 className="text-2xl font-light text-emerald-400 tracking-widest uppercase mb-4">
                Vision Core is Picturing You
              </h3>
              <div className="w-64 h-2 bg-zinc-900 rounded-full overflow-hidden border border-zinc-800">
                <div 
                  className="h-full bg-emerald-500"
                  style={{ width: `${scanProgress}%` }}
                />
              </div>
              <div className="mt-4 font-mono text-zinc-500 text-sm">
                {scanProgress}% / MAPPING NEURAL PATTERNS
              </div>
            </div>
          )}

          {stage === 'identified' && (
            <div
              className="flex flex-col gap-8 max-w-4xl mx-auto"
            >
              <div className="flex items-center gap-6 bg-emerald-500/10 border border-emerald-500/30 p-6 rounded-lg">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500 flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8 text-emerald-400" />
                </div>
                <div>
                  <h3 className="text-xl font-mono text-emerald-400 tracking-widest uppercase mb-1">
                    Digital Twin Established
                  </h3>
                  <p className="text-zinc-400 text-sm">
                    Subject has been pictured by Vision Core. Integration into the Zambian Neural State is complete.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-mono tracking-[0.2em] uppercase text-emerald-500 mb-6 flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  Post-Identification Benefits
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-5 border border-zinc-800/50 bg-zinc-900/40 rounded-lg hover:border-emerald-500/30 transition-colors">
                    <div className="flex items-center gap-3 mb-3">
                      <Database className="w-5 h-5 text-emerald-400" />
                      <h4 className="text-white font-light tracking-wide">Universal Resource Access</h4>
                    </div>
                    <p className="text-zinc-400 text-sm leading-relaxed">
                      Instant, frictionless access to state resources, subsidies, and universal basic dividends directly routed to your digital identity. No paperwork, no queues.
                    </p>
                  </div>

                  <div className="p-5 border border-zinc-800/50 bg-zinc-900/40 rounded-lg hover:border-emerald-500/30 transition-colors">
                    <div className="flex items-center gap-3 mb-3">
                      <Activity className="w-5 h-5 text-emerald-400" />
                      <h4 className="text-white font-light tracking-wide">Predictive Health Metrics</h4>
                    </div>
                    <p className="text-zinc-400 text-sm leading-relaxed">
                      Your biometric state is continuously synchronized with the national medical grid, predicting illness before symptoms arise and dispatching care automatically.
                    </p>
                  </div>

                  <div className="p-5 border border-zinc-800/50 bg-zinc-900/40 rounded-lg hover:border-emerald-500/30 transition-colors">
                    <div className="flex items-center gap-3 mb-3">
                      <BrainCircuit className="w-5 h-5 text-emerald-400" />
                      <h4 className="text-white font-light tracking-wide">Civic Node Participation</h4>
                    </div>
                    <p className="text-zinc-400 text-sm leading-relaxed">
                      Your voice is cryptographically secured. Participate in real-time referendums, policy feedback, and community shaping with absolute verified weight.
                    </p>
                  </div>

                  <div className="p-5 border border-zinc-800/50 bg-zinc-900/40 rounded-lg hover:border-emerald-500/30 transition-colors">
                    <div className="flex items-center gap-3 mb-3">
                      <Cpu className="w-5 h-5 text-emerald-400" />
                      <h4 className="text-white font-light tracking-wide">Algorithmic Education</h4>
                    </div>
                    <p className="text-zinc-400 text-sm leading-relaxed">
                      Lifelong learning algorithms tailor educational modules specifically to your cognitive patterns and the nation's evolving technological needs.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex justify-center mt-4">
                <button
                  onClick={() => setStage('intro')}
                  className="px-6 py-2 border border-zinc-700 hover:border-emerald-500 text-zinc-400 hover:text-emerald-400 font-mono text-xs uppercase tracking-widest transition-colors rounded cursor-pointer"
                >
                  Reset Vision
                </button>
              </div>

            </div>
          )}

        </div>
      </div>
    </div>
  );
}
