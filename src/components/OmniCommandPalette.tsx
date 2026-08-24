import React, { useState, useEffect, useMemo, useRef } from 'react';
import { 
  Search, 
  Globe2, 
  MapPin, 
  Radio, 
  Layers, 
  Sliders, 
  Compass, 
  Coins, 
  Cpu, 
  X,
  Volume2,
  ArrowRight,
  Phone,
  Shield,
  Zap,
  Terminal,
  Activity,
  Sparkles,
  Plane,
  Clock
} from 'lucide-react';
import { CONTINENTS, ContinentData } from '../data/continents';
import { MASTER_FREQUENCY_REGISTRY } from '../data/frequencies';
import { NATIONS_BY_CONTINENT } from '../data/nations';
import { getNationFinancials } from '../data/nationFinancials';
import { GLOBAL_TIMEZONE_NODES } from './SevenLivingWordsPortal';
import { playHarmonicSynthesisTone } from '../utils/frequencyPhysics';

interface SearchItem {
  id: string;
  title: string;
  subtitle: string;
  category: 'Continent' | 'Nation' | 'Frequency' | 'System' | 'Time Zone & Travel';
  icon: any;
  flag?: string | null;
  frequency?: number;
  data?: any;
  action: () => void;
}

interface OmniCommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenContinent: (continent: ContinentData) => void;
  onOpenSystem: (systemName: string) => void;
}

