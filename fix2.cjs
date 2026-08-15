const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf8');

// Insert button
const btnRegex = /<button\s*onClick=\{[^}]*setShowAncestralSync[^}]*\}\s*className="[^"]*"\s*>\s*Initiate Ancestral Sync\s*<\/button>/;
const btnInsert = `<button
                onClick={() => setShowAncestralSync(true)}
                className="px-6 py-2 bg-amber-500/10 border border-amber-500/30 text-amber-500 hover:bg-amber-500/20 hover:border-amber-500/60 transition-colors font-mono tracking-widest text-xs uppercase rounded"
              >
                Initiate Ancestral Sync
              </button>
              <button
                onClick={() => setShowAncientBlueprint(true)}
                className="px-6 py-2 ml-4 bg-zinc-800 border border-white/20 text-white hover:bg-zinc-700 hover:border-white/60 transition-colors font-mono tracking-widest text-xs uppercase rounded flex items-center gap-2 shadow-[0_0_15px_rgba(255,255,255,0.1)]"
              >
                MERGE ANCIENT BLUEPRINT
              </button>`;
content = content.replace(btnRegex, btnInsert);

// Insert modal at the end (before last </div>)
const modalInsert = `      <AnimatePresence>
        {showAncientBlueprint && (
          <AncientTechnology onClose={() => setShowAncientBlueprint(false)} />
        )}
      </AnimatePresence>
    </div>
  );
}`;
const lastDivRegex = /    <\/div>\s*\);\s*\}\s*$/;
content = content.replace(lastDivRegex, modalInsert);

fs.writeFileSync('src/App.tsx', content);
