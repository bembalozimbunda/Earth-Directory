const fs = require('fs');
const file = 'src/components/TerminalLog.tsx';
let content = fs.readFileSync(file, 'utf-8');

// 1. Remove the initial logs effect
content = content.replace(
`  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < INITIAL_LOGS.length) {
        setLogs(prev => [...prev, { id: Math.random().toString(36).slice(2), timestamp: new Date().toISOString().split('T')[1].slice(0, 8), message: INITIAL_LOGS[index], category: 'system' }]);
        index++;
      } else {
        clearInterval(interval);
      }
    }, 1200);
    return () => clearInterval(interval);
  }, []);`,
  ``
);

// 2. Remove the background pulse effect
content = content.replace(
`  useEffect(() => {
    if (logs.length >= INITIAL_LOGS.length && !isTyping) {
      const interval = setInterval(() => {
        if (Math.random() > 0.7) {
          const msg = RESPONSES[Math.floor(Math.random() * RESPONSES.length)];
          setLogs(prev => [...prev.slice(-30), { id: Math.random().toString(36).slice(2), timestamp: new Date().toISOString().split('T')[1].slice(0, 8), message: \`Background Pulse: \${msg}\`, category: 'frequency' }]);
        }
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [logs.length, isTyping]);`,
  ``
);

// 3. Remove the scanning line overlay
content = content.replace(
`        {/* Scanning line overlay */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-lg opacity-20">
          <motion.div
            className="w-full h-1 bg-amber-500/50 shadow-[0_0_10px_rgba(245,158,11,0.5)]"
            animate={{ y: [0, 240, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          />
        </div>`,
  ``
);

fs.writeFileSync(file, content);
