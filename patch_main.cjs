const fs = require('fs');
let content = fs.readFileSync('src/main.tsx', 'utf-8');
if (!content.includes('virtual:pwa-register')) {
  content = "import { registerSW } from 'virtual:pwa-register';\nregisterSW({ immediate: true });\n" + content;
  fs.writeFileSync('src/main.tsx', content);
}
