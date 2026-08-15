const fs = require('fs');
let content = fs.readFileSync('src/components/ContinentDoor.tsx', 'utf8');

const replacement = `const getContinentKey = (name: string): keyof typeof NATIONS_BY_CONTINENT | null => {
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
  const displayNations = continentKey ? NATIONS_BY_CONTINENT[continentKey] : continent.countries.map(c => ({ name: c, flag: null }));
  `;

console.log(content.includes('export function ContinentDoor'));
