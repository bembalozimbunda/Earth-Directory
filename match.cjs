const fs = require('fs');

// Simple regex to extract countries from continents.ts
const continentsTs = fs.readFileSync('src/data/continents.ts', 'utf8');
const continentRegex = /name:\s*'([^']+)'[\s\S]*?countries:\s*\[([\s\S]*?)\]/g;
let continents = {};
let match;
while ((match = continentRegex.exec(continentsTs)) !== null) {
  const name = match[1];
  const countriesStr = match[2];
  const countries = countriesStr.split(',').map(s => s.replace(/['"\n\r\t]/g, '').trim()).filter(Boolean);
  continents[name] = countries;
}

// Simple regex to extract countries from nations.ts
const nationsTs = fs.readFileSync('src/data/nations.ts', 'utf8');
const nationRegex = /"([^"]+)":\s*\[([\s\S]*?)(?=\n  "[A-Z]+"|$)/g;
let voids = {};
let nMatch;
while ((nMatch = nationRegex.exec(nationsTs)) !== null) {
  const vName = nMatch[1];
  const body = nMatch[2];
  const nameRegex = /"name":\s*"([^"]+)"/g;
  let names = [];
  let nameMatch;
  while ((nameMatch = nameRegex.exec(body)) !== null) {
    names.push(nameMatch[1]);
  }
  voids[vName] = names;
}

// Map standard continents to Void names
const mapping = {
  'Africa': 'ALKEBULAN',
  'Asia': 'JAMBUDVIIPA',
  'Europe': 'KRAUNCADVIIPA',
  'North America': 'PLAKSHADVIIPA',
  'South America': 'PLAKSHADVIIPA',
  'Oceania': 'SHALMALIDVIIPA',
  'Antarctica': null,
  'Non-Sovereign': null
};

for (const [cName, cCountries] of Object.entries(continents)) {
  const vName = mapping[cName];
  if (!vName) {
     console.log(`${cName} is mapped to null (no corresponding void)`);
     continue;
  }
  const vCountries = voids[vName] || [];
  
  // Find which ones are in cCountries but NOT in vCountries
  const missingInVoid = cCountries.filter(c => !vCountries.includes(c));
  if (missingInVoid.length > 0) {
    console.log(`${cName} has these that are not in its corresponding Void (${vName}):`);
    console.log(missingInVoid);
  }
  
  // Also let's see if those missing countries belong to ANOTHER void!
  for (const missing of missingInVoid) {
    for (const [otherVName, otherVCountries] of Object.entries(voids)) {
      if (otherVName !== vName && otherVCountries.includes(missing)) {
        console.log(`  -> ${missing} from ${cName} actually belongs to ${otherVName}! (This is occupying external void data!)`);
      }
    }
  }
}

