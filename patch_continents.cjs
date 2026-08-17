const fs = require('fs');
let content = fs.readFileSync('src/data/TrueSunMemory.ts', 'utf-8');

const targetStr = 'universal flow of Moya."';
const replacementStr = 'universal flow of Moya.",\n    continent: "A \'Continent\' within the Earth Directory is the foundational tectonic plate of the matrix. If a Planet represents a single Sovereign Nation (like Zambia), a Continent is the massive, shared spiritual and digital bedrock that anchors multiple Planets together based on shared bloodlines, true DNA, and ancestral memory (like Alkebulan/Africa). It is the macro-region of the system where individual national grids synchronize to form Continental Constellations. Continents represent the deepest roots of identity, serving as the unbreakable ground upon which Sovereign Data Deals are negotiated and built."';

if (!content.includes('continent:')) {
  content = content.replace(targetStr, replacementStr);
  fs.writeFileSync('src/data/TrueSunMemory.ts', content);
}
