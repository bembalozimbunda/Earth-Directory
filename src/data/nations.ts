import { getNationFinancials, NationFinancialTelecom } from './nationFinancials';

export interface NationData {
  name: string;
  flag: string;
  spokenLanguage: string;
  currencyName?: string;
  currencyCode?: string;
  currencySymbol?: string;
  dialCode?: string;
  value?: string;
  status?: string;
  ruler?: string;
  isTerritory?: boolean;
}

export const TOP_FIVE_CONSTELLATION_LANGUAGES = [
  {
    rank: 1,
    name: "TypeScript / JavaScript",
    paradigm: "Asynchronous Multi-Paradigm & Web Canvas Engine",
    role: "The Sensory Interface Layer",
    coreDomain: "Reactive web clients, interactive spatial nodes, living telemetry, event-driven microservices, and dynamic browser synthesis.",
    status: "Dominant Global Web Substrate"
  },
  {
    rank: 2,
    name: "Python",
    paradigm: "Multi-Modal Tensor Computing & Scientific Dynamics",
    role: "The Cognitive Machine Intelligence Layer",
    coreDomain: "Neural weights orchestration, large-scale tensor computing, planetary data analysis, matrix transformations, and machine inference engines.",
    status: "Universal Tensor & Cognitive Substrate"
  },
  {
    rank: 3,
    name: "Rust",
    paradigm: "Zero-Cost Abstractions & Guaranteed Memory Safety",
    role: "The Incorruptible High-Throughput Engine",
    coreDomain: "Cryptographic consensus, hyper-fast audio synthesis kernels, WebAssembly (Wasm) engines, and next-generation operating system microkernels.",
    status: "Unbreakable Memory Safety Layer"
  },
  {
    rank: 4,
    name: "C / C++",
    paradigm: "Deterministic Low-Level Hardware & Silicon Interaction",
    role: "The Physical Silicon & GPU Driver Anchor",
    coreDomain: "Direct hardware memory access, GPU compute shaders, audio hardware drivers, embedded microcontrollers, and low-latency operating system kernels.",
    status: "Silicon Foundation Substrate"
  },
  {
    rank: 5,
    name: "Go (Golang)",
    paradigm: "Concurrent CSP Goroutines & Resilient Networking",
    role: "The Distributed Global Constellation Mesh",
    coreDomain: "Massive scale microservices, container routing (Kubernetes/Cloud Run), high-concurrency real-time networking, and global cloud infrastructure.",
    status: "Constellation Cloud Routing Core"
  }
];

