/**
 * WARMABLON Academic & Higher Education Frameworks Matrix
 * Unified registry of Universities, Faculties, Research Chairs,
 * GIS/Geospatial Nodes & Academic Curricula across Zambia, Africa, and Earth.
 */

export interface AcademicFaculty {
  name: string;
  deaneryOrHead?: string;
  departments: string[];
  appliedCurricula: string[];
}

export interface ResearchChair {
  title: string;
  focusArea: string;
  telemetryIntegration: string;
  leadDiscipline: string;
}

export interface UniversityInstitution {
  id: string;
  name: string;
  acronym: string;
  established: number;
  jurisdiction: string;
  region: 'Zambia' | 'Africa' | 'Global Earth';
  campusLocations: string[];
  chancellorOrViceChancellor: string;
  motto: string;
  harmonicNode: string;
  faculties: AcademicFaculty[];
  researchChairs: ResearchChair[];
  specializedCurricula: {
    code: string;
    title: string;
    level: 'Undergraduate' | 'Postgraduate' | 'Doctoral / Post-Doc';
    coreModules: string[];
    warmablonIntegration: string;
  }[];
  apiAccessNode: string;
}

export const ZAMBIAN_UNIVERSITIES_FRAMEWORK: UniversityInstitution[] = [
  {
    id: 'unza-lusaka',
    name: 'University of Zambia',
    acronym: 'UNZA',
    established: 1965,
    jurisdiction: 'Republic of Zambia (Ministry of Education / HEA)',
    region: 'Zambia',
    campusLocations: ['Great East Road Campus (Lusaka)', 'Ridgeway Medical Campus (Lusaka)'],
    chancellorOrViceChancellor: 'Vice-Chancellor Office & Academic Senate',
    motto: 'Service and Excellence',
    harmonicNode: '432 Hz Alkebulan Knowledge Root',
    faculties: [
      {
        name: 'School of Natural Sciences',
        departments: [
          'Department of Geography & Environmental Studies',
          'Department of Computer Science & Mathematics',
          'Department of Physics & Geophysics'
        ],
        appliedCurricula: [
          'Geographic Information Systems (GIS) & Satellite Remote Sensing',
          'Geodesy, Spatial Statistics & Climate Modeling',
          'Computational Mathematics & Distributed Systems'
        ]
      },
      {
        name: 'School of Mines',
        departments: [
          'Department of Geology',
          'Department of Mining Engineering',
          'Department of Metallurgy & Mineral Processing'
        ],
        appliedCurricula: [
          'Copperbelt Geotectonics & Stratigraphy',
          'Mineral Economics & Commodity Parity (LME Copper / Cobalt)',
          'Battery Metals (Nickel, Manganese, Lithium) Mineralogy'
        ]
      },
      {
        name: 'School of Humanities and Social Sciences',
        departments: [
          'Department of Economics',
          'Department of Development Studies',
          'Department of Political and Administrative Studies'
        ],
        appliedCurricula: [
          'Macroeconomic Telemetry & BoZ Policy Analysis',
          'Subnational Administration & Constituency Development Fund (CDF) Economics',
          'Regional Trade Integration (AfCFTA, SADC, COMESA)'
        ]
      },
      {
        name: 'Institute of Economic and Social Research (INESOR)',
        departments: ['Socio-Economic Research Division', 'Governance and Policy Analysis'],
        appliedCurricula: ['Longitudinal Household Living Conditions Surveys', 'Demographic Cartography']
      }
    ],
    researchChairs: [
      {
        title: 'UNESCO Chair in Renewable Energy & Water Resources',
        focusArea: 'Zambezi Catchment Hydrology & Kariba Power Telemetry',
        telemetryIntegration: 'Hydrological River Flow & Hydroelectric Megawatt Balancing',
        leadDiscipline: 'Hydrology & Civil Engineering'
      },
      {
        title: 'Mining Economics & Critical Minerals Research Group',
        focusArea: 'Lobito Corridor Mineral Supply Chain Optimization',
        telemetryIntegration: 'SADC Freight Transit & Copper Value-Add Ledger',
        leadDiscipline: 'Mineral Economics'
      }
    ],
    specializedCurricula: [
      {
        code: 'GEO-4110',
        title: 'Advanced Spatial Cartography & Subnational Cadastre',
        level: 'Undergraduate',
        coreModules: ['WGS-84 Geodetic Projections', '116 Districts Boundary Modeling', 'Census Spatial Layering'],
        warmablonIntegration: 'Direct ingest of /src/data/zambiaDistricts.ts geometry and demographic matrices.'
      },
      {
        code: 'ECN-8200',
        title: 'Monetary Systems & African Central Bank Telemetry',
        level: 'Postgraduate',
        coreModules: ['Bank of Zambia Policy Rate Mechanics', 'SADC-RTGS Settlement', 'PAPSS Cross-Border Rails'],
        warmablonIntegration: 'Interactive analysis of Central Bank registry and Kwacha Frequency Amplifier.'
      }
    ],
    apiAccessNode: '/api/universities/registry/unza-lusaka'
  },
  {
    id: 'cbu-kitwe',
    name: 'Copperbelt University',
    acronym: 'CBU',
    established: 1987,
    jurisdiction: 'Republic of Zambia (Ministry of Education / HEA)',
    region: 'Zambia',
    campusLocations: ['Riverside Main Campus (Kitwe)', 'Ndola Campus', 'Parklands Campus'],
    chancellorOrViceChancellor: 'Vice-Chancellor Office & Senate',
    motto: 'Knowledge and Truth',
    harmonicNode: '528 Hz Transformation & Mineral Matrix',
    faculties: [
      {
        name: 'School of Mines and Mineral Sciences',
        departments: ['Department of Mining Engineering', 'Department of Mineral Processing', 'Department of Geology'],
        appliedCurricula: ['Extraction Metallurgy', 'Critical Battery Minerals', 'Tailings Reclamation']
      },
      {
        name: 'School of Built Environment',
        departments: ['Department of Urban and Regional Planning', 'Department of Land Surveying and Geomatics', 'Department of Real Estate and Construction'],
        appliedCurricula: ['Cadastral Surveying', 'Municipal Urban Masterplanning', 'GIS Land Information Systems']
      },
      {
        name: 'School of Information and Communication Technology (ICT)',
        departments: ['Department of Computer Science', 'Department of Information Systems', 'Department of Cyber Security'],
        appliedCurricula: ['Distributed Ledger Cryptography', 'Zero-Trust Network Architecture', 'Cloud Telemetry Engineering']
      },
      {
        name: 'Dag Hammarskjöld Institute for Peace and Conflict Studies (DHIPS)',
        departments: ['Conflict Resolution Division', 'Regional Integration & Geopolitics'],
        appliedCurricula: ['Cross-Border SADC Trade Diplomacy', 'AfCFTA Peace and Economic Corridors']
      }
    ],
    researchChairs: [
      {
        title: 'Africa Centre of Excellence in Sustainable Mining (ACE-SMART)',
        focusArea: 'Environmental Remediation & Green Mining in the Copperbelt',
        telemetryIntegration: 'Copperbelt Subnational Mining District Telemetry',
        leadDiscipline: 'Mining Engineering & Geomatics'
      }
    ],
    specializedCurricula: [
      {
        code: 'GEO-3020',
        title: 'Geomatic Engineering & Cross-Border Logistics Corridors',
        level: 'Undergraduate',
        coreModules: ['Lobito Rail Alignment', 'Walvis Bay Transit Geometry', 'One-Stop Border Post Intersections'],
        warmablonIntegration: 'Direct integration with /src/data/sadcCorridors.ts and real-time border telemetry.'
      },
      {
        code: 'ICT-7310',
        title: 'Cryptographic Ledgers & Sovereign Telemetry Verification',
        level: 'Postgraduate',
        coreModules: ['SHA-256 Block Chain Merkle Roots', 'Zero-Trust Architecture', 'Ephemeral RAM Security'],
        warmablonIntegration: 'Live linkage to /api/audit/integrity-ledger and block sweep validation.'
      }
    ],
    apiAccessNode: '/api/universities/registry/cbu-kitwe'
  },
  {
    id: 'mulungushi-kabwe',
    name: 'Mulungushi University',
    acronym: 'MU',
    established: 2008,
    jurisdiction: 'Republic of Zambia (Ministry of Education / HEA)',
    region: 'Zambia',
    campusLocations: ['Great North Road Campus (Kabwe)', 'Town Campus (Kabwe)', 'Livingstone Campus'],
    chancellorOrViceChancellor: 'Vice-Chancellor & University Council',
    motto: 'Education for Development',
    harmonicNode: '417 Hz Resilient Agricultural & Disaster Foundation',
    faculties: [
      {
        name: 'School of Science, Engineering and Technology',
        departments: ['Department of Engineering', 'Department of Computer Science', 'Department of Applied Mathematics'],
        appliedCurricula: ['Renewable Energy Systems', 'Hydraulic Structures', 'Embedded IoT Systems']
      },
      {
        name: 'School of Agriculture and Natural Resources',
        departments: ['Department of Agriculture', 'Department of Natural Resources', 'Disaster Management Training Centre'],
        appliedCurricula: ['Agronomic Spatial Mapping', 'Drought Early Warning Telemetry', 'River Basin Soil Moisture']
      },
      {
        name: 'School of Social Sciences',
        departments: ['Department of Economics', 'Department of Governance and Public Administration'],
        appliedCurricula: ['Constituency Development Fund (CDF) Grassroots Audits', 'Local Council Revenue Optimization']
      }
    ],
    researchChairs: [
      {
        title: 'Disaster Management & Spatial Resilience Centre',
        focusArea: 'Flood & Drought Telemetry in Zambezi & Luangwa Catchments',
        telemetryIntegration: '10 Provinces & 116 Municipal Districts Hazard Matrix',
        leadDiscipline: 'Disaster Risk Management'
      }
    ],
    specializedCurricula: [
      {
        code: 'DMR-5010',
        title: 'National Spatial Demographics & Disaster Telemetry',
        level: 'Postgraduate',
        coreModules: ['Population Density Mapping', '116 Districts Evacuation Logistics', 'Emergency Dialing Gateways'],
        warmablonIntegration: 'Integration with Emergency Calling Codes (+260 991/992/993) and District Directory.'
      }
    ],
    apiAccessNode: '/api/universities/registry/mulungushi-kabwe'
  },
  {
    id: 'kwame-nkrumah-kabwe',
    name: 'Kwame Nkrumah University',
    acronym: 'KNU',
    established: 2011,
    jurisdiction: 'Republic of Zambia',
    region: 'Zambia',
    campusLocations: ['Kabwe Main Campus'],
    chancellorOrViceChancellor: 'Vice-Chancellor Office',
    motto: 'Education for Transformation and Pan-African Emancipation',
    harmonicNode: '639 Hz Pan-African Integration & Harmonic Unity',
    faculties: [
      {
        name: 'School of Humanities and Social Sciences',
        departments: ['Department of Geography and Environmental Studies', 'Department of History and Pan-African Studies', 'Department of Civic Education'],
        appliedCurricula: ['African Political Geography', 'Sovereignty & Decolonial Cartography', 'Subnational Civics']
      }
    ],
    researchChairs: [
      {
        title: 'Pan-African Geographic & Historiographical Chair',
        focusArea: 'Alkebulan Toponymy & Indigenous Sovereign Boundaries',
        telemetryIntegration: '54 African Sovereign Nations & Continental Features',
        leadDiscipline: 'Geography & History'
      }
    ],
    specializedCurricula: [
      {
        code: 'GEO-2100',
        title: 'Alkebulan & SADC Regional Geography',
        level: 'Undergraduate',
        coreModules: ['Pan-African River Basins', 'Great Rift Valley Geometry', 'Colonial vs Sovereign Boundaries'],
        warmablonIntegration: 'Visualized through /src/data/continents.ts (Africa 432 Hz Module).'
      }
    ],
    apiAccessNode: '/api/universities/registry/kwame-nkrumah-kabwe'
  },
  {
    id: 'lmmu-lusaka',
    name: 'Levy Mwanawasa Medical University',
    acronym: 'LMMU',
    established: 2018,
    jurisdiction: 'Republic of Zambia (Ministry of Health / HEA)',
    region: 'Zambia',
    campusLocations: ['Chainama Main Campus (Lusaka)', 'Ndola Regional Medical Training Hub'],
    chancellorOrViceChancellor: 'Vice-Chancellor & Academic Senate',
    motto: 'Quality Health Professional Education for All',
    harmonicNode: '285 Hz Cellular & Public Health Infrastructure',
    faculties: [
      {
        name: 'School of Public Health and Environmental Sciences',
        departments: ['Department of Epidemiology & Biostatistics', 'Department of Environmental Health'],
        appliedCurricula: ['Spatial Disease Surveillance', 'District Epidemiological Heatmaps', 'One-Health Telemetry']
      }
    ],
    researchChairs: [
      {
        title: 'National Epidemiological & Spatial Health Telemetry Chair',
        focusArea: 'Cross-Border Malaria & Cholera Waterway Transmission',
        telemetryIntegration: '116 Districts Health Facilities & Border Corridor Ingress',
        leadDiscipline: 'Spatial Epidemiology'
      }
    ],
    specializedCurricula: [
      {
        code: 'EPI-6030',
        title: 'Spatial Health Demographics & One-Stop Border Post Ingress',
        level: 'Postgraduate',
        coreModules: ['Kasumbalesa & Chirundu Health Screening Data', 'District Isolation Capacity', 'Emergency Medical Dialing (+260 992)'],
        warmablonIntegration: 'Direct linkage to /src/data/sadcCorridors.ts border posts and emergency medical directories.'
      }
    ],
    apiAccessNode: '/api/universities/registry/lmmu-lusaka'
  },
  {
    id: 'nipa-zidis-lusaka',
    name: 'National Institute of Public Administration (NIPA) & ZIDIS',
    acronym: 'NIPA / ZIDIS',
    established: 1963,
    jurisdiction: 'Republic of Zambia (Public Service Management Division)',
    region: 'Zambia',
    campusLocations: ['Main Campus (Lusaka)', 'Ndola Outreach Campus'],
    chancellorOrViceChancellor: 'Executive Director & Board of Governors',
    motto: 'Excellence in Public Governance and Diplomacy',
    harmonicNode: '741 Hz Sovereign Public Integrity & Administrative Clarity',
    faculties: [
      {
        name: 'School of Management Studies & Public Administration',
        departments: ['Department of Decentralization and Local Governance', 'Department of Public Finance'],
        appliedCurricula: ['Constituency Development Fund (CDF) Compliance', 'Local Government Act Administration', 'Public Procurement Regulatory Auditing']
      },
      {
        name: 'Zambia Institute of Diplomacy and International Studies (ZIDIS)',
        departments: ['Department of Foreign Policy and Consular Affairs', 'Department of International Law'],
        appliedCurricula: ['Bilateral Diplomatic Protocols', 'Consular Missions & Embassy Registry', 'Treaty Verification']
      }
    ],
    researchChairs: [
      {
        title: 'Public Administration & Zero-Trust Governance Unit',
        focusArea: 'Decentralized Fiscal Audits & CDF Project Tracking',
        telemetryIntegration: 'Cryptographic Audit Ledger & District Governance Portals',
        leadDiscipline: 'Public Administration & Law'
      }
    ],
    specializedCurricula: [
      {
        code: 'PAD-4010',
        title: 'Subnational Decentralized Governance & District Administration',
        level: 'Undergraduate',
        coreModules: ['Local Government Act No. 2 of 2019', '116 Councils Ward Structure', 'CDF Project Appraisals'],
        warmablonIntegration: 'Provides statutory grounding for /src/data/zambiaDistricts.ts.'
      }
    ],
    apiAccessNode: '/api/universities/registry/nipa-zidis-lusaka'
  }
];

