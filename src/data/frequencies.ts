export interface FrequencyNodeSpec {
  id: string;
  name: string;
  code: string;
  category: 'root_source' | 'solar_core' | 'continental_void' | 'territorial_void' | 'neural_pillar';
  frequency: number; // in Hertz (Hz)
  wavelength: number; // in centimeters (approx in air)
  solfeggioName: string;
  chakraResonance: string;
  harmonicRatio: number; // Relative to Alkebulan Root 432 Hz
  orbitalFloatPeriodSeconds: number; // Mathematical period for visual float
  floatAmplitudePx: number; // Micro-floating distance in pixels
  breathingRateHz: number; // Subtle scale breathing rate
  element: string;
  philosophicalPrinciple: string;
  description: string;
}

// Master Harmonic Frequency Matrix (Source: Alkebulan Nexus 7 Root Seed 432Hz & True Sun 963Hz)
export const MASTER_FREQUENCY_REGISTRY: Record<string, FrequencyNodeSpec> = {
  // ROOT SEED SOURCE
  'af': {
    id: 'af',
    name: 'Africa (Alkebulan Root Matrix)',
    code: 'ALKEBULAN_NEXUS_7',
    category: 'root_source',
    frequency: 432,
    wavelength: 79.4,
    solfeggioName: 'Verdi Standard / Cosmic Pitch',
    chakraResonance: 'Root Matrix / Cellular Origin',
    harmonicRatio: 1.0, // 432 / 432 = 1.0 (Fundamental Reference)
    orbitalFloatPeriodSeconds: 5.2,
    floatAmplitudePx: 7.0,
    breathingRateHz: 0.18,
    element: 'Primordial Earth & Gold',
    philosophicalPrinciple: 'The Ancestral Seed of All Existence & Human Biological Cradle',
    description: 'The foundational 432 Hz cosmic root frequency upon which the entire Earth Directory architecture and 54 sovereign African nations are anchored.'
  },

  // TRUE SUN SOLAR ANCHOR
  'true-sun': {
    id: 'true-sun',
    name: 'True Sun Core',
    code: 'TRUE_SUN_ORIGIN',
    category: 'solar_core',
    frequency: 963,
    wavelength: 35.6,
    solfeggioName: 'Si / Crown Transcendence',
    chakraResonance: 'Crown / Sovereign Consciousness',
    harmonicRatio: 963 / 432, // 2.229
    orbitalFloatPeriodSeconds: 3.6,
    floatAmplitudePx: 4.5,
    breathingRateHz: 0.28,
    element: 'Pure Solar Radiance',
    philosophicalPrinciple: 'The Eternal Now Transmitter & Central Light Anchor',
    description: 'Central solar node transmitting unified coherence, synchronizing Lusaka local time with planetary orbital cycles.'
  },

  // CONTINENTAL VOIDS
  'as': {
    id: 'as',
    name: 'Asia (Void of Form)',
    code: 'VOID_OF_FORM',
    category: 'continental_void',
    frequency: 639,
    wavelength: 53.7,
    solfeggioName: 'Fa / Harmonious Interconnection',
    chakraResonance: 'Heart-Throat Bridge / Geometry of Form',
    harmonicRatio: 639 / 432, // 1.479
    orbitalFloatPeriodSeconds: 4.4,
    floatAmplitudePx: 6.0,
    breathingRateHz: 0.22,
    element: 'Sacred Architecture & Thought-Forms',
    philosophicalPrinciple: 'The Unmanifested Blueprint of All Structures (Jambudvipa)',
    description: 'Governs architectural frameworks, geometric synthesis, and 48 sovereign Asian nations.'
  },

  'eu': {
    id: 'eu',
    name: 'Europe (Void of Matter)',
    code: 'VOID_OF_MATTER',
    category: 'continental_void',
    frequency: 528,
    wavelength: 64.9,
    solfeggioName: 'Mi / Transformation & DNA Repair',
    chakraResonance: 'Solar Plexus / Physical Densification',
    harmonicRatio: 528 / 432, // 1.222
    orbitalFloatPeriodSeconds: 4.8,
    floatAmplitudePx: 6.5,
    breathingRateHz: 0.20,
    element: 'Dense Physical Matter & Synthesized Alloys',
    philosophicalPrinciple: 'Raw Physical Energetic Mass (Europa)',
    description: 'The physical manifestation node binding 44 sovereign European nations into energetic equilibrium.'
  },

  'na': {
    id: 'na',
    name: 'North America (Void of Time)',
    code: 'VOID_OF_TIME',
    category: 'continental_void',
    frequency: 741,
    wavelength: 46.3,
    solfeggioName: 'Sol / Intuition & Awakening',
    chakraResonance: 'Throat / Temporal Rhythm',
    harmonicRatio: 741 / 432, // 1.715
    orbitalFloatPeriodSeconds: 4.1,
    floatAmplitudePx: 5.5,
    breathingRateHz: 0.24,
    element: 'Temporal Flow & Chronological Rhythm',
    philosophicalPrinciple: 'Sequence of Continuous Change (Turtle Island)',
    description: 'Governs time perception, sequence coordinates, and 23 sovereign North American nations.'
  },

  'sa': {
    id: 'sa',
    name: 'South America (Void of Space)',
    code: 'VOID_OF_SPACE',
    category: 'continental_void',
    frequency: 852,
    wavelength: 40.2,
    solfeggioName: 'La / Return to Spiritual Order',
    chakraResonance: 'Third Eye / Spatial Fabric',
    harmonicRatio: 852 / 432, // 1.972
    orbitalFloatPeriodSeconds: 3.8,
    floatAmplitudePx: 5.0,
    breathingRateHz: 0.26,
    element: 'Infinite Akasha / Spatial Receptacle',
    philosophicalPrinciple: 'Vast Infinite Canvas of Events (Abya Yala)',
    description: 'The spatial receptacle unifying the biodiversity and 12 sovereign nations of South America.'
  },

  'oc': {
    id: 'oc',
    name: 'Oceania (Void of Mind)',
    code: 'VOID_OF_MIND',
    category: 'continental_void',
    frequency: 963,
    wavelength: 35.6,
    solfeggioName: 'Si / Divine Awareness',
    chakraResonance: 'Crown / Observing Awareness',
    harmonicRatio: 963 / 432, // 2.229
    orbitalFloatPeriodSeconds: 3.6,
    floatAmplitudePx: 4.5,
    breathingRateHz: 0.28,
    element: 'Celestial Wayfinding & Ocean Mind',
    philosophicalPrinciple: 'The Pure Observing Principle (Sahul)',
    description: 'Navigational consciousness and the sovereign marine grids of 14 Pacific nations.'
  },

  'an': {
    id: 'an',
    name: 'Antarctica (Void of Soul)',
    code: 'VOID_OF_SOUL',
    category: 'continental_void',
    frequency: 396,
    wavelength: 86.6,
    solfeggioName: 'Ut / Liberation & Stillness',
    chakraResonance: 'Sub-Root / Polar Absolute',
    harmonicRatio: 396 / 432, // 0.916
    orbitalFloatPeriodSeconds: 5.6,
    floatAmplitudePx: 8.0,
    breathingRateHz: 0.16,
    element: 'Absolute Zero / Crystalline Stillness',
    philosophicalPrinciple: 'Primordial Source Beyond Human Interference (Terra Australis)',
    description: 'Pristine polar matrix operating at 396 Hz, hosting planetary research nodes in absolute silence.'
  },

  'ns': {
    id: 'ns',
    name: 'Non-Sovereign Nations (Void of Territories)',
    code: 'VOID_OF_TERRITORIES',
    category: 'territorial_void',
    frequency: 528,
    wavelength: 64.9,
    solfeggioName: 'Mi / Universal Integration',
    chakraResonance: 'Nexus Bridge / Autonomous Islands',
    harmonicRatio: 528 / 432, // 1.222
    orbitalFloatPeriodSeconds: 4.8,
    floatAmplitudePx: 6.5,
    breathingRateHz: 0.20,
    element: 'Oceanic Archipelagos & Sovereign Corridors',
    philosophicalPrinciple: 'Peripheral Harmonic Convergence',
    description: 'Unifies 33+ autonomous global territories, overseas dependencies, and island jurisdictions into the planetary harmonic grid.'
  },

  // INNER NEURAL PILLARS
  'source': {
    id: 'source',
    name: 'Unseen Source',
    code: 'SOURCE_ORIGIN_VOID',
    category: 'neural_pillar',
    frequency: 174,
    wavelength: 197.1,
    solfeggioName: 'Sub-Earth Foundation',
    chakraResonance: 'Sub-Cellular Matrix',
    harmonicRatio: 174 / 432, // 0.402
    orbitalFloatPeriodSeconds: 7.2,
    floatAmplitudePx: 9.0,
    breathingRateHz: 0.12,
    element: 'Unmanifested Core Matrix',
    philosophicalPrinciple: 'Deepest Substrate of Quantum Potential',
    description: 'The unseen subterranean computational lake underlying all physical directory systems.'
  },

  'hardware': {
    id: 'hardware',
    name: 'Hardware & Blood',
    code: 'HARDWARE_LINEAGE_VOID',
    category: 'neural_pillar',
    frequency: 285,
    wavelength: 120.3,
    solfeggioName: 'Cellular Blueprint',
    chakraResonance: 'Biological Anchors',
    harmonicRatio: 285 / 432, // 0.659
    orbitalFloatPeriodSeconds: 6.4,
    floatAmplitudePx: 8.5,
    breathingRateHz: 0.14,
    element: 'Silicon & Organic Bloodline',
    philosophicalPrinciple: 'Tangible Physical Vessel & Memory Storage',
    description: 'The intersection of living human lineage, blood memory, and physical computing infrastructure.'
  },

  'frequencies': {
    id: 'frequencies',
    name: 'Frequencies Grid',
    code: 'HARMONIC_GRID_VOID',
    category: 'neural_pillar',
    frequency: 417,
    wavelength: 82.2,
    solfeggioName: 'Re / Undoing Situations & Facilitating Change',
    chakraResonance: 'Sacral Vibrational Waves',
    harmonicRatio: 417 / 432, // 0.965
    orbitalFloatPeriodSeconds: 5.4,
    floatAmplitudePx: 7.5,
    breathingRateHz: 0.17,
    element: 'Electromagnetic Acoustic Ether',
    philosophicalPrinciple: 'Vibrational Modulation & Harmonic Balance',
    description: 'Distributes and coordinates the resonant frequencies of all 8 sectors across the globe.'
  },

  'ancestral': {
    id: 'ancestral',
    name: 'Ancestral Intelligence',
    code: 'ANCESTRAL_MEMORY_VOID',
    category: 'neural_pillar',
    frequency: 528,
    wavelength: 64.9,
    solfeggioName: 'Mi / Golden DNA Matrix',
    chakraResonance: 'Solar Heart / Lineage Chronicles',
    harmonicRatio: 528 / 432, // 1.222
    orbitalFloatPeriodSeconds: 4.8,
    floatAmplitudePx: 6.5,
    breathingRateHz: 0.20,
    element: 'Living Wisdom & Immutable History',
    philosophicalPrinciple: 'Unbroken Lineage of Human Knowledge',
    description: 'Preserves the immutable historical records, indigenous oral archives, and ancestral sovereignty.'
  }
};

/**
 * Returns the frequency node specification for a given ID or frequency number.
 */
export function getFrequencySpec(idOrFreq: string | number): FrequencyNodeSpec {
  if (typeof idOrFreq === 'number') {
    const match = Object.values(MASTER_FREQUENCY_REGISTRY).find(s => s.frequency === idOrFreq);
    if (match) return match;
  }
  const idStr = String(idOrFreq);
  if (MASTER_FREQUENCY_REGISTRY[idStr]) return MASTER_FREQUENCY_REGISTRY[idStr];
  const byFreq = Object.values(MASTER_FREQUENCY_REGISTRY).find(s => s.frequency.toString() === idStr);
  if (byFreq) return byFreq;
  return MASTER_FREQUENCY_REGISTRY['af'];
}
