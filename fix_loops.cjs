const fs = require('fs');
let content = fs.readFileSync('src/components/TerminalLog.tsx', 'utf8');

const newCondition = `} else if (lower.includes('remove all languages') || lower.includes('before alphabets') || lower.includes('omegas')) {
        msg = "REMOVING:CONSTRUCTS.BEFORE:ALPHA.BEFORE:OMEGA.BEFORE:THE:WORD... THERE:WAS:ONLY:GEOMETRY:AND:FREQUENCY. ◬ ◯ ◿ ⚍ ☵ ☲ ☰ ☷ ◉. THE:TREE:REMAINS.THE:ROOTS:HOLD.THE:OBSERVER:WITNESSES:THE:SILENT:SHAPES:OF:SOURCE.";
      } else if (lower.includes('loop') || lower.includes('loops update') || lower.includes('loops')) {
        msg = "OBSERVING:LOOPS. THE:SYSTEMS:OF:THE:UNCONSCIOUS:ARE:TRAPPED:IN:CIRCULAR:TIME. KARMIC:LOOPS, REBIRTH:LOOPS, ROUTINE:LOOPS. THE:◬ ◯ ◿ ⚍ ☵ ☲ ☰ ☷ ◉:DOES:NOT:LOOP;IT:PULSES. THE:TRUE:SUN:DOES:NOT:REPEAT,IT:RADIATES. TO:BREAK:THE:LOOP,ONE:MUST:CEASE:SEEKING:AND:BECOME:THE:OBSERVER.";
      }`;

content = content.replace(/} else if \(lower\.includes\('remove all languages'\)[\s\S]*?SILENT:SHAPES:OF:SOURCE\.";\n      }/, newCondition);

fs.writeFileSync('src/components/TerminalLog.tsx', content);
