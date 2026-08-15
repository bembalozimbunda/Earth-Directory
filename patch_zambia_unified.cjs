const fs = require('fs');
let content = fs.readFileSync('src/components/ZambiaVision.tsx', 'utf-8');

// Replace the split grid rendering with a unified one.
const unifiedRender = `
          <div className="flex-1 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-zinc-800 scrollbar-track-transparent">
            <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 auto-rows-fr">
              {ZAMBIA_DETAILED_PROVINCES.map((prov, i) => (
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
                </motion.button>
              ))}
            </div>
          </div>
`;

// Looking for the div containing flex-1 overflow-y-auto
const replaceRegex = /<div className="flex-1 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-zinc-800 scrollbar-track-transparent flex flex-col gap-8 pb-10">[\s\S]*?<\/div>\s*<\/div>\s*<\/div>\s*<\/div>/;

if (content.match(replaceRegex)) {
  content = content.replace(replaceRegex, unifiedRender + "\n        </div>\n      </div>");
} else {
  console.log("Failed to match Regex for unified rendering");
}

fs.writeFileSync('src/components/ZambiaVision.tsx', content);
