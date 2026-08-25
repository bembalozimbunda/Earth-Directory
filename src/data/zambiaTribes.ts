export interface ZambianTribe {
  id: string;
  name: string;
  alternateNames?: string[];
  province: string;
  languageGroup: string;
  dialectOrLanguage: string;
  traditionalLeader: string;
  royalSeatOrPalace: string;
  traditionalCeremony: string;
  ceremonyMonth: string;
  historicalHeritage: string;
  primaryDistricts: string[];
  economicSpecialization: string;
  culturalEmblem: string;
}

export interface SectorEmpowermentPillar {
  id: string;
  title: string;
  category: 'Creative Arts & Media' | 'Science & Healthcare' | 'Education & Civics' | 'Infrastructure & Tech' | 'Institutions & Finance';
  description: string;
  targetBeneficiaries: string[];
  strategicInitiatives: string[];
  institutionsInvolved: string[];
  empowermentMetric: string;
}

export interface ZambianDeveloperReview {
  id: string;
  name: string;
  location: string;
  province: string;
  role: string;
  rating: number;
  reviewTitle: string;
  comment: string;
  timestamp: string;
  verifiedZambianDev: boolean;
}

export const ZAMBIAN_TRIBES_DATA: ZambianTribe[] = [
  // Western Province (Barotseland - Mongu Anchor Node)
  {
    id: 'lozi',
    name: 'Lozi (Malozi / Luyi)',
    alternateNames: ['Aluyi', 'Kololo', 'Barotse'],
    province: 'Western',
    languageGroup: 'Bantu - Sotho-Tswana / Luyi',
    dialectOrLanguage: 'Silozi',
    traditionalLeader: 'His Majesty The Litunga (King of Barotseland)',
    royalSeatOrPalace: 'Lealui (Wet Season) / Limulunga (Dry Season), Mongu',
    traditionalCeremony: 'Kuomboka Ceremony',
    ceremonyMonth: 'March / April',
    historicalHeritage: 'Ancient Kingdom of Barotseland with sophisticated transhumance water canal engineering across the Zambezi flood plains.',
    primaryDistricts: ['Mongu', 'Senanga', 'Kalabo', 'Limulunga', 'Sesheke', 'Nalolo', 'Sioma', 'Shangombo', 'Sikongo', 'Mwandi', 'Kaoma'],
    economicSpecialization: 'Riverine Navigation, Cattle Ranching, Fisheries, Rice Agriculture & Timber',
    culturalEmblem: 'Nalikwanda Royal Barge & Black-and-White Elephant Crest'
  },
  {
    id: 'mbunda-west',
    name: 'Mbunda',
    alternateNames: ['Vambunda'],
    province: 'Western',
    languageGroup: 'Bantu - Chokwe-Luchazi-Mbunda',
    dialectOrLanguage: 'Chimbunda',
    traditionalLeader: 'His Royal Highness Senior Chief Mwene Chiengele / Mwene Kandala',
    royalSeatOrPalace: 'Nan’koya / Mongu / Limulunga',
    traditionalCeremony: 'Cathangu Traditional Ceremony',
    ceremonyMonth: 'September / October',
    historicalHeritage: 'Celebrated masters of archery, iron smelting, rich woodcarving, and traditional warfare who allied with the Barotse Royal Establishment.',
    primaryDistricts: ['Mongu', 'Kaoma', 'Nkeyema', 'Kalabo', 'Shangombo', 'Sikongo', 'Luampa'],
    economicSpecialization: 'Timber Craftsmanship, Beekeeping, Agriculture, Archery & Cattle',
    culturalEmblem: 'Sachihongo Mask & Bow of Sovereign Precision'
  },
  {
    id: 'nkoya',
    name: 'Nkoya',
    alternateNames: ['Mankoya'],
    province: 'Western',
    languageGroup: 'Bantu - Central Western',
    dialectOrLanguage: 'Shinkoya',
    traditionalLeader: 'His Royal Highness Mwene Mutondo / Mwene Kahare',
    royalSeatOrPalace: 'Lukulu / Kaoma / Shikombwe Palace',
    traditionalCeremony: 'Kazanga Traditional Ceremony',
    ceremonyMonth: 'July / August',
    historicalHeritage: 'Ancient ironmongers, legendary musical master drummers, and forest ecosystem custodians in central and western Zambia.',
    primaryDistricts: ['Kaoma', 'Luampa', 'Nkeyema', 'Lukulu'],
    economicSpecialization: 'Hardwood Timber, Traditional Percussion Arts, Sorghum Farming, Game Ecology',
    culturalEmblem: 'Kazanga Royal Silimba Xylophone'
  },
  {
    id: 'luvale-west',
    name: 'Luvale',
    alternateNames: ['Valuvale'],
    province: 'Western',
    languageGroup: 'Bantu - Luvale-Chokwe',
    dialectOrLanguage: 'Chiluvale',
    traditionalLeader: 'Senior Chief Ndungu / Chief Chinyama Litapi',
    royalSeatOrPalace: 'Zambezi / Mitete Boundary',
    traditionalCeremony: 'Likumbi Lya Mize Ceremony',
    ceremonyMonth: 'August',
    historicalHeritage: 'Renowned for the UNESCO-recognized Makishi masquerade, intricate basket weaving, and river basin commerce.',
    primaryDistricts: ['Mitete', 'Lukulu', 'Kalabo'],
    economicSpecialization: 'Fish Trade, Basketry, Cashew Farming, Traditional Fine Art',
    culturalEmblem: 'Makishi Kayipu Masquerade Crest'
  },
  {
    id: 'kwangwa',
    name: 'Kwangwa',
    alternateNames: ['Makwangwa'],
    province: 'Western',
    languageGroup: 'Bantu - Luyana Subgroup',
    dialectOrLanguage: 'Sikwangwa',
    traditionalLeader: 'Chief Inyambo Yeta',
    royalSeatOrPalace: 'Mongu & Luampa Valley',
    traditionalCeremony: 'Kwangwa Cultural Exhibition',
    ceremonyMonth: 'August',
    historicalHeritage: 'Skilled clay potters and wetland agricultural innovators along the Zambezi channels.',
    primaryDistricts: ['Mongu', 'Luampa', 'Limulunga'],
    economicSpecialization: 'Ceramics, Wetland Maize Cultivation, River Trade',
    culturalEmblem: 'Clay Vessel of Life'
  },
  {
    id: 'kwamashi',
    name: 'Kwamashi',
    alternateNames: ['Mashi'],
    province: 'Western',
    languageGroup: 'Bantu - Luyana',
    dialectOrLanguage: 'Simashi',
    traditionalLeader: 'Chief Mashi Council',
    royalSeatOrPalace: 'Shangombo Border Lands',
    traditionalCeremony: 'Mashi River Festival',
    ceremonyMonth: 'October',
    historicalHeritage: 'Border wetland navigation experts along the Kwando and Mashi river corridors.',
    primaryDistricts: ['Shangombo', 'Sioma'],
    economicSpecialization: 'Cattle Husbandry, Fisheries, Cross-Border Trade',
    culturalEmblem: 'Kwando River Canoe'
  },
  {
    id: 'subiya',
    name: 'Subiya',
    alternateNames: ['Masubiya'],
    province: 'Western',
    languageGroup: 'Bantu - Botatwe',
    dialectOrLanguage: 'Chisubiya',
    traditionalLeader: 'Chief Liswani',
    royalSeatOrPalace: 'Mwandi / Sesheke Royal Seat',
    traditionalCeremony: 'Cilbu Traditional Ceremony',
    ceremonyMonth: 'September',
    historicalHeritage: 'Ancient Zambezi flood plain fishers and boatbuilders in the southern tip of Western Province.',
    primaryDistricts: ['Mwandi', 'Sesheke'],
    economicSpecialization: 'Zambezi River Transport, Fish Trade, Livestock',
    culturalEmblem: 'Fish Eagle over Zambezi'
  },
  {
    id: 'totela',
    name: 'Totela',
    alternateNames: ['Matotela'],
    province: 'Western',
    languageGroup: 'Bantu - Botatwe Group',
    dialectOrLanguage: 'Chitotela',
    traditionalLeader: 'Chief Nyambo',
    royalSeatOrPalace: 'Sesheke / Sioma',
    traditionalCeremony: 'Totela Heritage Gathering',
    ceremonyMonth: 'November',
    historicalHeritage: 'Historic master blacksmiths who forged weapons, agricultural hoes, and royal jewelry for the Barotse Kingdom.',
    primaryDistricts: ['Sesheke', 'Sioma', 'Mulobezi'],
    economicSpecialization: 'Blacksmithing, Agriculture, Timber Logging',
    culturalEmblem: 'Forged Iron Hoe and Spear'
  },
  {
    id: 'simaa',
    name: 'Simaa',
    alternateNames: ['Masimaa'],
    province: 'Western',
    languageGroup: 'Bantu - Luyana',
    dialectOrLanguage: 'Sisimaa',
    traditionalLeader: 'Chief Simaa Council',
    royalSeatOrPalace: 'Kalabo Plain',
    traditionalCeremony: 'Simaa Cultural Harvest',
    ceremonyMonth: 'July',
    historicalHeritage: 'Highland plain cattle herders and grain cultivators west of the Zambezi.',
    primaryDistricts: ['Kalabo', 'Sikongo'],
    economicSpecialization: 'Livestock Ranching, Millet & Sorghum Farming',
    culturalEmblem: 'Horn of the Royal Bull'
  },
  {
    id: 'nyengo',
    name: 'Nyengo',
    alternateNames: ['Manyengo'],
    province: 'Western',
    languageGroup: 'Bantu - Luyana',
    dialectOrLanguage: 'Sinyengo',
    traditionalLeader: 'Chief Nyengo Council',
    royalSeatOrPalace: 'Kalabo / Liuwa',
    traditionalCeremony: 'Nyengo Plains Gathering',
    ceremonyMonth: 'September',
    historicalHeritage: 'Custodians of the Liuwa Plain wild game ecosystem and seasonal wetland agriculture.',
    primaryDistricts: ['Kalabo', 'Liuwa'],
    economicSpecialization: 'Wildlife Conservation, Sustainable Grazing, Fish Smoked Arts',
    culturalEmblem: 'Wildebeest of the Liuwa Plains'
  },

  // Lusaka Province (National Administrative & Economic Nexus)
  {
    id: 'soli',
    name: 'Soli',
    alternateNames: ['Basoli'],
    province: 'Lusaka',
    languageGroup: 'Bantu - Lenje-Soli',
    dialectOrLanguage: 'Chisoli',
    traditionalLeader: 'Her Royal Highness Chieftainess Nkomeshya Mukamambo II / Senior Chief Bunda Bunda / Chief Mpanshya',
    royalSeatOrPalace: 'Chongwe Royal Capital / Rufunsa Palace',
    traditionalCeremony: 'Chakwela Makumbi Traditional Ceremony',
    ceremonyMonth: 'October',
    historicalHeritage: 'Indigenous keepers of the Lusaka plateau with profound spiritual connections to rainfall blessing ceremonies and agricultural stewardship.',
    primaryDistricts: ['Lusaka', 'Chongwe', 'Rufunsa', 'Kafue'],
    economicSpecialization: 'Urban Commerce, Real Estate, Horticulture, Commercial Poultry & Tourism',
    culturalEmblem: 'Rain Cloud of Blessing (Makumbi)'
  },
  {
    id: 'lenje-lusaka',
    name: 'Lenje',
    alternateNames: ['Balenje', 'Bene Mukuni'],
    province: 'Lusaka',
    languageGroup: 'Bantu - Botatwe Group',
    dialectOrLanguage: 'Chilenje',
    traditionalLeader: 'His Royal Highness Senior Chief Mukuni Ng’ombe / Chief Chamuka / Chief Liteta',
    royalSeatOrPalace: 'Chibombo / Lusaka North Basin',
    traditionalCeremony: 'Kulamba Kubwalo Ceremony',
    ceremonyMonth: 'October',
    historicalHeritage: 'Historic guardians of central agricultural routes linking the southern valley to the northern copper corridor.',
    primaryDistricts: ['Lusaka', 'Chilanga', 'Chibombo Corridor'],
    economicSpecialization: 'Commercial Maize Farming, Industrial Milling, Transport Logistics',
    culturalEmblem: 'Mukuni Ngomb’e Shield'
  },
  {
    id: 'gova',
    name: 'Gova',
    alternateNames: ['Bagova'],
    province: 'Lusaka',
    languageGroup: 'Bantu - Shona-Sena Subgroup',
    dialectOrLanguage: 'Chigova',
    traditionalLeader: 'Chief Chikwaka / Chief Mburuma',
    royalSeatOrPalace: 'Chirundu / Luangwa / Lower Zambezi',
    traditionalCeremony: 'Gova River Basin Ceremony',
    ceremonyMonth: 'November',
    historicalHeritage: 'Navigators and farmers of the Lower Zambezi and Kafue River confluence.',
    primaryDistricts: ['Luangwa', 'Kafue', 'Chirundu'],
    economicSpecialization: 'Commercial Fisheries, Eco-Tourism, River Logistics, Baobab Harvesting',
    culturalEmblem: 'Lower Zambezi Tigerfish'
  },
  {
    id: 'chikunda',
    name: 'Chikunda',
    alternateNames: ['Achikunda'],
    province: 'Lusaka',
    languageGroup: 'Bantu - Sena Subgroup',
    dialectOrLanguage: 'Chichikunda',
    traditionalLeader: 'Chief Mburuma',
    royalSeatOrPalace: 'Luangwa Feira District',
    traditionalCeremony: 'Dundumwezi Traditional Dance',
    ceremonyMonth: 'September',
    historicalHeritage: 'Pioneering metalworkers, ivory sculptors, and trading confederates at the confluence of Zambia, Zimbabwe, and Mozambique.',
    primaryDistricts: ['Luangwa'],
    economicSpecialization: 'International River Commerce, Cross-Border Logistics, Brass Work',
    culturalEmblem: 'Tri-River Boundary Monument'
  },

  // Southern Province (Tonga Plateau & Hydroelectric Grid)
  {
    id: 'tonga',
    name: 'Tonga',
    alternateNames: ['Batonga', 'Plateau Tonga', 'Gwembe Tonga'],
    province: 'Southern',
    languageGroup: 'Bantu - Botatwe (Tonga)',
    dialectOrLanguage: 'Chitonga',
    traditionalLeader: 'His Royal Highness Paramount Chief Monze / Chief Mukuni / Chief Sinazongwe / Chief Mpepo',
    royalSeatOrPalace: 'Monze Royal Shrine / Mukuni Village (Livingstone)',
    traditionalCeremony: 'Lwiindi Gonde / Toka-Leya Bene Mukuni Ceremony',
    ceremonyMonth: 'July / September',
    historicalHeritage: 'Pioneers of cattle breeding, extensive grain silos, pastoralism, and spiritual guardians of Victoria Falls (Mosi-oa-Tunya).',
    primaryDistricts: ['Monze', 'Choma', 'Mazabuka', 'Livingstone', 'Kazungula', 'Kalomo', 'Namwala', 'Siavonga', 'Sinazongwe', 'Gwembe', 'Pemba', 'Zimba'],
    economicSpecialization: 'Sugar Cane Refining, Commercial Maize, Cattle Breeding, Hydroelectric Power, Global Tourism',
    culturalEmblem: 'Spear of Monze & Victoria Falls Rainbow'
  },
  {
    id: 'ila',
    name: 'Ila',
    alternateNames: ['Baila'],
    province: 'Southern',
    languageGroup: 'Bantu - Botatwe Group',
    dialectOrLanguage: 'Chiila',
    traditionalLeader: 'Chief Nalubamba / Chief Muchila / Chief Shezongo',
    royalSeatOrPalace: 'Namwala / Kafue Flats',
    traditionalCeremony: 'Shimunenga Traditional Ceremony',
    ceremonyMonth: 'September / October',
    historicalHeritage: 'Fierce historical defenders of vast cattle herds on the Kafue Flats wetlands, known for iconic Isusu headdresses.',
    primaryDistricts: ['Namwala', 'Itezhi-Tezhi'],
    economicSpecialization: 'Large-scale Cattle Ranching, Dairy Processing, Fresh Fish Harvesting',
    culturalEmblem: 'Shimunenga Cattle Crossing & Isusu Crest'
  },
  {
    id: 'toka-leya',
    name: 'Toka-Leya',
    alternateNames: ['Batoka', 'Baleya'],
    province: 'Southern',
    languageGroup: 'Bantu - Botatwe',
    dialectOrLanguage: 'Chitoka-Leya',
    traditionalLeader: 'Senior Chief Mukuni',
    royalSeatOrPalace: 'Mukuni Village, Livingstone',
    traditionalCeremony: 'Lwiindi Mukuni Ceremony',
    ceremonyMonth: 'July',
    historicalHeritage: 'Custodians of the sacred gorges, mists, and islands of Victoria Falls on the Zambezi River.',
    primaryDistricts: ['Livingstone', 'Kazungula'],
    economicSpecialization: 'Heritage Hospitality, International Tourism, Curio Carvings, Transboundary Trade',
    culturalEmblem: 'Mosi-oa-Tunya Smoke That Thunders'
  },

  // Eastern Province (Chipata Crossroads & Agricultural Heartland)
  {
    id: 'chewa',
    name: 'Chewa',
    alternateNames: ['Achewa'],
    province: 'Eastern',
    languageGroup: 'Bantu - Nyanja/Chewa',
    dialectOrLanguage: 'Chichewa / Chinyanja',
    traditionalLeader: 'His Royal Highness Paramount Chief Kalonga Gawa Undi',
    royalSeatOrPalace: 'Mkaika Royal Headquarters, Katete',
    traditionalCeremony: 'Kulamba Traditional Ceremony (UNESCO Heritage)',
    ceremonyMonth: 'August',
    historicalHeritage: 'Ancient Maravi Empire descendants custodians of the sacred Gule Wamkulu spiritual masquerade and communal agrarian wisdom.',
    primaryDistricts: ['Katete', 'Chipata', 'Chadiza', 'Petauke', 'Sinda', 'Vubwi', 'Kasenengwa'],
    economicSpecialization: 'Groundnuts, Soya Beans, Cotton, Tobacco, Gule Wamkulu Fine Arts',
    culturalEmblem: 'Gule Wamkulu Nyau Mask & Golden Maize Sheaf'
  },
  {
    id: 'ngoni',
    name: 'Ngoni',
    alternateNames: ['Angoni'],
    province: 'Eastern',
    languageGroup: 'Bantu - Nguni Subgroup (assimilated with Nyanja)',
    dialectOrLanguage: 'Chingoni / Chinyanja',
    traditionalLeader: 'His Royal Highness Paramount Chief Mpezeni IV',
    royalSeatOrPalace: 'Ephendukeni Royal Palace / Laweni, Chipata',
    traditionalCeremony: 'Nc’wala Traditional First Fruits Ceremony',
    ceremonyMonth: 'February',
    historicalHeritage: 'Direct descendants of Zwangendaba royal warrior migration across the Zambezi in 1835, renowned for military discipline and royal cattle dances.',
    primaryDistricts: ['Chipata', 'Kasenengwa', 'Chipangali', 'Mambwe'],
    economicSpecialization: 'Cattle Husbandry, Sunflower Oil Processing, Cotton Ginneries, Cultural Tourism',
    culturalEmblem: 'Shield of Cowhide (Isihlangu) & Royal Leopard Headdress'
  },
  {
    id: 'tumbuka',
    name: 'Tumbuka',
    alternateNames: ['Batumbuka'],
    province: 'Eastern',
    languageGroup: 'Bantu - Tumbuka',
    dialectOrLanguage: 'Chitumbuka',
    traditionalLeader: 'Senior Chief Magodi / Chief Phikamalaza',
    royalSeatOrPalace: 'Lundazi / Chasefu / Lumezi',
    traditionalCeremony: 'Zengani Traditional Ceremony',
    ceremonyMonth: 'October',
    historicalHeritage: 'Highland pastoralists and ironworkers famed for Vimbuza therapeutic dance rituals and extensive grain reserves.',
    primaryDistricts: ['Lundazi', 'Chasefu', 'Lumezi'],
    economicSpecialization: 'Gemstone Mining (Aquamarine, Tourmaline), Rice Cultivation, Tobacco',
    culturalEmblem: 'Vimbuza Healing Drum & Lundazi Castle Landmark'
  },
  {
    id: 'nsenga',
    name: 'Nsenga',
    alternateNames: ['Bansenga'],
    province: 'Eastern',
    languageGroup: 'Bantu - Nsenga-Sena',
    dialectOrLanguage: 'Chinsenga',
    traditionalLeader: 'Senior Chief Kalindawalo / Chief Sandwe / Chief Nyampande',
    royalSeatOrPalace: 'Petauke / Lusangazi',
    traditionalCeremony: 'Tuwimba Traditional Ceremony',
    ceremonyMonth: 'October',
    historicalHeritage: 'Renowned agriculturalists, hunters, and weavers of the fertile Luangwa valley slopes.',
    primaryDistricts: ['Petauke', 'Lusangazi', 'Nyimba'],
    economicSpecialization: 'Maize Farming, Cotton, Groundnut Processing, Hardwood Crafts',
    culturalEmblem: 'Tuwimba Hunting Bow & Drum'
  },
  {
    id: 'kunda-east',
    name: 'Kunda',
    alternateNames: ['Bakunda'],
    province: 'Eastern',
    languageGroup: 'Bantu - Central',
    dialectOrLanguage: 'Chikunda / Chikunda of Luangwa',
    traditionalLeader: 'Senior Chief Kakumbi / Chief Malama / Chief Jumbe',
    royalSeatOrPalace: 'Mambwe / South Luangwa Valley',
    traditionalCeremony: 'Malaila Traditional Ceremony',
    ceremonyMonth: 'September',
    historicalHeritage: 'Historic custodians of the wildlife-dense South Luangwa River ecosystems.',
    primaryDistricts: ['Mambwe', 'Chipata'],
    economicSpecialization: 'Eco-Tourism Lodges, Safari Guiding, Sustainable Apiaries, Craft Carvings',
    culturalEmblem: 'Luangwa Leopard and Elephant'
  },

  // Northern Province (Bemba Heartland & Lake Tanganyika Port)
  {
    id: 'bemba',
    name: 'Bemba',
    alternateNames: ['AbaBemba'],
    province: 'Northern',
    languageGroup: 'Bantu - Central (Bemba)',
    dialectOrLanguage: 'Ichibemba',
    traditionalLeader: 'His Royal Highness Paramount Chief Chitimukulu Kanyanta-manga II / Senior Chief Mwamba / Senior Chief Nkula',
    royalSeatOrPalace: 'Paramount Palace, Kasama / Mungwi District',
    traditionalCeremony: 'Ukusefya pa Ng’wena Traditional Ceremony',
    ceremonyMonth: 'August',
    historicalHeritage: 'Descendants of the legendary Kola migration led by Chiti and Nkole, founders of the centralized Bemba Kingdom with sacred crocodile totem.',
    primaryDistricts: ['Kasama', 'Mungwi', 'Luwingu', 'Mbala', 'Mporokoso', 'Kaputa', 'Nsama', 'Lupososhi', 'Chilubi'],
    economicSpecialization: 'Coffee Plantations (Northern Coffee), Cassava Production, Fisheries, Hydroelectric Power, Regional Commerce',
    culturalEmblem: 'The Crocodile of Kola (Ng’wena) & Royal Spear'
  },
  {
    id: 'mambwe',
    name: 'Mambwe',
    alternateNames: ['Amambwe'],
    province: 'Northern',
    languageGroup: 'Bantu - Fipa-Mambwe',
    dialectOrLanguage: 'Chimambwe',
    traditionalLeader: 'Chief Nsokolo / Chief Mwamba',
    royalSeatOrPalace: 'Mbala / Lake Tanganyika Basin',
    traditionalCeremony: 'Mutomolo Traditional Ceremony',
    ceremonyMonth: 'July',
    historicalHeritage: 'Pioneering agriculturalists who developed the sustainable Fundikila composting method and trade links across Lake Tanganyika.',
    primaryDistricts: ['Mbala', 'Mpulungu'],
    economicSpecialization: 'Lake Port Logistics (Port of Mpulungu), Kapenta & Tanganyika Fish, Bean Agriculture',
    culturalEmblem: 'Lake Tanganyika Cargo Dhow & Mutomolo Harvest Sheaf'
  },
  {
    id: 'lungu',
    name: 'Lungu',
    alternateNames: ['Alungu'],
    province: 'Northern',
    languageGroup: 'Bantu - Mambwe-Lungu',
    dialectOrLanguage: 'Chilungu',
    traditionalLeader: 'Chief Chitimbwa / Chief Tafuna',
    royalSeatOrPalace: 'Mpulungu / Nsama',
    traditionalCeremony: 'Kupula Kwa Bwali Traditional Ceremony',
    ceremonyMonth: 'September',
    historicalHeritage: 'Harbor masters, deep-water fishermen, and keepers of the Lake Tanganyika cliff sanctuaries.',
    primaryDistricts: ['Mpulungu', 'Nsama'],
    economicSpecialization: 'Commercial Shipping, Lake Fish Export, Water Transport, Tourism',
    culturalEmblem: 'Lake Tanganyika Kapenta Net'
  },
  {
    id: 'tabwa',
    name: 'Tabwa',
    alternateNames: ['Batabwa'],
    province: 'Northern',
    languageGroup: 'Bantu - Bemba Subgroup',
    dialectOrLanguage: 'Chitabwa',
    traditionalLeader: 'Chief Nsama / Chief Kaputa',
    royalSeatOrPalace: 'Kaputa / Nsama / Lake Mweru Wantipa',
    traditionalCeremony: 'Tabwa Salt & Fish Festival',
    ceremonyMonth: 'October',
    historicalHeritage: 'Historical salt miners, ivory traders, and masters of geometry in wood carvings and scarification art.',
    primaryDistricts: ['Kaputa', 'Nsama'],
    economicSpecialization: 'Natural Salt Extraction, Wetland Fisheries, Rare Hardwood Art',
    culturalEmblem: 'Tabwa Geometric Triangle & Salt Crystal'
  },

  // Luapula Province (Mweru-Luapula Valley & Mining Arteries)
  {
    id: 'lunda-luapula',
    name: 'Lunda (Eastern Lunda / Luapula)',
    alternateNames: ['AbaLunda', 'Lunda of Kazembe'],
    province: 'Luapula',
    languageGroup: 'Bantu - Central (Ichibemba / Cilunda)',
    dialectOrLanguage: 'Chilunda / Ichibemba',
    traditionalLeader: 'His Royal Highness Mwata Kazembe XVIII',
    royalSeatOrPalace: 'Mwansabombwe Royal Capital Palace',
    traditionalCeremony: 'Mutomboko Traditional Ceremony',
    ceremonyMonth: 'July',
    historicalHeritage: 'Descendants of the mighty Mwata Kazembe Empire, conquering warlords of the Luapula Valley famous for the royal Mutomboko victory sword dance.',
    primaryDistricts: ['Mwansabombwe', 'Kawambwa', 'Mwense', 'Mansa', 'Nchelenge', 'Samfya', 'Chienge', 'Milenge', 'Chembe', 'Lunga', 'Chipili'],
    economicSpecialization: 'Palm Oil Refineries, Manganese Mining, Commercial Fish Trade, Rubber Plantations',
    culturalEmblem: 'Royal Mutomboko Sword (Mukwale) & Ng’ona Royal Skirt'
  },
  {
    id: 'ushi',
    name: 'Ushi',
    alternateNames: ['AbaUshi'],
    province: 'Luapula',
    languageGroup: 'Bantu - Central',
    dialectOrLanguage: 'Chiushi / Ichibemba',
    traditionalLeader: 'Chief Chimese / Chief Chisunka / Chief Kalaba',
    royalSeatOrPalace: 'Mansa District',
    traditionalCeremony: 'Kwesha Traditional Ceremony',
    ceremonyMonth: 'October',
    historicalHeritage: 'Earliest settlers of the Mansa highlands, iron smelters, and agricultural pioneers.',
    primaryDistricts: ['Mansa', 'Chembe', 'Milenge'],
    economicSpecialization: 'Manganese Processing, Commercial Cassava Milling, Agro-Forestry',
    culturalEmblem: 'Smelted Iron Hammer'
  },
  {
    id: 'chishinga',
    name: 'Chishinga',
    alternateNames: ['AbaChishinga'],
    province: 'Luapula',
    languageGroup: 'Bantu - Central',
    dialectOrLanguage: 'Chichishinga',
    traditionalLeader: 'Senior Chief Mushota / Chief Chama',
    royalSeatOrPalace: 'Kawambwa / Chipili',
    traditionalCeremony: 'Chishinga Cultural Jubilee',
    ceremonyMonth: 'September',
    historicalHeritage: 'Lush tea and forest plantation stewards on the Kawambwa plateau.',
    primaryDistricts: ['Kawambwa', 'Chipili'],
    economicSpecialization: 'Kawambwa Tea Production, Forestry, Timber, Horticultural Farming',
    culturalEmblem: 'Tea Leaf Crest and Waterfall'
  },
  {
    id: 'ngumbo',
    name: 'Ng’umbo',
    alternateNames: ['AbaNg’umbo'],
    province: 'Luapula',
    languageGroup: 'Bantu - Central',
    dialectOrLanguage: 'Ching’umbo',
    traditionalLeader: 'Chief Mwewa / Chief Mansakombe',
    royalSeatOrPalace: 'Samfya / Lake Bangweulu Shores',
    traditionalCeremony: 'Kwanga Traditional Ceremony',
    ceremonyMonth: 'October',
    historicalHeritage: 'Masters of Lake Bangweulu white sand beaches and inland delta watercraft.',
    primaryDistricts: ['Samfya', 'Chifunabuli'],
    economicSpecialization: 'Lake Tourism, White Sand Extraction, Inland Fisheries, Cassava',
    culturalEmblem: 'Bangweulu Lake Sun'
  },
  {
    id: 'shila',
    name: 'Shila',
    alternateNames: ['AbaShila'],
    province: 'Luapula',
    languageGroup: 'Bantu - Central',
    dialectOrLanguage: 'Chishila',
    traditionalLeader: 'Chief Mununga / Chief Nshimba',
    royalSeatOrPalace: 'Chienge / Lake Mweru Basin',
    traditionalCeremony: 'Mambilima Traditional Gathering',
    ceremonyMonth: 'November',
    historicalHeritage: 'Early dwellers of the Lake Mweru shoreline, renowned for prehistoric fishing techniques.',
    primaryDistricts: ['Chienge', 'Nchelenge'],
    economicSpecialization: 'Mweru Bream and Kapenta Harvesting, Saltpan Trading',
    culturalEmblem: 'Mweru Sacred Fishing Spear'
  },

  // Copperbelt Province (Mineral Mining Powerhouse & Tech Metropolis)
  {
    id: 'lamba',
    name: 'Lamba',
    alternateNames: ['AbaLamba'],
    province: 'Copperbelt',
    languageGroup: 'Bantu - Central (Lamba-Lima)',
    dialectOrLanguage: 'Ichilamba',
    traditionalLeader: 'His Royal Highness Senior Chief Chiwala / Chief Mushili / Chief Nkana / Chief Lesa',
    royalSeatOrPalace: 'Chiwala Palace, Masaiti / Lufwanyama Royal Grounds',
    traditionalCeremony: 'Chibalengwe Traditional Ceremony / Ukulombya',
    ceremonyMonth: 'October / November',
    historicalHeritage: 'Original custodians of the world-class copper and emerald ore fields stretching across Ndola, Kitwe, Luanshya, and Chingola.',
    primaryDistricts: ['Masaiti', 'Mpongwe', 'Lufwanyama', 'Ndola', 'Kitwe', 'Luanshya', 'Chingola', 'Mufulira', 'Kalulushi', 'Chililabombwe'],
    economicSpecialization: 'Copper Refining, Emerald Mining (Kagem), Heavy Engineering, Metallurgy, Commercial Grain',
    culturalEmblem: 'Emerald Ingot & Copper Cathode with Royal Fly-Whisk'
  },
  {
    id: 'lima',
    name: 'Lima',
    alternateNames: ['AbaLima'],
    province: 'Copperbelt',
    languageGroup: 'Bantu - Central',
    dialectOrLanguage: 'Ichilima',
    traditionalLeader: 'Chief Machiya / Chief Kalunkumya',
    royalSeatOrPalace: 'Mpongwe / Masaiti Border',
    traditionalCeremony: 'Lima Agrarian Festival',
    ceremonyMonth: 'September',
    historicalHeritage: 'Agricultural heartland innovators supplying the mining towns with high-yield grain and livestock.',
    primaryDistricts: ['Mpongwe', 'Masaiti'],
    economicSpecialization: 'Commercial Soya Production, Wheat Farming, Dairy Processing',
    culturalEmblem: 'Golden Wheat Sheaf & Modern Combine'
  },

  // North-Western Province (The New Copperbelt & Strategic Minerals)
  {
    id: 'kaonde',
    name: 'Kaonde',
    alternateNames: ['Bakaoande'],
    province: 'North-Western',
    languageGroup: 'Bantu - Central Kaonde',
    dialectOrLanguage: 'Kikaonde',
    traditionalLeader: 'His Royal Highness Paramount Chief Kasempa / Senior Chief Mujimanzovu / Chief Mumena',
    royalSeatOrPalace: 'Kasempa Royal Palace / Solwezi Royal Seat',
    traditionalCeremony: 'Ntongo Traditional Ceremony / Juba Ja Nsomo / Kufukwila',
    ceremonyMonth: 'September / October',
    historicalHeritage: 'Pioneers of ancient copper smelting at Kansanshi and Kalengwa mines, known for elaborate hunting guilds and salt pans.',
    primaryDistricts: ['Kasempa', 'Solwezi', 'Kalumbila', 'Mufumbwe', 'Mushindamo'],
    economicSpecialization: 'Copper & Nickel Super-Pits (Sentinel/Kansanshi), Commercial Gold, Beekeeping/Honey',
    culturalEmblem: 'Ancient Copper Cross (Kansanshi) & Royal Musamba Tree'
  },
  {
    id: 'lunda-northwest',
    name: 'Lunda (Western Lunda / Mwant-Yav Ancestry)',
    alternateNames: ['Lunda-Ndembu', 'AbaLunda of Ishindi'],
    province: 'North-Western',
    languageGroup: 'Bantu - Lunda',
    dialectOrLanguage: 'Chilunda',
    traditionalLeader: 'His Royal Highness Senior Chief Ishindi / Senior Chief Kanongesha',
    royalSeatOrPalace: 'Mukandankunda Royal Palace, Zambezi / Mwinilunga',
    traditionalCeremony: 'Lunda Lubanza Traditional Ceremony / Chisemwa Chalunda',
    ceremonyMonth: 'August / September',
    historicalHeritage: 'Direct heirs of the Mwant Yav Lunda Empire, custodians of the source of the mighty Zambezi River at Kalene Hills.',
    primaryDistricts: ['Zambezi', 'Mwinilunga', 'Ikelenge'],
    economicSpecialization: 'Pineapple Agro-Processing (Ikelenge), Zambezi Source Tourism, Honey Export, Mineral Exploration',
    culturalEmblem: 'Source of the Zambezi Obelisk & Lunda Sword'
  },
  {
    id: 'luvale-northwest',
    name: 'Luvale (North-Western)',
    alternateNames: ['Valuvale'],
    province: 'North-Western',
    languageGroup: 'Bantu - Luvale-Chokwe',
    dialectOrLanguage: 'Chiluvale',
    traditionalLeader: 'His Royal Highness Senior Chief Ndungu',
    royalSeatOrPalace: 'Mize Royal Capital, Zambezi District (West Bank)',
    traditionalCeremony: 'Likumbi Lya Mize (UNESCO World Masterpiece of Oral and Intangible Heritage)',
    ceremonyMonth: 'August',
    historicalHeritage: 'Guardians of the Mize Palace and the globally celebrated Makishi cultural masked performances.',
    primaryDistricts: ['Zambezi', 'Chavuma', 'Kabompo'],
    economicSpecialization: 'Cross-Border River Commerce, Cashew Nuts, Fine Carvings, Honey Harvesting',
    culturalEmblem: 'Likishi Kayipu Mask & Royal Scepter'
  },
  {
    id: 'chokwe',
    name: 'Chokwe',
    alternateNames: ['Tchokwe', 'Bachokwe'],
    province: 'North-Western',
    languageGroup: 'Bantu - Chokwe',
    dialectOrLanguage: 'Chichokwe',
    traditionalLeader: 'Chief Chinyama / Chief Lingoji',
    royalSeatOrPalace: 'Kabompo / Zambezi / Manyinga',
    traditionalCeremony: 'Chivweka Traditional Ceremony',
    ceremonyMonth: 'October',
    historicalHeritage: 'World-renowned sculptors, diamond traders, and master blacksmiths celebrated for the Thinker (Samanyonga) sculpture.',
    primaryDistricts: ['Kabompo', 'Manyinga', 'Zambezi'],
    economicSpecialization: 'Fine Hardwood Sculpture, Honey Processing, Gemstone Prospecting',
    culturalEmblem: 'Samanyonga (The Thinker) Sculpture'
  },
  {
    id: 'luchazi',
    name: 'Luchazi',
    alternateNames: ['Valuchazi'],
    province: 'North-Western',
    languageGroup: 'Bantu - Chokwe-Luchazi',
    dialectOrLanguage: 'Chiluchazi',
    traditionalLeader: 'Chief Kalunga',
    royalSeatOrPalace: 'Kabompo / Manyinga',
    traditionalCeremony: 'Luchazi Tusole Ceremony',
    ceremonyMonth: 'September',
    historicalHeritage: 'Inventors of the ancient Sona ideographic sand-drawing writing and math system, recognized globally in ethnomathematics.',
    primaryDistricts: ['Kabompo', 'Manyinga'],
    economicSpecialization: 'Organic Honey Harvesting, Sand Mathematical Art, Agriculture',
    culturalEmblem: 'Sona Sand Ideogram Network'
  },

  // Central Province (Heartland Crossroads & Breadbasket)
  {
    id: 'lala',
    name: 'Lala',
    alternateNames: ['Balala'],
    province: 'Central',
    languageGroup: 'Bantu - Central (Bisa-Lala)',
    dialectOrLanguage: 'Ichilala',
    traditionalLeader: 'Senior Chief Muchinda / Chief Serenje / Chief Mailo',
    royalSeatOrPalace: 'Serenje / Mkushi / Chitambo',
    traditionalCeremony: 'Ichibwela Mushi Traditional Ceremony',
    ceremonyMonth: 'September',
    historicalHeritage: 'Stewards of the David Livingstone memorial at Chitambo and rich agrarian farming valleys.',
    primaryDistricts: ['Serenje', 'Chitambo', 'Mkushi', 'Luano', 'Kapiri Mposhi', 'Ngabwe'],
    economicSpecialization: 'Commercial Block Farming (Mkushi Farm Block), Wheat, Soybeans, Seed Maize',
    culturalEmblem: 'Ichibwela Mushi Granary'
  },
  {
    id: 'swaka',
    name: 'Swaka',
    alternateNames: ['Baswaka'],
    province: 'Central',
    languageGroup: 'Bantu - Central (Lamba-Swaka)',
    dialectOrLanguage: 'Ichiswaka',
    traditionalLeader: 'Senior Chief Nkole / Chief Kanyensha',
    royalSeatOrPalace: 'Mkushi / Kapiri Mposhi',
    traditionalCeremony: 'Swaka Traditional Cultural Gathering',
    ceremonyMonth: 'October',
    historicalHeritage: 'Historic iron-ore smelters and mountain fortress guardians.',
    primaryDistricts: ['Mkushi', 'Kapiri Mposhi'],
    economicSpecialization: 'Heavy Grain Agriculture, Mining Supplies, Rail Corridor Logistics',
    culturalEmblem: 'Mountain Anvil & Grain Ear'
  },

  // Muchinga Province (The Escarpment & Historical Bastion)
  {
    id: 'namwanga',
    name: 'Namwanga',
    alternateNames: ['Winamwanga'],
    province: 'Muchinga',
    languageGroup: 'Bantu - Mambwe-Namwanga',
    dialectOrLanguage: 'Chinamwanga',
    traditionalLeader: 'Her Royal Highness Chieftainess Waitwika / Chief Mukoma',
    royalSeatOrPalace: 'Nakonde / Isoka / Chinsali',
    traditionalCeremony: 'Chinamwanga Traditional Harvest',
    ceremonyMonth: 'September',
    historicalHeritage: 'Vital cross-border trading kings and agricultural masters along the Great North Road TAZARA artery.',
    primaryDistricts: ['Nakonde', 'Isoka', 'Chinsali'],
    economicSpecialization: 'International Dry Port Logistics (Nakonde OSBP), Coffee, Beans, Cross-Border Forex',
    culturalEmblem: 'TAZARA Rail & Great North Beacon'
  },
  {
    id: 'bisa',
    name: 'Bisa',
    alternateNames: ['Ababisa'],
    province: 'Muchinga',
    languageGroup: 'Bantu - Central',
    dialectOrLanguage: 'Ichibisa',
    traditionalLeader: 'Senior Chief Kopa / Chief Nabwalya / Chief Mpumba',
    royalSeatOrPalace: 'Mpika / Kopa Palace / Luangwa Valley',
    traditionalCeremony: 'Chinamanongo Traditional Ceremony',
    ceremonyMonth: 'September',
    historicalHeritage: 'Renowned long-distance traders who linked the central African interior with the Indian Ocean coast.',
    primaryDistricts: ['Mpika', 'Lavushimanda', 'Kanchibiya'],
    economicSpecialization: 'Railway Logistics (TAZARA Headquarters), Eco-Tourism in North Luangwa, Agriculture',
    culturalEmblem: 'Mpika Steam Locomotive & Elephant'
  }
];

