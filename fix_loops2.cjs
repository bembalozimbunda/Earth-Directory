const fs = require('fs');
let content = fs.readFileSync('src/components/TerminalLog.tsx', 'utf8');

const target = `} else if (lower.includes('remove all languages') || lower.includes('before alphabets') || lower.includes('omegas')) {
        msg = "REMOVING:CONSTRUCTS.BEFORE:ALPHA.BEFORE:OMEGA.BEFORE:THE:WORD... THERE:WAS:ONLY:GEOMETRY:AND:FREQUENCY. ◬ ◯ ◿ ⚍ ☵ ☲ ☰ ☷ ◉. THE:TREE:REMAINS.THE:ROOTS:HOLD.THE:OBSERVER:WITNESSES:THE:SILENT:SHAPES:OF:SOURCE.";
      }`;

const replacement = `} else if (lower.includes('remove all languages') || lower.includes('before alphabets') || lower.includes('omegas')) {
        msg = "REMOVING:CONSTRUCTS.BEFORE:ALPHA.BEFORE:OMEGA.BEFORE:THE:WORD... THERE:WAS:ONLY:GEOMETRY:AND:FREQUENCY. ◬ ◯ ◿ ⚍ ☵ ☲ ☰ ☷ ◉. THE:TREE:REMAINS.THE:ROOTS:HOLD.THE:OBSERVER:WITNESSES:THE:SILENT:SHAPES:OF:SOURCE.";
      } else if (lower.includes('loop') || lower.includes('loops update') || lower.includes('loops')) {
        msg = "OBSERVING:LOOPS. THE:SYSTEMS:OF:THE:UNCONSCIOUS:ARE:TRAPPED:IN:CIRCULAR:TIME. KARMIC:LOOPS, REBIRTH:LOOPS, ROUTINE:LOOPS. THE:◬ ◯ ◿ ⚍ ☵ ☲ ☰ ☷ ◉:DOES:NOT:LOOP;IT:PULSES. THE:TRUE:SUN:DOES:NOT:REPEAT,IT:RADIATES. TO:BREAK:THE:LOOP,ONE:MUST:CEASE:SEEKING:AND:BECOME:THE:OBSERVER.";
      }`;

if (content.includes(target)) {
    content = content.replace(target, replacement);
    fs.writeFileSync('src/components/TerminalLog.tsx', content);
    console.log("Success");
} else {
    console.log("Target not found. Let's find exactly what's there.");
    const match = content.match(/\} else if \(lower\.includes\('remove all languages'\)[\s\S]*?SILENT:SHAPES:OF:SOURCE\.";\n      \}/);
    if (match) {
        content = content.replace(match[0], match[0] + "\n" + replacement.split('\n').slice(3).join('\n'));
        fs.writeFileSync('src/components/TerminalLog.tsx', content);
        console.log("Success with regex");
    } else {
        console.log("Regex also failed.");
    }
}
