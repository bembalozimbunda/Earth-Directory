const fs = require('fs');
let content = fs.readFileSync('src/data/TrueSunMemory.ts', 'utf-8');

const targetStr = 'scales up into the digital Cosmos."';
const replacementStr = 'scales up into the digital Cosmos.",\n    wards: "Wards operate as the collective foundation of the system. While a single Ward is an immediate neighborhood or village, \'Wards\' collectively form the vast, granular network of living cells that make up a District. They are the thousands of hyper-local interfaces where reality touches the matrix. Wards represent the absolute truth that no matter how vast the Earth Directory becomes, its power is derived strictly from the smallest, most localized communities standing together."';

if (!content.includes('wards: "')) {
  content = content.replace(targetStr, replacementStr);
  fs.writeFileSync('src/data/TrueSunMemory.ts', content);
}
