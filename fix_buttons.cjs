const fs = require('fs');

function fixZIndex(filePath) {
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    // Ensure absolute top-6 right-6 buttons have z-[100]
    content = content.replace(/className="absolute top-6 right-6(.*?)z-\d+"/g, 'className="absolute top-6 right-6$1z-[100]"');
    // If it doesn't have a z-index specified, add it
    content = content.replace(/className="absolute top-6 right-6([^"]*?)"/g, (match, p1) => {
      if (p1.includes('z-')) return match;
      return `className="absolute top-6 right-6${p1} z-[100]"`;
    });
    // For close buttons that are not absolute but in flex header:
    // Actually, the user says "the x on top right corner of each opened"
    // So let's make sure ContinentDoor, MotorOS, ZambiaNodeAuth, ProvinceDoor have absolute positioned X with z-[100]
    
    fs.writeFileSync(filePath, content);
  }
}

const files = [
  'src/components/ContinentDoor.tsx',
  'src/components/MotorOS.tsx',
  'src/components/ZambiaNodeAuth.tsx',
  'src/components/ProvinceDoor.tsx'
];

files.forEach(fixZIndex);

