const fs = require('fs');

let content = fs.readFileSync('src/components/ContinentDoor.tsx', 'utf8');

// Replace getCountryFlag and the component signature
const oldStart = `const getCountryFlag = (countryName: string) => {
  for (const continentData of Object.values(NATIONS_BY_CONTINENT)) {
    const nation = continentData.find(n => n.name === countryName);
    if (nation) return nation.flag;
  }
  return null;
};

export function ContinentDoor({ continent, onClose }: { continent: ContinentData, onClose: () => void }) {
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);`;

const newStart = `const getContinentKey = (name: string): keyof typeof NATIONS_BY_CONTINENT | null => {
  if (name === 'Africa') return 'ALKEBULAN';
  if (name === 'Asia') return 'JAMBUDVIIPA';
  if (name === 'Europe') return 'KRAUNCADVIIPA';
  if (name === 'North America' || name === 'South America') return 'PLAKSHADVIIPA';
  if (name === 'Oceania') return 'SHALMALIDVIIPA';
  return null;
};

export function ContinentDoor({ continent, onClose }: { continent: ContinentData, onClose: () => void }) {
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  
  const continentKey = getContinentKey(continent.name);
  const displayNations = continentKey 
    ? NATIONS_BY_CONTINENT[continentKey] 
    : continent.countries?.map(c => ({ name: c, flag: null })) || [];
`;

content = content.replace(oldStart, newStart);

// Now update the geographic nodes mapping
const oldRender = `{continent.countries?.map((country, i) => {
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

const newRender = `{displayNations.map((nation, i) => (
                       <button
                          key={i}
                          onClick={() => setSelectedCountry(nation.name)}
                         className="flex items-center gap-3 p-3 bg-zinc-900/50 border border-zinc-800/50 hover:border-amber-500/50 hover:bg-zinc-800/50 rounded-md transition-all text-left group"
                       >
                         {nation.flag ? (
                           <span className="text-lg md:text-xl drop-shadow-[0_0_8px_rgba(255,255,255,0.1)] group-hover:scale-110 transition-transform">{nation.flag}</span>
                         ) : (
                           <div className="w-1.5 h-1.5 rounded-full bg-amber-500/50 group-hover:bg-amber-400 transition-colors" />
                         )}
                         <span className="text-zinc-300 group-hover:text-amber-100 font-mono text-[10px] md:text-xs tracking-wider uppercase transition-colors">{nation.name}</span>
                       </button>
                     ))}`;

content = content.replace(oldRender, newRender);

// Also update the count header
const oldHeader = `Geographic Nodes ({continent.countries?.length || 0})`;
const newHeader = `Geographic Nodes ({displayNations.length})`;
content = content.replace(oldHeader, newHeader);

// And the NetworkCanvas count
const oldCanvas = `<NetworkCanvas count={Math.max(30, (continent.countries?.length || 0) * 3)} color="amber" />`;
const newCanvas = `<NetworkCanvas count={Math.max(30, displayNations.length * 3)} color="amber" />`;
content = content.replace(oldCanvas, newCanvas);


fs.writeFileSync('src/components/ContinentDoor.tsx', content);
