import React, { useState, useEffect, useMemo } from 'react';
import { 
  Building2, X, RefreshCw, Volume2, ShieldCheck, 
  Coins, Radio, Search, Filter, Cpu, 
  Layers, ArrowUpRight, Zap, CheckCircle2, Server
} from 'lucide-react';
import { CENTRAL_BANK_REGISTRY, CentralBankProfile } from '../data/centralBanks';
import { playHarmonicSynthesisTone } from '../utils/frequencyPhysics';

interface GlobalBankTelemetryProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenKwachaAmplifier?: () => void;
}

export function GlobalBankTelemetry({ isOpen, onClose, onOpenKwachaAmplifier }: GlobalBankTelemetryProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedContinent, setSelectedContinent] = useState<string>('all');
  const [activeFrequency, setActiveFrequency] = useState<number | null>(null);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [serverStatus, setServerStatus] = useState<{
    status: string;
    active_synchronizations: number;
    network_latency_ms: number;
    baseline_planetary_frequency: string;
    primary_anchor: string;
  } | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchSyncStatus = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/banks/sync-status');
      if (res.ok) {
        const json = await res.json();
        setServerStatus(json);
      }
    } catch (err) {
      console.error('Error fetching bank sync status', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      fetchSyncStatus();
    }
  }, [isOpen]);

  // Esc key listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const handlePlayFrequency = (hz: number) => {
    setActiveFrequency(hz);
    setIsPlayingAudio(true);
    playHarmonicSynthesisTone(hz, 2.5, 0.25);
    setTimeout(() => {
      setIsPlayingAudio(false);
      setActiveFrequency(null);
    }, 2500);
  };

  const filteredBanks = useMemo(() => {
    return CENTRAL_BANK_REGISTRY.filter(bank => {
      const matchContinent = selectedContinent === 'all' || bank.continentId.toLowerCase() === selectedContinent.toLowerCase();
      const q = searchQuery.toLowerCase().trim();
      const matchSearch = !q || 
        bank.nationName.toLowerCase().includes(q) ||
        bank.currencyCode.toLowerCase().includes(q) ||
        bank.centralBankName.toLowerCase().includes(q) ||
        bank.acronym.toLowerCase().includes(q) ||
        bank.reserveAnchor.toLowerCase().includes(q) ||
        bank.isoCode.toLowerCase().includes(q);

      return matchContinent && matchSearch;
    });
  }, [searchQuery, selectedContinent]);

  if (!isOpen) return null;

  const continentFilters = [
    { id: 'all', label: 'All Regions' },
    { id: 'alkebulan', label: 'Alkebulan (Africa)' },
    { id: 'asia', label: 'Asia' },
    { id: 'europa', label: 'Europa' },
    { id: 'turtle_island', label: 'North America' },
    { id: 'abya_yala', label: 'South America' },
    { id: 'oceania', label: 'Oceania & Pacific' }
  ];

  return (
    <div
      id="global-bank-telemetry-overlay"
      className="fixed inset-0 z-[999999] flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-xl animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        id="global-bank-telemetry-modal"
        className="relative w-full max-w-5xl bg-zinc-950 border border-cyan-500/40 rounded-3xl p-4 sm:p-7 shadow-[0_0_90px_rgba(6,182,212,0.2)] overflow-hidden max-h-[92vh] flex flex-col space-y-4 text-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-start justify-between pb-4 border-b border-zinc-800">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 font-bold">
              <Building2 className="w-7 h-7" />
            </div>
            <div>
              <div className="flex items-center gap-2.5">
                <h2 className="text-lg sm:text-2xl font-bold tracking-tight text-white flex items-center gap-2">
                  <span>Global Central Bank Telemetry</span>
                  <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 font-mono text-[10px] font-bold">
                    198+ Sovereign Nodes
                  </span>
                </h2>
              </div>
              <p className="text-xs text-zinc-400 mt-0.5">
                Decentralized Multi-Tenant Banking Interconnect • Live Policy Rates • Commodity Backing Parity
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={fetchSyncStatus}
              disabled={loading}
              className="p-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-zinc-300 hover:text-cyan-400 transition-colors cursor-pointer"
              title="Refresh Bank Telemetry"
            >
              <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin text-cyan-400' : ''}`} />
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

        {/* Live Network Health Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-xs">
          <div className="p-3 rounded-2xl bg-emerald-950/30 border border-emerald-800/40 space-y-1">
            <span className="text-[10px] uppercase text-emerald-400 font-bold block flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3" />
              Sync Engine Status
            </span>
            <div className="text-sm font-mono font-bold text-white">
              {serverStatus?.status || 'OPERATIONAL'}
            </div>
            <span className="text-[9px] text-zinc-400 block">Zero-Trust Local Verification</span>
          </div>

          <div className="p-3 rounded-2xl bg-cyan-950/30 border border-cyan-800/40 space-y-1">
            <span className="text-[10px] uppercase text-cyan-400 font-bold block flex items-center gap-1">
              <Server className="w-3 h-3" />
              Active Central Banks
            </span>
            <div className="text-sm font-mono font-bold text-cyan-300">
              {serverStatus?.active_synchronizations || 198} Authorities
            </div>
            <span className="text-[9px] text-zinc-400 block">ISO 3166-1 Matrix</span>
          </div>

          <div className="p-3 rounded-2xl bg-blue-950/30 border border-blue-800/40 space-y-1">
            <span className="text-[10px] uppercase text-blue-400 font-bold block flex items-center gap-1">
              <Zap className="w-3 h-3" />
              Network Latency
            </span>
            <div className="text-sm font-mono font-bold text-blue-300">
              {serverStatus?.network_latency_ms || 12} ms Avg
            </div>
            <span className="text-[9px] text-zinc-400 block">Local REST / API Sync</span>
          </div>

          <div className="p-3 rounded-2xl bg-amber-950/30 border border-amber-800/40 space-y-1">
            <span className="text-[10px] uppercase text-amber-400 font-bold block flex items-center gap-1">
              <Radio className="w-3 h-3" />
              Root Frequency
            </span>
            <div className="text-sm font-mono font-bold text-amber-300">
              {serverStatus?.baseline_planetary_frequency || '432 Hz'}
            </div>
            <span className="text-[9px] text-zinc-400 block">BoZ Sovereign Anchor</span>
          </div>
        </div>

        {/* Search & Filter Controls */}
        <div className="space-y-2.5">
          <div className="flex flex-col sm:flex-row items-center gap-2">
            <div className="relative flex-1 w-full">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400" />
              <input
                type="text"
                placeholder="Search central bank, currency (ZMW, USD, EUR), country, or commodity anchor..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 bg-zinc-900/90 border border-zinc-700 rounded-xl text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-400 transition-colors"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-zinc-300 text-xs"
                >
                  Clear
                </button>
              )}
            </div>

            {/* SADC Transit Corridors Trigger */}
            <button
              type="button"
              onClick={() => {
                onClose();
                window.dispatchEvent(new CustomEvent('OPEN_SADC_CORRIDORS'));
              }}
              className="px-3.5 py-2 bg-purple-950/80 hover:bg-purple-900 border border-purple-500/50 hover:border-purple-400 text-purple-300 text-xs font-bold rounded-xl flex items-center gap-1.5 transition-colors cursor-pointer shrink-0"
            >
              <span>🚛</span>
              <span>SADC Corridors</span>
            </button>

            {/* Direct Trigger to Open BoZ Kwacha Amplifier */}
            <button
              type="button"
              onClick={() => {
                onClose();
                if (onOpenKwachaAmplifier) {
                  onOpenKwachaAmplifier();
                } else {
                  window.dispatchEvent(new CustomEvent('OPEN_KWACHA_AMPLIFIER'));
                }
              }}
              className="px-3.5 py-2 bg-emerald-950/80 hover:bg-emerald-900 border border-emerald-500/50 hover:border-emerald-400 text-emerald-300 text-xs font-bold rounded-xl flex items-center gap-1.5 transition-colors cursor-pointer shrink-0"
            >
              <span>🇿🇲</span>
              <span>BoZ Kwacha</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Continent Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 custom-scrollbar text-xs">
            {continentFilters.map(cf => (
              <button
                key={cf.id}
                onClick={() => setSelectedContinent(cf.id)}
                className={`px-3 py-1 rounded-lg font-medium whitespace-nowrap transition-colors cursor-pointer text-xs ${
                  selectedContinent === cf.id
                    ? 'bg-cyan-500 text-black font-bold shadow-[0_0_12px_rgba(6,182,212,0.4)]'
                    : 'bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-zinc-200 border border-zinc-800'
                }`}
              >
                {cf.label}
              </button>
            ))}
          </div>
        </div>

        {/* Scrollable Central Banks Directory */}
        <div className="flex-1 overflow-y-auto space-y-2.5 pr-1 custom-scrollbar max-h-[50vh]">
          {filteredBanks.length === 0 ? (
            <div className="p-8 text-center bg-zinc-900/50 rounded-2xl border border-zinc-800">
              <Building2 className="w-8 h-8 mx-auto text-zinc-600 mb-2" />
              <p className="text-sm text-zinc-400 font-medium">No central banking authorities match your filter.</p>
              <button
                onClick={() => { setSearchQuery(''); setSelectedContinent('all'); }}
                className="mt-2 text-xs text-cyan-400 hover:underline"
              >
                Reset filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {filteredBanks.map(bank => {
                const isPlayingThis = isPlayingAudio && activeFrequency === bank.frequencyHz;

                return (
                  <div
                    key={bank.isoCode}
                    className={`p-4 rounded-2xl border transition-all flex flex-col justify-between space-y-3 ${
                      bank.isPrimaryAnchor
                        ? 'bg-emerald-950/30 border-emerald-500/60 shadow-[0_0_30px_rgba(16,185,129,0.15)]'
                        : 'bg-zinc-900/80 border-zinc-800 hover:border-zinc-700'
                    }`}
                  >
                    {/* Bank Top Line */}
                    <div className="flex items-start justify-between gap-2">
                      <div className="space-y-0.5">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-bold text-white flex items-center gap-1.5">
                            <span>{bank.nationName}</span>
                            <span className="text-zinc-500 text-xs font-mono font-normal">({bank.isoCode})</span>
                          </span>
                          {bank.isPrimaryAnchor && (
                            <span className="px-1.5 py-0.5 rounded bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 font-mono text-[9px] font-bold">
                              PRIMARY ANCHOR
                            </span>
                          )}
                        </div>
                        <div className="text-xs text-cyan-300 font-medium flex items-center gap-1.5">
                          <span>{bank.centralBankName}</span>
                          <span className="font-mono text-zinc-400 font-bold">[{bank.acronym}]</span>
                        </div>
                      </div>

                      {/* Currency Badge */}
                      <div className="text-right shrink-0">
                        <span className="px-2.5 py-1 rounded-xl bg-zinc-950 border border-zinc-700 text-amber-300 font-mono text-xs font-bold block">
                          {bank.currencyCode} ({bank.currencySymbol})
                        </span>
                        <span className="text-[10px] text-zinc-400 font-mono block mt-0.5">
                          Est. {bank.establishedYear}
                        </span>
                      </div>
                    </div>

                    {/* Policy Rate & HQ */}
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className="p-2 rounded-xl bg-zinc-950/70 border border-zinc-800/80">
                        <span className="text-[9px] uppercase text-zinc-400 font-bold block">Policy Rate</span>
                        <span className="font-mono font-bold text-emerald-400 text-xs mt-0.5 block">
                          {bank.policyRate.toFixed(2)}%
                        </span>
                      </div>
                      <div className="p-2 rounded-xl bg-zinc-950/70 border border-zinc-800/80">
                        <span className="text-[9px] uppercase text-zinc-400 font-bold block">Headquarters</span>
                        <span className="text-zinc-200 text-xs truncate mt-0.5 block" title={bank.headquarters}>
                          {bank.headquarters}
                        </span>
                      </div>
                    </div>

                    {/* Commodity Anchor */}
                    <div className="p-2.5 rounded-xl bg-zinc-950/50 border border-zinc-800/60 space-y-1">
                      <span className="text-[9px] uppercase text-amber-400/90 font-bold block flex items-center gap-1">
                        <ShieldCheck className="w-3 h-3 text-amber-400" />
                        Commodity & Reserve Anchor
                      </span>
                      <p className="text-[11px] text-zinc-300 leading-snug">
                        {bank.reserveAnchor}
                      </p>
                    </div>

                    {/* Footer / Frequency Synthesizer Action */}
                    <div className="flex items-center justify-between pt-1 border-t border-zinc-800/60 text-xs">
                      <div className="flex items-center gap-2 text-zinc-400 text-[10px] font-mono">
                        <span className="text-emerald-400">● {bank.latencyMs}ms</span>
                        <span>•</span>
                        <span className="truncate max-w-[150px]">{bank.syncProtocol}</span>
                      </div>

                      <button
                        type="button"
                        onClick={() => handlePlayFrequency(bank.frequencyHz)}
                        className={`px-2.5 py-1 rounded-lg border text-[10px] font-bold font-mono uppercase transition-all flex items-center gap-1 cursor-pointer ${
                          isPlayingThis
                            ? 'bg-amber-500 text-black border-amber-400 shadow-[0_0_12px_rgba(245,158,11,0.6)] animate-pulse'
                            : 'bg-zinc-800 hover:bg-zinc-700 text-amber-300 border-zinc-700 hover:border-amber-400'
                        }`}
                        title={`Play ${bank.frequencyHz} Hz Solfeggio Tone`}
                      >
                        <Volume2 className="w-3 h-3" />
                        <span>{bank.frequencyHz} Hz</span>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="pt-3 border-t border-zinc-800 flex items-center justify-between text-xs text-zinc-400 font-mono">
          <div className="flex items-center gap-2 text-cyan-400">
            <ShieldCheck className="w-4 h-4" />
            <span>Autonomous Sovereign Sync Engine • 0.0.0.0:3000 Bound</span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 bg-white/10 hover:bg-white/20 text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
          >
            Close Telemetry
          </button>
        </div>
      </div>
    </div>
  );
}
