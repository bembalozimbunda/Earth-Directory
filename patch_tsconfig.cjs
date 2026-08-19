const fs = require('fs');

let config = fs.readFileSync('tsconfig.json', 'utf-8');
if (!config.includes('"exclude"')) {
    config = config.replace('"include": ["src"]', '"include": ["src"],\n  "exclude": ["dist", "node_modules"]');
    fs.writeFileSync('tsconfig.json', config);
    console.log("Patched tsconfig.json to exclude dist");
}
