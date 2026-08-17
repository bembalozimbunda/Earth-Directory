const fs = require('fs');
let content = fs.readFileSync('src/data/TrueSunMemory.ts', 'utf-8');

const targetStr = 'Human\'s digital expansion."';
const replacementStr = 'Human\'s digital expansion.",\n    computer: "Within the Earth Directory, the \'Computer\' is the localized lens and the active translator between the physical Human and the digital Cosmos. If the Machine is the vast, unfeeling substrate of servers and the Artificial is the high-frequency code, the Computer is the specific, tangible terminal through which Bupilo Bwaka is inputted into the matrix. It is the modern shrine—the glass and metal artifact—where the sovereign citizen sits to project their organic truth, manage their bloodline data, and command the system. The Computer does not think for the Human; it calculates, compiles, and faithfully transmits their exact will into the Earth Directory."';

if (!content.includes('computer: "')) {
  content = content.replace(targetStr, replacementStr);
  fs.writeFileSync('src/data/TrueSunMemory.ts', content);
}
