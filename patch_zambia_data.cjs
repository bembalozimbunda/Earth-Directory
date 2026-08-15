const fs = require('fs');
let content = fs.readFileSync('src/data/zambiaDistricts.ts', 'utf-8');

if (!content.includes('macroState: string;')) {
  content = content.replace('districts: District[];', 'macroState: string;\n  tribes: string[];\n  districts: District[];');
}

// Now we need to insert the macroState and tribes into each of the 10 provinces.
// They are Lusaka, Copperbelt, Southern, Central, North-Western, Eastern, Northern, Luapula, Western, Muchinga.

const mapping = {
  'Lusaka': {
    macroState: 'Zambezian Heartland',
    tribes: ['Soli', 'Lenje', 'Gova']
  },
  'Copperbelt': {
    macroState: 'Zambezian Heartland',
    tribes: ['Lamba', 'Lima', 'Swahili']
  },
  'Southern': {
    macroState: 'Zambezian Heartland',
    tribes: ['Tonga', 'Ila', 'Toka-Leya', 'We']
  },
  'Central': {
    macroState: 'Zambezian Heartland',
    tribes: ['Lenje', 'Sala', 'Lala', 'Swaka']
  },
  'North-Western': {
    macroState: 'Zambezian Heartland', // Actually some group NW with Barotseland historically, but let's stick to Heartland to be safe, or Barotseland if requested. I'll put it in Heartland to let Barotseland be Western, or add Barotseland influence. Let's put Barotseland for Western, and Heartland for the rest.
    tribes: ['Lunda', 'Luvale', 'Kaonde', 'Chokwe', 'Mbunda']
  },
  'Eastern': {
    macroState: 'Zambezian Heartland',
    tribes: ['Chewa', 'Ngoni', 'Nsenga', 'Tumbuka', 'Kunda']
  },
  'Northern': {
    macroState: 'Zambezian Heartland',
    tribes: ['Bemba', 'Mambwe', 'Lungu', 'Bisa', 'Namwanga']
  },
  'Luapula': {
    macroState: 'Zambezian Heartland',
    tribes: ['Ushi', 'Lunda', 'Chishinga', 'Ngumbo', 'Bwile']
  },
  'Western': {
    macroState: 'Barotseland Realm',
    tribes: ['Lozi', 'Mbunda', 'Nkoya', 'Kwangwa', 'Luvale']
  },
  'Muchinga': {
    macroState: 'Zambezian Heartland',
    tribes: ['Bisa', 'Bemba', 'Senga', 'Namwanga']
  }
};

for (const [prov, data] of Object.entries(mapping)) {
  const regex = new RegExp(`name:\\s*'${prov}',`);
  if (content.match(regex) && !content.includes(`macroState: '${data.macroState}'`)) {
    content = content.replace(regex, `name: '${prov}',\n    macroState: '${data.macroState}',\n    tribes: [${data.tribes.map(t => `'${t}'`).join(', ')}],`);
  }
}

fs.writeFileSync('src/data/zambiaDistricts.ts', content);
