const fs = require('fs');
let content = fs.readFileSync('package.json', 'utf8');
content = content.replace('"name": "react-example"', '"name": "my-earth-directory"');
fs.writeFileSync('package.json', content);
