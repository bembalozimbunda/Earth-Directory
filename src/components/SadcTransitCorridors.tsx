import React, { useState, useEffect } from 'react';
import { 
  Truck, Train, Anchor, Navigation, ShieldCheck, ArrowRight, 
  MapPin, Clock, RefreshCw, Layers, DollarSign, CheckCircle2, 
  AlertTriangle, Filter, Search, X, Volume2, Globe, Cpu, Hash
} from 'lucide-react';
import { SADC_TRADE_CORRIDORS, SADC_BORDER_POSTS, TRADE_REGIMES, SadcTradeCorridor, SadcBorderPost } from '../data/sadcCorridors';
import { playHarmonicSynthesisTone } from '../utils/frequencyPhysics';

interface AuditBlock {
  index: number;
  timestamp: string;
  previousHash: string;
  blockHash: string;
  validatorNode: string;
  signature: string;
  activeBanksCount: number;
  primaryAnchor: string;
  frequencyLock: string;
  commodityParity: {
    copperPriceLmeUSD: number;
    copperKwachaParity: number;
    goldSpotUSD: number;
  };
  samplePayloadDigest: string;
  status: 'VERIFIED' | 'TAMPER_PROOF' | 'COMPLIANT';
}

interface AuditLedgerData {
  ledgerName: string;
  version: string;
  totalSweeps: number;
  chainIntegrity: string;
  currentChainHeadHash: string;
  recentBlocks: AuditBlock[];
}