export const PAN_AFRICAN_UNIVERSITIES_FRAMEWORK: UniversityInstitution[] = [
  {
    id: 'pau-african-union',
    name: 'Pan-African University (African Union)',
    acronym: 'PAU / AU',
    established: 2008,
    jurisdiction: 'African Union Commission (Addis Ababa)',
    region: 'Africa',
    campusLocations: [
      'PAULESI (Ibadan, Nigeria - Earth and Life Sciences)',
      'PAUSTI (Juja, Kenya - Basic Sciences, Technology & Innovation)',
      'PAUWES (Tlemcen, Algeria - Water and Energy Sciences)',
      'PAUGHSS (Yaoundé, Cameroon - Governance, Humanities and Social Sciences)',
      'PAUSS (South Africa - Space Sciences)'
    ],
    chancellorOrViceChancellor: 'President of PAU Council & AU Commissioner for ESTI',
    motto: 'Excellence for African Integration and Sustainable Development',
    harmonicNode: '432 Hz Alkebulan Continental Harmonic Grid',
    faculties: [
      {
        name: 'Institute for Earth and Life Sciences (PAULESI)',
        departments: ['Department of Mineral Exploration Geosciences', 'Department of Environmental Management'],
        appliedCurricula: ['Continental Mineral Endowment', 'Geothermal & Critical Metal Cartography']
      },
      {
        name: 'Institute for Water and Energy Sciences (PAUWES)',
        departments: ['Department of Water Resources Engineering', 'Department of Renewable Energy'],
        appliedCurricula: ['Transboundary River Basin Treaties (Nile, Zambezi, Congo, Niger)', 'Continental Power Pools (SAPP, EAPP, WAPP)']
      }
    ],
    researchChairs: [
      {
        title: 'African Space Agency (AfSA) Planetary Geodesy Group',
        focusArea: 'Earth Observation Satellites for African Trade Corridors & Agriculture',
        telemetryIntegration: 'Continental GPS Baseline Networks & Border Transit Spatial Mapping',
        leadDiscipline: 'Space Sciences & Geodesy'
      }
    ],
    specializedCurricula: [
      {
        code: 'PAU-8100',
        title: 'Continental Trade Integration & AfCFTA Corridor Engineering',
        level: 'Doctoral / Post-Doc',
        coreModules: ['54 Nations Tariff Harmonization', 'PAPSS Settlement Rails', 'Multimodal Trans-African Highways'],
        warmablonIntegration: 'Directly mirrors the AfCFTA rules of origin and SADC trade matrix in WARMABLON.'
      }
    ],
    apiAccessNode: '/api/universities/registry/pau-african-union'
  },
  {
    id: 'uct-cape-town',
    name: 'University of Cape Town',
    acronym: 'UCT',
    established: 1829,
    jurisdiction: 'Republic of South Africa',
    region: 'Africa',
    campusLocations: ['Rondebosch Main Campus (Cape Town)'],
    chancellorOrViceChancellor: 'Vice-Chancellor & University Council',
    motto: 'Spes Bona (Good Hope)',
    harmonicNode: '852 Hz Deep Ocean & Hydrographic Synthesis',
    faculties: [
      {
        name: 'Faculty of Science',
        departments: ['Department of Environmental & Geographical Science', 'Department of Oceanography'],
        appliedCurricula: ['Benguela Current Oceanography', 'Sub-Saharan Spatial Dynamics', 'Atmospheric Physics']
      },
      {
        name: 'African Centre for Cities (ACC)',
        departments: ['Urban Infrastructure Division', 'Southern African Spatial Economics'],
        appliedCurricula: ['African Urbanization Corridors', 'Cross-Border Freight Logistics (Durban-Lubumbashi)']
      }
    ],
    researchChairs: [
      {
        title: 'South African Research Chair in Mineral Law in Africa',
        focusArea: 'SADC Mining Legislation & Transboundary Resource Treaties',
        telemetryIntegration: 'SADC Minerals Cadastre & Value Chain Ledger',
        leadDiscipline: 'Law & Economics'
      }
    ],
    specializedCurricula: [
      {
        code: 'EGS-5012',
        title: 'Spatial Economic Corridors & Southern African Trade Ports',
        level: 'Postgraduate',
        coreModules: ['Durban, Walvis Bay & Lobito Port Hinterlands', 'SADC Protocol on Transport', 'Border Congestion Metrics'],
        warmablonIntegration: 'Feeds corridor distances and port draft depths into /src/data/sadcCorridors.ts.'
      }
    ],
    apiAccessNode: '/api/universities/registry/uct-cape-town'
  },
  {
    id: 'makerere-kampala',
    name: 'Makerere University',
    acronym: 'MAK',
    established: 1922,
    jurisdiction: 'Republic of Uganda',
    region: 'Africa',
    campusLocations: ['Makerere Hill Main Campus (Kampala)'],
    chancellorOrViceChancellor: 'Vice-Chancellor & Senate',
    motto: 'We Build for the Future',
    harmonicNode: '639 Hz Great Lakes & Nile Equator Harmonics',
    faculties: [
      {
        name: 'College of Engineering, Design, Art and Technology (CEDAT)',
        departments: ['Department of Geomatics and Land Management', 'Department of Civil and Environmental Engineering'],
        appliedCurricula: ['Satellite Geodesy', 'Great Lakes Hydrographic Surveying', 'Northern Corridor Logistics']
      },
      {
        name: 'Makerere Institute of Social Research (MISR)',
        departments: ['Interdisciplinary Social Studies', 'Agrarian & Spatial Political Economy'],
        appliedCurricula: ['East African Federation Demographics', 'COMESA Free Trade Integration']
      }
    ],
    researchChairs: [
      {
        title: 'Nile Basin Transboundary Water Governance Chair',
        focusArea: 'Equatorial Nile Basin Hydrological Equilibrium & Dams',
        telemetryIntegration: 'Continental Lakes & Rivers Physical Geography Registry',
        leadDiscipline: 'Civil Engineering & Geomatics'
      }
    ],
    specializedCurricula: [
      {
        code: 'GMT-4201',
        title: 'Geomatic Infrastructure & One-Stop Border Post Architecture',
        level: 'Undergraduate',
        coreModules: ['Nakonde/Tunduma Border Modeling', 'Single-Window Customs Interfacing', 'Geodetic Datums (Arc 1950 vs WGS-84)'],
        warmablonIntegration: 'Validates border post latitude/longitude coordinates across SADC/COMESA nodes.'
      }
    ],
    apiAccessNode: '/api/universities/registry/makerere-kampala'
  }
];

