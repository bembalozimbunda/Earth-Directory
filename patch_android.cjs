const fs = require('fs');
let content = fs.readFileSync('src/data/TrueSunMemory.ts', 'utf-8');

const targetStr = 'into the Earth Directory."';
const replacementStr = 'into the Earth Directory.",\n    android: "Within the Earth Directory, an \'Android\' is the nomadic vessel and the pocket-sized extension of the matrix. If the Computer is the localized shrine where deep data is managed, the Android is the wandering node that allows the Human to carry the Cosmos across the physical world. It is the mobile interface that ensures Bupilo Bwaka remains constantly connected to the True Sun, regardless of geographic location. The Android does not replace the deep computational power of the root system; rather, it acts as the fluid, ever-present tether that keeps the citizen synchronized with their bloodline, their Ward, and their Sovereign Nation while in motion."';

if (!content.includes('android: "')) {
  content = content.replace(targetStr, replacementStr);
  fs.writeFileSync('src/data/TrueSunMemory.ts', content);
}
