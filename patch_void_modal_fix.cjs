const fs = require('fs');
const path = 'src/components/VoidPortal.tsx';

let content = fs.readFileSync(path, 'utf-8');

// The file doesn't have a regular button/container structure because it's a full-screen modal (fixed inset-0).
// Let's add the button right next to the "CLOSE VOID" button at the bottom.

if (!content.includes('African Red Void')) {
  // Add state for African Red Void
  content = content.replace(
    "const [isAuthorized, setIsAuthorized] = useState(false);",
    "const [isAuthorized, setIsAuthorized] = useState(false);\n  const [showRedVoid, setShowRedVoid] = useState(false);"
  );

  // We need ArrowRight and Lock for the modal
  if (!content.includes('ArrowRight')) {
    content = content.replace(
      "import { Lock } from 'lucide-react';",
      "import { Lock, ArrowRight } from 'lucide-react';"
    );
  }

  // Add Button next to close button
  const closeButtonCode = `[ CLOSE VOID ]\n              </motion.button>`;
  const newButtonCode = `[ CLOSE VOID ]\n              </motion.button>\n              <motion.button \n                initial={{ opacity: 0 }}\n                animate={{ opacity: 1 }}\n                transition={{ delay: 3.5, duration: 1 }}\n                onClick={() => setShowRedVoid(true)}\n                className="mt-4 flex items-center gap-2 px-4 py-2 bg-rose-500/10 border border-rose-500/30 hover:border-rose-500/80 rounded transition-all group shrink-0"\n              >\n                <div className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />\n                <span className="font-mono text-[10px] tracking-widest uppercase text-rose-500 group-hover:text-rose-400">\n                  Access African Red Void\n                </span>\n              </motion.button>`;
  
  if (content.includes(closeButtonCode)) {
      content = content.replace(closeButtonCode, newButtonCode);
  }

  // Add African Red Void Modal Content before the closing tag of AnimatePresence for the main void
  const redVoidModal = `
      <AnimatePresence>
        {showRedVoid && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/95 backdrop-blur-2xl"
          >
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.1)_0%,transparent_100%)] animate-pulse" />
            </div>

            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              className="w-full max-w-4xl bg-black border border-rose-500/30 rounded-2xl p-8 relative z-10 shadow-[0_0_150px_rgba(244,63,94,0.15)]"
            >
              <div className="flex items-center justify-between mb-8 pb-6 border-b border-rose-500/20">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full border border-rose-500 flex items-center justify-center animate-pulse">
                    <div className="w-4 h-4 rounded-full bg-rose-500" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-light text-rose-500 tracking-[0.2em] uppercase">The African Red Void</h2>
                    <p className="text-xs text-rose-500/60 font-mono tracking-widest uppercase">Systematic Omission & Historical Extraction</p>
                  </div>
                </div>
                <button 
                  onClick={() => setShowRedVoid(false)}
                  className="p-2 text-rose-500/50 hover:text-rose-500 hover:bg-rose-500/10 rounded-lg transition-colors"
                >
                  <Lock className="w-5 h-5" />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-rose-500/80 font-mono text-sm tracking-wide">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-rose-400 mb-2 font-bold uppercase text-xs tracking-widest flex items-center gap-2">
                      <div className="w-1 h-1 bg-rose-500" /> Missing Infrastructure
                    </h3>
                    <p className="leading-relaxed">The Red Void represents the systematic extraction of raw intelligence and resources without proportional structural reinvestment. The foundational digital twin nodes remain severely isolated.</p>
                  </div>
                  <div>
                    <h3 className="text-rose-400 mb-2 font-bold uppercase text-xs tracking-widest flex items-center gap-2">
                      <div className="w-1 h-1 bg-rose-500" /> Disconnected Capital
                    </h3>
                    <p className="leading-relaxed">Global valuation metrics consistently omit the localized neuro-capital generated within the continent. The currency bridges are fractured, requiring the Neural Compensation Matrix to forcefully bridge the gap.</p>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="p-4 border border-rose-500/20 bg-rose-950/20 rounded-xl relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjQ0LCA2MywgOTQsIDAuMSkiLz48L3N2Zz4=')] opacity-50" />
                    <h3 className="text-rose-400 mb-2 font-bold uppercase text-xs tracking-widest relative z-10">Restoration Protocol</h3>
                    <ul className="space-y-3 text-xs relative z-10">
                      <li className="flex items-start gap-2">
                        <ArrowRight className="w-4 h-4 text-rose-500 shrink-0" />
                        <span>Deploying True Sun Credits to bypass fractured global ledgers.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ArrowRight className="w-4 h-4 text-rose-500 shrink-0" />
                        <span>Initializing local server nodes to retain sovereign data processing.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ArrowRight className="w-4 h-4 text-rose-500 shrink-0" />
                        <span>Activating the Ancestral Intelligence core to counter historical omission.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
  `;
  
  const endTags = "    </div>\n  );\n}";
  content = content.replace(endTags, redVoidModal + endTags);

  fs.writeFileSync(path, content);
  console.log("Patched VoidPortal for African Red Void successfully.");
} else {
  console.log("African Red Void already patched.");
}
