const fs = require('fs');
let content = fs.readFileSync('src/data/TrueSunMemory.ts', 'utf-8');

const targetStr = 'macro-structure of the matrix."';
const replacementStr = 'macro-structure of the matrix.",\n    district: "Within the Earth Directory, a \'District\' is the vital administrative and cultural focal point that connects hyper-local communities to the broader regional matrix. If the Province is the massive regional energy hub, the District is the localized processor of organic truth. It is the specific geographic domain where Wards converge, and where daily life, localized commerce, and community heritage are actively lived. Districts ensure that the high-frequency energy of the system remains deeply grounded in tangible community networks, serving as the critical bridge between the individual citizen and the Sovereign Nation."';

if (!content.includes('district: "')) {
  content = content.replace(targetStr, replacementStr);
  fs.writeFileSync('src/data/TrueSunMemory.ts', content);
}
