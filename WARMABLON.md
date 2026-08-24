# WARMABLON: Planetary Administrative Geography & Geopolitical Demographics
**Universal Subject Curriculum & Reference Specification • Version 3.0.0**

---

## 1. Subject Classification: What Subject Does WARMABLON Suit?

**Primary Academic Subject**: **Comparative Geopolitical Cartography & Administrative Demographics** (Interdisciplinary *Geopolitics, Global Civics, and Subnational Geography*).

### Why This Subject Exists:
In traditional educational and governmental systems, geography data is fragmented: population statistics sit in census bureaus, calling codes in telecommunication registries, currency standards in banking institutions, and municipal districts in regional government gazettes.

**WARMABLON** unifies these streams into a **single hierarchical subject matrix** structured for learners, researchers, and global citizens (from 10-year-olds to policy scholars).

```
┌────────────────────────────────────────────────────────┐
│                      WARMABLON                         │
│   Planetary Administrative Geography & Demographics    │
└──────────────────────────┬─────────────────────────────┘
                           │
         ┌─────────────────┴─────────────────┐
         ▼                                   ▼
┌──────────────────┐               ┌───────────────────┐
│ GEOPOLITICAL     │               │ ADMINISTRATIVE    │
│ IDENTIFIERS      │               │ HIERARCHY         │
├──────────────────┤               ├───────────────────┤
│ • Total Flags    │               │ 1. Continents     │
│ • Population     │               │ 2. Nations (236)  │
│ • Land Area      │               │ 3. Provinces      │
│ • Currency Codes │               │ 4. Districts      │
│ • Calling Codes  │               └───────────────────┘
└──────────────────┘
```

---

## 2. The 9 Canonical Pillars of WARMABLON Data

Every entity in the WARMABLON system adheres strictly to the **9 Core Data Pillars**:

| Pillar # | Data Field | Standard / Format | Scope / Function |
|:---|:---|:---|:---|
| **1** | **Continents** | 7 Continents + Global Island Territories | Primary planetary continental quadrants (`af`, `as`, `eu`, `na`, `sa`, `oc`, `an`, `non-sovereign`) |
| **2** | **Nations** | 236 Sovereign States & Autonomous Territories | Canonical UN-recognized member states and global self-governing territories |
| **3** | **Provinces / States** | Subnational Level 1 Administrative Units | States, Provinces, Governorates, Regions, Prefectures, and Departments |
| **4** | **Districts / Municipalities** | Subnational Level 2 Administrative Units | Municipalities, LGAs, Districts, Counties, Cantons, and Constituencies |
| **5** | **Total Flags** | ISO 3166-1 Alpha-2 / Unicode Emoji & Heraldry | Official sovereign flag emblems for instant visual recognition |
| **6** | **Estimated Population** | Headcount / Census Estimates | Real-world demographic scale of humans living in each sector |
| **7** | **Land Area** | Metric ($km^2$) & Imperial ($sq\ mi$) | Physical territorial surface area of each nation and continent |
| **8** | **Currency Codes** | ISO 4217 Currency Standard | Official legal tender code (e.g. `ZMW`, `USD`, `EUR`, `JPY`, `GBP`), name, and symbol |
| **9** | **Phone Number Codes** | ITU-T E.164 Telecommunication Standard | International direct dialing (IDD) country code prefixes (e.g. `+260`, `+1`, `+44`, `+81`) |

---

## 3. Structural Data Mapping & Source of Truth

The codebase binds this subject directly to clean, modular TypeScript registries:

### A. Core Architecture File Mapping
1. **Master Registry**: `/src/data/WARMABLONDATA.json` — The universal blueprint containing continents, populations, land areas, and sovereign rosters.
2. **Nations & Flags**: `/src/data/nations.ts` & `/src/flags.ts` — Complete 236-nation taxonomy with unicode national flags.
3. **Demographics & Land Area**: `/src/data/nationDemographics.ts` — Exact population, land area ($km^2$ and $sq\ mi$), capitals, and time zones.
4. **Subnational Provinces & Districts**: `/src/provinces.ts` & `/src/data/zambiaDistricts.ts` — Deep administrative hierarchies mapping every country to its provinces and every province to its constituent districts.
5. **Currencies & Calling Codes**: `/src/data/nationFinancials.ts` — ISO 4217 currency specifications, conversion rates, and ITU E.164 dial codes.
6. **Planetary Quadrants**: `/src/data/continents.ts` — Continental physical geography, peak elevations, and calling code series.

---

## 4. Administrative Drilldown Example

The power of WARMABLON is demonstrated by seamless drilldown from planetary scale to local municipal districts:

```
Planetary Quadrant: Africa (54 Nations • 1.46 Billion People • 30.37M km²)
  └── Sovereign Nation: Zambia (Flag: 🇿🇲 • Capital: Lusaka • Dial: +260 • Currency: ZMW • Pop: 20.57M • Area: 752,618 km²)
        └── Province (Level 1): Lusaka Province
              └── Districts (Level 2): Lusaka, Kafue, Chongwe, Chilanga, Luangwa, Rufunsa, Shibuyunji
```

---

## 5. Subject Learning Outcomes (Curriculum Matrix)

Students and analysts studying WARMABLON master:
1. **Cartographic Literacy**: Instant recognition of all sovereign flags, capitals, and continental placements.
2. **Demographic Proportions**: Understanding planetary population densities and comparative land areas.
3. **Global Economic Logistics**: Recognizing world currency codes and calculating international purchasing power.
4. **Telecommunications Routing**: Understanding how international telephony codes (ITU-T E.164) connect planetary communications.
5. **Subnational Governance**: Analyzing how central sovereign governments delegate administration to regional provinces and local municipal districts.

---

*WARMABLON System Specification • Built for clarity, speed, and multi-generational educational excellence.*
