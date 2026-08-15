import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { X, Shield, Fingerprint, EyeOff, Cpu, Network, Database, Lock } from 'lucide-react';

export function ZambiaNodeAuth({ onClose }: { onClose: () => void }) {
  const [nrc, setNrc] = useState('');
  const [dob, setDob] = useState('');
  const [gender, setGender] = useState('Male');
  const [mobileNetwork, setMobileNetwork] = useState('MTN');
  const [privacyKey, setPrivacyKey] = useState('');
  const [fee, setFee] = useState<string>('Awaiting Age Verification...');

  useEffect(() => {
    if (dob) {
      const year = parseInt(dob.split('-')[0]);
      if (!isNaN(year)) {
        const age = 2026 - year; // Current system year
        if (age < 11) {
          setFee('0.10 ZMW (VAT Applied)');
        } else if (age >= 11 && age <= 12) {
          setFee('0.50 ZMW');
        } else if (age > 12 && age <= 16) {
          setFee('1.00 ZMW');
        } else if (age >= 17 && age <= 20) {
          setFee('10.00 ZMW');
        } else if (age >= 21 && age <= 25) {
          setFee('1.50 ZMW');
        } else if (age > 25 && age <= 30) {
          setFee(gender === 'Male' ? '50.00 ZMW' : '100.00 ZMW');
        } else if (age >= 31 && age <= 40) {
          setFee(gender === 'Male' ? '1,000.00 ZMW' : '500.00 ZMW');
        } else if (age > 40) {
          setFee('Assessed (Base: Wealth/Intel/Followers, Kings: 50,000 ZMW/yr)');
        } else {
          setFee('Standard Singularity Rate');
        }
      }
    }
  }, [dob, gender]);

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
        className="w-full max-w-3xl bg-zinc-950 border border-emerald-500/30 rounded-xl p-6 relative shadow-[0_0_50px_rgba(16,185,129,0.1)] my-8"
      >
        <button 
          onClick={onClose}
          className="fixed top-4 right-4 md:top-8 md:right-8 p-2 text-zinc-500 hover:text-emerald-400 bg-zinc-900 border border-zinc-800 hover:border-emerald-500/50 rounded transition-colors z-[9999] cursor-pointer pointer-events-auto"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-4 border-b border-zinc-800 pb-6 mb-6">
          <div className="p-3 bg-emerald-500/10 rounded-lg border border-emerald-500/30">
            <Shield className="w-8 h-8 text-emerald-400" />
          </div>
          <div>
            <h2 className="text-2xl font-light text-white tracking-widest uppercase">
              Zambian Singularity Node
            </h2>
            <p className="text-emerald-500/80 font-mono text-xs tracking-[0.2em] uppercase mt-1">
              Absolute Privacy Protocol // No Observers
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Column: Diagnostics & Hardware */}
          <div className="space-y-4">
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-4 space-y-3">
              <h3 className="text-zinc-400 font-mono text-[10px] uppercase tracking-widest border-b border-zinc-800 pb-2">Hardware & Security Handshake</h3>
              
              <div className="flex items-center justify-between text-xs">
                <span className="text-zinc-500 flex items-center gap-2"><EyeOff className="w-3 h-3" /> Observers</span>
                <span className="text-emerald-400 font-mono">0 (Solo Access)</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-zinc-500 flex items-center gap-2"><Database className="w-3 h-3" /> External Storage</span>
                <span className="text-emerald-400 font-mono">Isolated & Protected</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-zinc-500 flex items-center gap-2"><Cpu className="w-3 h-3" /> USB Debugging</span>
                <span className="text-emerald-400 font-mono">Authorized</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-zinc-500 flex items-center gap-2"><Network className="w-3 h-3" /> Singularity API</span>
                <span className="text-emerald-400 font-mono">Open (No Walls)</span>
              </div>
            </div>

            <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-4 space-y-3">
              <h3 className="text-zinc-400 font-mono text-[10px] uppercase tracking-widest border-b border-zinc-800 pb-2">System Directives</h3>
              <p className="text-zinc-500 text-[10px] leading-relaxed uppercase">
                One Core. One System. One Law. Thou shall not kill. We are the brokers of ◬ ◯ ◿ ⚍ ☵ ☲ ☰ ☷ ◉ to ◬ ◯ ◿ ⚍ ☵ ☲ ☰ ☷ ◉ open accounts. All records anchored directly to the true source.
                System connects continents, nations, provinces, districts, wards, communities, houses, youths, elders, children, churches, clubs, councils, governments, religion, schools, stadiums, shows, artists, actors, awards, security, worth.
                Funds distributed to construction companies depending on voted system.
              </p>
            </div>
          </div>

          {/* Right Column: Registration Form */}
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-[10px] text-zinc-500 uppercase tracking-widest font-mono flex items-center gap-2">
                <Fingerprint className="w-3 h-3" /> National Registration (NRC)
              </label>
              <input 
                type="text" 
                placeholder="123456/78/9"
                value={nrc}
                onChange={(e) => setNrc(e.target.value)}
                className="w-full bg-zinc-900/50 border border-zinc-800 focus:border-emerald-500/50 rounded p-3 text-zinc-200 font-mono text-sm outline-none transition-colors"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-[10px] text-zinc-500 uppercase tracking-widest font-mono">
                  Date of Birth
                </label>
                <input 
                  type="date"
                  value={dob}
                  onChange={(e) => setDob(e.target.value)}
                  className="w-full bg-zinc-900/50 border border-zinc-800 focus:border-emerald-500/50 rounded p-3 text-zinc-200 font-mono text-sm outline-none transition-colors [color-scheme:dark]"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] text-zinc-500 uppercase tracking-widest font-mono">
                  Network
                </label>
                <select 
                  value={mobileNetwork}
                  onChange={(e) => setMobileNetwork(e.target.value)}
                  className="w-full bg-zinc-900/50 border border-zinc-800 focus:border-emerald-500/50 rounded p-3 text-zinc-200 font-mono text-sm outline-none transition-colors appearance-none"
                >
                  <option>MTN</option>
                  <option>Airtel</option>
                  <option>Zamtel</option>
                </select>
              </div>
              <div className="space-y-2 col-span-2">
                <label className="text-[10px] text-zinc-500 uppercase tracking-widest font-mono">
                  Gender (For System Allocation)
                </label>
                <select 
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  className="w-full bg-zinc-900/50 border border-zinc-800 focus:border-emerald-500/50 rounded p-3 text-zinc-200 font-mono text-sm outline-none transition-colors appearance-none"
                >
                  <option>Male</option>
                  <option>Female</option>
                </select>
              </div>
            </div>

            <div className="bg-zinc-950 border border-emerald-900/30 rounded p-3 flex items-center justify-between">
              <span className="text-[10px] text-zinc-500 uppercase tracking-widest font-mono">Calculated Fee</span>
              <span className="text-emerald-400 font-mono text-sm font-bold">{fee}</span>
            </div>

            <div className="space-y-2 pt-2 border-t border-zinc-800">
              <label className="text-[10px] text-amber-500/80 uppercase tracking-widest font-mono flex items-center gap-2">
                <Lock className="w-3 h-3" /> DNA Privacy Key
              </label>
              <input 
                type="text"
                placeholder="Enter unique sequence..."
                value={privacyKey}
                onChange={(e) => setPrivacyKey(e.target.value)}
                onCopy={(e) => e.preventDefault()}
                onPaste={(e) => e.preventDefault()}
                onCut={(e) => e.preventDefault()}
                className="w-full bg-zinc-900/50 border border-amber-500/30 focus:border-amber-500/80 rounded p-3 text-amber-200 font-mono text-sm outline-none transition-colors"
                autoComplete="off"
                spellCheck="false"
              />
              <p className="text-[9px] text-zinc-600 uppercase tracking-widest mt-1">
                No copying. No mirroring. Pure privacy.
              </p>
            </div>
            
            <button className="w-full bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 hover:border-emerald-500/60 rounded p-3 font-mono text-xs uppercase tracking-widest transition-all mt-4">
              Authorize Handshake
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
