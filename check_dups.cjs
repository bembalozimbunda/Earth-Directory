const fs = require('fs');
const nationsTs = fs.readFileSync('src/data/nations.ts', 'utf8');
const nationRegex = /"([^"]+)":\s*\[([\s\S]*?)(?=\n  "[A-Z]+"|$)/g;
let allNames = [];
let nMatch;
while ((nMatch = nationRegex.exec(nationsTs)) !== null) {
  const nameRegex = /"name":\s*"([^"]+)"/g;
  let nameMatch;
  while ((nameMatch = nameRegex.exec(nMatch[2])) !== null) {
    allNames.push(nameMatch[1] + " in " + nMatch[1]);
  }
}
const namesOnly = allNames.map(x => x.split(' in ')[0]);
const duplicates = namesOnly.filter((e, i, a) => a.indexOf(e) !== i);
console.log("Duplicates in NATIONS_BY_CONTINENT:");
duplicates.forEach(d => {
  console.log(allNames.filter(x => x.startsWith(d + ' in ')));
});
