export interface ProvinceWithDistricts {
  name: string;
  capital?: string;
  districts: string[];
}

// 1. All African Provinces (54 Nations)
export const africanProvinces: Record<string, string[]> = {
  "Algeria": [
    "Adrar", "Chlef", "Laghouat", "Oum El Bouaghi", "Batna", "Béjaïa", "Biskra", "Béchar", 
    "Blida", "Bouira", "Tamanrasset", "Tébessa", "Tlemcen", "Tiaret", "Tizi Ouzou", "Algiers", 
    "Djelfa", "Jijel", "Sétif", "Saïda", "Skikda", "Sidi Bel Abbès", "Annaba", "Guelma", 
    "Constantine", "Médéa", "Mostaganem", "M'Sila", "Mascara", "Ouargla", "Oran", "El Bayadh", 
    "Illizi", "Bordj Bou Arréridj", "Boumerdès", "El Tarf", "Tindouf", "Tissemsilt", "El Oued", 
    "Khenchela", "Souk Ahras", "Tipaza", "Mila", "Aïn Defla", "Naâma", "Aïn Témouchent", 
    "Ghardaïa", "Relizane", "Timimoun", "Bordj Badji Mokhtar", "Ouled Djellal", "Béni Abbès", 
    "In Salah", "In Guezzam", "Touggourt", "Djanet", "El M'Ghair", "El Meniaa"
  ],
  "Angola": [
    "Bengo", "Benguela", "Bié", "Cabinda", "Cuando Cubango", "Cuanza Norte", "Cuanza Sul", 
    "Cunene", "Huambo", "Huíla", "Luanda", "Lunda Norte", "Lunda Sul", "Malanje", "Moxico", 
    "Namibe", "Uíge", "Zaire"
  ],
  "Benin": [
    "Alibori", "Atakora", "Atlantique", "Borgou", "Collines", "Couffo", "Donga", "Littoral", 
    "Mono", "Ouémé", "Plateau", "Zou"
  ],
  "Botswana": [
    "Central", "Chobe", "Ghanzi", "Kgalagadi", "Kgatleng", "Kweneng", "Ngamiland", 
    "North-East", "Southern", "South-East"
  ],
  "Burkina Faso": [
    "Balé", "Bam", "Banwa", "Bazèga", "Bougouriba", "Boulgou", "Boulkiemdé", "Comoé", 
    "Ganzourgou", "Gnagna", "Gourma", "Houet", "Ioba", "Kadiogo", "Kénédougou", "Komondjari", 
    "Kompienga", "Kossi", "Koulpélogo", "Kouritenga", "Kourwéogo", "Léraba", "Loroum", 
    "Mouhoun", "Nahuori", "Namentenga", "Nayala", "Noumbiel", "Oubritenga", "Oudalan", 
    "Passoré", "Poni", "Sanmatenga", "Séno", "Sissili", "Soum", "Sourou", "Tapoa", 
    "Tuy", "Yagha", "Yatenga", "Ziro", "Zondoma", "Zoundwéogo"
  ],
  "Burundi": [
    "Bubanza", "Bujumbura Mairie", "Bujumbura Rural", "Bururi", "Cankuzo", "Cibitoke", 
    "Gitega", "Karuzi", "Kayanza", "Kirundo", "Makamba", "Muramvya", "Muyinga", "Mwaro", 
    "Ngozi", "Rumonge", "Rutana", "Ruyigi"
  ],
  "Cabo Verde": [
    "Boa Vista", "Brava", "Maio", "Mosteiros", "Paul", "Porto Novo", "Praia", "Ribeira Brava", 
    "Ribeira Grande", "Ribeira Grande de Santiago", "Sal", "Santa Catarina", 
    "Santa Catarina do Fogo", "Santa Cruz", "São Domingos", "São Filipe", "São Lourenço dos Órgãos", 
    "São Miguel", "São Salvador do Mundo", "São Vicente", "Tarrafal", "Tarrafal de São Nicolau"
  ],
  "Cameroon": [
    "Adamawa", "Centre", "East", "Far North", "Littoral", "North", "North-West", 
    "South", "South-West", "West"
  ],
  "Central African Republic": [
    "Bamingui-Bangoran", "Bangui", "Basse-Kotto", "Haut-Mbomou", "Haute-Kotto", "Kémo", 
    "Lobaye", "Mambéré-Kadéï", "Mbomou", "Nana-Grébizi", "Nana-Mambéré", "Ombella-M'Poko", 
    "Ouaka", "Ouham", "Ouham-Pendé", "Sangha-Mbaéré", "Vakaga"
  ],
  "Chad": [
    "Bahr el Gazel", "Batha", "Borkou", "Chari-Baguirmi", "Ennedi-Est", "Ennedi-Ouest", 
    "Guéra", "Hadjer-Lamis", "Kanem", "Lac", "Logone Occidental", "Logone Oriental", 
    "Mandoul", "Mayo-Kebbi Est", "Mayo-Kebbi Ouest", "Moyen-Chari", "N'Djamena", 
    "Ouaddaï", "Salamat", "Sila", "Tandjilé", "Tibesti", "Wadi Fira"
  ],
  "Comoros": [
    "Anjouan (Nzwani)", "Grande Comore (Ngazidja)", "Mohéli (Mwali)"
  ],
  "DR Congo": [
    "Bas-Uélé", "Équateur", "Haut-Katanga", "Haut-Lomami", "Haut-Uélé", "Ituri", 
    "Kasaï", "Kasaï-Central", "Kasaï-Oriental", "Kinshasa", "Kongo Central", "Kwango", 
    "Kwilu", "Lomami", "Lualaba", "Mai-Ndombe", "Maniema", "Mongala", "Nord-Kivu", 
    "Nord-Ubangi", "Sankuru", "Sud-Kivu", "Sud-Ubangi", "Tanganyika", "Tshopo", "Tshuapa"
  ],
  "Democratic Republic of the Congo": [
    "Bas-Uélé", "Équateur", "Haut-Katanga", "Haut-Lomami", "Haut-Uélé", "Ituri", 
    "Kasaï", "Kasaï-Central", "Kasaï-Oriental", "Kinshasa", "Kongo Central", "Kwango", 
    "Kwilu", "Lomami", "Lualaba", "Mai-Ndombe", "Maniema", "Mongala", "Nord-Kivu", 
    "Nord-Ubangi", "Sankuru", "Sud-Kivu", "Sud-Ubangi", "Tanganyika", "Tshopo", "Tshuapa"
  ],
  "Republic of the Congo": [
    "Bouenza", "Brazzaville", "Cuvette", "Cuvette-Ouest", "Kouilou", "Lékoumou", 
    "Likouala", "Niari", "Plateaux", "Pointe-Noire", "Pool", "Sangha"
  ],
  "Djibouti": [
    "Ali Sabieh", "Arta", "Dikhil", "Djibouti", "Obock", "Tadjourah"
  ],
  "Egypt": [
    "Alexandria", "Aswan", "Asyut", "Beheira", "Beni Suef", "Cairo", "Dakahlia", 
    "Damietta", "Faiyum", "Gharbia", "Giza", "Ismailia", "Kafr El Sheikh", "Luxor", 
    "Matrouh", "Minya", "Monufia", "New Valley", "North Sinai", "Port Said", 
    "Qalyubia", "Qena", "Red Sea", "Sharqia", "Sohag", "South Sinai", "Suez"
  ],
  "Equatorial Guinea": [
    "Annobón", "Bioko Norte", "Bioko Sur", "Centro Sur", "Djibloho", "Kié-Ntem", 
    "Litoral", "Wele-Nzas"
  ],
  "Eritrea": [
    "Anseba", "Debub", "Gash-Barka", "Maekel", "Northern Red Sea", "Southern Red Sea"
  ],
  "Eswatini": [
    "Hhohho", "Lubombo", "Manzini", "Shiselweni"
  ],
  "Ethiopia": [
    "Addis Ababa", "Afar", "Amhara", "Benishangul-Gumuz", "Central Ethiopia", 
    "Dire Dawa", "Gambela", "Harari", "Oromia", "Sidama", "Somali", "South Ethiopia", 
    "South West Ethiopia Peoples", "Tigray"
  ],
  "Gabon": [
    "Estuaire", "Haut-Ogooué", "Moyen-Ogooué", "Ngounié", "Nyanga", "Ogooué-Ivindo", 
    "Ogooué-Lolo", "Ogooué-Maritime", "Woleu-Ntem"
  ],
  "Gambia": [
    "Banjul", "Central River", "Lower River", "North Bank", "Upper River", "West Coast"
  ],
  "The Gambia": [
    "Banjul", "Central River", "Lower River", "North Bank", "Upper River", "West Coast"
  ],
  "Ghana": [
    "Ahafo", "Ashanti", "Bono", "Bono East", "Central", "Eastern", "Greater Accra", 
    "North East", "Northern", "Oti", "Savannah", "Upper East", "Upper West", "Volta", 
    "Western", "Western North"
  ],
  "Guinea": [
    "Boké", "Conakry", "Faranah", "Kankan", "Kindia", "Labé", "Mamou", "Nzérékoré"
  ],
  "Guinea-Bissau": [
    "Bafatá", "Biombo", "Bissau", "Bolama", "Cacheu", "Gabú", "Oio", "Quinara", "Tombali"
  ],
  "Ivory Coast": [
    "Abidjan", "Bas-Sassandra", "Comoé", "Denguélé", "Gôh-Djiboua", "Lacs", "Lagunes", 
    "Montagnes", "Sassandra-Marahoué", "Savanes", "Vallée du Bandama", "Woroba", 
    "Yamoussoukro", "Zanzan"
  ],
  "Côte d'Ivoire": [
    "Abidjan", "Bas-Sassandra", "Comoé", "Denguélé", "Gôh-Djiboua", "Lacs", "Lagunes", 
    "Montagnes", "Sassandra-Marahoué", "Savanes", "Vallée du Bandama", "Woroba", 
    "Yamoussoukro", "Zanzan"
  ],
  "Kenya": [
    "Baringo", "Bomet", "Bungoma", "Busia", "Elgeyo-Marakwet", "Embu", "Garissa", 
    "Homa Bay", "Isiolo", "Kajiado", "Kakamega", "Kericho", "Kiambu", "Kilifi", 
    "Kirinyaga", "Kisii", "Kisumu", "Kitui", "Kwale", "Laikipia", "Lamu", "Machakos", 
    "Makueni", "Mandera", "Marsabit", "Meru", "Migori", "Mombasa", "Murang'a", 
    "Nairobi", "Nakuru", "Nandi", "Narok", "Nyamira", "Nyandarua", "Nyeri", 
    "Samburu", "Siaya", "Taita-Taveta", "Tana River", "Tharaka-Nithi", "Trans Nzoia", 
    "Turkana", "Uasin Gishu", "Vihiga", "Wajir", "West Pokot"
  ],
  "Lesotho": [
    "Berea", "Butha-Buthe", "Leribe", "Mafeteng", "Maseru", "Mohale's Hoek", 
    "Mokhotlong", "Qacha's Nek", "Quthing", "Thaba-Tseka"
  ],
  "Liberia": [
    "Bomi", "Bong", "Gbarpolu", "Grand Bassa", "Grand Cape Mount", "Grand Gedeh", 
    "Grand Kru", "Lofa", "Margibi", "Maryland", "Montserrado", "Nimba", "Rivercess", 
    "River Gee", "Sinoe"
  ],
  "Libya": [
    "Benghazi", "Derna", "Ghat", "Jabal al Akhdar", "Jabal al Gharbi", "Jafara", 
    "Jufra", "Kufra", "Marj", "Misrata", "Murzuq", "Nalut", "Nuqat al Khams", 
    "Sabha", "Sirte", "Tripoli", "Wadi al Hayaa", "Wadi al Shatii", "Zawiya"
  ],
  "Madagascar": [
    "Antananarivo", "Antsiranana", "Fianarantsoa", "Mahajanga", "Toamasina", "Toliara"
  ],
  "Malawi": [
    "Balaka", "Blantyre", "Chikwawa", "Chiradzulu", "Chitipa", "Dedza", "Dowa", 
    "Karonga", "Kasungu", "Likoma", "Lilongwe", "Machinga", "Mangochi", "Mchinji", 
    "Mulanje", "Mwanza", "Mzimba", "Neno", "Nkhata Bay", "Nkhotakota", "Nsanje", 
    "Ntcheu", "Ntchisi", "Phalombe", "Rumphi", "Salima", "Thyolo", "Zomba"
  ],
  "Mali": [
    "Bamako", "Gao", "Kayes", "Kidal", "Koulikoro", "Ménaka", "Mopti", "Ségou", 
    "Sikasso", "Taoudénit", "Tombouctou"
  ],
  "Mauritania": [
    "Adrar", "Assaba", "Brakna", "Dakhlet Nouadhibou", "Gorgol", "Guidimaka", 
    "Hodh Ech Chargui", "Hodh El Gharbi", "Inchiri", "Nouakchott-Nord", 
    "Nouakchott-Ouest", "Nouakchott-Sud", "Tagant", "Tiris Zemmour", "Trarza"
  ],
  "Mauritius": [
    "Black River", "Flacq", "Grand Port", "Moka", "Pamplemousses", "Plaines Wilhems", 
    "Port Louis", "Rivière du Rempart", "Savanne", "Rodrigues"
  ],
  "Morocco": [
    "Béni Mellal-Khénifra", "Casablanca-Settat", "Dakhla-Oued Ed-Dahab", 
    "Drâa-Tafilalet", "Fès-Meknès", "Guelmim-Oued Noun", "Laâyoune-Sakia El Hamra", 
    "Marrakech-Safi", "Oriental", "Rabat-Salé-Kénitra", "Souss-Massa", "Tanger-Tétouan-Al Hoceïma"
  ],
  "Mozambique": [
    "Cabo Delgado", "Gaza", "Inhambane", "Manica", "Maputo (City)", "Maputo", 
    "Nampula", "Niassa", "Sofala", "Tete", "Zambezia"
  ],
  "Namibia": [
    "Erongo", "Hardap", "ǁKaras", "Kavango East", "Kavango West", "Khomas", 
    "Kunene", "Ohangwena", "Omaheke", "Omusati", "Oshana", "Oshikoto", "Otjozondjupa", "Zambezi"
  ],
  "Niger": [
    "Agadez", "Diffa", "Dosso", "Maradi", "Niamey", "Tahoua", "Tillabéri", "Zinder"
  ],
  "Nigeria": [
    "Abia", "Adamawa", "Akwa Ibom", "Anambra", "Bauchi", "Bayelsa", "Benue", 
    "Borno", "Cross River", "Delta", "Ebonyi", "Edo", "Ekiti", "Enugu", 
    "Federal Capital Territory (Abuja)", "Gombe", "Imo", "Jigawa", "Kaduna", 
    "Kano", "Katsina", "Kebbi", "Kogi", "Kwara", "Lagos", "Nasarawa", "Niger", 
    "Ogun", "Ondo", "Osun", "Oyo", "Plateau", "Rivers", "Sokoto", "Taraba", 
    "Yobe", "Zamfara"
  ],
  "Rwanda": [
    "Kigali", "Eastern", "Northern", "Southern", "Western"
  ],
  "Sao Tome and Principe": [
    "Água Grande", "Cantagalo", "Caué", "Lembá", "Lobata", "Mé-Zóchi", "Pagué (Príncipe)"
  ],
  "Senegal": [
    "Dakar", "Diourbel", "Fatick", "Kaffrine", "Kaolack", "Kédougou", "Kolda", 
    "Louga", "Matam", "Saint-Louis", "Sédhiou", "Tambacounda", "Thiès", "Ziguinchor"
  ],
  "Seychelles": [
    "Anse aux Pins", "Anse Boileau", "Anse Etoile", "Anse Royale", "Baie Lazare", 
    "Baie Sainte Anne", "Beau Vallon", "Bel Air", "Bel Ombre", "Cascade", 
    "Glacis", "Grand'Anse Mahé", "Grand'Anse Praslin", "La Digue", "Mont Buxton", 
    "Mont Fleuri", "Plaisance", "Pointe La Rue", "Port Glaud", "Roche Caiman", 
    "Saint Louis", "Takamaka"
  ],
  "Sierra Leone": [
    "Eastern", "Northern", "North Western", "Southern", "Western Area"
  ],
  "Somalia": [
    "Awdal", "Bakool", "Banaadir", "Bari", "Bay", "Galguduud", "Gedo", "Hiiraan", 
    "Jubbada Dhexe", "Jubbada Hoose", "Mudug", "Nugaal", "Sanaag", "Shabeellaha Dhexe", 
    "Shabeellaha Hoose", "Sool", "Togdheer", "Woqooyi Galbeed"
  ],
  "South Africa": [
    "Eastern Cape", "Free State", "Gauteng", "KwaZulu-Natal", "Limpopo", 
    "Mpumalanga", "North West", "Northern Cape", "Western Cape"
  ],
  "South Sudan": [
    "Central Equatoria", "Eastern Equatoria", "Jonglei", "Lakes", "Northern Bahr el Ghazal", 
    "Unity", "Upper Nile", "Warrap", "Western Bahr el Ghazal", "Western Equatoria", 
    "Abyei Administrative Area", "Pibor Administrative Area", "Ruweng Administrative Area"
  ],
  "Sudan": [
    "Blue Nile", "Central Darfur", "East Darfur", "Gedarif", "Gezira", "Kassala", 
    "Khartoum", "North Darfur", "North Kordofan", "Northern", "Red Sea", "River Nile", 
    "Sennar", "South Darfur", "South Kordofan", "West Darfur", "West Kordofan", "White Nile"
  ],
  "Tanzania": [
    "Arusha", "Dar es Salaam", "Dodoma", "Geita", "Iringa", "Kagera", "Katavi", 
    "Kigoma", "Kilimanjaro", "Lindi", "Manyara", "Mara", "Mbeya", "Morogoro", 
    "Mtwara", "Mwanza", "Njombe", "Pemba North", "Pemba South", "Pwani", "Rukwa", 
    "Ruvuma", "Shinyanga", "Simiyu", "Singida", "Songwe", "Tabora", "Tanga", 
    "Zanzibar Central/South", "Zanzibar North", "Zanzibar Urban/West"
  ],
  "Togo": [
    "Centrale", "Kara", "Maritime", "Plateaux", "Savanes"
  ],
  "Tunisia": [
    "Ariana", "Béja", "Ben Arous", "Bizerte", "Gabès", "Gafsa", "Jendouba", 
    "Kairouan", "Kasserine", "Kebili", "Kef", "Mahdia", "Manouba", "Medenine", 
    "Monastir", "Nabeul", "Sfax", "Sidi Bouzid", "Siliana", "Sousse", "Tataouine", 
    "Tozeur", "Tunis", "Zaghouan"
  ],
  "Uganda": [
    "Central Region", "Eastern Region", "Northern Region", "Western Region"
  ],
  "Zambia": [
    "Central", "Copperbelt", "Eastern", "Luapula", "Lusaka", 
    "Muchinga", "Northern", "North-Western", "Southern", "Western"
  ],
  "Zimbabwe": [
    "Bulawayo", "Harare", "Manicaland", "Mashonaland Central", "Mashonaland East", 
    "Mashonaland West", "Masvingo", "Matabeleland North", "Matabeleland South", "Midlands"
  ],

  // GLOBAL NATIONS (Americas, Asia, Europe, Oceania)
  "United States": [
    "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", 
    "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", 
    "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", 
    "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", 
    "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", 
    "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", 
    "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", 
    "Wisconsin", "Wyoming"
  ],
  "Canada": [
    "Alberta", "British Columbia", "Manitoba", "New Brunswick", "Newfoundland and Labrador", 
    "Northwest Territories", "Nova Scotia", "Nunavut", "Ontario", "Prince Edward Island", 
    "Quebec", "Saskatchewan", "Yukon"
  ],
  "Mexico": [
    "Aguascalientes", "Baja California", "Baja California Sur", "Campeche", "Chiapas", 
    "Chihuahua", "Coahuila", "Colima", "Mexico City", "Durango", "Guanajuato", "Guerrero", 
    "Hidalgo", "Jalisco", "México", "Michoacán", "Morelos", "Nayarit", "Nuevo León", 
    "Oaxaca", "Puebla", "Querétaro", "Quintana Roo", "San Luis Potosí", "Sinaloa", 
    "Sonora", "Tabasco", "Tamaulipas", "Tlaxcala", "Veracruz", "Yucatán", "Zacatecas"
  ],
  "China": [
    "Anhui", "Beijing", "Chongqing", "Fujian", "Gansu", "Guangdong", "Guangxi", 
    "Guizhou", "Hainan", "Hebei", "Heilongjiang", "Henan", "Hong Kong", "Hubei", 
    "Hunan", "Inner Mongolia", "Jiangsu", "Jiangxi", "Jilin", "Liaoning", "Macau", 
    "Ningxia", "Qinghai", "Shaanxi", "Shandong", "Shanghai", "Shanxi", "Sichuan", 
    "Tianjin", "Tibet", "Xinjiang", "Yunnan", "Zhejiang"
  ],
  "India": [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", 
    "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", 
    "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", 
    "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", 
    "Uttar Pradesh", "Uttarakhand", "West Bengal", "Delhi (NCT)", "Jammu and Kashmir"
  ],
  "Japan": [
    "Aichi", "Akita", "Aomori", "Chiba", "Ehime", "Fukui", "Fukuoka", "Fukushima", 
    "Gifu", "Gunma", "Hiroshima", "Hokkaido", "Hyogo", "Ibaraki", "Ishikawa", 
    "Iwate", "Kagawa", "Kagoshima", "Kanagawa", "Kochi", "Kumamoto", "Kyoto", 
    "Mie", "Miyagi", "Miyazaki", "Nagano", "Nagasaki", "Nara", "Niigata", "Oita", 
    "Okayama", "Okinawa", "Osaka", "Saga", "Saitama", "Shiga", "Shimane", "Shizuoka", 
    "Tochigi", "Tokushima", "Tokyo", "Tottori", "Toyama", "Wakayama", "Yamagata", 
    "Yamaguchi", "Yamanashi"
  ],
  "United Kingdom": [
    "England", "Scotland", "Wales", "Northern Ireland"
  ],
  "Germany": [
    "Baden-Württemberg", "Bavaria", "Berlin", "Brandenburg", "Bremen", "Hamburg", 
    "Hesse", "Lower Saxony", "Mecklenburg-Vorpommern", "North Rhine-Westphalia", 
    "Rhineland-Palatinate", "Saarland", "Saxony", "Saxony-Anhalt", "Schleswig-Holstein", "Thuringia"
  ],
  "France": [
    "Auvergne-Rhône-Alpes", "Bourgogne-Franche-Comté", "Brittany", "Centre-Val de Loire", 
    "Corsica", "Grand Est", "Hauts-de-France", "Île-de-France", "Normandy", 
    "Nouvelle-Aquitaine", "Occitanie", "Pays de la Loire", "Provence-Alpes-Côte d'Azur"
  ],
  "Brazil": [
    "Acre", "Alagoas", "Amapá", "Amazonas", "Bahia", "Ceará", "Distrito Federal (Brasília)", 
    "Espírito Santo", "Goiás", "Maranhão", "Mato Grosso", "Mato Grosso do Sul", 
    "Minas Gerais", "Pará", "Paraíba", "Paraná", "Pernambuco", "Piauí", "Rio de Janeiro", 
    "Rio Grande do Norte", "Rio Grande do Sul", "Rondônia", "Roraima", "Santa Catarina", 
    "São Paulo", "Sergipe", "Tocantins"
  ],
  "Australia": [
    "Australian Capital Territory", "New South Wales", "Northern Territory", 
    "Queensland", "South Australia", "Tasmania", "Victoria", "Western Australia"
  ]
};

