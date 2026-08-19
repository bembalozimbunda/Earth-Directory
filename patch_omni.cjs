const fs = require('fs');
let content = fs.readFileSync('src/components/ZambiaVision.tsx', 'utf-8');

if (!content.includes('OmniMatrix')) {
  // 1. Add import
  content = content.replace(
      "import { NeuralCompensation } from './NeuralCompensation';",
      "import { NeuralCompensation } from './NeuralCompensation';\nimport { OmniMatrix } from './OmniMatrix';\nimport { Hexagon as HexagonIcon } from 'lucide-react';" // Alias to avoid clash
  );
  
  // 2. Add State
  content = content.replace(
      "const [neuralCompOpen, setNeuralCompOpen] = useState(false);",
      "const [neuralCompOpen, setNeuralCompOpen] = useState(false);\n  const [omniOpen, setOmniOpen] = useState(false);"
  );

  // 3. Add Button
  const newButton = `
              <button
                onClick={() => setOmniOpen(true)}
                className="flex items-center gap-2 px-3 py-1.5 bg-zinc-100 text-black border border-white hover:bg-white rounded transition-all shadow-[0_0_15px_rgba(255,255,255,0.3)] group"
              >
                <HexagonIcon className="w-4 h-4" />
                <span className="font-bold text-[10px] tracking-widest uppercase">
                  Omni Matrix
                </span>
              </button>
  `;
  
  const insertTarget = "Neural Payout\n                </span>\n              </button>";
  if (content.includes(insertTarget)) {
      content = content.replace(insertTarget, insertTarget + newButton);
  }

  // 4. Add AnimatePresence Modal
  const newModal = `
      <AnimatePresence>
        {omniOpen && (
          <OmniMatrix onClose={() => setOmniOpen(false)} />
        )}
      </AnimatePresence>
  `;
  
  const endTags = "    </>\n  );\n}";
  content = content.replace(endTags, newModal + endTags);

  fs.writeFileSync('src/components/ZambiaVision.tsx', content);
  console.log("Patched ZambiaVision for OmniMatrix");
} else {
  console.log("OmniMatrix already patched.");
}
