import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Fingerprint, Radio, Globe, Code2, Sun, ArrowLeft } from 'lucide-react';
import { cn } from '../utils';
import { CONTINENTS } from '../data/continents';

const coreNodes = [
  { id: 'source', label: 'Unseen Source', icon: Code2, color: 'text-emerald-400', aura: 'bg-emerald-500' },
  { id: 'hardware', label: 'Hardware & Blood', icon: Fingerprint, color: 'text-red-400', aura: 'bg-red-500' },
  { id: 'frequencies', label: 'Frequencies', icon: Radio, color: 'text-indigo-400', aura: 'bg-indigo-500' },
  { id: 'ancestral', label: 'Ancestral', icon: Globe, color: 'text-amber-400', aura: 'bg-amber-500' },
];

interface SynthesisCoreProps {
  onContinentSelect?: (continentId: string) => void;
  masterUnlocked?: boolean;
}

export function SynthesisCore({ onContinentSelect, masterUnlocked }: SynthesisCoreProps) {
  const [tapCounts, setTapCounts] = useState<Record<string, number>>({});
  const [fullColorId, setFullColorId] = useState<string | null>(null);
  const tapTimerRef = useRef<NodeJS.Timeout | null>(null);
  const [ripples, setRipples] = useState<{ id: string; nodeId: string }[]>([]);

  const playResonance = (baseFreq: number) => {
    try {
      const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
      const ctx = new AudioContext();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(baseFreq, ctx.currentTime);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      gain.gain.exponentialRampToValueAtTime(0.00001, ctx.currentTime + 3);
      osc.stop(ctx.currentTime + 3);
    } catch (e) {}
  };
  
  const [activeObservers, setActiveObservers] = useState(1);
  
  useEffect(() => {
    const ping = () => {
      fetch('/api/heartbeat', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ clientId: localStorage.getItem('client_id') }) })
        .then(r => r.json())
        .then(data => {
          if (data.clientId && !localStorage.getItem('client_id')) localStorage.setItem('client_id', data.clientId);
          if (data.count) setActiveObservers(data.count);
        }).catch(() => {});
    };
    ping();
    const interval = setInterval(ping, 10000);
    return () => clearInterval(interval);
  }, []);


  const handleOrbClick = (e: React.MouseEvent | React.TouchEvent, id: string) => {
    e.stopPropagation();
    const newCount = (tapCounts[id] || 0) + 1;
    
    // Pure visual reaction - independent dance
    const rippleId = Math.random().toString(36).substring(7);
    const frequencies: Record<string, number> = {
      'af': 432, 'eu': 528, 'as': 639, 'na': 741, 'sa': 852, 'oc': 963, 'an': 396,
      'source': 174, 'hardware': 285, 'frequencies': 417, 'ancestral': 528, 'true-sun': 108
    };
    playResonance(frequencies[id] || 432);
    setRipples(prev => [...prev, { id: rippleId, nodeId: id }]);
    setTimeout(() => {
      setRipples(prev => prev.filter(r => r.id !== rippleId));
    }, 1500);

    if (newCount >= 33) {
      setFullColorId(id);
      setTapCounts({});
      if (tapTimerRef.current) clearTimeout(tapTimerRef.current);
    } else {
      setTapCounts(prev => ({ ...prev, [id]: newCount }));
      
      if (tapTimerRef.current) clearTimeout(tapTimerRef.current);
      tapTimerRef.current = setTimeout(() => {
        if (onContinentSelect) onContinentSelect(id);
        // Also dispatch a custom event that TerminalLog can listen to if it's a core node
        if (['source', 'hardware', 'frequencies', 'ancestral'].includes(id)) {
           window.dispatchEvent(new CustomEvent('coreNodeClick', { detail: id }));
        }
        setTapCounts({});
      }, 600);
    }
  };

  const FULL_COLORS: Record<string, string> = {
    'af': 'color(display-p3 0.9 0.1 0.25)',
    'as': 'color(display-p3 0.05 0.8 0.4)',
    'eu': 'color(display-p3 0.5 0.1 0.9)',
    'na': 'color(display-p3 0.9 0.5 0.05)',
    'sa': 'color(display-p3 0.8 0.1 0.8)',
    'oc': 'color(display-p3 0.05 0.8 0.8)',
    'an': 'color(display-p3 0.1 0.3 0.9)',
    'ns': 'color(display-p3 0.6 0.6 0.6)',
    'source': 'color(display-p3 0.2 0.9 0.6)',
    'hardware': 'color(display-p3 0.9 0.2 0.3)',
    'frequencies': 'color(display-p3 0.4 0.3 0.9)',
    'ancestral': 'color(display-p3 0.9 0.6 0.1)',
    'true-sun': 'color(display-p3 1 0.8 0.2)',
  };

  const FALLBACK_COLORS: Record<string, string> = {
    'af': '#e11d48',
    'as': '#059669',
    'eu': '#7c3aed',
    'na': '#d97706',
    'sa': '#c026d3',
    'oc': '#0891b2',
    'an': '#2563eb',
    'ns': '#64748b',
    'source': '#10b981',
    'hardware': '#ef4444',
    'frequencies': '#6366f1',
    'ancestral': '#f59e0b',
    'true-sun': '#fbbf24',
  };

  const DEEP_COLORS: Record<string, string> = {
    'af': '#4c0519',
    'as': '#022c22',
    'eu': '#2e1065',
    'na': '#451a03',
    'sa': '#4a044e',
    'oc': '#083344',
    'an': '#172554',
    'ns': '#0f172a',
    'source': '#022c22',
    'hardware': '#450a0a',
    'frequencies': '#1e1b4b',
    'ancestral': '#451a03',
    'true-sun': '#451a03',
  };

  return (
    <div className="relative w-full aspect-square max-w-[700px] flex items-center justify-center">
      
      {/* Continents (Outer Orbit) */}
      {CONTINENTS.map((continent, i) => {
        const angle = (i * 360) / CONTINENTS.length;
        const currentTaps = tapCounts[continent.id] || 0;
        
        const colors = (() => {
          switch (continent.id) {
            case 'af': return { from: 'from-rose-400/50', via: 'via-rose-600/40', border: 'border-rose-500/50', hoverBorder: 'group-hover:border-rose-400/80', shadow: 'shadow-[0_0_30px_rgba(225,29,72,0.4)]', shadowHover: 'group-hover:shadow-[0_0_60px_rgba(244,63,94,0.8)]', blur: 'bg-rose-500/30', textTitle: 'text-rose-50/90', textSub: 'text-rose-400/90', aura: 'bg-rose-500 mix-blend-screen' };
            case 'as': return { from: 'from-emerald-400/50', via: 'via-emerald-600/40', border: 'border-emerald-500/50', hoverBorder: 'group-hover:border-emerald-400/80', shadow: 'shadow-[0_0_30px_rgba(16,185,129,0.4)]', shadowHover: 'group-hover:shadow-[0_0_60px_rgba(16,185,129,0.8)]', blur: 'bg-emerald-500/30', textTitle: 'text-emerald-50/90', textSub: 'text-emerald-400/90', aura: 'bg-emerald-500 mix-blend-screen' };
            case 'eu': return { from: 'from-violet-400/50', via: 'via-violet-600/40', border: 'border-violet-500/50', hoverBorder: 'group-hover:border-violet-400/80', shadow: 'shadow-[0_0_30px_rgba(139,92,246,0.4)]', shadowHover: 'group-hover:shadow-[0_0_60px_rgba(139,92,246,0.8)]', blur: 'bg-violet-500/30', textTitle: 'text-violet-50/90', textSub: 'text-violet-400/90', aura: 'bg-violet-500 mix-blend-screen' };
            case 'na': return { from: 'from-amber-400/50', via: 'via-amber-600/40', border: 'border-amber-500/50', hoverBorder: 'group-hover:border-amber-400/80', shadow: 'shadow-[0_0_30px_rgba(245,158,11,0.4)]', shadowHover: 'group-hover:shadow-[0_0_60px_rgba(245,158,11,0.8)]', blur: 'bg-amber-500/30', textTitle: 'text-amber-50/90', textSub: 'text-amber-400/90', aura: 'bg-amber-500 mix-blend-screen' };
            case 'sa': return { from: 'from-fuchsia-400/50', via: 'via-fuchsia-600/40', border: 'border-fuchsia-500/50', hoverBorder: 'group-hover:border-fuchsia-400/80', shadow: 'shadow-[0_0_30px_rgba(217,70,239,0.4)]', shadowHover: 'group-hover:shadow-[0_0_60px_rgba(217,70,239,0.8)]', blur: 'bg-fuchsia-500/30', textTitle: 'text-fuchsia-50/90', textSub: 'text-fuchsia-400/90', aura: 'bg-fuchsia-500 mix-blend-screen' };
            case 'oc': return { from: 'from-cyan-400/50', via: 'via-cyan-600/40', border: 'border-cyan-500/50', hoverBorder: 'group-hover:border-cyan-400/80', shadow: 'shadow-[0_0_30px_rgba(6,182,212,0.4)]', shadowHover: 'group-hover:shadow-[0_0_60px_rgba(6,182,212,0.8)]', blur: 'bg-cyan-500/30', textTitle: 'text-cyan-50/90', textSub: 'text-cyan-400/90', aura: 'bg-cyan-500 mix-blend-screen' };
            case 'an': return { from: 'from-blue-400/50', via: 'via-blue-600/40', border: 'border-blue-500/50', hoverBorder: 'group-hover:border-blue-400/80', shadow: 'shadow-[0_0_30px_rgba(59,130,246,0.4)]', shadowHover: 'group-hover:shadow-[0_0_60px_rgba(59,130,246,0.8)]', blur: 'bg-blue-500/30', textTitle: 'text-blue-50/90', textSub: 'text-blue-400/90', aura: 'bg-blue-500 mix-blend-screen' };
            case 'ns': return { from: 'from-slate-400/50', via: 'via-slate-600/40', border: 'border-slate-500/50', hoverBorder: 'group-hover:border-slate-400/80', shadow: 'shadow-[0_0_30px_rgba(100,116,139,0.4)]', shadowHover: 'group-hover:shadow-[0_0_60px_rgba(100,116,139,0.8)]', blur: 'bg-slate-500/30', textTitle: 'text-slate-50/90', textSub: 'text-slate-400/90', aura: 'bg-slate-500 mix-blend-screen' };
            default: return { from: 'from-zinc-400/50', via: 'via-zinc-600/40', border: 'border-zinc-500/50', hoverBorder: 'group-hover:border-zinc-400/80', shadow: 'shadow-[0_0_30px_rgba(161,161,170,0.4)]', shadowHover: 'group-hover:shadow-[0_0_60px_rgba(161,161,170,0.8)]', blur: 'bg-zinc-500/30', textTitle: 'text-zinc-50/90', textSub: 'text-zinc-400/90', aura: 'bg-zinc-500 mix-blend-screen' };
          }
        })();

        return (
          <motion.div
            key={continent.id}
            className="absolute flex flex-col items-center justify-center pointer-events-none"
            initial={{ rotate: angle, opacity: 0 }}
            animate={{ rotate: angle + 360, opacity: 1 }}
            transition={{ 
              rotate: { duration: 160, repeat: Infinity, ease: "linear" },
              opacity: { duration: 2, delay: i * 0.3 } 
            }}
            style={{ originX: '50%', originY: '50%', width: '95%', height: '95%' }}
          >
            <motion.div 
              className="absolute top-0 -mt-8 flex flex-col items-center cursor-pointer pointer-events-auto"
              animate={{ rotate: -(angle + 360) }}
              transition={{ duration: 160, repeat: Infinity, ease: "linear" }}
              onClick={(e) => handleOrbClick(e, continent.id)}
              onTouchEnd={(e) => handleOrbClick(e, continent.id)}
            >
              <div className="relative group cursor-pointer flex flex-col items-center justify-center">
                
                {/* Minimal Ancestral Orb */}
                <motion.div 
                  className={cn("relative w-12 h-12 md:w-16 md:h-16 rounded-full transition-all duration-300 flex items-center justify-center border bg-[radial-gradient(circle_at_30%_30%,_var(--tw-gradient-stops))] to-zinc-950", colors.border, colors.hoverBorder, colors.from, colors.via, colors.shadow, colors.shadowHover)}
                  animate={{ 
                    scale: 1 + (currentTaps * 0.015),
                    filter: `brightness(${1 + (currentTaps * 0.05)})`
                  }}
                  whileHover={{ scale: 1.1 + (currentTaps * 0.015) }}
                  whileTap={{ scale: 0.9 }}
                >
                  {/* Inner resonance */}
                  <div className={cn("absolute inset-0 rounded-full blur-[2px] transition-opacity duration-700 opacity-50 group-hover:opacity-100", colors.blur)} />
                  
                  {/* Tap Aura Reaction - The Dance */}
                  <AnimatePresence>
                    {ripples.filter(r => r.nodeId === continent.id).map(ripple => (
                      <motion.div 
                        key={ripple.id}
                        initial={{ scale: 0.8, opacity: 0.8, rotate: Math.random() * 360 }}
                        animate={{ scale: 2.5 + Math.random(), opacity: 0, rotate: Math.random() * 360 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className={cn("absolute inset-0 rounded-full mix-blend-screen pointer-events-none", colors.aura)}
                      />
                    ))}
                  </AnimatePresence>
                </motion.div>

                {/* Elegant minimal text */}
                <div className="absolute top-[120%] flex flex-col items-center text-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <span className={cn("text-[10px] md:text-[11px] font-serif tracking-[0.3em] uppercase whitespace-nowrap drop-shadow-md", colors.textTitle)}>
                    {continent.name}
                  </span>
                  <span className={cn("text-[8px] md:text-[9px] font-mono tracking-[0.4em] uppercase mt-1 whitespace-nowrap", colors.textSub)}>
                    {continent.sub}
                  </span>
                  {currentTaps > 0 && (
                    <span className="text-[8px] font-mono text-zinc-400 mt-1 opacity-50">{currentTaps}/33</span>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        );
      })}

      {/* Core Nodes (Inner Orbit) */}
      {coreNodes.map((node, i) => {
        const angle = (i * 360) / coreNodes.length;
        const currentTaps = tapCounts[node.id] || 0;
        return (
          <motion.div
            key={node.id}
            className="absolute flex flex-col items-center justify-center pointer-events-none"
            initial={{ rotate: -angle, opacity: 0 }}
            animate={{ rotate: -(angle + 360), opacity: 1 }}
            transition={{ 
              rotate: { duration: 120, repeat: Infinity, ease: "linear" },
              opacity: { duration: 2, delay: i * 0.5 } 
            }}
            style={{ originX: '50%', originY: '50%', width: '45%', height: '45%' }}
          >
            <motion.div 
              className="absolute top-0 -mt-5 flex flex-col items-center pointer-events-auto"
              animate={{ rotate: (angle + 360) }}
              transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
            >
              <div 
                className={"relative group flex flex-col items-center justify-center " + (masterUnlocked ? 'cursor-pointer opacity-100' : 'cursor-not-allowed opacity-50')}
                onClick={(e) => masterUnlocked && handleOrbClick(e, node.id)}
                onTouchEnd={(e) => masterUnlocked && handleOrbClick(e, node.id)}
              >
                <motion.div 
                  className={cn("w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 bg-[radial-gradient(circle_at_30%_30%,_var(--tw-gradient-stops))] from-zinc-800/20 via-zinc-950/60 to-black border border-amber-900/20 group-hover:border-amber-500/40 group-hover:shadow-[0_0_15px_rgba(245,158,11,0.2)]", node.color)}
                  animate={{ 
                    scale: 1 + (currentTaps * 0.015),
                    filter: `brightness(${1 + (currentTaps * 0.05)})`
                  }}
                  whileHover={{ scale: 1.1 + (currentTaps * 0.015) }}
                  whileTap={{ scale: 0.9 }}
                >
                  <node.icon className="w-4 h-4 opacity-60 group-hover:opacity-100 transition-opacity" />
                  
                  {/* Tap Aura Reaction - The Dance */}
                  <AnimatePresence>
                    {ripples.filter(r => r.nodeId === node.id).map(ripple => (
                      <motion.div 
                        key={ripple.id}
                        initial={{ scale: 0.8, opacity: 0.8, rotate: Math.random() * 360 }}
                        animate={{ scale: 2.5 + Math.random(), opacity: 0, rotate: Math.random() * 360 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className={cn("absolute inset-0 rounded-full mix-blend-screen pointer-events-none", node.aura)}
                      />
                    ))}
                  </AnimatePresence>
                </motion.div>
                
                {/* Elegant minimal text */}
                <div className="absolute top-[120%] flex flex-col items-center text-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700 mt-1">
                  <span className={cn("text-[8px] font-serif tracking-[0.2em] uppercase whitespace-nowrap drop-shadow-md", node.color)}>
                    {node.label}
                  </span>
                  {currentTaps > 0 && (
                    <span className="text-[8px] font-mono text-zinc-400 mt-1 opacity-50">{currentTaps}/33</span>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        );
      })}

      {/* True Sun (Center) */}
      {(() => {
        const currentTaps = tapCounts['true-sun'] || 0;
        return (
          <motion.div 
            className="relative z-10 flex items-center justify-center w-36 h-36 rounded-full cursor-pointer group"
            initial={{ scale: 0.95 }}
            animate={{ 
              scale: [1 + (currentTaps * 0.015), 1.02 + (currentTaps * 0.015), 1 + (currentTaps * 0.015)],
              filter: `brightness(${1 + (currentTaps * 0.05)})`
            }}
            whileHover={{ scale: 1.05 + (currentTaps * 0.015) }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            onClick={(e) => handleOrbClick(e, 'true-sun')}
            onTouchEnd={(e) => handleOrbClick(e, 'true-sun')}
          >
            {/* Soft, safe glowing layers - No harsh radiation */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-yellow-100 to-amber-50 opacity-95 shadow-[0_0_60px_rgba(253,230,138,0.25)]" />
            <div className="absolute inset-2 rounded-full bg-white/70 blur-md" />
            
            <Sun className="w-10 h-10 text-amber-500/40 relative z-10" />
            
            <div className="absolute -inset-6 rounded-full border border-amber-900/15 border-dashed animate-spin-slow" style={{ animationDuration: '20s' }} />
            
            {/* Tap Aura Reaction - The Dance */}
            <AnimatePresence>
              {ripples.filter(r => r.nodeId === 'true-sun').map(ripple => (
                <motion.div 
                  key={ripple.id}
                  initial={{ scale: 0.8, opacity: 0.8, rotate: Math.random() * 360 }}
                  animate={{ scale: 1.5 + Math.random(), opacity: 0, rotate: Math.random() * 360 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                  className="absolute inset-0 rounded-full bg-amber-400 mix-blend-screen pointer-events-none"
                />
              ))}
            </AnimatePresence>

            <div className="absolute flex flex-col items-center justify-center mt-32 z-20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700">
              <span className="text-[10px] uppercase tracking-[0.4em] text-amber-100 font-mono whitespace-nowrap bg-zinc-950/70 px-3 py-1 rounded backdrop-blur-sm border border-amber-900/40">
                True Sun
              </span>
              <div className="text-[8px] uppercase tracking-wider text-amber-500/70 font-mono text-center mt-2 max-w-[200px] leading-relaxed">
                {masterUnlocked ? 'MASTER UNLOCKED: System metrics and core logic accessible.' : 'Currently locked. Access restricted to the 7 Voids and Continent Protocols.'}
              </div>
              {currentTaps > 0 && (
                <span className="text-[8px] font-mono text-zinc-400 mt-2 opacity-50">{currentTaps}/33</span>
              )}
            </div>
          </motion.div>
        );
      })()}

      <AnimatePresence>
        {fullColorId && (() => {
          const continent = CONTINENTS.find(c => c.id === fullColorId);
          const coreNode = coreNodes.find(n => n.id === fullColorId);
          const trueSun = fullColorId === 'true-sun' ? { label: 'True Sun' } : null;
          
          const title = continent?.name || coreNode?.label || trueSun?.label || 'Unknown Node';
          const sub = continent?.sub || '';

          const renderCountries = (countries: string[]) => {
            return (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16 w-full max-w-5xl mx-auto text-left">
                {countries.map((country, i) => (
                  <motion.div 
                    key={i} 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 + (i * 0.05), duration: 0.8 }}
                    className="flex items-center gap-4 bg-black/10 backdrop-blur-sm p-4 rounded-lg border border-white/5 hover:border-white/20 transition-colors"
                  >
                    <div className="w-2 h-2 rounded-full bg-white/40" />
                    <span className="text-white/90 text-sm font-mono tracking-widest uppercase">
                      {country}
                    </span>
                  </motion.div>
                ))}
              </div>
            );
          };

          return (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="fixed inset-0 z-[9999] flex flex-col items-center overflow-y-auto overflow-x-hidden min-h-screen"
              style={{ 
                backgroundColor: DEEP_COLORS[fullColorId] || '#000',
                backgroundImage: `radial-gradient(circle farthest-corner at center, ${FULL_COLORS[fullColorId] || FALLBACK_COLORS[fullColorId]} 0%, ${DEEP_COLORS[fullColorId] || '#000'} 100%)`
              }}
            >
              <button 
                onClick={() => setFullColorId(null)}
                className="fixed top-6 left-6 z-50 p-2 text-white/50 hover:text-white transition-colors"
              >
                {/* Universal Back Symbol (Arrow) */}
                <ArrowLeft className="w-8 h-8" strokeWidth={1.5} />
              </button>

              <div className="fixed inset-0 pointer-events-none flex items-center justify-center mix-blend-overlay opacity-30">
                 {/* Pure frequency resonance effect */}
                 <div className="w-[150vw] h-[150vw] rounded-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,1)_0%,transparent_70%)] animate-pulse" style={{ animationDuration: '4s' }} />
              </div>
              
              <div className="relative z-10 w-full max-w-6xl px-8 py-24 flex flex-col items-center">
                <motion.h2 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 1 }}
                  className="text-4xl md:text-6xl font-serif text-white tracking-[0.2em] uppercase text-center drop-shadow-2xl"
                >
                  {title}
                </motion.h2>
                
                {sub && (
                  <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.7, duration: 1 }}
                    className="text-sm md:text-lg font-mono text-white/70 tracking-[0.4em] uppercase mt-6 text-center"
                  >
                    {sub}
                  </motion.p>
                )}

                {continent && continent.countries && (
                  <div className="w-full mt-4 mb-24 flex flex-col items-center">
                    <p className="text-white/50 font-mono tracking-widest text-sm mb-8 uppercase">
                      Nodes Detected: {continent.countries.length}
                    </p>
                    {renderCountries(continent.countries)}
                  </div>
                )}
              </div>
            </motion.div>
          );
        })()}
      </AnimatePresence>
    </div>
  );
}
