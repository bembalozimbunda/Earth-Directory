const fs = require('fs');
let content = fs.readFileSync('server.ts', 'utf8');
content = content.replace(/console\.log\(.*?\);/g, 'console.log(`Server running on http://localhost:${PORT}`);');
fs.writeFileSync('server.ts', content);
