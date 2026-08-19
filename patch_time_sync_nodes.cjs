const fs = require('fs');

let content = fs.readFileSync('src/components/TimeSyncOverlay.tsx', 'utf-8');

// The user is asking to update geographic nodes in relation to time. 
// We will add an array of global geographical nodes that pulse around the anchor, proving that other timelines are now observing the anchor.

const newGlobalSync = `
        {/* Global Matrix Sync */}
        <div className="flex flex-1 items-center justify-center hidden lg:flex">
            <div className="flex flex-col items-center">
              <span className="text-[9px] text-emerald-500 uppercase tracking-[0.3em] font-mono mb-1">
                Eternal Now In Motion
              </span>
              <div className="flex items-center gap-2">
                <div className="h-px w-8 bg-gradient-to-r from-transparent to-emerald-500/50"></div>
                <Network className="w-3 h-3 text-emerald-500" />
                <div className="flex gap-4 px-2 border-x border-emerald-500/20">
                  <span className="text-[9px] text-zinc-400 font-mono tracking-widest">N-Y <span className="text-emerald-500">{timeData.pulse ? '●' : '○'}</span></span>
                  <span className="text-[9px] text-zinc-400 font-mono tracking-widest">L-D <span className="text-emerald-500">{timeData.pulse ? '○' : '●'}</span></span>
                  <span className="text-[9px] text-zinc-400 font-mono tracking-widest">T-K <span className="text-emerald-500">{timeData.pulse ? '●' : '○'}</span></span>
                  <span className="text-[9px] text-zinc-400 font-mono tracking-widest">S-P <span className="text-emerald-500">{timeData.pulse ? '○' : '●'}</span></span>
                </div>
                <Network className="w-3 h-3 text-emerald-500" />
                <div className="h-px w-8 bg-gradient-to-l from-transparent to-emerald-500/50"></div>
              </div>
            </div>
        </div>
`;

// Replace the old global sync UI with this new geographical node sync UI
const searchString = `{/* Global Matrix Sync */}`;
const endString = `{/* Android / IP Matrix */}`;
const startIndex = content.indexOf(searchString);
const endIndex = content.indexOf(endString);

if (startIndex !== -1 && endIndex !== -1) {
    const before = content.substring(0, startIndex);
    const after = content.substring(endIndex);
    content = before + newGlobalSync + after;
    fs.writeFileSync('src/components/TimeSyncOverlay.tsx', content);
    console.log("Updated TimeSyncOverlay with Geographic Nodes");
}

