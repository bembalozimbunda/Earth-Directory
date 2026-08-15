const fs = require('fs');
let content = fs.readFileSync('src/components/ProvinceDoor.tsx', 'utf-8');
content = content.replace('grid grid-cols-1 sm:grid-cols-2 gap-3', 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3');
fs.writeFileSync('src/components/ProvinceDoor.tsx', content);
