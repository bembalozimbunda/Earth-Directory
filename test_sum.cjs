const fs = require('fs');
let text = fs.readFileSync('src/data.ts', 'utf8');

const match = text.match(/export const earthData: GeoNode\[\] = (\[[\s\S]*\]);/);
if (match) {
  let arrStr = match[1];
  let earthData = eval(arrStr);

  function getPop(node) {
    if (node.details && node.details.population) return node.details.population;
    if (!node.children || node.children.length === 0) return 0;
    let sum = 0;
    for (let c of node.children) sum += getPop(c);
    return sum;
  }
  
  console.log("Alkebulan pop:", getPop(earthData[0]));
}
