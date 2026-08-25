import React, { useState, useEffect } from 'react';
import { 
  Coins, X, ArrowLeft, RefreshCw, Volume2, ShieldCheck, 
  TrendingUp, Globe, Sparkles, Building2, Layers, Cpu, ArrowRightLeft,
  Flame, Radio, CheckCircle2
} from 'lucide-react';
import { playHarmonicSynthesisTone } from '../utils/frequencyPhysics';

export interface KwachaAmplifierData {
  status: string;
  timestamp: string;
  origin_epicenter: {
    currency: string;
    iso_code: string;
    symbol: string;
    meaning: string;
    telecom_dial_code: string;
    central_bank: string;
    headquarters: string;
    fundamental_frequency_hz: number;
    role: string;
  };
  bank_of_zambia_telemetry: {
    indicative_mid_rate_usd: number;
    bid_rate: number;
    ask_rate: number;
    policy_rate_percent: number;
    interbank_rate_percent: number;
    statutory_reserve_ratio_percent: number;
    inflation_target_band: string;
    current_reserves_anchor: string;
  };
  commodity_reserves_backing: {
    copper_spot_lme_usd_per_tonne: number;
    settlement_zmw_per_tonne: number;
    copper_backing_parity_index: number;
    strategic_mineral_corridor: string;
  };
  cross_currency_exchange_matrix: Record<string, {
    rate: number;
    name: string;
    symbol: string;
    inv: number;
  }>;
  outward_emanation_rings: Array<{
    tier: number;
    ring: string;
    frequency: string;
    coverage: string;
    status: string;
    harmonic_coupling: number;
  }>;
  ancestral_protection: string;
  amplification_power: string;
}

interface KwachaFrequencyAmplifierProps {
  isOpen: boolean;
  onClose: () => void;
}

