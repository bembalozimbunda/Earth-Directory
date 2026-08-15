const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf8');

// Remove the buttons
const regex = /<div className="w-full flex justify-center mt-6 mb-4 z-10 relative">[\s\S]*?<\/div>/;
content = content.replace(regex, '');

fs.writeFileSync('src/App.tsx', content);