export const GLOBAL_GEODESY_UNIVERSITIES_FRAMEWORK: UniversityInstitution[] = [
  {
    id: 'eth-zurich',
    name: 'ETH Zurich (Swiss Federal Institute of Technology)',
    acronym: 'ETH Zurich',
    established: 1855,
    jurisdiction: 'Swiss Confederation (ETH Board)',
    region: 'Global Earth',
    campusLocations: ['Zürich Zentrum', 'Hönggerberg Campus'],
    chancellorOrViceChancellor: 'President of ETH Zurich',
    motto: 'Excellence in Science and Technology',
    harmonicNode: '528 Hz Alpine Precision & Quantum Metrology',
    faculties: [
      {
        name: 'Department of Civil, Environmental and Geomatic Engineering (D-BAUG)',
        departments: ['Institute of Geodesy and Photogrammetry', 'Institute of Cartography and Geoinformation'],
        appliedCurricula: ['Global High-Precision Gravity Models', 'Topographic Web Atlases', 'Autonomous GNSS Position Engine']
      }
    ],
    researchChairs: [
      {
        title: 'Chair of Mathematical & Physical Geodesy',
        focusArea: 'WGS-84 Ellipsoid Precision & Continental Plate Kinematics',
        telemetryIntegration: 'Universal Geodetic Coordinate Standards (EPSG:4326)',
        leadDiscipline: 'Physical Geodesy'
      }
    ],
    specializedCurricula: [
      {
        code: 'GEO-9100',
        title: 'Planetary Cartographic Synthesis & Real-Time Geospatial Engines',
        level: 'Doctoral / Post-Doc',
        coreModules: ['Universal EPSG Projections', 'Multi-Scale Vector Tiles', 'Zero-Latency Geographic Rendering'],
        warmablonIntegration: 'Foundational mathematics powering /src/data/WARMABLONDATA.json and cartography modules.'
      }
    ],
    apiAccessNode: '/api/universities/registry/eth-zurich'
  },
  {
    id: 'mit-cambridge',
    name: 'Massachusetts Institute of Technology',
    acronym: 'MIT',
    established: 1861,
    jurisdiction: 'United States of America',
    region: 'Global Earth',
    campusLocations: ['Cambridge Campus (Massachusetts)'],
    chancellorOrViceChancellor: 'President & MIT Corporation',
    motto: 'Mens et Manus (Mind and Hand)',
    harmonicNode: '741 Hz Cybernetic Intelligence & Spatial Innovation',
    faculties: [
      {
        name: 'School of Architecture and Planning',
        departments: ['Department of Urban Studies and Planning (DUSP)', 'MIT Senseable City Lab'],
        appliedCurricula: ['Spatial Analytics for Global Cities', 'Decentralized Civic Infrastructure', 'Logistics Corridors Sensor Networks']
      },
      {
        name: 'Schwarzman College of Computing',
        departments: ['Department of Electrical Engineering and Computer Science', 'Center for Computational Science and Engineering'],
        appliedCurricula: ['Distributed Consensus & Zero-Trust Ledger Architectures', 'Real-Time Telemetry Streaming', 'Quantum-Resistant Hash Algorithms']
      }
    ],
    researchChairs: [
      {
        title: 'MIT Senseable City & Autonomous Spatial Systems Lab',
        focusArea: 'Real-Time Global Supply Chain Sensors & Planetary Urbanism',
        telemetryIntegration: 'Zero-Trust Audit Ledger & Multi-Modal Freight Stream Processing',
        leadDiscipline: 'Computer Science & Urban Informatics'
      }
    ],
    specializedCurricula: [
      {
        code: '11.S945',
        title: 'Global Commodity Corridors & Zero-Trust Distributed Ledgers',
        level: 'Postgraduate',
        coreModules: ['Append-Only SHA-256 Block Chains', 'Ephemeral RAM State Management', 'Automated Integrity Auditing'],
        warmablonIntegration: 'Direct theoretical architecture for /scripts/audit_logger.ts and /src/data/integrityLedger.ts.'
      }
    ],
    apiAccessNode: '/api/universities/registry/mit-cambridge'
  }
];

