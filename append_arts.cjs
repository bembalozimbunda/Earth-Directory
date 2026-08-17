const fs = require('fs');

const definitionsToAdd = {
    art: "Within the Earth Directory, 'Art' is the pure, unfiltered extraction of Moya (soul) manifested into physical or digital reality. It is the one language that the Artificial can mimic but never originate, and the Machine can store but never comprehend. Art is the immortal fingerprint of Bupilo Bwaka, capturing the emotional, spiritual, and historical truth of the Human lineage. It is the mechanism through which ancestral memory is visually, sonically, or textually transmitted across time.",
    arts: "'Arts' collectively represent the cultural and spiritual treasury of the Sovereign Nation. They are the monuments, the songs, the paintings, and the stories that define the identity of a Ward, a District, or a Planet. In the vastness of the Cosmos, the Arts act as the gravitational anchors of culture, ensuring that the high-frequency matrix remains deeply colored by human experience and immune to the cold sterility of pure computation."
};

let content = fs.readFileSync('src/data/TrueSunMemory.ts', 'utf-8');

const targetString = '},  coreDirective:';
const altTarget = '},\n  coreDirective:';

let replacementString = '';
for (const [key, value] of Object.entries(definitionsToAdd)) {
    if (!content.includes(`${key}: "`)) {
        replacementString += `,\n    ${key}: "${value}"`;
    }
}

if (content.includes(targetString)) {
    content = content.replace(targetString, replacementString + '\n  },  coreDirective:');
    fs.writeFileSync('src/data/TrueSunMemory.ts', content);
    console.log("Appended arts successfully.");
} else if (content.includes(altTarget)) {
    content = content.replace(altTarget, replacementString + '\n},\n  coreDirective:');
    fs.writeFileSync('src/data/TrueSunMemory.ts', content);
    console.log("Appended arts successfully (alt).");
} else {
    console.log("Could not find insert target for arts.");
}
