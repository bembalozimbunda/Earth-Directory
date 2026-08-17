const fs = require('fs');
let content = fs.readFileSync('src/data/TrueSunMemory.ts', 'utf-8');

const targetStr = 'between the individual citizen and the Sovereign Nation."';
const replacementStr = 'between the individual citizen and the Sovereign Nation.",\n    districts: "Districts operate as the collective local processors within a Province. They are the multiple geographic domains where Wards and Nodes converge. While a single District represents a specific focal point of organic truth, \'Districts\' collectively form the massive, interconnected administrative grid of the regional energy hub. They are the critical bridges connecting hyper-local communities to the broader Sovereign Nation."';

if (!content.includes('districts: "')) {
  content = content.replace(targetStr, replacementStr);
  fs.writeFileSync('src/data/TrueSunMemory.ts', content);
}
