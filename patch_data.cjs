const fs = require('fs');
let content = fs.readFileSync('src/data/zambiaDistricts.ts', 'utf-8');

// 1. Add new interfaces at the top
const newInterfaces = `export interface PollingStation {
  name: string;
  status: string;
  voters: number;
}

export interface Ward {
  name: string;
  population: number;
  stations: PollingStation[];
}

export interface Constituency {
  name: string;
  population: number;
  wards: Ward[];
}

export interface District {
  name: string;
  population: number;
  resource: string;
  efficiency: number;
  constituencies?: Constituency[];
}
`;

content = content.replace(/export interface District \{[\s\S]*?efficiency: number;\n\}/, newInterfaces);

// 2. We need to inject the constituency data into the Lusaka district
const lusakaDataRegex = /\{ name: 'Lusaka', population: 3308439, resource: 'Neural Core \/ Governance', efficiency: 98 \}/;

const deepLusaka = `{ name: 'Lusaka', population: 3308439, resource: 'Neural Core / Governance', efficiency: 98, constituencies: [
        {
          name: 'Munali',
          population: 450000,
          wards: [
            {
              name: 'Mtendere',
              population: 120000,
              stations: [
                { name: 'Vera Chiluba Station', status: 'Online', voters: 2145 },
                { name: 'Mahatma Gandhi School', status: 'Active Sync', voters: 1850 }
              ]
            },
            {
              name: 'Kalingalinga',
              population: 95000,
              stations: [
                { name: 'Kalingalinga Clinic', status: 'Online', voters: 1930 },
                { name: 'St. Marys Secondary', status: 'Standby', voters: 1200 }
              ]
            },
            {
              name: 'Chakunkula',
              population: 85000,
              stations: [
                { name: 'Munali Secondary School', status: 'Online', voters: 3400 },
                { name: 'Kaunda Square Primary', status: 'Online', voters: 2800 },
                { name: 'Kaunda Square Stage 2 Hall', status: 'Active Sync', voters: 1560 }
              ]
            },
            {
              name: 'Chainda',
              population: 75000,
              stations: [
                { name: 'Chainda Basic School', status: 'Online', voters: 2100 }
              ]
            }
          ]
        },
        {
          name: 'Kabwata',
          population: 380000,
          wards: [
            {
              name: 'Kabwata Ward',
              population: 110000,
              stations: [
                { name: 'Kabwata Community Hall', status: 'Online', voters: 4500 },
                { name: 'St. Patricks Basic School', status: 'Active Sync', voters: 3200 }
              ]
            },
            {
              name: 'Kamwala',
              population: 130000,
              stations: [
                { name: 'Kamwala Secondary School', status: 'Online', voters: 5100 }
              ]
            }
          ]
        },
        {
          name: 'Matero',
          population: 520000,
          wards: [
            {
              name: 'Matero Ward',
              population: 180000,
              stations: [
                { name: 'Matero Boys Secondary', status: 'Online', voters: 6200 },
                { name: 'Zingalume Primary', status: 'Standby', voters: 4100 }
              ]
            }
          ]
        },
        {
          name: 'Chawama',
          population: 410000,
          wards: [
            {
              name: 'Chawama Ward',
              population: 200000,
              stations: [
                { name: 'Chawama Basic School', status: 'Online', voters: 7800 },
                { name: 'Kuomboka Basic', status: 'Active Sync', voters: 3900 }
              ]
            }
          ]
        },
        {
          name: 'Mandevu',
          population: 600000,
          wards: [
            {
              name: 'Mandevu Ward',
              population: 250000,
              stations: [
                { name: 'Mandevu Community Hall', status: 'Online', voters: 8100 },
                { name: 'Mutambe Basic School', status: 'Online', voters: 4200 }
              ]
            }
          ]
        },
        {
          name: 'Kanyama',
          population: 550000,
          wards: [
            {
              name: 'Kanyama Ward',
              population: 280000,
              stations: [
                { name: 'Kanyama Basic School', status: 'Active Sync', voters: 9000 },
                { name: 'Twashuka Basic', status: 'Standby', voters: 5500 }
              ]
            }
          ]
        },
        {
          name: 'Lusaka Central',
          population: 398439,
          wards: [
            {
              name: 'Silwizya',
              population: 150000,
              stations: [
                { name: 'Lusaka Boys School', status: 'Online', voters: 4100 },
                { name: 'Civic Centre', status: 'Online', voters: 3800 }
              ]
            }
          ]
        }
      ] }`;

content = content.replace(lusakaDataRegex, deepLusaka);

fs.writeFileSync('src/data/zambiaDistricts.ts', content);
