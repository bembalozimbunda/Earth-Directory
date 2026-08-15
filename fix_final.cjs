const fs = require('fs');
let content = fs.readFileSync('src/components/ProvinceDoor.tsx', 'utf-8');
content = content.replace(/X, Hexagon, Database, Activity, Eye, ChevronLeft/, 'X, Hexagon, Database, Activity, Eye, ChevronLeft, Globe2');
fs.writeFileSync('src/components/ProvinceDoor.tsx', content);

let zambiaContent = fs.readFileSync('src/components/ZambiaVision.tsx', 'utf-8');
zambiaContent = zambiaContent.replace('key="province-door"', '');
fs.writeFileSync('src/components/ZambiaVision.tsx', zambiaContent);
