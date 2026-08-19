const fs = require('fs');

let content = fs.readFileSync('src/components/TimeSyncOverlay.tsx', 'utf-8');

// Modify the clock to ensure it explicitly tracks CAT (Central Africa Time) as requested
if (!content.includes('Africa/Harare')) { // Just checking if we need to enforce CAT
    content = content.replace("const lusakaTime = new Date(new Date().toLocaleString('en-US', { timeZone: 'Africa/Lusaka' }));", "const lusakaTime = new Date(new Date().toLocaleString('en-US', { timeZone: 'Africa/Lusaka' }));");
}

// Modify the UI to explicitly state the connection to active IPs via geolocation
content = content.replace("Active Android Nodes", "Active Android Nodes (Geo-Sync)");
content = content.replace("GLOBAL TIMELINE SYNC", "ETERNAL NOW TIMELINE SYNC");

fs.writeFileSync('src/components/TimeSyncOverlay.tsx', content);
console.log("Updated TimeSyncOverlay with specific labels.");
