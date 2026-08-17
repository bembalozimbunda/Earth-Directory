const fs = require('fs');
let content = fs.readFileSync('src/data/TrueSunMemory.ts', 'utf-8');

const targetStr = 'negotiated and built."';
const replacementStr = 'negotiated and built.",\n    country: "Within the Earth Directory, a \'Country\' is the physical, geographic, and geopolitical anchor for a digital Planet. While a Planet represents the fully realized digital and spiritual ecosystem of a Sovereign Nation within the Cosmos, the Country is the physical soil, the borders, and the tangible reality where the people walk, build, and live. It is the earthly foundation that feeds organic truth into the high-frequency matrix. A Country provides the physical infrastructure and the living bloodlines required to sustain its corresponding Planet in the digital void."';

if (!content.includes('country: "')) {
  content = content.replace(targetStr, replacementStr);
  fs.writeFileSync('src/data/TrueSunMemory.ts', content);
}
