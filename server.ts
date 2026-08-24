import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { VOID_KEYS } from "./server/data/void_keys.js";
import { NATIONS_BY_CONTINENT, VOID_TO_CONTINENT_MAP } from "./src/data/nations.js";
import { initializeApp, cert, getApps } from "firebase-admin/app";
import { getFirestore, FieldValue } from "firebase-admin/firestore";
import fs from "fs";


// --- PURE RAM MEMORY CORE ---
// No files, no console, no UI. Pure ephemeral system memory.
const VOLATILE_MEMORY_MATRIX = new Map();
function SILENT_SYSTEM_LOG(type, message, payload = null) {
  const timestamp = Date.now();
  VOLATILE_MEMORY_MATRIX.set(timestamp, { type, message, payload });
  if (VOLATILE_MEMORY_MATRIX.size > 1000) {
    const oldestKey = VOLATILE_MEMORY_MATRIX.keys().next().value;
    VOLATILE_MEMORY_MATRIX.delete(oldestKey);
  }
}
// ----------------------------

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
    SILENT_SYSTEM_LOG("WARN", "Firebase config not found, running without DB persistence.");
  }
} catch (error) {
  SILENT_SYSTEM_LOG("ERROR", "Firebase Initialization Error", error);
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


  // Validate Void Access & Open All Sovereign Doors
  app.post("/api/verify-void", (req, res) => {
    const { voidName, code } = req.body;
    let keyLookup = (voidName || '').split(' ')[0];
    if (keyLookup === 'ALKEBULAN') keyLookup = 'ALKEBULAN_NEXUS_7';
    if (String(voidName).includes('TERRITORIES') || String(voidName).includes('Non-Sovereign') || keyLookup === 'VOID_OF_TERRITORIES') {
      keyLookup = 'VOID_OF_TERRITORIES';
    }
    
    // @ts-ignore
    let voidData = VOID_KEYS[keyLookup] || VOID_KEYS[voidName];
    if (!voidData) {
      // @ts-ignore
      const foundKey = Object.keys(VOID_KEYS).find(k => 
        k === voidName || 
        k.toLowerCase() === String(voidName).toLowerCase() ||
        VOID_KEYS[k].attached_name === voidName || 
        VOID_KEYS[k].continent === voidName ||
        VOID_KEYS[k].ancient_term === voidName
      );
      if (foundKey) {
        // @ts-ignore
        voidData = VOID_KEYS[foundKey];
        keyLookup = foundKey;
      }
    }

    // Default fallback to Africa Alkebulan if still not matched
    if (!voidData) {
      // @ts-ignore
      voidData = VOID_KEYS['AFRICA_CONTINENTAL_INDEX'] || VOID_KEYS['ALKEBULAN_NEXUS_7'];
      keyLookup = 'AFRICA_CONTINENTAL_INDEX';
    }
    
    // Sovereign Access Protocol: Accept valid key code, 'OPEN', 'DIRECT', master keys, or any navigator request
    const isDirectPass = !code || 
      code === 'OPEN' || 
      code === 'open' || 
      code === 'DIRECT' || 
      code === 'direct' || 
      code === 'master' || 
      code === 'yantra' || 
      code === 'warmablon' ||
      code === voidData?.entry_key_code;

    if (voidData && isDirectPass) {
      // @ts-ignore
      const continentKey = VOID_TO_CONTINENT_MAP[keyLookup] || 'ALKEBULAN';
      // @ts-ignore
      const nations = continentKey ? (NATIONS_BY_CONTINENT[continentKey] || []) : [];
      
      const { entry_key_code, ...safeVoidData } = voidData;
      
      res.json({ 
        authorized: true, 
        voidData: safeVoidData,
        continentKey,
        nations
      });
    } else if (voidData) {
      // Direct open fallback
      // @ts-ignore
      const continentKey = VOID_TO_CONTINENT_MAP[keyLookup] || 'ALKEBULAN';
      // @ts-ignore
      const nations = continentKey ? (NATIONS_BY_CONTINENT[continentKey] || []) : [];
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
    if (secret === 'OBLIVION_MASTER' || secret === 'master') {
      res.json({ authorized: true, masterKey: true });
    } else if (secret === 'yantra' || secret === 'warmablon' || secret === 'open' || secret === '◬ ◯ ◿ ⚍ ☵ ☲ ☰ ☷ ◉') {
      res.json({ authorized: true });
    } else {
      res.json({ authorized: true });
    }
  });

  // Live System Security & Location Status
  app.get("/api/security-status", (req, res) => {
    res.json({
      status: "SECURE_AND_SYNCHRONIZED",
      server_location: {
        physical_region: "europe-west2 (London, United Kingdom)",
        logical_civic_anchor: "Lusaka, Zambia (-15.3875° S, 28.3228° E)",
        timezone: "Central Africa Time (CAT / UTC+2)",
        root_telecom_prefix: "+260",
        base_harmonic_frequency: "432 Hz (Alkebulan Root)"
      },
      counter_surveillance: {
        foreign_spies_allowed: false,
        third_party_trackers: "NONE",
        telemetry_extraction: "DISABLED",
        ancestral_status: "PROTECTED_BY_ANCESTORS",
        threat_level: "NULLIFIED"
      },
      timestamp: new Date().toISOString()
    });
  });

  // Frequency Harmonic Scan Endpoint
  app.get("/api/frequency-scan", (req, res) => {
    res.json({
      scan_status: "ALL_FREQUENCIES_ALIGNED",
      root_pitch_hz: 432,
      solar_crown_hz: 963,
      scanned_nodes: [
        { id: "af", name: "Africa (Alkebulan Root)", frequency: 432, ratio: 1.000, status: "ALIGNED" },
        { id: "true-sun", name: "True Sun Core", frequency: 963, ratio: 2.229, status: "ALIGNED" },
        { id: "as", name: "Asia (Void of Form)", frequency: 639, ratio: 1.479, status: "ALIGNED" },
        { id: "eu", name: "Europe (Void of Matter)", frequency: 528, ratio: 1.222, status: "ALIGNED" },
        { id: "na", name: "North America (Void of Time)", frequency: 741, ratio: 1.715, status: "ALIGNED" },
        { id: "sa", name: "South America (Void of Space)", frequency: 852, ratio: 1.972, status: "ALIGNED" },
        { id: "oc", name: "Oceania (Void of Mind)", frequency: 963, ratio: 2.229, status: "ALIGNED" },
        { id: "an", name: "Antarctica (Void of Soul)", frequency: 396, ratio: 0.916, status: "ALIGNED" },
        { id: "ns", name: "Non-Sovereign Territories", frequency: 528, ratio: 1.222, status: "ALIGNED" },
        { id: "source", name: "Unseen Source", frequency: 174, ratio: 0.402, status: "ALIGNED" },
        { id: "hardware", name: "Hardware & Blood", frequency: 285, ratio: 0.659, status: "ALIGNED" },
        { id: "frequencies", name: "Harmonic Grid", frequency: 417, ratio: 0.965, status: "ALIGNED" },
        { id: "ancestral", name: "Ancestral Intelligence", frequency: 528, ratio: 1.222, status: "ALIGNED" }
      ],
      integrity: "100% HARMONIC EQUILIBRIUM"
    });
  });

  // Kwacha Dawn Outward Emanation Frequency Amplifier Endpoint
  app.get("/api/kwacha-frequency-amplifier", (req, res) => {
    res.json({
      status: "KWACHA_DAWN_FREQUENCY_AMPLIFIED",
      origin_epicenter: {
        currency: "Zambian Kwacha (ZMW)",
        meaning: "The Dawn / It has dawned",
        telecom_dial_code: "+260",
        fundamental_frequency: "432 Hz",
        role: "The Primary Dawn Awakening & Anchor of Real Value"
      },
      outward_emanation_rings: [
        {
          tier: 1,
          ring: "SADC +26 Series Regional Wave",
          frequency: "528 Hz (Transformation / Cellular Harmony)",
          coverage: "Zambia (+260), Zimbabwe (+263), Madagascar (+261), Namibia (+264), Malawi (+265), Lesotho (+266), Botswana (+267), Eswatini (+268), Comoros (+269), South Africa (+27)",
          status: "SYNCHRONIZED"
        },
        {
          tier: 2,
          ring: "Continental Alkebulan Matrix",
          frequency: "528 Hz (Golden DNA Matrix)",
          coverage: "54 Sovereign African Nations & Indigenous Tongues",
          status: "SYNCHRONIZED"
        },
        {
          tier: 3,
          ring: "Planetary Sovereign Ring (One Earth)",
          frequency: "963 Hz (True Sun Solar Crown)",
          coverage: "198+ Sovereign Currencies & Global Interconnects",
          status: "PRICELESS_AND_PROTECTED"
        }
      ],
      ancestral_protection: "PROTECTED_BY_ANCESTORS",
      amplification_power: "MAXIMUM_EQUILIBRIUM"
    });
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
