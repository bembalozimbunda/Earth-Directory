import React, { useState, useEffect } from 'react';
import { Clock, MapPin, Radio, Waves } from 'lucide-react';

/**
 * Internal Generative Art Component for "Eternal Now in Motion"
 * Handcrafted geometric vector system harmonizing:
 * - Blue outer celestial orbital ring (Eternal)
 * - Green intermediate harmonic trinity polygon (Now In)
 * - Red kinetic core pulsar (Motion)
 */
function EternalNowInternalArt() {
  return (
    <div className="relative w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center select-none pointer-events-none">
      {/* Outer Blue Ring & Celestial Meridian - Eternal */}
      <svg
        className="absolute inset-0 w-full h-full text-blue-400"
        viewBox="0 0 36 36"
      >
        <circle cx="18" cy="18" r="16" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" opacity="0.8" />
        <line x1="18" y1="0" x2="18" y2="36" stroke="currentColor" strokeWidth="0.5" strokeDasharray="1 3" opacity="0.4" />
        <line x1="0" y1="18" x2="36" y2="18" stroke="currentColor" strokeWidth="0.5" strokeDasharray="1 3" opacity="0.4" />
        <circle cx="18" cy="2" r="1.5" fill="#60a5fa" />
        <circle cx="18" cy="34" r="1.5" fill="#60a5fa" />
        <circle cx="2" cy="18" r="1.5" fill="#38bdf8" />
        <circle cx="34" cy="18" r="1.5" fill="#38bdf8" />
      </svg>

      {/* Intermediate Green Harmonic Lattice - Now In */}
      <svg
        className="absolute inset-1 w-[calc(100%-8px)] h-[calc(100%-8px)] text-emerald-400"
        viewBox="0 0 28 28"
      >
        <polygon points="14,2 25,22 3,22" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.75" />
        <polygon points="14,26 3,6 25,6" fill="none" stroke="currentColor" strokeWidth="0.75" strokeDasharray="2 2" opacity="0.5" />
        <circle cx="14" cy="14" r="9" fill="none" stroke="#34d399" strokeWidth="0.75" strokeDasharray="2 2" opacity="0.6" />
        <circle cx="14" cy="2" r="1.2" fill="#4ade80" />
        <circle cx="25" cy="22" r="1.2" fill="#10b981" />
        <circle cx="3" cy="22" r="1.2" fill="#10b981" />
      </svg>

      {/* Inner Red Core Pulsar - Motion */}
      <div
        className="relative w-3.5 h-3.5 rounded-full bg-gradient-to-tr from-red-600 via-rose-500 to-red-400 flex items-center justify-center shadow-[0_0_14px_rgba(239,68,68,0.85)] z-10"
      >
        <div className="w-1.5 h-1.5 rounded-full bg-white shadow-sm" />
      </div>

      {/* Subtle Radiant Wave Ring */}
      <div
        className="absolute inset-0 rounded-full border border-red-500/30"
      />
    </div>
  );
}

export function EternalNowMotionHeader() {
  const [currentTime, setCurrentTime] = useState('');
  const [syncPhase, setSyncPhase] = useState<'locked' | 'harmonizing' | 'transmitting'>('locked');

  useEffect(() => {
    const update = () => {
      const now = new Date();
      const timeStr = now.toISOString().substring(11, 19);
      setCurrentTime(timeStr);
    };

    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  // Subtle phase shifter
  useEffect(() => {
    const phases: ('locked' | 'harmonizing' | 'transmitting')[] = ['locked', 'harmonizing', 'transmitting'];
    let idx = 0;
    const pTimer = setInterval(() => {
      idx = (idx + 1) % phases.length;
      setSyncPhase(phases[idx]);
    }, 4000);
    return () => clearInterval(pTimer);
  }, []);

  return (
    <div
      className="mb-3 flex flex-col items-center justify-center relative z-20 pointer-events-none select-none"
    >
      {/* Permanent Header Badge - High-Contrast Tri-Harmonic Kinetic Anchor */}
      <div className="relative flex items-center gap-3 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-gradient-to-r from-zinc-950 via-zinc-900 to-zinc-950 border border-zinc-800/90 shadow-[0_0_35px_rgba(0,0,0,0.85)] backdrop-blur-xl">
        {/* Subtle Tri-Color Border Shimmer (Blue-Green-Red) */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/15 via-emerald-500/15 to-red-500/15 pointer-events-none" />

        {/* Custom Internal Art for Eternal Now in Motion */}
        <EternalNowInternalArt />

        {/* Tri-Color Typography: ETERNAL (Blue), NOW IN (Green), MOTION (Red) */}
        <div className="flex items-center gap-2.5 relative z-10">
          <div className="text-[11px] sm:text-xs font-mono font-bold tracking-[0.25em] sm:tracking-[0.3em] uppercase flex items-center gap-1.5">
            <span className="text-blue-400 drop-shadow-[0_0_8px_rgba(96,165,250,0.6)]">
              Eternal
            </span>
            <span className="text-emerald-400 drop-shadow-[0_0_8px_rgba(52,211,153,0.6)]">
              Now In
            </span>
            <span className="text-red-500 drop-shadow-[0_0_8px_rgba(239,68,68,0.65)]">
              Motion
            </span>
          </div>

          <span className="text-zinc-700 font-mono text-[10px] hidden sm:inline">•</span>

          {/* Live Synchronized Universal Time */}
          <div className="hidden sm:flex items-center gap-1.5 text-[10px] font-mono text-emerald-300 bg-emerald-950/60 px-2.5 py-0.5 rounded-full border border-emerald-700/50 shadow-inner">
            <Clock className="w-3 h-3 text-emerald-400" />
            <span>{currentTime || '12:00:00'} UTC</span>
          </div>

          <span className="text-zinc-700 font-mono text-[10px] hidden md:inline">•</span>

          {/* 963 Hz Harmonic Frequency Indicator */}
          <div className="hidden md:flex items-center gap-1.5 text-[10px] font-mono text-amber-300 bg-amber-950/60 px-2.5 py-0.5 rounded-full border border-amber-700/50 shadow-inner">
            <Radio className="w-3 h-3 text-amber-400" />
            <span>963 Hz Apex</span>
          </div>
        </div>
      </div>

      {/* Micro Telemetry Bar Below Badge */}
      <div className="mt-2 flex items-center gap-2.5 text-[9px] font-mono text-zinc-500 tracking-widest uppercase">
        <span className="text-blue-400/90 flex items-center gap-1 font-medium">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shadow-[0_0_6px_rgba(96,165,250,0.8)]" />
          Celestial Frame
        </span>
        <span className="text-zinc-700">•</span>
        <span className="text-emerald-400/90 flex items-center gap-1 font-medium">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.8)]" />
          Planetary Meridian
        </span>
        <span className="text-zinc-700">•</span>
        <span className="text-red-400/90 flex items-center gap-1 font-medium">
          <span className="w-1.5 h-1.5 rounded-full bg-red-400 shadow-[0_0_6px_rgba(239,68,68,0.8)]" />
          Kinetic Pulse
        </span>
      </div>
    </div>
  );
}

