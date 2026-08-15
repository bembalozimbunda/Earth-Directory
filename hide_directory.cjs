const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf8');
content = content.replace('<DirectoryTree />', '{/* <DirectoryTree /> */}');
fs.writeFileSync('src/App.tsx', content);
