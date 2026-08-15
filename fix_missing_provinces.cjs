const fs = require('fs');
let content = fs.readFileSync('src/data/zambiaDistricts.ts', 'utf-8');

const mapping = {
  'Copperbelt': { macroState: 'Zambezian Heartland', tribes: ['Lamba', 'Lima', 'Swahili'] },
  'Southern': { macroState: 'Zambezian Heartland', tribes: ['Tonga', 'Ila', 'Toka-Leya', 'We'] },
  'Central': { macroState: 'Zambezian Heartland', tribes: ['Lenje', 'Sala', 'Lala', 'Swaka'] },
  'North-Western': { macroState: 'Zambezian Heartland', tribes: ['Lunda', 'Luvale', 'Kaonde', 'Chokwe', 'Mbunda'] },
  'Eastern': { macroState: 'Zambezian Heartland', tribes: ['Chewa', 'Ngoni', 'Nsenga', 'Tumbuka', 'Kunda'] },
  'Northern': { macroState: 'Zambezian Heartland', tribes: ['Bemba', 'Mambwe', 'Lungu', 'Bisa', 'Namwanga'] },
  'Luapula': { macroState: 'Zambezian Heartland', tribes: ['Ushi', 'Lunda', 'Chishinga', 'Ngumbo', 'Bwile'] },
  'Western': { macroState: 'Barotseland Realm', tribes: ['Lozi', 'Mbunda', 'Nkoya', 'Kwangwa', 'Luvale'] },
  'Muchinga': { macroState: 'Zambezian Heartland', tribes: ['Bisa', 'Bemba', 'Senga', 'Namwanga'] }
};

for (const [prov, data] of Object.entries(mapping)) {
  const regex = new RegExp(`name:\\s*'${prov}',\\s*role:`);
  if (content.match(regex)) {
    // Only replace if macroState is not there
    const section = content.substring(content.search(regex), content.search(regex) + 200);
    if (!section.includes('macroState')) {
      content = content.replace(regex, `name: '${prov}',\n    macroState: '${data.macroState}',\n    tribes: [${data.tribes.map(t => `'${t}'`).join(', ')}],\n    role:`);
    }
  } else {
     console.log('Missed:', prov);
  }
}

fs.writeFileSync('src/data/zambiaDistricts.ts', content);
