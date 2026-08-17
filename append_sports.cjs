const fs = require('fs');

const definitionsToAdd = {
    sport: "Within the Earth Directory, a 'Sport' is not mere entertainment; it is a sacred ritual of physical excellence and human vitality. It is the organized, kinetic expression of a community's strength, discipline, and unity. Through Sport, the Human channels their organic energy and Moya into a focused arena, transforming raw physical capability into a shared cultural narrative.",
    sports: "'Sports' collectively serve as the dynamic connective tissue between Wards, Districts, Wards, and Sovereign Nations. They are the peaceful battlegrounds where communities test their resilience, celebrate their physical prowess, and forge unbreakable bonds through shared passion. In the architecture of the Cosmos, Sports represent the celebration of the living, moving physical body—a continuous reminder of the organic power that the digital matrix exists to serve."
};

let content = fs.readFileSync('src/data/TrueSunMemory.ts', 'utf-8');

// The safest way is to insert right before `  },  coreDirective:` or similar
const targetString = '},  coreDirective:';
let replacementString = '';

for (const [key, value] of Object.entries(definitionsToAdd)) {
    if (!content.includes(`${key}: "`)) {
        replacementString += `,\n    ${key}: "${value}"`;
    }
}
replacementString += '\n  },  coreDirective:';

if (content.includes(targetString)) {
    content = content.replace(targetString, replacementString);
    fs.writeFileSync('src/data/TrueSunMemory.ts', content);
    console.log("Appended sports successfully.");
} else {
    // try alternative formatting
    const altTarget = '},\n  coreDirective:';
    if (content.includes(altTarget)) {
        content = content.replace(altTarget, replacementString.replace('  },', '},\n'));
        fs.writeFileSync('src/data/TrueSunMemory.ts', content);
        console.log("Appended sports successfully (alt).");
    } else {
        console.log("Could not find insert target for sports.");
    }
}
