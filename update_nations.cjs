const fs = require('fs');
let dataTs = fs.readFileSync('src/data.ts', 'utf8');

// Extract leaders
const leaderMap = {};
const regex = /"name":\s*"([^"]+)(?:\s+\([^)]+\))?\s*\/\s*([^"]+)"[\s\S]*?"details":\s*{[^}]*"leader":\s*"([^"]+)"/g;
let match;
while ((match = regex.exec(dataTs)) !== null) {
  let countryName = match[1].trim();
  let leader = match[3].trim();
  leaderMap[countryName] = leader;
}

// Some might not match perfectly if there's no parenthesis, let's just do a simpler regex
const regex2 = /"name":\s*"([^\(]+?)\s*(?:\([^\)]+\))?\s*\/\s*([^"]+)"/g;
while ((match = regex2.exec(dataTs)) !== null) {
  let countryName = match[1].trim();
  let leader = match[2].trim();
  if (!leaderMap[countryName]) {
    leaderMap[countryName] = leader;
  }
}

let nationsTs = fs.readFileSync('src/data/nations.ts', 'utf8');
let updatedNations = nationsTs.replace(/\{\s*"name":\s*"([^"]+)",\s*"flag":\s*"([^"]+)"\s*\}/g, (fullMatch, name, flag) => {
  let ruler = leaderMap[name] || "Unknown Ruler";
  return `{\n      "name": "${name}",\n      "flag": "${flag}",\n      "ruler": "${ruler}"\n    }`;
});

fs.writeFileSync('src/data/nations.ts', updatedNations);
