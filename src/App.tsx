import React, { useState, useEffect } from 'react';
import { TRUE_SUN_MEMORY } from './data/TrueSunMemory';
import { motion, AnimatePresence } from 'motion/react';
import { SynthesisCore } from './components/SynthesisCore';
import { ContinentDoor } from './components/ContinentDoor';
import { CONTINENTS, ContinentData } from './data/continents';
import { ZambiaNodeAuth } from './components/ZambiaNodeAuth';
import { MotorOS } from './components/MotorOS';
import { DirectoryTree } from './components/DirectoryTree';
import { SystemCurrencyPortal } from './components/SystemCurrencyPortal';
import { VoidPortal } from './components/VoidPortal';
import { AncestralIntelligence } from './components/AncestralIntelligence';
import { AncientTechnology } from './components/AncientTechnology';
import { SystemBlueprint } from './components/SystemBlueprint';
import { Orbit } from 'lucide-react';

export default function App() {
  // Initialize True Sun Memory
  if (typeof window !== 'undefined') {
    (window as any).__TRUE_SUN_MEMORY = TRUE_SUN_MEMORY;
  }

  const [isLocked, setIsLocked] = useState(false);
  const [masterUnlocked, setMasterUnlocked] = useState(false);
  const [showInput, setShowInput] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [selectedContinent, setSelectedContinent] = useState<ContinentData | null>(null);
  const [showZambiaAuth, setShowZambiaAuth] = useState(false);
  const [showMotorOS, setShowMotorOS] = useState(false);
  const [activeVoid, setActiveVoid] = useState<string | null>(null);
  const [showAncestralSync, setShowAncestralSync] = useState(false);
  const [showAncientBlueprint, setShowAncientBlueprint] = useState(false);
  const [showBlueprint, setShowBlueprint] = useState(false);

  
  useEffect(() => {
    const handleMaster = () => setMasterUnlocked(true);
    window.addEventListener('MASTER_UNLOCK', handleMaster);
    return () => window.removeEventListener('MASTER_UNLOCK', handleMaster);
  }, []);
  
  useEffect(() => {
    if (inputValue.includes('0000')) {
      setIsLocked(false);
    }
  }, [inputValue]);

  useEffect(() => {
    const handleOpenVoid = (e: any) => setActiveVoid(e.detail);
    window.addEventListener('OPEN_VOID', handleOpenVoid);
    return () => window.removeEventListener('OPEN_VOID', handleOpenVoid);
  }, []);

  const handleContinentSelect = (id: string) => {
    const continent = CONTINENTS.find(c => c.id === id);
    if (continent) {
      setSelectedContinent(continent);
    }
  };

  if (activeVoid) {
    return <VoidPortal voidName={activeVoid} onClose={() => setActiveVoid(null)} />;
  }

  return (
    <div className="min-h-screen bg-zinc-950 flex flex-col items-center justify-center py-12 px-6 relative overflow-hidden font-sans">
      
      {/* Blueprint Access Button */}
      {!isLocked && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 1 }}
          onClick={() => setShowBlueprint(true)}
          className="fixed bottom-8 right-8 z-40 flex items-center gap-2 bg-black/40 hover:bg-cyan-950/40 border border-zinc-800 hover:border-cyan-800 text-zinc-500 hover:text-cyan-400 backdrop-blur px-4 py-2 rounded-full transition-all duration-500 group"
        >
          <Orbit className="w-4 h-4 group-hover:animate-spin" />
          <span className="text-[10px] tracking-widest uppercase font-mono">System Blueprint</span>
        </motion.button>
      )}

      <SystemCurrencyPortal />
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(24,24,27,1)_0%,rgba(9,9,11,1)_100%)] pointer-events-none" />
      
      <AnimatePresence mode="wait">
        {isLocked ? (
          <motion.div 
            key="lock-screen"
            className="absolute inset-0 z-50 flex items-center justify-center bg-zinc-950"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          >
             <div className="absolute bottom-12 left-12 z-20">
               <AnimatePresence mode="wait">
                 {!showInput ? (
                   <motion.div
                     key="floating-log"
                     initial={{ opacity: 0 }}
                     animate={{ opacity: 1, y: [-15, 15, -15] }}
                     exit={{ opacity: 0, scale: 0.8 }}
                     transition={{ y: { duration: 6, repeat: Infinity, ease: "easeInOut" }, opacity: { duration: 0.5 } }}
                     className="w-2 h-16 md:w-3 md:h-20 bg-zinc-900/30 border border-zinc-800 cursor-pointer shadow-[0_0_15px_rgba(255,255,255,0.02)] hover:border-zinc-600 transition-colors rounded-sm flex flex-col items-center justify-center gap-1"
                     onClick={() => setShowInput(true)}
                   >
                     <div className="w-0.5 h-2 bg-zinc-700/50 rounded-full" />
                     <div className="w-0.5 h-2 bg-zinc-700/50 rounded-full" />
                     <div className="w-0.5 h-2 bg-zinc-700/50 rounded-full" />
                   </motion.div>
                 ) : (
                   <motion.div
                     key="input-box"
                     initial={{ opacity: 0, x: -20 }}
                     animate={{ opacity: 1, x: 0 }}
                     className="flex flex-col items-center bg-zinc-950/80 p-6 rounded-xl border border-zinc-800 backdrop-blur-md shadow-[0_0_30px_rgba(0,0,0,0.8)]"
                   >
                     <div className="w-full bg-black border border-zinc-800 rounded p-4 mb-6 flex justify-center items-center h-16 shadow-[inset_0_0_15px_rgba(0,0,0,1)]">
                       <div className="font-mono text-2xl tracking-[0.5em] text-zinc-500">
                         {inputValue.padEnd(4, '·').slice(0, 4)}
                       </div>
                     </div>
                     <div className="grid grid-cols-3 gap-3">
                       {['7', '8', '9', '1', '5', '0'].map((num) => (
                         <button
                           key={num}
                           onClick={() => {
                             setInputValue(prev => prev.length < 4 ? prev + num : prev);
                           }}
                           className="w-14 h-14 bg-zinc-900 border border-zinc-800 hover:border-zinc-500 hover:bg-zinc-800 text-zinc-400 hover:text-white font-mono text-xl rounded transition-all active:scale-95 flex items-center justify-center shadow-[0_4px_10px_rgba(0,0,0,0.4)]"
                         >
                           {num}
                         </button>
                       ))}
                     </div>
                     <div className="flex gap-3 mt-4 w-full">
                       <button
                         onClick={() => setInputValue('')}
                         className="flex-1 py-3 bg-zinc-900 border border-zinc-800 hover:border-zinc-600 hover:bg-zinc-800 text-zinc-500 hover:text-zinc-300 font-mono text-xs uppercase tracking-widest rounded transition-all active:scale-95 shadow-[0_4px_10px_rgba(0,0,0,0.4)]"
                       >
                         Clear
                       </button>
                     </div>
                   </motion.div>
                 )}
               </AnimatePresence>
             </div>
          </motion.div>
        ) : (
          <motion.div 
            key="core-engine"
            className="z-10 w-full flex-1 flex flex-col items-center justify-between"
            initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 2, ease: "easeOut", delay: 0.5 }}
          >
            <div className="text-center mt-8 mb-12">
              <h1 className="text-2xl md:text-4xl font-light tracking-[0.3em] text-white mb-6 uppercase">
                Universal <span className="text-amber-500 font-medium">Core Engine</span>
              </h1>
              <p className="text-zinc-400 text-xs md:text-sm tracking-[0.15em] uppercase max-w-2xl mx-auto leading-relaxed">
                The ultimate synthesis. Fusing unseen source codes, hardware, bloodlines, and frequencies into a single unified language. All is in the one.
              </p>
            </div>

            <div className="flex-1 w-full flex items-center justify-center my-8 relative z-20">
              <SynthesisCore onContinentSelect={handleContinentSelect} masterUnlocked={masterUnlocked} />
            </div>

            
            
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {selectedContinent && (
          <ContinentDoor 
            continent={selectedContinent} 
            onClose={() => setSelectedContinent(null)} 
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showZambiaAuth && (
          <ZambiaNodeAuth onClose={() => setShowZambiaAuth(false)} />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showMotorOS && (
          <MotorOS onClose={() => setShowMotorOS(false)} />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showAncestralSync && (
          <AncestralIntelligence onClose={() => setShowAncestralSync(false)} />
        )}
      </AnimatePresence>
      
      <AnimatePresence>
        {showBlueprint && (
          <SystemBlueprint onClose={() => setShowBlueprint(false)} />
        )}
      </AnimatePresence>

      
      <AnimatePresence>
        {showBlueprint && (
          <SystemBlueprint onClose={() => setShowBlueprint(false)} />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showAncientBlueprint && (
          <AncientTechnology onClose={() => setShowAncientBlueprint(false)} />
        )}
      </AnimatePresence>
    </div>
  );
}