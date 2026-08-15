const { NATIONS_BY_CONTINENT } = require('./src/data/nations.js');
for (const key in NATIONS_BY_CONTINENT) {
  console.log(key, NATIONS_BY_CONTINENT[key].length);
}
