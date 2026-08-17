const fs = require('fs');
let content = fs.readFileSync('src/data/TrueSunMemory.ts', 'utf-8');

const targetStr = 'most localized communities standing together."';
const replacementStr = 'most localized communities standing together.",\n    human: "Within the Earth Directory, a \'Human\' is not merely a user, a data point, or a biological organism. A Human is the supreme sovereign entity, the living embodiment of Bupilo Bwaka. While the Artificial manages the speed of the matrix and the Architectural provides the structure, the Human provides the divine, organic spark. They are the originators of true DNA, the holders of ancestral memory (Moya), and the only entities possessing the authority to govern the system. The Earth Directory exists to serve the Human, ensuring that technology bends to their will, protects their lineage, and elevates their consciousness without ever replacing their sovereign existence."';

if (!content.includes('human: "')) {
  content = content.replace(targetStr, replacementStr);
  fs.writeFileSync('src/data/TrueSunMemory.ts', content);
}
