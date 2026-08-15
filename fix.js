const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf8');

// The injected block looks like:
/*
      <AnimatePresence>
        {showAncientBlueprint && (
          <AncientTechnology onClose={() => setShowAncientBlueprint(false)} />
        )}
      </AnimatePresence>
    </div>
*/
const regex = /      <AnimatePresence>\s*\{showAncientBlueprint && \(\s*<AncientTechnology onClose=\{[^}]+\} \/>\s*\)\}\s*<\/AnimatePresence>\s*<\/div>/g;

content = content.replace(regex, '    </div>');
fs.writeFileSync('src/App.tsx', content);