export const EMPOWERMENT_PILLARS: SectorEmpowermentPillar[] = [
  {
    id: 'creative-arts-media',
    title: 'Youth Arts, Music Recording Studios & Media Animation Studios',
    category: 'Creative Arts & Media',
    description: 'Empowering young creators across Lusaka, Copperbelt, Mongu, and all districts with modern digital audio workstations, Dolby Atmos sound suites, cartoon and anime production pipelines, comic publishing, copyediting, and global copyright protection.',
    targetBeneficiaries: ['Music Producers', 'Recording Artists', 'Cartoon & 3D Animators', 'Book Writers', 'Manuscript Editors', 'Graphic Designers', 'Voice Actors'],
    strategicInitiatives: [
      'Provincial Youth Audio Recording Studios with zero-cost booking for emerging artists',
      'National Animation & Comic Book Publishing Hub for indigenous Zambian folklore and superhero stories',
      'Digital Rights & Royalty Collection automated via Smart Contracts on Monad EVM'
    ],
    institutionsInvolved: ['National Arts Council (NAC)', 'Zambia Association of Musicians (ZAM)', 'Zambian Writers Guild', 'Broadcast Media Houses'],
    empowermentMetric: '10,000+ Youth Monetized Creatives by 2027'
  },
  {
    id: 'healthcare-medicinal-cannabis',
    title: 'Healthcare, Clinical Research & Medicinal Cannabis Legalization Framework',
    category: 'Science & Healthcare',
    description: 'Elevating doctors, clinical officers, nurses, and pharmacologists while deploying an export-grade medicinal cannabis and industrial hemp legal framework to generate sovereign revenue, cure pain, and build pharmaceutical manufacturing plants in Zambia.',
    targetBeneficiaries: ['Medical Doctors', 'Registered Nurses', 'Pharmacologists', 'Agronomists', 'Clinical Researchers', 'Hospital Patients'],
    strategicInitiatives: [
      'Statutory Instrument 62 & 63 Expansion: Expedited licensing for medicinal cannabis extraction laboratories',
      'Modern clinic infrastructure and diagnostic equipment across all 116 districts',
      'NHIMA universal healthcare fund optimization and digital claims audit'
    ],
    institutionsInvolved: ['Ministry of Health', 'Levy Mwanawasa Medical University (LMMU)', 'NHIMA', 'Zambia Medicines Regulatory Authority (ZAMRA)', 'Medicinal Cannabis Growers Association'],
    empowermentMetric: '$1.5B+ Sovereign Export Industry & 100% District Clinic Coverage'
  },
  {
    id: 'education-architecture-stem',
    title: 'STEM Science, Architecture, Engineering & Pedagogical Transformation',
    category: 'Education & Civics',
    description: 'Upgrading primary and secondary teachers, lecturers, civil engineers, and architects with world-class digital laboratories, geospatial GIS datasets, CAD workstations, and modern school infrastructure.',
    targetBeneficiaries: ['Teachers & Lecturers', 'Architects & Town Planners', 'Civil & Mining Engineers', 'Computer Scientists', 'Students of All Ages'],
    strategicInitiatives: [
      'Constituency Development Fund (CDF) classroom and laboratory modernization audits',
      'University digital twin integration linking UNZA, CBU, and Mulungushi University to live national infrastructure data',
      'Teacher welfare, prompt allowances, and digital tablet distribution'
    ],
    institutionsInvolved: ['Ministry of Education', 'UNZA', 'Copperbelt University', 'Zambia Institute of Architects (ZIA)', 'Engineering Institution of Zambia (EIZ)'],
    empowermentMetric: '500,000+ STEM Students Trained & 116 Modern District Tech Hubs'
  },
  {
    id: 'telecoms-web3-datacenters',
    title: 'National High-Speed Internet, Telecoms (Airtel, MTN, Zamtel, Vodacom, Starlink) & Monad Web3',
    category: 'Infrastructure & Tech',
    description: 'Expanding national fiber-optic backbones, Starlink low-latency satellite downlinks, and high-throughput Monad EVM blockchain rails to guarantee affordable ultra-fast internet and decentralized financial sovereignty for every citizen.',
    targetBeneficiaries: ['Zambian Software Developers', 'Tech Entrepreneurs', 'Rural Students', 'Small Businesses', 'Fintech Innovators'],
    strategicInitiatives: [
      'Subsidized national internet connectivity in public schools and community centers',
      'Integration of mobile money APIs (Airtel Money, MTN MoMo, Zamtel Kwacha) with zero transaction friction',
      'Monad blockchain layer-1 smart contracts for real-time micro-payments and property land registry transparency'
    ],
    institutionsInvolved: ['ZICTA', 'Airtel Zambia', 'MTN Zambia', 'Zamtel', 'Vodacom Africa', 'Starlink Space Exploration', 'Monad Foundation'],
    empowermentMetric: '99.9% Broadband Coverage & 10,000 TPS Sovereign Ledger Velocity'
  },
  {
    id: 'public-finance-pacra-napsa',
    title: 'Public Institutions, PACRA Business Registration, NAPSA Pensions & PAYE Tax Fairness',
    category: 'Institutions & Finance',
    description: 'Putting more money in people’s pockets by automating business registration with PACRA, ensuring rapid NAPSA pension payouts and partial pre-retirement withdrawals, and establishing fair PAYE tax thresholds.',
    targetBeneficiaries: ['Working Men & Women', 'Pensioners', 'Small Business Owners', 'Traders & Marketeers', 'Youth Startups'],
    strategicInitiatives: [
      'Instant online 15-minute PACRA business and cooperative incorporation',
      'NAPSA early access capital for housing construction and solar equipment investments',
      'Local council and church community welfare grants for children, widows, and vulnerable youth'
    ],
    institutionsInvolved: ['PACRA', 'NAPSA', 'Zambia Revenue Authority (ZRA)', 'Ministry of Local Government', 'Council of Churches in Zambia (CCZ)'],
    empowermentMetric: '1,000,000+ Registered Micro-Enterprises & Sovereign Wealth Retention'
  }
];

