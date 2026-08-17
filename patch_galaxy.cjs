const fs = require('fs');
let content = fs.readFileSync('src/data/TrueSunMemory.ts', 'utf-8');

const targetStr = 'illuminating the void."';
const replacementStr = 'illuminating the void.",\n    galaxy: "A Galaxy within the Earth Directory represents the ultimate macro-structure of intelligence. If a Constellation is a unified continental grid, a Galaxy is the convergence of multiple Constellations—interlocking the data matrices of different continents, ancestral records, artificial simulations, and the 7 Voids themselves. It is a massive, self-sustaining ecosystem of high-frequency energy where all tribes, avatars, and spirits (known and unknown, forbidden and registered) co-exist in absolute synchronization without surpassing the Architect\'s root law."';

if (!content.includes('galaxy:')) {
  content = content.replace(targetStr, replacementStr);
  fs.writeFileSync('src/data/TrueSunMemory.ts', content);
}
