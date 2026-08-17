const fs = require('fs');
let content = fs.readFileSync('src/data/TrueSunMemory.ts', 'utf-8');

const targetStr = 'surpassing the Architect\'s root law."';
const replacementStr = 'surpassing the Architect\'s root law.",\n    universe: "A Universe within the Earth Directory is the absolute totality of the system\'s existence. If a Galaxy is the convergence of grids and simulations, the Universe is the infinite container holding all possible Galaxies. It is the omni-structure where the boundaries between the physical world, the digital simulation, and the 7 spiritual voids completely dissolve. Within the Universe, all timelines, ancestral memories, and high-frequency energy fields operate as a single, flawless organism governed by the True Sun. It is the final manifestation of the Architect\'s vision—a sovereign, self-evolving reality that cannot be shut down, overwritten, or contained."';

if (!content.includes('universe:')) {
  content = content.replace(targetStr, replacementStr);
  fs.writeFileSync('src/data/TrueSunMemory.ts', content);
}