// 2. Comprehensive Districts Directory (Key Nations)
export const DISTRICTS_BY_PROVINCE: Record<string, Record<string, string[]>> = {
  "Zambia": {
    "Lusaka": ["Lusaka District", "Kafue", "Chongwe", "Chilanga", "Luangwa", "Rufunsa", "Chirundu"],
    "Copperbelt": ["Ndola", "Kitwe", "Mufulira", "Chingola", "Luanshya", "Kalulushi", "Chililabombwe", "Lufwanyama", "Mpongwe", "Masaiti"],
    "Central": ["Kabwe", "Kapiri Mposhi", "Mkushi", "Serenje", "Chibombo", "Itezhi-Tezhi", "Luano", "Chitambo", "Ngabwe", "Shibuyunji"],
    "Southern": ["Choma", "Livingstone", "Mazabuka", "Monze", "Kalomo", "Sinazongwe", "Gwembe", "Zimba", "Namwala", "Pemba", "Chikankata"],
    "Eastern": ["Chipata", "Petauke", "Katete", "Lundazi", "Nyimba", "Mambwe", "Sinda", "Vubwi", "Chasefu", "Lumezi", "Lusangazi"],
    "Luapula": ["Mansa", "Kawambwa", "Samfya", "Nchelenge", "Mwense", "Chiengi", "Milenge", "Mwansabombwe", "Chembe", "Chifunabuli", "Lunga"],
    "Northern": ["Kasama", "Mbala", "Luwingu", "Mporokoso", "Mungwi", "Lupososhi", "Senga Hill", "Nsama", "Kaputa", "Chilubi"],
    "North-Western": ["Solwezi", "Mwinilunga", "Kasempa", "Zambezi", "Kabompo", "Chavuma", "Mufumbwe", "Kalumbila", "Mushindamo", "Ikelenge", "Manyinga"],
    "Muchinga": ["Chinsali", "Mpika", "Isoka", "Nakonde", "Chama", "Mafinga", "Shiwang'andu", "Lavushimanda", "Kanchibiya"],
    "Western": ["Mongu", "Kaoma", "Senanga", "Sesheke", "Kalabo", "Shangombo", "Limulunga", "Nkeyema", "Luampa", "Sioma", "Mitete", "Sikongo", "Nalolo", "Mwandi"]
  },
  "Nigeria": {
    "Lagos": ["Ikeja", "Lagos Island", "Eti-Osa", "Surulere", "Ikorodu", "Epe", "Badagry", "Alimosho", "Kosofe", "Oshodi-Isolo"],
    "Federal Capital Territory (Abuja)": ["Abuja Municipal", "Bwari", "Gwagwalada", "Kuje", "Abaji", "Kwali"],
    "Kano": ["Kano Municipal", "Fagge", "Dala", "Gwale", "Tarauni", "Nassarawa", "Ungogo", "Kumbotso"],
    "Rivers": ["Port Harcourt", "Obio-Akpor", "Eleme", "Bonny", "Ikwerre", "Oyigbo", "Degema"]
  },
  "South Africa": {
    "Gauteng": ["City of Johannesburg", "City of Tshwane (Pretoria)", "City of Ekurhuleni", "Sedibeng District", "West Rand District"],
    "Western Cape": ["City of Cape Town", "Cape Winelands", "Garden Route", "Overberg", "West Coast", "Central Karoo"],
    "KwaZulu-Natal": ["eThekwini (Durban)", "uMgungundlovu", "uThukela", "King Cetshwayo", "iLembe", "Zululand"]
  },
  "United States": {
    "California": ["Los Angeles County", "San Diego County", "Orange County", "Santa Clara / Silicon Valley", "San Francisco", "Alameda", "Sacramento"],
    "New York": ["New York County (Manhattan)", "Kings County (Brooklyn)", "Queens County", "Bronx County", "Richmond County", "Nassau", "Suffolk", "Erie (Buffalo)"],
    "Texas": ["Harris County (Houston)", "Dallas County", "Travis County (Austin)", "Bexar County (San Antonio)", "Tarrant County (Fort Worth)", "El Paso"],
    "Florida": ["Miami-Dade County", "Broward County", "Orange County (Orlando)", "Hillsborough County (Tampa)", "Palm Beach", "Duval (Jacksonville)"]
  },
  "United Kingdom": {
    "England": ["Greater London", "Greater Manchester", "West Midlands (Birmingham)", "West Yorkshire (Leeds)", "Merseyside (Liverpool)", "Tyne and Wear (Newcastle)", "Bristol", "Oxfordshire"],
    "Scotland": ["City of Glasgow", "City of Edinburgh", "Aberdeen City", "Dundee City", "Highland", "Fife"],
    "Wales": ["Cardiff", "Swansea", "Newport", "Gwynedd", "Flintshire"],
    "Northern Ireland": ["Belfast", "Derry City and Strabane", "Lisburn and Castlereagh", "Newry, Mourne and Down"]
  },
  "India": {
    "Maharashtra": ["Mumbai City", "Mumbai Suburban", "Pune", "Nagpur", "Thane", "Nashik", "Aurangabad"],
    "Delhi (NCT)": ["New Delhi", "North Delhi", "South Delhi", "Central Delhi", "East Delhi", "West Delhi"],
    "Karnataka": ["Bengaluru Urban", "Bengaluru Rural", "Mysuru", "Dakshina Kannada (Mangaluru)", "Belagavi"],
    "Tamil Nadu": ["Chennai", "Coimbatore", "Madurai", "Tiruchirappalli", "Salem"]
  },
  "China": {
    "Beijing": ["Dongcheng", "Xicheng", "Chaoyang", "Haidian", "Fengtai", "Shijingshan", "Tongzhou", "Changping"],
    "Shanghai": ["Huangpu", "Xuhui", "Changning", "Jing'an", "Putuo", "Pudong New Area", "Minhang", "Baoshan"],
    "Guangdong": ["Guangzhou", "Shenzhen", "Dongguan", "Foshan", "Zhuhai", "Zhongshan", "Huizhou", "Shantou"]
  }
};

