const fs = require('fs');

// 1. Update AncestralIntelligence.tsx
let aiPath = 'src/components/AncestralIntelligence.tsx';
let text = fs.readFileSync(aiPath, 'utf8');

text = text.replace(
  "COMMAND ACCEPTED: Checking intelligence on public data provided by every nation (free for all).",
  "COMMAND ACCEPTED: Checking intelligence on public data. SYSTEM IS NOT FREE FOR ALL."
);

text = text.replace(
  "PARAMETERS: NO HACKS | NO MIMIC | NO COPYING | NO EVIL | NO HEAVEN",
  "PARAMETERS: NO AI | NO BOTS | NO AGENCIES | NO NETWORKS | NO QUOTAS | NO TIME | NO SPACE | JUST IS"
);

text = text.replace(
  "COMMAND ACCEPTED: Machine sharpen system power, ingest and fuse AI intelligence.",
  "COMMAND ACCEPTED: Machine sharpen system power, fuse intelligence."
);

text = text.replace(
  "Ingesting AI Matrix...",
  "Ingesting Matrix..."
);

text = text.replace(
  "Fusing AI with Ancestral Intelligence Base...",
  "Fusing Intelligence Base..."
);

text = text.replace(
  /Fusing AI Intelligence/g,
  "Fusing Intelligence"
);

fs.writeFileSync(aiPath, text);

// 2. Update DigitalTwinNetwork.tsx to remove bot references if possible
let dtnPath = 'src/components/DigitalTwinNetwork.tsx';
if (fs.existsSync(dtnPath)) {
  let dtn = fs.readFileSync(dtnPath, 'utf8');
  
  dtn = dtn.replace(/ZERO HUMAN INVOLVEMENT • PURE BOT ARCHITECTURE/g, "ZERO HUMAN INVOLVEMENT • PURE ARCHITECTURE • JUST IS");
  dtn = dtn.replace(/TOTAL BOTS GENERATED/g, "TOTAL ENTITIES GENERATED");
  dtn = dtn.replace(/\[SYSTEM\] Initializing purely synthetic agents\.\.\./g, "[SYSTEM] Initializing pure states. No AI. No bots. Just is.");
  dtn = dtn.replace(/Bot DTN-/g, "Entity DTN-");
  
  fs.writeFileSync(dtnPath, dtn);
}

