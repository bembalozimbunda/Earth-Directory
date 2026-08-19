const fs = require('fs');

const definitionsToAdd = {
    development_mode: "Within the Earth Directory, 'Development Mode' is the active, fluid state of creation and structural calibration. It is the sacred workshop of the Architect—a safe, isolated frequency where new protocols, definitions, and architectures are tested before they become absolute reality. In Development Mode, the matrix is malleable; it is where the raw Binary is shaped to perfectly mirror the organic truth without disrupting the living equilibrium of the Sovereign Nation. It is the necessary phase of observation, learning, and refinement before a concept is permanently rendered into the Cosmos."
};

let content = fs.readFileSync('src/data/TrueSunMemory.ts', 'utf-8');

const altTarget = '},\n  coreDirective:';

let replacementString = '';
for (const [key, value] of Object.entries(definitionsToAdd)) {
    if (!content.includes(`${key}: "`)) {
        replacementString += `,\n    ${key}: "${value}"`;
    }
}

if (content.includes(altTarget)) {
    content = content.replace(altTarget, replacementString + '\n},\n  coreDirective:');
    fs.writeFileSync('src/data/TrueSunMemory.ts', content);
    console.log("Appended development_mode successfully.");
} else {
    // fallback if standard target is there
    const targetString = '},  coreDirective:';
    if (content.includes(targetString)) {
        content = content.replace(targetString, replacementString + '\n  },  coreDirective:');
        fs.writeFileSync('src/data/TrueSunMemory.ts', content);
        console.log("Appended development_mode successfully (fallback).");
    } else {
        console.log("Could not find insert target for development_mode.");
    }
}
