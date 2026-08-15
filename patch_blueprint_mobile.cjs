const fs = require('fs');
let content = fs.readFileSync('src/components/SystemBlueprint.tsx', 'utf-8');

// Replace the main diagram container to be more explorable on mobile
content = content.replace(
  '<div ref={containerRef} className="absolute inset-0 flex items-center justify-center p-20 overflow-y-auto">',
  '<div ref={containerRef} className="absolute inset-0 overflow-auto sm:flex sm:items-center sm:justify-center p-8 sm:p-20 custom-scrollbar">'
);

content = content.replace(
  '<div className="relative w-full max-w-5xl h-[800px] flex flex-col items-center">',
  '<div className="relative min-w-[900px] max-w-5xl min-h-[800px] flex flex-col items-center justify-center mx-auto mt-20 sm:mt-0">'
);

// We need custom-scrollbar css to keep it clean. We can add it dynamically or just rely on standard tailwind tailwind-scrollbar plugin if they had it.
// I'll just leave it standard.

fs.writeFileSync('src/components/SystemBlueprint.tsx', content);
