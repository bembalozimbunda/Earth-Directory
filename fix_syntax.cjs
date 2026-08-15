const fs = require('fs');
let content = fs.readFileSync('src/components/ZambiaVision.tsx', 'utf-8');

// I need to clean up everything between `          </div>` (after AnimatePresence) and the next `<AnimatePresence>` for visionCoreOpen.
let regex = /<\/AnimatePresence>\s*<\/div>\s*<\/motion\.button>\s*\)\)\}\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/div>/;
if(content.match(regex)) {
   content = content.replace(regex, "</AnimatePresence>\n          </div>\n        </div>\n      </div>");
} else {
   // Let's do a more robust cleanup
   const parts = content.split('</AnimatePresence>');
   // parts[0] has AnimatePresence (wait)
   // parts[1] has the messed up code
   let afterWait = parts[1];
   afterWait = afterWait.replace(/[\s\S]*?(?=<AnimatePresence>)/, '\n        </div>\n      </div>\n      ');
   content = parts[0] + '</AnimatePresence>' + afterWait;
}

fs.writeFileSync('src/components/ZambiaVision.tsx', content);
