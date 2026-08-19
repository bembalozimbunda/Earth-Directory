import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Clock, Globe, Network, MapPin } from 'lucide-react';

export function TimeSyncOverlay() {
  const [timeData, setTimeData] = useState({
    lusaka: new Date(),
    global: new Date(),
    pulse: false,
    activeIps: Math.floor(Math.random() * 5000) + 12000
  });

  useEffect(() => {
    const timer = setInterval(() => {
      // Create a specific Lusaka timezone date
      const lusakaTime = new Date(new Date().toLocaleString('en-US', { timeZone: 'Africa/Lusaka' }));
      
      setTimeData(prev => ({
        lusaka: lusakaTime,
        global: new Date(),
        pulse: !prev.pulse,
        activeIps: prev.activeIps + (Math.floor(Math.random() * 10) - 3)
      }));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' });
  };

  return (
    <div className="fixed bottom-0 left-0 w-full bg-black/90 border-t border-amber-500/30 backdrop-blur-md p-2 z-50">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Core Timeline Anchor */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-amber-500" />
            <div className="flex flex-col">
              <span className="text-[10px] text-zinc-500 uppercase tracking-widest font-mono">Core Anchor</span>
              <span className="text-sm text-white font-mono uppercase tracking-widest">Lusaka, Zambia</span>
            </div>
          </div>
          <div className="h-8 w-px bg-zinc-800 hidden md:block"></div>
          <div className="flex items-center gap-2">
            <Clock className={`w-4 h-4 text-amber-500 ${timeData.pulse ? 'opacity-100' : 'opacity-50'} transition-opacity`} />
            <span className="text-lg text-amber-500 font-mono tracking-widest">
              {formatTime(timeData.lusaka)} <span className="text-[10px] text-zinc-500">CAT</span>
            </span>
          </div>
        </div>

        
        {/* Global Matrix Sync */}
        <div className="flex flex-1 items-center justify-center hidden lg:flex">
            <div className="flex flex-col items-center">
              <span className="text-[9px] text-emerald-500 uppercase tracking-[0.3em] font-mono mb-1">
                Eternal Now In Motion
              </span>
              <div className="flex items-center gap-2">
                <div className="h-px w-8 bg-gradient-to-r from-transparent to-emerald-500/50"></div>
                <Network className="w-3 h-3 text-emerald-500" />
                <div className="flex gap-4 px-2 border-x border-emerald-500/20">
                  <span className="text-[9px] text-zinc-400 font-mono tracking-widest">N-Y <span className="text-emerald-500">{timeData.pulse ? '●' : '○'}</span></span>
                  <span className="text-[9px] text-zinc-400 font-mono tracking-widest">L-D <span className="text-emerald-500">{timeData.pulse ? '○' : '●'}</span></span>
                  <span className="text-[9px] text-zinc-400 font-mono tracking-widest">T-K <span className="text-emerald-500">{timeData.pulse ? '●' : '○'}</span></span>
                  <span className="text-[9px] text-zinc-400 font-mono tracking-widest">S-P <span className="text-emerald-500">{timeData.pulse ? '○' : '●'}</span></span>
                </div>
                <Network className="w-3 h-3 text-emerald-500" />
                <div className="h-px w-8 bg-gradient-to-l from-transparent to-emerald-500/50"></div>
              </div>
            </div>
        </div>
{/* Android / IP Matrix */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-right">
            <div className="flex flex-col">
              <span className="text-[10px] text-zinc-500 uppercase tracking-widest font-mono">Active Android Nodes (Geo-Sync)</span>
              <span className="text-sm text-white font-mono tracking-widest">{timeData.activeIps.toLocaleString()} IP CONNECTED</span>
            </div>
            <Globe className="w-5 h-5 text-emerald-500 animate-pulse" />
          </div>
        </div>

      </div>
    </div>
  );
}