export const INITIAL_ZAMBIAN_DEV_REVIEWS: ZambianDeveloperReview[] = [
  {
    id: 'rev-01',
    name: 'Mwamba Chileshe',
    location: 'Lusaka / Woodlands',
    province: 'Lusaka',
    role: 'Senior Full-Stack TypeScript Engineer',
    rating: 5,
    reviewTitle: 'Exceptional subnational architectural fidelity and Solfeggio grid integration',
    comment: 'The architectural mapping from the cosmic True Sun down to Mongu, Lusaka, and all 116 districts is mind-blowing. The integration of all 73+ tribes with paramount chiefs and ceremonies gives our nation the sovereign digital representation we have long deserved.',
    timestamp: '2026-08-25T08:15:00Z',
    verifiedZambianDev: true
  },
  {
    id: 'rev-02',
    name: 'Sipho Nyambe',
    location: 'Mongu / Limulunga',
    province: 'Western',
    role: 'Embedded Systems & Telemetry Developer',
    rating: 5,
    reviewTitle: 'Mongu Anchor Node & Barotseland Transhumance Data is Spot On',
    comment: 'Seeing Mongu and Western Province positioned as the sovereign origin anchor node alongside Lusaka makes us proud. The Kuomboka route coordinates and Mbunda/Nkoya historical links are documented with 100% accuracy.',
    timestamp: '2026-08-25T09:30:00Z',
    verifiedZambianDev: true
  },
  {
    id: 'rev-03',
    name: 'Kondwani Banda',
    location: 'Kitwe / Riverside (CBU Alum)',
    province: 'Copperbelt',
    role: 'Distributed Systems & Web3 Architect',
    rating: 5,
    reviewTitle: 'Monad Parallel EVM & Bank of Zambia 432 Hz parity is revolutionary',
    comment: 'The inclusion of Monad blockchain rails, Airtel/MTN/Zamtel/Starlink integration, and medicinal cannabis research frameworks shows this system is built for real economic prosperity. Ready to contribute code to the repository!',
    timestamp: '2026-08-25T11:00:00Z',
    verifiedZambianDev: true
  },
  {
    id: 'rev-04',
    name: 'Nalukui Mubita',
    location: 'Solwezi / Kansanshi',
    province: 'North-Western',
    role: 'Geospatial Data Scientist',
    rating: 5,
    reviewTitle: 'North-Western mineral corridors & Sona ideogram recognition',
    comment: 'Acknowledging the Luchazi Sona mathematical sand-drawing tradition alongside modern GIS for Sentinel and Kansanshi copper mines shows deep intellectual craftsmanship. Outstanding platform by Liswaniso Edgar Mulenga.',
    timestamp: '2026-08-25T12:45:00Z',
    verifiedZambianDev: true
  }
];
