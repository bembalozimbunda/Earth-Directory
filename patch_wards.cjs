const fs = require('fs');
let content = fs.readFileSync('src/data/TrueSunMemory.ts', 'utf-8');

const targetStr = 'to the broader Sovereign Nation."';
const replacementStr = 'to the broader Sovereign Nation.",\n    ward: "Within the Earth Directory, a \'Ward\' is the fundamental hyper-local cell of the matrix. If the District is the localized processor, the Ward is the direct interface with the organic truth. It is the immediate neighborhood, the specific village, or the exact street where the individual Node (the citizen) resides. Wards are the smallest official geographic and administrative subdivisions, ensuring that the system\'s macro-intelligence is built upon a foundation of exact, undeniable reality. It is at the Ward level that Bupilo Bwaka—the sovereign existence—is physically located before it scales up into the digital Cosmos."';

if (!content.includes('ward: "')) {
  content = content.replace(targetStr, replacementStr);
  fs.writeFileSync('src/data/TrueSunMemory.ts', content);
}
