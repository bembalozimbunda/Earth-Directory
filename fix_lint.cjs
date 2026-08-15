const fs = require('fs');

// 1. Fix SynthesisCore.tsx
let core = fs.readFileSync('src/components/SynthesisCore.tsx', 'utf-8');
core = core.replace("import React, { useState, useRef } from 'react';", "import React, { useState, useRef, useEffect } from 'react';");
fs.writeFileSync('src/components/SynthesisCore.tsx', core);

// 2. Fix server.ts firebase-admin import
let server = fs.readFileSync('server.ts', 'utf-8');
server = server.replace('import admin from "firebase-admin";', 'import * as admin from "firebase-admin";');
fs.writeFileSync('server.ts', server);

// 3. Fix main.tsx virtual:pwa-register typescript error
let main = fs.readFileSync('src/main.tsx', 'utf-8');
if (!main.includes('/// <reference types="vite-plugin-pwa/client" />')) {
  main = '/// <reference types="vite-plugin-pwa/client" />\n' + main;
  fs.writeFileSync('src/main.tsx', main);
}

// 4. Also fix the node missing module error in server.ts
// Node ESM needs explicit .js extension or it fails, but wait, the error was:
// Cannot find module '/app/applet/server/data/void_keys.js'
// Let's check if that file exists.
