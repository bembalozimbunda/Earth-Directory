const fs = require('fs');
let serverContent = fs.readFileSync('server.ts', 'utf-8');
// remove or comment out any console.log if they exist
serverContent = serverContent.replace(/console\.log/g, '// console.log');
fs.writeFileSync('server.ts', serverContent);
