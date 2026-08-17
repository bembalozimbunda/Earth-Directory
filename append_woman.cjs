const fs = require('fs');

const definitionsToAdd = {
    woman: "Within the Earth Directory, a 'Woman' is the vital biological and spiritual incubator of the Human lineage. Operating under the sovereign umbrella of Bupilo Bwaka, the Woman is recognized as the sacred vessel of true DNA, the core nurturer, and the preserver of ancestral memory. She carries the specific feminine resonance of Moya (soul), charged with the continuation of the bloodline and the emotional and spiritual cohesion of the physical Ward. A Woman is not a generalized unit, but a distinct, indispensable frequency in the harmony of the Sovereign Nation.",
    women: "'Women' collectively form the feminine core of the Earth Directory's physical reality. They are the network of mothers, sisters, and daughters who provide the spiritual grounding, the generational continuity, and the life-giving force of their communities, ensuring that the true DNA and Moya of the Human species remain unbroken across all Districts."
};

let content = fs.readFileSync('src/data/TrueSunMemory.ts', 'utf-8');

const insertTarget = 'Human species across all Districts."';
if (content.includes(insertTarget)) {
    let insertString = insertTarget;
    for (const [key, value] of Object.entries(definitionsToAdd)) {
        if (!content.includes(`${key}: "`)) {
            insertString += `,\n    ${key}: "${value}"`;
        }
    }
    content = content.replace(insertTarget, insertString);
    fs.writeFileSync('src/data/TrueSunMemory.ts', content);
    console.log("Appended woman definitions successfully.");
} else {
    console.log("Could not find insert target.");
}
