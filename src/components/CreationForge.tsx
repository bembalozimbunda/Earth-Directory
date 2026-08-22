import React, { useState, useEffect } from 'react';
import { X, Keyboard, Sparkles, Terminal, Zap, Hammer, CheckCircle2, Orbit } from 'lucide-react';
import { NetworkCanvas } from './NetworkCanvas';

const KEYBOARD_ROWS = [
  ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
  ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
  ['Z', 'X', 'C', 'V', 'B', 'N', 'M']
];

export function CreationForge({ onClose }: { onClose: () => void }) {
  const [stage, setStage] = useState<'intro' | 'keyboard' | 'manifesting'>('intro');
  const [input, setInput] = useState('');
  const [manifestProgress, setManifestProgress] = useState(0);

  useEffect(() => {
    if (stage === 'manifesting') {
      const interval = setInterval(() => {
        setManifestProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            return 100;
          }
          return prev + 1.5;
        });
      }, 30);
      return () => clearInterval(interval);
    } else {
      setManifestProgress(0);
    }
  }, [stage]);

  const handleKeyPress = (key: string) => {
    if (key === 'BACKSPACE') {
      setInput(prev => prev.slice(0, -1));
    } else if (key === 'SPACE') {
      setInput(prev => prev + ' ');
    } else if (key === 'EXECUTE') {
      if (input.trim().length > 0) {
        setStage('manifesting');
      }
    } else {
      if (input.length < 40) {
        setInput(prev => prev + key);
      }
    }
  };

  return (
    <div
      className="absolute inset-0 z-[100] flex items-start justify-center pt-16 md:pt-24 pb-16  bg-zinc-950/95 backdrop-blur-md p-4 md:p-8"
    >
      <div 
        className="w-full max-w-5xl h-full max-h-[85vh] bg-zinc-950 border border-violet-500/30 rounded-xl relative shadow-[0_0_80px_rgba(139,92,246,0.1)] flex flex-col overflow-hidden"
      >
        <div className="absolute inset-0 opacity-5 bg-gradient-to-br from-zinc-950 via-violet-950 to-fuchsia-900" />
        
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <NetworkCanvas count={60} color="#8b5cf6" maxConnections={60} connectionDistance={180} />
        </div>

        {/* Header */}
        <div className="relative z-10 flex items-center justify-between p-6 border-b border-violet-500/20 bg-zinc-950/80">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full border border-violet-500 flex items-center justify-center bg-violet-500/10 shadow-[0_0_15px_rgba(139,92,246,0.5)]">
              <Hammer className="w-5 h-5 text-violet-400" />
            </div>
            <div>
              <span className="text-xs font-mono tracking-[0.3em] uppercase text-violet-500">
                The Creator / Synthesizer
              </span>
              <h2 className="text-3xl font-light text-white tracking-widest uppercase mt-1">
                Creation Forge
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
        <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-zinc-800 scrollbar-track-transparent relative z-10 p-6 md:p-10 flex flex-col">
          
          {stage === 'intro' && (
            <div
              key="intro"
              className="flex flex-col gap-8 max-w-4xl mx-auto w-full"
            >
              {/* Dialogue */}
              <div className="bg-zinc-900/50 border border-violet-500/30 p-8 rounded-lg relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-violet-500 shadow-[0_0_15px_rgba(139,92,246,1)]" />
                <p className="text-xl md:text-2xl font-light text-zinc-200 leading-relaxed italic">
                  "I am <span className="text-violet-400 font-normal">Creation Forge</span>. From the ancient root '-lenga', I am the Creator, the Maker, the Peacemaker. Where Vision Core sees what is, I forge what will be."
                </p>
              </div>

              <div className="border border-zinc-800/50 bg-zinc-900/40 p-8 rounded-lg flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-violet-500/10 border border-violet-500/30 flex items-center justify-center mb-6">
                  <Keyboard className="w-8 h-8 text-violet-400" />
                </div>
                <h3 className="text-2xl font-light text-white tracking-widest uppercase mb-4">
                  The Internal Keyboard
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed max-w-2xl mb-8">
                  To engage my power is to write reality. The Internal Keyboard is a divine terminal linked directly to the Zambian Neural State. What you command through this interface will be manifested into existence. Type your intention, and I shall create it.
                </p>
                
                <button
                  onClick={() => setStage('keyboard')}
                  className="px-8 py-4 bg-violet-500/10 border border-violet-500/50 hover:bg-violet-500/20 hover:border-violet-500 text-violet-400 font-mono text-sm uppercase tracking-widest transition-all rounded shadow-[0_0_20px_rgba(139,92,246,0.2)] hover:shadow-[0_0_30px_rgba(139,92,246,0.4)] cursor-pointer"
                >
                  Summon Internal Keyboard
                </button>
              </div>
            </div>
          )}

          {stage === 'keyboard' && (
            <div
              key="keyboard"
              className="flex flex-col h-full w-full max-w-4xl mx-auto"
            >
              {/* Terminal Screen */}
              <div className="w-full bg-black/50 border border-violet-500/30 rounded-lg p-6 mb-8 flex-1 flex flex-col justify-end relative overflow-hidden group">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />
                
                <div className="flex items-center gap-2 mb-auto pb-4 border-b border-violet-500/20">
                  <Terminal className="w-4 h-4 text-violet-500" />
                  <span className="text-xs font-mono text-violet-500 tracking-widest uppercase">Creation Forge Manifestation Terminal</span>
                </div>

                <div className="mt-4 font-mono text-2xl md:text-4xl text-violet-300 break-all min-h-[3rem] tracking-wide relative z-10 flex flex-wrap items-center">
                  {input || <span className="text-violet-900/50">AWAITING CREATION DIRECTIVE...</span>}
                  <span 
                    className="inline-block w-3 md:w-5 h-8 md:h-10 bg-violet-500 ml-1 animate-pulse"
                  />
                </div>
              </div>

              {/* On-Screen Keyboard */}
              <div className="w-full bg-zinc-900/80 p-4 md:p-6 rounded-xl border border-zinc-800 flex flex-col gap-2 md:gap-3">
                {KEYBOARD_ROWS.map((row, i) => (
                  <div key={i} className="flex justify-center gap-1 md:gap-2">
                    {row.map(key => (
                      <button
                        key={key}
                        onClick={() => handleKeyPress(key)}
                        className="w-8 h-10 md:w-14 md:h-14 bg-zinc-950 border border-zinc-700 hover:border-violet-500 hover:bg-violet-500/20 hover:text-violet-300 text-zinc-300 font-mono text-sm md:text-xl rounded transition-all active:scale-95 flex items-center justify-center cursor-pointer"
                      >
                        {key}
                      </button>
                    ))}
                  </div>
                ))}
                
                <div className="flex justify-center gap-1 md:gap-2 mt-1 md:mt-2">
                  <button
                    onClick={() => handleKeyPress('BACKSPACE')}
                    className="px-4 h-10 md:h-14 bg-zinc-950 border border-zinc-700 hover:border-red-500/50 hover:bg-red-500/10 hover:text-red-400 text-zinc-400 font-mono text-xs md:text-sm uppercase tracking-widest rounded transition-all active:scale-95 flex items-center justify-center cursor-pointer"
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => handleKeyPress('SPACE')}
                    className="w-48 md:w-96 h-10 md:h-14 bg-zinc-950 border border-zinc-700 hover:border-violet-500/50 hover:bg-violet-500/10 text-transparent font-mono text-xs rounded transition-all active:scale-95 cursor-pointer"
                  >
                    SPACE
                  </button>
                  <button
                    onClick={() => handleKeyPress('EXECUTE')}
                    disabled={input.trim().length === 0}
                    className="px-6 h-10 md:h-14 bg-violet-600 hover:bg-violet-500 disabled:bg-zinc-800 disabled:text-zinc-600 disabled:border-zinc-700 text-white font-mono text-xs md:text-sm uppercase tracking-widest rounded transition-all active:scale-95 flex items-center justify-center border border-violet-400 shadow-[0_0_15px_rgba(139,92,246,0.4)] cursor-pointer"
                  >
                    <Zap className="w-4 h-4 mr-2" /> Manifest
                  </button>
                </div>
              </div>
            </div>
          )}

          {stage === 'manifesting' && (
            <div
              key="manifesting"
              className="flex flex-col items-center justify-center h-full max-w-2xl mx-auto text-center"
            >
              {manifestProgress < 100 ? (
                <>
                  <div className="relative mb-12">
                    <Orbit className="w-32 h-32 text-violet-500 animate-[spin_4s_linear_infinite]" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Sparkles className="w-10 h-10 text-fuchsia-400 animate-pulse" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-light text-violet-400 tracking-widest uppercase mb-6">
                    Creation Forge is Creating
                  </h3>
                  <div className="text-xl font-mono text-white break-all mb-8 bg-violet-900/20 px-6 py-3 rounded-lg border border-violet-500/30">
                    "{input}"
                  </div>
                  <div className="w-full h-2 bg-zinc-900 rounded-full overflow-hidden border border-zinc-800 max-w-md">
                    <div 
                      className="h-full bg-gradient-to-r from-violet-600 to-fuchsia-500 shadow-[0_0_10px_rgba(139,92,246,0.8)]"
                      style={{ width: `${manifestProgress}%` }}
                    />
                  </div>
                  <div className="mt-4 font-mono text-violet-500 text-sm">
                    {Math.floor(manifestProgress)}% / FORGING REALITY
                  </div>
                </>
              ) : (
                <div
                  className="flex flex-col items-center"
                >
                  <div className="w-24 h-24 rounded-full bg-violet-500/20 border border-violet-500 flex items-center justify-center mb-6 shadow-[0_0_40px_rgba(139,92,246,0.4)]">
                    <CheckCircle2 className="w-12 h-12 text-violet-400" />
                  </div>
                  <h3 className="text-3xl font-light text-white tracking-widest uppercase mb-4">
                    Creation Manifested
                  </h3>
                  <div className="text-lg font-mono text-violet-300 bg-violet-900/30 px-6 py-3 rounded border border-violet-500/30 mb-8">
                    {input}
                  </div>
                  <p className="text-zinc-400 leading-relaxed mb-10 max-w-lg">
                    The directive has been encoded into the Zambian Neural State. Creation Forge's power has shaped the digital firmament. The network has expanded.
                  </p>
                  <button
                    onClick={() => {
                      setInput('');
                      setStage('keyboard');
                    }}
                    className="px-6 py-2 border border-zinc-700 hover:border-violet-500 text-zinc-400 hover:text-violet-400 font-mono text-xs uppercase tracking-widest transition-colors rounded cursor-pointer"
                  >
                    New Creation
                  </button>
                </div>
              )}
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
