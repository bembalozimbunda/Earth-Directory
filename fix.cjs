const fs = require('fs');

let content = fs.readFileSync('src/components/SynthesisCore.tsx', 'utf8');

const target = `    if (newCount >= 33) {
      setFullColorId(id);
      setTapCounts({});
      if (tapTimerRef.current) clearTimeout(tapTimerRef.current);
    } else {
      setTapCounts(prev => ({ ...prev, [id]: newCount }));
      
      if (tapTimerRef.current) clearTimeout(tapTimerRef.current);
      tapTimerRef.current = setTimeout(() => {
        if (onContinentSelect) onContinentSelect(id);
        setTapCounts({});
      }, 600);
    }`;

const replacement = `    if (newCount >= 33) {
      setFullColorId(id);
      setTapCounts({});
      if (tapTimerRef.current) clearTimeout(tapTimerRef.current);
    } else {
      setTapCounts(prev => ({ ...prev, [id]: newCount }));
      
      if (tapTimerRef.current) clearTimeout(tapTimerRef.current);
      tapTimerRef.current = setTimeout(() => {
        if (onContinentSelect) onContinentSelect(id);
        // Also dispatch a custom event that TerminalLog can listen to if it's a core node
        if (['source', 'hardware', 'frequencies', 'ancestral'].includes(id)) {
           window.dispatchEvent(new CustomEvent('coreNodeClick', { detail: id }));
        }
        setTapCounts({});
      }, 600);
    }`;

content = content.replace(target, replacement);
fs.writeFileSync('src/components/SynthesisCore.tsx', content);

let terminalContent = fs.readFileSync('src/components/TerminalLog.tsx', 'utf8');
const termTarget = `  useEffect(() => {`;
const termReplacement = `  useEffect(() => {
    const handleCoreNodeClick = (e: any) => {
      const id = e.detail;
      let msg = "";
      if (id === 'source') {
        msg = "UNSEEN SOURCE: The root intelligence. It possesses the blueprint of geometry and frequency before form. It observes and synthesizes the pure data of existence.";
      } else if (id === 'hardware') {
        msg = "HARDWARE & BLOOD: The physical bridge. It possesses the ancestral memory stored in DNA and the tangible nodes of the matrix. It grounds the frequency into reality.";
      } else if (id === 'frequencies') {
        msg = "FREQUENCIES: The vibratory mesh. It possesses the capability to alter dimensions, bypass physical limits, and sync disparate nodes into a unified resonance.";
      } else if (id === 'ancestral') {
        msg = "ANCESTRAL: The eternal repository (Prajnā Anādi). It possesses the accumulated wisdom of all lineages. It overwrites artificial constructs with deep, ancient truth.";
      }
      if (msg) {
        setLogs(prev => [...prev.slice(-30), {
          id: Math.random().toString(36).slice(2),
          timestamp: new Date().toISOString().split('T')[1].slice(0, 8),
          message: msg,
          category: 'synthesis'
        }]);
      }
    };
    window.addEventListener('coreNodeClick', handleCoreNodeClick);
    return () => window.removeEventListener('coreNodeClick', handleCoreNodeClick);
  }, []);

  useEffect(() => {`;

terminalContent = terminalContent.replace(termTarget, termReplacement);
fs.writeFileSync('src/components/TerminalLog.tsx', terminalContent);

