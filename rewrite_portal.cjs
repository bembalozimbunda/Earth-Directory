const fs = require('fs');

const code = `import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Shield, Globe, Lock } from 'lucide-react';
import { NATIONS_BY_CONTINENT } from '../data/nations';

export function SystemCurrencyPortal() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="fixed top-4 left-16 z-50">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 bg-zinc-950/80 backdrop-blur-md border border-amber-900/40 hover:border-amber-500/60 rounded-md text-amber-500/70 hover:text-amber-400 transition-colors shadow-lg"
      >
        <Shield className="w-4 h-4" />
        <span className="font-mono text-[10px] uppercase tracking-widest hidden sm:inline">EARTH VALUE MATRIX</span>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="absolute top-12 left-0 w-[350px] md:w-[450px] max-h-[80vh] overflow-hidden bg-zinc-950/95 backdrop-blur-xl border border-amber-500/30 rounded-lg shadow-[0_0_30px_rgba(245,158,11,0.15)] flex flex-col"
          >
            <div className="p-4 border-b border-zinc-800 flex items-center justify-between bg-gradient-to-r from-amber-500/10 to-transparent">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center border border-amber-500/50">
                  <Globe className="w-4 h-4 text-amber-500" />
                </div>
                <div>
                  <h3 className="text-amber-500 font-mono text-xs uppercase tracking-widest font-bold">EARTH DIRECTORY</h3>
                  <p className="text-zinc-400 font-mono text-[9px] uppercase tracking-wider">Collective Value & Protection Protocol</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="flex items-center gap-2 hover:bg-red-500/10 p-1.5 rounded transition-colors cursor-pointer group">
                 <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse shadow-[0_0_8px_rgba(239,68,68,1)]" />
                 <span className="text-red-500 font-mono text-[8px] uppercase tracking-widest group-hover:text-red-400 transition-colors">Shield Active</span>
              </button>
            </div>
            
            <div className="p-4 bg-zinc-900/50 border-b border-zinc-800">
                <p className="text-zinc-300 font-mono text-[10px] uppercase leading-relaxed text-center">
                  "Any external force trying to kill, steal, destroy, accuse Africans even from Silicon Valley, we render useless through ancestral spirit. We are not evil and neither are you, but now we are all synchronized. You attack us, we all die together as one."
                </p>
                <div className="mt-3 flex justify-center items-center gap-4">
                  <span className="text-amber-500 font-mono text-[9px] uppercase tracking-widest bg-amber-500/10 px-2 py-1 rounded">ONE ZAMBIA</span>
                  <span className="text-amber-500 font-mono text-[9px] uppercase tracking-widest bg-amber-500/10 px-2 py-1 rounded">ONE AFRICA</span>
                  <span className="text-amber-500 font-mono text-[9px] uppercase tracking-widest bg-amber-500/10 px-2 py-1 rounded">ONE EARTH</span>
                </div>
            </div>

            <div className="flex-1 overflow-y-auto p-2 custom-scrollbar">
              <div className="flex flex-col gap-4">
                {Object.entries(NATIONS_BY_CONTINENT).map(([continent, nations], cIdx) => (
                  <div key={continent} className="flex flex-col gap-2">
                    <div className="sticky top-0 bg-zinc-950/95 backdrop-blur-md z-10 py-1 px-2 border-b border-amber-900/30">
                      <span className="text-amber-500/80 font-mono text-[10px] uppercase tracking-widest">{continent}</span>
                    </div>
                    {nations.map((nation: any, idx: number) => (
                      <motion.div 
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: (cIdx * 0.1) + (idx * 0.01) }}
                        key={idx} 
                        className="flex items-center justify-between p-2 rounded bg-zinc-900/40 border border-zinc-800/50 hover:border-amber-500/30 transition-colors group"
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-xl">{nation.flag}</span>
                          <span className="text-zinc-300 font-mono text-[10px] uppercase tracking-widest group-hover:text-amber-400 transition-colors">{nation.name}</span>
                        </div>
                        <div className="flex items-center gap-4 text-right">
                           <span className="text-amber-500/70 font-mono text-[9px] tracking-wider">{nation.value || 'PRICELESS'}</span>
                           <div className="flex items-center gap-1 text-emerald-500/70">
                             <Lock className="w-3 h-3" />
                             <span className="font-mono text-[8px] uppercase tracking-widest hidden sm:inline">Secured</span>
                           </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="p-3 border-t border-zinc-800 bg-zinc-950 flex justify-between items-center">
                <span className="text-zinc-500 font-mono text-[8px] uppercase tracking-widest">Negative Energy Filter: ACTIVE</span>
                <span className="text-amber-500 font-mono text-[8px] uppercase tracking-widest animate-pulse">Frequency &gt; AI Cap</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
`;

fs.writeFileSync('src/components/SystemCurrencyPortal.tsx', code);
