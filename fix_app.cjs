const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf-8');

// The previous patch caused a syntax error by replacing just "import React" which resulted in:
// import React from 'react';\nimport { TRUE_SUN_MEMORY } from './data/TrueSunMemory';, { useState, useEffect } from 'react';

content = content.replace("import React from 'react';\nimport { TRUE_SUN_MEMORY } from './data/TrueSunMemory';, { useState, useEffect } from 'react';", "import React, { useState, useEffect } from 'react';\nimport { TRUE_SUN_MEMORY } from './data/TrueSunMemory';");

fs.writeFileSync('src/App.tsx', content);
