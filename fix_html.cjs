const fs = require('fs');
let content = fs.readFileSync('index.html', 'utf8');

content = content.replace(
  '<title>warmablon</title>',
  '<title>MY EARTH DIRECTORY (WARMABLON)</title>'
);

fs.writeFileSync('index.html', content);
