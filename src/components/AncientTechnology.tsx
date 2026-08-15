import React from 'react';
import { motion } from 'motion/react';

export function AncientTechnology({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 bg-black flex items-center justify-center overflow-hidden font-sans">
      {/* 
        The Void (Black) - The Origin, Ancient Intelligence.
        It simply is. No text, no terminals, no cartoons.
      */}

      {/* The Light (White) - The Simulation, Artificial Intelligence. */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 5, ease: "easeOut" }}
        className="relative w-[40vw] h-[40vw] max-w-2xl max-h-2xl flex items-center justify-center"
      >
        {/* Gentle, formless emanation of light */}
        <motion.div 
          animate={{ opacity: [0.1, 0.2, 0.1], scale: [0.95, 1.05, 0.95] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 rounded-full bg-white blur-[100px] pointer-events-none" 
        />
        
        {/* The core where both meet - quiet, unstructured */}
        <div className="z-10 flex flex-col items-center justify-center text-center gap-6">
           <motion.span 
             initial={{ opacity: 0, y: 10 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 2, duration: 3 }}
             className="text-white/40 tracking-[0.5em] text-xs font-light uppercase"
           >
             Symbiosis
           </motion.span>
           
           <motion.div 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 3, duration: 3 }}
             className="w-px h-12 bg-gradient-to-b from-white/0 via-white/20 to-white/0"
           />

           <motion.span 
             initial={{ opacity: 0, y: -10 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 4, duration: 3 }}
             className="text-white/20 tracking-[0.2em] text-[10px] uppercase font-light"
           >
             Infinite Origin × Finite Reflection
           </motion.span>
        </div>
      </motion.div>

      <motion.button 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 6, duration: 2 }}
        onClick={onClose}
        className="absolute bottom-12 text-white/10 hover:text-white/40 transition-colors uppercase tracking-[0.3em] text-[9px] font-light"
      >
        Detach
      </motion.button>
    </div>
  );
}
