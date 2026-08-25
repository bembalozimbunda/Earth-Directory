import React, { useState, useEffect } from 'react';
import { 
  Compass, Clock, Phone, Coins, MapPin, Globe, ArrowRight, ArrowRightLeft, 
  Plane, Mountain, Waves, Sun, Moon, Shield, ExternalLink, X, ChevronRight, Check
} from 'lucide-react';
import { CONTINENTS } from '../data/continents';
import { playHarmonicSynthesisTone } from '../utils/frequencyPhysics';

interface CityTimeEntry {
  city: string;
  country: string;
  continent: string;
  timeZone: string;
  callingCode: string;
  currency: string;
  currencySymbol: string;
  rateToUSD: number;
}

const GLOBAL_TRAVEL_CITIES: CityTimeEntry[] = [
  { city: 'London', country: 'United Kingdom', continent: 'Europe', timeZone: 'Europe/London', callingCode: '+44', currency: 'GBP', currencySymbol: '£', rateToUSD: 0.79 },
  { city: 'Paris', country: 'France', continent: 'Europe', timeZone: 'Europe/Paris', callingCode: '+33', currency: 'EUR', currencySymbol: '€', rateToUSD: 0.92 },
  { city: 'Berlin', country: 'Germany', continent: 'Europe', timeZone: 'Europe/Berlin', callingCode: '+49', currency: 'EUR', currencySymbol: '€', rateToUSD: 0.92 },
  { city: 'Tokyo', country: 'Japan', continent: 'Asia', timeZone: 'Asia/Tokyo', callingCode: '+81', currency: 'JPY', currencySymbol: '¥', rateToUSD: 155.0 },
  { city: 'Singapore', country: 'Singapore', continent: 'Asia', timeZone: 'Asia/Singapore', callingCode: '+65', currency: 'SGD', currencySymbol: '$', rateToUSD: 1.35 },
  { city: 'Dubai', country: 'United Arab Emirates', continent: 'Asia', timeZone: 'Asia/Dubai', callingCode: '+971', currency: 'AED', currencySymbol: 'د.إ', rateToUSD: 3.67 },
  { city: 'New Delhi', country: 'India', continent: 'Asia', timeZone: 'Asia/Kolkata', callingCode: '+91', currency: 'INR', currencySymbol: '₹', rateToUSD: 83.5 },
  { city: 'Beijing', country: 'China', continent: 'Asia', timeZone: 'Asia/Shanghai', callingCode: '+86', currency: 'CNY', currencySymbol: '¥', rateToUSD: 7.24 },
  { city: 'New York', country: 'United States', continent: 'North America', timeZone: 'America/New_York', callingCode: '+1', currency: 'USD', currencySymbol: '$', rateToUSD: 1.0 },
  { city: 'Los Angeles', country: 'United States', continent: 'North America', timeZone: 'America/Los_Angeles', callingCode: '+1', currency: 'USD', currencySymbol: '$', rateToUSD: 1.0 },
  { city: 'Toronto', country: 'Canada', continent: 'North America', timeZone: 'America/Toronto', callingCode: '+1', currency: 'CAD', currencySymbol: '$', rateToUSD: 1.38 },
  { city: 'Mexico City', country: 'Mexico', continent: 'North America', timeZone: 'America/Mexico_City', callingCode: '+52', currency: 'MXN', currencySymbol: '$', rateToUSD: 18.2 },
  { city: 'Cairo', country: 'Egypt', continent: 'Africa', timeZone: 'Africa/Cairo', callingCode: '+20', currency: 'EGP', currencySymbol: 'E£', rateToUSD: 48.0 },
  { city: 'Johannesburg', country: 'South Africa', continent: 'Africa', timeZone: 'Africa/Johannesburg', callingCode: '+27', currency: 'ZAR', currencySymbol: 'R', rateToUSD: 18.2 },
  { city: 'Nairobi', country: 'Kenya', continent: 'Africa', timeZone: 'Africa/Nairobi', callingCode: '+254', currency: 'KES', currencySymbol: 'KSh', rateToUSD: 130.0 },
  { city: 'Lagos', country: 'Nigeria', continent: 'Africa', timeZone: 'Africa/Lagos', callingCode: '+234', currency: 'NGN', currencySymbol: '₦', rateToUSD: 1500.0 },
  { city: 'Lusaka', country: 'Zambia', continent: 'Africa', timeZone: 'Africa/Lusaka', callingCode: '+260', currency: 'ZMW', currencySymbol: 'K', rateToUSD: 27.5 },
  { city: 'São Paulo', country: 'Brazil', continent: 'South America', timeZone: 'America/Sao_Paulo', callingCode: '+55', currency: 'BRL', currencySymbol: 'R$', rateToUSD: 5.6 },
  { city: 'Buenos Aires', country: 'Argentina', continent: 'South America', timeZone: 'America/Argentina/Buenos_Aires', callingCode: '+54', currency: 'ARS', currencySymbol: '$', rateToUSD: 940.0 },
  { city: 'Bogotá', country: 'Colombia', continent: 'South America', timeZone: 'America/Bogota', callingCode: '+57', currency: 'COP', currencySymbol: '$', rateToUSD: 4050.0 },
  { city: 'Sydney', country: 'Australia', continent: 'Oceania', timeZone: 'Australia/Sydney', callingCode: '+61', currency: 'AUD', currencySymbol: '$', rateToUSD: 1.52 },
  { city: 'Auckland', country: 'New Zealand', continent: 'Oceania', timeZone: 'Pacific/Auckland', callingCode: '+64', currency: 'NZD', currencySymbol: '$', rateToUSD: 1.65 }
];

