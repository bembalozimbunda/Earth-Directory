const fs = require('fs');
const path = 'src/components/VoidPortal.tsx';
let content = fs.readFileSync(path, 'utf-8');

if (!content.includes('ArrowRight')) {
  // If we missed the ArrowRight import previously, add it explicitly
  content = content.replace(
      "import { Lock } from 'lucide-react';",
      "import { Lock, ArrowRight } from 'lucide-react';"
  );
  // Also check if Lock is just imported by itself somewhere else
  if (!content.includes('ArrowRight') && content.includes("from 'lucide-react'")) {
     content = content.replace(
       "from 'lucide-react';",
       ", ArrowRight } from 'lucide-react';"
     ).replace("{ ", "{ ArrowRight, ");
  }
} else if (content.includes('ArrowRight') && !content.match(/import.*ArrowRight.*from 'lucide-react'/)) {
    // If ArrowRight is in the file (from our previous patch) but NOT in the imports
    content = content.replace(
        "import { Lock } from 'lucide-react';",
        "import { Lock, ArrowRight } from 'lucide-react';"
    );
}

fs.writeFileSync(path, content);
console.log("Fixed ArrowRight import.");
