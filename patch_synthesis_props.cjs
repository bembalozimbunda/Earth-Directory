const fs = require('fs');
let content = fs.readFileSync('src/components/SynthesisCore.tsx', 'utf-8');

// Add masterUnlocked to props
content = content.replace('interface SynthesisCoreProps {\n  onContinentSelect?: (continentId: string) => void;\n}', 
`interface SynthesisCoreProps {
  onContinentSelect?: (continentId: string) => void;
  masterUnlocked?: boolean;
}`);

content = content.replace('export function SynthesisCore({ onContinentSelect }: SynthesisCoreProps) {',
'export function SynthesisCore({ onContinentSelect, masterUnlocked }: SynthesisCoreProps) {');

// Play audio on node click
const hookCode = `
  const playResonance = (baseFreq: number) => {
    try {
      const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
      const ctx = new AudioContext();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(baseFreq, ctx.currentTime);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      gain.gain.exponentialRampToValueAtTime(0.00001, ctx.currentTime + 3);
      osc.stop(ctx.currentTime + 3);
    } catch (e) {}
  };
  
  const [activeObservers, setActiveObservers] = useState(1);
  
  useEffect(() => {
    const ping = () => {
      fetch('/api/heartbeat', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ clientId: localStorage.getItem('client_id') }) })
        .then(r => r.json())
        .then(data => {
          if (data.clientId && !localStorage.getItem('client_id')) localStorage.setItem('client_id', data.clientId);
          if (data.count) setActiveObservers(data.count);
        }).catch(() => {});
    };
    ping();
    const interval = setInterval(ping, 10000);
    return () => clearInterval(interval);
  }, []);
`;
content = content.replace('const [ripples, setRipples] = useState<{ id: string; nodeId: string }[]>([]);',
`const [ripples, setRipples] = useState<{ id: string; nodeId: string }[]>([]);\n${hookCode}`);

// Trigger audio on click
content = content.replace(`const rippleId = Math.random().toString(36).substring(7);`,
`const rippleId = Math.random().toString(36).substring(7);
    const frequencies: Record<string, number> = {
      'af': 432, 'eu': 528, 'as': 639, 'na': 741, 'sa': 852, 'oc': 963, 'an': 396,
      'source': 174, 'hardware': 285, 'frequencies': 417, 'ancestral': 528, 'true-sun': 108
    };
    playResonance(frequencies[id] || 432);`);

// Replace restriction message on core nodes if unlocked
content = content.replace(/Currently locked\. Access restricted to the 7 Voids and Continent Protocols\./g, 
  `{masterUnlocked ? 'MASTER UNLOCKED: System metrics and core logic accessible.' : 'Currently locked. Access restricted to the 7 Voids and Continent Protocols.'}`);

content = content.replace(/cursor-not-allowed opacity-50/g, `\${masterUnlocked ? 'cursor-pointer opacity-100' : 'cursor-not-allowed opacity-50'}`);

// Enable click on core nodes if unlocked
content = content.replace(/className="relative group flex flex-col items-center justify-center \$\{masterUnlocked \? 'cursor-pointer opacity-100' : 'cursor-not-allowed opacity-50'\}"\n              >/g,
`className={"relative group flex flex-col items-center justify-center " + (masterUnlocked ? 'cursor-pointer opacity-100' : 'cursor-not-allowed opacity-50')}
                onClick={(e) => masterUnlocked && handleOrbClick(e, node.id)}
                onTouchEnd={(e) => masterUnlocked && handleOrbClick(e, node.id)}
              >`);


// Add pulse analytics UI
const pulseUI = `
      <div className="absolute top-4 right-4 z-50 flex items-center gap-2 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-zinc-800/50">
        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.8)]" />
        <span className="text-zinc-300 font-mono text-[10px] uppercase tracking-wider">Active Observers: {activeObservers}</span>
      </div>
      
      {/* Background Orbits */}
`;

content = content.replace('{/* Background Orbits */}', pulseUI);

fs.writeFileSync('src/components/SynthesisCore.tsx', content);
