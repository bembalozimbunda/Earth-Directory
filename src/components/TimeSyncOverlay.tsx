import React, { useState, useEffect } from 'react';
import { Clock, Globe, Network, MapPin, Phone, Compass } from 'lucide-react';

export function TimeSyncOverlay() {
  const [timeData, setTimeData] = useState({
    utcTime: new Date(),
    pulse: false,
    activeNodes: Math.floor(Math.random() * 5000) + 18500
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeData(prev => ({
        utcTime: new Date(),
        pulse: !prev.pulse,
        activeNodes: prev.activeNodes + (Math.floor(Math.random() * 10) - 3)
      }));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    return date.toISOString().substring(11, 19);
  };

  return (
    <div className="fixed bottom-0 left-0 w-full bg-zinc-950/95 border-t border-zinc-800/80 backdrop-blur-xl p-2.5 z-40">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
        
        {/* Universal Core Timeline Anchor */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Compass className="w-4 h-4 text-blue-400" />
            <div className="flex flex-col">
              <span className="text-[9px] text-zinc-500 uppercase tracking-widest font-mono">Planetary Time Standard</span>
              <span className="text-xs text-white font-mono uppercase tracking-wider font-semibold">Universal Meridian (UTC)</span>
            </div>
          </div>
          <div className="h-6 w-px bg-zinc-800 hidden md:block"></div>
          <div className="flex items-center gap-2">
            <Clock className={`w-4 h-4 text-emerald-400 ${timeData.pulse ? 'opacity-100' : 'opacity-50'} transition-opacity`} />
            <span className="text-sm sm:text-base text-emerald-400 font-mono tracking-wider font-bold">
              {formatTime(timeData.utcTime)} <span className="text-[10px] text-zinc-400 font-normal">UTC</span>
            </span>
          </div>
        </div>

        {/* Global Continental Synchronized Nodes */}
        <div className="flex flex-1 items-center justify-center hidden lg:flex">
          <div className="flex flex-col items-center">
            <span className="text-[9px] text-zinc-400 uppercase tracking-[0.25em] font-mono mb-1 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              7 Continents Unified Planetary Matrix
            </span>
            <div className="flex items-center gap-2">
              <div className="h-px w-6 bg-gradient-to-r from-transparent to-zinc-700"></div>
              <Network className="w-3 h-3 text-blue-400" />
              <div className="flex gap-3 px-2 border-x border-zinc-800">
                <span className="text-[9px] text-zinc-400 font-mono tracking-wider">AFR <span className="text-emerald-400">{timeData.pulse ? '●' : '○'}</span></span>
                <span className="text-[9px] text-zinc-400 font-mono tracking-wider">ASI <span className="text-emerald-400">{timeData.pulse ? '○' : '●'}</span></span>
                <span className="text-[9px] text-zinc-400 font-mono tracking-wider">EUR <span className="text-emerald-400">{timeData.pulse ? '●' : '○'}</span></span>
                <span className="text-[9px] text-zinc-400 font-mono tracking-wider">NAM <span className="text-emerald-400">{timeData.pulse ? '○' : '●'}</span></span>
                <span className="text-[9px] text-zinc-400 font-mono tracking-wider">SAM <span className="text-emerald-400">{timeData.pulse ? '●' : '○'}</span></span>
                <span className="text-[9px] text-zinc-400 font-mono tracking-wider">OCE <span className="text-emerald-400">{timeData.pulse ? '○' : '●'}</span></span>
                <span className="text-[9px] text-zinc-400 font-mono tracking-wider">ANT <span className="text-emerald-400">{timeData.pulse ? '●' : '○'}</span></span>
              </div>
              <Network className="w-3 h-3 text-blue-400" />
              <div className="h-px w-6 bg-gradient-to-l from-transparent to-zinc-700"></div>
            </div>
          </div>
        </div>

        {/* Nations Calling Codes Quick Access & Telemetry */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => window.dispatchEvent(new CustomEvent('OPEN_SYSTEM_CURRENCY'))}
            className="flex items-center gap-2 px-3 py-1 bg-amber-950/40 hover:bg-amber-900/60 border border-amber-800/50 hover:border-amber-500/80 rounded-lg text-left transition-colors group cursor-pointer shadow-sm"
            title="Open Nations Calling Codes & Currencies Matrix"
          >
            <Phone className="w-3.5 h-3.5 text-amber-400 group-hover:scale-110 transition-transform" />
            <div className="flex flex-col">
              <span className="text-[9px] text-amber-300 font-mono uppercase tracking-wider font-bold">
                Calling Codes: +1..+998
              </span>
              <span className="text-[8px] text-zinc-400 font-mono hidden sm:inline">
                Sovereign Currencies Matrix
              </span>
            </div>
          </button>

          <div className="flex items-center gap-2 text-right">
            <div className="flex flex-col">
              <span className="text-[9px] text-zinc-500 uppercase tracking-widest font-mono">Planetary Directory Nodes</span>
              <span className="text-xs text-zinc-200 font-mono tracking-wider">{timeData.activeNodes.toLocaleString()} Active</span>
            </div>
            <Globe className="w-4 h-4 text-blue-400 animate-spin-slow" />
          </div>
        </div>

      </div>
    </div>
  );
}
