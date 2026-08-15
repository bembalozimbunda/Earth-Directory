const fs = require('fs');
let content = fs.readFileSync('src/components/ProvinceDoor.tsx', 'utf-8');

// Replace max-w-6xl h-full max-h-[85vh] with something much bigger
content = content.replace(
  'className={`w-full max-w-6xl h-full max-h-[85vh] bg-zinc-950 border ${province.border} rounded-xl relative shadow-[0_0_80px_rgba(var(--tw-colors-${province.bg.split(\'-\')[1]}-500),0.1)] flex flex-col overflow-hidden`}',
  'className={`w-[98vw] max-w-[1600px] h-[95vh] bg-zinc-950 border ${province.border} rounded-xl relative shadow-[0_0_80px_rgba(var(--tw-colors-${province.bg.split(\'-\')[1]}-500),0.1)] flex flex-col overflow-hidden`}'
);

fs.writeFileSync('src/components/ProvinceDoor.tsx', content);

// Also let's check LivingCalculator.tsx
let calc = fs.readFileSync('src/components/LivingCalculator.tsx', 'utf-8');
// Give it 4 columns instead of 2 so data is spread out nicely and clearly visualized
calc = calc.replace('className="grid grid-cols-2 gap-4"', 'className="grid grid-cols-2 lg:grid-cols-4 gap-4"');
fs.writeFileSync('src/components/LivingCalculator.tsx', calc);

