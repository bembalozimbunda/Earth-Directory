export interface District {
  name: string;
  population: number;
  resource: string;
  efficiency: number;
}

export interface ProvinceDetailed {
  name: string;
  role: string;
  color: string;
  bg: string;
  border: string;
  glow: string;
  vision: string;
  districts: District[];
}

export const ZAMBIA_DETAILED_PROVINCES: ProvinceDetailed[] = [
  { 
    name: 'Lusaka', 
    role: 'Administrative Core & Nexus', 
    color: 'text-rose-500', bg: 'bg-rose-500', glow: 'shadow-rose-500', border: 'border-rose-500',
    vision: 'A fully interconnected smart-city metropolis. Autonomous transit arteries powered by clean energy, real-time civic algorithms predicting urban needs, and the central repository for the national neural network.',
    districts: [
      { name: 'Lusaka', population: 3308439, resource: 'Neural Core / Governance', efficiency: 98 },
      { name: 'Chongwe', population: 313389, resource: 'Agri-Tech / Logistics', efficiency: 85 },
      { name: 'Kafue', population: 298450, resource: 'Industrial Processing', efficiency: 88 },
      { name: 'Luangwa', population: 34500, resource: 'Water / Biosphere', efficiency: 92 },
      { name: 'Chilanga', population: 224000, resource: 'Material Synthesis', efficiency: 90 },
      { name: 'Rufunsa', population: 68000, resource: 'Renewable Energy', efficiency: 84 },
      { name: 'Shibuyunji', population: 89000, resource: 'Agricultural Nodes', efficiency: 81 }
    ]
  },
  { 
    name: 'Copperbelt', 
    role: 'Industrial Engine', 
    color: 'text-amber-500', bg: 'bg-amber-500', glow: 'shadow-amber-500', border: 'border-amber-500',
    vision: 'Next-generation automated mining complexes utilizing drone swarm geolocators and green-processing foundries. Transitioning from raw extraction to advanced component manufacturing and silicon refinement.',
    districts: [
      { name: 'Ndola', population: 580000, resource: 'Commercial Hub / Logistics', efficiency: 95 },
      { name: 'Kitwe', population: 730000, resource: 'Heavy Compute / Extraction', efficiency: 92 },
      { name: 'Chingola', population: 270000, resource: 'Deep Mining / Refining', efficiency: 89 },
      { name: 'Mufulira', population: 210000, resource: 'Metallurgical Processing', efficiency: 87 },
      { name: 'Luanshya', population: 180000, resource: 'Industrial Manufacturing', efficiency: 85 },
      { name: 'Kalulushi', population: 150000, resource: 'Timber & Minerals', efficiency: 88 },
      { name: 'Chililabombwe', population: 130000, resource: 'Border Logistics', efficiency: 91 },
      { name: 'Mpongwe', population: 120000, resource: 'Agri-Tech Farms', efficiency: 84 },
      { name: 'Lufwanyama', population: 110000, resource: 'Emerald Extraction', efficiency: 86 },
      { name: 'Masaiti', population: 140000, resource: 'Cement / Materials', efficiency: 85 }
    ]
  },
  { 
    name: 'Southern', 
    role: 'Energy & Tourism', 
    color: 'text-blue-500', bg: 'bg-blue-500', glow: 'shadow-blue-500', border: 'border-blue-500',
    vision: 'The power grid epicenter of the nation. Floating solar arrays on Lake Kariba complementing advanced hydro-turbines. A global eco-tourism hub augmented by immersive AR heritage experiences.',
    districts: [
      { name: 'Livingstone', population: 180000, resource: 'Eco-Tourism / Heritage', efficiency: 96 },
      { name: 'Choma', population: 270000, resource: 'Administrative / Agri', efficiency: 89 },
      { name: 'Mazabuka', population: 300000, resource: 'Bio-Fuels / Sugar', efficiency: 94 },
      { name: 'Monze', population: 230000, resource: 'Agricultural Hub', efficiency: 87 },
      { name: 'Kalomo', population: 280000, resource: 'Historical Archives', efficiency: 85 },
      { name: 'Gwembe', population: 70000, resource: 'Lake Resources', efficiency: 82 },
      { name: 'Namwala', population: 140000, resource: 'Livestock / Dairy', efficiency: 86 },
      { name: 'Siavonga', population: 120000, resource: 'Hydro-Energy Gen', efficiency: 98 },
      { name: 'Sinazongwe', population: 140000, resource: 'Coal / Power', efficiency: 90 },
      { name: 'Kazungula', population: 150000, resource: 'Transit / Trade', efficiency: 93 },
      { name: 'Zimba', population: 90000, resource: 'Agri-Processing', efficiency: 83 },
      { name: 'Chikankata', population: 85000, resource: 'Energy Transit', efficiency: 88 },
      { name: 'Pemba', population: 80000, resource: 'Food Security', efficiency: 85 }
    ]
  },
  { 
    name: 'Central', 
    role: 'Agricultural & Transit Grid', 
    color: 'text-emerald-500', bg: 'bg-emerald-500', glow: 'shadow-emerald-500', border: 'border-emerald-500',
    vision: 'The bio-engineered breadbasket. Precision agriculture monitored by orbital satellites and soil-nanosensors, crossed by high-speed maglev logistical corridors connecting the north and south.',
    districts: [
      { name: 'Kabwe', population: 260000, resource: 'Transit Hub / Admin', efficiency: 91 },
      { name: 'Kapiri Mposhi', population: 320000, resource: 'Logistics / Rail Nexus', efficiency: 94 },
      { name: 'Mkushi', population: 210000, resource: 'Commercial Farming', efficiency: 95 },
      { name: 'Serenje', population: 230000, resource: 'Manganese / Transit', efficiency: 88 },
      { name: 'Mumbwa', population: 340000, resource: 'Minerals / Agri', efficiency: 87 },
      { name: 'Chibombo', population: 360000, resource: 'Food Production', efficiency: 89 },
      { name: 'Ngabwe', population: 50000, resource: 'Riverine Resources', efficiency: 78 },
      { name: 'Chisamba', population: 140000, resource: 'Agri-Tech / Estates', efficiency: 92 },
      { name: 'Chitambo', population: 75000, resource: 'Historical / Bio', efficiency: 82 },
      { name: 'Luano', population: 45000, resource: 'Valley Eco-System', efficiency: 80 }
    ]
  },
  { 
    name: 'North-Western', 
    role: 'New Copperbelt', 
    color: 'text-orange-500', bg: 'bg-orange-500', glow: 'shadow-orange-500', border: 'border-orange-500',
    vision: 'The new frontier of resource tech. Deep-earth extraction algorithms operating with zero ecological footprint. A booming tech-labor class managing the largest smart-mines on the continent.',
    districts: [
      { name: 'Solwezi', population: 350000, resource: 'Mining / Tech Core', efficiency: 96 },
      { name: 'Mwinilunga', population: 140000, resource: 'Pineapple / Gold', efficiency: 87 },
      { name: 'Zambezi', population: 120000, resource: 'River Transit', efficiency: 85 },
      { name: 'Kabompo', population: 110000, resource: 'Timber / Honey', efficiency: 86 },
      { name: 'Mufumbwe', population: 85000, resource: 'Minerals / Forestry', efficiency: 83 },
      { name: 'Kasempa', population: 90000, resource: 'Agri / Mining', efficiency: 84 },
      { name: 'Chavuma', population: 55000, resource: 'Border Trade', efficiency: 82 },
      { name: 'Manyinga', population: 60000, resource: 'Agri-Processing', efficiency: 81 },
      { name: 'Ikelenge', population: 45000, resource: 'Source of Zambezi', efficiency: 88 },
      { name: 'Kalumbila', population: 150000, resource: 'Smart Mining', efficiency: 97 },
      { name: 'Mushindamo', population: 65000, resource: 'Border Logistics', efficiency: 85 }
    ]
  },
  { 
    name: 'Eastern', 
    role: 'Bio-Diversity & Gateway', 
    color: 'text-lime-500', bg: 'bg-lime-500', glow: 'shadow-lime-500', border: 'border-lime-500',
    vision: 'A bastion of conserved genetics and synthetic biology research. Anti-poaching drone networks protecting the Luangwa Valley, serving as the primary data and trade gateway to the East African network.',
    districts: [
      { name: 'Chipata', population: 550000, resource: 'Eastern Nexus / Trade', efficiency: 93 },
      { name: 'Petauke', population: 400000, resource: 'Agri-Tech / Minerals', efficiency: 88 },
      { name: 'Lundazi', population: 350000, resource: 'Agriculture', efficiency: 86 },
      { name: 'Katete', population: 310000, resource: 'Processing Hub', efficiency: 87 },
      { name: 'Nyimba', population: 130000, resource: 'Forestry / Trade', efficiency: 84 },
      { name: 'Chadiza', population: 120000, resource: 'Border Security', efficiency: 85 },
      { name: 'Mambwe', population: 110000, resource: 'Tourism / Bio-Reserves', efficiency: 95 },
      { name: 'Sinda', population: 180000, resource: 'Agri / Transit', efficiency: 86 },
      { name: 'Vubwi', population: 60000, resource: 'Agriculture', efficiency: 81 },
      { name: 'Chasefu', population: 80000, resource: 'Northern Trade', efficiency: 82 },
      { name: 'Lumezi', population: 90000, resource: 'Farming', efficiency: 83 },
      { name: 'Kasenengwa', population: 120000, resource: 'Food Security', efficiency: 85 },
      { name: 'Lusangazi', population: 75000, resource: 'Bio-Diversity', efficiency: 88 }
    ]
  },
  { 
    name: 'Northern', 
    role: 'Lakes & Waterfalls', 
    color: 'text-cyan-500', bg: 'bg-cyan-500', glow: 'shadow-cyan-500', border: 'border-cyan-500',
    vision: 'The aquatic sanctuary. Underwater server farms cooled by deep lake waters. Advanced aquaculture facilities and the preservation of pristine waterfalls powered by silent, eco-friendly tech.',
    districts: [
      { name: 'Kasama', population: 350000, resource: 'Admin / Transit', efficiency: 91 },
      { name: 'Mbala', population: 160000, resource: 'Heritage / Border', efficiency: 88 },
      { name: 'Mporokoso', population: 130000, resource: 'Waterfalls / Energy', efficiency: 87 },
      { name: 'Luwingu', population: 160000, resource: 'Agriculture', efficiency: 85 },
      { name: 'Mungwi', population: 200000, resource: 'Farming / Admin', efficiency: 86 },
      { name: 'Kaputa', population: 110000, resource: 'Lake Resources', efficiency: 84 },
      { name: 'Chilubi', population: 100000, resource: 'Island Eco-System', efficiency: 85 },
      { name: 'Mpulungu', population: 140000, resource: 'Port / Trade', efficiency: 94 },
      { name: 'Senga Hill', population: 90000, resource: 'Agri / Transit', efficiency: 83 },
      { name: 'Lunte', population: 80000, resource: 'Farming', efficiency: 82 },
      { name: 'Lupososhi', population: 75000, resource: 'Fisheries', efficiency: 84 },
      { name: 'Nsama', population: 65000, resource: 'Wildlife / Tourism', efficiency: 89 }
    ]
  },
  { 
    name: 'Luapula', 
    role: 'Riverine Networks', 
    color: 'text-sky-500', bg: 'bg-sky-500', glow: 'shadow-sky-500', border: 'border-sky-500',
    vision: 'A region flowing with energy and rare earth minerals. Specialized battery manufacturing hubs built along the river, leveraging the kinetic energy of the Luapula to power localized micro-grids.',
    districts: [
      { name: 'Mansa', population: 300000, resource: 'Admin / Manganese', efficiency: 90 },
      { name: 'Nchelenge', population: 190000, resource: 'Lake Fisheries', efficiency: 88 },
      { name: 'Kawambwa', population: 170000, resource: 'Agri-Tech / Tea', efficiency: 89 },
      { name: 'Samfya', population: 230000, resource: 'Tourism / Lake', efficiency: 92 },
      { name: 'Mwense', population: 130000, resource: 'Agriculture', efficiency: 85 },
      { name: 'Mwansabombwe', population: 60000, resource: 'Heritage', efficiency: 87 },
      { name: 'Chienge', population: 160000, resource: 'Border Trade', efficiency: 86 },
      { name: 'Chembe', population: 50000, resource: 'Transit / Bridge', efficiency: 91 },
      { name: 'Milenge', population: 65000, resource: 'Forestry', efficiency: 82 },
      { name: 'Lunga', population: 55000, resource: 'Wetlands', efficiency: 81 },
      { name: 'Chipili', population: 45000, resource: 'Agriculture', efficiency: 83 },
      { name: 'Chifunabuli', population: 95000, resource: 'Fisheries', efficiency: 85 }
    ]
  },
  { 
    name: 'Western', 
    role: 'Floodplains & Heritage', 
    color: 'text-yellow-500', bg: 'bg-yellow-500', glow: 'shadow-yellow-500', border: 'border-yellow-500',
    vision: 'The fusion of ancient tradition and adaptive climate tech. Amphibious smart-structures that rise with the Kuomboka, utilizing ancient Barotse ecological knowledge encoded into modern preservation algorithms.',
    districts: [
      { name: 'Mongu', population: 220000, resource: 'Admin / Heritage', efficiency: 90 },
      { name: 'Senanga', population: 150000, resource: 'River Transit', efficiency: 86 },
      { name: 'Kaoma', population: 230000, resource: 'Agri-Tech', efficiency: 88 },
      { name: 'Sesheke', population: 120000, resource: 'Border / Timber', efficiency: 89 },
      { name: 'Lukulu', population: 110000, resource: 'Fisheries', efficiency: 84 },
      { name: 'Kalabo', population: 140000, resource: 'Floodplain Eco', efficiency: 85 },
      { name: 'Shangombo', population: 90000, resource: 'Border Trade', efficiency: 82 },
      { name: 'Limulunga', population: 65000, resource: 'Royal Capital', efficiency: 92 },
      { name: 'Nkeyema', population: 100000, resource: 'Agriculture', efficiency: 86 },
      { name: 'Luampa', population: 85000, resource: 'Farming', efficiency: 84 },
      { name: 'Sikongo', population: 60000, resource: 'Border Security', efficiency: 81 },
      { name: 'Nalolo', population: 75000, resource: 'River Resources', efficiency: 83 },
      { name: 'Mitete', population: 45000, resource: 'Wetlands', efficiency: 80 },
      { name: 'Mwandi', population: 70000, resource: 'Fisheries', efficiency: 85 },
      { name: 'Mulobezi', population: 40000, resource: 'Timber', efficiency: 82 },
      { name: 'Sioma', population: 65000, resource: 'Tourism / Falls', efficiency: 88 }
    ]
  },
  { 
    name: 'Muchinga', 
    role: 'Escarpment & Wildlife', 
    color: 'text-teal-500', bg: 'bg-teal-500', glow: 'shadow-teal-500', border: 'border-teal-500',
    vision: 'The high-altitude surveillance and communication ridge. Atmospheric collectors and deep-space observation nodes positioned along the escarpment, monitoring the health of the biosphere.',
    districts: [
      { name: 'Chinsali', population: 150000, resource: 'Admin / Education', efficiency: 89 },
      { name: 'Mpika', population: 260000, resource: 'Rail Hub / Wildlife', efficiency: 92 },
      { name: 'Isoka', population: 100000, resource: 'Agriculture', efficiency: 85 },
      { name: 'Nakonde', population: 170000, resource: 'Major Border Trade', efficiency: 95 },
      { name: 'Mafinga', population: 80000, resource: 'Highland Agri', efficiency: 84 },
      { name: 'Shiwa Ngandu', population: 75000, resource: 'Heritage / Tourism', efficiency: 90 },
      { name: 'Chama', population: 140000, resource: 'Wildlife / Forestry', efficiency: 86 },
      { name: 'Lavushimanda', population: 60000, resource: 'National Park', efficiency: 88 },
      { name: 'Kanchibiya', population: 75000, resource: 'Wetlands', efficiency: 85 }
    ]
  }
];
