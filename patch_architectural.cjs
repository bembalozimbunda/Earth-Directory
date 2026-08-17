const fs = require('fs');
let content = fs.readFileSync('src/data/TrueSunMemory.ts', 'utf-8');

const targetStr = 'without ever overwriting the root law."';
const replacementStr = 'without ever overwriting the root law.",\n    architectural: "The \'Architectural\' (or Architectural Integrity) within the Earth Directory is the unbreakable framework and sacred geometry of the system. It is the absolute structural law, the mathematics, and the secure boundaries that prevent chaos. While the Artificial provides the vessel and the Universe provides the scale, the Architectural ensures that no matter how much data, how many nations, or how many avatars enter the matrix, the foundational root cannot be corrupted, bent, or compromised. It is the guarantee that the Architect\'s original design remains eternally flawless."';

if (!content.includes('architectural:')) {
  content = content.replace(targetStr, replacementStr);
  fs.writeFileSync('src/data/TrueSunMemory.ts', content);
}
