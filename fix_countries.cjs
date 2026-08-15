const fs = require('fs');

let content = fs.readFileSync('src/components/ContinentDoor.tsx', 'utf8');

const regex = /{continent\.countries\?\.map\(\(country, i\) => \([\s\S]*?<\/button>\s*\)\)}/m;

const newRender = `{continent.countries?.map((country, i) => {
                       const flag = getCountryFlag(country);
                       return (
                         <button
                            key={i}
                            onClick={() => setSelectedCountry(country)}
                           className="flex items-center gap-3 p-3 bg-zinc-900/50 border border-zinc-800/50 hover:border-amber-500/50 hover:bg-zinc-800/50 rounded-md transition-all text-left group"
                         >
                           {flag ? (
                             <span className="text-lg md:text-xl drop-shadow-[0_0_8px_rgba(255,255,255,0.1)] group-hover:scale-110 transition-transform">{flag}</span>
                           ) : (
                             <div className="w-1.5 h-1.5 rounded-full bg-amber-500/50 group-hover:bg-amber-400 transition-colors" />
                           )}
                           <span className="text-zinc-300 group-hover:text-amber-100 font-mono text-[10px] md:text-xs tracking-wider uppercase transition-colors">{country}</span>
                         </button>
                       );
                     })}`;

content = content.replace(regex, newRender);

fs.writeFileSync('src/components/ContinentDoor.tsx', content);
