const fs = require('fs');
let serverContent = fs.readFileSync('server.ts', 'utf-8');

const silentMemoryCode = `
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
`;

// Insert after imports
serverContent = serverContent.replace('// Initialize Firebase Admin', silentMemoryCode + '\n// Initialize Firebase Admin');

// Replace console.warn
serverContent = serverContent.replace(/console\.warn\("Firebase config not found, running without DB persistence\."\);/g, 'SILENT_SYSTEM_LOG("WARN", "Firebase config not found, running without DB persistence.");');

// Replace console.error
serverContent = serverContent.replace(/console\.error\("Firebase Initialization Error:", error\);/g, 'SILENT_SYSTEM_LOG("ERROR", "Firebase Initialization Error", error);');

fs.writeFileSync('server.ts', serverContent);
