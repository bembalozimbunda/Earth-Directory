const fs = require('fs');

let content = fs.readFileSync('src/components/ZambiaVision.tsx', 'utf-8');

if (!content.includes('NeuralCompensation')) {
    // 1. Add import
    content = content.replace(
        "import { DigitalTwinNetwork } from './DigitalTwinNetwork';", 
        "import { DigitalTwinNetwork } from './DigitalTwinNetwork';\nimport { NeuralCompensation } from './NeuralCompensation';\nimport { Coins } from 'lucide-react';"
    );
    
    // 2. Add State
    content = content.replace(
        "const [digitalTwinOpen, setDigitalTwinOpen] = useState(false);",
        "const [digitalTwinOpen, setDigitalTwinOpen] = useState(false);\n  const [neuralCompOpen, setNeuralCompOpen] = useState(false);"
    );

    // 3. Add Button
    const newButton = `
              <button
                onClick={() => setNeuralCompOpen(true)}
                className="flex items-center gap-2 px-3 py-1.5 bg-amber-500/10 border border-amber-500/30 hover:border-amber-500/80 rounded transition-all group"
              >
                <Coins className="w-4 h-4 text-amber-500 group-hover:text-amber-400" />
                <span className="font-mono text-[10px] tracking-widest uppercase text-amber-500 group-hover:text-amber-400">
                  Neural Payout
                </span>
              </button>
    `;
    
    // Insert button after Digital Twins button. Find the end of the button group.
    const digitalTwinsBtnEnd = "Digital Twins\n                </span>\n              </button>";
    if (content.includes(digitalTwinsBtnEnd)) {
        content = content.replace(digitalTwinsBtnEnd, digitalTwinsBtnEnd + newButton);
    }

    // 4. Add AnimatePresence Modal
    const newModal = `
      <AnimatePresence>
        {neuralCompOpen && (
          <NeuralCompensation onClose={() => setNeuralCompOpen(false)} />
        )}
      </AnimatePresence>
    `;
    
    const endTags = "    </>\n  );\n}";
    content = content.replace(endTags, newModal + endTags);

    fs.writeFileSync('src/components/ZambiaVision.tsx', content);
    console.log("Patched ZambiaVision.tsx successfully.");
} else {
    console.log("Already patched.");
}