export function OmniCommandPalette({
  isOpen,
  onClose,
  onOpenContinent,
  onOpenSystem
}: OmniCommandPaletteProps) {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const listRef = useRef<HTMLDivElement | null>(null);

  // Focus input on open
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
      setSelectedIndex(0);
    }
  }, [isOpen]);

  // Keyboard shortcut listener (Cmd+K / Ctrl+K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else {
          window.dispatchEvent(new CustomEvent('TOGGLE_COMMAND_PALETTE'));
        }
      } else if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Build searchable registry of all items across the matrix
  const allItems: SearchItem[] = useMemo(() => {
    const items: SearchItem[] = [];

    // 1. Continents
    CONTINENTS.forEach(continent => {
      items.push({
        id: `continent-${continent.id}`,
        title: `${continent.name} (${continent.sub})`,
        subtitle: `Land Area: ${continent.geography.landArea} • Time: ${continent.time} • ${continent.status}`,
        category: 'Continent',
        icon: Globe2,
        frequency: continent.frequency,
        data: continent,
        action: () => {
          onOpenContinent(continent);
          onClose();
        }
      });
    });

    // 2. Sovereign Nations & Dial Codes
    Object.entries(NATIONS_BY_CONTINENT).forEach(([continentKey, nationsList]) => {
      const matchingContinent = CONTINENTS.find(c => 
        (continentKey === 'ALKEBULAN' && c.id === 'af') ||
        (continentKey === 'JAMBUDVIIPA' && c.id === 'as') ||
        (continentKey === 'PLAKSHADVIIPA' && c.id === 'eu') ||
        (continentKey === 'KRAUNCADVIIPA' && c.id === 'na') ||
        (continentKey === 'SHALMALIDVIIPA' && c.id === 'sa') ||
        (continentKey === 'SHALMALIDVIIPA' && c.id === 'oc')
      );

      nationsList.forEach(nation => {
        const fin = getNationFinancials(nation.name);
        const dial = nation.dialCode || fin.dialCode;
        const cur = nation.currencyCode || fin.currencyCode;
        const cap = fin.capital || 'Capital';
        items.push({
          id: `nation-${continentKey}-${nation.name}`,
          title: `${nation.flag} ${nation.name}`,
          subtitle: `Dial: ${dial} • Currency: ${cur} (${fin.currencySymbol}) • Capital: ${cap} • Spoken: ${nation.spokenLanguage}`,
          category: 'Nation',
          icon: MapPin,
          flag: nation.flag,
          data: nation,
          action: () => {
            if (matchingContinent) {
              onOpenContinent(matchingContinent);
            } else {
              const defaultAf = CONTINENTS.find(c => c.id === 'af');
              if (defaultAf) onOpenContinent(defaultAf);
            }
            onClose();
          }
        });
      });
    });

    // 3. Time Zone & Travel Nodes
    GLOBAL_TIMEZONE_NODES.forEach(node => {
      items.push({
        id: `timezone-${node.id}`,
        title: `0${node.id}. ${node.regionName}`,
        subtitle: `${node.timeOffset} • ${node.subName} • Calling: ${node.callingPrefix} • Peak: ${node.highestPoint}`,
        category: 'Time Zone & Travel',
        icon: Clock,
        frequency: node.frequencyHz,
        action: () => {
          window.dispatchEvent(new CustomEvent('OPEN_SEVEN_LIVING_WORDS'));
          onClose();
        }
      });
    });

    // 4. Harmonic Audio Frequencies
    Object.values(MASTER_FREQUENCY_REGISTRY).forEach(spec => {
      items.push({
        id: `freq-${spec.id}`,
        title: `${spec.frequency} Hz — ${spec.name}`,
        subtitle: `${spec.solfeggioName} • ${spec.chakraResonance} • ${spec.philosophicalPrinciple}`,
        category: 'Frequency',
        icon: Radio,
        frequency: spec.frequency,
        action: () => {
          playHarmonicSynthesisTone(spec.frequency, 3.2, 0.25);
        }
      });
    });

    // 5. System Tools
    items.push(
      {
        id: 'sys-calling-codes-matrix',
        title: 'Nations Calling Codes & Currencies Matrix',
        subtitle: '198+ Sovereign Nations, International Calling Codes (+1 to +998), Currencies & Capitals',
        category: 'System',
        icon: Phone,
        action: () => {
          window.dispatchEvent(new CustomEvent('OPEN_SYSTEM_CURRENCY'));
          onClose();
        }
      },
      {
        id: 'sys-timezone-matrix',
        title: 'Planetary Time Zones & Continental Travel Matrix',
        subtitle: '7 Global Continental Zones, Universal UTC Time, Flight Corridors & Geographic Coordinates',
        category: 'System',
        icon: Compass,
        action: () => {
          window.dispatchEvent(new CustomEvent('OPEN_SEVEN_LIVING_WORDS'));
          onClose();
        }
      },
      {
        id: 'sys-internet-sync',
        title: 'Global Open Internet & Planetary Telemetry',
        subtitle: 'Live HTTP/3 QUIC connection, planetary IXP gateways, atomic time sync & currency parity',
        category: 'System',
        icon: Globe2,
        action: () => {
          onOpenSystem('internet-sync');
          onClose();
        }
      },
      {
        id: 'sys-blueprint',
        title: 'System Blueprint Matrix',
        subtitle: 'Global Cartesian grid, dynamic data telemetry, and system mapping',
        category: 'System',
        icon: Cpu,
        action: () => {
          onOpenSystem('blueprint');
          onClose();
        }
      },
      {
        id: 'sys-motor',
        title: 'MotorOS (Automotive Neural Architecture)',
        subtitle: 'Vehicular intelligence, electronic control unit (ECU) diagnostics and powertrain mapping',
        category: 'System',
        icon: Sliders,
        action: () => {
          onOpenSystem('motor');
          onClose();
        }
      }
    );

    return items;
  }, [onOpenContinent, onOpenSystem, onClose]);

  // Filter items by query
  const filteredItems = useMemo(() => {
    if (!query.trim()) {
      return allItems.slice(0, 30);
    }
    const q = query.toLowerCase().trim();
    return allItems.filter(item => {
      return (
        item.title.toLowerCase().includes(q) ||
        item.subtitle.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q) ||
        (item.frequency && item.frequency.toString().includes(q))
      );
    }).slice(0, 60);
  }, [allItems, query]);

  // Keyboard navigation up/down/enter
  useEffect(() => {
    const handleListKeys = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex(prev => (prev + 1) % Math.max(1, filteredItems.length));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex(prev => (prev - 1 + filteredItems.length) % Math.max(1, filteredItems.length));
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (filteredItems[selectedIndex]) {
          filteredItems[selectedIndex].action();
        }
      }
    };

    window.addEventListener('keydown', handleListKeys);
    return () => window.removeEventListener('keydown', handleListKeys);
  }, [isOpen, filteredItems, selectedIndex]);

  // Scroll active item into view
  useEffect(() => {
    if (listRef.current) {
      const activeEl = listRef.current.children[selectedIndex] as HTMLElement;
      if (activeEl) {
        activeEl.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
      }
    }
  }, [selectedIndex]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[99999] flex items-start justify-center pt-16 sm:pt-24 p-3 bg-black/80 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-zinc-950/98 border border-zinc-700/80 rounded-2xl shadow-[0_0_80px_rgba(0,0,0,0.9)] overflow-hidden flex flex-col max-h-[80vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Header */}
        <div className="p-3 sm:p-4 border-b border-zinc-800 flex items-center gap-3 bg-zinc-900/60">
          <Search className="w-5 h-5 text-amber-400 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            placeholder="Search Nations (+260, +44, +1), Currencies (USD, EUR, ZMW), Continents, Time Zones..."
            className="w-full bg-transparent text-white font-mono text-sm placeholder-zinc-500 outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 text-zinc-500 hover:text-zinc-300 text-xs font-mono"
            >
              Clear
            </button>
          )}
          <button
            onClick={onClose}
            className="p-1 rounded-lg bg-zinc-800 text-zinc-400 hover:text-white"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results List */}
        <div
          ref={listRef}
          className="flex-1 overflow-y-auto p-2 sm:p-3 space-y-1.5 custom-scrollbar"
        >
          {filteredItems.length === 0 ? (
            <div className="p-8 text-center text-zinc-500 font-mono text-xs">
              No results found for "{query}". Try searching a country (e.g. France, Japan, Zambia), calling code (+260, +44), or currency (USD, ZMW).
            </div>
          ) : (
            filteredItems.map((item, idx) => {
              const isSelected = idx === selectedIndex;
              const Icon = item.icon;

              return (
                <div
                  key={item.id}
                  onClick={() => item.action()}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={`p-2.5 sm:p-3 rounded-xl transition-all cursor-pointer flex items-center justify-between gap-3 font-mono border ${
                    isSelected
                      ? 'bg-zinc-900 border-amber-500/60 text-white shadow-md'
                      : 'bg-zinc-950/50 hover:bg-zinc-900/50 border-zinc-850 text-zinc-300'
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                      isSelected ? 'bg-amber-500 text-black' : 'bg-zinc-900 text-zinc-400 border border-zinc-800'
                    }`}>
                      {item.flag ? (
                        <span className="text-base select-none">{item.flag}</span>
                      ) : (
                        <Icon className="w-4 h-4" />
                      )}
                    </div>

                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="text-xs sm:text-sm font-bold text-white truncate">
                          {item.title}
                        </span>
                        <span className={`text-[9px] px-1.5 py-0.2 rounded uppercase tracking-wider shrink-0 ${
                          item.category === 'Continent' ? 'bg-blue-950 text-blue-300 border border-blue-800' :
                          item.category === 'Nation' ? 'bg-emerald-950 text-emerald-300 border border-emerald-800' :
                          item.category === 'Time Zone & Travel' ? 'bg-purple-950 text-purple-300 border border-purple-800' :
                          item.category === 'Frequency' ? 'bg-amber-950 text-amber-300 border border-amber-800' :
                          'bg-zinc-800 text-zinc-300'
                        }`}>
                          {item.category}
                        </span>
                      </div>
                      <p className="text-[11px] text-zinc-400 truncate mt-0.5">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    {item.frequency && (
                      <span className="text-[10px] text-amber-400 bg-amber-950/60 px-2 py-0.5 rounded border border-amber-800/50 hidden sm:inline-block">
                        {item.frequency} Hz
                      </span>
                    )}
                    <ArrowRight className={`w-4 h-4 transition-transform ${
                      isSelected ? 'text-amber-400 translate-x-1' : 'text-zinc-600'
                    }`} />
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Footer Navigation Hints */}
        <div className="p-3 bg-zinc-950 border-t border-zinc-800 flex items-center justify-between text-[10px] font-mono text-zinc-500">
          <div className="flex items-center gap-3">
            <span>↑↓ Navigate</span>
            <span>↵ Select</span>
            <span>Esc Close</span>
          </div>
          <span className="text-amber-500">
            {filteredItems.length} Available Entries
          </span>
        </div>
      </div>
    </div>
  );
}
