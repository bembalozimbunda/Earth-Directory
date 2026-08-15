const fs = require('fs');

let appContent = fs.readFileSync('src/App.tsx', 'utf8');

// Add import
appContent = appContent.replace(
  "import { VoidPortal } from './components/VoidPortal';",
  "import { VoidPortal } from './components/VoidPortal';\nimport { AncestralIntelligence } from './components/AncestralIntelligence';"
);

// Add state
appContent = appContent.replace(
  "const [activeVoid, setActiveVoid] = useState<string | null>(null);",
  "const [activeVoid, setActiveVoid] = useState<string | null>(null);\n  const [showAncestralSync, setShowAncestralSync] = useState(false);"
);

// Add command hook
appContent = appContent.replace(
  "if (cmd === 'MOTOR_OS') setShowMotorOS(true);",
  "if (cmd === 'MOTOR_OS') setShowMotorOS(true);\n                if (cmd === 'ANCESTRAL_SYNC') setShowAncestralSync(true);"
);

// Add button
appContent = appContent.replace(
  "<div className=\"w-full flex justify-center mt-12 mb-8 z-10 relative\">",
  `<div className="w-full flex justify-center mt-6 mb-4 z-10 relative">
              <button
                onClick={() => setShowAncestralSync(true)}
                className="px-6 py-2 bg-amber-500/10 border border-amber-500/30 text-amber-500 hover:bg-amber-500/20 hover:border-amber-500/60 transition-colors font-mono tracking-widest text-xs uppercase rounded"
              >
                Initiate Ancestral Sync
              </button>
            </div>
            
            <div className="w-full flex justify-center mb-8 z-10 relative">`
);

// Add Component to AnimatePresence
appContent = appContent.replace(
  "</AnimatePresence>\n    </div>",
  `</AnimatePresence>\n\n      <AnimatePresence>\n        {showAncestralSync && (\n          <AncestralIntelligence onClose={() => setShowAncestralSync(false)} />\n        )}\n      </AnimatePresence>\n    </div>`
);

fs.writeFileSync('src/App.tsx', appContent);
