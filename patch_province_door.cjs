const fs = require('fs');
let content = fs.readFileSync('src/components/ProvinceDoor.tsx', 'utf-8');

const injection = `
        {/* Deep Ancestral Data Injection */}
        <div className="relative z-10 px-6 py-4 bg-zinc-950/40 border-b border-zinc-800/40 backdrop-blur-sm flex flex-col md:flex-row gap-6 items-start md:items-center">
          <div className="flex flex-col gap-1">
            <span className="text-zinc-500 text-[10px] uppercase tracking-widest">Ancestral Alignment (Macro-State)</span>
            <div className="flex items-center gap-2">
              <Globe2 className={\`w-4 h-4 \${province.macroState === 'Barotseland Realm' ? 'text-amber-500' : 'text-emerald-500'}\`} />
              <span className={\`font-mono text-sm uppercase tracking-widest \${province.macroState === 'Barotseland Realm' ? 'text-amber-400' : 'text-emerald-400'}\`}>
                {province.macroState}
              </span>
            </div>
          </div>
          <div className="hidden md:block w-px h-8 bg-zinc-800"></div>
          <div className="flex flex-col gap-2 flex-1">
            <span className="text-zinc-500 text-[10px] uppercase tracking-widest">Anchoring Bloodlines</span>
            <div className="flex flex-wrap gap-2">
              {province.tribes && province.tribes.map((tribe, idx) => (
                <span key={idx} className="text-[10px] bg-zinc-900 border border-zinc-700/50 px-2 py-1 rounded text-zinc-300 uppercase tracking-widest shadow-sm">
                  {tribe}
                </span>
              ))}
            </div>
          </div>
        </div>
`;

// Insert the injection right after the Header div closes
const replaceTarget = /<\/button>\s*<\/div>\s*<div className="flex-1 flex flex-col md:flex-row p-6 gap-6 relative z-10 overflow-hidden">/;
if (content.match(replaceTarget)) {
  content = content.replace(replaceTarget, "</button>\n        </div>\n" + injection + '\n        <div className="flex-1 flex flex-col md:flex-row p-6 gap-6 relative z-10 overflow-hidden">');
  
  // Wait, I also need to ensure Globe2 is imported in ProvinceDoor.tsx
  if (!content.includes('Globe2')) {
    content = content.replace(/X, Hexagon, Database, Activity, Eye, ChevronLeft/, 'X, Hexagon, Database, Activity, Eye, ChevronLeft, Globe2');
  }
} else {
  console.log("Failed to match ProvinceDoor header");
}

fs.writeFileSync('src/components/ProvinceDoor.tsx', content);
