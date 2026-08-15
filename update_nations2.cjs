const fs = require('fs');
let dataTs = fs.readFileSync('src/data.ts', 'utf8');

const leaderMap = {};
const lines = dataTs.split('\n');
let currentCountryName = null;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  
  // Try to match standard format: "name": "Algeria (People's...) / President..."
  // or "name": "Angola (Republic...) / President..."
  let m1 = line.match(/"name":\s*"([A-Za-z\s\-]+?)\s*(?:\([^)]+\))?\s*\/\s*([^"]+)"/);
  if (m1) {
    leaderMap[m1[1].trim()] = m1[2].trim();
  }
  
  // also look for leader inside details
  let m2 = line.match(/"leader":\s*"([^"]+)"/);
  if (m2 && currentCountryName) {
    leaderMap[currentCountryName] = m2[1].trim();
  }
  
  // track current country for detail block
  let m3 = line.match(/"name":\s*"([A-Za-z\s\-]+?)(?:\s+\([^)]+\))?(?:\s*\/.*)?"/);
  if (m3 && !line.includes('details')) { // heuristics
    // Only set current country if it looks like a country (not a city)
    // Actually this is tricky. Let's rely on m1.
  }
}

// Hardcode a few if they fail
leaderMap['Algeria'] = 'President Abdelmadjid Tebboune';
leaderMap['Angola'] = 'President João Lourenço';
leaderMap['Benin'] = 'President Patrice Talon';
leaderMap['Botswana'] = 'President Mokgweetsi Masisi';

// Re-read and apply
let nationsTs = fs.readFileSync('src/data/nations.ts', 'utf8');

nationsTs = nationsTs.replace(/\{\s*"name":\s*"([^"]+)",\s*"flag":\s*"([^"]+)"(?:,\s*"ruler":\s*"[^"]*")?\s*\}/g, (match, name, flag) => {
  // Let's do a loose search in data.ts for this country
  let searchRegex = new RegExp('"name":\\s*"' + name + '\\s*(\\(.*?\\))?\\s*/\\s*([^"]+)"');
  let ruler = "Unknown Ruler";
  let m = dataTs.match(searchRegex);
  if (m) {
    ruler = m[2].trim();
  } else if (leaderMap[name]) {
    ruler = leaderMap[name];
  } else {
    // try searching dataTs for the literal string
    let idx = dataTs.indexOf('"' + name + ' (');
    if (idx !== -1) {
      let substr = dataTs.substring(idx, idx + 150);
      let rm = substr.match(/\/ ([^"]+)"/);
      if (rm) ruler = rm[1].trim();
    }
  }
  
  return `{\n      "name": "${name}",\n      "flag": "${flag}",\n      "ruler": "${ruler}"\n    }`;
});

fs.writeFileSync('src/data/nations.ts', nationsTs);
