const fs = require('fs');
const path = 'src/components/VoidPortal.tsx';
let content = fs.readFileSync(path, 'utf-8');

// Ensure ArrowRight is imported from lucide-react at the top of the file
if (!content.match(/import.*ArrowRight.*lucide-react/)) {
  // Let's just find the first import from lucide-react and append ArrowRight to it
  content = content.replace(/import\s+{([^}]+)}\s+from\s+['"]lucide-react['"];/, (match, p1) => {
    if (!p1.includes('ArrowRight')) {
        return `import { ${p1}, ArrowRight } from 'lucide-react';`;
    }
    return match;
  });
  
  // Fallback if there are NO lucide-react imports (unlikely)
  if (!content.includes("from 'lucide-react'")) {
      content = "import { ArrowRight } from 'lucide-react';\n" + content;
  }
}

fs.writeFileSync(path, content);
console.log("Forced ArrowRight import.");
