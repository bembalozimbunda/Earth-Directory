const fs = require('fs');
let content = fs.readFileSync('src/components/ProvinceDoor.tsx', 'utf-8');

// Replace the outer wrapper
const replaceWrapper = /<motion\.div\s*initial={{ opacity: 0 }}\s*animate={{ opacity: 1 }}\s*exit={{ opacity: 0 }}\s*className="absolute inset-0 z-\[100\] flex items-start justify-center pt-16 md:pt-24 pb-16  bg-zinc-950\/95 backdrop-blur-md p-4 md:p-8"\s*>\s*<motion\.div\s*initial={{ scale: 0\.95, y: 20 }}\s*animate={{ scale: 1, y: 0 }}\s*exit={{ scale: 0\.95, y: -20 }}\s*className={`w-\[98vw\] max-w-\[1600px\] h-\[95vh\] bg-zinc-950 border \${province\.border} rounded-xl relative shadow-\[0_0_80px_rgba\(var\(--tw-colors-\${province\.bg\.split\('-'\)\[1\]}-500\),0\.1\)\] flex flex-col overflow-hidden`}\s*>/;

if (content.match(replaceWrapper)) {
  content = content.replace(replaceWrapper, 
    `<motion.div 
        layoutId={\`province-card-\${province.name}\`}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className={\`flex-1 w-full h-full bg-zinc-950 border \${province.border} rounded-xl relative shadow-[0_0_80px_rgba(var(--tw-colors-\${province.bg.split('-')[1]}-500),0.1)] flex flex-col overflow-hidden\`}
      >`
  );
  
  // Remove the last </motion.div> since we removed one opening wrapper
  const lastIndex = content.lastIndexOf('</motion.div>');
  if (lastIndex !== -1) {
    content = content.substring(0, lastIndex) + content.substring(lastIndex + 13);
  }
} else {
  console.log("Could not find the ProvinceDoor wrapper to replace.");
}

fs.writeFileSync('src/components/ProvinceDoor.tsx', content);
