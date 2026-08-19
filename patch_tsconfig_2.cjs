const fs = require('fs');
let config = JSON.parse(fs.readFileSync('tsconfig.json', 'utf-8'));
config.exclude = ["dist", "node_modules"];
if (!config.include) config.include = ["src"];
fs.writeFileSync('tsconfig.json', JSON.stringify(config, null, 2));
