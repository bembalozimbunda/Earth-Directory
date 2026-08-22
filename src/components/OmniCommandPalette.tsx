import React, { useState, useEffect, useMemo, useRef } from 'react';
import { 
  Search, 
  Globe2, 
  MapPin, 
  Radio, 
  Layers, 
  Sliders, 
  Compass, 
  HeartHandshake, 
  Coins, 
  Cpu, 
  X,
  Volume2,
  ArrowRight,
  Crown,
  Phone,
  Shield,
  Zap,
  Terminal,
  Activity,
  Sparkles
} from 'lucide-react';
import { CONTINENTS, ContinentData } from '../data/continents';
import { MASTER_FREQUENCY_REGISTRY } from '../data/frequencies';
import { ZAMBIA_DETAILED_PROVINCES } from '../data/zambiaDistricts';
import { NATIONS_BY_CONTINENT } from '../data/nations';
import { getNationFinancials } from '../data/nationFinancials';
import { SEVEN_LIVING_WORDS } from './SevenLivingWordsPortal';
import { playHarmonicSynthesisTone, playKwachaDawnHarmonicEmanation } from '../utils/frequencyPhysics';

interface SearchItem {
  id: string;
  title: string;
  subtitle: string;
  category: 'Void' | 'Nation' | 'District' | 'Frequency' | 'System' | 'Living Word';
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
          // Open handled by parent or custom event
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

    // 1. Continental Voids
    CONTINENTS.forEach(continent => {
      items.push({
        id: `continent-${continent.id}`,
        title: continent.name,
        subtitle: `${continent.voidKey} • ${continent.status}`,
        category: 'Void',
        icon: Globe2,
        frequency: continent.frequency,
        action: () => {
          onOpenContinent(continent);
          onClose();
        }
      });
    });

