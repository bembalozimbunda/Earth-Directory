import warmablonData from './WARMABLONDATA.json';

export interface HierarchyNode {
  level: string;
  name: string;
  children?: HierarchyNode[];
}

export interface ContinentGeography {
  landArea: string;
  percentEarthLand: string;
  highestPoint: {
    name: string;
    elevation: string;
    location: string;
  };
  lowestPoint: {
    name: string;
    elevation: string;
    location: string;
  };
  longestRiver: {
    name: string;
    length: string;
    outflow: string;
  };
  largestLake: {
    name: string;
    area: string;
    type: string;
  };
  majorMountainRanges: string[];
  climateBiomes: string[];
  borderingOceans: string[];
  extremePoints: {
    north: string;
    south: string;
    east: string;
    west: string;
  };
  timezoneSpan: string;
  callingCodeSeries: string;
  majorAirportHubs: string[];
}

export interface ContinentData {
  id: string;
  name: string;
  sub: string;
  attachedVoidName: string;
  voidKey: string;
  securityKey?: string;
  status: string;
  frequency: number;
  flag: string;
  population: string;
  leaders: string[];
  time: string;
  nrcData: string;
  countries: string[];
  geography: ContinentGeography;
}

// Canonical dataset derived from WARMABLONDATA.json
export const CONTINENTS: ContinentData[] = warmablonData.continents as ContinentData[];
export const WARMABLON_DATA = warmablonData;
