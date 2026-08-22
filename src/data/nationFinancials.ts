export interface NationFinancialTelecom {
  name: string;
  currencyName: string;
  currencyCode: string;
  currencySymbol: string;
  dialCode: string;
  isoCode: string;
}

export const GLOBAL_NATION_FINANCIALS: Record<string, NationFinancialTelecom> = {
  // --- ALKEBULAN (AFRICA) ---
  "Zambia": {
    name: "Zambia",
    currencyName: "Zambian Kwacha",
    currencyCode: "ZMW",
    currencySymbol: "K",
    dialCode: "+260",
    isoCode: "ZM"
  },
  "Zimbabwe": {
    name: "Zimbabwe",
    currencyName: "Zimbabwe Gold (ZiG) / USD",
    currencyCode: "ZWG",
    currencySymbol: "ZiG",
    dialCode: "+263",
    isoCode: "ZW"
  },
  "Madagascar": {
    name: "Madagascar",
    currencyName: "Malagasy Ariary",
    currencyCode: "MGA",
    currencySymbol: "Ar",
    dialCode: "+261",
    isoCode: "MG"
  },
  "Réunion": {
    name: "Réunion",
    currencyName: "Euro",
    currencyCode: "EUR",
    currencySymbol: "€",
    dialCode: "+262",
    isoCode: "RE"
  },
  "Mayotte": {
    name: "Mayotte",
    currencyName: "Euro",
    currencyCode: "EUR",
    currencySymbol: "€",
    dialCode: "+262",
    isoCode: "YT"
  },
  "Namibia": {
    name: "Namibia",
    currencyName: "Namibian Dollar",
    currencyCode: "NAD",
    currencySymbol: "N$",
    dialCode: "+264",
    isoCode: "NA"
  },
  "Malawi": {
    name: "Malawi",
    currencyName: "Malawian Kwacha",
    currencyCode: "MWK",
    currencySymbol: "MK",
    dialCode: "+265",
    isoCode: "MW"
  },
  "Lesotho": {
    name: "Lesotho",
    currencyName: "Lesotho Loti",
    currencyCode: "LSL",
    currencySymbol: "L",
    dialCode: "+266",
    isoCode: "LS"
  },
  "Botswana": {
    name: "Botswana",
    currencyName: "Botswana Pula",
    currencyCode: "BWP",
    currencySymbol: "P",
    dialCode: "+267",
    isoCode: "BW"
  },
  "Eswatini": {
    name: "Eswatini",
    currencyName: "Swazi Lilangeni",
    currencyCode: "SZL",
    currencySymbol: "E",
    dialCode: "+268",
    isoCode: "SZ"
  },
  "Comoros": {
    name: "Comoros",
    currencyName: "Comorian Franc",
    currencyCode: "KMF",
    currencySymbol: "CF",
    dialCode: "+269",
    isoCode: "KM"
  },
  "South Africa": {
    name: "South Africa",
    currencyName: "South African Rand",
    currencyCode: "ZAR",
    currencySymbol: "R",
    dialCode: "+27",
    isoCode: "ZA"
  },
  "Nigeria": {
    name: "Nigeria",
    currencyName: "Nigerian Naira",
    currencyCode: "NGN",
    currencySymbol: "₦",
    dialCode: "+234",
    isoCode: "NG"
  },
  "Kenya": {
    name: "Kenya",
    currencyName: "Kenyan Shilling",
    currencyCode: "KES",
    currencySymbol: "KSh",
    dialCode: "+254",
    isoCode: "KE"
  },
  "Tanzania": {
    name: "Tanzania",
    currencyName: "Tanzanian Shilling",
    currencyCode: "TZS",
    currencySymbol: "TSh",
    dialCode: "+255",
    isoCode: "TZ"
  },
  "Zanzibar": {
    name: "Zanzibar",
    currencyName: "Tanzanian Shilling",
    currencyCode: "TZS",
    currencySymbol: "TSh",
    dialCode: "+255",
    isoCode: "TZ"
  },
  "Uganda": {
    name: "Uganda",
    currencyName: "Ugandan Shilling",
    currencyCode: "UGX",
    currencySymbol: "USh",
    dialCode: "+256",
    isoCode: "UG"
  },
  "Rwanda": {
    name: "Rwanda",
    currencyName: "Rwandan Franc",
    currencyCode: "RWF",
    currencySymbol: "FRw",
    dialCode: "+250",
    isoCode: "RW"
  },
  "Burundi": {
    name: "Burundi",
    currencyName: "Burundian Franc",
    currencyCode: "BIF",
    currencySymbol: "FBu",
    dialCode: "+257",
    isoCode: "BI"
  },
  "Ethiopia": {
    name: "Ethiopia",
    currencyName: "Ethiopian Birr",
    currencyCode: "ETB",
    currencySymbol: "Br",
    dialCode: "+251",
    isoCode: "ET"
  },
  "Somalia": {
    name: "Somalia",
    currencyName: "Somali Shilling",
    currencyCode: "SOS",
    currencySymbol: "Sh.So.",
    dialCode: "+252",
    isoCode: "SO"
  },
  "Djibouti": {
    name: "Djibouti",
    currencyName: "Djiboutian Franc",
    currencyCode: "DJF",
    currencySymbol: "Fdj",
    dialCode: "+253",
    isoCode: "DJ"
  },
  "Eritrea": {
    name: "Eritrea",
    currencyName: "Eritrean Nakfa",
    currencyCode: "ERN",
    currencySymbol: "Nfk",
    dialCode: "+291",
    isoCode: "ER"
  },
  "Congo (Kinshasa)": {
    name: "Congo (Kinshasa)",
    currencyName: "Congolese Franc",
    currencyCode: "CDF",
    currencySymbol: "FC",
    dialCode: "+243",
    isoCode: "CD"
  },
  "Congo (Brazzaville)": {
    name: "Congo (Brazzaville)",
    currencyName: "Central African CFA Franc",
    currencyCode: "XAF",
    currencySymbol: "FCFA",
    dialCode: "+242",
    isoCode: "CG"
  },
  "Angola": {
    name: "Angola",
    currencyName: "Angolan Kwanza",
    currencyCode: "AOA",
    currencySymbol: "Kz",
    dialCode: "+244",
    isoCode: "AO"
  },
  "Mozambique": {
    name: "Mozambique",
    currencyName: "Mozambican Metical",
    currencyCode: "MZN",
    currencySymbol: "MT",
    dialCode: "+258",
    isoCode: "MZ"
  },
  "Ghana": {
    name: "Ghana",
    currencyName: "Ghanaian Cedi",
    currencyCode: "GHS",
    currencySymbol: "GH₵",
    dialCode: "+233",
    isoCode: "GH"
  },
  "Ivory Coast": {
    name: "Ivory Coast",
    currencyName: "West African CFA Franc",
    currencyCode: "XOF",
    currencySymbol: "CFA",
    dialCode: "+225",
    isoCode: "CI"
  },
  "Côte d'Ivoire": {
    name: "Côte d'Ivoire",
    currencyName: "West African CFA Franc",
    currencyCode: "XOF",
    currencySymbol: "CFA",
    dialCode: "+225",
    isoCode: "CI"
  },
  "Senegal": {
    name: "Senegal",
    currencyName: "West African CFA Franc",
    currencyCode: "XOF",
    currencySymbol: "CFA",
    dialCode: "+221",
    isoCode: "SN"
  },
  "Mali": {
    name: "Mali",
    currencyName: "West African CFA Franc",
    currencyCode: "XOF",
    currencySymbol: "CFA",
    dialCode: "+223",
    isoCode: "ML"
  },
  "Guinea": {
    name: "Guinea",
    currencyName: "Guinean Franc",
    currencyCode: "GNF",
    currencySymbol: "FG",
    dialCode: "+224",
    isoCode: "GN"
  },
  "Guinea-Bissau": {
    name: "Guinea-Bissau",
    currencyName: "West African CFA Franc",
    currencyCode: "XOF",
    currencySymbol: "CFA",
    dialCode: "+245",
    isoCode: "GW"
  },
  "Sierra Leone": {
    name: "Sierra Leone",
    currencyName: "Sierra Leonean Leone",
    currencyCode: "SLE",
    currencySymbol: "Le",
    dialCode: "+232",
    isoCode: "SL"
  },
  "Liberia": {
    name: "Liberia",
    currencyName: "Liberian Dollar",
    currencyCode: "LRD",
    currencySymbol: "L$",
    dialCode: "+231",
    isoCode: "LR"
  },
  "Gambia": {
    name: "Gambia",
    currencyName: "Gambian Dalasi",
    currencyCode: "GMD",
    currencySymbol: "D",
    dialCode: "+220",
    isoCode: "GM"
  },
  "Mauritania": {
    name: "Mauritania",
    currencyName: "Mauritanian Ouguiya",
    currencyCode: "MRU",
    currencySymbol: "UM",
    dialCode: "+222",
    isoCode: "MR"
  },
  "Burkina Faso": {
    name: "Burkina Faso",
    currencyName: "West African CFA Franc",
    currencyCode: "XOF",
    currencySymbol: "CFA",
    dialCode: "+226",
    isoCode: "BF"
  },
  "Niger": {
    name: "Niger",
    currencyName: "West African CFA Franc",
    currencyCode: "XOF",
    currencySymbol: "CFA",
    dialCode: "+227",
    isoCode: "NE"
  },
  "Togo": {
    name: "Togo",
    currencyName: "West African CFA Franc",
    currencyCode: "XOF",
    currencySymbol: "CFA",
    dialCode: "+228",
    isoCode: "TG"
  },
  "Benin": {
    name: "Benin",
    currencyName: "West African CFA Franc",
    currencyCode: "XOF",
    currencySymbol: "CFA",
    dialCode: "+229",
    isoCode: "BJ"
  },
  "Cameroon": {
    name: "Cameroon",
    currencyName: "Central African CFA Franc",
    currencyCode: "XAF",
    currencySymbol: "FCFA",
    dialCode: "+237",
    isoCode: "CM"
  },
  "Central African Republic": {
    name: "Central African Republic",
    currencyName: "Central African CFA Franc",
    currencyCode: "XAF",
    currencySymbol: "FCFA",
    dialCode: "+236",
    isoCode: "CF"
  },
  "Chad": {
    name: "Chad",
    currencyName: "Central African CFA Franc",
    currencyCode: "XAF",
    currencySymbol: "FCFA",
    dialCode: "+235",
    isoCode: "TD"
  },
  "Gabon": {
    name: "Gabon",
    currencyName: "Central African CFA Franc",
    currencyCode: "XAF",
    currencySymbol: "FCFA",
    dialCode: "+241",
    isoCode: "GA"
  },
  "Equatorial Guinea": {
    name: "Equatorial Guinea",
    currencyName: "Central African CFA Franc",
    currencyCode: "XAF",
    currencySymbol: "FCFA",
    dialCode: "+240",
    isoCode: "GQ"
  },
  "São Tomé and Príncipe": {
    name: "São Tomé and Príncipe",
    currencyName: "São Tomé Dobra",
    currencyCode: "STN",
    currencySymbol: "Db",
    dialCode: "+239",
    isoCode: "ST"
  },
  "Cabo Verde": {
    name: "Cabo Verde",
    currencyName: "Cape Verdean Escudo",
    currencyCode: "CVE",
    currencySymbol: "$",
    dialCode: "+238",
    isoCode: "CV"
  },
  "Egypt": {
    name: "Egypt",
    currencyName: "Egyptian Pound",
    currencyCode: "EGP",
    currencySymbol: "E£",
    dialCode: "+20",
    isoCode: "EG"
  },
  "Sudan": {
    name: "Sudan",
    currencyName: "Sudanese Pound",
    currencyCode: "SDG",
    currencySymbol: "SDG",
    dialCode: "+249",
    isoCode: "SD"
  },
  "South Sudan": {
    name: "South Sudan",
    currencyName: "South Sudanese Pound",
    currencyCode: "SSP",
    currencySymbol: "SSP",
    dialCode: "+211",
    isoCode: "SS"
  },
  "Morocco": {
    name: "Morocco",
    currencyName: "Moroccan Dirham",
    currencyCode: "MAD",
    currencySymbol: "DH",
    dialCode: "+212",
    isoCode: "MA"
  },
  "Western Sahara": {
    name: "Western Sahara",
    currencyName: "Moroccan Dirham",
    currencyCode: "MAD",
    currencySymbol: "DH",
    dialCode: "+212",
    isoCode: "EH"
  },
  "Algeria": {
    name: "Algeria",
    currencyName: "Algerian Dinar",
    currencyCode: "DZD",
    currencySymbol: "DA",
    dialCode: "+213",
    isoCode: "DZ"
  },
  "Tunisia": {
    name: "Tunisia",
    currencyName: "Tunisian Dinar",
    currencyCode: "TND",
    currencySymbol: "DT",
    dialCode: "+216",
    isoCode: "TN"
  },
  "Libya": {
    name: "Libya",
    currencyName: "Libyan Dinar",
    currencyCode: "LYD",
    currencySymbol: "LD",
    dialCode: "+218",
    isoCode: "LY"
  },
  "Mauritius": {
    name: "Mauritius",
    currencyName: "Mauritian Rupee",
    currencyCode: "MUR",
    currencySymbol: "Rs",
    dialCode: "+230",
    isoCode: "MU"
  },
  "Seychelles": {
    name: "Seychelles",
    currencyName: "Seychellois Rupee",
    currencyCode: "SCR",
    currencySymbol: "SR",
    dialCode: "+248",
    isoCode: "SC"
  },
  "Saint Helena": {
    name: "Saint Helena",
    currencyName: "Saint Helena Pound",
    currencyCode: "SHP",
    currencySymbol: "£",
    dialCode: "+290",
    isoCode: "SH"
  },

  // --- JAMBUDVIIPA (ASIA) ---
  "China": {
    name: "China",
    currencyName: "Chinese Yuan (Renminbi)",
    currencyCode: "CNY",
    currencySymbol: "¥",
    dialCode: "+86",
    isoCode: "CN"
  },
  "India": {
    name: "India",
    currencyName: "Indian Rupee",
    currencyCode: "INR",
    currencySymbol: "₹",
    dialCode: "+91",
    isoCode: "IN"
  },
  "Japan": {
    name: "Japan",
    currencyName: "Japanese Yen",
    currencyCode: "JPY",
    currencySymbol: "¥",
    dialCode: "+81",
    isoCode: "JP"
  },
  "South Korea": {
    name: "South Korea",
    currencyName: "South Korean Won",
    currencyCode: "KRW",
    currencySymbol: "₩",
    dialCode: "+82",
    isoCode: "KR"
  },
  "North Korea": {
    name: "North Korea",
    currencyName: "North Korean Won",
    currencyCode: "KPW",
    currencySymbol: "₩",
    dialCode: "+850",
    isoCode: "KP"
  },
  "Indonesia": {
    name: "Indonesia",
    currencyName: "Indonesian Rupiah",
    currencyCode: "IDR",
    currencySymbol: "Rp",
    dialCode: "+62",
    isoCode: "ID"
  },
  "Saudi Arabia": {
    name: "Saudi Arabia",
    currencyName: "Saudi Riyal",
    currencyCode: "SAR",
    currencySymbol: "SR",
    dialCode: "+966",
    isoCode: "SA"
  },
  "United Arab Emirates": {
    name: "United Arab Emirates",
    currencyName: "UAE Dirham",
    currencyCode: "AED",
    currencySymbol: "AED",
    dialCode: "+971",
    isoCode: "AE"
  },
  "Qatar": {
    name: "Qatar",
    currencyName: "Qatari Riyal",
    currencyCode: "QAR",
    currencySymbol: "QR",
    dialCode: "+974",
    isoCode: "QA"
  },
  "Kuwait": {
    name: "Kuwait",
    currencyName: "Kuwaiti Dinar",
    currencyCode: "KWD",
    currencySymbol: "KD",
    dialCode: "+965",
    isoCode: "KW"
  },
  "Singapore": {
    name: "Singapore",
    currencyName: "Singapore Dollar",
    currencyCode: "SGD",
    currencySymbol: "S$",
    dialCode: "+65",
    isoCode: "SG"
  },
  "Malaysia": {
    name: "Malaysia",
    currencyName: "Malaysian Ringgit",
    currencyCode: "MYR",
    currencySymbol: "RM",
    dialCode: "+60",
    isoCode: "MY"
  },
  "Thailand": {
    name: "Thailand",
    currencyName: "Thai Baht",
    currencyCode: "THB",
    currencySymbol: "฿",
    dialCode: "+66",
    isoCode: "TH"
  },
  "Vietnam": {
    name: "Vietnam",
    currencyName: "Vietnamese Dong",
    currencyCode: "VND",
    currencySymbol: "₫",
    dialCode: "+84",
    isoCode: "VN"
  },
  "Philippines": {
    name: "Philippines",
    currencyName: "Philippine Peso",
    currencyCode: "PHP",
    currencySymbol: "₱",
    dialCode: "+63",
    isoCode: "PH"
  },
  "Pakistan": {
    name: "Pakistan",
    currencyName: "Pakistani Rupee",
    currencyCode: "PKR",
    currencySymbol: "₨",
    dialCode: "+92",
    isoCode: "PK"
  },
  "Bangladesh": {
    name: "Bangladesh",
    currencyName: "Bangladeshi Taka",
    currencyCode: "BDT",
    currencySymbol: "৳",
    dialCode: "+880",
    isoCode: "BD"
  },
  "Sri Lanka": {
    name: "Sri Lanka",
    currencyName: "Sri Lankan Rupee",
    currencyCode: "LKR",
    currencySymbol: "Rs",
    dialCode: "+94",
    isoCode: "LK"
  },
  "Turkey": {
    name: "Turkey",
    currencyName: "Turkish Lira",
    currencyCode: "TRY",
    currencySymbol: "₺",
    dialCode: "+90",
    isoCode: "TR"
  },
  "Israel": {
    name: "Israel",
    currencyName: "Israeli New Shekel",
    currencyCode: "ILS",
    currencySymbol: "₪",
    dialCode: "+972",
    isoCode: "IL"
  },
  "Iran": {
    name: "Iran",
    currencyName: "Iranian Rial",
    currencyCode: "IRR",
    currencySymbol: "﷼",
    dialCode: "+98",
    isoCode: "IR"
  },
  "Iraq": {
    name: "Iraq",
    currencyName: "Iraqi Dinar",
    currencyCode: "IQD",
    currencySymbol: "ID",
    dialCode: "+964",
    isoCode: "IQ"
  },
  "Jordan": {
    name: "Jordan",
    currencyName: "Jordanian Dinar",
    currencyCode: "JOD",
    currencySymbol: "JD",
    dialCode: "+962",
    isoCode: "JO"
  },
  "Lebanon": {
    name: "Lebanon",
    currencyName: "Lebanese Pound",
    currencyCode: "LBP",
    currencySymbol: "L£",
    dialCode: "+961",
    isoCode: "LB"
  },
  "Oman": {
    name: "Oman",
    currencyName: "Omani Rial",
    currencyCode: "OMR",
    currencySymbol: "RO",
    dialCode: "+968",
    isoCode: "OM"
  },
  "Bahrain": {
    name: "Bahrain",
    currencyName: "Bahraini Dinar",
    currencyCode: "BHD",
    currencySymbol: "BD",
    dialCode: "+973",
    isoCode: "BH"
  },
  "Yemen": {
    name: "Yemen",
    currencyName: "Yemeni Rial",
    currencyCode: "YER",
    currencySymbol: "YR",
    dialCode: "+967",
    isoCode: "YE"
  },
  "Syria": {
    name: "Syria",
    currencyName: "Syrian Pound",
    currencyCode: "SYP",
    currencySymbol: "LS",
    dialCode: "+963",
    isoCode: "SY"
  },
  "Kazakhstan": {
    name: "Kazakhstan",
    currencyName: "Kazakhstani Tenge",
    currencyCode: "KZT",
    currencySymbol: "₸",
    dialCode: "+7",
    isoCode: "KZ"
  },
  "Uzbekistan": {
    name: "Uzbekistan",
    currencyName: "Uzbekistani Som",
    currencyCode: "UZS",
    currencySymbol: "so'm",
    dialCode: "+998",
    isoCode: "UZ"
  },
  "Turkmenistan": {
    name: "Turkmenistan",
    currencyName: "Turkmenistani Manat",
    currencyCode: "TMT",
    currencySymbol: "TMT",
    dialCode: "+993",
    isoCode: "TM"
  },
  "Kyrgyzstan": {
    name: "Kyrgyzstan",
    currencyName: "Kyrgyzstani Som",
    currencyCode: "KGS",
    currencySymbol: "som",
    dialCode: "+996",
    isoCode: "KG"
  },
  "Tajikistan": {
    name: "Tajikistan",
    currencyName: "Tajikistani Somoni",
    currencyCode: "TJS",
    currencySymbol: "SM",
    dialCode: "+992",
    isoCode: "TJ"
  },
  "Afghanistan": {
    name: "Afghanistan",
    currencyName: "Afghan Afghani",
    currencyCode: "AFN",
    currencySymbol: "؋",
    dialCode: "+93",
    isoCode: "AF"
  },
  "Nepal": {
    name: "Nepal",
    currencyName: "Nepalese Rupee",
    currencyCode: "NPR",
    currencySymbol: "₨",
    dialCode: "+977",
    isoCode: "NP"
  },
  "Bhutan": {
    name: "Bhutan",
    currencyName: "Bhutanese Ngultrum",
    currencyCode: "BTN",
    currencySymbol: "Nu.",
    dialCode: "+975",
    isoCode: "BT"
  },
  "Maldives": {
    name: "Maldives",
    currencyName: "Maldivian Rufiyaa",
    currencyCode: "MVR",
    currencySymbol: "Rf",
    dialCode: "+960",
    isoCode: "MV"
  },
  "Myanmar": {
    name: "Myanmar",
    currencyName: "Myanmar Kyat",
    currencyCode: "MMK",
    currencySymbol: "K",
    dialCode: "+95",
    isoCode: "MM"
  },
  "Cambodia": {
    name: "Cambodia",
    currencyName: "Cambodian Riel",
    currencyCode: "KHR",
    currencySymbol: "៛",
    dialCode: "+855",
    isoCode: "KH"
  },
  "Laos": {
    name: "Laos",
    currencyName: "Lao Kip",
    currencyCode: "LAK",
    currencySymbol: "₭",
    dialCode: "+856",
    isoCode: "LA"
  },
  "Mongolia": {
    name: "Mongolia",
    currencyName: "Mongolian Tögrög",
    currencyCode: "MNT",
    currencySymbol: "₮",
    dialCode: "+976",
    isoCode: "MN"
  },
  "Brunei": {
    name: "Brunei",
    currencyName: "Brunei Dollar",
    currencyCode: "BND",
    currencySymbol: "B$",
    dialCode: "+673",
    isoCode: "BN"
  },
  "East Timor": {
    name: "East Timor",
    currencyName: "US Dollar",
    currencyCode: "USD",
    currencySymbol: "$",
    dialCode: "+670",
    isoCode: "TL"
  },
  "Taiwan": {
    name: "Taiwan",
    currencyName: "New Taiwan Dollar",
    currencyCode: "TWD",
    currencySymbol: "NT$",
    dialCode: "+886",
    isoCode: "TW"
  },
  "Hong Kong": {
    name: "Hong Kong",
    currencyName: "Hong Kong Dollar",
    currencyCode: "HKD",
    currencySymbol: "HK$",
    dialCode: "+852",
    isoCode: "HK"
  },
  "Macau": {
    name: "Macau",
    currencyName: "Macanese Pataca",
    currencyCode: "MOP",
    currencySymbol: "MOP$",
    dialCode: "+853",
    isoCode: "MO"
  },
  "Georgia": {
    name: "Georgia",
    currencyName: "Georgian Lari",
    currencyCode: "GEL",
    currencySymbol: "₾",
    dialCode: "+995",
    isoCode: "GE"
  },
  "Armenia": {
    name: "Armenia",
    currencyName: "Armenian Dram",
    currencyCode: "AMD",
    currencySymbol: "֏",
    dialCode: "+374",
    isoCode: "AM"
  },
  "Azerbaijan": {
    name: "Azerbaijan",
    currencyName: "Azerbaijani Manat",
    currencyCode: "AZN",
    currencySymbol: "₼",
    dialCode: "+994",
    isoCode: "AZ"
  },
  "Cyprus": {
    name: "Cyprus",
    currencyName: "Euro",
    currencyCode: "EUR",
    currencySymbol: "€",
    dialCode: "+357",
    isoCode: "CY"
  },
  "Palestine": {
    name: "Palestine",
    currencyName: "ILS / JOD / USD",
    currencyCode: "ILS",
    currencySymbol: "₪",
    dialCode: "+970",
    isoCode: "PS"
  },

  // --- KRAUNCADVIIPA (EUROPE) ---
  "United Kingdom": {
    name: "United Kingdom",
    currencyName: "British Pound Sterling",
    currencyCode: "GBP",
    currencySymbol: "£",
    dialCode: "+44",
    isoCode: "GB"
  },
  "Germany": {
    name: "Germany",
    currencyName: "Euro",
    currencyCode: "EUR",
    currencySymbol: "€",
    dialCode: "+49",
    isoCode: "DE"
  },
  "France": {
    name: "France",
    currencyName: "Euro",
    currencyCode: "EUR",
    currencySymbol: "€",
    dialCode: "+33",
    isoCode: "FR"
  },
  "Italy": {
    name: "Italy",
    currencyName: "Euro",
    currencyCode: "EUR",
    currencySymbol: "€",
    dialCode: "+39",
    isoCode: "IT"
  },
  "Spain": {
    name: "Spain",
    currencyName: "Euro",
    currencyCode: "EUR",
    currencySymbol: "€",
    dialCode: "+34",
    isoCode: "ES"
  },
  "Portugal": {
    name: "Portugal",
    currencyName: "Euro",
    currencyCode: "EUR",
    currencySymbol: "€",
    dialCode: "+351",
    isoCode: "PT"
  },
  "Netherlands": {
    name: "Netherlands",
    currencyName: "Euro",
    currencyCode: "EUR",
    currencySymbol: "€",
    dialCode: "+31",
    isoCode: "NL"
  },
  "Belgium": {
    name: "Belgium",
    currencyName: "Euro",
    currencyCode: "EUR",
    currencySymbol: "€",
    dialCode: "+32",
    isoCode: "BE"
  },
  "Switzerland": {
    name: "Switzerland",
    currencyName: "Swiss Franc",
    currencyCode: "CHF",
    currencySymbol: "CHF",
    dialCode: "+41",
    isoCode: "CH"
  },
  "Austria": {
    name: "Austria",
    currencyName: "Euro",
    currencyCode: "EUR",
    currencySymbol: "€",
    dialCode: "+43",
    isoCode: "AT"
  },
  "Sweden": {
    name: "Sweden",
    currencyName: "Swedish Krona",
    currencyCode: "SEK",
    currencySymbol: "kr",
    dialCode: "+46",
    isoCode: "SE"
  },
  "Norway": {
    name: "Norway",
    currencyName: "Norwegian Krone",
    currencyCode: "NOK",
    currencySymbol: "kr",
    dialCode: "+47",
    isoCode: "NO"
  },
  "Denmark": {
    name: "Denmark",
    currencyName: "Danish Krone",
    currencyCode: "DKK",
    currencySymbol: "kr",
    dialCode: "+45",
    isoCode: "DK"
  },
  "Finland": {
    name: "Finland",
    currencyName: "Euro",
    currencyCode: "EUR",
    currencySymbol: "€",
    dialCode: "+358",
    isoCode: "FI"
  },
  "Ireland": {
    name: "Ireland",
    currencyName: "Euro",
    currencyCode: "EUR",
    currencySymbol: "€",
    dialCode: "+353",
    isoCode: "IE"
  },
  "Poland": {
    name: "Poland",
    currencyName: "Polish Złoty",
    currencyCode: "PLN",
    currencySymbol: "zł",
    dialCode: "+48",
    isoCode: "PL"
  },
  "Czech Republic": {
    name: "Czech Republic",
    currencyName: "Czech Koruna",
    currencyCode: "CZK",
    currencySymbol: "Kč",
    dialCode: "+420",
    isoCode: "CZ"
  },
  "Greece": {
    name: "Greece",
    currencyName: "Euro",
    currencyCode: "EUR",
    currencySymbol: "€",
    dialCode: "+30",
    isoCode: "GR"
  },
  "Russia": {
    name: "Russia",
    currencyName: "Russian Ruble",
    currencyCode: "RUB",
    currencySymbol: "₽",
    dialCode: "+7",
    isoCode: "RU"
  },
  "Ukraine": {
    name: "Ukraine",
    currencyName: "Ukrainian Hryvnia",
    currencyCode: "UAH",
    currencySymbol: "₴",
    dialCode: "+380",
    isoCode: "UA"
  },
  "Romania": {
    name: "Romania",
    currencyName: "Romanian Leu",
    currencyCode: "RON",
    currencySymbol: "lei",
    dialCode: "+40",
    isoCode: "RO"
  },
  "Hungary": {
    name: "Hungary",
    currencyName: "Hungarian Forint",
    currencyCode: "HUF",
    currencySymbol: "Ft",
    dialCode: "+36",
    isoCode: "HU"
  },
  "Slovakia": {
    name: "Slovakia",
    currencyName: "Euro",
    currencyCode: "EUR",
    currencySymbol: "€",
    dialCode: "+421",
    isoCode: "SK"
  },
  "Croatia": {
    name: "Croatia",
    currencyName: "Euro",
    currencyCode: "EUR",
    currencySymbol: "€",
    dialCode: "+385",
    isoCode: "HR"
  },
  "Bulgaria": {
    name: "Bulgaria",
    currencyName: "Bulgarian Lev",
    currencyCode: "BGN",
    currencySymbol: "лв",
    dialCode: "+359",
    isoCode: "BG"
  },
  "Serbia": {
    name: "Serbia",
    currencyName: "Serbian Dinar",
    currencyCode: "RSD",
    currencySymbol: "din",
    dialCode: "+381",
    isoCode: "RS"
  },
  "Slovenia": {
    name: "Slovenia",
    currencyName: "Euro",
    currencyCode: "EUR",
    currencySymbol: "€",
    dialCode: "+386",
    isoCode: "SI"
  },
  "Lithuania": {
    name: "Lithuania",
    currencyName: "Euro",
    currencyCode: "EUR",
    currencySymbol: "€",
    dialCode: "+370",
    isoCode: "LT"
  },
  "Latvia": {
    name: "Latvia",
    currencyName: "Euro",
    currencyCode: "EUR",
    currencySymbol: "€",
    dialCode: "+371",
    isoCode: "LV"
  },
  "Estonia": {
    name: "Estonia",
    currencyName: "Euro",
    currencyCode: "EUR",
    currencySymbol: "€",
    dialCode: "+372",
    isoCode: "EE"
  },
  "Iceland": {
    name: "Iceland",
    currencyName: "Icelandic Króna",
    currencyCode: "ISK",
    currencySymbol: "kr",
    dialCode: "+354",
    isoCode: "IS"
  },
  "Luxembourg": {
    name: "Luxembourg",
    currencyName: "Euro",
    currencyCode: "EUR",
    currencySymbol: "€",
    dialCode: "+352",
    isoCode: "LU"
  },
  "Malta": {
    name: "Malta",
    currencyName: "Euro",
    currencyCode: "EUR",
    currencySymbol: "€",
    dialCode: "+356",
    isoCode: "MT"
  },
  "Albania": {
    name: "Albania",
    currencyName: "Albanian Lek",
    currencyCode: "ALL",
    currencySymbol: "L",
    dialCode: "+355",
    isoCode: "AL"
  },
  "Bosnia and Herzegovina": {
    name: "Bosnia and Herzegovina",
    currencyName: "Bosnia Convertible Mark",
    currencyCode: "BAM",
    currencySymbol: "KM",
    dialCode: "+387",
    isoCode: "BA"
  },
  "North Macedonia": {
    name: "North Macedonia",
    currencyName: "Macedonian Denar",
    currencyCode: "MKD",
    currencySymbol: "ден",
    dialCode: "+389",
    isoCode: "MK"
  },
  "Montenegro": {
    name: "Montenegro",
    currencyName: "Euro",
    currencyCode: "EUR",
    currencySymbol: "€",
    dialCode: "+382",
    isoCode: "ME"
  },
  "Belarus": {
    name: "Belarus",
    currencyName: "Belarusian Ruble",
    currencyCode: "BYN",
    currencySymbol: "Br",
    dialCode: "+375",
    isoCode: "BY"
  },
  "Moldova": {
    name: "Moldova",
    currencyName: "Moldovan Leu",
    currencyCode: "MDL",
    currencySymbol: "L",
    dialCode: "+373",
    isoCode: "MD"
  },
  "Monaco": {
    name: "Monaco",
    currencyName: "Euro",
    currencyCode: "EUR",
    currencySymbol: "€",
    dialCode: "+377",
    isoCode: "MC"
  },
  "Liechtenstein": {
    name: "Liechtenstein",
    currencyName: "Swiss Franc",
    currencyCode: "CHF",
    currencySymbol: "CHF",
    dialCode: "+423",
    isoCode: "LI"
  },
  "Andorra": {
    name: "Andorra",
    currencyName: "Euro",
    currencyCode: "EUR",
    currencySymbol: "€",
    dialCode: "+376",
    isoCode: "AD"
  },
  "San Marino": {
    name: "San Marino",
    currencyName: "Euro",
    currencyCode: "EUR",
    currencySymbol: "€",
    dialCode: "+378",
    isoCode: "SM"
  },
  "Vatican City": {
    name: "Vatican City",
    currencyName: "Euro",
    currencyCode: "EUR",
    currencySymbol: "€",
    dialCode: "+39",
    isoCode: "VA"
  },

  // --- PLAKSHADVIIPA (AMERICAS) ---
  "United States": {
    name: "United States",
    currencyName: "US Dollar",
    currencyCode: "USD",
    currencySymbol: "$",
    dialCode: "+1",
    isoCode: "US"
  },
  "Canada": {
    name: "Canada",
    currencyName: "Canadian Dollar",
    currencyCode: "CAD",
    currencySymbol: "C$",
    dialCode: "+1",
    isoCode: "CA"
  },
  "Mexico": {
    name: "Mexico",
    currencyName: "Mexican Peso",
    currencyCode: "MXN",
    currencySymbol: "Mex$",
    dialCode: "+52",
    isoCode: "MX"
  },
  "Brazil": {
    name: "Brazil",
    currencyName: "Brazilian Real",
    currencyCode: "BRL",
    currencySymbol: "R$",
    dialCode: "+55",
    isoCode: "BR"
  },
  "Argentina": {
    name: "Argentina",
    currencyName: "Argentine Peso",
    currencyCode: "ARS",
    currencySymbol: "$",
    dialCode: "+54",
    isoCode: "AR"
  },
  "Colombia": {
    name: "Colombia",
    currencyName: "Colombian Peso",
    currencyCode: "COP",
    currencySymbol: "Col$",
    dialCode: "+57",
    isoCode: "CO"
  },
  "Chile": {
    name: "Chile",
    currencyName: "Chilean Peso",
    currencyCode: "CLP",
    currencySymbol: "CLP$",
    dialCode: "+56",
    isoCode: "CL"
  },
  "Peru": {
    name: "Peru",
    currencyName: "Peruvian Sol",
    currencyCode: "PEN",
    currencySymbol: "S/",
    dialCode: "+51",
    isoCode: "PE"
  },
  "Venezuela": {
    name: "Venezuela",
    currencyName: "Venezuelan Bolívar",
    currencyCode: "VES",
    currencySymbol: "Bs.S",
    dialCode: "+58",
    isoCode: "VE"
  },
  "Ecuador": {
    name: "Ecuador",
    currencyName: "US Dollar",
    currencyCode: "USD",
    currencySymbol: "$",
    dialCode: "+593",
    isoCode: "EC"
  },
  "Bolivia": {
    name: "Bolivia",
    currencyName: "Bolivian Boliviano",
    currencyCode: "BOB",
    currencySymbol: "Bs",
    dialCode: "+591",
    isoCode: "BO"
  },
  "Paraguay": {
    name: "Paraguay",
    currencyName: "Paraguayan Guaraní",
    currencyCode: "PYG",
    currencySymbol: "₲",
    dialCode: "+595",
    isoCode: "PY"
  },
  "Uruguay": {
    name: "Uruguay",
    currencyName: "Uruguayan Peso",
    currencyCode: "UYU",
    currencySymbol: "$U",
    dialCode: "+598",
    isoCode: "UY"
  },
  "Guyana": {
    name: "Guyana",
    currencyName: "Guyanese Dollar",
    currencyCode: "GYD",
    currencySymbol: "G$",
    dialCode: "+592",
    isoCode: "GY"
  },
  "Suriname": {
    name: "Suriname",
    currencyName: "Surinamese Dollar",
    currencyCode: "SRD",
    currencySymbol: "Sr$",
    dialCode: "+597",
    isoCode: "SR"
  },
  "Cuba": {
    name: "Cuba",
    currencyName: "Cuban Peso",
    currencyCode: "CUP",
    currencySymbol: "$MN",
    dialCode: "+53",
    isoCode: "CU"
  },
  "Dominican Republic": {
    name: "Dominican Republic",
    currencyName: "Dominican Peso",
    currencyCode: "DOP",
    currencySymbol: "RD$",
    dialCode: "+1-809",
    isoCode: "DO"
  },
  "Haiti": {
    name: "Haiti",
    currencyName: "Haitian Gourde",
    currencyCode: "HTG",
    currencySymbol: "G",
    dialCode: "+509",
    isoCode: "HT"
  },
  "Jamaica": {
    name: "Jamaica",
    currencyName: "Jamaican Dollar",
    currencyCode: "JMD",
    currencySymbol: "J$",
    dialCode: "+1-876",
    isoCode: "JM"
  },
  "Trinidad and Tobago": {
    name: "Trinidad and Tobago",
    currencyName: "Trinidad & Tobago Dollar",
    currencyCode: "TTD",
    currencySymbol: "TT$",
    dialCode: "+1-868",
    isoCode: "TT"
  },
  "Bahamas": {
    name: "Bahamas",
    currencyName: "Bahamian Dollar",
    currencyCode: "BSD",
    currencySymbol: "B$",
    dialCode: "+1-242",
    isoCode: "BS"
  },
  "Barbados": {
    name: "Barbados",
    currencyName: "Barbadian Dollar",
    currencyCode: "BBD",
    currencySymbol: "Bds$",
    dialCode: "+1-246",
    isoCode: "BB"
  },
  "Costa Rica": {
    name: "Costa Rica",
    currencyName: "Costa Rican Colón",
    currencyCode: "CRC",
    currencySymbol: "₡",
    dialCode: "+506",
    isoCode: "CR"
  },
  "Panama": {
    name: "Panama",
    currencyName: "Panamanian Balboa / USD",
    currencyCode: "PAB",
    currencySymbol: "B/.",
    dialCode: "+507",
    isoCode: "PA"
  },
  "Guatemala": {
    name: "Guatemala",
    currencyName: "Guatemalan Quetzal",
    currencyCode: "GTQ",
    currencySymbol: "Q",
    dialCode: "+502",
    isoCode: "GT"
  },
  "Honduras": {
    name: "Honduras",
    currencyName: "Honduran Lempira",
    currencyCode: "HNL",
    currencySymbol: "L",
    dialCode: "+504",
    isoCode: "HN"
  },
  "El Salvador": {
    name: "El Salvador",
    currencyName: "US Dollar / Bitcoin",
    currencyCode: "USD",
    currencySymbol: "$",
    dialCode: "+503",
    isoCode: "SV"
  },
  "Nicaragua": {
    name: "Nicaragua",
    currencyName: "Nicaraguan Córdoba",
    currencyCode: "NIO",
    currencySymbol: "C$",
    dialCode: "+505",
    isoCode: "NI"
  },
  "Belize": {
    name: "Belize",
    currencyName: "Belize Dollar",
    currencyCode: "BZD",
    currencySymbol: "BZ$",
    dialCode: "+501",
    isoCode: "BZ"
  },

  // --- SHALMALIDVIIPA (OCEANIA & PACIFIC) ---
  "Australia": {
    name: "Australia",
    currencyName: "Australian Dollar",
    currencyCode: "AUD",
    currencySymbol: "A$",
    dialCode: "+61",
    isoCode: "AU"
  },
  "New Zealand": {
    name: "New Zealand",
    currencyName: "New Zealand Dollar",
    currencyCode: "NZD",
    currencySymbol: "NZ$",
    dialCode: "+64",
    isoCode: "NZ"
  },
  "Papua New Guinea": {
    name: "Papua New Guinea",
    currencyName: "Papua New Guinean Kina",
    currencyCode: "PGK",
    currencySymbol: "K",
    dialCode: "+675",
    isoCode: "PG"
  },
  "Fiji": {
    name: "Fiji",
    currencyName: "Fijian Dollar",
    currencyCode: "FJD",
    currencySymbol: "FJ$",
    dialCode: "+679",
    isoCode: "FJ"
  },
  "Solomon Islands": {
    name: "Solomon Islands",
    currencyName: "Solomon Islands Dollar",
    currencyCode: "SBD",
    currencySymbol: "SI$",
    dialCode: "+677",
    isoCode: "SB"
  },
  "Vanuatu": {
    name: "Vanuatu",
    currencyName: "Vanuatu Vatu",
    currencyCode: "VUV",
    currencySymbol: "VT",
    dialCode: "+678",
    isoCode: "VU"
  },
  "Samoa": {
    name: "Samoa",
    currencyName: "Samoan Tālā",
    currencyCode: "WST",
    currencySymbol: "WS$",
    dialCode: "+685",
    isoCode: "WS"
  },
  "Tonga": {
    name: "Tonga",
    currencyName: "Tongan Paʻanga",
    currencyCode: "TOP",
    currencySymbol: "T$",
    dialCode: "+676",
    isoCode: "TO"
  },
  "Micronesia": {
    name: "Micronesia",
    currencyName: "US Dollar",
    currencyCode: "USD",
    currencySymbol: "$",
    dialCode: "+691",
    isoCode: "FM"
  },
  "Palau": {
    name: "Palau",
    currencyName: "US Dollar",
    currencyCode: "USD",
    currencySymbol: "$",
    dialCode: "+680",
    isoCode: "PW"
  },
  "Marshall Islands": {
    name: "Marshall Islands",
    currencyName: "US Dollar",
    currencyCode: "USD",
    currencySymbol: "$",
    dialCode: "+692",
    isoCode: "MH"
  },
  "Kiribati": {
    name: "Kiribati",
    currencyName: "Australian Dollar",
    currencyCode: "AUD",
    currencySymbol: "A$",
    dialCode: "+686",
    isoCode: "KI"
  },
  "Nauru": {
    name: "Nauru",
    currencyName: "Australian Dollar",
    currencyCode: "AUD",
    currencySymbol: "A$",
    dialCode: "+674",
    isoCode: "NR"
  },
  "Tuvalu": {
    name: "Tuvalu",
    currencyName: "Tuvaluan Dollar / AUD",
    currencyCode: "TVD",
    currencySymbol: "TV$",
    dialCode: "+688",
    isoCode: "TV"
  },
  "Guam": {
    name: "Guam",
    currencyName: "US Dollar",
    currencyCode: "USD",
    currencySymbol: "$",
    dialCode: "+1-671",
    isoCode: "GU"
  },
  "French Polynesia": {
    name: "French Polynesia",
    currencyName: "CFP Franc",
    currencyCode: "XPF",
    currencySymbol: "₣",
    dialCode: "+689",
    isoCode: "PF"
  },
  "New Caledonia": {
    name: "New Caledonia",
    currencyName: "CFP Franc",
    currencyCode: "XPF",
    currencySymbol: "₣",
    dialCode: "+687",
    isoCode: "NC"
  },
  "American Samoa": {
    name: "American Samoa",
    currencyName: "US Dollar",
    currencyCode: "USD",
    currencySymbol: "$",
    dialCode: "+1-684",
    isoCode: "AS"
  },
  "Cook Islands": {
    name: "Cook Islands",
    currencyName: "Cook Islands Dollar / NZD",
    currencyCode: "NZD",
    currencySymbol: "$",
    dialCode: "+682",
    isoCode: "CK"
  },
  "Rapa Nui (Easter Island)": {
    name: "Rapa Nui (Easter Island)",
    currencyName: "Chilean Peso",
    currencyCode: "CLP",
    currencySymbol: "CLP$",
    dialCode: "+56",
    isoCode: "CL"
  }
};

