const fs = require('fs');

const files = [
  'src/components/ContinentDoor.tsx',
  'src/components/MotorOS.tsx',
  'src/components/ZambiaNodeAuth.tsx',
  'src/components/ProvinceDoor.tsx',
  'src/components/VisionCore.tsx',
  'src/components/CreationForge.tsx',
  'src/components/DigitalTwinNetwork.tsx',
  'src/components/AncestralIntelligence.tsx',
  'src/components/AncientTechnology.tsx'
];

files.forEach(filePath => {
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Add z-[9999] cursor-pointer pointer-events-auto
    let updated = false;
    content = content.replace(/<button([^>]*onClick=\{onClose\}[^>]*)className="([^"]*)"/g, (match, p1, classNames) => {
      let newClasses = classNames.replace(/\s*z-\[?\d+\]?/g, '').trim();
      newClasses += ' z-[9999] cursor-pointer pointer-events-auto relative';
      if (classNames.includes('absolute')) {
         newClasses = newClasses.replace('relative', 'absolute');
      }
      updated = true;
      return `<button${p1}className="${newClasses}"`;
    });
    
    // Let's also check for onClick={onClose} where className comes BEFORE onClick
    content = content.replace(/<button([^>]*)className="([^"]*)"([^>]*)onClick=\{onClose\}/g, (match, p1, classNames, p2) => {
      let newClasses = classNames.replace(/\s*z-\[?\d+\]?/g, '').trim();
      newClasses += ' z-[9999] cursor-pointer pointer-events-auto relative';
      if (classNames.includes('absolute')) {
         newClasses = newClasses.replace('relative', 'absolute');
      }
      updated = true;
      return `<button${p1}className="${newClasses}"${p2}onClick={onClose}`;
    });

    if (updated) {
      fs.writeFileSync(filePath, content);
      console.log('Fixed', filePath);
    }
  }
});
