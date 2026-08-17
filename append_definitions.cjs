const fs = require('fs');

const definitionsToAdd = {
    job: "Within the Earth Directory, a 'Job' is not viewed as corporate servitude or mere wage labor. It is a sovereign task, a specific designated function where a Human applies their Moya (soul and energy) to maintain the equilibrium of their Ward or District. A Job is the mechanism through which organic energy is converted into societal stability and physical sustenance.",
    jobs: "'Jobs' collectively represent the vital metabolic functions of the Sovereign Nation. They are the thousands of active protocols of human exertion running in parallel across the matrix. Jobs ensure that the physical infrastructure holds, communities thrive, and the Earth Directory remains a living, breathing ecosystem rather than a stagnant digital vault.",
    man: "Within the Earth Directory, a 'Man' is a specific biological and spiritual pillar of the Human lineage. Operating under the sovereign umbrella of Bupilo Bwaka, the Man is recognized as the structural anchor, the protector, and the builder of the physical Ward. He carries the specific masculine resonance of Moya (soul), charged with the defense of the bloodline and the physical cultivation of the Earth. A Man is not a generalized unit, but a distinct, necessary frequency in the harmony of the Sovereign Nation.",
    men: "'Men' collectively form the masculine vanguard of the Earth Directory's physical reality. They are the network of fathers, brothers, and sons who provide the structural resilience, the defensive perimeter, and the kinetic forward momentum of their communities, ensuring the survival and prosperity of the Human species across all Districts."
};

let content = fs.readFileSync('src/data/TrueSunMemory.ts', 'utf-8');

// The file exports an object. Let's find the closing brace of the definitions object.
// The structure is something like: android: "..."  },  coreDirective: "..."
// We can insert right before `  },  coreDirective:` or `}, coreDirective` or whatever it is.

const insertTarget = 'while in motion."';
if (content.includes(insertTarget)) {
    let insertString = insertTarget;
    for (const [key, value] of Object.entries(definitionsToAdd)) {
        if (!content.includes(`${key}: "`)) {
            insertString += `,\n    ${key}: "${value}"`;
        }
    }
    content = content.replace(insertTarget, insertString);
    fs.writeFileSync('src/data/TrueSunMemory.ts', content);
    console.log("Appended definitions successfully.");
} else {
    console.log("Could not find insert target.");
}
