const fs = require('fs');
const lines = fs.readFileSync('src/components/ZambiaVision.tsx', 'utf-8').split('\n');

let startIndex = lines.findIndex(line => line.includes('<div className="flex-1 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-zinc-800 scrollbar-track-transparent">'));

let endIndex = lines.findIndex(line => line.includes('<AnimatePresence>'));
while (endIndex > 0 && (lines[endIndex-1].trim() === '</div>' || lines[endIndex-1].trim() === '')) {
  endIndex--;
}
// Keep two closing divs for the flex-[3] and the main flex-row container
endIndex -= 2;

const inlineRender = `
          <div className="flex-1 overflow-hidden flex flex-col relative">
            <AnimatePresence mode="wait">
              {doorOpen ? (
                <ProvinceDoor 
                  key="province-door"
                  province={activeNode} 
                  onClose={() => setDoorOpen(false)} 
                />
              ) : (
                <motion.div 
                  key="province-grid"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex-1 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-zinc-800 scrollbar-track-transparent h-full"
                >
                  <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 auto-rows-fr pb-10">
                    {ZAMBIA_DETAILED_PROVINCES.map((prov, i) => (
                      <motion.button
                        layoutId={\`province-card-\${prov.name}\`}
                        key={prov.name}
                        onClick={() => { setActiveNode(prov); setDoorOpen(true); }}
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
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
`;

lines.splice(startIndex, endIndex - startIndex, inlineRender);

let finalContent = lines.join('\n');

// Remove the old AnimatePresence for ProvinceDoor from the bottom
finalContent = finalContent.replace(
  /<AnimatePresence>\s*\{doorOpen && \(\s*<ProvinceDoor\s*province=\{activeNode\}\s*onClose=\{\(\) => setDoorOpen\(false\)\}\s*\/>\s*\)\}\s*<\/AnimatePresence>/,
  ''
);

fs.writeFileSync('src/components/ZambiaVision.tsx', finalContent);