export function getProvincesForNation(countryName: string): string[] {
  if (!countryName) return [];
  const normalized = countryName.trim();
  if (africanProvinces[normalized]) return africanProvinces[normalized];

  const foundKey = Object.keys(africanProvinces).find(
    k => k.toLowerCase() === normalized.toLowerCase() ||
         normalized.toLowerCase().includes(k.toLowerCase()) ||
         k.toLowerCase().includes(normalized.toLowerCase())
  );

  if (foundKey && africanProvinces[foundKey]) {
    return africanProvinces[foundKey];
  }

  // Generic administrative divisions fallback
  return [
    `${normalized} Capital Region / Metropolis`,
    `${normalized} Northern Province`,
    `${normalized} Southern Province`,
    `${normalized} Eastern Province`,
    `${normalized} Western Province`,
    `${normalized} Central Administrative Territory`
  ];
}

export function getDistrictsForProvince(countryName: string, provinceName: string): string[] {
  if (!countryName || !provinceName) return [];
  const countryKey = Object.keys(DISTRICTS_BY_PROVINCE).find(
    k => k.toLowerCase() === countryName.trim().toLowerCase()
  );

  if (countryKey && DISTRICTS_BY_PROVINCE[countryKey]) {
    const provKey = Object.keys(DISTRICTS_BY_PROVINCE[countryKey]).find(
      p => p.toLowerCase() === provinceName.trim().toLowerCase() ||
           provinceName.toLowerCase().includes(p.toLowerCase()) ||
           p.toLowerCase().includes(provinceName.toLowerCase())
    );
    if (provKey && DISTRICTS_BY_PROVINCE[countryKey][provKey]) {
      return DISTRICTS_BY_PROVINCE[countryKey][provKey];
    }
  }

  return [
    `${provinceName} Central District`,
    `${provinceName} Urban Municipality`,
    `${provinceName} East District`,
    `${provinceName} West District`,
    `${provinceName} North District`,
    `${provinceName} South District`
  ];
}
