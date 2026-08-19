const fs = require('fs');

// Patch ProvinceDoor.tsx
let province = fs.readFileSync('src/components/ProvinceDoor.tsx', 'utf-8');
province = province.replace('Districts / Sub-Nodes ({', 'Districts ({');
province = province.replace('Selected Sub-Node: {', 'Selected District: {');
province = province.replace('Live Node Topology', 'Live District Topology');
// Remove votes
province = province.replace(/<span className="text-zinc-500 text-\[8px\] font-mono">\{s\.voters\.toLocaleString\(\)\} VOTES<\/span>/g, '');

fs.writeFileSync('src/components/ProvinceDoor.tsx', province);
console.log("Patched ProvinceDoor");

// Patch DistrictDoor.tsx
let district = fs.readFileSync('src/components/DistrictDoor.tsx', 'utf-8');
district = district.replace('Sub-Node / District Door', 'District Door');
// Remove voters section
const votersSection = `<div className="flex items-center gap-1">
                                  <span className="text-[9px] text-zinc-500 uppercase tracking-widest">Voters</span>
                                  <span className="text-xs text-white font-mono">{station.voters.toLocaleString()}</span>
                                </div>`;
district = district.replace(votersSection, '');
fs.writeFileSync('src/components/DistrictDoor.tsx', district);
console.log("Patched DistrictDoor");
