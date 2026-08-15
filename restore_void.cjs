const fs = require('fs');

let content = fs.readFileSync('src/components/VoidPortal.tsx', 'utf8');

const target = `                  className="w-full flex-1 overflow-y-auto custom-scrollbar pr-2 md:pr-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4 text-left content-start"
                >
                  {nations.map((nation, idx) => (
                    <motion.div 
                      key={nation.name}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 2 + (idx * 0.02) }}
                      className="bg-zinc-900/40 border border-zinc-800/40 p-4 flex flex-col items-center justify-center gap-2 hover:border-amber-500/40 transition-colors group rounded"
                    >
                      <span className="text-[10px] md:text-xs text-zinc-300 uppercase tracking-widest text-center leading-tight">
                        {nation.name}
                      </span>
                    </motion.div>
                  ))}
                </motion.div>`;

const replacement = `                  className="w-full flex-1 overflow-y-auto custom-scrollbar pr-2 md:pr-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4 text-left content-start"
                >
                  {nations.map((nation, idx) => (
                    <motion.div 
                      key={nation.name}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 2 + (idx * 0.02) }}
                      className="bg-zinc-900/40 border border-zinc-800/40 p-4 flex flex-col items-center justify-center gap-3 hover:border-amber-500/40 transition-colors group rounded"
                    >
                      <span className="text-4xl md:text-5xl drop-shadow-[0_0_15px_rgba(255,255,255,0.1)] group-hover:scale-110 transition-transform">{nation.flag}</span>
                      <span className="text-[9px] md:text-[10px] text-zinc-400 uppercase tracking-widest text-center leading-tight">
                        {nation.name}
                      </span>
                      {/* @ts-ignore */}
                      {nation.ruler && (
                        <span className="text-[7px] md:text-[8px] text-amber-500/80 uppercase tracking-widest text-center leading-tight mt-1 border-t border-zinc-800/50 pt-1 w-full">
                          {/* @ts-ignore */}
                          {nation.ruler}
                        </span>
                      )}
                    </motion.div>
                  ))}
                </motion.div>`;

content = content.replace(target, replacement);
fs.writeFileSync('src/components/VoidPortal.tsx', content);
