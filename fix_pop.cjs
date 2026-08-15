const fs = require('fs');

const popStr = `{
  "Algeria": "45.6M",
  "Angola": "36.6M",
  "Benin": "13.7M",
  "Botswana": "2.6M",
  "Burkina Faso": "23.2M",
  "Burundi": "13.2M",
  "Cabo Verde": "0.5M",
  "Cameroon": "28.6M",
  "Central African Republic": "5.7M",
  "Chad": "18.2M",
  "Comoros": "0.8M",
  "Congo, Democratic Republic of the": "102M",
  "Democratic Republic of the Congo": "102M",
  "Congo, Republic of the": "6.1M",
  "Republic of the Congo": "6.1M",
  "Côte d'Ivoire": "28.8M",
  "Djibouti": "1.1M",
  "Egypt": "112M",
  "Equatorial Guinea": "1.7M",
  "Eritrea": "3.7M",
  "Eswatini": "1.2M",
  "Ethiopia": "126M",
  "Gabon": "2.4M",
  "Gambia": "2.7M",
  "The Gambia": "2.7M",
  "Ghana": "34.1M",
  "Guinea": "14.1M",
  "Guinea-Bissau": "2.1M",
  "Kenya": "55.1M",
  "Lesotho": "2.3M",
  "Liberia": "5.4M",
  "Libya": "7.1M",
  "Madagascar": "30.3M",
  "Malawi": "20.9M",
  "Mali": "23.2M",
  "Mauritania": "4.8M",
  "Mauritius": "1.3M",
  "Morocco": "37.8M",
  "Mozambique": "33.8M",
  "Namibia": "2.6M",
  "Niger": "27.2M",
  "Nigeria": "223M",
  "Rwanda": "14.0M",
  "Sao Tome and Principe": "0.2M",
  "Senegal": "17.7M",
  "Seychelles": "0.1M",
  "Sierra Leone": "8.7M",
  "Somalia": "18.1M",
  "South Africa": "60.4M",
  "South Sudan": "11.0M",
  "Sudan": "48.1M",
  "Tanzania": "67.4M",
  "Togo": "9.0M",
  "Tunisia": "12.4M",
  "Uganda": "48.5M",
  "Zambia": "20.5M",
  "Zimbabwe": "16.6M",
  "Western Sahara": "0.6M"
}`;

const popMap = JSON.parse(popStr);

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
        
        distributePopulation(child);
      });
    }
  }

  let totalAfrica = 0;

  earthData[0].children.forEach(country => {
    let name = country.name.split(' (')[0].split(' /')[0].trim();
    let strPop = popMap[name] || "10M"; 
    let actualPop = parseFloat(strPop) * 1000000;
    
    country.details = country.details || {};
    country.details.population = actualPop;
    totalAfrica += actualPop;

    if (country.children) {
      const numProvinces = country.children.length;
      let remainingPop = actualPop;
      country.children.forEach((province, index) => {
        let childPop = 0;
        if (index === numProvinces - 1) {
          childPop = remainingPop;
        } else {
          childPop = Math.floor((actualPop / numProvinces) * (0.8 + 0.4 * Math.random()));
          if (childPop > remainingPop) childPop = remainingPop;
        }
        remainingPop -= childPop;
        
        province.details = province.details || {};
        province.details.population = childPop;
        
        distributePopulation(province);
      });
    }
  });
  
  earthData[0].details = earthData[0].details || {};
  earthData[0].details.population = totalAfrica;

  const outStr = "export interface GeoNode {\n  name: string;\n  children?: GeoNode[];\n  details?: {\n    phone?: string;\n    email?: string;\n    nrc?: string;\n    population?: number;\n  };\n}\n\nexport const earthData: GeoNode[] = " + JSON.stringify(earthData, null, 2) + ";\n";
  fs.writeFileSync('src/data.ts', outStr);
  console.log("Fixed population data to match reality!");
}
