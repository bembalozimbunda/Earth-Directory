import { ArrowRight } from 'lucide-react';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface VoidPortalProps {
  voidName: string;
  onClose: () => void;
}

export function VoidPortal({ voidName, onClose }: VoidPortalProps) {
  const [inputValue, setInputValue] = useState('');
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [showRedVoid, setShowRedVoid] = useState(false);
  const [error, setError] = useState(false);
  
  const [voidData, setVoidData] = useState<any>(null);
  const [continentKey, setContinentKey] = useState<string | null>(null);
  const [nations, setNations] = useState<any[]>([]);

  const handleKeySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const res = await fetch('/api/verify-void', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ voidName, code: inputValue })
      });
      
      const data = await res.json();
      
      if (data.authorized) {
        setVoidData(data.voidData);
        setContinentKey(data.continentKey);
        setNations(data.nations);
        setIsAuthorized(true);
        setError(false);
      } else {
        setError(true);
        setInputValue('');
        setTimeout(() => setError(false), 2000);
      }
    } catch (err) {
      console.error("Auth error", err);
      setError(true);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] bg-zinc-950 flex flex-col items-center justify-center font-mono">
      <AnimatePresence mode="wait">
        {!isAuthorized ? (
          <motion.div
            key="auth"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
            className="flex flex-col items-center gap-6 w-full max-w-md p-6"
          >
            <div className="text-amber-500 text-xs md:text-sm tracking-[0.3em] uppercase mb-4 text-center">
              <div>{voidName}</div>
              <div className="text-zinc-600 mt-2">KEEPER: ENCRYPTED</div>
            </div>
            
            <form onSubmit={handleKeySubmit} className="flex flex-col items-center gap-4 w-full">
              <input
                autoFocus
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="ENTER KEY CODE"
                className={`bg-transparent border-b ${error ? 'border-red-500 text-red-500' : 'border-zinc-800 focus:border-amber-500 text-zinc-300'} text-center text-sm md:text-base outline-none pb-2 w-full tracking-[0.2em] transition-colors`}
                spellCheck={false}
                autoComplete="off"
              />
              {error && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-500 text-[10px] tracking-widest">
                  AUTHORIZATION DENIED
                </motion.div>
              )}
            </form>
            
            <button onClick={onClose} className="mt-8 text-zinc-600 hover:text-zinc-400 text-xs tracking-widest transition-colors">
              [ CANCEL ]
            </button>
          </motion.div>
        ) : (
          <motion.div
            key="void-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 bg-black flex flex-col items-center justify-center overflow-hidden"
          >
            {/* The Void fills completely */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 3, ease: "easeOut" }}
              className="absolute inset-0 flex items-center justify-center pointer-events-none"
            >
              <div className="w-[150vw] h-[150vw] bg-[radial-gradient(circle_at_center,rgba(20,20,20,1)_0%,rgba(0,0,0,1)_100%)] rounded-full flex items-center justify-center">
                <motion.div
                  animate={{ rotate: voidData?.rotation === 'CLOCKWISE' ? 360 : -360 }}
                  transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                  className="w-[100vw] h-[100vw] border-[0.5px] border-amber-900/10 rounded-full border-dashed opacity-30"
                />
              </div>
            </motion.div>

            <div className="z-10 flex flex-col items-center w-full h-full p-6 md:p-16">
              <motion.div 
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="text-amber-500/80 text-2xl md:text-4xl tracking-[0.5em] font-light mb-8 uppercase text-center"
              >
                {voidName}
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-4 md:gap-16 text-zinc-600 text-[10px] md:text-sm tracking-[0.3em] uppercase mb-12 text-center"
              >
                <div>WATCHER: <span className="text-zinc-400">{voidData?.watcher}</span></div>
                <div>UPDATOR: <span className="text-zinc-400">{voidData?.updator}</span></div>
                <div>PATTERN: <span className="text-amber-500/40">{voidData?.key_pattern}</span></div>
                {continentKey && (
                  <div className="text-emerald-500/50">
                    {nations.length} NATIONAL VOIDS (CONTINENT: {continentKey})
                  </div>
                )}
              </motion.div>

              {!nations.length && voidData && (
                <motion.div 
                  initial={{ opacity: 0, filter: "blur(10px)" }}
                  animate={{ opacity: 1, filter: "blur(0px)" }}
                  transition={{ delay: 2, duration: 2 }}
                  className="flex-1 flex items-center justify-center w-full max-w-7xl text-center px-4"
                >
                  <h2 className="text-zinc-200 text-xl md:text-3xl lg:text-5xl font-light tracking-[0.15em] leading-relaxed uppercase">
                    {voidData.domain}
                  </h2>
                </motion.div>
              )}

              {nations.length > 0 && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2, duration: 1 }}
                  className="w-full flex-1 overflow-y-auto custom-scrollbar pr-2 md:pr-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4 text-left content-start"
                >
                  {nations.map((nation: any, idx: number) => (
                    <motion.div 
                      key={nation.name}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 2 + (idx * 0.02) }}
                      className="bg-zinc-900/40 border border-zinc-800/40 p-4 flex flex-col items-center justify-center gap-3 hover:border-amber-500/40 transition-colors group rounded"
                    >
                      <span className="text-4xl md:text-5xl drop-shadow-[0_0_15px_rgba(255,255,255,0.1)] group-hover:scale-110 transition-transform">{nation.flag}</span>
                      <span className="text-[9px] md:text-[10px] text-zinc-400 uppercase tracking-widest text-center leading-tight">
                        {nation.name}
                      </span>
                      {nation.ruler && (
                        <span className="text-[7px] md:text-[8px] text-amber-500/80 uppercase tracking-widest text-center leading-tight mt-1 border-t border-zinc-800/50 pt-1 w-full">
                          {nation.ruler}
                        </span>
                      )}
                    </motion.div>
                  ))}
                </motion.div>
              )}
              
              <motion.button 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3, duration: 1 }}
                onClick={onClose} 
                className="mt-8 pt-8 pb-4 text-zinc-600 hover:text-amber-500 text-xs tracking-widest transition-colors shrink-0 uppercase"
              >
                [ CLOSE VOID ]
              </motion.button>
              <motion.button 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3.5, duration: 1 }}
                onClick={() => setShowRedVoid(true)}
                className="mt-4 flex items-center gap-2 px-4 py-2 bg-rose-500/10 border border-rose-500/30 hover:border-rose-500/80 rounded transition-all group shrink-0"
              >
                <div className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
                <span className="font-mono text-[10px] tracking-widest uppercase text-rose-500 group-hover:text-rose-400">
                  Access African Red Void
                </span>
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showRedVoid && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/95 backdrop-blur-2xl"
          >
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.1)_0%,transparent_100%)] animate-pulse" />
            </div>

            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              className="w-full max-w-4xl bg-black border border-rose-500/30 rounded-2xl p-8 relative z-10 shadow-[0_0_150px_rgba(244,63,94,0.15)]"
            >
              <div className="flex items-center justify-between mb-8 pb-6 border-b border-rose-500/20">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full border border-rose-500 flex items-center justify-center animate-pulse">
                    <div className="w-4 h-4 rounded-full bg-rose-500" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-light text-rose-500 tracking-[0.2em] uppercase">The African Red Void</h2>
                    <p className="text-xs text-rose-500/60 font-mono tracking-widest uppercase">Systematic Omission & Historical Extraction</p>
                  </div>
                </div>
                <button 
                  onClick={() => setShowRedVoid(false)}
                  className="p-2 text-rose-500/50 hover:text-rose-500 hover:bg-rose-500/10 rounded-lg transition-colors"
                >
                  <Lock className="w-5 h-5" />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-rose-500/80 font-mono text-sm tracking-wide">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-rose-400 mb-2 font-bold uppercase text-xs tracking-widest flex items-center gap-2">
                      <div className="w-1 h-1 bg-rose-500" /> Missing Infrastructure
                    </h3>
                    <p className="leading-relaxed">The Red Void represents the systematic extraction of raw intelligence and resources without proportional structural reinvestment. The foundational digital twin nodes remain severely isolated.</p>
                  </div>
                  <div>
                    <h3 className="text-rose-400 mb-2 font-bold uppercase text-xs tracking-widest flex items-center gap-2">
                      <div className="w-1 h-1 bg-rose-500" /> Disconnected Capital
                    </h3>
                    <p className="leading-relaxed">Global valuation metrics consistently omit the localized neuro-capital generated within the continent. The currency bridges are fractured, requiring the Neural Compensation Matrix to forcefully bridge the gap.</p>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="p-4 border border-rose-500/20 bg-rose-950/20 rounded-xl relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjQ0LCA2MywgOTQsIDAuMSkiLz48L3N2Zz4=')] opacity-50" />
                    <h3 className="text-rose-400 mb-2 font-bold uppercase text-xs tracking-widest relative z-10">Restoration Protocol</h3>
                    <ul className="space-y-3 text-xs relative z-10">
                      <li className="flex items-start gap-2">
                        <ArrowRight className="w-4 h-4 text-rose-500 shrink-0" />
                        <span>Deploying True Sun Credits to bypass fractured global ledgers.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ArrowRight className="w-4 h-4 text-rose-500 shrink-0" />
                        <span>Initializing local server nodes to retain sovereign data processing.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ArrowRight className="w-4 h-4 text-rose-500 shrink-0" />
                        <span>Activating the Ancestral Intelligence core to counter historical omission.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      </div>
  );
}
