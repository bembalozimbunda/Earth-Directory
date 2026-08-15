const fs = require('fs');
const file = 'src/components/SynthesisCore.tsx';
let content = fs.readFileSync(file, 'utf-8');

// Replace the tooltip content for the four inner nodes.
content = content.replace(
`Radiates pure data and intelligence. Click the four inner nodes (Unseen Source, Hardware, Frequencies, Ancestral) to view their power in the terminal.`,
`Currently locked. Access restricted to the 7 Voids and Continent Protocols.`
);

// Disable the click functionality for the core nodes.
content = content.replace(
`              <div 
                className="relative group cursor-pointer flex flex-col items-center justify-center"
                onClick={(e) => handleOrbClick(e, node.id)}
                onTouchEnd={(e) => handleOrbClick(e, node.id)}
              >`,
`              <div 
                className="relative group flex flex-col items-center justify-center cursor-not-allowed opacity-50"
              >`
);

fs.writeFileSync(file, content);
