import { MASTER_FREQUENCY_REGISTRY, FrequencyNodeSpec, getFrequencySpec } from '../data/frequencies';

export interface HarmonicFloatState {
  dx: number; // Horizontal floating micro-displacement in pixels
  dy: number; // Vertical floating micro-displacement in pixels
  scale: number; // Organic breathing scale factor (e.g., 0.98 to 1.02)
  opacityGlow: number; // Subtle luminescence pulsation (0.8 to 1.0)
  orbitalTiltDeg: number; // Subtle tilt angle in degrees
}

export interface ResonanceBridge {
  sourceId: string;
  targetId: string;
  sourceFreq: number;
  targetFreq: number;
  harmonyType: 'octave' | 'fifth' | 'fourth' | 'solfeggio_pair' | 'root_emanation';
  strength: number; // 0.0 to 1.0
}

// Calculates real-time frequency-driven harmonic floating physics.
// Grounded in mathematical wave equations:
// dx(t) = A_x * sin(2π * f_float * t + phi) + B_x * sin(2π * f_sub * t)
// dy(t) = A_y * cos(2π * f_float * t + phi) + B_y * sin(2π * f_micro * t)
export function calculateHarmonicFloat(
  id: string,
  timeSeconds: number,
  indexOffset: number = 0
): HarmonicFloatState {
  const spec = getFrequencySpec(id);
  const freq = spec.frequency;
  
  // Normalized harmonic frequency factor (Alkebulan 432 Hz = 1.0)
  const normFactor = freq / 432.0;
  
  // Phase offset ensuring unique yet correlated orbital trajectory
  const phase = (indexOffset * (Math.PI / 4.0)) + (freq * 0.003);
  
  // Primary float frequency (derived from spec period)
  const fPrimary = 1.0 / spec.orbitalFloatPeriodSeconds;
  
  // Secondary harmonic micro-frequency
  const fSecondary = fPrimary * (1.61803398875); // Golden ratio harmonic modulation
  
  // Micro-floating Lissajous displacement
  const amp = spec.floatAmplitudePx;
  const dx = (amp * Math.sin((2.0 * Math.PI * fPrimary * timeSeconds) + phase)) +
             (amp * 0.35 * Math.sin((2.0 * Math.PI * fSecondary * timeSeconds) + (phase * 1.5)));
             
  const dy = (amp * 1.15 * Math.cos((2.0 * Math.PI * fPrimary * timeSeconds) + phase)) +
             (amp * 0.45 * Math.sin((2.0 * Math.PI * (fPrimary * 2.0) * timeSeconds) + phase));

  // Organic breathing scale: higher frequency nodes breathe at slightly faster micro-cycles
  const breathingAmp = 0.022;
  const scale = 1.0 + (breathingAmp * Math.sin((2.0 * Math.PI * spec.breathingRateHz * timeSeconds) + phase));

  // Subtle luminescence glow pulse
  const opacityGlow = 0.85 + (0.15 * Math.sin((2.0 * Math.PI * (spec.breathingRateHz * 0.75) * timeSeconds) + phase));

  // Micro tilt (human eye intelligence perception)
  const orbitalTiltDeg = (1.8 * Math.sin((2.0 * Math.PI * (fPrimary * 0.5) * timeSeconds) + phase)) * normFactor;

  return {
    dx,
    dy,
    scale,
    opacityGlow,
    orbitalTiltDeg
  };
}

// Determines harmonic resonance bridges between active nodes.
export function getHarmonicResonances(activeIds: string[]): ResonanceBridge[] {
  const bridges: ResonanceBridge[] = [];
  
  for (let i = 0; i < activeIds.length; i++) {
    for (let j = i + 1; j < activeIds.length; j++) {
      const idA = activeIds[i];
      const idB = activeIds[j];
      const specA = getFrequencySpec(idA);
      const specB = getFrequencySpec(idB);
      
      const ratio = Math.max(specA.frequency, specB.frequency) / Math.min(specA.frequency, specB.frequency);
      
      // Root Emanation: Alkebulan 432 Hz resonates with all nodes
      if (idA === 'af' || idB === 'af') {
        bridges.push({
          sourceId: idA,
          targetId: idB,
          sourceFreq: specA.frequency,
          targetFreq: specB.frequency,
          harmonyType: 'root_emanation',
          strength: 0.75
        });
      }
      // Unison / Sibling Frequency (e.g. 528 Hz Europe and 528 Hz Non-Sovereign)
      else if (specA.frequency === specB.frequency) {
        bridges.push({
          sourceId: idA,
          targetId: idB,
          sourceFreq: specA.frequency,
          targetFreq: specB.frequency,
          harmonyType: 'solfeggio_pair',
          strength: 0.95
        });
      }
      // Solar Crown Alignment: True Sun 963 Hz resonates with Oceania 963 Hz
      else if ((idA === 'true-sun' && idB === 'oc') || (idB === 'true-sun' && idA === 'oc')) {
        bridges.push({
          sourceId: idA,
          targetId: idB,
          sourceFreq: specA.frequency,
          targetFreq: specB.frequency,
          harmonyType: 'solfeggio_pair',
          strength: 0.9
        });
      }
      // Solfeggio Triad / Golden Ratio Harmonics
      else if (Math.abs(ratio - 1.5) < 0.08 || Math.abs(ratio - 1.333) < 0.08) {
        bridges.push({
          sourceId: idA,
          targetId: idB,
          sourceFreq: specA.frequency,
          targetFreq: specB.frequency,
          harmonyType: 'fifth',
          strength: 0.65
        });
      }
    }
  }
  
  return bridges;
}

