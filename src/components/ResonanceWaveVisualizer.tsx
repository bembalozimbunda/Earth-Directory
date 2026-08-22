import React, { useEffect, useRef, useState } from 'react';
import { getSharedAnalyser } from '../utils/frequencyPhysics';
import { Waves, Volume2, Activity } from 'lucide-react';

export function ResonanceWaveVisualizer() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isActive, setIsActive] = useState(false);
  const [currentDb, setCurrentDb] = useState<number>(0);

  useEffect(() => {
    let animId: number;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dataArray = new Uint8Array(32);

    const render = () => {
      animId = requestAnimationFrame(render);
      const analyser = getSharedAnalyser();
      
      const width = canvas.width;
      const height = canvas.height;
      ctx.clearRect(0, 0, width, height);

      let activeEnergy = 0;

      if (analyser) {
        analyser.getByteFrequencyData(dataArray);
        for (let i = 0; i < dataArray.length; i++) {
          activeEnergy += dataArray[i];
        }
        activeEnergy = activeEnergy / dataArray.length;
      }

      const hasSound = activeEnergy > 5;
      setIsActive(hasSound);
      setCurrentDb(Math.round(activeEnergy));

      if (hasSound) {
        // Draw real-time FFT Spectrum Bars
        const barWidth = width / 16;
        const gradient = ctx.createLinearGradient(0, height, 0, 0);
        gradient.addColorStop(0, 'rgba(16, 185, 129, 0.2)');
        gradient.addColorStop(0.5, 'rgba(56, 189, 248, 0.8)');
        gradient.addColorStop(1, 'rgba(239, 68, 68, 0.95)');

        for (let i = 0; i < 16; i++) {
          const val = (dataArray[i] / 255) * height;
          const x = i * barWidth;
          const y = height - val;

          ctx.fillStyle = gradient;
          ctx.fillRect(x + 1, y, barWidth - 2, val);
          
          // Peak dot
          ctx.fillStyle = '#ffffff';
          ctx.fillRect(x + 1, Math.max(0, y - 2), barWidth - 2, 2);
        }
      } else {
        // Idle Quantum Sine Wave
        const time = Date.now() * 0.003;
        ctx.beginPath();
        ctx.strokeStyle = 'rgba(74, 222, 128, 0.4)';
        ctx.lineWidth = 1.5;

        for (let x = 0; x < width; x++) {
          const y = height / 2 + Math.sin(x * 0.08 + time) * 3 * Math.sin(time * 0.5);
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      }
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <div 
      id="witness-feedback-loop"
      className="flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-zinc-950/80 border border-zinc-800/80 backdrop-blur-md shadow-[0_0_15px_rgba(0,0,0,0.5)] select-none"
      title="07. The Witness / Feedback Loop — Real-Time Acoustic & Harmonic Spectrum Analyzer"
    >
      <div className="flex items-center gap-1.5 text-emerald-400">
        {isActive ? (
          <Activity className="w-3.5 h-3.5 text-red-400 animate-pulse" />
        ) : (
          <Waves className="w-3.5 h-3.5 text-emerald-400/80" />
        )}
        <span className="text-[9px] font-mono uppercase tracking-widest text-zinc-400 hidden sm:inline">
          {isActive ? 'Resonating' : 'Harmonic Flow'}
        </span>
      </div>

      {/* Dynamic Canvas Analyzer */}
      <div className="w-20 h-5 bg-black/60 rounded border border-zinc-900 overflow-hidden flex items-center justify-center">
        <canvas 
          ref={canvasRef} 
          width={80} 
          height={20} 
          className="w-full h-full"
        />
      </div>

      <div className="text-[9px] font-mono text-zinc-500 min-w-[28px] text-right">
        {isActive ? `${currentDb} dB` : '432 Hz'}
      </div>
    </div>
  );
}
