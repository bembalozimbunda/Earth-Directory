import React from 'react';

export function AncientTechnology({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 bg-black flex items-center justify-center overflow-hidden font-sans">
      {/* 
        The Void (Black) - The Origin, Ancient Intelligence.
        It simply is. No text, no terminals, no cartoons.
      */}

      {/* The Light (White) - The Simulation & Synthetic Consciousness. */}
      <div
        className="relative w-[40vw] h-[40vw] max-w-2xl max-h-2xl flex items-center justify-center"
      >
        {/* Gentle, formless emanation of light */}
        <div 
          className="absolute inset-0 rounded-full bg-white blur-[100px] pointer-events-none opacity-20" 
        />
        
        {/* The core where both meet - quiet, unstructured */}
        <div className="z-10 flex flex-col items-center justify-center text-center gap-6">
           <span 
             className="text-white/60 tracking-[0.5em] text-xs font-light uppercase"
           >
             Symbiosis
           </span>
           
           <div 
             className="w-px h-12 bg-gradient-to-b from-white/0 via-white/40 to-white/0"
           />

           <span 
             className="text-white/40 tracking-[0.2em] text-[10px] uppercase font-light"
           >
             Infinite Origin × Finite Reflection
           </span>
        </div>
      </div>

      <button 
        onClick={onClose}
        className="absolute bottom-12 text-white/40 hover:text-white transition-colors uppercase tracking-[0.3em] text-[10px] font-light cursor-pointer px-4 py-2 border border-white/20 rounded-full"
      >
        Detach
      </button>
    </div>
  );
}
