export interface HierarchyNode {
  level: string;
  name: string;
  children?: HierarchyNode[];
}

export interface ContinentData {
  id: string;
  name: string;
  sub: string;
  flag: string;
  population: string;
  leaders: string[];
  time: string;
  nrcData: string;
  countries: string[];
}

export const CONTINENTS: ContinentData[] = [
  { 
    id: 'an', name: 'Antarctica', sub: 'Terra Australis', flag: '00000',
    population: '0 (Research Nodes Only)', leaders: ['Automated Systems'],
    time: 'UTC+12', nrcData: 'Node 7 - Offline',
    countries: ['Antarctic Treaty System', 'Research Stations', 'Ross Dependency', 'Adélie Land', 'British Antarctic Territory', 'Queen Maud Land', 'Australian Antarctic Territory']
  },
  { 
    id: 'sa', name: 'South America', sub: 'Abya Yala', flag: '00000',
    population: '430,000,000', leaders: ['Continental Assembly'],
    time: 'UTC-5 to UTC-2', nrcData: 'Node 2 - Auth active',
    countries: ['Argentina', 'Bolivia', 'Brazil', 'Chile', 'Colombia', 'Ecuador', 'Guyana', 'Paraguay', 'Peru', 'Suriname', 'Uruguay', 'Venezuela']
  },
  { 
    id: 'na', name: 'North America', sub: 'Turtle Island', flag: '00000', 
    population: '592,000,000', leaders: ['Council of Elders', 'Elected Representatives'],
    time: 'UTC-10 to UTC-4', nrcData: 'Node 1 - Auth active',
    countries: ['Antigua and Barbuda', 'Bahamas', 'Barbados', 'Belize', 'Canada', 'Costa Rica', 'Cuba', 'Dominica', 'Dominican Republic', 'El Salvador', 'Grenada', 'Guatemala', 'Haiti', 'Honduras', 'Jamaica', 'Mexico', 'Nicaragua', 'Panama', 'Saint Kitts and Nevis', 'Saint Lucia', 'Saint Vincent and the Grenadines', 'Trinidad and Tobago', 'United States']
  },
  { 
    id: 'eu', name: 'Europe', sub: 'Europa', flag: '00000',
    population: '746,000,000', leaders: ['European Synthesis Node'],
    time: 'UTC to UTC+3', nrcData: 'Node 4 - Auth active',
    countries: ['Albania', 'Andorra', 'Austria', 'Belarus', 'Belgium', 'Bosnia and Herzegovina', 'Bulgaria', 'Croatia', 'Cyprus', 'Czechia', 'Denmark', 'Estonia', 'Finland', 'France', 'Germany', 'Greece', 'Hungary', 'Iceland', 'Ireland', 'Italy', 'Kosovo', 'Latvia', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Malta', 'Moldova', 'Monaco', 'Montenegro', 'Netherlands', 'North Macedonia', 'Norway', 'Poland', 'Portugal', 'Romania', 'Russia', 'San Marino', 'Serbia', 'Slovakia', 'Slovenia', 'Spain', 'Sweden', 'Switzerland', 'Ukraine', 'United Kingdom', 'Vatican City']
  },
  { 
    id: 'af', name: 'Africa', sub: 'Alkebulan', flag: '00000',
    population: '1,400,000,000+', leaders: ['Alkebulan High Council', 'Regional Chiefs'],
    time: 'UTC-1 to UTC+4', nrcData: 'Node 3 - Root Auth active',
    countries: ['Algeria', 'Angola', 'Benin', 'Botswana', 'Burkina Faso', 'Burundi', 'Cabo Verde', 'Cameroon', 'Central African Republic', 'Chad', 'Comoros', 'DR Congo', 'Djibouti', 'Egypt', 'Equatorial Guinea', 'Eritrea', 'Eswatini', 'Ethiopia', 'Gabon', 'Gambia', 'Ghana', 'Guinea', 'Guinea-Bissau', 'Ivory Coast', 'Kenya', 'Lesotho', 'Liberia', 'Libya', 'Madagascar', 'Malawi', 'Mali', 'Mauritania', 'Mauritius', 'Morocco', 'Mozambique', 'Namibia', 'Niger', 'Nigeria', 'Republic of the Congo', 'Rwanda', 'Sao Tome and Principe', 'Senegal', 'Seychelles', 'Sierra Leone', 'Somalia', 'South Africa', 'South Sudan', 'Sudan', 'Tanzania', 'Togo', 'Tunisia', 'Uganda', 'Zambia', 'Zimbabwe']
  },
  { 
    id: 'as', name: 'Asia', sub: 'Jambudvipa', flag: '00000',
    population: '4,700,000,000', leaders: ['Eastern Harmonization Council'],
    time: 'UTC+4 to UTC+9', nrcData: 'Node 5 - Auth active',
    countries: ['Afghanistan', 'Armenia', 'Azerbaijan', 'Bahrain', 'Bangladesh', 'Bhutan', 'Brunei', 'Cambodia', 'China', 'Georgia', 'India', 'Indonesia', 'Iran', 'Iraq', 'Israel', 'Japan', 'Jordan', 'Kazakhstan', 'Kuwait', 'Kyrgyzstan', 'Laos', 'Lebanon', 'Malaysia', 'Maldives', 'Mongolia', 'Myanmar', 'Nepal', 'North Korea', 'Oman', 'Pakistan', 'Palestine', 'Philippines', 'Qatar', 'Saudi Arabia', 'Singapore', 'South Korea', 'Sri Lanka', 'Syria', 'Taiwan', 'Tajikistan', 'Thailand', 'Timor-Leste', 'Turkey', 'Turkmenistan', 'United Arab Emirates', 'Uzbekistan', 'Vietnam', 'Yemen']
  },
  { 
    id: 'oc', name: 'Oceania', sub: 'Sahul', flag: '00000',
    population: '43,000,000', leaders: ['Pacific Navigators'],
    time: 'UTC+8 to UTC+12', nrcData: 'Node 6 - Auth active',
    countries: ['Australia', 'Papua New Guinea', 'New Zealand', 'Fiji', 'Solomon Islands', 'Vanuatu', 'Samoa', 'Kiribati', 'Micronesia', 'Tonga', 'Marshall Islands', 'Palau', 'Tuvalu', 'Nauru']
  },
  { 
    id: 'ns', name: 'Non-Sovereign', sub: 'Global Territories', flag: '00000',
    population: 'Varies', leaders: ['Respective Sovereign States'],
    time: 'Global', nrcData: 'Node 8 - Peripheral Auth',
    countries: ['American Samoa', 'Anguilla', 'Aruba', 'Bermuda', 'Bonaire, Sint Eustatius and Saba', 'British Virgin Islands', 'Cayman Islands', 'Cook Islands', 'Curaçao', 'Falkland Islands', 'Faroe Islands', 'French Polynesia', 'Gibraltar', 'Greenland', 'Guam', 'Guernsey', 'Hong Kong', 'Isle of Man', 'Jersey', 'Macau', 'Montserrat', 'New Caledonia', 'Niue', 'Northern Mariana Islands', 'Puerto Rico', 'Saint Helena, Ascension and Tristan da Cunha', 'Saint Pierre and Miquelon', 'Sint Maarten', 'Svalbard and Jan Mayen', 'Tokelau', 'Turks and Caicos Islands', 'Wallis and Futuna', 'Åland Islands']
  },
];
