const fs = require('fs');

const extraInfo = {
  "Algeria": { lang: "Arabic, Tamazight", since: "2019-12-19", prev: "Abdelaziz Bouteflika" },
  "Angola": { lang: "Portuguese", since: "2017-09-26", prev: "José Eduardo dos Santos" },
  "Benin": { lang: "French", since: "2016-04-06", prev: "Thomas Boni Yayi" },
  "Botswana": { lang: "English, Setswana", since: "2018-04-01", prev: "Ian Khama" },
  "Burundi": { lang: "Kirundi, French, English", since: "2020-06-18", prev: "Pierre Nkurunziza" },
  "Cabo Verde": { lang: "Portuguese", since: "2021-11-09", prev: "Jorge Carlos Fonseca" },
  "Cameroon": { lang: "French, English", since: "1982-11-06", prev: "Ahmadou Ahidjo" },
  "Central African Republic": { lang: "Sango, French", since: "2016-03-30", prev: "Catherine Samba-Panza" },
  "Chad": { lang: "Arabic, French", since: "2021-04-20", prev: "Idriss Déby" },
  "Comoros": { lang: "Comorian, Arabic, French", since: "2016-05-26", prev: "Ikililou Dhoinine" },
  "Congo, Democratic Republic of the": { lang: "French", since: "2019-01-24", prev: "Joseph Kabila" },
  "Congo, Republic of the": { lang: "French", since: "1997-10-25", prev: "Pascal Lissouba" },
  "Cote d'Ivoire": { lang: "French", since: "2010-12-04", prev: "Laurent Gbagbo" },
  "Djibouti": { lang: "Arabic, French", since: "1999-05-08", prev: "Hassan Gouled Aptidon" },
  "Egypt": { lang: "Arabic", since: "2014-06-08", prev: "Adly Mansour" },
  "Equatorial Guinea": { lang: "Spanish, French, Portuguese", since: "1979-08-03", prev: "Francisco Macías Nguema" },
  "Eritrea": { lang: "Tigrinya, Arabic, English", since: "1993-05-24", prev: "None (First President)" },
  "Ethiopia": { lang: "Amharic", since: "2018-10-25", prev: "Mulatu Teshome" },
  "Gambia": { lang: "English", since: "2017-01-19", prev: "Yahya Jammeh" },
  "Ghana": { lang: "English", since: "2017-01-07", prev: "John Mahama" },
  "Guinea-Bissau": { lang: "Portuguese", since: "2020-02-27", prev: "José Mário Vaz" },
  "Kenya": { lang: "Swahili, English", since: "2022-09-13", prev: "Uhuru Kenyatta" },
  "Liberia": { lang: "English", since: "2024-01-22", prev: "George Weah" },
  "Madagascar": { lang: "Malagasy, French", since: "2019-01-19", prev: "Hery Rajaonarimampianina" },
  "Malawi": { lang: "English, Chichewa", since: "2020-06-28", prev: "Peter Mutharika" },
  "Mauritania": { lang: "Arabic", since: "2019-08-01", prev: "Mohamed Ould Abdel Aziz" },
  "Mauritius": { lang: "English", since: "2019-12-02", prev: "Barlen Vyapoory" },
  "Mozambique": { lang: "Portuguese", since: "2015-01-15", prev: "Armando Guebuza" },
  "Namibia": { lang: "English", since: "2024-02-04", prev: "Hage Geingob" },
  "Nigeria": { lang: "English", since: "2023-05-29", prev: "Muhammadu Buhari" },
  "Rwanda": { lang: "Kinyarwanda, English, French, Swahili", since: "2000-04-22", prev: "Pasteur Bizimungu" },
  "Sao Tome and Principe": { lang: "Portuguese", since: "2021-10-02", prev: "Evaristo Carvalho" },
  "Senegal": { lang: "French", since: "2024-04-02", prev: "Macky Sall" },
  "Seychelles": { lang: "English, French, Seychellois Creole", since: "2020-10-26", prev: "Danny Faure" },
  "Sierra Leone": { lang: "English", since: "2018-04-04", prev: "Ernest Bai Koroma" },
  "Somalia": { lang: "Somali, Arabic", since: "2022-05-23", prev: "Mohamed Abdullahi Mohamed" },
  "South Africa": { lang: "12 Official Languages", since: "2018-02-15", prev: "Jacob Zuma" },
  "South Sudan": { lang: "English", since: "2011-07-09", prev: "None (First President)" },
  "Tanzania": { lang: "Swahili, English", since: "2021-03-19", prev: "John Magufuli" },
  "Togo": { lang: "French", since: "2005-05-04", prev: "Gnassingbé Eyadéma" },
  "Tunisia": { lang: "Arabic", since: "2019-10-23", prev: "Mohamed Ennaceur" },
  "Uganda": { lang: "English, Swahili", since: "1986-01-29", prev: "Tito Okello" },
  "Zambia": { lang: "English", since: "2021-08-24", prev: "Previous Administration" },
  "Zimbabwe": { lang: "English, Shona, Ndebele", since: "2017-11-24", prev: "Robert Mugabe" },
  "Western Sahara": { lang: "Arabic, Spanish", since: "2016-07-12", prev: "Mohamed Abdelaziz" },
  "Burkina Faso": { lang: "French", since: "2022-09-30", prev: "Paul-Henri Sandaogo Damiba" },
  "Eswatini": { lang: "Swazi, English", since: "1986-04-25", prev: "Queen Dzeliwe" },
  "Gabon": { lang: "French", since: "2023-08-30", prev: "Ali Bongo Ondimba" },
  "Guinea": { lang: "French", since: "2021-09-05", prev: "Alpha Condé" },
  "Lesotho": { lang: "Sesotho, English", since: "1996-02-07", prev: "Moshoeshoe II" },
  "Libya": { lang: "Arabic", since: "2021-03-15", prev: "Fayez al-Sarraj" },
  "Mali": { lang: "French", since: "2021-05-24", prev: "Bah Ndaw" },
  "Morocco": { lang: "Arabic, Tamazight", since: "1999-07-23", prev: "King Hassan II" },
  "Niger": { lang: "French", since: "2023-07-26", prev: "Mohamed Bazoum" },
  "Sudan": { lang: "Arabic, English", since: "2019-04-12", prev: "Omar al-Bashir" }
};

let text = fs.readFileSync('src/data.ts', 'utf8');
const match = text.match(/export const earthData: GeoNode\[\] = (\[[\s\S]*\]);/);
if (match) {
  let arrStr = match[1];
  let earthData = eval(arrStr);

  earthData[0].children.forEach(country => {
    let nameParts = country.name.split(' / ');
    let countryPart = nameParts[0].split(' (')[0].trim();
    let leaderPart = nameParts.length > 1 ? nameParts[1].trim() : 'Unknown';
    
    let info = extraInfo[countryPart] || { lang: "Various", since: "Unknown", prev: "Unknown" };
    
    country.details = country.details || {};
    country.details.language = info.lang;
    country.details.leader = leaderPart;
    country.details.leaderSince = info.since;
    country.details.previousLeader = info.prev;
  });

  const outStr = `export interface GeoNode {
  name: string;
  children?: GeoNode[];
  details?: {
    phone?: string;
    email?: string;
    nrc?: string;
    population?: number;
    language?: string;
    leader?: string;
    leaderSince?: string;
    previousLeader?: string;
  };
}

export const earthData: GeoNode[] = ` + JSON.stringify(earthData, null, 2) + `;\n`;
  fs.writeFileSync('src/data.ts', outStr);
  console.log("Updated data with languages and leader history.");
}