    // 2. Comprehensive Nations & Territories with Spoken Languages
    Object.entries(NATIONS_BY_CONTINENT).forEach(([continentKey, nationsList]) => {
      const matchingContinent = CONTINENTS.find(c => 
        c.sub.toUpperCase() === continentKey || 
        c.name.toUpperCase() === continentKey ||
        (continentKey === 'ALKEBULAN' && c.id === 'af') ||
        (continentKey === 'JAMBUDVIIPA' && c.id === 'as') ||
        (continentKey === 'KRAUNCADVIIPA' && c.id === 'eu') ||
        (continentKey === 'PLAKSHADVIIPA' && (c.id === 'na' || c.id === 'sa')) ||
        (continentKey === 'SHALMALIDVIIPA' && c.id === 'oc')
      );

      nationsList.forEach(nation => {
        const fin = getNationFinancials(nation.name);
        const dial = nation.dialCode || fin.dialCode;
        const cur = nation.currencyCode || fin.currencyCode;
        items.push({
          id: `nation-${continentKey}-${nation.name}`,
          title: `${nation.flag} ${nation.name}`,
          subtitle: `Dial: ${dial} • Currency: ${cur} • Spoken: ${nation.spokenLanguage} • ${continentKey}`,
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

    // 3. Zambian Detailed Districts
    ZAMBIA_DETAILED_PROVINCES.forEach(prov => {
      prov.districts.forEach(dist => {
        items.push({
          id: `district-${prov.name}-${dist.name}`,
          title: dist.name,
          subtitle: `Province: ${prov.name} • Resource: ${dist.resource} • Pop: ${dist.population.toLocaleString()}`,
          category: 'District',
          icon: MapPin,
          frequency: 432,
          action: () => {
            const afContinent = CONTINENTS.find(c => c.id === 'af');
            if (afContinent) onOpenContinent(afContinent);
            onClose();
          }
        });
      });
    });

    // 4. Solfeggio Harmonic Frequencies
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

    // 5. Metaphysical & Sovereign Systems
    items.push(
      {
        id: 'sys-living-words',
        title: 'The Seven Living Words (01 to 07)',
        subtitle: 'The Sovereign • The Oracle • The Codex • The Forge • The Dance • The Soil • The Mirror',
        category: 'Living Word',
        icon: Crown,
        action: () => {
          onOpenSystem('living-words');
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
        id: 'sys-ancient',
        title: 'Ancient Technology & Consciousness Vault',
        subtitle: 'Ancestral algorithms, sacred geometry, and metaphysical blueprints',
        category: 'System',
        icon: Compass,
        action: () => {
          onOpenSystem('ancient');
          onClose();
        }
      },
      {
        id: 'sys-motor',
        title: 'MotorOS (Automotive Neural Architecture)',
        subtitle: 'Sovereign vehicular intelligence and power distribution diagnostics',
        category: 'System',
        icon: Sliders,
        action: () => {
          onOpenSystem('motor');
          onClose();
        }
      },
      {
        id: 'sys-health',
        title: 'Dashes Portal (Zambia Support & Health Network)',
        subtitle: 'Toll-free Lifeline 933, GBV 116, and national counseling resource nodes',
        category: 'System',
        icon: HeartHandshake,
        action: () => {
          onOpenSystem('health');
          onClose();
        }
      },
      {
        id: 'sys-currency',
        title: 'Universal Currency & Resource Portal',
        subtitle: 'Global sovereign currency metrics, exchange, and precious metal values',
        category: 'System',
        icon: Coins,
        action: () => {
          onOpenSystem('currency');
          onClose();
        }
      },
      {
        id: 'sys-earth-value-matrix',
        title: 'Earth Value Matrix (Currencies & National Dial Codes)',
        subtitle: '198+ Nations Currency Codes, Dialing Codes (+26 series), Spoken Tongues & Ancestral Protection',
        category: 'System',
        icon: Shield,
        action: () => {
          window.dispatchEvent(new CustomEvent('OPEN_SYSTEM_CURRENCY'));
          onClose();
        }
      },
      {
        id: 'sys-internet-sync',
        title: 'Global Open Internet: Connected & System Update',
        subtitle: 'Live HTTP/3 QUIC connection, planetary IXP gateways, atomic time sync & currency parity',
        category: 'System',
        icon: Globe2,
        action: () => {
          onOpenSystem('internet-sync');
          onClose();
        }
      },
      {
        id: 'cmd-force-system-update',
        title: 'Update System (Full Planetary Internet Sync)',
        subtitle: 'Run instant synchronization across all 8 Global Gateways, NTP Atomic Clocks & SDR baselines',
        category: 'System',
        icon: Sparkles,
        action: () => {
          onOpenSystem('internet-sync');
          onClose();
        }
      }
    );

    // 6. The Individual Seven Living Words
    SEVEN_LIVING_WORDS.forEach(word => {
      items.push({
        id: `word-${word.id}`,
        title: `0${word.id}. ${word.moniker} — ${word.title}`,
        subtitle: `Mythic: ${word.mythicName} • Cybernetic: ${word.cyberneticName} • ${word.role}`,
        category: 'Living Word',
        icon: word.icon,
        action: () => {
          onOpenSystem('living-words');
          onClose();
        }
      });
    });

    return items;
  }, [onOpenContinent, onOpenSystem, onClose]);

  // Dynamic intelligent multi-parameter query resolution engine
  const filteredItems = useMemo(() => {
    const rawQ = query.trim();
    if (!rawQ) {
      // Default baseline: prominent living words, key solfeggio frequencies, and core systems
      return allItems.filter(item => item.category === 'Living Word' || item.category === 'Frequency' || item.category === 'Void' || item.category === 'System').slice(0, 14);
    }

    const q = rawQ.toLowerCase();
    const tokens = q.split(/[\s,+/]+/).filter(Boolean);

    // Intent detection
    const wantsPlay = /play|tune|sound|tone|frequency|hz|listen/i.test(q);
    const wantsCurrency = /currency|money|forex|kwacha|usd|zmw|euro|val|gold|coin|exchange/i.test(q);
    const wantsDial = /\+|\b26\b|dial|call|prefix|phone|tel/i.test(q);
    const wantsDistrict = /district|province|council|zambia|town|mining/i.test(q);

    // Dynamic quick actions injected at top if intent matched
    const quickActions: SearchItem[] = [];

    // Frequency quick actions
    const freqMatch = q.match(/\b(174|285|396|432|528|639|741|852|963)\b/);
    if (freqMatch) {
      const fNum = parseInt(freqMatch[1], 10);
      quickActions.push({
        id: `quick-freq-${fNum}`,
        title: `Execute Harmonic Tone (${fNum} Hz)`,
        subtitle: `Instant Acoustic Synthesizer Resonance • Web Audio Wave Generator`,
        category: 'Frequency',
        icon: Volume2,
        frequency: fNum,
        action: () => {
          playHarmonicSynthesisTone(fNum, 3.5, 0.28);
          onClose();
        }
      });
    }

    // Kwacha Dawn sequence quick action
    if (/amplify|dawn|emanation|wave|kwacha/i.test(q)) {
      quickActions.push({
        id: 'quick-kwacha-dawn',
        title: 'Trigger Kwacha Dawn Harmonic Outward Emanation',
        subtitle: '432 Hz Root (Zambia) ➔ 528 Hz Regional Ring (+26 SADC) ➔ 963 Hz Planetary Crown',
        category: 'System',
        icon: Zap,
        action: () => {
          playKwachaDawnHarmonicEmanation();
          window.dispatchEvent(new CustomEvent('OPEN_SYSTEM_CURRENCY'));
          onClose();
        }
      });
    }

    // Score and rank all registry items
    const scoredItems = allItems.map(item => {
      let score = 0;
      const titleLower = item.title.toLowerCase();
      const subLower = item.subtitle.toLowerCase();
      const catLower = item.category.toLowerCase();
      const combined = `${titleLower} ${subLower} ${catLower}`;

      // Exact full match
      if (titleLower === q) score += 200;
      else if (titleLower.startsWith(q)) score += 120;
      else if (titleLower.includes(q)) score += 80;

      // Token intersection scoring
      let tokenMatches = 0;
      tokens.forEach(tok => {
        if (titleLower.includes(tok)) {
          score += 45;
          tokenMatches++;
        } else if (subLower.includes(tok)) {
          score += 25;
          tokenMatches++;
        } else if (catLower.includes(tok)) {
          score += 15;
          tokenMatches++;
        }
      });

      // Boost if all tokens matched
      if (tokens.length > 1 && tokenMatches >= tokens.length) {
        score += 60;
      }

      // Frequency matching boost
      if (item.frequency) {
        const freqStr = `${item.frequency}`;
        if (tokens.some(tok => freqStr.includes(tok) || tok === `${freqStr}hz`)) {
          score += 110;
        }
        if (wantsPlay) score += 30;
      }

      // Category intent alignments
      if (wantsCurrency && (item.category === 'Nation' || item.id === 'sys-currency' || item.id === 'sys-earth-value-matrix')) {
        score += 35;
      }
      if (wantsDial && item.category === 'Nation') {
        score += 40;
      }
      if (wantsDistrict && item.category === 'District') {
        score += 35;
      }

      return { item, score };
    });

    const ranked = scoredItems
      .filter(({ score }) => score > 0)
      .sort((a, b) => b.score - a.score)
      .map(({ item }) => item);

    // Merge quick actions ahead of ranked results, avoiding duplicate IDs
    const finalItems = [...quickActions];
    const seenIds = new Set(quickActions.map(a => a.id));
    for (const itm of ranked) {
      if (!seenIds.has(itm.id)) {
        seenIds.add(itm.id);
        finalItems.push(itm);
      }
      if (finalItems.length >= 28) break;
    }

    return finalItems;
  }, [allItems, query, onClose]);

  // Reset selected index when filtered results change
  useEffect(() => {
    setSelectedIndex(0);
  }, [filteredItems]);

  // Keyboard navigation within list
  const handleKeyDown = (e: React.KeyboardEvent) => {
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

  if (!isOpen) return null;

  return (
    <div
      id="omni-command-palette-modal"
      className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/80 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl bg-zinc-950/95 border border-zinc-800/90 rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.9)] overflow-hidden flex flex-col max-h-[75vh]"
        onClick={e => e.stopPropagation()}
      >
          {/* Header Search Bar */}
          <div className="flex items-center gap-3 px-5 py-4 border-b border-zinc-800/80 bg-zinc-900/40">
            <Search className="w-5 h-5 text-zinc-400 shrink-0" />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={e => setQuery(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Search nations, districts, Solfeggio tones, systems... (e.g. 432, Zambia, Solwezi, Kwacha, +260)"
              className="flex-1 bg-transparent text-sm md:text-base text-zinc-100 placeholder-zinc-500 focus:outline-none font-sans"
            />
            {query && (
              <button 
                onClick={() => setQuery('')} 
                className="text-zinc-500 hover:text-zinc-300 transition-colors p-1"
              >
                <X className="w-4 h-4" />
              </button>
            )}
            <div className="flex items-center gap-1.5 px-2 py-1 rounded bg-zinc-900 border border-zinc-800 text-[10px] font-mono text-zinc-400">
              <span>ESC to exit</span>
            </div>
          </div>

          {/* Results List */}
          <div 
            ref={listRef}
            className="flex-1 overflow-y-auto p-2 divide-y divide-zinc-900/50 scrollbar-thin scrollbar-thumb-zinc-800 scrollbar-track-transparent"
          >
            {filteredItems.length === 0 ? (
              <div className="py-12 text-center text-zinc-500 text-xs font-mono">
                No matching nodes found in the universal directory.
              </div>
            ) : (
              filteredItems.map((item, index) => {
                const isSelected = index === selectedIndex;
                const IconComponent = item.icon;

                return (
                  <button
                    key={item.id}
                    onClick={item.action}
                    onMouseEnter={() => setSelectedIndex(index)}
                    className={`w-full flex items-center justify-between gap-3 px-4 py-3 rounded-xl text-left transition-all group ${
                      isSelected 
                        ? 'bg-zinc-800/90 text-white shadow-lg border border-zinc-700/60' 
                        : 'text-zinc-400 hover:bg-zinc-900/60 hover:text-zinc-200 border border-transparent'
                    }`}
                  >
                    <div className="flex items-center gap-3.5 min-w-0">
                      <div className={`p-2 rounded-lg shrink-0 ${
                        item.category === 'Living Word'
                          ? 'bg-amber-950/50 text-amber-300 border border-amber-500/50 shadow-[0_0_10px_rgba(245,158,11,0.2)]'
                          : item.category === 'Frequency' 
                          ? 'bg-amber-950/40 text-amber-400 border border-amber-800/40' 
                          : item.category === 'Void'
                          ? 'bg-blue-950/40 text-blue-400 border border-blue-800/40'
                          : item.category === 'District'
                          ? 'bg-emerald-950/40 text-emerald-400 border border-emerald-800/40'
                          : 'bg-zinc-900 text-zinc-300 border border-zinc-800'
                      }`}>
                        <IconComponent className="w-4 h-4" />
                      </div>

                      <div className="flex flex-col min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="font-medium text-sm text-zinc-100 truncate">
                            {item.title}
                          </span>
                          {item.frequency && (
                            <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-amber-500/10 text-amber-400/90 border border-amber-500/20 shrink-0">
                              {item.frequency} Hz
                            </span>
                          )}
                        </div>
                        <span className="text-xs text-zinc-500 truncate font-mono mt-0.5">
                          {item.subtitle}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <span className={`text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full ${
                        item.category === 'Living Word'
                          ? 'text-amber-300 bg-amber-950/50 border border-amber-800/40 font-semibold'
                          : item.category === 'Frequency' 
                          ? 'text-amber-400 bg-amber-950/30' 
                          : item.category === 'Void'
                          ? 'text-blue-400 bg-blue-950/30'
                          : item.category === 'District'
                          ? 'text-emerald-400 bg-emerald-950/30'
                          : 'text-zinc-400 bg-zinc-900'
                      }`}>
                        {item.category}
                      </span>
                      {isSelected && (
                        <ArrowRight className="w-4 h-4 text-emerald-400 animate-pulse" />
                      )}
                    </div>
                  </button>
                );
              })
            )}
          </div>

          {/* Footer Controls & Instructions */}
          <div className="flex items-center justify-between px-5 py-2.5 bg-zinc-950 border-t border-zinc-800/80 text-[10px] font-mono text-zinc-500 select-none">
            <div className="flex items-center gap-3">
              <span>↑↓ Navigate</span>
              <span>↵ Authorize / Execute</span>
            </div>
            <div className="flex items-center gap-1.5 text-zinc-400">
              <Terminal className="w-3.5 h-3.5 text-emerald-400" />
              <span>Universal Directory Coordinate & Resonant Ingress</span>
            </div>
          </div>
        </div>
      </div>
  );
}
