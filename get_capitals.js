const fs = require('fs');
const data = fs.readFileSync('src/data.ts', 'utf-8');

const regex = /name: "([^(\/]+)/g;
let m;
let countries = [];
while ((m = regex.exec(data)) !== null) {
  if (m[1].trim() !== 'Alkebulan' && m[1].trim() !== 'Province 1' && !m[1].includes('Province') && !m[1].includes('City') && !m[1].includes('Ward')) {
      if (countries.length < 55) {
        countries.push(m[1].trim());
      }
  }
}
console.log(countries);
