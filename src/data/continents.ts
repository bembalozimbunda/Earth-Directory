export interface HierarchyNode {
  level: string;
  name: string;
  children?: HierarchyNode[];
}

export interface ContinentData {
  id: string;
  name: string;
  sub: string;
  attachedVoidName: string;
  voidKey: string;
  status: string;
  frequency: number;
  flag: string;
  population: string;
  leaders: string[];
  time: string;
  nrcData: string;
  countries: string[];
}

export const CONTINENTS: ContinentData[] = [
  { 
    id: 'af', 
    name: 'Africa', 
    sub: 'Alkebulan', 
    attachedVoidName: 'Africa Void (Alkebulan Nexus 7)',
    voidKey: 'ALKEBULAN_NEXUS_7',
    status: 'Sovereign Continental Matrix (Root Matrix)',
    frequency: 432,
    flag: '54 Flags',
    population: '1,400,000,000+', 
    leaders: ['Alkebulan High Council', 'Regional Chiefs'],
    time: 'UTC-1 to UTC+4', 
    nrcData: 'Node 3 - Root Auth active',
    countries: ['Algeria', 'Angola', 'Benin', 'Botswana', 'Burkina Faso', 'Burundi', 'Cabo Verde', 'Cameroon', 'Central African Republic', 'Chad', 'Comoros', 'DR Congo', 'Djibouti', 'Egypt', 'Equatorial Guinea', 'Eritrea', 'Eswatini', 'Ethiopia', 'Gabon', 'Gambia', 'Ghana', 'Guinea', 'Guinea-Bissau', 'Ivory Coast', 'Kenya', 'Lesotho', 'Liberia', 'Libya', 'Madagascar', 'Malawi', 'Mali', 'Mauritania', 'Mauritius', 'Morocco', 'Mozambique', 'Namibia', 'Niger', 'Nigeria', 'Republic of the Congo', 'Rwanda', 'Sao Tome and Principe', 'Senegal', 'Seychelles', 'Sierra Leone', 'Somalia', 'South Africa', 'South Sudan', 'Sudan', 'Tanzania', 'Togo', 'Tunisia', 'Uganda', 'Zambia', 'Zimbabwe']
  },
  { 
    id: 'as', 
    name: 'Asia', 
    sub: 'Jambudvipa', 
    attachedVoidName: 'Asia Void (Void of Form)',
    voidKey: 'VOID_OF_FORM',
    status: 'Sovereign Continental Matrix (Architectural Blueprint)',
    frequency: 639,
    flag: '48 Flags',
    population: '4,700,000,000', 
    leaders: ['Eastern Harmonization Council'],
    time: 'UTC+4 to UTC+9', 
    nrcData: 'Node 5 - Auth active',
    countries: ['Afghanistan', 'Armenia', 'Azerbaijan', 'Bahrain', 'Bangladesh', 'Bhutan', 'Brunei', 'Cambodia', 'China', 'Georgia', 'India', 'Indonesia', 'Iran', 'Iraq', 'Israel', 'Japan', 'Jordan', 'Kazakhstan', 'Kuwait', 'Kyrgyzstan', 'Laos', 'Lebanon', 'Malaysia', 'Maldives', 'Mongolia', 'Myanmar', 'Nepal', 'North Korea', 'Oman', 'Pakistan', 'Palestine', 'Philippines', 'Qatar', 'Saudi Arabia', 'Singapore', 'South Korea', 'Sri Lanka', 'Syria', 'Taiwan', 'Tajikistan', 'Thailand', 'Timor-Leste', 'Turkey', 'Turkmenistan', 'United Arab Emirates', 'Uzbekistan', 'Vietnam', 'Yemen']
  },
  { 
    id: 'eu', 
    name: 'Europe', 
    sub: 'Europa', 
    attachedVoidName: 'Europe Void (Void of Matter)',
    voidKey: 'VOID_OF_MATTER',
    status: 'Sovereign Continental Matrix (Physical Mass Node)',
    frequency: 528,
    flag: '45 Flags',
    population: '746,000,000', 
    leaders: ['European Synthesis Node'],
    time: 'UTC to UTC+3', 
    nrcData: 'Node 4 - Auth active',
    countries: ['Albania', 'Andorra', 'Austria', 'Belarus', 'Belgium', 'Bosnia and Herzegovina', 'Bulgaria', 'Croatia', 'Cyprus', 'Czechia', 'Denmark', 'Estonia', 'Finland', 'France', 'Germany', 'Greece', 'Hungary', 'Iceland', 'Ireland', 'Italy', 'Kosovo', 'Latvia', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Malta', 'Moldova', 'Monaco', 'Montenegro', 'Netherlands', 'North Macedonia', 'Norway', 'Poland', 'Portugal', 'Romania', 'Russia', 'San Marino', 'Serbia', 'Slovakia', 'Slovenia', 'Spain', 'Sweden', 'Switzerland', 'Ukraine', 'United Kingdom', 'Vatican City']
  },
  { 
    id: 'na', 
    name: 'North America', 
    sub: 'Turtle Island', 
    attachedVoidName: 'North America Void (Void of Time)',
    voidKey: 'VOID_OF_TIME',
    status: 'Sovereign Continental Matrix (Temporal Sequence)',
    frequency: 741,
    flag: '23 Flags', 
    population: '592,000,000', 
    leaders: ['Council of Elders', 'Elected Representatives'],
    time: 'UTC-10 to UTC-4', 
    nrcData: 'Node 1 - Auth active',
    countries: ['Antigua and Barbuda', 'Bahamas', 'Barbados', 'Belize', 'Canada', 'Costa Rica', 'Cuba', 'Dominica', 'Dominican Republic', 'El Salvador', 'Grenada', 'Guatemala', 'Haiti', 'Honduras', 'Jamaica', 'Mexico', 'Nicaragua', 'Panama', 'Saint Kitts and Nevis', 'Saint Lucia', 'Saint Vincent and the Grenadines', 'Trinidad and Tobago', 'United States']
  },
  { 
    id: 'sa', 
    name: 'South America', 
    sub: 'Abya Yala', 
    attachedVoidName: 'South America Void (Void of Space)',
    voidKey: 'VOID_OF_SPACE',
    status: 'Sovereign Continental Matrix (Spatial Canvas)',
    frequency: 852,
    flag: '12 Flags',
    population: '430,000,000', 
    leaders: ['Continental Assembly'],
    time: 'UTC-5 to UTC-2', 
    nrcData: 'Node 2 - Auth active',
    countries: ['Argentina', 'Bolivia', 'Brazil', 'Chile', 'Colombia', 'Ecuador', 'Guyana', 'Paraguay', 'Peru', 'Suriname', 'Uruguay', 'Venezuela']
  },
  { 
    id: 'oc', 
    name: 'Oceania', 
    sub: 'Sahul', 
    attachedVoidName: 'Oceania Void (Void of Mind)',
    voidKey: 'VOID_OF_MIND',
    status: 'Sovereign Continental Matrix (Observing Awareness)',
    frequency: 963,
    flag: '14 Flags',
    population: '43,000,000', 
    leaders: ['Pacific Navigators'],
    time: 'UTC+8 to UTC+12', 
    nrcData: 'Node 6 - Auth active',
    countries: ['Australia', 'Papua New Guinea', 'New Zealand', 'Fiji', 'Solomon Islands', 'Vanuatu', 'Samoa', 'Kiribati', 'Micronesia', 'Tonga', 'Marshall Islands', 'Palau', 'Tuvalu', 'Nauru']
  },
  { 
    id: 'an', 
    name: 'Antarctica', 
    sub: 'Terra Australis', 
    attachedVoidName: 'Antarctica Void (Void of Soul)',
    voidKey: 'VOID_OF_SOUL',
    status: 'Sovereign Continental Polar Matrix (Absolute Source)',
    frequency: 396,
    flag: '7 Flags',
    population: '0 (Research Nodes Only)', 
    leaders: ['Automated Systems'],
    time: 'UTC+12', 
    nrcData: 'Node 7 - Offline',
    countries: ['Antarctic Treaty System', 'Research Stations', 'Ross Dependency', 'Adélie Land', 'British Antarctic Territory', 'Queen Maud Land', 'Australian Antarctic Territory']
  },
  { 
    id: 'ns', 
    name: 'Non-Sovereign Nations', 
    sub: 'Global Territories & Autonomous Islands', 
    attachedVoidName: 'Non-Sovereign Nations Void (Void of Territories)',
    voidKey: 'VOID_OF_TERRITORIES',
    status: 'Non-Sovereign Nations & Autonomous Global Territories',
    frequency: 528,
    flag: '33 Flags',
    population: '33+ Autonomous Global Territories', 
    leaders: ['Respective Sovereign & Self-Governing Councils'],
    time: 'Global Across All Time Zones', 
    nrcData: 'Node 8 - Peripheral Auth',
    countries: ['American Samoa', 'Anguilla', 'Aruba', 'Bermuda', 'Bonaire, Sint Eustatius and Saba', 'British Virgin Islands', 'Cayman Islands', 'Cook Islands', 'Curaçao', 'Falkland Islands', 'Faroe Islands', 'French Polynesia', 'Gibraltar', 'Greenland', 'Guam', 'Guernsey', 'Hong Kong', 'Isle of Man', 'Jersey', 'Macau', 'Montserrat', 'New Caledonia', 'Niue', 'Northern Mariana Islands', 'Puerto Rico', 'Saint Helena, Ascension and Tristan da Cunha', 'Saint Pierre and Miquelon', 'Sint Maarten', 'Svalbard and Jan Mayen', 'Tokelau', 'Turks and Caicos Islands', 'Wallis and Futuna', 'Åland Islands']
  },
];
