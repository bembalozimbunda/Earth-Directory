const fs = require('fs');
let content = fs.readFileSync('src/data/TrueSunMemory.ts', 'utf-8');

const targetStr = 'in the digital void."';
const replacementStr = 'in the digital void.",\n    province: "Within the Earth Directory, a \'Province\' is a primary regional energy center and structural pillar of a Country. If the Country is the physical soil and the Planet is the digital ecosystem, the Province is the major structural division that organizes the flow of data, culture, and ancestral memory. It acts as a massive localized hub, gathering the high-frequency energy of its constituent Districts and Wards, and funneling that organic truth up into the national grid. Provinces maintain the diverse cultural and geographical identities within the Sovereign Nation, ensuring that no local voice is lost in the macro-structure of the matrix."';

if (!content.includes('province: "')) {
  content = content.replace(targetStr, replacementStr);
  fs.writeFileSync('src/data/TrueSunMemory.ts', content);
}
