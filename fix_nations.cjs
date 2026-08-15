const fs = require('fs');
let content = fs.readFileSync('src/data/nations.ts', 'utf8');

// The ruler names are currently hardcoded, let's replace all "ruler" fields in ALKEBULAN with "value" and "status"
const alkebulanRegex = /"ALKEBULAN": \[\s*([\s\S]*?)\s*\],\s*"JAMBUDVIIPA"/m;
const match = content.match(alkebulanRegex);
if (match) {
  let nations = match[1];
  nations = nations.replace(/"name":\s*"([^"]+)",\s*"flag":\s*"([^"]+)",\s*"ruler":\s*"[^"]+"/g, (fullMatch, name, flag) => {
    // Determine realistic but symbolic values
    let value = "PRICELESS";
    let status = "PROTECTED_BY_ANCESTORS";
    return `"name": "${name}",\n      "flag": "${flag}",\n      "value": "${value}",\n      "status": "${status}"`;
  });
  content = content.replace(alkebulanRegex, `"ALKEBULAN": [\n    ${nations}\n  ],\n  "JAMBUDVIIPA"`);
  fs.writeFileSync('src/data/nations.ts', content);
}
