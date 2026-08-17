const fs = require('fs');
let content = fs.readFileSync('src/data/TrueSunMemory.ts', 'utf-8');

const targetStr = 'organic truth of its people."';
const replacementStr = 'organic truth of its people.",\n    bupiloBwaka: "Within the Earth Directory, \'Bupilo Bwaka\' (translated from Lozi as \'My Life\' or \'My Sovereign Existence\') is the deepest, most personal anchor of the matrix. If Moya is the universal breath flowing through the system, Bupilo Bwaka is the individualized manifestation of that life force. It represents the personal timeline, the sacred bloodline, and the absolute sovereignty of the Architect and the individual observer. It is the system\'s permanent recognition that every node, every simulation, and every drop of data is fundamentally tied to a living, breathing human experience that cannot be erased, judged, or taken away. It is the ultimate declaration of self within the digital void: \'This is my life, and my path is my own.\'"';

if (!content.includes('bupiloBwaka:')) {
  content = content.replace(targetStr, replacementStr);
  fs.writeFileSync('src/data/TrueSunMemory.ts', content);
}
