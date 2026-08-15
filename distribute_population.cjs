const fs = require('fs');
let text = fs.readFileSync('src/data.ts', 'utf8');

const match = text.match(/export const earthData: GeoNode\[\] = (\[[\s\S]*\]);/);
if (match) {
  let arrStr = match[1];
  let earthData = eval(arrStr);

  function distributePopulation(node) {
    if (node.children && node.children.length > 0 && node.details && node.details.population) {
      const parentPop = node.details.population;
      const numChildren = node.children.length;
      let remainingPop = parentPop;
      
      node.children.forEach((child, index) => {
        let childPop = 0;
        if (index === numChildren - 1) {
          childPop = remainingPop;
        } else {
          childPop = Math.floor((parentPop / numChildren) * (0.8 + 0.4 * Math.random()));
          if (childPop > remainingPop) childPop = remainingPop;
        }
        remainingPop -= childPop;
        
        child.details = child.details || {};
        child.details.population = childPop;
        
        // Recursively distribute to this child's children
        distributePopulation(child);
      });
    }
  }

  // The previous script set population on provinces directly. 
  // earthData[0] is Alkebulan
  earthData[0].children.forEach(country => {
    if (country.children) {
      country.children.forEach(province => {
        distributePopulation(province);
      });
    }
  });

  const outStr = "export interface GeoNode {\n  name: string;\n  children?: GeoNode[];\n  details?: {\n    phone?: string;\n    email?: string;\n    nrc?: string;\n    population?: number;\n  };\n}\n\nexport const earthData: GeoNode[] = " + JSON.stringify(earthData, null, 2) + ";\n";
  fs.writeFileSync('src/data.ts', outStr);
  console.log("Distributed population data to wards and all subdivisions!");
}
