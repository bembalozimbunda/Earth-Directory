import React, { useState, useEffect } from 'react';
import { 
  Globe, Wifi, Activity, Zap, RefreshCw, Server, Clock, 
  ShieldCheck, Database, ArrowUpRight, CheckCircle2, Radio, 
  Terminal, Cpu, Layers, X, DownloadCloud, Coins, Network, Sparkles 
} from 'lucide-react';
import { globalInternetSync, GlobalSyncState } from '../data/globalInternetSync';

interface GlobalInternetSyncPortalProps {
  onClose: () => void;
}

export function GlobalInternetSyncPortal({ onClose }: GlobalInternetSyncPortalProps) {
  const [syncState, setSyncState] = useState<GlobalSyncState>(globalInternetSync.getState());
  const [activeTab, setActiveTab] = useState<'overview' | 'gateways' | 'time' | 'currencies' | 'logs'>('overview');
  const [justUpdated, setJustUpdated] = useState(false);

  useEffect(() => {
    const unsubscribe = globalInternetSync.subscribe(state => {
      setSyncState(state);
    });
    return () => unsubscribe();
  }, []);

  const handleSyncNow = async () => {
    setJustUpdated(false);
    await globalInternetSync.forceFullSystemUpdate();
    setJustUpdated(true);
    setTimeout(() => setJustUpdated(false), 3000);
  };

  return (
    <div className="fixed inset-0 z-[120] bg-zinc-950/95 backdrop-blur-2xl flex flex-col p-3 sm:p-6 overflow-hidden">
      {/* Background Matrix Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.12)_0%,transparent_100%)]" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMTYsIDE4NSwgMTI5LCAwLjA3KSIvPjwvc3ZnPg==')]" />
      </div>

      {/* Top Header Bar */}
      <div className="relative z-10 flex items-center justify-between pb-4 border-b border-zinc-800/80 bg-zinc-950/60">
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-emerald-950/80 border border-emerald-500/40 flex items-center justify-center shadow-[0_0_25px_rgba(16,185,129,0.3)]">
            <Globe className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-400 animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-base sm:text-xl font-light tracking-widest text-white uppercase">
                Global Open Internet <span className="text-emerald-400 font-medium">Integration & System Update</span>
              </h2>
              <span className="hidden md:inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[10px] font-mono uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                Live Connected
              </span>
            </div>
            <p className="text-[11px] text-zinc-400 font-mono tracking-wider">
              Protocol: {syncState.connectionProtocol} • Latency: {syncState.averageLatencyMs}ms • Loss: 0.00%
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={handleSyncNow}
            disabled={syncState.isSyncing}
            className="flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 disabled:bg-zinc-800 disabled:text-zinc-500 text-white text-xs font-mono uppercase tracking-widest transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] cursor-pointer"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${syncState.isSyncing ? 'animate-spin' : ''}`} />
            <span className="hidden sm:inline">
              {syncState.isSyncing ? 'Syncing Matrix...' : 'Update System Now'}
            </span>
            <span className="sm:hidden">Sync</span>
          </button>

          <button
            onClick={onClose}
            className="p-2 sm:p-2.5 rounded-lg bg-zinc-900/80 hover:bg-zinc-800 border border-zinc-800 text-zinc-400 hover:text-white transition-colors cursor-pointer"
            title="Close Portal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Notification Toast if updated */}
      {justUpdated && (
        <div className="relative z-20 my-2 py-2 px-4 bg-emerald-950/80 border border-emerald-500/50 rounded-lg text-emerald-300 text-xs font-mono flex items-center justify-between shadow-[0_0_25px_rgba(16,185,129,0.2)]">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Planetary system state updated across all 8 Global IXPs, Atomic NTP Clocks, and Sovereign Currencies.</span>
          </div>
          <span className="text-[10px] text-emerald-400/80 uppercase">0.00ms Drift</span>
        </div>
      )}

      {/* Navigation Tabs */}
      <div className="relative z-10 flex items-center gap-2 py-3 overflow-x-auto scrollbar-none border-b border-zinc-800/60">
        {[
          { id: 'overview', label: 'System Overview', icon: Activity },
          { id: 'gateways', label: 'Planetary IXP Gateways', icon: Server },
          { id: 'time', label: 'Atomic Global Clocks', icon: Clock },
          { id: 'currencies', label: 'Sovereign Currencies & Parity', icon: Coins },
          { id: 'logs', label: 'Live Telemetry Stream', icon: Terminal }
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg font-mono text-xs uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer ${
              activeTab === tab.id
                ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/50 shadow-[0_0_15px_rgba(16,185,129,0.2)]'
                : 'bg-zinc-900/40 text-zinc-400 hover:text-zinc-200 border border-zinc-800/60 hover:bg-zinc-800/50'
            }`}
          >
            <tab.icon className="w-3.5 h-3.5" />
            {tab.label}
          </button>
        ))}
      </div>

      {/* Main Content Body */}
      <div className="relative z-10 flex-1 overflow-y-auto pt-4 pb-8 space-y-4">
        {/* OVERVIEW TAB */}
        {activeTab === 'overview' && (
          <div className="space-y-4">
            {/* Top 4 KPI Metrics */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              <div className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800/80 flex flex-col justify-between">
                <div className="flex items-center justify-between text-zinc-500 text-xs font-mono uppercase mb-2">
                  <span>Connection State</span>
                  <Wifi className="w-4 h-4 text-emerald-400" />
                </div>
                <div className="text-lg sm:text-xl font-mono text-emerald-400 font-medium">
                  OPEN INTERNET LIVE
                </div>
                <div className="text-[11px] text-zinc-400 font-mono mt-1">
                  HTTP/3 QUIC + TLS 1.3
                </div>
              </div>

              <div className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800/80 flex flex-col justify-between">
                <div className="flex items-center justify-between text-zinc-500 text-xs font-mono uppercase mb-2">
                  <span>Planetary Latency</span>
                  <Activity className="w-4 h-4 text-cyan-400" />
                </div>
                <div className="text-lg sm:text-xl font-mono text-cyan-400 font-medium">
                  {syncState.averageLatencyMs} ms
                </div>
                <div className="text-[11px] text-zinc-400 font-mono mt-1">
                  0.00% Packet Loss
                </div>
              </div>

              <div className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800/80 flex flex-col justify-between">
                <div className="flex items-center justify-between text-zinc-500 text-xs font-mono uppercase mb-2">
                  <span>Atomic Time Drift</span>
                  <Clock className="w-4 h-4 text-amber-400" />
                </div>
                <div className="text-lg sm:text-xl font-mono text-amber-400 font-medium">
                  ±{syncState.ntpSyncDriftMs} ms
                </div>
                <div className="text-[11px] text-zinc-400 font-mono mt-1">
                  Synchronized with CAT UTC+2
                </div>
              </div>

              <div className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800/80 flex flex-col justify-between">
                <div className="flex items-center justify-between text-zinc-500 text-xs font-mono uppercase mb-2">
                  <span>Synced Nodes</span>
                  <Database className="w-4 h-4 text-violet-400" />
                </div>
                <div className="text-lg sm:text-xl font-mono text-violet-400 font-medium">
                  {syncState.totalSyncedNations} Nations / 116 Dist.
                </div>
                <div className="text-[11px] text-zinc-400 font-mono mt-1">
                  8 Global Transit Hubs
                </div>
              </div>
            </div>

            {/* Live Update Status Banner */}
            <div className="p-5 rounded-xl bg-gradient-to-r from-emerald-950/40 via-zinc-900/60 to-cyan-950/40 border border-emerald-500/30 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-emerald-400" />
                  <span className="text-sm font-light text-white tracking-widest uppercase font-mono">
                    Global Open Internet Consensus: Fully Operational
                  </span>
                </div>
                <p className="text-xs text-zinc-400 max-w-3xl leading-relaxed">
                  The Earth Directory Universal Core Engine is active and synchronized across public internet backbones. All continental portals, Zambian administrative wards, and sovereign exchange baselines receive real-time updates directly over encrypted high-throughput pipelines.
                </p>
              </div>
              <button
                onClick={handleSyncNow}
                disabled={syncState.isSyncing}
                className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-mono uppercase tracking-widest rounded-lg transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] whitespace-nowrap cursor-pointer"
              >
                {syncState.isSyncing ? 'Synchronizing...' : 'Resync Matrix'}
              </button>
            </div>

            {/* Split View: Gateways + Planetary Clocks Preview */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {/* Active IXP Summary */}
              <div className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-800 flex flex-col">
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-zinc-800">
                  <div className="flex items-center gap-2">
                    <Server className="w-4 h-4 text-emerald-400" />
                    <span className="text-xs font-mono uppercase tracking-widest text-zinc-300">
                      Global Transit Gateways
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400">8/8 ONLINE</span>
                </div>
                <div className="space-y-2">
                  {syncState.globalNodes.slice(0, 4).map(node => (
                    <div key={node.id} className="flex items-center justify-between p-2.5 rounded bg-zinc-950/60 border border-zinc-800/60 text-xs font-mono">
                      <div>
                        <span className="text-white">{node.name}</span>
                        <span className="text-zinc-500 text-[10px] ml-2">({node.location})</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-emerald-400">{node.pingMs}ms</span>
                        <span className="px-1.5 py-0.5 rounded bg-emerald-950 border border-emerald-500/40 text-[9px] text-emerald-300">
                          {node.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Planetary Time Summary */}
              <div className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-800 flex flex-col">
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-zinc-800">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-amber-400" />
                    <span className="text-xs font-mono uppercase tracking-widest text-zinc-300">
                      Planetary Time Coordination
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-amber-400">432Hz HARMONIC LOCK</span>
                </div>
                <div className="space-y-2">
                  {syncState.planetaryTimes.slice(0, 4).map(timeNode => (
                    <div key={timeNode.city} className="flex items-center justify-between p-2.5 rounded bg-zinc-950/60 border border-zinc-800/60 text-xs font-mono">
                      <div>
                        <span className="text-white">{timeNode.city}</span>
                        <span className="text-zinc-500 text-[10px] ml-2">({timeNode.offset})</span>
                      </div>
                      <div className="text-amber-400 font-medium">
                        {timeNode.timeFormatted}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* GATEWAYS TAB */}
        {activeTab === 'gateways' && (
          <div className="space-y-3">
            <div className="text-xs font-mono text-zinc-400 mb-2 flex items-center justify-between">
              <span>8 Global Internet Exchange Points (IXPs) & Backbone Fiber Nodes</span>
              <span className="text-emerald-400">Total Throughput: ~6,750 Gbps</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {syncState.globalNodes.map(node => (
                <div key={node.id} className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800 flex flex-col justify-between gap-3">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="text-sm font-medium text-white font-mono">{node.name}</h4>
                      <p className="text-xs text-zinc-400">{node.location} • <span className="text-zinc-500">{node.region}</span></p>
                    </div>
                    <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[10px] font-mono text-emerald-400">
                      {node.status}
                    </span>
                  </div>

                  <div className="grid grid-cols-3 gap-2 pt-2 border-t border-zinc-800/80 text-center font-mono">
                    <div className="bg-zinc-950/60 p-2 rounded border border-zinc-800/40">
                      <div className="text-[10px] text-zinc-500 uppercase">Latency</div>
                      <div className="text-sm text-cyan-400 font-bold">{node.pingMs} ms</div>
                    </div>
                    <div className="bg-zinc-950/60 p-2 rounded border border-zinc-800/40">
                      <div className="text-[10px] text-zinc-500 uppercase">IXP / Exchange</div>
                      <div className="text-xs text-white truncate">{node.ixp}</div>
                    </div>
                    <div className="bg-zinc-950/60 p-2 rounded border border-zinc-800/40">
                      <div className="text-[10px] text-zinc-500 uppercase">Capacity</div>
                      <div className="text-xs text-emerald-400 font-bold">{node.bandwidthGbps} Gbps</div>
                    </div>
                  </div>

                  <div className="text-[10px] font-mono text-zinc-500 flex items-center justify-between">
                    <span>Subnet: {node.ipRange}</span>
                    <span className="text-emerald-500 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                      Active Route
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TIME TAB */}
        {activeTab === 'time' && (
          <div className="space-y-4">
            <div className="p-4 rounded-xl bg-amber-950/30 border border-amber-500/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <Clock className="w-8 h-8 text-amber-400" />
                <div>
                  <h4 className="text-sm font-medium text-white uppercase tracking-widest font-mono">
                    Universal Atomic NTP Time Matrix
                  </h4>
                  <p className="text-xs text-zinc-400">
                    Master anchor: Central Africa Time (CAT / Lusaka Root UTC+2) synchronizing with UTC Zero Datum.
                  </p>
                </div>
              </div>
              <div className="text-right font-mono">
                <span className="text-xs text-zinc-500 block">Current Solfeggio Lock</span>
                <span className="text-sm text-amber-400 font-bold">432.00 Hz Fundamental</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {syncState.planetaryTimes.map(timeNode => (
                <div key={timeNode.city} className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800/80 flex flex-col justify-between">
                  <div className="flex items-center justify-between text-zinc-500 text-xs font-mono uppercase mb-2">
                    <span>{timeNode.city}</span>
                    <span className="px-1.5 py-0.5 rounded bg-zinc-950 border border-zinc-800 text-[10px] text-zinc-400">
                      {timeNode.offset}
                    </span>
                  </div>
                  <div className="text-2xl font-mono text-white font-semibold tracking-wider my-2">
                    {timeNode.timeFormatted}
                  </div>
                  <div className="text-[11px] text-zinc-400 font-mono flex items-center justify-between pt-2 border-t border-zinc-800/60">
                    <span className="truncate">{timeNode.region}</span>
                    <span className="text-amber-400 text-[10px]">±{timeNode.driftMs}ms</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CURRENCIES TAB */}
        {activeTab === 'currencies' && (
          <div className="space-y-3">
            <div className="text-xs font-mono text-zinc-400 mb-2 flex items-center justify-between">
              <span>Sovereign Foreign Exchange & Mineral Commodities Feed</span>
              <span className="text-cyan-400">Base Currency: ZMW / USD / SDR</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {syncState.currencyRates.map(curr => (
                <div key={curr.pair} className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800 flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-sm text-white font-bold">{curr.pair}</span>
                    <span className={`text-xs font-mono px-2 py-0.5 rounded ${
                      curr.change24h > 0 
                        ? 'bg-emerald-950/80 text-emerald-400 border border-emerald-500/40' 
                        : curr.change24h < 0 
                        ? 'bg-red-950/80 text-red-400 border border-red-500/40' 
                        : 'bg-zinc-800 text-zinc-400'
                    }`}>
                      {curr.change24h >= 0 ? `+${curr.change24h}%` : `${curr.change24h}%`}
                    </span>
                  </div>

                  <div className="text-2xl font-mono text-cyan-300 font-semibold my-1">
                    {curr.rate.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </div>

                  <div className="text-[10px] font-mono text-zinc-500 flex items-center justify-between pt-2 border-t border-zinc-800/60">
                    <span>Status: {curr.status}</span>
                    <span className="text-emerald-400 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      Live Parity
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* LOGS TAB */}
        {activeTab === 'logs' && (
          <div className="p-4 rounded-xl bg-black border border-zinc-800 font-mono text-xs text-zinc-300 space-y-2 h-[450px] overflow-y-auto scrollbar-thin scrollbar-thumb-zinc-800">
            <div className="flex items-center justify-between pb-2 border-b border-zinc-800 text-zinc-500 text-[10px] uppercase">
              <span>Open Internet Socket Log Stream (Live Feed)</span>
              <span className="text-emerald-400">Stream: Active</span>
            </div>
            {syncState.syncLogs.map((log, idx) => (
              <div key={idx} className="leading-relaxed font-mono flex items-start gap-2 hover:bg-zinc-900/50 p-1 rounded">
                <span className="text-emerald-500">▶</span>
                <span className={
                  log.includes('SUCCESS') ? 'text-emerald-300 font-bold' :
                  log.includes('INITIATE') ? 'text-cyan-400' :
                  log.includes('GATEWAYS') ? 'text-violet-400' :
                  log.includes('TIME') ? 'text-amber-400' :
                  'text-zinc-300'
                }>
                  {log}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Footer Status Strip */}
      <div className="relative z-10 pt-3 border-t border-zinc-800/80 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-zinc-500 gap-2">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1 text-emerald-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            Active Socket: Open Internet Link
          </span>
          <span className="hidden md:inline text-zinc-600">•</span>
          <span className="hidden md:inline">Last Sync: {new Date(syncState.lastSyncTimestamp).toLocaleTimeString()}</span>
        </div>
        <div>
          <span>Earth Directory Core Engine • Sovereign Node Architecture</span>
        </div>
      </div>
    </div>
  );
}
