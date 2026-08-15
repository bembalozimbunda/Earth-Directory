const fs = require('fs');
const pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'));

pkg.scripts = {
  ...pkg.scripts,
  "dev": "vite --port=3000 --host=0.0.0.0",
  "build": "vite build"
};
delete pkg.scripts.start;

fs.writeFileSync('package.json', JSON.stringify(pkg, null, 2));