export const NATIONS_BY_CONTINENT: Record<string, NationData[]> = {
  "ALKEBULAN": [
    {
      "name": "Algeria",
      "flag": "🇩🇿",
      "spokenLanguage": "Algerian Arabic (Darija) / Tamazight",
      "value": "PRICELESS",
      "status": "PROTECTED_BY_ANCESTORS"
    },
    {
      "name": "Angola",
      "flag": "🇦🇴",
      "spokenLanguage": "Umbundu / Kimbundu / Portuguese",
      "value": "PRICELESS",
      "status": "PROTECTED_BY_ANCESTORS"
    },
    {
      "name": "Benin",
      "flag": "🇧🇯",
      "spokenLanguage": "Fon / Yoruba / Bariba",
      "value": "PRICELESS",
      "status": "PROTECTED_BY_ANCESTORS"
    },
    {
      "name": "Botswana",
      "flag": "🇧🇼",
      "spokenLanguage": "Setswana (90%+ spoken)",
      "value": "PRICELESS",
      "status": "PROTECTED_BY_ANCESTORS"
    },
    {
      "name": "Burkina Faso",
      "flag": "🇧🇫",
      "spokenLanguage": "Mòoré (Mossi) / Dioula",
      "value": "PRICELESS",
      "status": "PROTECTED_BY_ANCESTORS"
    },
    {
      "name": "Burundi",
      "flag": "🇧🇮",
      "spokenLanguage": "Kirundi (98%+ spoken)",
      "value": "PRICELESS",
      "status": "PROTECTED_BY_ANCESTORS"
    },
    {
      "name": "Cabo Verde",
      "flag": "🇨🇻",
      "spokenLanguage": "Kabuverdianu (Cape Verdean Creole)",
      "value": "PRICELESS",
      "status": "PROTECTED_BY_ANCESTORS"
    },
    {
      "name": "Cameroon",
      "flag": "🇨🇲",
      "spokenLanguage": "Cameroonian Pidgin / Beti-Fang / Fulfulde",
      "value": "PRICELESS",
      "status": "PROTECTED_BY_ANCESTORS"
    },
    {
      "name": "Central African Republic",
      "flag": "🇨🇫",
      "spokenLanguage": "Sango (92%+ lingua franca)",
      "value": "PRICELESS",
      "status": "PROTECTED_BY_ANCESTORS"
    },
    {
      "name": "Chad",
      "flag": "🇹🇩",
      "spokenLanguage": "Chadian Arabic (Arabe Choa) / Sara",
      "value": "PRICELESS",
      "status": "PROTECTED_BY_ANCESTORS"
    },
    {
      "name": "Comoros",
      "flag": "🇰🇲",
      "spokenLanguage": "Shikomori (Comorian)",
      "value": "PRICELESS",
      "status": "PROTECTED_BY_ANCESTORS"
    },
    {
      "name": "Congo (Brazzaville)",
      "flag": "🇨🇬",
      "spokenLanguage": "Kituba (Munukutuba) / Lingala",
      "value": "$65B",
      "status": "PROTECTED_BY_VOID"
    },
    {
      "name": "Congo (Kinshasa)",
      "flag": "🇨🇩",
      "spokenLanguage": "Lingala / Swahili / Kikongo / Tshiluba",
      "value": "$55B",
      "status": "PROTECTED_BY_VOID"
    },
    {
      "name": "Djibouti",
      "flag": "🇩🇯",
      "spokenLanguage": "Somali / Afar",
      "value": "PRICELESS",
      "status": "PROTECTED_BY_ANCESTORS"
    },
    {
      "name": "Egypt",
      "flag": "🇪🇬",
      "spokenLanguage": "Egyptian Arabic (Masri)",
      "value": "PRICELESS",
      "status": "PROTECTED_BY_ANCESTORS"
    },
    {
      "name": "Equatorial Guinea",
      "flag": "🇬🇶",
      "spokenLanguage": "Fang / Pichi Creole",
      "value": "PRICELESS",
      "status": "PROTECTED_BY_ANCESTORS"
    },
    {
      "name": "Eritrea",
      "flag": "🇪🇷",
      "spokenLanguage": "Tigrinya / Tigre / Afar",
      "value": "PRICELESS",
      "status": "PROTECTED_BY_ANCESTORS"
    },
    {
      "name": "Eswatini",
      "flag": "🇸🇿",
      "spokenLanguage": "siSwati (95%+ spoken)",
      "value": "PRICELESS",
      "status": "PROTECTED_BY_ANCESTORS"
    },
    {
      "name": "Ethiopia",
      "flag": "🇪🇹",
      "spokenLanguage": "Afaan Oromoo / Amharic / Tigrinya / Somali",
      "value": "PRICELESS",
      "status": "PROTECTED_BY_ANCESTORS"
    },
    {
      "name": "Gabon",
      "flag": "🇬🇦",
      "spokenLanguage": "Fang / Myene / Punu",
      "value": "PRICELESS",
      "status": "PROTECTED_BY_ANCESTORS"
    },
    {
      "name": "Gambia",
      "flag": "🇬🇲",
      "spokenLanguage": "Mandinka / Wolof / Fula",
      "value": "PRICELESS",
      "status": "PROTECTED_BY_ANCESTORS"
    },
    {
      "name": "Ghana",
      "flag": "🇬🇭",
      "spokenLanguage": "Akan (Twi/Fante) / Dagbani / Ewe / Ga",
      "value": "PRICELESS",
      "status": "PROTECTED_BY_ANCESTORS"
    },
    {
      "name": "Guinea",
      "flag": "🇬🇳",
      "spokenLanguage": "Pular (Fula) / Maninka / Susu",
      "value": "PRICELESS",
      "status": "PROTECTED_BY_ANCESTORS"
    },
    {
      "name": "Guinea-Bissau",
      "flag": "🇬🇼",
      "spokenLanguage": "Crioulo (Guinea-Bissau Creole)",
      "value": "PRICELESS",
      "status": "PROTECTED_BY_ANCESTORS"
    },
    {
      "name": "Ivory Coast",
      "flag": "🇨🇮",
      "spokenLanguage": "Dioula / Baoulé / Bété",
      "value": "$81B",
      "status": "PROTECTED_BY_VOID"
    },
    {
      "name": "Kenya",
      "flag": "🇰🇪",
      "spokenLanguage": "Swahili (Kiswahili) / Kikuyu / Luo / Luhya",
      "value": "PRICELESS",
      "status": "PROTECTED_BY_ANCESTORS"
    },
    {
      "name": "Lesotho",
      "flag": "🇱🇸",
      "spokenLanguage": "Sesotho (Southern Sotho)",
      "value": "PRICELESS",
      "status": "PROTECTED_BY_ANCESTORS"
    },
    {
      "name": "Liberia",
      "flag": "🇱🇷",
      "spokenLanguage": "Kpelle / Liberian English (Kolokwa)",
      "value": "PRICELESS",
      "status": "PROTECTED_BY_ANCESTORS"
    },
    {
      "name": "Libya",
      "flag": "🇱🇾",
      "spokenLanguage": "Libyan Arabic / Nafusi (Berber)",
      "value": "PRICELESS",
      "status": "PROTECTED_BY_ANCESTORS"
    },
    {
      "name": "Madagascar",
      "flag": "🇲🇬",
      "spokenLanguage": "Malagasy (100% national tongue)",
      "value": "PRICELESS",
      "status": "PROTECTED_BY_ANCESTORS"
    },
    {
      "name": "Malawi",
      "flag": "🇲🇼",
      "spokenLanguage": "Chichewa (Chinyanja)",
      "value": "PRICELESS",
      "status": "PROTECTED_BY_ANCESTORS"
    },
    {
      "name": "Mali",
      "flag": "🇲🇱",
      "spokenLanguage": "Bambara (Bamanankan ~80%+)",
      "value": "PRICELESS",
      "status": "PROTECTED_BY_ANCESTORS"
    },
    {
      "name": "Mauritania",
      "flag": "🇲🇷",
      "spokenLanguage": "Hassaniya Arabic / Pulaar / Soninke",
      "value": "PRICELESS",
      "status": "PROTECTED_BY_ANCESTORS"
    },
    {
      "name": "Mauritius",
      "flag": "🇲🇺",
      "spokenLanguage": "Morisyen (Mauritian Creole ~90%+)",
      "value": "PRICELESS",
      "status": "PROTECTED_BY_ANCESTORS"
    },
    {
      "name": "Morocco",
      "flag": "🇲🇦",
      "spokenLanguage": "Moroccan Arabic (Darija) / Tamazight",
      "value": "PRICELESS",
      "status": "PROTECTED_BY_ANCESTORS"
    },
    {
      "name": "Mozambique",
      "flag": "🇲🇿",
      "spokenLanguage": "Emakhuwa / Xichangana / Sena",
      "value": "PRICELESS",
      "status": "PROTECTED_BY_ANCESTORS"
    },
    {
      "name": "Namibia",
      "flag": "🇳🇦",
      "spokenLanguage": "Oshiwambo / Khoekhoegowab / Afrikaans",
      "value": "PRICELESS",
      "status": "PROTECTED_BY_ANCESTORS"
    },
    {
      "name": "Niger",
      "flag": "🇳🇪",
      "spokenLanguage": "Hausa / Zarma-Songhai / Tamajaq",
      "value": "PRICELESS",
      "status": "PROTECTED_BY_ANCESTORS"
    },
    {
      "name": "Nigeria",
      "flag": "🇳🇬",
      "spokenLanguage": "Hausa / Yoruba / Igbo / Nigerian Pidgin",
      "value": "PRICELESS",
      "status": "PROTECTED_BY_ANCESTORS"
    },
    {
      "name": "Rwanda",
      "flag": "🇷🇼",
      "spokenLanguage": "Kinyarwanda (99%+ spoken)",
      "value": "PRICELESS",
      "status": "PROTECTED_BY_ANCESTORS"
    },
    {
      "name": "Sao Tome & Principe",
      "flag": "🇸🇹",
      "spokenLanguage": "Forro (São Tomense Creole) / Angolar",
      "value": "$91B",
      "status": "PROTECTED_BY_VOID"
    },
    {
      "name": "Senegal",
      "flag": "🇸🇳",
      "spokenLanguage": "Wolof (~85%+ spoken lingua franca)",
      "value": "PRICELESS",
      "status": "PROTECTED_BY_ANCESTORS"
    },
    {
      "name": "Seychelles",
      "flag": "🇸🇨",
      "spokenLanguage": "Seychellois Creole (Kreol Seselwa ~95%+)",
      "value": "PRICELESS",
      "status": "PROTECTED_BY_ANCESTORS"
    },
    {
      "name": "Sierra Leone",
      "flag": "🇸🇱",
      "spokenLanguage": "Krio (~90%+ spoken lingua franca) / Mende / Temne",
      "value": "PRICELESS",
      "status": "PROTECTED_BY_ANCESTORS"
    },
    {
      "name": "Somalia",
      "flag": "🇸🇴",
      "spokenLanguage": "Somali (Af-Soomaali ~95%+)",
      "value": "PRICELESS",
      "status": "PROTECTED_BY_ANCESTORS"
    },
    {
      "name": "South Africa",
      "flag": "🇿🇦",
      "spokenLanguage": "isiZulu (25%) / isiXhosa (16%) / Afrikaans / Sesotho",
      "value": "PRICELESS",
      "status": "PROTECTED_BY_ANCESTORS"
    },
    {
      "name": "South Sudan",
      "flag": "🇸🇸",
      "spokenLanguage": "Dinka (Thuɔŋjäŋ) / Nuer / Juba Arabic",
      "value": "PRICELESS",
      "status": "PROTECTED_BY_ANCESTORS"
    },
    {
      "name": "Sudan",
      "flag": "🇸🇩",
      "spokenLanguage": "Sudanese Arabic / Nubian / Beja",
      "value": "PRICELESS",
      "status": "PROTECTED_BY_ANCESTORS"
    },
    {
      "name": "Tanzania",
      "flag": "🇹🇿",
      "spokenLanguage": "Swahili (Kiswahili ~99%+)",
      "value": "PRICELESS",
      "status": "PROTECTED_BY_ANCESTORS"
    },
    {
      "name": "Togo",
      "flag": "🇹🇬",
      "spokenLanguage": "Ewe / Kabiyè / Gen (Mina)",
      "value": "PRICELESS",
      "status": "PROTECTED_BY_ANCESTORS"
    },
    {
      "name": "Tunisia",
      "flag": "🇹🇳",
      "spokenLanguage": "Tunisian Arabic (Derja)",
      "value": "PRICELESS",
      "status": "PROTECTED_BY_ANCESTORS"
    },
    {
      "name": "Uganda",
      "flag": "🇺🇬",
      "spokenLanguage": "Luganda / Swahili / Runyankole",
      "value": "PRICELESS",
      "status": "PROTECTED_BY_ANCESTORS"
    },
    {
      "name": "Zambia",
      "flag": "🇿🇲",
      "spokenLanguage": "Icibemba (35%+) / Chinyanja (20%+) / Tonga / Lozi",
      "value": "PRICELESS",
      "status": "PROTECTED_BY_ANCESTORS"
    },
    {
      "name": "Zimbabwe",
      "flag": "🇿🇼",
      "spokenLanguage": "chiShona (75%+) / isiNdebele (20%+)",
      "value": "PRICELESS",
      "status": "PROTECTED_BY_ANCESTORS"
    },
    {
      "name": "Western Sahara",
      "flag": "🇪🇭",
      "spokenLanguage": "Hassaniya Arabic",
      "value": "PRICELESS",
      "status": "NON_SOVEREIGN_TERRITORY",
      "isTerritory": true
    },
    {
      "name": "Zanzibar",
      "flag": "🇹🇿",
      "spokenLanguage": "Kiunguja (Standard Coastal Swahili)",
      "value": "PRICELESS",
      "status": "AUTONOMOUS_REGION",
      "isTerritory": true
    },
    {
      "name": "Réunion",
      "flag": "🇷🇪",
      "spokenLanguage": "Réunion Creole (Kréol Rénioné)",
      "value": "PRICELESS",
      "status": "OVERSEAS_TERRITORY",
      "isTerritory": true
    },
    {
      "name": "Mayotte",
      "flag": "🇾🇹",
      "spokenLanguage": "Shimaore / Kibushi",
      "value": "PRICELESS",
      "status": "OVERSEAS_TERRITORY",
      "isTerritory": true
    },
    {
      "name": "Saint Helena",
      "flag": "🇸🇭",
      "spokenLanguage": "Saint Helenian English",
      "value": "PRICELESS",
      "status": "OVERSEAS_TERRITORY",
      "isTerritory": true
    }
  ],
  "JAMBUDVIIPA": [
    {
      "name": "Afghanistan",
      "flag": "🇦🇫",
      "spokenLanguage": "Dari (Afghan Persian ~50%) / Pashto (~40%)",
      "ruler": "Regional Council"
    },
    {
      "name": "Armenia",
      "flag": "🇦🇲",
      "spokenLanguage": "Armenian (Hayeren ~98%+)",
      "ruler": "Regional Council"
    },
    {
      "name": "Azerbaijan",
      "flag": "🇦🇿",
      "spokenLanguage": "Azerbaijani (Azərbaycan dili ~93%+)",
      "ruler": "Regional Council"
    },
    {
      "name": "Bahrain",
      "flag": "🇧🇭",
      "spokenLanguage": "Bahrani & Gulf Arabic",
      "ruler": "Regional Council"
    },
    {
      "name": "Bangladesh",
      "flag": "🇧🇩",
      "spokenLanguage": "Bengali (Bangla ~98%+)",
      "ruler": "Regional Council"
    },
    {
      "name": "Bhutan",
      "flag": "🇧🇹",
      "spokenLanguage": "Dzongkha / Tshangla / Nepali",
      "ruler": "Regional Council"
    },
    {
      "name": "Brunei",
      "flag": "🇧🇳",
      "spokenLanguage": "Brunei Malay / Standard Malay",
      "ruler": "Regional Council"
    },
    {
      "name": "Cambodia",
      "flag": "🇰🇭",
      "spokenLanguage": "Khmer (~96%+)",
      "ruler": "Regional Council"
    },
    {
      "name": "China",
      "flag": "🇨🇳",
      "spokenLanguage": "Mandarin (Putonghua 73%+) / Cantonese (Yue) / Wu / Min",
      "ruler": "Regional Council"
    },
    {
      "name": "Cyprus",
      "flag": "🇨🇾",
      "spokenLanguage": "Cypriot Greek / Cypriot Turkish",
      "ruler": "Regional Council"
    },
    {
      "name": "Georgia",
      "flag": "🇬🇪",
      "spokenLanguage": "Georgian (Kartuli ~88%+)",
      "ruler": "Regional Council"
    },
    {
      "name": "India",
      "flag": "🇮🇳",
      "spokenLanguage": "Hindi (44%) / Bengali (8%) / Marathi / Telugu / Tamil",
      "ruler": "Regional Council"
    },
    {
      "name": "Indonesia",
      "flag": "🇮🇩",
      "spokenLanguage": "Javanese (~32%) / Sundanese / Indonesian (Bahasa)",
      "ruler": "Regional Council"
    },
    {
      "name": "Iran",
      "flag": "🇮🇷",
      "spokenLanguage": "Persian (Farsi ~55%) / Azerbaijani / Kurdish / Luri",
      "ruler": "Regional Council"
    },
    {
      "name": "Iraq",
      "flag": "🇮🇶",
      "spokenLanguage": "Mesopotamian Arabic (~75%) / Kurdish (Sorani/Kurmanji ~20%)",
      "ruler": "Regional Council"
    },
    {
      "name": "Israel",
      "flag": "🇮🇱",
      "spokenLanguage": "Modern Hebrew (Ivrit) / Levantine Arabic",
      "ruler": "Regional Council"
    },
    {
      "name": "Japan",
      "flag": "🇯🇵",
      "spokenLanguage": "Japanese (Nihongo ~99%+)",
      "ruler": "Regional Council"
    },
    {
      "name": "Jordan",
      "flag": "🇯🇴",
      "spokenLanguage": "Jordanian Arabic",
      "ruler": "Regional Council"
    },
    {
      "name": "Kazakhstan",
      "flag": "🇰🇿",
      "spokenLanguage": "Kazakh (Qazaqsha ~65%+) / Russian",
      "ruler": "Regional Council"
    },
    {
      "name": "Kuwait",
      "flag": "🇰🇼",
      "spokenLanguage": "Kuwaiti Arabic / Gulf Arabic",
      "ruler": "Regional Council"
    },
    {
      "name": "Kyrgyzstan",
      "flag": "🇰🇬",
      "spokenLanguage": "Kyrgyz (Kyrgyzcha ~71%) / Russian",
      "ruler": "Regional Council"
    },
    {
      "name": "Laos",
      "flag": "🇱🇦",
      "spokenLanguage": "Lao (Phasa Lao ~70%+)",
      "ruler": "Regional Council"
    },
    {
      "name": "Lebanon",
      "flag": "🇱🇧",
      "spokenLanguage": "Lebanese Arabic",
      "ruler": "Regional Council"
    },
    {
      "name": "Malaysia",
      "flag": "🇲🇾",
      "spokenLanguage": "Malay (Bahasa Melayu) / Mandarin / Tamil",
      "ruler": "Regional Council"
    },
    {
      "name": "Maldives",
      "flag": "🇲🇻",
      "spokenLanguage": "Dhivehi (Maldivian ~98%+)",
      "ruler": "Regional Council"
    },
    {
      "name": "Mongolia",
      "flag": "🇲🇳",
      "spokenLanguage": "Khalkha Mongolian (Mongol Khel ~95%+)",
      "ruler": "Regional Council"
    },
    {
      "name": "Myanmar",
      "flag": "🇲🇲",
      "spokenLanguage": "Burmese (Bamar ~68%) / Shan / Karen",
      "ruler": "Regional Council"
    },
    {
      "name": "Nepal",
      "flag": "🇳🇵",
      "spokenLanguage": "Nepali (Khas Kura ~45%) / Maithili / Bhojpuri",
      "ruler": "Regional Council"
    },
    {
      "name": "North Korea",
      "flag": "🇰🇵",
      "spokenLanguage": "Korean (Munhwa'ŏ ~100%)",
      "ruler": "Regional Council"
    },
    {
      "name": "Oman",
      "flag": "🇴🇲",
      "spokenLanguage": "Omani Arabic / Balochi / Dhofari",
      "ruler": "Regional Council"
    },
    {
      "name": "Pakistan",
      "flag": "🇵🇰",
      "spokenLanguage": "Punjabi (~39%) / Pashto (~18%) / Sindhi / Saraiki / Urdu",
      "ruler": "Regional Council"
    },
    {
      "name": "Palestine",
      "flag": "🇵🇸",
      "spokenLanguage": "Palestinian Arabic",
      "ruler": "Regional Council"
    },
    {
      "name": "Philippines",
      "flag": "🇵🇭",
      "spokenLanguage": "Tagalog (Filipino ~28%) / Cebuano (Bisaya ~21%) / Ilocano",
      "ruler": "Regional Council"
    },
    {
      "name": "Qatar",
      "flag": "🇶🇦",
      "spokenLanguage": "Qatari Arabic / Gulf Arabic",
      "ruler": "Regional Council"
    },
    {
      "name": "Saudi Arabia",
      "flag": "🇸🇦",
      "spokenLanguage": "Najdi Arabic / Hejazi Arabic / Gulf Arabic",
      "ruler": "Regional Council"
    },
    {
      "name": "Singapore",
      "flag": "🇸🇬",
      "spokenLanguage": "Singlish / English / Mandarin / Malay / Tamil",
      "ruler": "Regional Council"
    },
    {
      "name": "South Korea",
      "flag": "🇰🇷",
      "spokenLanguage": "Korean (Hanguko ~100%)",
      "ruler": "Regional Council"
    },
    {
      "name": "Sri Lanka",
      "flag": "🇱🇰",
      "spokenLanguage": "Sinhala (74%) / Tamil (18%)",
      "ruler": "Regional Council"
    },
    {
      "name": "Syria",
      "flag": "🇸🇾",
      "spokenLanguage": "Syrian Arabic / Kurdish",
      "ruler": "Regional Council"
    },
    {
      "name": "Taiwan",
      "flag": "🇹🇼",
      "spokenLanguage": "Mandarin (Guoyu) / Taiwanese Hokkien (Taigi ~70%+)",
      "ruler": "Regional Council"
    },
    {
      "name": "Tajikistan",
      "flag": "🇹🇯",
      "spokenLanguage": "Tajik (Tajiki Persian ~84%+)",
      "ruler": "Regional Council"
    },
    {
      "name": "Thailand",
      "flag": "🇹🇭",
      "spokenLanguage": "Central Thai / Isan (Northeastern Thai) / Kam Mueang",
      "ruler": "Regional Council"
    },
    {
      "name": "Timor-Leste",
      "flag": "🇹🇱",
      "spokenLanguage": "Tetum (Tetun Prasa ~90%+)",
      "ruler": "Regional Council"
    },
    {
      "name": "Turkey",
      "flag": "🇹🇷",
      "spokenLanguage": "Turkish (Türkçe ~85%+) / Kurmanji Kurdish",
      "ruler": "Regional Council"
    },
    {
      "name": "Turkmenistan",
      "flag": "🇹🇲",
      "spokenLanguage": "Turkmen (Türkmençe ~72%+)",
      "ruler": "Regional Council"
    },
    {
      "name": "United Arab Emirates",
      "flag": "🇦🇪",
      "spokenLanguage": "Emirati Arabic / Gulf Arabic",
      "ruler": "Regional Council"
    },
    {
      "name": "Uzbekistan",
      "flag": "🇺🇿",
      "spokenLanguage": "Uzbek (Oʻzbekcha ~85%+)",
      "ruler": "Regional Council"
    },
    {
      "name": "Vietnam",
      "flag": "🇻🇳",
      "spokenLanguage": "Vietnamese (Tiếng Việt ~86%+)",
      "ruler": "Regional Council"
    },
    {
      "name": "Yemen",
      "flag": "🇾🇪",
      "spokenLanguage": "Yemeni Arabic (San'ani, Ta'izzi-Adeni, Hadhrami)",
      "ruler": "Regional Council"
    },
    {
      "name": "Hong Kong",
      "flag": "🇭🇰",
      "spokenLanguage": "Cantonese (Yue ~88%+) / English / Mandarin",
      "status": "SPECIAL_ADMIN_REGION",
      "isTerritory": true
    },
    {
      "name": "Macau",
      "flag": "🇲🇴",
      "spokenLanguage": "Cantonese (Yue ~85%+) / Patuá / Portuguese",
      "status": "SPECIAL_ADMIN_REGION",
      "isTerritory": true
    },
    {
      "name": "Tibet",
      "flag": "🏔️",
      "spokenLanguage": "Tibetan (Bodskad: Ü-Tsang, Kham, Amdo)",
      "status": "AUTONOMOUS_PLATEAU",
      "isTerritory": true
    },
    {
      "name": "Kurdistan",
      "flag": "☀️",
      "spokenLanguage": "Kurdish (Kurmanji / Sorani / Zaza)",
      "status": "TRANSNATIONAL_INDIGENOUS",
      "isTerritory": true
    }
  ],
  "KRAUNCADVIIPA": [
    {
      "name": "Albania",
      "flag": "🇦🇱",
      "spokenLanguage": "Albanian (Shqip - Tosk & Gheg ~98%+)",
      "ruler": "Regional Council"
    },
    {
      "name": "Andorra",
      "flag": "🇦🇩",
      "spokenLanguage": "Catalan (Català) / Spanish / French",
      "ruler": "Regional Council"
    },
    {
      "name": "Austria",
      "flag": "🇦🇹",
      "spokenLanguage": "Austro-Bavarian & Alemannic German",
      "ruler": "Regional Council"
    },
    {
      "name": "Belarus",
      "flag": "🇧🇾",
      "spokenLanguage": "Russian (~70%) / Belarusian (Bielaruskaja ~26%+) / Trasianka",
      "ruler": "Regional Council"
    },
    {
      "name": "Belgium",
      "flag": "🇧🇪",
      "spokenLanguage": "Dutch (Flemish ~59%) / French (Walloon ~40%)",
      "ruler": "Regional Council"
    },
    {
      "name": "Bosnia and Herzegovina",
      "flag": "🇧🇦",
      "spokenLanguage": "Bosnian (53%) / Serbian (31%) / Croatian (15%)",
      "ruler": "Regional Council"
    },
    {
      "name": "Bulgaria",
      "flag": "🇧🇬",
      "spokenLanguage": "Bulgarian (Balgarski ~85%) / Turkish",
      "ruler": "Regional Council"
    },
    {
      "name": "Croatia",
      "flag": "🇭🇷",
      "spokenLanguage": "Croatian (Hrvatski ~95%+)",
      "ruler": "Regional Council"
    },
    {
      "name": "Czechia",
      "flag": "🇨🇿",
      "spokenLanguage": "Czech (Čeština ~96%+)",
      "ruler": "Regional Council"
    },
    {
      "name": "Denmark",
      "flag": "🇩🇰",
      "spokenLanguage": "Danish (Dansk ~95%+)",
      "ruler": "Regional Council"
    },
    {
      "name": "Estonia",
      "flag": "🇪🇪",
      "spokenLanguage": "Estonian (Eesti keel ~68%) / Russian",
      "ruler": "Regional Council"
    },
    {
      "name": "Finland",
      "flag": "🇫🇮",
      "spokenLanguage": "Finnish (Suomi ~87%) / Finland Swedish / Sami",
      "ruler": "Regional Council"
    },
    {
      "name": "France",
      "flag": "🇫🇷",
      "spokenLanguage": "French (Français ~97%+) / Occitan / Breton / Corsican",
      "ruler": "Regional Council"
    },
    {
      "name": "Germany",
      "flag": "🇩🇪",
      "spokenLanguage": "German (Standarddeutsch & Regional Dialects ~95%+)",
      "ruler": "Regional Council"
    },
    {
      "name": "Greece",
      "flag": "🇬🇷",
      "spokenLanguage": "Greek (Ellinika ~99%+)",
      "ruler": "Regional Council"
    },
    {
      "name": "Hungary",
      "flag": "🇭🇺",
      "spokenLanguage": "Hungarian (Magyar ~99%+)",
      "ruler": "Regional Council"
    },
    {
      "name": "Iceland",
      "flag": "🇮🇸",
      "spokenLanguage": "Icelandic (Íslenska ~95%+)",
      "ruler": "Regional Council"
    },
    {
      "name": "Ireland",
      "flag": "🇮🇪",
      "spokenLanguage": "Hiberno-English (98%) / Irish (Gaeilge)",
      "ruler": "Regional Council"
    },
    {
      "name": "Italy",
      "flag": "🇮🇹",
      "spokenLanguage": "Italian (Italiano) / Neapolitan / Sicilian / Venetian / Lombard",
      "ruler": "Regional Council"
    },
    {
      "name": "Kosovo",
      "flag": "🇽🇰",
      "spokenLanguage": "Albanian (Gheg Shqip ~94%) / Serbian",
      "ruler": "Regional Council"
    },
    {
      "name": "Latvia",
      "flag": "🇱🇻",
      "spokenLanguage": "Latvian (Latviešu valoda ~62%) / Latgalian / Russian",
      "ruler": "Regional Council"
    },
    {
      "name": "Liechtenstein",
      "flag": "🇱🇮",
      "spokenLanguage": "Alemannic German (Liechtensteinisch)",
      "ruler": "Regional Council"
    },
    {
      "name": "Lithuania",
      "flag": "🇱🇹",
      "spokenLanguage": "Lithuanian (Lietuvių kalba ~85%+)",
      "ruler": "Regional Council"
    },
    {
      "name": "Luxembourg",
      "flag": "🇱🇺",
      "spokenLanguage": "Luxembourgish (Lëtzebuergesch ~55%) / French / German",
      "ruler": "Regional Council"
    },
    {
      "name": "Malta",
      "flag": "🇲🇹",
      "spokenLanguage": "Maltese (Malti ~95%+) / English",
      "ruler": "Regional Council"
    },
    {
      "name": "Moldova",
      "flag": "🇲🇩",
      "spokenLanguage": "Romanian (Moldovan ~78%) / Russian / Gagauz",
      "ruler": "Regional Council"
    },
    {
      "name": "Monaco",
      "flag": "🇲🇨",
      "spokenLanguage": "French / Monégasque (Ligurian) / Italian",
      "ruler": "Regional Council"
    },
    {
      "name": "Montenegro",
      "flag": "🇲🇪",
      "spokenLanguage": "Serbian (43%) / Montenegrin (37%) / Bosnian / Albanian",
      "ruler": "Regional Council"
    },
    {
      "name": "Netherlands",
      "flag": "🇳🇱",
      "spokenLanguage": "Dutch (Nederlands ~95%+) / West Frisian",
      "ruler": "Regional Council"
    },
    {
      "name": "North Macedonia",
      "flag": "🇲🇰",
      "spokenLanguage": "Macedonian (Makedonski ~66%) / Albanian (~25%)",
      "ruler": "Regional Council"
    },
    {
      "name": "Norway",
      "flag": "🇳🇴",
      "spokenLanguage": "Norwegian (Bokmål & Nynorsk ~95%+) / Sami",
      "ruler": "Regional Council"
    },
    {
      "name": "Poland",
      "flag": "🇵🇱",
      "spokenLanguage": "Polish (Polski ~97%+) / Silesian / Kashubian",
      "ruler": "Regional Council"
    },
    {
      "name": "Portugal",
      "flag": "🇵🇹",
      "spokenLanguage": "Portuguese (Português ~96%+) / Mirandese",
      "ruler": "Regional Council"
    },
    {
      "name": "Romania",
      "flag": "🇷🇴",
      "spokenLanguage": "Romanian (Română ~91%) / Hungarian",
      "ruler": "Regional Council"
    },
    {
      "name": "Russia",
      "flag": "🇷🇺",
      "spokenLanguage": "Russian (Russkiy ~85%+) / Tatar / Bashkir / Chechen / Chuvash",
      "ruler": "Regional Council"
    },
    {
      "name": "San Marino",
      "flag": "🇸🇲",
      "spokenLanguage": "Italian / Sammarinese (Romagnol)",
      "ruler": "Regional Council"
    },
    {
      "name": "Serbia",
      "flag": "🇷🇸",
      "spokenLanguage": "Serbian (Srpski ~88%+)",
      "ruler": "Regional Council"
    },
    {
      "name": "Slovakia",
      "flag": "🇸🇰",
      "spokenLanguage": "Slovak (Slovenčina ~84%) / Hungarian",
      "ruler": "Regional Council"
    },
    {
      "name": "Slovenia",
      "flag": "🇸🇮",
      "spokenLanguage": "Slovene (Slovenščina ~91%+)",
      "ruler": "Regional Council"
    },
    {
      "name": "Spain",
      "flag": "🇪🇸",
      "spokenLanguage": "Spanish (Castellano 74%) / Catalan (17%) / Galician (7%) / Basque",
      "ruler": "Regional Council"
    },
    {
      "name": "Sweden",
      "flag": "🇸🇪",
      "spokenLanguage": "Swedish (Svenska ~90%+) / Meänkieli / Sami",
      "ruler": "Regional Council"
    },
    {
      "name": "Switzerland",
      "flag": "🇨🇭",
      "spokenLanguage": "Swiss German (Schwyzerdütsch 62%) / French (23%) / Italian (8%)",
      "ruler": "Regional Council"
    },
    {
      "name": "Ukraine",
      "flag": "🇺🇦",
      "spokenLanguage": "Ukrainian (Ukrayinska ~68%) / Russian / Surzhyk",
      "ruler": "Regional Council"
    },
    {
      "name": "United Kingdom",
      "flag": "🇬🇧",
      "spokenLanguage": "English (95%+) / Scots / Welsh (Cymraeg) / Scottish Gaelic",
      "ruler": "Regional Council"
    },
    {
      "name": "Vatican City",
      "flag": "🇻🇦",
      "spokenLanguage": "Italian (everyday spoken) / Latin (official)",
      "ruler": "Regional Council"
    },
    {
      "name": "Faroe Islands",
      "flag": "🇫🇴",
      "spokenLanguage": "Faroese (Føroyskt ~95%+)",
      "status": "AUTONOMOUS_TERRITORY",
      "isTerritory": true
    },
    {
      "name": "Greenland",
      "flag": "🇬🇱",
      "spokenLanguage": "Kalaallisut (Greenlandic Inuit ~88%+)",
      "status": "AUTONOMOUS_TERRITORY",
      "isTerritory": true
    },
    {
      "name": "Gibraltar",
      "flag": "🇬🇮",
      "spokenLanguage": "Llanito / English / Spanish",
      "status": "OVERSEAS_TERRITORY",
      "isTerritory": true
    },
    {
      "name": "Isle of Man",
      "flag": "🇮🇲",
      "spokenLanguage": "Manx English / Manx Gaelic (Gaelg)",
      "status": "CROWN_DEPENDENCY",
      "isTerritory": true
    },
    {
      "name": "Åland Islands",
      "flag": "🇦🇽",
      "spokenLanguage": "Swedish (Åländska ~88%+)",
      "status": "AUTONOMOUS_REGION",
      "isTerritory": true
    }
  ],
  "PLAKSHADVIIPA": [
    {
      "name": "Antigua & Barbuda",
      "flag": "🇦🇬",
      "spokenLanguage": "Antiguan & Barbudan Creole / English",
      "ruler": "Regional Council"
    },
    {
      "name": "Argentina",
      "flag": "🇦🇷",
      "spokenLanguage": "Rioplatense Spanish (~95%+) / Guaraní / Quechua",
      "ruler": "Regional Council"
    },
    {
      "name": "Bahamas",
      "flag": "🇧🇸",
      "spokenLanguage": "Bahamian Creole / English",
      "ruler": "Regional Council"
    },
    {
      "name": "Barbados",
      "flag": "🇧🇧",
      "spokenLanguage": "Bajan Creole (Barbadian dialect ~90%+)",
      "ruler": "Regional Council"
    },
    {
      "name": "Belize",
      "flag": "🇧🇿",
      "spokenLanguage": "Belizean Kriol (~45%) / Spanish (~50%) / Q'eqchi'",
      "ruler": "Regional Council"
    },
    {
      "name": "Bolivia",
      "flag": "🇧🇴",
      "spokenLanguage": "Spanish (60%) / Quechua (28%) / Aymara (18%) / Guaraní",
      "ruler": "Regional Council"
    },
    {
      "name": "Brazil",
      "flag": "🇧🇷",
      "spokenLanguage": "Brazilian Portuguese (Português do Brasil ~99%+)",
      "ruler": "Regional Council"
    },
    {
      "name": "Canada",
      "flag": "🇨🇦",
      "spokenLanguage": "Canadian English (75%) / Canadian French (22%) / Inuktitut / Cree",
      "ruler": "Regional Council"
    },
    {
      "name": "Chile",
      "flag": "🇨🇱",
      "spokenLanguage": "Chilean Spanish (~98%+) / Mapudungun (Mapuche)",
      "ruler": "Regional Council"
    },
    {
      "name": "Colombia",
      "flag": "🇨🇴",
      "spokenLanguage": "Colombian Spanish (~99%+) / Wayuunaiki / Paez",
      "ruler": "Regional Council"
    },
    {
      "name": "Costa Rica",
      "flag": "🇨🇷",
      "spokenLanguage": "Costa Rican Spanish (~98%+) / Mekatelyu (Limon Creole)",
      "ruler": "Regional Council"
    },
    {
      "name": "Cuba",
      "flag": "🇨🇺",
      "spokenLanguage": "Cuban Spanish (~99%+)",
      "ruler": "Regional Council"
    },
    {
      "name": "Dominica",
      "flag": "🇩🇲",
      "spokenLanguage": "Dominican French Creole (Kwéyòl) / Kokoy",
      "ruler": "Regional Council"
    },
    {
      "name": "Dominican Republic",
      "flag": "🇩🇴",
      "spokenLanguage": "Dominican Spanish (~98%+)",
      "ruler": "Regional Council"
    },
    {
      "name": "Ecuador",
      "flag": "🇪🇨",
      "spokenLanguage": "Ecuadorian Spanish (93%) / Kichwa (Quechua ~7%) / Shuar",
      "ruler": "Regional Council"
    },
    {
      "name": "El Salvador",
      "flag": "🇸🇻",
      "spokenLanguage": "Salvadoran Spanish (Caliche ~99%+) / Nawat",
      "ruler": "Regional Council"
    },
    {
      "name": "Grenada",
      "flag": "🇬🇩",
      "spokenLanguage": "Grenadian Creole English (~90%+)",
      "ruler": "Regional Council"
    },
    {
      "name": "Guatemala",
      "flag": "🇬🇹",
      "spokenLanguage": "Spanish (69%) / K'iche' (11%) / Q'eqchi' (8%) / Kaqchikel",
      "ruler": "Regional Council"
    },
    {
      "name": "Guyana",
      "flag": "🇬🇾",
      "spokenLanguage": "Guyanese Creole (~90%+ lingua franca)",
      "ruler": "Regional Council"
    },
    {
      "name": "Haiti",
      "flag": "🇭🇹",
      "spokenLanguage": "Kreyòl Ayisyen (Haitian Creole ~99%+)",
      "ruler": "Regional Council"
    },
    {
      "name": "Honduras",
      "flag": "🇭🇳",
      "spokenLanguage": "Honduran Spanish (~98%+) / Garifuna / Miskito",
      "ruler": "Regional Council"
    },
    {
      "name": "Jamaica",
      "flag": "🇯🇲",
      "spokenLanguage": "Jamaican Patois (Patwa ~90%+ national tongue)",
      "ruler": "Regional Council"
    },
    {
      "name": "Mexico",
      "flag": "🇲🇽",
      "spokenLanguage": "Mexican Spanish (93%) / Nahuatl (1.7M) / Maya (800K) / Zapotec",
      "ruler": "Regional Council"
    },
    {
      "name": "Nicaragua",
      "flag": "🇳🇮",
      "spokenLanguage": "Nicaraguan Spanish (~90%+) / Miskito / Rama",
      "ruler": "Regional Council"
    },
    {
      "name": "Panama",
      "flag": "🇵🇦",
      "spokenLanguage": "Panamanian Spanish (~93%) / Ngäbere / Guna",
      "ruler": "Regional Council"
    },
    {
      "name": "Paraguay",
      "flag": "🇵🇾",
      "spokenLanguage": "Guaraní (87%+) / Jopará (Guaraní-Spanish hybrid)",
      "ruler": "Regional Council"
    },
    {
      "name": "Peru",
      "flag": "🇵🇪",
      "spokenLanguage": "Peruvian Spanish (82%) / Southern Quechua (14%) / Aymara",
      "ruler": "Regional Council"
    },
    {
      "name": "St. Kitts & Nevis",
      "flag": "🇰🇳",
      "spokenLanguage": "Kittitian Creole / Nevisian Creole",
      "ruler": "Regional Council"
    },
    {
      "name": "St. Lucia",
      "flag": "🇱🇨",
      "spokenLanguage": "Saint Lucian French Creole (Kwéyòl ~95%+)",
      "ruler": "Regional Council"
    },
    {
      "name": "St. Vincent & Grenadines",
      "flag": "🇻🇨",
      "spokenLanguage": "Vincentian Creole (~90%+)",
      "ruler": "Regional Council"
    },
    {
      "name": "Suriname",
      "flag": "🇸🇷",
      "spokenLanguage": "Sranan Tongo (~85%+ lingua franca) / Sarnami / Dutch",
      "ruler": "Regional Council"
    },
    {
      "name": "Trinidad & Tobago",
      "flag": "🇹🇹",
      "spokenLanguage": "Trinidadian Creole / Tobagonian Creole / Bhojpuri",
      "ruler": "Regional Council"
    },
    {
      "name": "United States",
      "flag": "🇺🇸",
      "spokenLanguage": "American English (78%) / Spanish (13%) / Diné Bizaad (Navajo)",
      "ruler": "Regional Council"
    },
    {
      "name": "Uruguay",
      "flag": "🇺🇾",
      "spokenLanguage": "Rioplatense Spanish (~98%+) / Portuñol",
      "ruler": "Regional Council"
    },
    {
      "name": "Venezuela",
      "flag": "🇻🇪",
      "spokenLanguage": "Venezuelan Spanish (~97%+) / Wayuunaiki / Warao",
      "ruler": "Regional Council"
    },
    {
      "name": "Puerto Rico",
      "flag": "🇵🇷",
      "spokenLanguage": "Puerto Rican Spanish (~95%+) / English",
      "status": "COMMONWEALTH_TERRITORY",
      "isTerritory": true
    },
    {
      "name": "French Guiana",
      "flag": "🇬🇫",
      "spokenLanguage": "Guianese Creole / Wayana / Teko",
      "status": "OVERSEAS_TERRITORY",
      "isTerritory": true
    },
    {
      "name": "Martinique",
      "flag": "🇲🇶",
      "spokenLanguage": "Martinican Creole (Kréyòl Matinik)",
      "status": "OVERSEAS_TERRITORY",
      "isTerritory": true
    },
    {
      "name": "Guadeloupe",
      "flag": "🇬🇵",
      "spokenLanguage": "Guadeloupean Creole (Kréyòl Gwadloupéyen)",
      "status": "OVERSEAS_TERRITORY",
      "isTerritory": true
    },
    {
      "name": "Curaçao",
      "flag": "🇨🇼",
      "spokenLanguage": "Papiamento (~80%+ native tongue)",
      "status": "CONSTITUENT_COUNTRY",
      "isTerritory": true
    },
    {
      "name": "Aruba",
      "flag": "🇦🇼",
      "spokenLanguage": "Papiamento (~70%+ native tongue)",
      "status": "CONSTITUENT_COUNTRY",
      "isTerritory": true
    },
    {
      "name": "Bermuda",
      "flag": "🇧🇲",
      "spokenLanguage": "Bermudian English",
      "status": "OVERSEAS_TERRITORY",
      "isTerritory": true
    },
    {
      "name": "Cayman Islands",
      "flag": "🇰🇾",
      "spokenLanguage": "Caymanian English & Creole",
      "status": "OVERSEAS_TERRITORY",
      "isTerritory": true
    }
  ],
  "SHALMALIDVIIPA": [
    {
      "name": "Australia",
      "flag": "🇦🇺",
      "spokenLanguage": "Australian English / Kriol / Pitjantjatjara / Warlpiri",
      "ruler": "Regional Council"
    },
    {
      "name": "Fiji",
      "flag": "🇫🇯",
      "spokenLanguage": "Fijian (iTaukei ~54%) / Fiji Hindi (~37%)",
      "ruler": "Regional Council"
    },
    {
      "name": "Kiribati",
      "flag": "🇰🇮",
      "spokenLanguage": "Gilbertese (Taetae ni Kiribati ~99%+)",
      "ruler": "Regional Council"
    },
    {
      "name": "Marshall Islands",
      "flag": "🇲🇭",
      "spokenLanguage": "Marshallese (Kajin M̧ajeļ ~98%+)",
      "ruler": "Regional Council"
    },
    {
      "name": "Micronesia",
      "flag": "🇫🇲",
      "spokenLanguage": "Chuukese (50%) / Pohnpeian (25%) / Yapese / Kosraean",
      "ruler": "Regional Council"
    },
    {
      "name": "Nauru",
      "flag": "🇳🇷",
      "spokenLanguage": "Nauruan (Dorerin Naoero ~95%+)",
      "ruler": "Regional Council"
    },
    {
      "name": "New Zealand",
      "flag": "🇳🇿",
      "spokenLanguage": "New Zealand English (95%) / Māori (Te Reo Māori ~4%+)",
      "ruler": "Regional Council"
    },
    {
      "name": "Palau",
      "flag": "🇵🇼",
      "spokenLanguage": "Palauan (Belauan ~80%+) / Sonsorolese / Tobian",
      "ruler": "Regional Council"
    },
    {
      "name": "Papua New Guinea",
      "flag": "🇵🇬",
      "spokenLanguage": "Tok Pisin (~80%+ lingua franca) / Hiri Motu / Enga (840+ indigenous tongues)",
      "ruler": "Regional Council"
    },
    {
      "name": "Samoa",
      "flag": "🇼🇸",
      "spokenLanguage": "Samoan (Gagana Samoa ~99%+)",
      "ruler": "Regional Council"
    },
    {
      "name": "Solomon Islands",
      "flag": "🇸🇧",
      "spokenLanguage": "Solomons Pijin (~90%+ lingua franca) / Kwara'ae",
      "ruler": "Regional Council"
    },
    {
      "name": "Tonga",
      "flag": "🇹🇴",
      "spokenLanguage": "Tongan (Lea Faka-Tonga ~98%+)",
      "ruler": "Regional Council"
    },
    {
      "name": "Tuvalu",
      "flag": "🇹🇻",
      "spokenLanguage": "Tuvaluan (Te Ggana Tuvalu ~99%+)",
      "ruler": "Regional Council"
    },
    {
      "name": "Vanuatu",
      "flag": "🇻🇺",
      "spokenLanguage": "Bislama (~95%+ lingua franca / 138 indigenous languages)",
      "ruler": "Regional Council"
    },
    {
      "name": "Guam",
      "flag": "🇬🇺",
      "spokenLanguage": "Chamorro (Fino' Chamoru) / English / Tagalog",
      "status": "UNINCORPORATED_TERRITORY",
      "isTerritory": true
    },
    {
      "name": "French Polynesia",
      "flag": "🇵🇫",
      "spokenLanguage": "Tahitian (Reo Tahiti ~45%) / French / Paumotu",
      "status": "OVERSEAS_COLLECTIVITY",
      "isTerritory": true
    },
    {
      "name": "New Caledonia",
      "flag": "🇳🇨",
      "spokenLanguage": "Kanak tongues (Drehu, Paicî, Ajië, Nengone ~35%) / French",
      "status": "SUI_GENERIS_COLLECTIVITY",
      "isTerritory": true
    },
    {
      "name": "American Samoa",
      "flag": "🇦🇸",
      "spokenLanguage": "Samoan (Gagana Samoa ~90%+)",
      "status": "UNINCORPORATED_TERRITORY",
      "isTerritory": true
    },
    {
      "name": "Cook Islands",
      "flag": "🇨🇰",
      "spokenLanguage": "Cook Islands Māori (Rarotongan) / Pukapukan",
      "status": "ASSOCIATED_STATE",
      "isTerritory": true
    },
    {
      "name": "Rapa Nui (Easter Island)",
      "flag": "🗿",
      "spokenLanguage": "Vananga Rapa Nui / Chilean Spanish",
      "status": "SPECIAL_TERRITORY",
      "isTerritory": true
    }
  ]
};