export function getNationFinancials(countryName: string): NationFinancialTelecom {
  if (!countryName) {
    return {
      name: 'Unknown',
      currencyName: 'Earth Standard Credit',
      currencyCode: 'ESC',
      currencySymbol: '◈',
      dialCode: '+000',
      isoCode: 'GL'
    };
  }

  const direct = GLOBAL_NATION_FINANCIALS[countryName];
  if (direct) return direct;

  const normalized = countryName.trim();
  const replacedAnd = normalized.replace('&', 'and');
  const replacedAmp = normalized.replace('and', '&');

  if (GLOBAL_NATION_FINANCIALS[replacedAnd]) return GLOBAL_NATION_FINANCIALS[replacedAnd];
  if (GLOBAL_NATION_FINANCIALS[replacedAmp]) return GLOBAL_NATION_FINANCIALS[replacedAmp];

  // Try case-insensitive or partial match
  const foundKey = Object.keys(GLOBAL_NATION_FINANCIALS).find(
    k => k.toLowerCase() === normalized.toLowerCase() ||
         normalized.toLowerCase().includes(k.toLowerCase()) ||
         k.toLowerCase().includes(normalized.toLowerCase())
  );

  if (foundKey && GLOBAL_NATION_FINANCIALS[foundKey]) {
    return GLOBAL_NATION_FINANCIALS[foundKey];
  }

  return {
    name: countryName,
    currencyName: 'Sovereign National Currency',
    currencyCode: 'SNC',
    currencySymbol: '◈',
    dialCode: '+00',
    isoCode: 'UN'
  };
}