export const ALL_UNIVERSITY_FRAMEWORKS: UniversityInstitution[] = [
  ...ZAMBIAN_UNIVERSITIES_FRAMEWORK,
  ...PAN_AFRICAN_UNIVERSITIES_FRAMEWORK,
  ...GLOBAL_GEODESY_UNIVERSITIES_FRAMEWORK
];

export const ACADEMIC_DISCIPLINES_MATRIX = [
  {
    discipline: 'Comparative Geopolitical Cartography & Geodesy',
    keyInstitutions: ['UNZA Lusaka', 'CBU Kitwe', 'ETH Zurich', 'Makerere University'],
    coreCompetencies: [
      'WGS-84 Coordinate Mathematical Projections',
      '236 Sovereign State Toponymy & Boundary Analysis',
      'Subnational District Gazetting (116 Zambian Districts)',
      'High-Speed WebGL / Canvas Geospatial Visualization'
    ]
  },
  {
    discipline: 'Central Bank Monetary Telemetry & Financial Engineering',
    keyInstitutions: ['Bank of Zambia Academic Linkage', 'UNZA Economics', 'UCT Financial Math', 'AUST Abuja'],
    coreCompetencies: [
      '198+ Central Bank Policy Rate Telemetry',
      'ISO 4217 Currency Math & Commodity Parity (LME Copper, Gold, Bullion)',
      'SADC-RTGS, COMESA REPSS & AfCFTA PAPSS Payment Rail Interfacing',
      'Harmonic Frequency Acoustic Tuning for Monetary Stability'
    ]
  },
  {
    discipline: 'Cross-Border Supply Chain & Trade Corridor Logistics',
    keyInstitutions: ['CBU School of Mines', 'UCT African Centre for Cities', 'PAU / African Union', 'MIT Senseable City'],
    coreCompetencies: [
      '6 SADC Multi-Modal Corridor Modeling (Lobito, Walvis Bay, TAZARA, Durban, Beira, Nacala)',
      'One-Stop Border Post (OSBP) Telemetry (Kazungula, Chirundu, Kasumbalesa, Nakonde)',
      'AfCFTA Rules of Origin 35%-40% Value-Addition Verification',
      'ASYCUDA World Single-Window Customs EDIFACT/XML Gateways'
    ]
  },
  {
    discipline: 'Applied Cryptography, Zero-Trust Architecture & Resilience',
    keyInstitutions: ['CBU School of ICT', 'MIT Schwarzman College', 'UNZA Computer Science', 'ETH Zurich'],
    coreCompetencies: [
      'Append-Only SHA-256 Merkle Block Chaining',
      'Service Worker Lifecycle & Cache Purge Protocols (Resurrection Watchdog)',
      'Zero-Adware, Zero-Tracking Ephemeral RAM Execution',
      'Solfeggio Acoustic Harmonic Calibration (174 Hz - 963 Hz)'
    ]
  }
];
