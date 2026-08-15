const fs = require('fs');
let content = fs.readFileSync('src/components/SynthesisCore.tsx', 'utf8');

const target = `            <div className="absolute flex flex-col items-center justify-center mt-32 z-20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700">
              <span className="text-[10px] uppercase tracking-[0.4em] text-amber-100 font-mono whitespace-nowrap bg-zinc-950/70 px-3 py-1 rounded backdrop-blur-sm border border-amber-900/40">
                True Sun
              </span>
              {currentTaps > 0 && (
                <span className="text-[8px] font-mono text-zinc-400 mt-2 opacity-50">{currentTaps}/33</span>
              )}
            </div>`;

const replacement = `            <div className="absolute flex flex-col items-center justify-center mt-32 z-20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700">
              <span className="text-[10px] uppercase tracking-[0.4em] text-amber-100 font-mono whitespace-nowrap bg-zinc-950/70 px-3 py-1 rounded backdrop-blur-sm border border-amber-900/40">
                True Sun
              </span>
              <div className="text-[8px] uppercase tracking-wider text-amber-500/70 font-mono text-center mt-2 max-w-[200px] leading-relaxed">
                Radiates pure data and intelligence. Click the four inner nodes (Unseen Source, Hardware, Frequencies, Ancestral) to view their power in the terminal.
              </div>
              {currentTaps > 0 && (
                <span className="text-[8px] font-mono text-zinc-400 mt-2 opacity-50">{currentTaps}/33</span>
              )}
            </div>`;

content = content.replace(target, replacement);
fs.writeFileSync('src/components/SynthesisCore.tsx', content);

