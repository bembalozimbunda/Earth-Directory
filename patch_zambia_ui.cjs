const fs = require('fs');
let content = fs.readFileSync('src/components/ZambiaVision.tsx', 'utf-8');

// We want to group the rendering of ZAMBIA_DETAILED_PROVINCES by macroState.
// First, replace the grid rendering part.

const macroStateRender = `
          <div className="flex-1 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-zinc-800 scrollbar-track-transparent flex flex-col gap-8 pb-10">
            {['Zambezian Heartland', 'Barotseland Realm'].map((macroState) => (
              <div key={macroState} className="flex flex-col gap-4">
                {/* Section Header */}
                <div className="flex items-center gap-3 border-b border-zinc-800/50 pb-2">
                  <Globe2 className={\`w-5 h-5 \${macroState === 'Barotseland Realm' ? 'text-amber-500' : 'text-emerald-500'}\`} />
                  <h4 className="text-lg font-light text-white tracking-[0.2em] uppercase">
                    {macroState} <span className="text-zinc-600 text-xs tracking-widest ml-2">// Alignment Section</span>
                  </h4>
                </div>
                
                {/* Provinces Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-fr">
                  {ZAMBIA_DETAILED_PROVINCES.filter(p => p.macroState === macroState).map((prov, i) => (
                    <motion.button
                      key={prov.name}
                      onClick={() => setActiveNode(prov)}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.05, duration: 0.4 }}
                      className={\`relative p-4 rounded-xl border flex flex-col items-start gap-2 text-left transition-all overflow-hidden group
                        \${activeNode.name === prov.name 
                          ? \`\${prov.border} bg-zinc-900/80 shadow-[0_0_30px_rgba(var(--tw-colors-\${prov.bg.split('-')[1]}-500),0.2)]\`
                          : 'border-zinc-800/50 bg-zinc-950/50 hover:border-zinc-600'
                        }
                      \`}
                    >
                      {activeNode.name === prov.name && (
                        <motion.div 
                          layoutId="active-province-glow"
                          className={\`absolute inset-0 opacity-10 \${prov.bg}\`}
                        />
                      )}
                      
                      <div className="flex items-center justify-between w-full relative z-10">
                        <Hexagon className={\`w-5 h-5 \${activeNode.name === prov.name ? prov.color : 'text-zinc-500 group-hover:text-zinc-400'} transition-colors\`} />
                        <span className="text-[10px] font-mono text-zinc-600 tracking-widest">NODE {String(i + 1).padStart(2, '0')}</span>
                      </div>
                      
                      <div className="mt-2 relative z-10 w-full">
                        <h4 className={\`font-mono uppercase tracking-widest text-sm transition-colors \${activeNode.name === prov.name ? 'text-white' : 'text-zinc-300 group-hover:text-white'}\`}>
                          {prov.name}
                        </h4>
                        <p className={\`text-[10px] tracking-wider uppercase mt-1 transition-colors \${activeNode.name === prov.name ? prov.color : 'text-zinc-500 group-hover:text-zinc-400'}\`}>
                          {prov.role}
                        </p>
                      </div>

                      <div className="mt-3 pt-3 border-t border-zinc-800/50 w-full relative z-10">
                         <div className="text-[9px] uppercase tracking-widest text-zinc-500 mb-1">Ancestral Bloodlines</div>
                         <div className="flex flex-wrap gap-1">
                           {prov.tribes && prov.tribes.map((tribe, idx) => (
                             <span key={idx} className="text-[8px] bg-zinc-900 border border-zinc-800 px-1.5 py-0.5 rounded text-zinc-400 uppercase">
                               {tribe}
                             </span>
                           ))}
                         </div>
                      </div>
                    </motion.button>
                  ))}
                </div>
              </div>
            ))}
          </div>
`;

// Now we find the place to replace
// It's the div containing the grid
const replaceRegex = /<div className="grid grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-fr overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-zinc-800 scrollbar-track-transparent">[\s\S]*?<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/div>/;

if (content.match(replaceRegex)) {
   content = content.replace(replaceRegex, macroStateRender + "\n        </div>\n      </div>\n      </div>");
} else {
   console.log('Regex did not match. Trying alternative replacement.');
   // Try a looser match
   const alternativeRegex = /<div className="grid grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-fr overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-zinc-800 scrollbar-track-transparent">[\s\S]*?(?=<AnimatePresence>)/;
   if (content.match(alternativeRegex)) {
     content = content.replace(alternativeRegex, macroStateRender + "\n        </div>\n      ");
   } else {
     console.log('Alternative regex also failed.');
   }
}

fs.writeFileSync('src/components/ZambiaVision.tsx', content);
