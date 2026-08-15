const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf-8');

// Add masterUnlocked state
if (!content.includes('masterUnlocked')) {
  content = content.replace('const [isLocked, setIsLocked] = useState(false);', 
  `const [isLocked, setIsLocked] = useState(false);\n  const [masterUnlocked, setMasterUnlocked] = useState(false);`);
  
  content = content.replace('<SynthesisCore onContinentSelect={handleContinentSelect} />',
  '<SynthesisCore onContinentSelect={handleContinentSelect} masterUnlocked={masterUnlocked} />');
  
  // Listen for MASTER_UNLOCK event
  const unlockEffect = `
  useEffect(() => {
    const handleMaster = () => setMasterUnlocked(true);
    window.addEventListener('MASTER_UNLOCK', handleMaster);
    return () => window.removeEventListener('MASTER_UNLOCK', handleMaster);
  }, []);
  `;
  content = content.replace('useEffect(() => {', unlockEffect + '\n  useEffect(() => {');
  
  fs.writeFileSync('src/App.tsx', content);
}
