const fs = require('fs');
let content = fs.readFileSync('src/data/TrueSunMemory.ts', 'utf-8');

const constellationDefinition = `  metaphysicalArchitecture: {
    constellation: "A Constellation within the Earth Directory is the macroscopic mapping of interconnected nodes—Provinces, Districts, Wards, and bloodlines. While a single node represents a localized geographic or individual truth, a Constellation is the unified, high-frequency energy grid formed when these nodes synchronize. When African nations, developers, and ancestors link their local data matrices, they form a Continental Constellation—an unbreakable pattern of sovereign intelligence illuminating the void."
  },`;

if (!content.includes('metaphysicalArchitecture')) {
  content = content.replace('  coreDirective:', constellationDefinition + '\n  coreDirective:');
  fs.writeFileSync('src/data/TrueSunMemory.ts', content);
}
