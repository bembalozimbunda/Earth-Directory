const fs = require('fs');
let content = fs.readFileSync('server.ts', 'utf-8');

// replace the try/catch initialization block
const initBlockRegex = /try \{[\s\S]*?\} catch \(error\) \{[\s\S]*?\}\n\nconst db = getApps\(\)\.length \? getFirestore\(\) : null;/;

const newInitBlock = `import { applicationDefault } from "firebase-admin/app";

let db = null;
try {
  if (fs.existsSync('./firebase-applet-config.json')) {
    const config = JSON.parse(fs.readFileSync('./firebase-applet-config.json', 'utf8'));
    const app = initializeApp({
      credential: applicationDefault(),
      projectId: config.projectId
    });
    // In Firebase Admin v12+, getFirestore accepts databaseId
    db = getFirestore(app, config.firestoreDatabaseId);
    console.log("Firebase Admin Initialized Successfully");
  } else {
    console.warn("Firebase config not found, running without DB persistence.");
  }
} catch (error) {
  console.error("Firebase Initialization Error:", error);
}
`;

content = content.replace(initBlockRegex, newInitBlock);
fs.writeFileSync('server.ts', content);
