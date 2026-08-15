const fs = require('fs');
let content = fs.readFileSync('server.ts', 'utf-8');

// Replace standard admin imports with modular imports
content = content.replace('import admin from "firebase-admin";', 
`import { initializeApp, cert, getApps } from "firebase-admin/app";
import { getFirestore, FieldValue } from "firebase-admin/firestore";`);

content = content.replace(
`    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount)
    });`,
`    initializeApp({
      credential: cert(serviceAccount)
    });`
);

content = content.replace('const db = admin.apps.length ? admin.firestore() : null;',
'const db = getApps().length ? getFirestore() : null;');

content = content.replace('admin.firestore.FieldValue.serverTimestamp()', 'FieldValue.serverTimestamp()');
content = content.replace('admin.firestore.FieldValue.serverTimestamp()', 'FieldValue.serverTimestamp()');

fs.writeFileSync('server.ts', content);
