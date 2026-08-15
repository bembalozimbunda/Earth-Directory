const fs = require('fs');
let content = fs.readFileSync('src/components/ProvinceDoor.tsx', 'utf-8');

// We need to add the deep data view to the right column when a district is selected.

const deepDataBlock = `
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      <div className="bg-zinc-900/30 p-4 rounded-lg border border-zinc-800/30">
                        <div className="flex flex-col gap-1">
                          <span className="text-zinc-500 text-[10px] uppercase tracking-widest">Registered Population</span>
                          <span className="text-zinc-200 font-mono text-lg">{selectedDistrict.population.toLocaleString()}</span>
                        </div>
                      </div>
                      <div className="bg-zinc-900/30 p-4 rounded-lg border border-zinc-800/30">
                        <div className="flex flex-col gap-1">
                          <span className="text-zinc-500 text-[10px] uppercase tracking-widest">Primary Function</span>
                          <span className="text-zinc-200 font-mono text-sm tracking-wider mt-1">{selectedDistrict.resource}</span>
                        </div>
                      </div>
                      <div className="bg-zinc-900/30 p-4 rounded-lg border border-zinc-800/30 md:col-span-2">
                        <div className="flex flex-col gap-2">
                          <div className="flex items-center justify-between">
                            <span className="text-zinc-500 text-[10px] uppercase tracking-widest">Node Efficiency Rating</span>
                            <span className={\`\${province.color} font-mono text-xs\`}>{selectedDistrict.efficiency}%</span>
                          </div>
                          <div className="w-full h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                            <motion.div 
                              className={\`h-full \${province.bg}\`}
                              initial={{ width: 0 }}
                              animate={{ width: \`\${selectedDistrict.efficiency}%\` }}
                              transition={{ duration: 1 }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* DEEP DRILL DOWN MAP */}
                    {selectedDistrict.constituencies && (
                      <div className="mt-8 border-t border-zinc-800/50 pt-6">
                        <div className="flex items-center gap-2 mb-4">
                          <span className={\`\${province.color} w-2 h-2 rounded-full animate-pulse\`}></span>
                          <h4 className="text-xs font-mono tracking-widest uppercase text-white">Live Node Topology</h4>
                        </div>
                        
                        <div className="grid grid-cols-1 gap-4">
                          {selectedDistrict.constituencies.map((c, i) => (
                            <div key={i} className="bg-zinc-900/20 border border-zinc-800/50 rounded p-4">
                              <div className="flex justify-between items-end mb-3 border-b border-zinc-800/30 pb-2">
                                <span className={\`\${province.color} text-sm font-mono uppercase tracking-widest\`}>{c.name} Constituency</span>
                                <span className="text-zinc-500 text-[10px] uppercase">POP: {c.population.toLocaleString()}</span>
                              </div>
                              <div className="flex flex-col gap-3 pl-4 border-l border-zinc-800/50 ml-2">
                                {c.wards.map((w, j) => (
                                  <div key={j} className="flex flex-col gap-2">
                                    <div className="flex justify-between items-center">
                                      <span className="text-zinc-300 text-xs font-mono uppercase">↳ {w.name} Ward</span>
                                      <span className="text-zinc-600 text-[9px] uppercase">POP: {w.population.toLocaleString()}</span>
                                    </div>
                                    <div className="grid grid-cols-1 xl:grid-cols-2 gap-2 pl-4">
                                      {w.stations.map((s, k) => (
                                        <div key={k} className="bg-black/40 border border-zinc-800/80 p-2 flex justify-between items-center rounded-sm">
                                          <div className="flex items-center gap-2">
                                            <div className={\`w-1.5 h-1.5 rounded-full \${s.status === 'Online' ? 'bg-emerald-500 shadow-[0_0_8px_#10b981]' : s.status === 'Active Sync' ? 'bg-amber-500 animate-pulse' : 'bg-red-500'}\`}></div>
                                            <span className="text-zinc-400 text-[9px] uppercase tracking-wider truncate max-w-[150px]">{s.name}</span>
                                          </div>
                                          <span className="text-zinc-500 text-[8px] font-mono">{s.voters.toLocaleString()} VOTES</span>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
`;

const replaceRegex = /<div className="grid grid-cols-1 md:grid-cols-2 gap-4">[\s\S]*?<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/motion.div>/;

content = content.replace(replaceRegex, deepDataBlock + "\n                  </motion.div>");

fs.writeFileSync('src/components/ProvinceDoor.tsx', content);
