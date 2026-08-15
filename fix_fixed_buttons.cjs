const fs = require('fs');

const files = [
  'src/components/ContinentDoor.tsx',
  'src/components/MotorOS.tsx',
  'src/components/ZambiaNodeAuth.tsx',
  'src/components/ProvinceDoor.tsx',
  'src/components/VisionCore.tsx',
  'src/components/CreationForge.tsx'
];

files.forEach(filePath => {
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Replace all instances of `absolute top-6 right-6` (or similar) with `fixed top-4 right-4 md:top-6 md:right-8`
    content = content.replace(/absolute top-6 right-6/g, 'fixed top-4 right-4 md:top-8 md:right-8');
    
    // Remove duplicate `absolute` that might have been added
    content = content.replace(/absolute\s+z-\[9999\]/g, 'z-[9999]');
    
    fs.writeFileSync(filePath, content);
    console.log('Fixed button positioning to fixed for', filePath);
  }
});
