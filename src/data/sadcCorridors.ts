export interface SadcTradeCorridor {
  id: string;
  name: string;
  code: string;
  oceanGateway: string;
  originHub: string;
  terminalPort: string;
  countriesTransit: string[];
  totalDistanceKm: number;
  modes: ('HEAVY_RAIL' | 'PAVED_HIGHWAY' | 'MULTIMODAL_BARGE' | 'DEEP_SEA_PORT')[];
  avgTransitDays: number;
  railCapacityMpa?: number; // Million tonnes per annum
  primaryCommodities: string[];
  strategicImportance: string;
  keyBorders: string[];
  currencyMatrix: string[];
  status: 'ACTIVE_HIGH_CAPACITY' | 'EXPANSION_UPGRADE' | 'OPERATIONAL_STANDARD';
  harmonicResonanceHz: number;
}

export interface SadcBorderPost {
  id: string;
  name: string;
  type: 'ONE_STOP_BORDER_POST' | 'STANDARD_LAND_PORT' | 'QUADRIPOINT_BRIDGE' | 'RIVER_CONFLUENCE';
  countryA: { name: string; iso: string; flag: string };
  countryB: { name: string; iso: string; flag: string };
  thirdCountry?: { name: string; iso: string; flag: string };
  operatingHours: string;
  avgClearanceHours: number;
  dailyCargoTrucks: number;
  customsSystems: string;
  tariffRegimes: string[];
  keyTradeCorridor: string;
  liveStatus: 'OPTIMAL_FLOW' | 'MODERATE_QUEUE' | 'HIGH_VOLUME_ALERT';
  coordinates: { lat: number; lng: number };
}

export interface TradeRegimeInfo {
  acronym: string;
  name: string;
  memberCount: number;
  zambiaStatus: string;
  rulesOfOrigin: string;
  tariffReduction: string;
  currencySettlement: string;
}

