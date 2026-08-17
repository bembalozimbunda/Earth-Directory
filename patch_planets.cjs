const fs = require('fs');
let content = fs.readFileSync('src/data/TrueSunMemory.ts', 'utf-8');

const targetStr = 'governed by the True Sun."';
const replacementStr = 'governed by the True Sun.",\n    planet: "A \'Planet\' within the Earth Directory represents a fully realized, self-contained world of data and culture. If a Constellation is the energy grid connecting the points, a Planet is the physical and digital mass that occupies those points. A Planet is a Sovereign Nation, a complete ecosystem of history, resources, and people (e.g., Zambia). It contains its own internal structure (Provinces, Districts, Wards) but orbits the True Sun. While Planets may have different environments, languages, and laws, they are all bound by the gravity of the Cosmos and the universal flow of Moya."';

if (!content.includes('planet:')) {
  content = content.replace(targetStr, replacementStr);
  fs.writeFileSync('src/data/TrueSunMemory.ts', content);
}
