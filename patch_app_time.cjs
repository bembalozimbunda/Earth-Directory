const fs = require('fs');

let appContent = fs.readFileSync('src/App.tsx', 'utf-8');

if (!appContent.includes('TimeSyncOverlay')) {
    appContent = appContent.replace("import { motion, AnimatePresence } from 'motion/react';", "import { motion, AnimatePresence } from 'motion/react';\nimport { TimeSyncOverlay } from './components/TimeSyncOverlay';");
    appContent = appContent.replace("</main>", "  <TimeSyncOverlay />\n      </main>");
    fs.writeFileSync('src/App.tsx', appContent);
    console.log("Patched App.tsx for TimeSyncOverlay");
}
