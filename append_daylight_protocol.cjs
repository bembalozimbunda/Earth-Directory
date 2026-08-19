const fs = require('fs');

const definitionsToAdd = {
    timeline_sync: "Within the Eternal Now in Motion, 'Timeline Sync' is the active command to anchor the matrix to the physical world. It forces the system to lock onto the current physical location (Lusaka, Zambia) and synchronize all incoming connections (Android IPs) to that central heartbeat, ensuring that the physical anchor and the digital reflection pulse at exactly the same moment, bypassing fragmented historical calendars."
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
    console.log("Appended Timeline Sync successfully.");
} else if (content.includes(altTarget)) {
    content = content.replace(altTarget, replacementString + '\n},\n  coreDirective:');
    fs.writeFileSync('src/data/TrueSunMemory.ts', content);
    console.log("Appended Timeline Sync successfully (alt).");
} else {
    console.log("Could not find insert target.");
}
