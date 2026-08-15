import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { VOID_KEYS } from "./server/data/void_keys.js";
import { NATIONS_BY_CONTINENT, VOID_TO_CONTINENT_MAP } from "./src/data/nations.js";
import { initializeApp, cert, getApps } from "firebase-admin/app";
import { getFirestore, FieldValue } from "firebase-admin/firestore";
import fs from "fs";

// Initialize Firebase Admin
import { applicationDefault } from "firebase-admin/app";

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
    // console.log("Firebase Admin Initialized Successfully");
  } else {
    console.warn("Firebase config not found, running without DB persistence.");
  }
} catch (error) {
  console.error("Firebase Initialization Error:", error);
}



async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // --- SECURE API ROUTES ---

  app.post("/api/heartbeat", async (req, res) => {
    if (!db) return res.json({ count: 1 });
    try {
      const { clientId } = req.body;
      const id = clientId || Math.random().toString(36).substring(7);
      await db.collection("active_observers").doc(id).set({
        lastActive: FieldValue.serverTimestamp()
      });
      
      // Clean up old and count
      const twoMinsAgo = new Date(Date.now() - 2 * 60 * 1000);
      const snapshot = await db.collection("active_observers")
        .where("lastActive", ">=", twoMinsAgo)
        .get();
        
      res.json({ count: snapshot.size || 1, clientId: id });
    } catch (e) {
      res.json({ count: 1 });
    }
  });


  // Validate Void Access
  app.post("/api/verify-void", (req, res) => {
    const { voidName, code } = req.body;
    let keyLookup = voidName.split(' ')[0];
    if (keyLookup === 'ALKEBULAN') keyLookup = 'ALKEBULAN_NEXUS_7';
    
    // @ts-ignore
    const voidData = VOID_KEYS[keyLookup];
    
    if (voidData && code === voidData.entry_key_code) {
      // @ts-ignore
      const continentKey = VOID_TO_CONTINENT_MAP[keyLookup];
      // @ts-ignore
      const nations = continentKey ? NATIONS_BY_CONTINENT[continentKey] : [];
      
      // Do not send the entry_key_code back to the client!
      const { entry_key_code, ...safeVoidData } = voidData;
      
      res.json({ 
        authorized: true, 
        voidData: safeVoidData,
        continentKey,
        nations
      });
    } else {
      res.status(401).json({ authorized: false, error: "AUTHORIZATION DENIED" });
    }
  });

  // Verify secret phrase (yantra)
  app.post("/api/verify-secret", (req, res) => {
    const { secret } = req.body;
    if (secret === 'OBLIVION_MASTER') {
      res.json({ authorized: true, masterKey: true });
    } else if (secret === 'yantra' || secret === '◬ ◯ ◿ ⚍ ☵ ☲ ☰ ☷ ◉') {
      res.json({ authorized: true });
    } else {
      res.status(401).json({ authorized: false });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    // // console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
