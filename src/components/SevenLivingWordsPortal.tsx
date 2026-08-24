import React, { useState, useEffect, useRef } from 'react';
import { Clock, Globe, MapPin, Compass, Navigation, ArrowRight, X, Radio, Plane, ShieldCheck, Sun, CheckCircle2, ChevronRight } from 'lucide-react';
import { playHarmonicSynthesisTone } from '../utils/frequencyPhysics';

export interface GlobalTimeZoneNode {
  id: number;
  regionName: string;
  subName: string;
  timeOffset: string;
  representativeCities: string[];
  callingPrefix: string;
  currencies: string[];
  highestPoint: string;
  longestRiver: string;
  landArea: string;
  majorAirports: string[];
  frequencyHz: number;
  colorTheme: {
    bg: string;
    border: string;
    text: string;
    accent: string;
    glow: string;
  };
  overview: string;
  travelTips: string[];
}

export const GLOBAL_TIMEZONE_NODES: GlobalTimeZoneNode[] = [
  {
    id: 1,
    regionName: "Prime Meridian & Universal Time Standard",
    subName: "Planetary Zero Baseline (UTC 00:00 / GMT)",
    timeOffset: "UTC±00:00",
    representativeCities: ["London (UK)", "Reykjavik (Iceland)", "Accra (Ghana)", "Lisbon (Portugal)", "Dublin (Ireland)"],
    callingPrefix: "+44, +354, +233, +351, +353",
    currencies: ["GBP (£)", "ISK (kr)", "GHS (₵)", "EUR (€)"],
    highestPoint: "Hvannadalshnúkur (2,110 m, Iceland) / Ben Nevis (1,345 m, UK)",
    longestRiver: "River Thames (346 km) / Volta River Basin (1,500 km)",
    landArea: "Zero Longitude Meridian Axis (Greenwich Royal Observatory)",
    majorAirports: ["LHR (London Heathrow)", "KEF (Keflavik)", "ACC (Kotoka Accra)", "LIS (Humberto Delgado)"],
    frequencyHz: 432,
    colorTheme: {
      bg: "bg-blue-950/40",
      border: "border-blue-500/40",
      text: "text-blue-400",
      accent: "bg-blue-500",
      glow: "shadow-[0_0_25px_rgba(59,130,246,0.25)]"
    },
    overview: "The astronomical and navigational reference standard for Earth. Longitude 0°00′00″ establishes coordinated universal time (UTC) from which all 24 global time zones and international flight schedules are calibrated.",
    travelTips: [
      "No time zone conversion needed when referencing international flight UTC baselines.",
      "Greenwich Mean Time (GMT) is the standard astronomical reference across maritime navigation.",
      "High-density transatlantic air corridors originate along this western meridian."
    ]
  },
  {
    id: 2,
    regionName: "Africa Continental Time Zones",
    subName: "54 Sovereign Nations (UTC-1 to UTC+4)",
    timeOffset: "UTC-1 to UTC+4 (WAT, CAT, EAT, SAST)",
    representativeCities: ["Cairo (Egypt)", "Lagos (Nigeria)", "Johannesburg (South Africa)", "Nairobi (Kenya)", "Lusaka (Zambia)", "Casablanca (Morocco)", "Addis Ababa (Ethiopia)"],
    callingPrefix: "+20 to +29 series (+20, +27, +234, +254, +260, +212, +251)",
    currencies: ["EGP", "NGN", "ZAR", "KES", "ZMW", "MAD", "ETB"],
    highestPoint: "Mount Kilimanjaro (5,895 m / 19,341 ft, Tanzania)",
    longestRiver: "Nile River (6,650 km / 4,132 mi — longest river on Earth)",
    landArea: "30,370,000 km² (20.4% of Earth landmass)",
    majorAirports: ["JNB (Johannesburg)", "CAI (Cairo)", "ADD (Addis Ababa)", "NBO (Nairobi)", "CMN (Casablanca)"],
    frequencyHz: 432,
    colorTheme: {
      bg: "bg-emerald-950/40",
      border: "border-emerald-500/40",
      text: "text-emerald-400",
      accent: "bg-emerald-500",
      glow: "shadow-[0_0_25px_rgba(16,185,129,0.25)]"
    },
    overview: "Spanning both Northern and Southern hemispheres across 54 sovereign nations. Structured across West Africa Time (WAT UTC+1), Central Africa Time (CAT UTC+2), East Africa Time (EAT UTC+3), and South African Standard Time (SAST UTC+2).",
    travelTips: [
      "Most central and southern African nations do not observe Daylight Saving Time, providing year-round constant time offsets.",
      "Primary international flight connections route through Addis Ababa (ADD), Johannesburg (JNB), and Cairo (CAI).",
      "National calling codes strictly adhere to the +20 through +29 series."
    ]
  },
  {
    id: 3,
    regionName: "Asia-Pacific Time Zones",
    subName: "48 Sovereign Nations (UTC+4 to UTC+9)",
    timeOffset: "UTC+4 to UTC+9 (GST, IST, ICT, CST, JST)",
    representativeCities: ["Tokyo (Japan)", "Beijing (China)", "New Delhi (India)", "Dubai (UAE)", "Singapore (Singapore)", "Seoul (South Korea)", "Bangkok (Thailand)"],
    callingPrefix: "+60 to +98 series (+81, +86, +91, +971, +65, +82, +66)",
    currencies: ["JPY (¥)", "CNY (¥)", "INR (₹)", "AED (د.إ)", "SGD ($)", "KRW (₩)", "THB (฿)"],
    highestPoint: "Mount Everest (8,848.86 m / 29,031.7 ft — Highest on Earth)",
    longestRiver: "Yangtze River (6,300 km / 3,917 mi)",
    landArea: "44,579,000 km² (29.8% of Earth landmass)",
    majorAirports: ["HND (Tokyo)", "DXB (Dubai)", "SIN (Singapore)", "ICN (Seoul)", "DEL (New Delhi)"],
    frequencyHz: 639,
    colorTheme: {
      bg: "bg-amber-950/40",
      border: "border-amber-500/40",
      text: "text-amber-400",
      accent: "bg-amber-500",
      glow: "shadow-[0_0_25px_rgba(245,158,11,0.25)]"
    },
    overview: "The most populous and geographically extensive continental zone. Spans from the Arabian Gulf through the Indian subcontinent (IST UTC+5:30 with half-hour offset), Southeast Asian trade hubs (UTC+8), to the Far East (JST/KST UTC+9).",
    travelTips: [
      "India (IST UTC+5:30), Iran (IRST UTC+3:30), and Nepal (NPT UTC+5:45) use non-hourly fractional time offsets.",
      "China operates on a single national standard time (Beijing Time UTC+8) despite spanning 5 geographical time zones.",
      "Dubai (DXB), Doha (DOH), and Singapore (SIN) represent the world's highest-capacity transit megahubs."
    ]
  },
  {
    id: 4,
    regionName: "Europe Continental Time Zones",
    subName: "45 Sovereign Nations (UTC+0 to UTC+3)",
    timeOffset: "UTC to UTC+3 (WET, CET, EET, MSK)",
    representativeCities: ["Paris (France)", "Berlin (Germany)", "Rome (Italy)", "Madrid (Spain)", "Warsaw (Poland)", "Athens (Greece)", "Vienna (Austria)"],
    callingPrefix: "+30 to +49 series (+33, +49, +39, +34, +48, +30, +43)",
    currencies: ["EUR (€)", "GBP (£)", "CHF (Fr)", "PLN (zł)", "SEK (kr)", "NOK (kr)"],
    highestPoint: "Mount Elbrus (5,642 m / 18,510 ft, Caucasus) / Mont Blanc (4,809 m, Alps)",
    longestRiver: "Volga River (3,530 km / 2,193 mi) / Danube River (2,850 km)",
    landArea: "10,180,000 km² (6.8% of Earth landmass)",
    majorAirports: ["LHR (London)", "CDG (Paris)", "AMS (Amsterdam)", "FRA (Frankfurt)", "MAD (Madrid)"],
    frequencyHz: 528,
    colorTheme: {
      bg: "bg-cyan-950/40",
      border: "border-cyan-500/40",
      text: "text-cyan-400",
      accent: "bg-cyan-500",
      glow: "shadow-[0_0_25px_rgba(6,182,212,0.25)]"
    },
    overview: "A highly unified travel zone powered by Central European Time (CET UTC+1), Western European Time (WET UTC+0), and Eastern European Time (EET UTC+2). Accommodates dense high-speed rail networks (Eurostar, TGV, ICE) and the Schengen Area.",
    travelTips: [
      "The Eurozone shares a single currency (EUR €) across 20 sovereign member nations.",
      "Schengen Agreement allows border-control-free movement across 29 European countries.",
      "Daylight Saving Time (CEST / EEST) transitions occur annually in late March and late October."
    ]
  },
  {
    id: 5,
    regionName: "The Americas Continental Time Zones",
    subName: "35 Sovereign Nations (UTC-3 to UTC-10)",
    timeOffset: "UTC-10 to UTC-3 (HST, AKST, PST, MST, CST, EST, BRT, ART)",
    representativeCities: ["New York (USA)", "Los Angeles (USA)", "Toronto (Canada)", "Mexico City (Mexico)", "São Paulo (Brazil)", "Buenos Aires (Argentina)", "Bogotá (Colombia)"],
    callingPrefix: "+1 Country Code & +50 to +58 series (+1, +52, +55, +54, +57, +56, +51)",
    currencies: ["USD ($)", "CAD ($)", "MXN ($)", "BRL (R$)", "ARS ($)", "COP ($)"],
    highestPoint: "Aconcagua (6,961 m / 22,838 ft, Argentina) / Denali (6,190 m, Alaska)",
    longestRiver: "Amazon River (6,400 km / 3,977 mi) / Mississippi–Missouri (6,275 km)",
    landArea: "42,549,000 km² (North & South America Combined, 28.4% of Earth landmass)",
    majorAirports: ["ATL (Atlanta)", "ORD (Chicago)", "LAX (Los Angeles)", "YYZ (Toronto)", "GRU (São Paulo)"],
    frequencyHz: 741,
    colorTheme: {
      bg: "bg-rose-950/40",
      border: "border-rose-500/40",
      text: "text-rose-400",
      accent: "bg-rose-500",
      glow: "shadow-[0_0_25px_rgba(244,63,94,0.25)]"
    },
    overview: "Stretching from the Canadian Arctic across the Great Plains, Andes, and Amazon Basin to Tierra del Fuego. Characterized by 6 standard continental North American time zones and South American Standard Times (PET UTC-5, BOT UTC-4, BRT/ART UTC-3).",
    travelTips: [
      "The United States and Canada share the +1 international country calling code with unique 3-digit area codes.",
      "Crossing the Continental Divide in North America or the Andes in South America represents major geographic elevation shifts.",
      "The Panama Canal bridges maritime travel between the Atlantic and Pacific Oceans."
    ]
  },
  {
    id: 6,
    regionName: "Oceania & Pacific Time Zones",
    subName: "14 Sovereign Nations (UTC+8 to UTC+12)",
    timeOffset: "UTC+8 to UTC+12 (AWST, ACST, AEST, NZST, TOT UTC+13)",
    representativeCities: ["Sydney (Australia)", "Melbourne (Australia)", "Auckland (New Zealand)", "Suva (Fiji)", "Port Moresby (PNG)", "Perth (Australia)", "Honolulu (USA)"],
    callingPrefix: "+61 (Australia), +64 (New Zealand), +670 to +692 series",
    currencies: ["AUD ($)", "NZD ($)", "FJD ($)", "PGK (K)", "WST (T)", "TOP (T$)"],
    highestPoint: "Puncak Jaya / Carstensz Pyramid (4,884 m / 16,024 ft, New Guinea)",
    longestRiver: "Murray–Darling River System (3,672 km / 2,282 mi)",
    landArea: "8,525,989 km² (5.7% of Earth landmass)",
    majorAirports: ["SYD (Sydney)", "MEL (Melbourne)", "AKL (Auckland)", "BNE (Brisbane)", "NAN (Nadi Fiji)"],
    frequencyHz: 852,
    colorTheme: {
      bg: "bg-purple-950/40",
      border: "border-purple-500/40",
      text: "text-purple-400",
      accent: "bg-purple-500",
      glow: "shadow-[0_0_25px_rgba(168,85,247,0.25)]"
    },
    overview: "Encompassing the Australian continent, New Zealand, Melanesia, Micronesia, and Polynesia. Straddles the International Date Line (IDL), where crossing eastward subtracts a calendar day and crossing westward adds a day.",
    travelTips: [
      "The International Date Line lies between Samoa (UTC+13) and American Samoa (UTC-11), creating a 24-hour time difference over 100 miles.",
      "New Zealand and Eastern Australia are among the first populated regions on Earth to welcome each new calendar day.",
      "Pacific island aviation relies on long-range twin-engine ETOPS flight corridors."
    ]
  },
  {
    id: 7,
    regionName: "Antarctica & Polar Meridians",
    subName: "Scientific Stations & 360° Polar Convergence",
    timeOffset: "All 24 Time Zones Converge at Geographic South Pole (90°S)",
    representativeCities: ["Amundsen-Scott South Pole Station", "McMurdo Station (Ross Island)", "Vostok Station (Pole of Inaccessibility)", "Halley VI Research Station", "Rothera Station"],
    callingPrefix: "+672 (Norfolk/Antarctica), +881 (Iridium Satellite), +870 (Inmarsat)",
    currencies: ["USD / NZD / EUR (Scientific Logistics Standard)"],
    highestPoint: "Mount Vinson (4,892 m / 16,050 ft, Ellsworth Mountains)",
    longestRiver: "Onyx River (32 km / 20 mi meltwater stream, Wright Valley)",
    landArea: "14,200,000 km² (9.5% of Earth landmass)",
    majorAirports: ["NZSP (South Pole Skiway)", "NZIR (McMurdo Ice Runway)", "Troll Airfield (Blue-Ice)"],
    frequencyHz: 963,
    colorTheme: {
      bg: "bg-zinc-900/60",
      border: "border-amber-400/50",
      text: "text-amber-300",
      accent: "bg-amber-400",
      glow: "shadow-[0_0_30px_rgba(251,191,36,0.3)]"
    },
    overview: "At the Geographic South Pole (90°00′S), all 360 lines of longitude and all 24 global time zones converge into a single geometric point. Governed internationally under the Antarctic Treaty as a scientific reserve dedicated to peace and open research.",
    travelTips: [
      "Because all lines of longitude converge, research stations arbitrarily choose their operating time zone based on their supply line (e.g. McMurdo uses New Zealand Time UTC+12).",
      "During polar summer, the sun stays above the horizon for 6 continuous months (24-hour daylight); during polar winter, 6 months of continuous darkness.",
      "Access is strictly regulated under the Antarctic Treaty System (ATS) and environmental protocols."
    ]
  }
];

