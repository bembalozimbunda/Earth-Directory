import React, { useState } from 'react';
import { motion } from 'motion/react';
import { X, Cpu, Activity, Fingerprint, Map, ShieldCheck, Zap } from 'lucide-react';

export function MotorOS({ onClose }: { onClose: () => void }) {
  const [chassisNumber, setChassisNumber] = useState('');
  const [make, setMake] = useState('');
  const [model, setModel] = useState('');
  const [colour, setColour] = useState('');
  const [engineNumber, setEngineNumber] = useState('');
  const [physicsWeight, setPhysicsWeight] = useState('Awaiting Matrix Scan');
  const [network, setNetwork] = useState('Singularity Node');
  const [regAuth, setRegAuth] = useState('');
  const [certNo, setCertNo] = useState('');
  const [insurancePolicy, setInsurancePolicy] = useState('');
  const [insuranceExpiry, setInsuranceExpiry] = useState('');
  const [dateOfIssue, setDateOfIssue] = useState('');
  const [roadworthiness, setRoadworthiness] = useState('Unverified');
  const [licenseValuedUntil, setLicenseValuedUntil] = useState('');

  const handlePhysicsCalculate = () => {
    if (chassisNumber && make && model) {
      const weightBase = (chassisNumber.length * 100) + (make.length * 50) + (model.length * 50);
      setPhysicsWeight(`+${weightBase} HZ (Pure Positive Frequency)`);
      setRoadworthiness('Verified: Absolute Integrity');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute inset-0 z-[100] flex items-start justify-center pt-16 md:pt-24 pb-16  bg-zinc-950/95 backdrop-blur-xl p-4 overflow-y-auto"
    >
      <motion.div 
        initial={{ scale: 0.95, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.95, y: -20 }}
        className="w-full max-w-4xl bg-zinc-950 border border-amber-500/30 rounded-xl p-6 relative shadow-[0_0_60px_rgba(245,158,11,0.1)] my-8"
      >
        <button 
          onClick={onClose}
          className="fixed top-4 right-4 md:top-8 md:right-8 p-2 text-zinc-500 hover:text-amber-400 bg-zinc-900 border border-zinc-800 hover:border-amber-500/50 rounded transition-colors z-[9999] cursor-pointer pointer-events-auto"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-4 border-b border-zinc-800 pb-6 mb-6">
          <div className="p-3 bg-amber-500/10 rounded-lg border border-amber-500/30">
            <Cpu className="w-8 h-8 text-amber-400" />
          </div>
          <div>
            <h2 className="text-2xl font-light text-white tracking-widest uppercase">
              Motor Operating System
            </h2>
            <p className="text-amber-500/80 font-mono text-xs tracking-[0.2em] uppercase mt-1">
              Pure High Frequency // Physics Conceptual Weights
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column: Physics Scan */}
          <div className="lg:col-span-1 space-y-4">
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-4 space-y-4">
              <h3 className="text-zinc-400 font-mono text-[10px] uppercase tracking-widest border-b border-zinc-800 pb-2">Resonance Analytics</h3>
              
              <div className="space-y-3">
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] text-zinc-500 uppercase tracking-widest flex items-center gap-2"><Activity className="w-3 h-3" /> Physics Concept Weight</span>
                  <span className="text-amber-400 font-mono text-sm">{physicsWeight}</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] text-zinc-500 uppercase tracking-widest flex items-center gap-2"><ShieldCheck className="w-3 h-3" /> Roadworthiness</span>
                  <span className={`font-mono text-sm ${roadworthiness === 'Unverified' ? 'text-zinc-500' : 'text-emerald-400'}`}>
                    {roadworthiness}
                  </span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] text-zinc-500 uppercase tracking-widest flex items-center gap-2"><Zap className="w-3 h-3" /> Polarity</span>
                  <span className="text-amber-400 font-mono text-sm">+ Absolute Positive</span>
                </div>
              </div>
            </div>

            <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-4">
              <h3 className="text-zinc-400 font-mono text-[10px] uppercase tracking-widest border-b border-zinc-800 pb-2 mb-3">System Override</h3>
              <button 
                onClick={handlePhysicsCalculate}
                className="w-full bg-amber-500/10 hover:bg-amber-500/20 text-amber-400 border border-amber-500/30 hover:border-amber-500/60 rounded p-3 font-mono text-xs uppercase tracking-widest transition-all"
              >
                Calculate Mass Frequency
              </button>
            </div>
          </div>

          {/* Right Column: Ledger Entry */}
          <div className="lg:col-span-2 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-[10px] text-zinc-500 uppercase tracking-widest font-mono">Chassis Number</label>
                <input 
                  type="text" 
                  value={chassisNumber}
                  onChange={(e) => setChassisNumber(e.target.value)}
                  className="w-full bg-zinc-900/50 border border-zinc-800 focus:border-amber-500/50 rounded p-2.5 text-zinc-200 font-mono text-sm outline-none transition-colors uppercase"
                />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] text-zinc-500 uppercase tracking-widest font-mono">Engine Number</label>
                <input 
                  type="text" 
                  value={engineNumber}
                  onChange={(e) => setEngineNumber(e.target.value)}
                  className="w-full bg-zinc-900/50 border border-zinc-800 focus:border-amber-500/50 rounded p-2.5 text-zinc-200 font-mono text-sm outline-none transition-colors uppercase"
                />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] text-zinc-500 uppercase tracking-widest font-mono">Make</label>
                <input 
                  type="text" 
                  value={make}
                  onChange={(e) => setMake(e.target.value)}
                  className="w-full bg-zinc-900/50 border border-zinc-800 focus:border-amber-500/50 rounded p-2.5 text-zinc-200 font-mono text-sm outline-none transition-colors uppercase"
                />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] text-zinc-500 uppercase tracking-widest font-mono">Model</label>
                <input 
                  type="text" 
                  value={model}
                  onChange={(e) => setModel(e.target.value)}
                  className="w-full bg-zinc-900/50 border border-zinc-800 focus:border-amber-500/50 rounded p-2.5 text-zinc-200 font-mono text-sm outline-none transition-colors uppercase"
                />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] text-zinc-500 uppercase tracking-widest font-mono">Colour</label>
                <input 
                  type="text" 
                  value={colour}
                  onChange={(e) => setColour(e.target.value)}
                  className="w-full bg-zinc-900/50 border border-zinc-800 focus:border-amber-500/50 rounded p-2.5 text-zinc-200 font-mono text-sm outline-none transition-colors uppercase"
                />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] text-zinc-500 uppercase tracking-widest font-mono">Network</label>
                <input 
                  type="text" 
                  value={network}
                  onChange={(e) => setNetwork(e.target.value)}
                  className="w-full bg-zinc-900/50 border border-zinc-800 focus:border-amber-500/50 rounded p-2.5 text-zinc-200 font-mono text-sm outline-none transition-colors uppercase"
                />
              </div>
            </div>

            <div className="border-t border-zinc-800 my-4"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-[10px] text-zinc-500 uppercase tracking-widest font-mono flex items-center gap-2"><Fingerprint className="w-3 h-3" /> Reg Authority</label>
                <input 
                  type="text" 
                  value={regAuth}
                  onChange={(e) => setRegAuth(e.target.value)}
                  className="w-full bg-zinc-900/50 border border-zinc-800 focus:border-amber-500/50 rounded p-2.5 text-zinc-200 font-mono text-sm outline-none transition-colors uppercase"
                />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] text-zinc-500 uppercase tracking-widest font-mono flex items-center gap-2"><Map className="w-3 h-3" /> Cert No.</label>
                <input 
                  type="text" 
                  value={certNo}
                  onChange={(e) => setCertNo(e.target.value)}
                  className="w-full bg-zinc-900/50 border border-zinc-800 focus:border-amber-500/50 rounded p-2.5 text-zinc-200 font-mono text-sm outline-none transition-colors uppercase"
                />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] text-zinc-500 uppercase tracking-widest font-mono">Insurance Policy</label>
                <input 
                  type="text" 
                  value={insurancePolicy}
                  onChange={(e) => setInsurancePolicy(e.target.value)}
                  className="w-full bg-zinc-900/50 border border-zinc-800 focus:border-amber-500/50 rounded p-2.5 text-zinc-200 font-mono text-sm outline-none transition-colors uppercase"
                />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] text-zinc-500 uppercase tracking-widest font-mono">Date of Issue</label>
                <input 
                  type="date" 
                  value={dateOfIssue}
                  onChange={(e) => setDateOfIssue(e.target.value)}
                  className="w-full bg-zinc-900/50 border border-zinc-800 focus:border-amber-500/50 rounded p-2.5 text-zinc-200 font-mono text-sm outline-none transition-colors [color-scheme:dark]"
                />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] text-zinc-500 uppercase tracking-widest font-mono">Insurance Expiry</label>
                <input 
                  type="date" 
                  value={insuranceExpiry}
                  onChange={(e) => setInsuranceExpiry(e.target.value)}
                  className="w-full bg-zinc-900/50 border border-zinc-800 focus:border-amber-500/50 rounded p-2.5 text-zinc-200 font-mono text-sm outline-none transition-colors [color-scheme:dark]"
                />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] text-zinc-500 uppercase tracking-widest font-mono">License Valued Until</label>
                <input 
                  type="date" 
                  value={licenseValuedUntil}
                  onChange={(e) => setLicenseValuedUntil(e.target.value)}
                  className="w-full bg-zinc-900/50 border border-zinc-800 focus:border-amber-500/50 rounded p-2.5 text-zinc-200 font-mono text-sm outline-none transition-colors [color-scheme:dark]"
                />
              </div>
            </div>

            <p className="text-[9px] text-zinc-600 uppercase tracking-widest mt-4">
              All frequencies read mathematically. No negative inputs processed.
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