export function SadcTransitCorridors({ onClose }: { onClose?: () => void }) {
  const [activeTab, setActiveTab] = useState<'corridors' | 'borders' | 'regimes' | 'audit-ledger'>('corridors');
  const [selectedCorridor, setSelectedCorridor] = useState<SadcTradeCorridor>(SADC_TRADE_CORRIDORS[0]);
  const [selectedBorder, setSelectedBorder] = useState<SadcBorderPost>(SADC_BORDER_POSTS[0]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [modeFilter, setModeFilter] = useState<string>('ALL');
  
  // Audit Ledger State
  const [ledgerData, setLedgerData] = useState<AuditLedgerData | null>(null);
  const [isSweeping, setIsSweeping] = useState<boolean>(false);
  const [sweepFeedback, setSweepFeedback] = useState<string | null>(null);

  // Duty Calculator State
  const [cargoValueUSD, setCargoValueUSD] = useState<number>(50000);
  const [selectedRegime, setSelectedRegime] = useState<string>('AfCFTA');
  const [isOriginatingGoods, setIsOriginatingGoods] = useState<boolean>(true);

  const fetchLedger = async () => {
    try {
      const res = await fetch('/api/audit/integrity-ledger');
      if (res.ok) {
        const json = await res.json();
        setLedgerData(json.ledger);
      }
    } catch (err) {
      console.error('Failed to load integrity ledger:', err);
    }
  };

  useEffect(() => {
    fetchLedger();
  }, []);

  const triggerAuditSweep = async () => {
    setIsSweeping(true);
    setSweepFeedback('Generating cryptographic block signature...');
    playHarmonicSynthesisTone(432, 0.2);

    try {
      const res = await fetch('/api/audit/integrity-sweep', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ validatorNode: `WARMABLON-UI-OPERATOR-${Date.now()}` })
      });
      if (res.ok) {
        const result = await res.json();
        setSweepFeedback(`✓ Block ${result.block.index} signed & chained (${result.block.blockHash.substring(0, 16)}...)`);
        await fetchLedger();
      } else {
        setSweepFeedback('Sweep execution error');
      }
    } catch (err) {
      setSweepFeedback('Sweep connection failure');
    } finally {
      setIsSweeping(false);
      setTimeout(() => setSweepFeedback(null), 5000);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && onClose) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const filteredCorridors = SADC_TRADE_CORRIDORS.filter(c => {
    const matchesSearch = c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.originHub.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.terminalPort.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.countriesTransit.some(k => k.toLowerCase().includes(searchQuery.toLowerCase())) ||
      c.primaryCommodities.some(cm => cm.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesMode = modeFilter === 'ALL' || c.modes.includes(modeFilter as any);
    return matchesSearch && matchesMode;
  });

  const filteredBorders = SADC_BORDER_POSTS.filter(b => {
    return b.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      b.countryA.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      b.countryB.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      b.keyTradeCorridor.toLowerCase().includes(searchQuery.toLowerCase());
  });

  // Calculate duty comparison
  const standardMfnDutyRate = 0.25; // 25% default MFN tariff
  const preferentialRate = isOriginatingGoods ? 0.0 : 0.10;
  const standardDutyUSD = cargoValueUSD * standardMfnDutyRate;
  const preferentialDutyUSD = cargoValueUSD * preferentialRate;
  const savingsUSD = standardDutyUSD - preferentialDutyUSD;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-2 sm:p-4 overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-6xl max-h-[92vh] flex flex-col bg-zinc-950 border border-emerald-500/40 rounded-2xl shadow-2xl shadow-emerald-950/40 overflow-hidden font-sans text-zinc-100">
        
        {/* Header Ribbon */}
        <div className="flex flex-wrap items-center justify-between gap-4 p-4 sm:p-5 bg-gradient-to-r from-emerald-950/70 via-zinc-900 to-cyan-950/70 border-b border-emerald-500/30">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-400/50 flex items-center justify-center text-emerald-400">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-lg sm:text-xl font-bold tracking-tight text-emerald-300">
                  SADC Regional Transit & Trade Corridors
                </h2>
                <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-[10px] font-mono text-emerald-300 font-bold uppercase">
                  432 Hz SADC Grid
                </span>
              </div>
              <p className="text-xs text-zinc-400 font-mono">
                Multimodal freight paths, One-Stop Border Posts & Zero-Trust Audit Ledger
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => {
                if (onClose) onClose();
                window.dispatchEvent(new CustomEvent('OPEN_BANK_TELEMETRY'));
              }}
              className="px-3 py-1.5 rounded-xl bg-cyan-950/80 hover:bg-cyan-900 border border-cyan-500/50 hover:border-cyan-400 text-cyan-300 font-mono text-xs font-bold transition-colors cursor-pointer flex items-center gap-1.5"
              title="Open Global Central Bank Telemetry"
            >
              <span>🏛️</span>
              <span className="hidden sm:inline">Central Banks (198+)</span>
            </button>
            <button
              type="button"
              onClick={() => {
                if (onClose) onClose();
                window.dispatchEvent(new CustomEvent('OPEN_KWACHA_AMPLIFIER'));
              }}
              className="px-3 py-1.5 rounded-xl bg-emerald-950/80 hover:bg-emerald-900 border border-emerald-500/50 hover:border-emerald-400 text-emerald-300 font-mono text-xs font-bold transition-colors cursor-pointer flex items-center gap-1.5"
              title="Open Kwacha Frequency Amplifier"
            >
              <span>🇿🇲</span>
              <span className="hidden sm:inline">Kwacha Amplifier</span>
            </button>
            {onClose && (
              <button
                onClick={onClose}
                className="p-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-zinc-400 hover:text-zinc-200 transition-colors cursor-pointer"
                title="Close (Esc)"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center gap-2 px-4 py-2 bg-zinc-900/60 border-b border-zinc-800 overflow-x-auto">
          <button
            onClick={() => {
              setActiveTab('corridors');
              playHarmonicSynthesisTone(432, 0.05);
            }}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer whitespace-nowrap ${
              activeTab === 'corridors'
                ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow-sm'
                : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/60'
            }`}
          >
            <Navigation className="w-3.5 h-3.5" />
            <span>Transit Corridors ({SADC_TRADE_CORRIDORS.length})</span>
          </button>
          <button
            onClick={() => {
              setActiveTab('borders');
              playHarmonicSynthesisTone(528, 0.05);
            }}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer whitespace-nowrap ${
              activeTab === 'borders'
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm'
                : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/60'
            }`}
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Border Posts & OSBPs ({SADC_BORDER_POSTS.length})</span>
          </button>
          <button
            onClick={() => {
              setActiveTab('regimes');
              playHarmonicSynthesisTone(639, 0.05);
            }}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer whitespace-nowrap ${
              activeTab === 'regimes'
                ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 shadow-sm'
                : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/60'
            }`}
          >
            <DollarSign className="w-3.5 h-3.5" />
            <span>AfCFTA & SADC Tariffs</span>
          </button>
          <button
            onClick={() => {
              setActiveTab('audit-ledger');
              playHarmonicSynthesisTone(741, 0.05);
            }}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer whitespace-nowrap ${
              activeTab === 'audit-ledger'
                ? 'bg-purple-500/20 text-purple-300 border border-purple-500/40 shadow-sm'
                : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/60'
            }`}
          >
            <Cpu className="w-3.5 h-3.5" />
            <span>Zero-Trust Audit Ledger</span>
            {ledgerData && (
              <span className="px-1.5 py-0.2 rounded bg-purple-500/30 text-[10px] font-mono">
                #{ledgerData.totalSweeps}
              </span>
            )}
          </button>
        </div>

        {/* Content Body */}
        <div className="flex-1 p-4 sm:p-5 overflow-y-auto space-y-4">
          
          {/* TAB 1: TRANSIT CORRIDORS */}
          {activeTab === 'corridors' && (
            <div className="space-y-4">
              {/* Search & Mode Filter */}
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="relative flex-1 min-w-[240px]">
                  <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search corridor, port, commodity (Lobito, Dar, Walvis, Copper, Beira)..."
                    className="w-full pl-9 pr-4 py-2 rounded-xl bg-zinc-900/80 border border-zinc-700 text-xs text-zinc-200 placeholder-zinc-500 focus:outline-none focus:border-emerald-400"
                  />
                </div>
                <div className="flex items-center gap-1.5 text-xs font-mono">
                  <span className="text-zinc-400 flex items-center gap-1">
                    <Filter className="w-3.5 h-3.5" /> Mode:
                  </span>
                  {(['ALL', 'HEAVY_RAIL', 'PAVED_HIGHWAY', 'DEEP_SEA_PORT'] as const).map(m => (
                    <button
                      key={m}
                      onClick={() => setModeFilter(m)}
                      className={`px-2.5 py-1 rounded-lg text-[11px] font-bold cursor-pointer transition-all ${
                        modeFilter === m
                          ? 'bg-emerald-500/30 border border-emerald-400 text-emerald-300'
                          : 'bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-zinc-200'
                      }`}
                    >
                      {m.replace('_', ' ')}
                    </button>
                  ))}
                </div>
              </div>

              {/* Corridor List & Detail Split View */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
                {/* Corridors Selector Column */}
                <div className="lg:col-span-5 space-y-2.5 max-h-[520px] overflow-y-auto pr-1">
                  {filteredCorridors.map((corridor) => {
                    const isSelected = selectedCorridor.id === corridor.id;
                    return (
                      <div
                        key={corridor.id}
                        onClick={() => {
                          setSelectedCorridor(corridor);
                          playHarmonicSynthesisTone(corridor.harmonicResonanceHz, 0.08);
                        }}
                        className={`p-3.5 rounded-xl border transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-emerald-950/40 border-emerald-400 shadow-md shadow-emerald-950/50'
                            : 'bg-zinc-900/60 border-zinc-800/80 hover:border-zinc-700 hover:bg-zinc-900'
                        }`}
                      >
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="font-bold text-sm text-emerald-300">
                                {corridor.name}
                              </span>
                            </div>
                            <div className="text-xs text-zinc-400 flex items-center gap-1.5 mt-0.5">
                              <MapPin className="w-3 h-3 text-emerald-400" />
                              <span>{corridor.oceanGateway}</span>
                            </div>
                          </div>
                          <span className="px-2 py-0.5 rounded bg-zinc-800 text-[10px] font-mono text-zinc-300 border border-zinc-700">
                            {corridor.code}
                          </span>
                        </div>

                        <div className="grid grid-cols-3 gap-2 mt-3 pt-2 border-t border-zinc-800/70 text-[11px] font-mono">
                          <div>
                            <span className="text-zinc-500 block text-[9px]">DISTANCE</span>
                            <span className="text-zinc-200 font-bold">{corridor.totalDistanceKm} km</span>
                          </div>
                          <div>
                            <span className="text-zinc-500 block text-[9px]">TRANSIT TIME</span>
                            <span className="text-emerald-400 font-bold">{corridor.avgTransitDays} days</span>
                          </div>
                          <div>
                            <span className="text-zinc-500 block text-[9px]">STATUS</span>
                            <span className="text-cyan-400 font-bold text-[10px]">{corridor.status.replace('_', ' ')}</span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Selected Corridor Detail Panel */}
                <div className="lg:col-span-7 bg-zinc-900/90 border border-emerald-500/30 rounded-xl p-5 space-y-4">
                  <div className="flex items-center justify-between gap-2 border-b border-zinc-800 pb-3">
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-base font-bold text-emerald-300">
                          {selectedCorridor.name}
                        </h3>
                        <span className="px-2 py-0.5 rounded bg-emerald-500/20 border border-emerald-400/40 text-[10px] font-mono text-emerald-300 font-bold">
                          {selectedCorridor.code}
                        </span>
                      </div>
                      <p className="text-xs text-zinc-400 mt-0.5">
                        {selectedCorridor.oceanGateway}
                      </p>
                    </div>

                    <button
                      onClick={() => playHarmonicSynthesisTone(selectedCorridor.harmonicResonanceHz, 0.2)}
                      className="p-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 text-emerald-400 hover:text-emerald-300 transition-colors cursor-pointer"
                      title="Play Harmonic Transit Frequency"
                    >
                      <Volume2 className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Route Infographic Stats */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                    <div className="p-2.5 rounded-lg bg-zinc-950 border border-zinc-800">
                      <span className="text-[10px] text-zinc-500 font-mono block">ORIGIN HUB</span>
                      <span className="text-xs font-bold text-zinc-200">{selectedCorridor.originHub}</span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-zinc-950 border border-zinc-800">
                      <span className="text-[10px] text-zinc-500 font-mono block">TERMINAL PORT</span>
                      <span className="text-xs font-bold text-zinc-200">{selectedCorridor.terminalPort}</span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-zinc-950 border border-zinc-800">
                      <span className="text-[10px] text-zinc-500 font-mono block">DISTANCE & TIME</span>
                      <span className="text-xs font-bold text-emerald-400">{selectedCorridor.totalDistanceKm} km (~{selectedCorridor.avgTransitDays} d)</span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-zinc-950 border border-zinc-800">
                      <span className="text-[10px] text-zinc-500 font-mono block">TRANSIT COUNTRIES</span>
                      <span className="text-xs font-bold text-cyan-300">{selectedCorridor.countriesTransit.join(', ')}</span>
                    </div>
                  </div>

                  {/* Strategic Importance Analysis */}
                  <div className="p-3.5 rounded-xl bg-emerald-950/20 border border-emerald-500/30 space-y-1.5">
                    <span className="text-xs font-bold text-emerald-300 flex items-center gap-1.5">
                      <Globe className="w-3.5 h-3.5" />
                      Strategic Geopolitical Importance
                    </span>
                    <p className="text-xs text-zinc-300 leading-relaxed">
                      {selectedCorridor.strategicImportance}
                    </p>
                  </div>

                  {/* Primary Commodities & Currencies */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="p-3 rounded-xl bg-zinc-950 border border-zinc-800 space-y-2">
                      <span className="text-[11px] font-bold text-zinc-400 flex items-center gap-1">
                        <Layers className="w-3.5 h-3.5 text-emerald-400" />
                        Anchor Cargo Commodities
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {selectedCorridor.primaryCommodities.map((item, idx) => (
                          <span key={idx} className="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-[10px] font-mono text-zinc-300">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-zinc-950 border border-zinc-800 space-y-2">
                      <span className="text-[11px] font-bold text-zinc-400 flex items-center gap-1">
                        <DollarSign className="w-3.5 h-3.5 text-cyan-400" />
                        Settlement Currencies
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {selectedCorridor.currencyMatrix.map((curr, idx) => (
                          <span key={idx} className="px-2 py-0.5 rounded bg-cyan-950/40 border border-cyan-500/30 text-[10px] font-mono font-bold text-cyan-300">
                            {curr}
                          </span>
                        ))}
                      </div>
                      <div className="text-[10px] text-zinc-500 font-mono pt-1">
                        Cross-Borders: {selectedCorridor.keyBorders.join(', ')}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: BORDER POSTS & OSBPS */}
          {activeTab === 'borders' && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {filteredBorders.map((border) => {
                  const isSelected = selectedBorder.id === border.id;
                  const statusColors = {
                    OPTIMAL_FLOW: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
                    MODERATE_QUEUE: 'bg-amber-500/20 text-amber-300 border-amber-500/40',
                    HIGH_VOLUME_ALERT: 'bg-rose-500/20 text-rose-300 border-rose-500/40'
                  };

                  return (
                    <div
                      key={border.id}
                      onClick={() => {
                        setSelectedBorder(border);
                        playHarmonicSynthesisTone(528, 0.08);
                      }}
                      className={`p-4 rounded-xl border transition-all cursor-pointer space-y-3 ${
                        isSelected
                          ? 'bg-cyan-950/40 border-cyan-400 shadow-md shadow-cyan-950/50'
                          : 'bg-zinc-900/60 border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <div className="flex items-center gap-1.5 text-base">
                            <span>{border.countryA.flag}</span>
                            <ArrowRight className="w-3 h-3 text-zinc-500" />
                            <span>{border.countryB.flag}</span>
                            {border.thirdCountry && (
                              <>
                                <ArrowRight className="w-3 h-3 text-zinc-500" />
                                <span>{border.thirdCountry.flag}</span>
                              </>
                            )}
                          </div>
                          <h4 className="text-xs font-bold text-zinc-200 mt-1">
                            {border.name}
                          </h4>
                        </div>
                        <span className={`px-2 py-0.5 rounded text-[9px] font-mono font-bold border ${statusColors[border.liveStatus]}`}>
                          {border.liveStatus.replace('_', ' ')}
                        </span>
                      </div>

                      <div className="space-y-1 text-[11px] font-mono text-zinc-400">
                        <div className="flex justify-between">
                          <span className="text-zinc-500">CORRIDOR:</span>
                          <span className="text-zinc-300 font-bold">{border.keyTradeCorridor}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-zinc-500">AVG CLEARANCE:</span>
                          <span className="text-cyan-400 font-bold">{border.avgClearanceHours} hours</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-zinc-500">DAILY TRUCKS:</span>
                          <span className="text-emerald-400 font-bold">{border.dailyCargoTrucks} freight units</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-zinc-500">SYSTEM:</span>
                          <span className="text-zinc-300 truncate max-w-[160px]">{border.customsSystems}</span>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-1 pt-2 border-t border-zinc-800">
                        {border.tariffRegimes.map((regime, idx) => (
                          <span key={idx} className="px-1.5 py-0.5 rounded bg-zinc-800 text-[9px] font-mono text-zinc-300">
                            {regime}
                          </span>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* TAB 3: TRADE REGIMES & TARIFF SIMULATOR */}
          {activeTab === 'regimes' && (
            <div className="space-y-4">
              {/* Tariff Simulator Box */}
              <div className="p-5 rounded-2xl bg-zinc-900/90 border border-amber-500/30 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-zinc-800 pb-3">
                  <div>
                    <h3 className="text-sm font-bold text-amber-300 flex items-center gap-1.5">
                      <DollarSign className="w-4 h-4" />
                      AfCFTA / SADC / COMESA Tariff & Duty Preference Calculator
                    </h3>
                    <p className="text-xs text-zinc-400">
                      Simulate landed freight duties under Rules of Origin preference vs Standard MFN Tariffs
                    </p>
                  </div>
                  <span className="px-2.5 py-1 rounded-lg bg-amber-500/20 border border-amber-400/40 text-amber-300 text-xs font-mono font-bold">
                    Zero-Tariff Elimination Tracker
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="text-[11px] font-bold text-zinc-400 block mb-1">
                      CONSIGNMENT VALUE (USD)
                    </label>
                    <input
                      type="number"
                      value={cargoValueUSD}
                      onChange={(e) => setCargoValueUSD(Math.max(100, Number(e.target.value)))}
                      className="w-full px-3.5 py-2 rounded-xl bg-zinc-950 border border-zinc-700 text-sm font-mono text-amber-300 focus:outline-none focus:border-amber-400"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-bold text-zinc-400 block mb-1">
                      TRADE PROTOCOL
                    </label>
                    <select
                      value={selectedRegime}
                      onChange={(e) => setSelectedRegime(e.target.value)}
                      className="w-full px-3.5 py-2 rounded-xl bg-zinc-950 border border-zinc-700 text-xs font-mono text-zinc-200 focus:outline-none focus:border-amber-400"
                    >
                      {TRADE_REGIMES.map(r => (
                        <option key={r.acronym} value={r.acronym}>{r.acronym} ({r.name})</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="text-[11px] font-bold text-zinc-400 block mb-1">
                      ORIGIN CERTIFICATE STATUS
                    </label>
                    <button
                      onClick={() => setIsOriginatingGoods(!isOriginatingGoods)}
                      className={`w-full px-3.5 py-2 rounded-xl border text-xs font-mono font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                        isOriginatingGoods
                          ? 'bg-emerald-500/20 border-emerald-400 text-emerald-300'
                          : 'bg-zinc-900 border-zinc-700 text-zinc-400'
                      }`}
                    >
                      {isOriginatingGoods ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> : <AlertTriangle className="w-4 h-4 text-amber-400" />}
                      <span>{isOriginatingGoods ? 'Originating (35%+ Local Value)' : 'Non-Originating Goods'}</span>
                    </button>
                  </div>
                </div>

                {/* Calculation Output Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                  <div className="p-3.5 rounded-xl bg-zinc-950 border border-zinc-800">
                    <span className="text-[10px] text-zinc-500 font-mono block">STANDARD MFN DUTY (25%)</span>
                    <span className="text-base font-mono font-bold text-rose-400">${standardDutyUSD.toLocaleString()}</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-zinc-950 border border-zinc-800">
                    <span className="text-[10px] text-zinc-500 font-mono block">PREFERENTIAL DUTY ({preferentialRate * 100}%)</span>
                    <span className="text-base font-mono font-bold text-emerald-400">${preferentialDutyUSD.toLocaleString()}</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-emerald-950/30 border border-emerald-500/40">
                    <span className="text-[10px] text-emerald-400 font-mono block">SOVEREIGN SAVINGS</span>
                    <span className="text-base font-mono font-bold text-emerald-300">+${savingsUSD.toLocaleString()} USD</span>
                  </div>
                </div>
              </div>

              {/* Trade Regime Frameworks Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {TRADE_REGIMES.map((regime) => (
                  <div key={regime.acronym} className="p-4 rounded-xl bg-zinc-900/70 border border-zinc-800 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-bold text-amber-300">{regime.acronym}</span>
                      <span className="px-2 py-0.5 rounded bg-zinc-800 text-[10px] font-mono text-zinc-400">
                        {regime.memberCount} Nations
                      </span>
                    </div>
                    <p className="text-xs font-medium text-zinc-200">{regime.name}</p>
                    <div className="space-y-1 text-[11px] font-mono text-zinc-400 pt-2 border-t border-zinc-800/70">
                      <div>
                        <span className="text-zinc-500">RULES OF ORIGIN:</span> {regime.rulesOfOrigin}
                      </div>
                      <div>
                        <span className="text-zinc-500">TARIFF ELIMINATION:</span> {regime.tariffReduction}
                      </div>
                      <div>
                        <span className="text-zinc-500">SETTLEMENT:</span> {regime.currencySettlement}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: ZERO-TRUST AUDIT INTEGRITY LEDGER */}
          {activeTab === 'audit-ledger' && (
            <div className="space-y-4">
              {/* Top Controls & Integrity Bar */}
              <div className="p-4 rounded-2xl bg-gradient-to-r from-purple-950/40 via-zinc-900 to-zinc-950 border border-purple-500/40 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm sm:text-base font-bold text-purple-300 flex items-center gap-1.5">
                      <Cpu className="w-4 h-4" />
                      Zero-Trust Cryptographic Audit Ledger
                    </h3>
                    <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-[10px] font-mono text-emerald-300 font-bold">
                      SHA-256 Chained
                    </span>
                  </div>
                  <p className="text-xs text-zinc-400 font-mono mt-0.5">
                    Continuous tamper-proof ledger logging every central bank synchronization sweep
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={triggerAuditSweep}
                    disabled={isSweeping}
                    className="px-3.5 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-mono text-xs font-bold transition-all cursor-pointer flex items-center gap-2 shadow-lg shadow-purple-950/60 disabled:opacity-50"
                  >
                    <RefreshCw className={`w-3.5 h-3.5 ${isSweeping ? 'animate-spin' : ''}`} />
                    <span>{isSweeping ? 'Signing Sweep...' : 'Trigger Cryptographic Sweep'}</span>
                  </button>
                </div>
              </div>

              {sweepFeedback && (
                <div className="p-3 rounded-xl bg-purple-950/50 border border-purple-500/50 text-xs font-mono text-purple-200 animate-in fade-in">
                  {sweepFeedback}
                </div>
              )}

              {/* Ledger Summary Stats */}
              {ledgerData && (
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-800">
                    <span className="text-[10px] text-zinc-500 font-mono block">TOTAL AUDIT SWEEPS</span>
                    <span className="text-base font-mono font-bold text-purple-300">Sweep {ledgerData.totalSweeps}</span>
                  </div>
                  <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-800">
                    <span className="text-[10px] text-zinc-500 font-mono block">CHAIN INTEGRITY</span>
                    <span className="text-base font-mono font-bold text-emerald-400">{ledgerData.chainIntegrity}</span>
                  </div>
                  <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 col-span-2">
                    <span className="text-[10px] text-zinc-500 font-mono block">HEAD BLOCK HASH</span>
                    <span className="text-xs font-mono text-zinc-300 truncate block">{ledgerData.currentChainHeadHash}</span>
                  </div>
                </div>
              )}

              {/* Block Chain Feed */}
              <div className="space-y-2.5 max-h-[380px] overflow-y-auto pr-1">
                {ledgerData?.recentBlocks?.map((block) => (
                  <div key={block.index} className="p-3.5 rounded-xl bg-zinc-900/80 border border-zinc-800 space-y-2 font-mono text-xs">
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-zinc-800/80 pb-2">
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 font-bold border border-purple-500/40">
                          BLOCK {block.index}
                        </span>
                        <span className="text-zinc-400 text-[11px]">
                          {new Date(block.timestamp).toLocaleString()}
                        </span>
                      </div>
                      <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[10px] font-bold border border-emerald-500/30">
                        {block.status}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] text-zinc-400">
                      <div>
                        <span className="text-zinc-500 block text-[9px]">BLOCK HASH</span>
                        <span className="text-zinc-300 text-[10px] break-all">{block.blockHash}</span>
                      </div>
                      <div>
                        <span className="text-zinc-500 block text-[9px]">PREVIOUS HASH</span>
                        <span className="text-zinc-400 text-[10px] break-all">{block.previousHash}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center justify-between gap-2 pt-1 text-[10px] text-zinc-400 border-t border-zinc-800/60">
                      <div>
                        <span className="text-zinc-500">VALIDATOR:</span> {block.validatorNode}
                      </div>
                      <div>
                        <span className="text-zinc-500">LME COPPER:</span> ${block.commodityParity?.copperPriceLmeUSD}/t (K{block.commodityParity?.copperKwachaParity})
                      </div>
                      <div>
                        <span className="text-zinc-500">FREQ LOCK:</span> {block.frequencyLock}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Footer Ribbon */}
        <div className="p-3.5 bg-zinc-950 border-t border-zinc-800 flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-zinc-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>SADC Transit Telemetry: 8 Border OSBPs Monitored • 432 Hz SADC Harmonic Grid</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-zinc-500">ZRA ASYCUDA / BURS / ZIMRA / NamRA / TRA Joint Protocol</span>
          </div>
        </div>

      </div>
    </div>
  );
}