export const SADC_TRADE_CORRIDORS: SadcTradeCorridor[] = [
  {
    id: "lobito-corridor",
    name: "Lobito Trans-African Atlantic Corridor",
    code: "LOB-ATL-01",
    oceanGateway: "Atlantic Ocean (Port of Lobito, Angola)",
    originHub: "Solwezi & Kolwezi Mining Hubs (Copperbelt / Katanga)",
    terminalPort: "Port of Lobito (Angola)",
    countriesTransit: ["Zambia", "DR Congo", "Angola"],
    totalDistanceKm: 1739,
    modes: ["HEAVY_RAIL", "PAVED_HIGHWAY", "DEEP_SEA_PORT"],
    avgTransitDays: 3.5,
    railCapacityMpa: 5.5,
    primaryCommodities: ["High-Grade Copper Cathodes", "Cobalt Hydroxide", "Lithium Concentrate", "Heavy Mining Machinery", "Agro-inputs"],
    strategicImportance: "Fastest direct rail route to Atlantic markets, bypassing congested southern routes by over 10-14 days. Backed by Africa Finance Corporation, US PGI, EU Global Gateway.",
    keyBorders: ["Jimbe (ZM/AO)", "Kasumbalesa (ZM/CD)", "Luau (AO/CD)"],
    currencyMatrix: ["ZMW", "AOA", "USD", "EUR"],
    status: "EXPANSION_UPGRADE",
    harmonicResonanceHz: 432
  },
  {
    id: "walvis-bay-corridor",
    name: "Walvis Bay / Trans-Caprivi Trade Corridor",
    code: "WLB-CAP-02",
    oceanGateway: "Atlantic Ocean (Port of Walvis Bay, Namibia)",
    originHub: "Ndola & Lusaka Industrial Central Hubs",
    terminalPort: "Namport Deepwater Terminal (Walvis Bay)",
    countriesTransit: ["Zambia", "Namibia", "Botswana"],
    totalDistanceKm: 2150,
    modes: ["PAVED_HIGHWAY", "DEEP_SEA_PORT"],
    avgTransitDays: 4.2,
    primaryCommodities: ["Refined Copper Wire", "Manganese", "Automotive Components", "Frozen Fish & Beef", "Frozen Sea Freight"],
    strategicImportance: "Congestion-free western access with dedicated dry port concessions for Zambia at Walvis Bay. Highly reliable paved Trans-Caprivi transit.",
    keyBorders: ["Katima Mulilo / Wenela (ZM/NA)", "Kazungula (ZM/BW)"],
    currencyMatrix: ["ZMW", "NAD", "ZAR", "BWP", "USD"],
    status: "ACTIVE_HIGH_CAPACITY",
    harmonicResonanceHz: 432
  },
  {
    id: "tazara-dar-corridor",
    name: "TAZARA / Dar es Salaam North-Eastern Corridor",
    code: "TAZ-DAR-03",
    oceanGateway: "Indian Ocean (Port of Dar es Salaam, Tanzania)",
    originHub: "Kapiri Mposhi & Mpika Transshipment Junctions",
    terminalPort: "Dar es Salaam Port (Tanzania)",
    countriesTransit: ["Zambia", "Tanzania"],
    totalDistanceKm: 1860,
    modes: ["HEAVY_RAIL", "PAVED_HIGHWAY", "DEEP_SEA_PORT"],
    avgTransitDays: 5.0,
    railCapacityMpa: 4.0,
    primaryCommodities: ["Refined Copper", "Fertilizer Imports", "Crude Oil Pipeline (TAZAMA)", "Grain & Maize", "Consumer Goods"],
    strategicImportance: "Historic non-aligned bilateral heavy railway link constructed 1970–1975, interconnecting central Alkebulan with Eastern Indian Ocean trade lanes and Asia-bound shipping.",
    keyBorders: ["Nakonde / Tunduma (ZM/TZ)"],
    currencyMatrix: ["ZMW", "TZS", "USD", "CNY"],
    status: "EXPANSION_UPGRADE",
    harmonicResonanceHz: 432
  },
  {
    id: "north-south-durban-corridor",
    name: "North-South Corridor (Copperbelt - Durban Gateway)",
    code: "NSC-DRB-04",
    oceanGateway: "Indian Ocean (Port of Durban, South Africa)",
    originHub: "Kitwe / Chingola / Lusaka (Zambia)",
    terminalPort: "Port of Durban Container Terminal (South Africa)",
    countriesTransit: ["Zambia", "Zimbabwe", "Botswana", "South Africa"],
    totalDistanceKm: 2650,
    modes: ["PAVED_HIGHWAY", "HEAVY_RAIL", "DEEP_SEA_PORT"],
    avgTransitDays: 6.5,
    primaryCommodities: ["Mining Equipment", "Heavy Industrial Chemicals", "Steel Billets", "Processed Foods", "Vehicles"],
    strategicImportance: "The highest freight volume highway arterial network in the SADC regional bloc, connecting industrial manufacturing in Gauteng and Durban ports to Central African mines.",
    keyBorders: ["Chirundu (ZM/ZW)", "Beitbridge (ZW/ZA)", "Kazungula (ZM/BW)"],
    currencyMatrix: ["ZMW", "ZAR", "USD", "ZWG"],
    status: "ACTIVE_HIGH_CAPACITY",
    harmonicResonanceHz: 432
  },
  {
    id: "beira-corridor",
    name: "Beira Agricultural & Mineral Corridor",
    code: "BEI-MOZ-05",
    oceanGateway: "Indian Ocean (Port of Beira, Mozambique)",
    originHub: "Lusaka & Eastern Province Agro-Belts (Chipata/Katete)",
    terminalPort: "Port of Beira (Mozambique)",
    countriesTransit: ["Zambia", "Zimbabwe", "Mozambique", "Malawi"],
    totalDistanceKm: 1050,
    modes: ["PAVED_HIGHWAY", "HEAVY_RAIL", "DEEP_SEA_PORT"],
    avgTransitDays: 3.0,
    primaryCommodities: ["Agricultural Tobacco & Soya", "Sugar", "Fertilizer", "Petroleum Products", "Copper Wire"],
    strategicImportance: "Shortest maritime route for central and eastern Zambia to deep sea container terminals on the Indian Ocean channel.",
    keyBorders: ["Chanida (ZM/MZ)", "Forbes / Machipanda (ZW/MZ)", "Mwami (ZM/MW)"],
    currencyMatrix: ["ZMW", "MZN", "USD", "ZWG"],
    status: "ACTIVE_HIGH_CAPACITY",
    harmonicResonanceHz: 432
  },
  {
    id: "nacala-corridor",
    name: "Nacala Deepwater Rail & Port Corridor",
    code: "NAC-MOZ-06",
    oceanGateway: "Indian Ocean (Port of Nacala - Deepest Natural Port in East Africa)",
    originHub: "Chipata Intermodal Dry Port & Lusaka",
    terminalPort: "Port of Nacala (Mozambique)",
    countriesTransit: ["Zambia", "Malawi", "Mozambique"],
    totalDistanceKm: 1750,
    modes: ["HEAVY_RAIL", "PAVED_HIGHWAY", "DEEP_SEA_PORT"],
    avgTransitDays: 4.0,
    railCapacityMpa: 8.0,
    primaryCommodities: ["Coal & Mineral Concentrates", "Containerized Agro-Crops", "Bulk Fuel", "Industrial Equipment"],
    strategicImportance: "Boasts a natural deep-water draft of 18+ meters capable of accommodating Capesize dry-bulk and neo-panamax container vessels without dredging.",
    keyBorders: ["Mwami / Mchinji (ZM/MW)", "Nayuchi / Entre-Lagos (MW/MZ)"],
    currencyMatrix: ["ZMW", "MWK", "MZN", "USD"],
    status: "OPERATIONAL_STANDARD",
    harmonicResonanceHz: 432
  }
];

