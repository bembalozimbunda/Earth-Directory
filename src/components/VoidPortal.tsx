import React, { useState } from 'react';
import { ArrowRight, Lock, X, Phone, Coins } from 'lucide-react';
import { getNationFinancials } from '../data/nationFinancials';

interface VoidPortalProps {
  voidName: string;
  onClose: () => void;
}

export function VoidPortal({ voidName, onClose }: VoidPortalProps) {
  const [inputValue, setInputValue] = useState('');
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [showRedVoid, setShowRedVoid] = useState(false);
  const [error, setError] = useState(false);
  
  const [voidData, setVoidData] = useState<any>(null);
  const [continentKey, setContinentKey] = useState<string | null>(null);
  const [nations, setNations] = useState<any[]>([]);

  const handleKeySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const res = await fetch('/api/verify-void', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ voidName, code: inputValue })
      });
      
      const data = await res.json();
      
      if (data.authorized) {
        setVoidData(data.voidData);
        setContinentKey(data.continentKey);
        
        // Deduplicate nations by name to eliminate any duplicates/repetitions
        const rawNations = data.nations || [];
        const uniqueNationsMap = new Map<string, any>();
        for (const n of rawNations) {
          if (n && n.name) {
            const key = n.name.trim().toLowerCase();
            if (!uniqueNationsMap.has(key)) {
              uniqueNationsMap.set(key, n);
            }
          }
        }
        setNations(Array.from(uniqueNationsMap.values()));
        setIsAuthorized(true);
        setError(false);
      } else {
        setError(true);
        setInputValue('');
        setTimeout(() => setError(false), 2000);
      }
    } catch (err) {
      console.error("Auth error", err);
      setError(true);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] bg-zinc-950 flex flex-col items-center justify-center font-mono">
      {!isAuthorized ? (
        <div
          className="flex flex-col items-center gap-6 w-full max-w-md p-6"
        >
          <div className="text-amber-500 text-xs md:text-sm tracking-[0.3em] uppercase mb-4 text-center">
            <div>{voidName}</div>
            <div className="text-zinc-600 mt-2">CONTINENTAL REGISTRY: VERIFIED & ACCESSIBLE</div>
          </div>
          
          <form onSubmit={handleKeySubmit} className="flex flex-col items-center gap-4 w-full">
            <input
              autoFocus
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="ENTER ACCESS KEY CODE"
              className={`bg-transparent border-b ${error ? 'border-red-500 text-red-500' : 'border-zinc-800 focus:border-amber-500 text-zinc-300'} text-center text-sm md:text-base outline-none pb-2 w-full tracking-[0.2em] transition-colors`}
              spellCheck={false}
              autoComplete="off"
            />
            {error && (
              <div className="text-red-500 text-[10px] tracking-widest">
                INVALID KEY CODE
              </div>
            )}

            <button
              type="button"
              onClick={async () => {
                try {
                  const res = await fetch('/api/verify-void', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ voidName, code: 'OPEN' })
                  });
                  const data = await res.json();
                  if (data.authorized) {
                    setVoidData(data.voidData);
                    setContinentKey(data.continentKey);
                    const rawNations = data.nations || [];
                    const uniqueNationsMap = new Map<string, any>();
                    for (const n of rawNations) {
                      if (n && n.name) {
                        const key = n.name.trim().toLowerCase();
                        if (!uniqueNationsMap.has(key)) {
                          uniqueNationsMap.set(key, n);
                        }
                      }
                    }
                    setNations(Array.from(uniqueNationsMap.values()));
                    setIsAuthorized(true);
                  }
                } catch (e) {
                  setIsAuthorized(true);
                }
              }}
              className="w-full mt-2 py-2.5 px-4 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/40 hover:border-amber-400 text-amber-300 hover:text-amber-200 rounded-lg text-xs tracking-widest uppercase transition-all cursor-pointer shadow-[0_0_15px_rgba(245,158,11,0.1)] flex items-center justify-center gap-2"
            >
              <Lock className="w-3.5 h-3.5 text-amber-400" />
              <span>[ OPEN SOVEREIGN DOOR ]</span>
            </button>
          </form>
          
          <button onClick={onClose} className="mt-4 text-zinc-600 hover:text-zinc-400 text-xs tracking-widest transition-colors cursor-pointer">
            [ RETURN TO ATLAS ]
          </button>
        </div>
      ) : (
        <div
          className="absolute inset-0 bg-black flex flex-col items-center justify-center overflow-hidden"
        >
          {/* Background Ambient Ring */}
          <div
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
          >
            <div className="w-[150vw] h-[150vw] bg-[radial-gradient(circle_at_center,rgba(20,20,20,1)_0%,rgba(0,0,0,1)_100%)] rounded-full flex items-center justify-center">
              <div
                className="w-[100vw] h-[100vw] border-[0.5px] border-amber-900/10 rounded-full border-dashed opacity-30 animate-[spin_40s_linear_infinite]"
              />
            </div>
          </div>

          <div className="z-10 flex flex-col items-center w-full h-full p-6 md:p-16">
            <div 
              className="text-amber-500/80 text-2xl md:text-4xl tracking-[0.5em] font-light mb-8 uppercase text-center"
            >
              {voidName}
            </div>
            
            <div 
              className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-4 md:gap-16 text-zinc-600 text-[10px] md:text-sm tracking-[0.3em] uppercase mb-12 text-center"
            >
              <div>SUPERVISING NODE: <span className="text-zinc-400">{voidData?.watcher}</span></div>
              <div>MAINTENANCE REGISTRY: <span className="text-zinc-400">{voidData?.updator}</span></div>
              <div>SECURITY PATTERN: <span className="text-amber-500/40">{voidData?.key_pattern}</span></div>
              {continentKey && (
                <div className="text-emerald-500/50">
                  {nations.length} SOVEREIGN ENTITIES (CONTINENT: {continentKey})
                </div>
              )}
            </div>

            {!nations.length && voidData && (
              <div 
                className="flex-1 flex items-center justify-center w-full max-w-7xl text-center px-4"
              >
                <h2 className="text-zinc-200 text-xl md:text-3xl lg:text-5xl font-light tracking-[0.15em] leading-relaxed uppercase">
                  {voidData.domain}
                </h2>
              </div>
            )}

            {nations.length > 0 && (
              <div 
                className="w-full flex-1 overflow-y-auto custom-scrollbar pr-2 md:pr-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4 text-left content-start"
              >
                {nations.map((nation: any) => (
                  <div 
                    key={nation.name}
                    className="bg-zinc-900/40 border border-zinc-800/40 p-3 flex flex-col items-center justify-center gap-1.5 hover:border-amber-500/40 transition-colors group rounded text-center"
                  >
                    <span className="text-3xl md:text-4xl drop-shadow-[0_0_15px_rgba(255,255,255,0.1)] group-hover:scale-110 transition-transform">{nation.flag}</span>
                    <span className="text-[10px] md:text-xs text-zinc-200 uppercase tracking-wider font-semibold leading-tight font-mono">
                      {nation.name}
                    </span>
                    {nation.spokenLanguage && (
                      <span className="text-[8px] md:text-[9px] text-emerald-400 font-mono tracking-normal leading-tight px-1.5 py-0.5 bg-emerald-950/30 border border-emerald-900/40 rounded w-full line-clamp-1">
                        {nation.spokenLanguage}
                      </span>
                    )}
                    <div className="flex items-center justify-center gap-2 w-full pt-1">
                      <span className="text-[8px] font-mono text-cyan-400 flex items-center gap-0.5 bg-cyan-950/40 border border-cyan-800/40 px-1 py-0.2 rounded">
                        <Phone className="w-2.5 h-2.5" />
                        {nation.dialCode || getNationFinancials(nation.name).dialCode}
                      </span>
                      <span className="text-[8px] font-mono text-amber-400 flex items-center gap-0.5 bg-amber-950/40 border border-amber-800/40 px-1 py-0.2 rounded">
                        <Coins className="w-2.5 h-2.5" />
                        {nation.currencyCode || getNationFinancials(nation.name).currencyCode}
                      </span>
                    </div>
                    {nation.isTerritory && (
                      <span className="text-[7px] text-cyan-400 uppercase font-mono tracking-widest">
                        Non-Sovereign Territory
                      </span>
                    )}
                    {nation.ruler && (
                      <span className="text-[7px] md:text-[8px] text-amber-500/80 uppercase tracking-widest leading-tight border-t border-zinc-800/50 pt-1 w-full font-mono">
                        {nation.ruler}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            )}
            
            <button 
              onClick={onClose} 
              className="mt-8 pt-8 pb-4 text-zinc-600 hover:text-amber-500 text-xs tracking-widest transition-colors shrink-0 uppercase cursor-pointer"
            >
              [ RETURN TO ATLAS ]
            </button>
            <button 
              onClick={() => setShowRedVoid(true)}
              className="mt-4 flex items-center gap-2 px-4 py-2 bg-rose-500/10 border border-rose-500/30 hover:border-rose-500/80 rounded transition-all group shrink-0 cursor-pointer"
            >
              <div className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
              <span className="font-mono text-[10px] tracking-widest uppercase text-rose-500 group-hover:text-rose-400">
                African Resource & Historical Index
              </span>
            </button>
          </div>
        </div>
      )}

      {showRedVoid && (
        <div 
          className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/95 backdrop-blur-2xl"
        >
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.1)_0%,transparent_100%)] animate-pulse" />
          </div>

          <div 
            className="w-full max-w-4xl bg-black border border-rose-500/30 rounded-2xl p-8 relative z-10 shadow-[0_0_150px_rgba(244,63,94,0.15)]"
          >
            <div className="flex items-center justify-between mb-8 pb-6 border-b border-rose-500/20">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full border border-rose-500 flex items-center justify-center animate-pulse">
                  <div className="w-4 h-4 rounded-full bg-rose-500" />
                </div>
                <div>
                  <h2 className="text-2xl font-light text-rose-500 tracking-[0.2em] uppercase">African Resource & Digital Heritage</h2>
                  <p className="text-xs text-rose-500/60 font-mono tracking-widest uppercase">Historical Resource Extraction & Digital Infrastructure Analysis</p>
                </div>
              </div>
              <button 
                onClick={() => setShowRedVoid(false)}
                className="p-2 text-rose-500/50 hover:text-rose-500 hover:bg-rose-500/10 rounded-lg transition-colors cursor-pointer"
              >
                <Lock className="w-5 h-5" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-rose-500/80 font-mono text-sm tracking-wide">
              <div className="space-y-6">
                <div>
                  <h3 className="text-rose-400 mb-2 font-bold uppercase text-xs tracking-widest flex items-center gap-2">
                    <div className="w-1 h-1 bg-rose-500" /> Physical & Digital Infrastructure
                  </h3>
                  <p className="leading-relaxed">A systematic analysis of raw resource flows and historical under-investment in digital infrastructure. This digital atlas bridges access across sovereign regions.</p>
                </div>
                <div>
                  <h3 className="text-rose-400 mb-2 font-bold uppercase text-xs tracking-widest flex items-center gap-2">
                    <div className="w-1 h-1 bg-rose-500" /> Sovereign Economic Valuation
                  </h3>
                  <p className="leading-relaxed">Regional resource value and human capital are cataloged with transparent sovereign currencies, exchange rates, and public educational resources.</p>
                </div>
              </div>
              <div className="space-y-6">
                <div className="p-4 border border-rose-500/20 bg-rose-950/20 rounded-xl relative overflow-hidden">
                  <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjQ0LCA2MywgOTQsIDAuMSkiLz48L3N2Zz4=')] opacity-50" />
                  <h3 className="text-rose-400 mb-2 font-bold uppercase text-xs tracking-widest relative z-10">Restoration Framework</h3>
                  <ul className="space-y-3 text-xs relative z-10">
                    <li className="flex items-start gap-2">
                      <ArrowRight className="w-4 h-4 text-rose-500 shrink-0" />
                      <span>Empowering open educational access for schools, universities, and students.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="w-4 h-4 text-rose-500 shrink-0" />
                      <span>Maintaining independent hosting, DNS standards, and transparent open-source code.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="w-4 h-4 text-rose-500 shrink-0" />
                      <span>Connecting local Zambian districts with regional public health facilities.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
