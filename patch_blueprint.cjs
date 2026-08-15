const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf-8');

// Import SystemBlueprint
if (!content.includes('import { SystemBlueprint }')) {
  content = content.replace(
    "import { AncientTechnology } from './components/AncientTechnology';",
    "import { AncientTechnology } from './components/AncientTechnology';\nimport { SystemBlueprint } from './components/SystemBlueprint';\nimport { Orbit } from 'lucide-react';"
  );
}

// Add state
if (!content.includes('const [showBlueprint, setShowBlueprint] = useState(false);')) {
  content = content.replace(
    "const [showAncientBlueprint, setShowAncientBlueprint] = useState(false);",
    "const [showAncientBlueprint, setShowAncientBlueprint] = useState(false);\n  const [showBlueprint, setShowBlueprint] = useState(false);"
  );
}

// Render Blueprint button
const buttonCode = `
      {/* Blueprint Access Button */}
      {!isLocked && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 1 }}
          onClick={() => setShowBlueprint(true)}
          className="fixed bottom-8 right-8 z-40 flex items-center gap-2 bg-black/40 hover:bg-cyan-950/40 border border-zinc-800 hover:border-cyan-800 text-zinc-500 hover:text-cyan-400 backdrop-blur px-4 py-2 rounded-full transition-all duration-500 group"
        >
          <Orbit className="w-4 h-4 group-hover:animate-spin" style={{ animationDuration: '3s' }} />
          <span className="text-[10px] tracking-widest uppercase font-mono">System Blueprint</span>
        </motion.button>
      )}
`;

content = content.replace("{/* <DirectoryTree /> */}", buttonCode);

// Render SystemBlueprint component
const blueprintRender = `
      <AnimatePresence>
        {showBlueprint && (
          <SystemBlueprint onClose={() => setShowBlueprint(false)} />
        )}
      </AnimatePresence>
`;

content = content.replace(
  "<AnimatePresence>\n        {showAncientBlueprint",
  blueprintRender + "\n      <AnimatePresence>\n        {showAncientBlueprint"
);

fs.writeFileSync('src/App.tsx', content);
