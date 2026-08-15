const fs = require('fs');
let content = fs.readFileSync('src/components/SystemCurrencyPortal.tsx', 'utf8');

const target = `<div className="p-3 border-t border-zinc-800 bg-zinc-950 flex justify-between items-center">
                <span className="text-zinc-500 font-mono text-[8px] uppercase tracking-widest">Negative Energy Filter: ACTIVE</span>
                <span className="text-amber-500 font-mono text-[8px] uppercase tracking-widest animate-pulse">Frequency &gt; AI Cap</span>
            </div>`;

const replacement = `<div className="p-3 border-t border-zinc-800 bg-zinc-950 flex flex-col gap-2">
              <div className="flex justify-between items-center">
                  <span className="text-cyan-500 font-mono text-[8px] uppercase tracking-widest drop-shadow-[0_0_5px_rgba(6,182,212,0.5)]">Power: Hydro-Resonance (Water)</span>
                  <span className="text-emerald-500 font-mono text-[8px] uppercase tracking-widest animate-pulse">Servers: Smooth</span>
              </div>
              <div className="flex justify-between items-center">
                  <span className="text-zinc-500 font-mono text-[8px] uppercase tracking-widest">Matrix: Yandex • Baidu • Google</span>
                  <span className="text-amber-500 font-mono text-[8px] uppercase tracking-widest">198 Nations Secured</span>
              </div>
            </div>`;

content = content.replace(target, replacement);
fs.writeFileSync('src/components/SystemCurrencyPortal.tsx', content);
