const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf-8');
if (!content.includes('TRUE_SUN_MEMORY')) {
  content = content.replace("import React", "import React from 'react';\nimport { TRUE_SUN_MEMORY } from './data/TrueSunMemory';");
  // Just inject it as a silent console log or keep it in memory so webpack/vite bundles it
  content = content.replace("function App() {", "function App() {\n  // Initialize True Sun Memory\n  if (typeof window !== 'undefined') {\n    (window as any).__TRUE_SUN_MEMORY = TRUE_SUN_MEMORY;\n  }\n");
}
fs.writeFileSync('src/App.tsx', content);