// Web Audio Engine: Synthesizes high-fidelity harmonic tone with fundamental + subtle overtone.
let sharedAudioCtx: AudioContext | null = null;
let sharedAnalyserNode: AnalyserNode | null = null;

export function getSharedAudioContext(): AudioContext | null {
  if (typeof window === 'undefined') return null;
  try {
    const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
    if (!sharedAudioCtx) {
      sharedAudioCtx = new AudioContextClass();
    }
    if (sharedAudioCtx.state === 'suspended') {
      sharedAudioCtx.resume();
    }
    if (!sharedAnalyserNode && sharedAudioCtx) {
      sharedAnalyserNode = sharedAudioCtx.createAnalyser();
      sharedAnalyserNode.fftSize = 64;
      sharedAnalyserNode.smoothingTimeConstant = 0.8;
      sharedAnalyserNode.connect(sharedAudioCtx.destination);
    }
    return sharedAudioCtx;
  } catch (e) {
    return null;
  }
}

export function getSharedAnalyser(): AnalyserNode | null {
  if (!sharedAnalyserNode) {
    getSharedAudioContext();
  }
  return sharedAnalyserNode;
}

export function playHarmonicSynthesisTone(
  frequency: number,
  durationSeconds: number = 2.8,
  volume: number = 0.18
): () => void {
  const ctx = getSharedAudioContext();
  if (!ctx) return () => {};

  try {
    const now = ctx.currentTime;
    
    // Fundamental Sine Oscillator
    const osc1 = ctx.createOscillator();
    osc1.type = 'sine';
    osc1.frequency.setValueAtTime(frequency, now);

    // Warm Second Harmonic Overtone (2x freq with gentle modulation)
    const osc2 = ctx.createOscillator();
    osc2.type = 'sine';
    osc2.frequency.setValueAtTime(frequency * 1.5, now); // Perfect Fifth Overtone

    // Master Gain & Envelope Shaping (Zero-click ADSR curve)
    const masterGain = ctx.createGain();
    masterGain.gain.setValueAtTime(0.0001, now);
    // Attack (smooth 0.12s rise)
    masterGain.gain.exponentialRampToValueAtTime(volume, now + 0.12);
    // Sustain and natural decay
    masterGain.gain.exponentialRampToValueAtTime(volume * 0.65, now + 0.8);
    // Release
    masterGain.gain.exponentialRampToValueAtTime(0.00001, now + durationSeconds);

    // Secondary overtone gain
    const subGain = ctx.createGain();
    subGain.gain.setValueAtTime(volume * 0.35, now);

    // Filter to warm the higher harmonics
    const biquad = ctx.createBiquadFilter();
    biquad.type = 'lowpass';
    biquad.frequency.setValueAtTime(Math.min(frequency * 4.0, 3200), now);

    // Routing
    osc1.connect(masterGain);
    osc2.connect(subGain);
    subGain.connect(masterGain);
    masterGain.connect(biquad);

    if (sharedAnalyserNode) {
      biquad.connect(sharedAnalyserNode);
    } else {
      biquad.connect(ctx.destination);
    }

    // Start & Stop
    osc1.start(now);
    osc2.start(now);
    osc1.stop(now + durationSeconds);
    osc2.stop(now + durationSeconds);

    return () => {
      try {
        masterGain.gain.exponentialRampToValueAtTime(0.00001, ctx.currentTime + 0.08);
        setTimeout(() => {
          try {
            osc1.stop();
            osc2.stop();
            osc1.disconnect();
            osc2.disconnect();
          } catch (e) {}
        }, 100);
      } catch (err) {}
    };
  } catch (e) {
    return () => {};
  }
}

// Synthesizes the Kwacha Dawn Outward Emanation Harmonic Sequence:
// Core: Kwacha Root (432 Hz - The Dawn Awakening)
// Outward Ring 1: SADC / Southern Africa (528 Hz - DNA Harmony)
// Outward Ring 2: Continental & Global Sovereign Earth Matrix (963 Hz - True Sun Crown)
export function playKwachaDawnHarmonicEmanation(
  volume: number = 0.22,
  onStepChange?: (step: 'kwacha_root' | 'sadc_expansion' | 'planetary_crown') => void
): () => void {
  const ctx = getSharedAudioContext();
  if (!ctx) return () => {};

  const cleanups: Array<() => void> = [];

  // Step 1: Kwacha Core (432 Hz)
  onStepChange?.('kwacha_root');
  const stop1 = playHarmonicSynthesisTone(432, 4.0, volume);
  cleanups.push(stop1);

  // Step 2: SADC Ring 1 (+26x Expansion at 528 Hz) after 700ms
  const t1 = setTimeout(() => {
    onStepChange?.('sadc_expansion');
    const stop2 = playHarmonicSynthesisTone(528, 3.5, volume * 0.85);
    cleanups.push(stop2);
  }, 700);

  // Step 3: Planetary Crown Outward Radiation (963 Hz) after 1400ms
  const t2 = setTimeout(() => {
    onStepChange?.('planetary_crown');
    const stop3 = playHarmonicSynthesisTone(963, 3.0, volume * 0.7);
    cleanups.push(stop3);
  }, 1400);

  return () => {
    clearTimeout(t1);
    clearTimeout(t2);
    cleanups.forEach(fn => fn());
  };
}
