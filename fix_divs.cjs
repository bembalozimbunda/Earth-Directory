const fs = require('fs');
let content = fs.readFileSync('src/components/ZambiaVision.tsx', 'utf-8');

// Replace all those extra divs before AnimatePresence
const regex = /<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<AnimatePresence>/;

if (content.match(regex)) {
  content = content.replace(regex, "        </div>\n      </div>\n      <AnimatePresence>");
} else {
  // Let's just find <AnimatePresence> and keep exactly three </div> before it
  let parts = content.split('<AnimatePresence>');
  let before = parts[0];
  let after = '<AnimatePresence>' + parts.slice(1).join('<AnimatePresence>');
  
  // Strip all trailing </div> and whitespace from 'before'
  before = before.replace(/(<\/div>\s*)+$/, '');
  
  content = before + '\n        </div>\n      </div>\n      </div>\n      ' + after;
}

fs.writeFileSync('src/components/ZambiaVision.tsx', content);