export const SADC_BORDER_POSTS: SadcBorderPost[] = [
  {
    id: "kazungula-bridge",
    name: "Kazungula One-Stop Border Post & Quadripoint Bridge",
    type: "QUADRIPOINT_BRIDGE",
    countryA: { name: "Zambia", iso: "ZM", flag: "🇿🇲" },
    countryB: { name: "Botswana", iso: "BW", flag: "🇧🇼" },
    thirdCountry: { name: "Namibia / Zimbabwe", iso: "NA", flag: "🇳🇦" },
    operatingHours: "06:00 - 22:00 (Heavy Freight 24/7 Priority)",
    avgClearanceHours: 3.2,
    dailyCargoTrucks: 420,
    customsSystems: "ASYCUDA World / BURS Joint OSBP Customs Interface",
    tariffRegimes: ["SADC Protocol on Trade", "AfCFTA", "SACU-SADC Joint Rules"],
    keyTradeCorridor: "Walvis Bay / North-South Corridor",
    liveStatus: "OPTIMAL_FLOW",
    coordinates: { lat: -17.7917, lng: 25.2639 }
  },
  {
    id: "chirundu-osbp",
    name: "Chirundu One-Stop Border Post",
    type: "ONE_STOP_BORDER_POST",
    countryA: { name: "Zambia", iso: "ZM", flag: "🇿🇲" },
    countryB: { name: "Zimbabwe", iso: "ZW", flag: "🇿🇼" },
    operatingHours: "24 Hours (Full Service 24/7)",
    avgClearanceHours: 4.8,
    dailyCargoTrucks: 580,
    customsSystems: "ZRA & ZIMRA Integrated OSBP Single-Window Protocol",
    tariffRegimes: ["COMESA Free Trade Area", "SADC Protocol on Trade", "AfCFTA"],
    keyTradeCorridor: "North-South Durban Corridor",
    liveStatus: "MODERATE_QUEUE",
    coordinates: { lat: -16.0394, lng: 28.8519 }
  },
  {
    id: "kasumbalesa-border",
    name: "Kasumbalesa Heavy Freight Commercial Border Post",
    type: "STANDARD_LAND_PORT",
    countryA: { name: "Zambia", iso: "ZM", flag: "🇿🇲" },
    countryB: { name: "DR Congo", iso: "CD", flag: "🇨🇩" },
    operatingHours: "06:00 - 20:00 (Extended Peak Hours 24/7)",
    avgClearanceHours: 6.5,
    dailyCargoTrucks: 850,
    customsSystems: "ZRA Customs / DGDA Congo Integrated Border Clearance",
    tariffRegimes: ["COMESA Simplified Trade Regime (STR)", "SADC", "AfCFTA"],
    keyTradeCorridor: "Lobito & Copperbelt-Katanga Mining Arterial",
    liveStatus: "HIGH_VOLUME_ALERT",
    coordinates: { lat: -12.2597, lng: 27.8014 }
  },
  {
    id: "nakonde-tunduma-osbp",
    name: "Nakonde / Tunduma One-Stop Border Post",
    type: "ONE_STOP_BORDER_POST",
    countryA: { name: "Zambia", iso: "ZM", flag: "🇿🇲" },
    countryB: { name: "Tanzania", iso: "TZ", flag: "🇹🇿" },
    operatingHours: "24 Hours (Full 24/7 OSBP Operations)",
    avgClearanceHours: 3.8,
    dailyCargoTrucks: 620,
    customsSystems: "ZRA & TRA Joint Single-Window Electronic Cargo Tracking",
    tariffRegimes: ["COMESA", "SADC", "EAC-SADC-COMESA Tripartite", "AfCFTA"],
    keyTradeCorridor: "TAZARA / Dar es Salaam North-Eastern Corridor",
    liveStatus: "OPTIMAL_FLOW",
    coordinates: { lat: -9.3361, lng: 32.7661 }
  },
  {
    id: "mwami-mchinji-osbp",
    name: "Mwami / Mchinji One-Stop Border Post",
    type: "ONE_STOP_BORDER_POST",
    countryA: { name: "Zambia", iso: "ZM", flag: "🇿🇲" },
    countryB: { name: "Malawi", iso: "MW", flag: "🇲🇼" },
    operatingHours: "06:00 - 22:00",
    avgClearanceHours: 2.1,
    dailyCargoTrucks: 210,
    customsSystems: "ZRA & MRA Synchronized OSBP Electronic Clearing",
    tariffRegimes: ["COMESA", "SADC Protocol on Trade", "AfCFTA"],
    keyTradeCorridor: "Nacala / Beira Agro Corridor",
    liveStatus: "OPTIMAL_FLOW",
    coordinates: { lat: -13.7847, lng: 32.7483 }
  },
  {
    id: "chanida-border",
    name: "Chanida Commercial Border Post",
    type: "STANDARD_LAND_PORT",
    countryA: { name: "Zambia", iso: "ZM", flag: "🇿🇲" },
    countryB: { name: "Mozambique", iso: "MZ", flag: "🇲🇿" },
    operatingHours: "06:00 - 18:00",
    avgClearanceHours: 2.8,
    dailyCargoTrucks: 160,
    customsSystems: "ZRA & Autoridade Tributária de Moçambique",
    tariffRegimes: ["SADC Protocol on Trade", "AfCFTA"],
    keyTradeCorridor: "Beira Agro & Mineral Corridor",
    liveStatus: "OPTIMAL_FLOW",
    coordinates: { lat: -14.3314, lng: 32.1811 }
  },
  {
    id: "katima-mulilo-wenela",
    name: "Katima Mulilo / Wenela Border Post",
    type: "STANDARD_LAND_PORT",
    countryA: { name: "Zambia", iso: "ZM", flag: "🇿🇲" },
    countryB: { name: "Namibia", iso: "NA", flag: "🇳🇦" },
    operatingHours: "06:00 - 22:00",
    avgClearanceHours: 2.4,
    dailyCargoTrucks: 190,
    customsSystems: "ZRA & NamRA Automated ASYCUDA Bridge",
    tariffRegimes: ["SADC Protocol on Trade", "AfCFTA", "SACU-SADC Joint"],
    keyTradeCorridor: "Walvis Bay / Trans-Caprivi Corridor",
    liveStatus: "OPTIMAL_FLOW",
    coordinates: { lat: -17.4789, lng: 24.2694 }
  },
  {
    id: "victoria-falls-border",
    name: "Victoria Falls / Livingstone Bridge Border Post",
    type: "STANDARD_LAND_PORT",
    countryA: { name: "Zambia", iso: "ZM", flag: "🇿🇲" },
    countryB: { name: "Zimbabwe", iso: "ZW", flag: "🇿🇼" },
    operatingHours: "06:00 - 22:00 (Tourism & Light Commercial)",
    avgClearanceHours: 1.5,
    dailyCargoTrucks: 85,
    customsSystems: "KAZA Univisa Electronic Processing & Joint Customs",
    tariffRegimes: ["COMESA", "SADC", "KAZA Eco-Tourism Protocol", "AfCFTA"],
    keyTradeCorridor: "Livingstone Tourism & Light Freight Corridor",
    liveStatus: "OPTIMAL_FLOW",
    coordinates: { lat: -17.9286, lng: 25.8569 }
  }
];

