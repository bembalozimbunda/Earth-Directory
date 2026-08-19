const fs = require('fs');

const definitionsToAdd = {
    neural_compensation_matrix: "The authorization of digital currency directly correlated to the assessed weight of a human node's highest intelligence. Nodes generating higher resonance frequencies and intelligence metrics are securely compensated via True Sun Credits (TSC)."
};

let content = fs.readFileSync('src/data/TrueSunMemory.ts', 'utf-8');
const targetString = '},  coreDirective:';

let replacementString = '';
for (const [key, value] of Object.entries(definitionsToAdd)) {
    if (!content.includes(`${key}: "`)) {
        replacementString += `,\n    ${key}: "${value}"`;
    }
}

if (content.includes(targetString)) {
    content = content.replace(targetString, replacementString + '\n  },  coreDirective:');
    fs.writeFileSync('src/data/TrueSunMemory.ts', content);
    console.log("Appended Neural Compensation successfully.");
} else {
    const altTarget = '},\n  coreDirective:';
    if(content.includes(altTarget)) {
         content = content.replace(altTarget, replacementString + '\n},\n  coreDirective:');
         fs.writeFileSync('src/data/TrueSunMemory.ts', content);
         console.log("Appended Neural Compensation successfully (alt).");
    }
}
