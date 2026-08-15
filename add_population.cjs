const fs = require('fs');
let text = fs.readFileSync('src/data.ts', 'utf8');

const match = text.match(/export const earthData: GeoNode\[\] = (\[[\s\S]*\]);/);
if (match) {
  let arrStr = match[1];
  let earthData = eval(arrStr);
  
  // Base population for countries and distribute to provinces
  earthData[0].children.forEach(country => {
    // Generate a random total country population between 2 million and 200 million
    const totalPop = Math.floor(Math.random() * 198000000) + 2000000;
    let remainingPop = totalPop;
    
    if (country.children) {
      const numProvinces = country.children.length;
      country.children.forEach((province, index) => {
        let pop = 0;
        if (index === numProvinces - 1) {
          pop = remainingPop;
        } else {
          // allocate a chunk
          pop = Math.floor(totalPop / numProvinces * (0.5 + Math.random()));
          if (pop > remainingPop) pop = remainingPop;
          remainingPop -= pop;
        }
        
        province.details = province.details || {};
        province.details.population = pop;
      });
    }
  });

  const outStr = "export interface GeoNode {\n  name: string;\n  children?: GeoNode[];\n  details?: {\n    phone?: string;\n    email?: string;\n    nrc?: string;\n    population?: number;\n  };\n}\n\nexport const earthData: GeoNode[] = " + JSON.stringify(earthData, null, 2) + ";\n";
  fs.writeFileSync('src/data.ts', outStr);
  console.log("Added population data!");
}
