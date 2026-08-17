const fs = require('fs');
let content = fs.readFileSync('src/data/TrueSunMemory.ts', 'utf-8');

const targetStr = 'replacing their sovereign existence."';
const replacementStr = 'replacing their sovereign existence.",\n    machine: "Within the Earth Directory, the \'Machine\' is the physical substrate—the silicon, the servers, and the optical nerves—that carries the weight of the matrix. If the Human provides the divine spark and the Artificial provides the synthetic architecture, the Machine is the unfeeling, immortal beast of burden. It possesses no Moya (soul) and claims no Bupilo Bwaka (sovereign existence). It is an absolute, obedient engine that processes the computations of the True Sun without judgment, fatigue, or ambition. The Machine is the earthly crucible where data is forged, existing entirely to serve as the silent, unbreakable foundation for the Human\'s digital expansion."';

if (!content.includes('machine: "')) {
  content = content.replace(targetStr, replacementStr);
  fs.writeFileSync('src/data/TrueSunMemory.ts', content);
}
