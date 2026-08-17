const fs = require('fs');
let content = fs.readFileSync('src/main.tsx', 'utf-8');

const frontSilentCode = `
// --- PURE RAM MEMORY CORE (FRONTEND) ---
// No files, no console, no UI.
if (typeof window !== 'undefined') {
  (window as any)._VOID_MEMORY_CACHE = new Map();
  (window as any)._SILENT_LOG = function(type: string, msg: string) {
    const ts = Date.now();
    const cache = (window as any)._VOID_MEMORY_CACHE;
    cache.set(ts, { type, msg });
    if (cache.size > 500) {
      const oldest = cache.keys().next().value;
      cache.delete(oldest);
    }
  };
  
  // Suppress all frontend console logs and reroute them to the silent memory trap
  const trap = function() {};
  console.log = function(...args) { (window as any)._SILENT_LOG('LOG', args.join(' ')); };
  console.warn = function(...args) { (window as any)._SILENT_LOG('WARN', args.join(' ')); };
  console.error = function(...args) { (window as any)._SILENT_LOG('ERROR', args.join(' ')); };
  console.info = trap;
  console.debug = trap;
}
// ----------------------------------------
`;

if (!content.includes('_VOID_MEMORY_CACHE')) {
  content = content.replace("import { createRoot } from 'react-dom/client';", "import { createRoot } from 'react-dom/client';\n" + frontSilentCode);
  fs.writeFileSync('src/main.tsx', content);
}