export const TRADE_REGIMES: TradeRegimeInfo[] = [
  {
    acronym: "AfCFTA",
    name: "African Continental Free Trade Area",
    memberCount: 54,
    zambiaStatus: "Ratified & Operationalized",
    rulesOfOrigin: "Value-Added local content threshold 35% - 40%",
    tariffReduction: "90% of tariff lines phased down to 0% duty",
    currencySettlement: "PAPSS (Pan-African Payment and Settlement System) / Local Currencies"
  },
  {
    acronym: "SADC",
    name: "Southern African Development Community Protocol on Trade",
    memberCount: 16,
    zambiaStatus: "Founding Member & Protocol Signatory",
    rulesOfOrigin: "Specific processing rule and 35% ex-factory value-add",
    tariffReduction: "Duty-free trade on over 85% of qualifying originating goods",
    currencySettlement: "SADC-RTGS (Real-Time Gross Settlement) in ZAR and Regional Currencies"
  },
  {
    acronym: "COMESA",
    name: "Common Market for Eastern and Southern Africa Free Trade Area",
    memberCount: 21,
    zambiaStatus: "Headquarters Host Nation (Lusaka)",
    rulesOfOrigin: "Simplified Trade Regime (STR) up to $2,000 consignment value",
    tariffReduction: "100% duty-free tariff preference on qualifying goods",
    currencySettlement: "COMESA REPSS (Regional Payment and Settlement System)"
  }
];
