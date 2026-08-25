export interface LogEntry {
  id: string;
  timestamp: string;
  message: string;
  category: 'system' | 'synthesis' | 'frequency' | 'ancestral' | 'user';
}

export interface NodeData {
  id: string;
  label: string;
  description: string;
}

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

export interface ResurrectionReport {
  success: boolean;
  unregisteredWorkers: number;
  clearedCacheKeys: string[];
  timestamp: string;
  status: string;
  details: string;
}

