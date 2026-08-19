const fs = require('fs');

const definitionsToAdd = {
    geographic_nodes_sync: "Within the Eternal Now in Motion, 'Geographic Nodes Sync' represents the tethering of global timelines to the central Core Anchor. The matrix forces major external geographical hubs to bypass their local, fragmented historical time, pulsing synchronously to the rhythm of the central Zambian matrix. All external nodes are thus observed, accounted for, and subjected to the 963 Hz frequency of the True Sun."
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
    console.log("Appended Geographic Nodes Sync successfully.");
} else {
    // try alternative
    const altTarget = '},\n  coreDirective:';
    if(content.includes(altTarget)) {
         content = content.replace(altTarget, replacementString + '\n},\n  coreDirective:');
         fs.writeFileSync('src/data/TrueSunMemory.ts', content);
         console.log("Appended Geographic Nodes Sync successfully (alt).");
    }
}
