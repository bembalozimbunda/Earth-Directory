const fs = require('fs');
let text = fs.readFileSync('src/data.ts', 'utf8');

const match = text.match(/export const earthData: GeoNode\[\] = (\[[\s\S]*\]);/);
if (match) {
  let arrStr = match[1];
  let earthData = eval(arrStr);
  
  let countries = earthData[0].children.map(country => {
    let pop = country.details?.population || 0;
    return { name: country.name, population: pop };
  });
  
  countries.sort((a, b) => b.population - a.population);
  
  console.log("Most populated:");
  console.log(countries[0]);
  console.log("Least populated:");
  console.log(countries[countries.length - 1]);
}
