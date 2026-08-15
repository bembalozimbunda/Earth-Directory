const fs = require('fs');
let content = fs.readFileSync('src/components/SystemCurrencyPortal.tsx', 'utf8');

// Fix the JSX invalid character
content = content.replace("Frequency > AI Cap", "Frequency &gt; AI Cap");

fs.writeFileSync('src/components/SystemCurrencyPortal.tsx', content);
