const fs = require('fs');
let content = fs.readFileSync('src/components/ProvinceDoor.tsx', 'utf-8');

// We need to import the DistrictDoor
if (!content.includes('DistrictDoor')) {
  content = content.replace("import { NetworkCanvas } from './NetworkCanvas';", "import { NetworkCanvas } from './NetworkCanvas';\nimport { DistrictDoor } from './DistrictDoor';");
}

// We need to add state for it
if (!content.includes('const [districtDoorOpen, setDistrictDoorOpen] = useState(false);')) {
  content = content.replace("const [selectedDistrict, setSelectedDistrict] = useState<District | null>(null);", "const [selectedDistrict, setSelectedDistrict] = useState<District | null>(null);\n  const [districtDoorOpen, setDistrictDoorOpen] = useState(false);");
}

// We need to change the onClick to open the door
content = content.replace(
  "onClick={() => setSelectedDistrict(district)}",
  "onClick={() => { setSelectedDistrict(district); setDistrictDoorOpen(true); }}"
);

// We need to render the AnimatePresence for the DistrictDoor at the bottom
const injection = `
      <AnimatePresence>
        {districtDoorOpen && selectedDistrict && (
          <DistrictDoor 
            district={selectedDistrict}
            provinceColor={province.color}
            provinceBg={province.bg}
            provinceBorder={province.border}
            onClose={() => setDistrictDoorOpen(false)}
          />
        )}
      </AnimatePresence>
`;

if (!content.includes('<DistrictDoor')) {
  content = content.replace("    </motion.div>\n  );\n}", "    </motion.div>\n" + injection + "  );\n}");
}

fs.writeFileSync('src/components/ProvinceDoor.tsx', content);
