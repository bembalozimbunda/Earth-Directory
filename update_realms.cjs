const fs = require('fs');
let content = fs.readFileSync('src/data/zambiaDistricts.ts', 'utf-8');

// Update Southern Province to Barotseland Realm
content = content.replace(
  /name: 'Southern',\n\s*macroState: 'Zambezian Heartland',/,
  "name: 'Southern',\n    macroState: 'Barotseland Realm',"
);

// Update North-Western Province to Barotseland Realm
content = content.replace(
  /name: 'North-Western',\n\s*macroState: 'Zambezian Heartland',/,
  "name: 'North-Western',\n    macroState: 'Barotseland Realm',"
);

fs.writeFileSync('src/data/zambiaDistricts.ts', content);