export const VOID_TO_CONTINENT_MAP: Record<string, keyof typeof NATIONS_BY_CONTINENT> = {
  'AFRICA_CONTINENTAL_INDEX': 'ALKEBULAN',
  'ALKEBULAN_NEXUS_7': 'ALKEBULAN',
  'ALKEBULAN': 'ALKEBULAN',
  'af': 'ALKEBULAN',
  'Africa': 'ALKEBULAN',
  'ASIA_CONTINENTAL_INDEX': 'JAMBUDVIIPA',
  'VOID_OF_FORM': 'JAMBUDVIIPA',
  'as': 'JAMBUDVIIPA',
  'Asia': 'JAMBUDVIIPA',
  'EUROPE_CONTINENTAL_INDEX': 'KRAUNCADVIIPA',
  'VOID_OF_MATTER': 'KRAUNCADVIIPA',
  'eu': 'KRAUNCADVIIPA',
  'Europe': 'KRAUNCADVIIPA',
  'NORTH_AMERICA_CONTINENTAL_INDEX': 'PLAKSHADVIIPA',
  'VOID_OF_TIME': 'PLAKSHADVIIPA',
  'na': 'PLAKSHADVIIPA',
  'North America': 'PLAKSHADVIIPA',
  'SOUTH_AMERICA_CONTINENTAL_INDEX': 'PLAKSHADVIIPA',
  'VOID_OF_SPACE': 'PLAKSHADVIIPA',
  'sa': 'PLAKSHADVIIPA',
  'South America': 'PLAKSHADVIIPA',
  'OCEANIA_CONTINENTAL_INDEX': 'SHALMALIDVIIPA',
  'VOID_OF_MIND': 'SHALMALIDVIIPA',
  'oc': 'SHALMALIDVIIPA',
  'Oceania': 'SHALMALIDVIIPA',
  'ANTARCTICA_CONTINENTAL_INDEX': 'ALKEBULAN',
  'VOID_OF_SOUL': 'ALKEBULAN',
  'an': 'ALKEBULAN',
  'Antarctica': 'ALKEBULAN',
  'TERRITORIES_INDEX': 'ALKEBULAN',
  'VOID_OF_TERRITORIES': 'ALKEBULAN',
  'ns': 'ALKEBULAN'
};