export function SevenLivingWordsPortal() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeNodeId, setActiveNodeId] = useState<number>(1);
  const [currentUTC, setCurrentUTC] = useState('');
  const itemRefs = useRef<Record<number, HTMLDivElement | null>>({});

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener('OPEN_SEVEN_LIVING_WORDS', handleOpen);
    return () => window.removeEventListener('OPEN_SEVEN_LIVING_WORDS', handleOpen);
  }, []);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentUTC(now.toISOString().substring(11, 19) + ' UTC');
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToNode = (id: number) => {
    setActiveNodeId(id);
    const element = itemRefs.current[id];
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handlePlayFrequency = (hz: number) => {
    playHarmonicSynthesisTone(hz, 2.0, 0.2);
  };

  const activeNode = GLOBAL_TIMEZONE_NODES.find(n => n.id === activeNodeId) || GLOBAL_TIMEZONE_NODES[0];

  return (
    <div className="fixed top-3 right-3 sm:top-4 sm:right-4 z-50">
      {/* Top Right Trigger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-2.5 px-3 py-2 bg-zinc-950/90 hover:bg-zinc-900 border border-blue-500/40 hover:border-blue-400/80 rounded-xl text-blue-400 hover:text-blue-300 transition-all shadow-[0_0_15px_rgba(0,0,0,0.8)] backdrop-blur-md cursor-pointer group"
        title="Open Planetary Time Zones & Continental Travel Matrix (7 Global Zones)"
      >
        <div className="relative flex items-center justify-center">
          <Globe className="w-4 h-4 text-blue-400 group-hover:rotate-45 transition-transform duration-300" />
          <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
        </div>
        <div className="flex flex-col text-left">
          <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-wider font-bold text-blue-300">
            TIME ZONES & TRAVEL MATRIX
          </span>
          <span className="text-[8px] font-mono tracking-wider text-zinc-400 hidden sm:inline">
            Planetary Time & Coordinates
          </span>
        </div>
      </button>

      {/* Interactive 7 Global Zones Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="relative w-full max-w-5xl bg-zinc-950 border border-blue-500/50 rounded-3xl p-5 sm:p-7 shadow-[0_0_80px_rgba(59,130,246,0.25)] overflow-hidden max-h-[92vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Ambient Background Glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

            {/* Header */}
            <div className="flex items-start justify-between pb-4 border-b border-zinc-800 relative z-10 shrink-0">
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-2xl bg-blue-500/15 border border-blue-500/40 flex items-center justify-center text-blue-400 shadow-md shrink-0">
                  <Compass className="w-6 h-6 animate-pulse" />
                </div>
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <h2 className="text-base sm:text-lg font-mono font-bold text-white tracking-wider uppercase">
                      Planetary Time Zones & Continental Travel Matrix
                    </h2>
                    <span className="px-2.5 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 font-mono text-[10px] font-semibold flex items-center gap-1.5">
                      <Clock className="w-3 h-3 text-blue-400" />
                      Live: {currentUTC}
                    </span>
                  </div>
                  <p className="text-xs font-mono text-zinc-400 mt-1">
                    7 Global Time & Geographic Reference Zones for Travelers, Navigators & International Communication
                  </p>
                </div>
              </div>

              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-zinc-400 hover:text-white transition-colors cursor-pointer shrink-0"
                title="Close [Esc]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Zone Quick-Switcher Pill Bar */}
            <div className="flex items-center gap-2 py-3 border-b border-zinc-800/80 overflow-x-auto custom-scrollbar shrink-0">
              {GLOBAL_TIMEZONE_NODES.map(node => {
                const isSelected = activeNodeId === node.id;
                return (
                  <button
                    key={node.id}
                    onClick={() => scrollToNode(node.id)}
                    className={`flex items-center gap-2 px-3 py-1.5 rounded-xl font-mono text-xs whitespace-nowrap transition-all cursor-pointer border ${
                      isSelected
                        ? 'bg-blue-500 text-black border-blue-400 font-bold shadow-md'
                        : 'bg-zinc-900/80 hover:bg-zinc-850 text-zinc-400 hover:text-zinc-200 border-zinc-800'
                    }`}
                  >
                    <span className={`w-4 h-4 rounded-full flex items-center justify-center text-[10px] font-bold ${
                      isSelected ? 'bg-black text-blue-400' : 'bg-zinc-800 text-zinc-400'
                    }`}>
                      0{node.id}
                    </span>
                    <span>{node.regionName.split(' ')[0]}</span>
                    <span className={`text-[10px] px-1 py-0.2 rounded ${isSelected ? 'bg-black/20 text-black' : 'text-zinc-500'}`}>
                      {node.timeOffset.split(' ')[0]}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Scrollable Node Detailed Cards */}
            <div className="flex-1 overflow-y-auto p-2 sm:p-4 space-y-6 custom-scrollbar">
              {GLOBAL_TIMEZONE_NODES.map((node) => {
                const isSelected = activeNodeId === node.id;

                return (
                  <div
                    key={node.id}
                    ref={(el) => (itemRefs.current[node.id] = el)}
                    className={`p-5 rounded-2xl border transition-all duration-300 ${node.colorTheme.bg} ${
                      isSelected
                        ? `${node.colorTheme.border} ${node.colorTheme.glow} ring-1 ring-blue-500/30`
                        : 'border-zinc-800/80 hover:border-zinc-700'
                    }`}
                  >
                    {/* Top Row: Zone Number, Title, Time Offset & Frequency */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-zinc-800/60">
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-xl flex items-center justify-center font-mono font-bold text-sm ${node.colorTheme.accent} text-black shrink-0`}>
                          0{node.id}
                        </div>
                        <div>
                          <h3 className="text-base font-mono font-bold text-white">
                            {node.regionName}
                          </h3>
                          <span className={`text-xs font-mono font-semibold ${node.colorTheme.text}`}>
                            {node.subName}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <div className="px-3 py-1 rounded-lg bg-zinc-950 border border-zinc-800 text-xs font-mono text-zinc-200 flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5 text-blue-400" />
                          <span>{node.timeOffset}</span>
                        </div>
                        <button
                          onClick={() => handlePlayFrequency(node.frequencyHz)}
                          title={`Play ${node.frequencyHz}Hz Resonance Frequency`}
                          className="px-2.5 py-1 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-xs font-mono text-amber-400 flex items-center gap-1 cursor-pointer"
                        >
                          <Radio className="w-3 h-3" />
                          <span>{node.frequencyHz} Hz</span>
                        </button>
                      </div>
                    </div>

                    {/* Overview Paragraph */}
                    <p className="text-xs sm:text-sm font-mono text-zinc-300 leading-relaxed mt-3">
                      {node.overview}
                    </p>

                    {/* Geographic & Travel Specs Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 mt-4 text-xs font-mono">
                      <div className="p-2.5 rounded-xl bg-zinc-950/80 border border-zinc-850">
                        <span className="text-zinc-500 text-[10px] uppercase tracking-wider block">Calling Code Range</span>
                        <span className="text-emerald-400 font-bold text-xs mt-0.5 block">{node.callingPrefix}</span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-zinc-950/80 border border-zinc-850">
                        <span className="text-zinc-500 text-[10px] uppercase tracking-wider block">Major Currencies</span>
                        <span className="text-amber-300 font-bold text-xs mt-0.5 block">{node.currencies.join(', ')}</span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-zinc-950/80 border border-zinc-850">
                        <span className="text-zinc-500 text-[10px] uppercase tracking-wider block">Highest Point</span>
                        <span className="text-zinc-200 text-xs mt-0.5 block truncate" title={node.highestPoint}>{node.highestPoint}</span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-zinc-950/80 border border-zinc-850">
                        <span className="text-zinc-500 text-[10px] uppercase tracking-wider block">Longest River / Basin</span>
                        <span className="text-zinc-200 text-xs mt-0.5 block truncate" title={node.longestRiver}>{node.longestRiver}</span>
                      </div>
                    </div>

                    {/* Representative Cities & Airport Hubs */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3 pt-3 border-t border-zinc-800/60 text-xs font-mono">
                      <div>
                        <span className="text-zinc-400 font-semibold block mb-1.5 flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                          Key Navigational Cities:
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {node.representativeCities.map((city, cIdx) => (
                            <span key={cIdx} className="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-300 text-[11px]">
                              {city}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <span className="text-zinc-400 font-semibold block mb-1.5 flex items-center gap-1">
                          <Plane className="w-3.5 h-3.5 text-blue-400" />
                          Primary International Aviation Hubs:
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {node.majorAirports.map((airport, aIdx) => (
                            <span key={aIdx} className="px-2 py-0.5 rounded bg-blue-950/60 border border-blue-800/60 text-blue-300 text-[11px]">
                              {airport}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Practical Traveler Advisory */}
                    <div className="mt-3 p-3 rounded-xl bg-zinc-950/90 border border-zinc-800/80">
                      <span className="text-[10px] uppercase tracking-wider text-blue-400 font-bold block mb-1">
                        Traveler & Navigational Guidelines
                      </span>
                      <ul className="space-y-1 text-[11px] font-mono text-zinc-300">
                        {node.travelTips.map((tip, tIdx) => (
                          <li key={tIdx} className="flex items-start gap-1.5">
                            <ChevronRight className="w-3 h-3 text-blue-400 shrink-0 mt-0.5" />
                            <span>{tip}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Footer */}
            <div className="p-3.5 bg-zinc-950 border-t border-zinc-800 flex items-center justify-between text-xs font-mono text-zinc-400 shrink-0">
              <span>Universal Earth Directory • Planetary Time & Coordinates</span>
              <span className="text-blue-400">7 Master Continents Synchronized</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