export function TravelGeographicMatrix({ onClose }: { onClose?: () => void }) {
  const [activeTab, setActiveTab] = useState<'time-converter' | 'calling-dialer' | 'geography-atlas' | 'currency-calc'>('time-converter');
  
  // Dual Time Converter State
  const [originCityIdx, setOriginCityIdx] = useState<number>(0); // London
  const [destCityIdx, setDestCityIdx] = useState<number>(14); // Nairobi
  const [currentTime, setCurrentTime] = useState<Date>(new Date());

  // Dial Simulator State
  const [dialOriginIdx, setDialOriginIdx] = useState<number>(8); // New York (+1)
  const [dialDestIdx, setDialDestIdx] = useState<number>(16); // Lusaka (+260)
  const [samplePhoneNumber, setSamplePhoneNumber] = useState<string>('977123456');

  // Selected continent for geography comparative matrix
  const [selectedContinentId, setSelectedContinentId] = useState<string>('af');

  // Currency Converter state
  const [amount, setAmount] = useState<number>(100);
  const [fromCurrencyIdx, setFromCurrencyIdx] = useState<number>(8); // USD
  const [toCurrencyIdx, setToCurrencyIdx] = useState<number>(16); // ZMW

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const getCityTime = (timeZone: string) => {
    try {
      const str = currentTime.toLocaleTimeString('en-US', {
        timeZone,
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      });
      const dateStr = currentTime.toLocaleDateString('en-US', {
        timeZone,
        weekday: 'short',
        month: 'short',
        day: 'numeric'
      });
      return { time: str, date: dateStr };
    } catch {
      return { time: '12:00:00', date: 'UTC' };
    }
  };

  const originCity = GLOBAL_TRAVEL_CITIES[originCityIdx];
  const destCity = GLOBAL_TRAVEL_CITIES[destCityIdx];
  const originTimeData = getCityTime(originCity.timeZone);
  const destTimeData = getCityTime(destCity.timeZone);

  const dialOrigin = GLOBAL_TRAVEL_CITIES[dialOriginIdx];
  const dialDest = GLOBAL_TRAVEL_CITIES[dialDestIdx];

  const selectedContinent = CONTINENTS.find(c => c.id === selectedContinentId) || CONTINENTS[0];

  // Converted Currency Calculation
  const fromCity = GLOBAL_TRAVEL_CITIES[fromCurrencyIdx];
  const toCity = GLOBAL_TRAVEL_CITIES[toCurrencyIdx];
  const usdValue = amount / fromCity.rateToUSD;
  const convertedValue = (usdValue * toCity.rateToUSD).toLocaleString(undefined, {
    maximumFractionDigits: 2
  });

  return (
    <div className="bg-zinc-950/95 border border-zinc-800/90 rounded-2xl p-5 shadow-2xl backdrop-blur-xl relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute -top-10 -right-10 w-60 h-60 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-zinc-800">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-blue-500/15 border border-blue-500/40 flex items-center justify-center text-blue-400">
            <Compass className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-mono font-bold text-white text-base tracking-wider uppercase flex items-center gap-2">
              <span>Traveler's Geographic & Planetary Toolkit</span>
              <span className="px-2 py-0.5 rounded-full bg-emerald-950 border border-emerald-500/40 text-emerald-400 text-[10px]">
                Live
              </span>
            </h3>
            <p className="text-xs font-mono text-zinc-400">
              Universal Time Zone Converter, International Calling Codes (+1 to +998), Currencies & Continental Geography
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
            className="px-2.5 py-1.5 rounded-lg bg-cyan-950/80 hover:bg-cyan-900 border border-cyan-500/50 hover:border-cyan-400 text-cyan-300 text-xs font-mono font-bold transition-colors cursor-pointer flex items-center gap-1.5"
            title="Open Global Central Bank Telemetry"
          >
            <span>🏛️</span>
            <span className="hidden sm:inline">Central Banks</span>
          </button>
          <button
            type="button"
            onClick={() => {
              if (onClose) onClose();
              window.dispatchEvent(new CustomEvent('OPEN_SADC_CORRIDORS'));
            }}
            className="px-2.5 py-1.5 rounded-lg bg-purple-950/80 hover:bg-purple-900 border border-purple-500/50 hover:border-purple-400 text-purple-300 text-xs font-mono font-bold transition-colors cursor-pointer flex items-center gap-1.5"
            title="Open SADC Transit Corridors & Ledger"
          >
            <span>🚛</span>
            <span className="hidden sm:inline">SADC Corridors</span>
          </button>
          {onClose && (
            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-zinc-400 hover:text-white cursor-pointer transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex items-center gap-2 py-3 border-b border-zinc-800/80 overflow-x-auto custom-scrollbar">
        <button
          onClick={() => setActiveTab('time-converter')}
          className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl font-mono text-xs whitespace-nowrap transition-all cursor-pointer border ${
            activeTab === 'time-converter'
              ? 'bg-blue-500 text-black border-blue-400 font-bold shadow-md'
              : 'bg-zinc-900/80 text-zinc-400 hover:text-zinc-200 border-zinc-800'
          }`}
        >
          <Clock className="w-3.5 h-3.5" />
          <span>Live Dual Time Converter</span>
        </button>

        <button
          onClick={() => setActiveTab('calling-dialer')}
          className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl font-mono text-xs whitespace-nowrap transition-all cursor-pointer border ${
            activeTab === 'calling-dialer'
              ? 'bg-amber-500 text-black border-amber-400 font-bold shadow-md'
              : 'bg-zinc-900/80 text-zinc-400 hover:text-zinc-200 border-zinc-800'
          }`}
        >
          <Phone className="w-3.5 h-3.5" />
          <span>International Calling Dialer</span>
        </button>

        <button
          onClick={() => setActiveTab('currency-calc')}
          className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl font-mono text-xs whitespace-nowrap transition-all cursor-pointer border ${
            activeTab === 'currency-calc'
              ? 'bg-emerald-500 text-black border-emerald-400 font-bold shadow-md'
              : 'bg-zinc-900/80 text-zinc-400 hover:text-zinc-200 border-zinc-800'
          }`}
        >
          <Coins className="w-3.5 h-3.5" />
          <span>Sovereign Currency Converter</span>
        </button>

        <button
          onClick={() => setActiveTab('geography-atlas')}
          className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl font-mono text-xs whitespace-nowrap transition-all cursor-pointer border ${
            activeTab === 'geography-atlas'
              ? 'bg-cyan-500 text-black border-cyan-400 font-bold shadow-md'
              : 'bg-zinc-900/80 text-zinc-400 hover:text-zinc-200 border-zinc-800'
          }`}
        >
          <Globe className="w-3.5 h-3.5" />
          <span>Continental Geography Matrix</span>
        </button>
      </div>

      {/* Tab 1: Live Dual Time Zone Converter */}
      {activeTab === 'time-converter' && (
        <div className="pt-4 space-y-4 font-mono">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Origin City Card */}
            <div className="p-4 rounded-2xl bg-zinc-900/70 border border-zinc-800 flex flex-col justify-between gap-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-wider text-blue-400 font-bold flex items-center gap-1.5">
                  <MapPin className="w-3 h-3" /> Origin / Departure Point
                </span>
                <select
                  value={originCityIdx}
                  onChange={(e) => setOriginCityIdx(Number(e.target.value))}
                  className="bg-zinc-950 text-zinc-200 border border-zinc-700 rounded-lg px-2.5 py-1 text-xs outline-none"
                >
                  {GLOBAL_TRAVEL_CITIES.map((c, i) => (
                    <option key={i} value={i}>{c.city}, {c.country} ({c.continent})</option>
                  ))}
                </select>
              </div>

              <div className="py-2">
                <div className="text-2xl sm:text-3xl font-bold text-white tracking-wider">
                  {originTimeData.time}
                </div>
                <div className="text-xs text-zinc-400 mt-1">
                  {originTimeData.date} • {originCity.timeZone}
                </div>
              </div>

              <div className="flex items-center justify-between text-[11px] pt-2 border-t border-zinc-800/80 text-zinc-400">
                <span>Calling Code: <strong className="text-emerald-400">{originCity.callingCode}</strong></span>
                <span>Currency: <strong className="text-amber-400">{originCity.currency} ({originCity.currencySymbol})</strong></span>
              </div>
            </div>

            {/* Destination City Card */}
            <div className="p-4 rounded-2xl bg-zinc-900/70 border border-zinc-800 flex flex-col justify-between gap-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-wider text-emerald-400 font-bold flex items-center gap-1.5">
                  <Plane className="w-3 h-3" /> Destination / Arrival Point
                </span>
                <select
                  value={destCityIdx}
                  onChange={(e) => setDestCityIdx(Number(e.target.value))}
                  className="bg-zinc-950 text-zinc-200 border border-zinc-700 rounded-lg px-2.5 py-1 text-xs outline-none"
                >
                  {GLOBAL_TRAVEL_CITIES.map((c, i) => (
                    <option key={i} value={i}>{c.city}, {c.country} ({c.continent})</option>
                  ))}
                </select>
              </div>

              <div className="py-2">
                <div className="text-2xl sm:text-3xl font-bold text-emerald-400 tracking-wider">
                  {destTimeData.time}
                </div>
                <div className="text-xs text-zinc-400 mt-1">
                  {destTimeData.date} • {destCity.timeZone}
                </div>
              </div>

              <div className="flex items-center justify-between text-[11px] pt-2 border-t border-zinc-800/80 text-zinc-400">
                <span>Calling Code: <strong className="text-emerald-400">{destCity.callingCode}</strong></span>
                <span>Currency: <strong className="text-amber-400">{destCity.currency} ({destCity.currencySymbol})</strong></span>
              </div>
            </div>
          </div>

          {/* Traveler Quick Summary Banner */}
          <div className="p-3 bg-zinc-900/40 rounded-xl border border-zinc-800 flex items-center justify-between text-xs text-zinc-300">
            <span className="flex items-center gap-2">
              <ArrowRightLeft className="w-4 h-4 text-blue-400" />
              <span>Comparing <strong>{originCity.city}</strong> ({originCity.continent}) & <strong>{destCity.city}</strong> ({destCity.continent})</span>
            </span>
            <span className="text-emerald-400 font-bold">
              Flight Navigation Ready
            </span>
          </div>
        </div>
      )}

      {/* Tab 2: International Calling Dialer Assistant */}
      {activeTab === 'calling-dialer' && (
        <div className="pt-4 space-y-4 font-mono text-xs">
          <div className="p-4 rounded-2xl bg-zinc-900/60 border border-zinc-800 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-[10px] text-zinc-400 uppercase tracking-wider block mb-1">
                  Calling From (Your Current Location):
                </label>
                <select
                  value={dialOriginIdx}
                  onChange={(e) => setDialOriginIdx(Number(e.target.value))}
                  className="w-full bg-zinc-950 text-zinc-200 border border-zinc-700 rounded-lg p-2 text-xs outline-none"
                >
                  {GLOBAL_TRAVEL_CITIES.map((c, i) => (
                    <option key={i} value={i}>{c.country} ({c.city}) — Code {c.callingCode}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-[10px] text-zinc-400 uppercase tracking-wider block mb-1">
                  Calling To (Destination Nation):
                </label>
                <select
                  value={dialDestIdx}
                  onChange={(e) => setDialDestIdx(Number(e.target.value))}
                  className="w-full bg-zinc-950 text-zinc-200 border border-zinc-700 rounded-lg p-2 text-xs outline-none"
                >
                  {GLOBAL_TRAVEL_CITIES.map((c, i) => (
                    <option key={i} value={i}>{c.country} ({c.city}) — Code {c.callingCode}</option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="text-[10px] text-zinc-400 uppercase tracking-wider block mb-1">
                Destination Local Phone Number (without leading 0):
              </label>
              <input
                type="text"
                value={samplePhoneNumber}
                onChange={(e) => setSamplePhoneNumber(e.target.value)}
                placeholder="e.g. 977123456"
                className="w-full bg-zinc-950 text-amber-300 font-bold border border-zinc-700 rounded-lg p-2.5 text-sm outline-none"
              />
            </div>

            {/* Generated International Dial String */}
            <div className="p-4 bg-zinc-950 rounded-xl border border-amber-500/50 shadow-inner">
              <span className="text-[10px] text-zinc-400 uppercase tracking-wider block">
                Standard International Dial String (for Mobile & Landline):
              </span>
              <div className="text-lg sm:text-xl font-bold text-emerald-400 tracking-widest mt-1 select-all flex items-center justify-between">
                <span>{dialDest.callingCode} {samplePhoneNumber}</span>
                <span className="text-xs text-zinc-500 font-normal">Format: +[Country Code] [Number]</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 3: Sovereign Currency Converter */}
      {activeTab === 'currency-calc' && (
        <div className="pt-4 space-y-4 font-mono text-xs">
          <div className="p-4 rounded-2xl bg-zinc-900/60 border border-zinc-800 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="text-[10px] text-zinc-400 uppercase tracking-wider block mb-1">
                  Amount to Convert:
                </label>
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(Math.max(1, Number(e.target.value)))}
                  className="w-full bg-zinc-950 text-white font-bold border border-zinc-700 rounded-lg p-2.5 text-sm outline-none"
                />
              </div>

              <div>
                <label className="text-[10px] text-zinc-400 uppercase tracking-wider block mb-1">
                  From Currency:
                </label>
                <select
                  value={fromCurrencyIdx}
                  onChange={(e) => setFromCurrencyIdx(Number(e.target.value))}
                  className="w-full bg-zinc-950 text-zinc-200 border border-zinc-700 rounded-lg p-2.5 text-xs outline-none"
                >
                  {GLOBAL_TRAVEL_CITIES.map((c, i) => (
                    <option key={i} value={i}>{c.currency} ({c.currencySymbol}) — {c.country}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-[10px] text-zinc-400 uppercase tracking-wider block mb-1">
                  To Currency:
                </label>
                <select
                  value={toCurrencyIdx}
                  onChange={(e) => setToCurrencyIdx(Number(e.target.value))}
                  className="w-full bg-zinc-950 text-zinc-200 border border-zinc-700 rounded-lg p-2.5 text-xs outline-none"
                >
                  {GLOBAL_TRAVEL_CITIES.map((c, i) => (
                    <option key={i} value={i}>{c.currency} ({c.currencySymbol}) — {c.country}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Calculated Conversion Box */}
            <div className="p-4 bg-zinc-950 rounded-xl border border-emerald-500/50 shadow-inner flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <span className="text-[10px] text-zinc-400 uppercase tracking-wider block">
                  Estimated Sovereign Exchange Valuation:
                </span>
                <div className="text-xl sm:text-2xl font-bold text-amber-300 tracking-wider mt-1">
                  {amount} {fromCity.currency} = <span className="text-emerald-400">{convertedValue} {toCity.currency}</span> ({toCity.currencySymbol})
                </div>
              </div>
              <span className="text-[10px] text-zinc-500 self-start sm:self-center">
                Indicative traveler benchmark rate
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Tab 4: Continental Geography Matrix */}
      {activeTab === 'geography-atlas' && (
        <div className="pt-4 space-y-4 font-mono text-xs">
          {/* Continent Selector Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 custom-scrollbar">
            {CONTINENTS.map(continent => {
              const isSelected = selectedContinentId === continent.id;
              return (
                <button
                  key={continent.id}
                  onClick={() => setSelectedContinentId(continent.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs whitespace-nowrap transition-all cursor-pointer border ${
                    isSelected
                      ? 'bg-cyan-500 text-black border-cyan-400 font-bold shadow-md'
                      : 'bg-zinc-900 text-zinc-400 hover:text-zinc-200 border-zinc-800'
                  }`}
                >
                  {continent.name}
                </button>
              );
            })}
          </div>

          {/* Detailed Geography Card for Selected Continent */}
          <div className="p-4 rounded-2xl bg-zinc-900/60 border border-zinc-800 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-zinc-800">
              <div>
                <h4 className="text-base font-bold text-white flex items-center gap-2">
                  <span>{selectedContinent.name}</span>
                  <span className="text-xs text-zinc-400 font-normal">({selectedContinent.sub})</span>
                </h4>
                <span className="text-[11px] text-cyan-400">{selectedContinent.status}</span>
              </div>
              <div className="text-right text-zinc-400 text-xs">
                <div>Land Area: <strong className="text-white">{selectedContinent.geography.landArea}</strong></div>
                <div className="text-[10px] text-zinc-500">{selectedContinent.geography.percentEarthLand}</div>
              </div>
            </div>

            {/* 4-Box Key Physical Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
              <div className="p-3 bg-zinc-950 rounded-xl border border-zinc-850">
                <span className="text-zinc-500 text-[10px] uppercase tracking-wider block flex items-center gap-1">
                  <Mountain className="w-3 h-3 text-amber-400" /> Highest Peak
                </span>
                <span className="text-zinc-100 font-bold text-xs mt-1 block">{selectedContinent.geography.highestPoint.name}</span>
                <span className="text-amber-400 text-[11px] block">{selectedContinent.geography.highestPoint.elevation}</span>
                <span className="text-zinc-500 text-[10px] block truncate">{selectedContinent.geography.highestPoint.location}</span>
              </div>

              <div className="p-3 bg-zinc-950 rounded-xl border border-zinc-850">
                <span className="text-zinc-500 text-[10px] uppercase tracking-wider block flex items-center gap-1">
                  <Waves className="w-3 h-3 text-blue-400" /> Lowest Depression
                </span>
                <span className="text-zinc-100 font-bold text-xs mt-1 block">{selectedContinent.geography.lowestPoint.name}</span>
                <span className="text-blue-400 text-[11px] block">{selectedContinent.geography.lowestPoint.elevation}</span>
                <span className="text-zinc-500 text-[10px] block truncate">{selectedContinent.geography.lowestPoint.location}</span>
              </div>

              <div className="p-3 bg-zinc-950 rounded-xl border border-zinc-850">
                <span className="text-zinc-500 text-[10px] uppercase tracking-wider block flex items-center gap-1">
                  <Waves className="w-3 h-3 text-cyan-400" /> Longest River
                </span>
                <span className="text-zinc-100 font-bold text-xs mt-1 block">{selectedContinent.geography.longestRiver.name}</span>
                <span className="text-cyan-400 text-[11px] block">{selectedContinent.geography.longestRiver.length}</span>
                <span className="text-zinc-500 text-[10px] block truncate">Outflow: {selectedContinent.geography.longestRiver.outflow}</span>
              </div>

              <div className="p-3 bg-zinc-950 rounded-xl border border-zinc-850">
                <span className="text-zinc-500 text-[10px] uppercase tracking-wider block flex items-center gap-1">
                  <Globe className="w-3 h-3 text-emerald-400" /> Largest Lake
                </span>
                <span className="text-zinc-100 font-bold text-xs mt-1 block">{selectedContinent.geography.largestLake.name}</span>
                <span className="text-emerald-400 text-[11px] block">{selectedContinent.geography.largestLake.area}</span>
                <span className="text-zinc-500 text-[10px] block truncate">{selectedContinent.geography.largestLake.type}</span>
              </div>
            </div>

            {/* Mountain Ranges & Biomes */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
              <div className="p-3 bg-zinc-950/80 rounded-xl border border-zinc-850">
                <span className="text-[10px] text-zinc-400 uppercase tracking-wider font-bold block mb-1.5">
                  Major Mountain Ranges:
                </span>
                <ul className="space-y-1 text-[11px] text-zinc-300">
                  {selectedContinent.geography.majorMountainRanges.map((range, rIdx) => (
                    <li key={rIdx} className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                      <span>{range}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-3 bg-zinc-950/80 rounded-xl border border-zinc-850">
                <span className="text-[10px] text-zinc-400 uppercase tracking-wider font-bold block mb-1.5">
                  Dominant Biomes & Climate Zones:
                </span>
                <ul className="space-y-1 text-[11px] text-zinc-300">
                  {selectedContinent.geography.climateBiomes.map((biome, bIdx) => (
                    <li key={bIdx} className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      <span>{biome}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