export function KwachaFrequencyAmplifier({ isOpen, onClose }: KwachaFrequencyAmplifierProps) {
  const [data, setData] = useState<KwachaAmplifierData | null>(null);
  const [loading, setLoading] = useState(false);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [activeFrequency, setActiveFrequency] = useState<number>(432);
  
  // Interactive Calculator State
  const [calcAmount, setCalcAmount] = useState<number>(100);
  const [calcDirection, setCalcDirection] = useState<'FOREIGN_TO_ZMW' | 'ZMW_TO_FOREIGN'>('FOREIGN_TO_ZMW');
  const [selectedForeignCurrency, setSelectedForeignCurrency] = useState<string>('USD');

  const fetchAmplifierData = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/kwacha-frequency-amplifier');
      if (res.ok) {
        const json = await res.json();
        setData(json);
      }
    } catch (err) {
      console.error('Failed to fetch Kwacha Frequency Amplifier telemetry', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      fetchAmplifierData();
    }
  }, [isOpen]);

  // Escape key close handler
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const handlePlayTone = (hz: number) => {
    setActiveFrequency(hz);
    setIsPlayingAudio(true);
    playHarmonicSynthesisTone(hz, 3.0, 0.25);
    setTimeout(() => setIsPlayingAudio(false), 3000);
  };

  if (!isOpen) return null;

  const currentPair = data?.cross_currency_exchange_matrix[selectedForeignCurrency];
  const calculatedOutput = currentPair ? (
    calcDirection === 'FOREIGN_TO_ZMW' 
      ? (calcAmount * currentPair.rate).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
      : (calcAmount * currentPair.inv).toLocaleString('en-US', { minimumFractionDigits: 4, maximumFractionDigits: 4 })
  ) : '0.00';

  return (
    <div
      id="kwacha-amplifier-overlay"
      className="fixed inset-0 z-[999999] flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-xl animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        id="kwacha-amplifier-modal"
        className="relative w-full max-w-4xl bg-zinc-950 border border-emerald-500/40 rounded-3xl p-4 sm:p-7 shadow-[0_0_90px_rgba(16,185,129,0.2)] overflow-hidden max-h-[92vh] flex flex-col space-y-4 text-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-start justify-between pb-4 border-b border-zinc-800">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 font-bold text-2xl select-none">
              🇿🇲
            </div>
            <div>
              <div className="flex items-center gap-2.5">
                <h2 className="text-lg sm:text-2xl font-bold tracking-tight text-white flex items-center gap-2">
                  <span>Kwacha Frequency Amplifier</span>
                  <span className="px-2 py-0.5 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300 font-mono text-[10px] font-bold">
                    432 Hz Root
                  </span>
                </h2>
              </div>
              <p className="text-xs text-zinc-400 mt-0.5">
                Bank of Zambia (BoZ) Live Indicative Exchange Rates • Mineral Parity Anchor • SADC +26 Wave
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => {
                onClose();
                window.dispatchEvent(new CustomEvent('OPEN_BANK_TELEMETRY'));
              }}
              className="px-3 py-2 rounded-xl bg-cyan-950/80 hover:bg-cyan-900 border border-cyan-500/50 hover:border-cyan-400 text-cyan-300 font-mono text-xs font-bold transition-colors cursor-pointer flex items-center gap-1.5"
              title="View all 198+ Global Central Banks Telemetry"
            >
              <span>🏛️</span>
              <span className="hidden sm:inline">Central Banks</span>
            </button>
            <button
              type="button"
              onClick={() => {
                onClose();
                window.dispatchEvent(new CustomEvent('OPEN_SADC_CORRIDORS'));
              }}
              className="px-3 py-2 rounded-xl bg-purple-950/80 hover:bg-purple-900 border border-purple-500/50 hover:border-purple-400 text-purple-300 font-mono text-xs font-bold transition-colors cursor-pointer flex items-center gap-1.5"
              title="View SADC Regional Transit Corridors & Zero-Trust Audit Ledger"
            >
              <span>🚛</span>
              <span className="hidden sm:inline">SADC Corridors</span>
            </button>
            <button
              onClick={fetchAmplifierData}
              disabled={loading}
              className="p-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-zinc-300 hover:text-emerald-400 transition-colors cursor-pointer"
              title="Refresh Telemetry"
            >
              <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin text-emerald-400' : ''}`} />
            </button>
            <button
              onClick={onClose}
              className="p-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-zinc-400 hover:text-white transition-colors cursor-pointer"
              title="Close (Esc)"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Content Container */}
        <div className="flex-1 overflow-y-auto space-y-5 pr-1 custom-scrollbar">

          {/* Primary Epicenter Telemetry Strip */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="p-4 rounded-2xl bg-emerald-950/40 border border-emerald-800/50 space-y-1">
              <span className="text-[10px] uppercase text-emerald-400 font-bold tracking-wider flex items-center gap-1.5">
                <Coins className="w-3.5 h-3.5" />
                Sovereign Epicenter
              </span>
              <div className="text-xl font-bold text-white flex items-baseline gap-2">
                <span>ZMW</span>
                <span className="text-xs text-emerald-300 font-mono font-normal">K / ZK</span>
              </div>
              <p className="text-[11px] text-zinc-300">
                Ubwacha / Kwacha: <em>"The Dawn has Broken"</em>
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-amber-950/40 border border-amber-800/50 space-y-1">
              <span className="text-[10px] uppercase text-amber-400 font-bold tracking-wider flex items-center gap-1.5">
                <Building2 className="w-3.5 h-3.5" />
                BoZ Indicative USD Mid-Rate
              </span>
              <div className="text-xl font-mono font-bold text-amber-300 flex items-baseline gap-2">
                <span>K {data?.bank_of_zambia_telemetry?.indicative_mid_rate_usd || '27.42'}</span>
                <span className="text-[10px] text-zinc-400 font-normal">per USD</span>
              </div>
              <p className="text-[11px] text-zinc-300">
                Bid: K{data?.bank_of_zambia_telemetry?.bid_rate || '27.36'} • Ask: K{data?.bank_of_zambia_telemetry?.ask_rate || '27.48'}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-blue-950/40 border border-blue-800/50 space-y-1">
              <span className="text-[10px] uppercase text-cyan-400 font-bold tracking-wider flex items-center gap-1.5">
                <Flame className="w-3.5 h-3.5" />
                LME Copper Spot Backing
              </span>
              <div className="text-xl font-mono font-bold text-cyan-300 flex items-baseline gap-2">
                <span>${data?.commodity_reserves_backing?.copper_spot_lme_usd_per_tonne || '9,840'}</span>
                <span className="text-[10px] text-zinc-400 font-normal">/ tonne</span>
              </div>
              <p className="text-[11px] text-zinc-300">
                Settlement: K{(data?.commodity_reserves_backing?.settlement_zmw_per_tonne || 269812).toLocaleString()} / tonne
              </p>
            </div>
          </div>

          {/* Interactive Live Converter Card */}
          <div className="p-5 rounded-2xl bg-zinc-900/90 border border-zinc-800 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-zinc-800">
              <div className="flex items-center gap-2">
                <ArrowRightLeft className="w-4 h-4 text-emerald-400" />
                <h3 className="text-sm font-bold uppercase tracking-wider text-white">
                  Live Sovereign Exchange Converter
                </h3>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setCalcDirection(d => d === 'FOREIGN_TO_ZMW' ? 'ZMW_TO_FOREIGN' : 'FOREIGN_TO_ZMW')}
                  className="px-3 py-1 bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 rounded-lg text-xs font-mono text-zinc-300 transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Flip: {calcDirection === 'FOREIGN_TO_ZMW' ? `${selectedForeignCurrency} → ZMW` : `ZMW → ${selectedForeignCurrency}`}</span>
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 items-center">
              {/* Input Amount */}
              <div className="space-y-1">
                <label className="text-[11px] font-mono text-zinc-400 block">
                  {calcDirection === 'FOREIGN_TO_ZMW' ? `Amount in ${selectedForeignCurrency}` : 'Amount in Kwacha (ZMW)'}
                </label>
                <div className="relative">
                  <input
                    type="number"
                    min="1"
                    value={calcAmount}
                    onChange={(e) => setCalcAmount(Math.max(1, Number(e.target.value)))}
                    className="w-full px-3 py-2.5 bg-zinc-950 border border-zinc-700 rounded-xl text-sm font-mono text-white focus:outline-none focus:border-emerald-400 transition-colors"
                  />
                </div>
              </div>

              {/* Currency Selector */}
              <div className="space-y-1">
                <label className="text-[11px] font-mono text-zinc-400 block">Foreign Pair</label>
                <select
                  value={selectedForeignCurrency}
                  onChange={(e) => setSelectedForeignCurrency(e.target.value)}
                  className="w-full px-3 py-2.5 bg-zinc-950 border border-zinc-700 rounded-xl text-sm font-mono text-white focus:outline-none focus:border-emerald-400 transition-colors cursor-pointer"
                >
                  {data && Object.keys(data.cross_currency_exchange_matrix).map(code => (
                    <option key={code} value={code}>
                      {code} - {data.cross_currency_exchange_matrix[code].name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Result Value Box */}
              <div className="p-3 bg-emerald-950/30 border border-emerald-500/30 rounded-xl space-y-1">
                <span className="text-[10px] uppercase font-bold text-emerald-400 block">
                  {calcDirection === 'FOREIGN_TO_ZMW' ? 'Equivalent in Zambian Kwacha' : `Equivalent in ${selectedForeignCurrency}`}
                </span>
                <div className="text-xl font-mono font-bold text-white truncate">
                  {calcDirection === 'FOREIGN_TO_ZMW' ? `ZK ${calculatedOutput}` : `${currentPair?.symbol || ''} ${calculatedOutput}`}
                </div>
                <span className="text-[10px] text-zinc-400 block">
                  1 {selectedForeignCurrency} = K{currentPair?.rate || '27.42'} ZMW
                </span>
              </div>
            </div>
          </div>

          {/* Central Bank Policy & Financial Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-xs">
            <div className="p-3 rounded-xl bg-zinc-900/70 border border-zinc-800">
              <span className="text-[10px] uppercase text-zinc-400 font-bold block">BoZ Policy Rate</span>
              <span className="text-emerald-400 font-mono font-bold text-sm block mt-0.5">
                {data?.bank_of_zambia_telemetry?.policy_rate_percent || 13.5}%
              </span>
              <span className="text-[9px] text-zinc-500 block">Monetary Anchor</span>
            </div>

            <div className="p-3 rounded-xl bg-zinc-900/70 border border-zinc-800">
              <span className="text-[10px] uppercase text-zinc-400 font-bold block">Interbank Lending</span>
              <span className="text-cyan-400 font-mono font-bold text-sm block mt-0.5">
                {data?.bank_of_zambia_telemetry?.interbank_rate_percent || 14.1}%
              </span>
              <span className="text-[9px] text-zinc-500 block">Overnight Market</span>
            </div>

            <div className="p-3 rounded-xl bg-zinc-900/70 border border-zinc-800">
              <span className="text-[10px] uppercase text-zinc-400 font-bold block">Reserve Ratio</span>
              <span className="text-amber-400 font-mono font-bold text-sm block mt-0.5">
                {data?.bank_of_zambia_telemetry?.statutory_reserve_ratio_percent || 26.0}%
              </span>
              <span className="text-[9px] text-zinc-500 block">Statutory Mandate</span>
            </div>

            <div className="p-3 rounded-xl bg-zinc-900/70 border border-zinc-800">
              <span className="text-[10px] uppercase text-zinc-400 font-bold block">Inflation Band</span>
              <span className="text-zinc-200 font-mono font-bold text-sm block mt-0.5">
                {data?.bank_of_zambia_telemetry?.inflation_target_band || '6-8%'}
              </span>
              <span className="text-[9px] text-zinc-500 block">Target Range</span>
            </div>
          </div>

          {/* Outward Emanation Rings & Solfeggio Harmonic Synthesizer */}
          <div className="p-5 rounded-2xl bg-zinc-900/90 border border-zinc-800 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-zinc-800">
              <div className="flex items-center gap-2">
                <Radio className="w-4 h-4 text-amber-400" />
                <h3 className="text-sm font-bold uppercase tracking-wider text-white">
                  Outward Emanation Rings (Solfeggio Resonance)
                </h3>
              </div>
              <span className="text-[10px] font-mono text-amber-300">
                Alkebulan Root → True Sun Apex
              </span>
            </div>

            <div className="space-y-3">
              {data?.outward_emanation_rings?.map(ring => {
                const hz = ring.tier === 1 ? 528 : ring.tier === 2 ? 528 : 963;
                const isPlayingThis = isPlayingAudio && activeFrequency === hz;

                return (
                  <div
                    key={ring.tier}
                    className="p-4 rounded-xl bg-zinc-950/80 border border-zinc-800/80 hover:border-amber-500/40 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                  >
                    <div className="space-y-1 flex-1">
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 font-mono text-[10px] font-bold">
                          Tier {ring.tier}
                        </span>
                        <span className="text-xs font-bold text-white">{ring.ring}</span>
                      </div>
                      <p className="text-[11px] text-zinc-400">{ring.coverage}</p>
                      <div className="text-[10px] font-mono text-emerald-400">
                        Resonance: {ring.frequency} • Coupling Ratio {ring.harmonic_coupling}
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => handlePlayTone(hz)}
                      className={`px-3.5 py-2 rounded-xl border text-xs font-bold font-mono uppercase transition-all flex items-center gap-1.5 shrink-0 cursor-pointer ${
                        isPlayingThis
                          ? 'bg-amber-500 text-black border-amber-400 shadow-[0_0_15px_rgba(245,158,11,0.6)] animate-pulse'
                          : 'bg-zinc-900 hover:bg-zinc-800 text-amber-300 border-zinc-700 hover:border-amber-400'
                      }`}
                    >
                      <Volume2 className="w-3.5 h-3.5" />
                      <span>{hz} Hz Tone</span>
                    </button>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="pt-3 border-t border-zinc-800 flex items-center justify-between text-xs text-zinc-400 font-mono">
          <div className="flex items-center gap-2 text-emerald-400">
            <ShieldCheck className="w-4 h-4" />
            <span>Zero-Trust Sovereign Currency Protocol Active</span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 bg-white/10 hover:bg-white/20 text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
          >
            Close Inspector
          </button>
        </div>
      </div>
    </div>
  );
}
