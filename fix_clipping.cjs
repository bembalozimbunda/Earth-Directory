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
    
    // Replace items-center with items-start in the absolute/fixed inset-0 wrapper
    // Usually looks like: className="absolute inset-0 z-50 flex items-center justify-center..."
    content = content.replace(/className="(absolute|fixed) inset-0 z-\[?\d+\]? flex items-center justify-center([^"]*)"/g, 'className="$1 inset-0 z-[100] flex items-start justify-center pt-16 md:pt-24 pb-16 $2"');
    
    // Fix duplicate absolutes in close buttons from previous script
    content = content.replace(/absolute absolute/g, 'absolute');
    content = content.replace(/z-\[9999\] cursor-pointer pointer-events-auto absolute/g, 'absolute z-[9999] cursor-pointer pointer-events-auto');
    
    fs.writeFileSync(filePath, content);
    console.log('Fixed clipping for', filePath);
  }
});
