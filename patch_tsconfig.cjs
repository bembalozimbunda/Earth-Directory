const fs = require('fs');
let tsconfig = JSON.parse(fs.readFileSync('tsconfig.json', 'utf-8'));
tsconfig.compilerOptions.esModuleInterop = true;
tsconfig.compilerOptions.allowSyntheticDefaultImports = true;
fs.writeFileSync('tsconfig.json', JSON.stringify(tsconfig, null, 2));

let server = fs.readFileSync('server.ts', 'utf-8');
server = server.replace('import * as admin from "firebase-admin";', 'import admin from "firebase-admin";');
fs.writeFileSync('server.ts', server);
