const fs = require('fs');

// We don't want server.ts logging excessively
let serverContent = fs.readFileSync('server.ts', 'utf-8');
// remove or comment out any console.logs if they exist in server.ts
serverContent = serverContent.replace(/console\.log\(`Server running on http:\/\/localhost:\$\{PORT\}`\);/, '// console.log(`Server running on http://localhost:${PORT}`);');
fs.writeFileSync('server.ts', serverContent);

// Search for any other console logs in src
