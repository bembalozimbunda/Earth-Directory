import React, { useState } from 'react';
import { 
  X, BookOpen, ShieldCheck, Coins, Globe, Landmark, 
  HelpCircle, Building2, CheckCircle2, Copy, Check, 
  ExternalLink, FileText, ArrowRight, Sparkles, Phone, 
  Heart, Download, Terminal, Layers, GraduationCap,
  RefreshCw, AlertTriangle, Cpu, Radio, Award, Compass
} from 'lucide-react';
import { ALL_UNIVERSITY_FRAMEWORKS, ACADEMIC_DISCIPLINES_MATRIX } from '../data/universityFrameworks.ts';
import { executeResurrectionProtocol, ResurrectionReport } from '../utils/resurrection.ts';

interface EducationalAtlasPortalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function EducationalAtlasPortal({ isOpen, onClose }: EducationalAtlasPortalProps) {
  const [activeTab, setActiveTab] = useState<'atlas' | 'pacra' | 'kwacha' | 'deployment' | 'universities' | 'resurrection'>('atlas');
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [selectedRegion, setSelectedRegion] = useState<'All' | 'Zambia' | 'Africa' | 'Global Earth'>('All');
  const [resurrectionReport, setResurrectionReport] = useState<ResurrectionReport | null>(null);
  const [isResurrecting, setIsResurrecting] = useState(false);

  if (!isOpen) return null;

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2500);
  };

  const handleExecuteResurrection = async () => {
    setIsResurrecting(true);
    try {
      // Trigger backend log sweep
      try {
        await fetch('/api/system/resurrection-sweep', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ trigger: 'USER_INTERFACE_RECOVERY', timestamp: new Date().toISOString() })
        });
      } catch {
        // Continue client flush even if offline
      }

      const report = await executeResurrectionProtocol();
      setResurrectionReport(report);
    } finally {
      setIsResurrecting(false);
    }
  };

  const filteredUniversities = selectedRegion === 'All' 
    ? ALL_UNIVERSITY_FRAMEWORKS 
    : ALL_UNIVERSITY_FRAMEWORKS.filter(u => u.region === selectedRegion);

  return (
    <div className="fixed inset-0 z-[150] flex items-center justify-center p-4 sm:p-6 bg-zinc-950/90 backdrop-blur-xl overflow-y-auto">
      <div className="w-full max-w-4xl bg-zinc-900/95 border border-zinc-700/80 rounded-2xl shadow-[0_0_80px_rgba(0,0,0,0.9)] overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-zinc-800 bg-zinc-950/80 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400">
              <BookOpen className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono tracking-widest uppercase text-amber-400 font-semibold">
                  Civic & Educational Handbook
                </span>
                <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[9px] font-mono text-emerald-400">
                  Open Atlas & Higher Ed Framework
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-light text-zinc-100 uppercase tracking-wider mt-0.5">
                Educational Atlas & University Matrix
              </h2>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-zinc-400 hover:text-white bg-zinc-900 border border-zinc-800 hover:border-zinc-600 rounded-xl transition-colors cursor-pointer"
            title="Close Handbook"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="flex items-center gap-2 px-6 pt-4 border-b border-zinc-800 bg-zinc-950/40 shrink-0 overflow-x-auto custom-scrollbar">
          <button
            onClick={() => setActiveTab('atlas')}
            className={`px-4 py-2.5 rounded-t-lg font-mono text-xs uppercase tracking-wider transition-all border-b-2 whitespace-nowrap flex items-center gap-2 ${
              activeTab === 'atlas'
                ? 'border-amber-400 text-amber-300 bg-zinc-900/60 font-semibold'
                : 'border-transparent text-zinc-400 hover:text-zinc-200'
            }`}
          >
            <Globe className="w-3.5 h-3.5" />
            <span>01. Atlas Purpose</span>
          </button>

          <button
            onClick={() => setActiveTab('universities')}
            className={`px-4 py-2.5 rounded-t-lg font-mono text-xs uppercase tracking-wider transition-all border-b-2 whitespace-nowrap flex items-center gap-2 ${
              activeTab === 'universities'
                ? 'border-indigo-400 text-indigo-300 bg-zinc-900/60 font-semibold'
                : 'border-transparent text-zinc-400 hover:text-zinc-200'
            }`}
          >
            <GraduationCap className="w-3.5 h-3.5" />
            <span>02. University Frameworks</span>
          </button>

          <button
            onClick={() => setActiveTab('pacra')}
            className={`px-4 py-2.5 rounded-t-lg font-mono text-xs uppercase tracking-wider transition-all border-b-2 whitespace-nowrap flex items-center gap-2 ${
              activeTab === 'pacra'
                ? 'border-emerald-400 text-emerald-300 bg-zinc-900/60 font-semibold'
                : 'border-transparent text-zinc-400 hover:text-zinc-200'
            }`}
          >
            <Landmark className="w-3.5 h-3.5" />
            <span>03. PACRA & Legal</span>
          </button>

          <button
            onClick={() => setActiveTab('kwacha')}
            className={`px-4 py-2.5 rounded-t-lg font-mono text-xs uppercase tracking-wider transition-all border-b-2 whitespace-nowrap flex items-center gap-2 ${
              activeTab === 'kwacha'
                ? 'border-cyan-400 text-cyan-300 bg-zinc-900/60 font-semibold'
                : 'border-transparent text-zinc-400 hover:text-zinc-200'
            }`}
          >
            <Coins className="w-3.5 h-3.5" />
            <span>04. Kwacha (ZMW)</span>
          </button>

          <button
            onClick={() => setActiveTab('deployment')}
            className={`px-4 py-2.5 rounded-t-lg font-mono text-xs uppercase tracking-wider transition-all border-b-2 whitespace-nowrap flex items-center gap-2 ${
              activeTab === 'deployment'
                ? 'border-violet-400 text-violet-300 bg-zinc-900/60 font-semibold'
                : 'border-transparent text-zinc-400 hover:text-zinc-200'
            }`}
          >
            <Terminal className="w-3.5 h-3.5" />
            <span>05. Hosting & Domains</span>
          </button>

          <button
            onClick={() => setActiveTab('resurrection')}
            className={`px-4 py-2.5 rounded-t-lg font-mono text-xs uppercase tracking-wider transition-all border-b-2 whitespace-nowrap flex items-center gap-2 ${
              activeTab === 'resurrection'
                ? 'border-rose-400 text-rose-300 bg-zinc-900/60 font-semibold'
                : 'border-transparent text-rose-400/70 hover:text-rose-200'
            }`}
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>06. Resurrection Protocol</span>
          </button>
        </div>

        {/* Tab Contents */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 custom-scrollbar text-zinc-300 text-sm font-sans leading-relaxed">
          
          {/* TAB 1: ATLAS & CIVICS PURPOSE */}
          {activeTab === 'atlas' && (
            <div className="space-y-6">
              <div className="p-4 bg-amber-950/20 border border-amber-500/30 rounded-xl">
                <h3 className="text-amber-300 font-mono text-sm font-semibold uppercase tracking-wider flex items-center gap-2 mb-2">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  Direct Reading Atlas for Locals & Students
                </h3>
                <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed">
                  Unlike traditional satellite map tools that require heavy bandwidth, GPS rendering, and complex gestures, this application is designed as a <strong>Direct Digital Atlas</strong>. Built on foundational principles taught in Zambian Primary & Secondary education (Grade 8–12 Geography, Civic Education, and Creative & Technology Studies), it provides immediate, readable access to what is inside every nation.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-zinc-950/60 border border-zinc-800 rounded-xl space-y-2">
                  <div className="text-xs font-mono uppercase tracking-widest text-zinc-400 font-bold flex items-center gap-2">
                    <Globe className="w-4 h-4 text-indigo-400" />
                    Global Geographic Coverage
                  </div>
                  <ul className="text-xs text-zinc-400 space-y-1.5 list-disc pl-4 font-mono">
                    <li><strong>237 Sovereign & Non-Sovereign Entities</strong> across all 7 continents.</li>
                    <li>Official Spoken Tongues & National Flag Emojis.</li>
                    <li>International Calling Dial Codes (e.g. +260 for Zambia).</li>
                    <li>Local Currencies & Symbols (ZMW, ZAR, USD, EUR, etc.).</li>
                  </ul>
                </div>

                <div className="p-4 bg-zinc-950/60 border border-zinc-800 rounded-xl space-y-2">
                  <div className="text-xs font-mono uppercase tracking-widest text-zinc-400 font-bold flex items-center gap-2">
                    <Layers className="w-4 h-4 text-emerald-400" />
                    Zambian Provincial & District Root
                  </div>
                  <ul className="text-xs text-zinc-400 space-y-1.5 list-disc pl-4 font-mono">
                    <li><strong>All 10 Provinces of Zambia</strong>: Lusaka, Copperbelt, Southern, Eastern, Central, Western, Northern, Luapula, North-Western, Muchinga.</li>
                    <li><strong>116 Unique Administrative Districts</strong> with local economic profiles, chiefdoms, and 933+ health facilities.</li>
                    <li>Central Africa Time (CAT / UTC+2) temporal sync.</li>
                  </ul>
                </div>
              </div>

              <div className="p-4 bg-zinc-950/40 border border-zinc-800/80 rounded-xl space-y-2">
                <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-200 font-semibold">
                  Why All Gates Are Open
                </h4>
                <p className="text-xs text-zinc-400 leading-relaxed font-mono">
                  There are no hidden paywalls or development locks. Every continent, country profile, and provincial door is fully unlocked so that any student, teacher, or researcher can browse freely.
                </p>
              </div>
            </div>
          )}

          {/* TAB 2: PACRA & BUSINESS REGISTRATION GUIDANCE */}
          {activeTab === 'pacra' && (
            <div className="space-y-6">
              <div className="p-4 bg-emerald-950/20 border border-emerald-500/30 rounded-xl">
                <h3 className="text-emerald-300 font-mono text-sm font-semibold uppercase tracking-wider flex items-center gap-2 mb-2">
                  <Landmark className="w-4 h-4 text-emerald-400" />
                  PACRA & Legal Framework for Zambian Tech Initiatives
                </h3>
                <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed">
                  To formalize software platforms, research hubs, or educational initiatives in Zambia, developers and founders engage the <strong>Patents and Companies Registration Agency (PACRA)</strong>. Here is the formal procedure to establish legal standing:
                </p>
              </div>

              <div className="space-y-3">
                <div className="p-4 bg-zinc-950/60 border border-zinc-800 rounded-xl flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-mono text-xs shrink-0 font-bold">
                    1
                  </div>
                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-200 font-semibold">
                      Name Clearance & Reservation (PACRA Online Portal)
                    </h4>
                    <p className="text-xs text-zinc-400 mt-1">
                      Search and reserve your organization name on the PACRA portal (e.g., <em>Earth Directory Educational Initiative</em> or <em>Universal Atlas Systems Ltd</em>). Name reservations remain valid for 90 days.
                    </p>
                  </div>
                </div>

                <div className="p-4 bg-zinc-950/60 border border-zinc-800 rounded-xl flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-mono text-xs shrink-0 font-bold">
                    2
                  </div>
                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-200 font-semibold">
                      Select Legal Entity Structure
                    </h4>
                    <p className="text-xs text-zinc-400 mt-1">
                      • <strong>Business Name (Sole Proprietorship / Partnership)</strong>: Simplest form for individual creators.<br />
                      • <strong>Company Limited by Guarantee (Non-Profit / NGO)</strong>: Ideal for public educational and community programs accepting donations.<br />
                      • <strong>Private Company Limited by Shares (Ltd)</strong>: Standard for commercial technology enterprises.
                    </p>
                  </div>
                </div>

                <div className="p-4 bg-zinc-950/60 border border-zinc-800 rounded-xl flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-mono text-xs shrink-0 font-bold">
                    3
                  </div>
                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-200 font-semibold">
                      Statutory Registrations (ZRA, NAPSA, ZICTA)
                    </h4>
                    <p className="text-xs text-zinc-400 mt-1">
                      • <strong>Zambia Revenue Authority (ZRA)</strong>: Obtain a Taxpayer Identification Number (TPIN).<br />
                      • <strong>NAPSA & Workers Compensation</strong>: Standard labor compliance for operating entities.<br />
                      • <strong>ZICTA (Zambia Information and Communications Technology Authority)</strong>: Regulatory compliance for electronic service providers and local `.zm` domain registrations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: KWACHA (ZMW) COMMUNITY DONATIONS */}
          {activeTab === 'kwacha' && (
            <div className="space-y-6">
              <div className="p-4 bg-cyan-950/20 border border-cyan-500/30 rounded-xl">
                <h3 className="text-cyan-300 font-mono text-sm font-semibold uppercase tracking-wider flex items-center gap-2 mb-2">
                  <Coins className="w-4 h-4 text-cyan-400" />
                  Community Support in Zambian Kwacha (ZMW)
                </h3>
                <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed">
                  This educational atlas is built for the public and students. If you appreciate this work and want to support the developer's ongoing research and maintenance, voluntary donations can be made directly in <strong>Zambian Kwacha (ZMW)</strong>.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Mobile Money */}
                <div className="p-4 bg-zinc-950/70 border border-zinc-800 rounded-xl space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-bold">
                      Mobile Money (Zambia)
                    </span>
                    <Phone className="w-4 h-4 text-emerald-400" />
                  </div>
                  
                  <div className="space-y-2 text-xs font-mono">
                    <div className="p-2.5 bg-zinc-900/90 border border-zinc-800 rounded-lg flex items-center justify-between">
                      <div>
                        <span className="text-zinc-500 block text-[10px]">Airtel Money / MTN MoMo / Zamtel</span>
                        <span className="text-zinc-200 font-bold">+260 (Local Mobile Money)</span>
                      </div>
                      <button
                        onClick={() => handleCopy('+260970000000', 'momo')}
                        className="px-2.5 py-1 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 rounded text-[10px] uppercase font-mono transition-colors"
                      >
                        {copiedKey === 'momo' ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                      </button>
                    </div>
                    <p className="text-[11px] text-zinc-500">
                      Supports instant Kwacha peer-to-peer mobile payments across all Zambian networks.
                    </p>
                  </div>
                </div>

                {/* Local Bank Transfer */}
                <div className="p-4 bg-zinc-950/70 border border-zinc-800 rounded-xl space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono uppercase tracking-widest text-amber-400 font-bold">
                      Bank Transfer (ZMW)
                    </span>
                    <Building2 className="w-4 h-4 text-amber-400" />
                  </div>

                  <div className="space-y-2 text-xs font-mono">
                    <div className="p-2.5 bg-zinc-900/90 border border-zinc-800 rounded-lg">
                      <span className="text-zinc-500 block text-[10px]">Currency & Clearing</span>
                      <span className="text-zinc-200 font-bold">Zambian Kwacha (ZMW) • ZIPIT / EFT</span>
                    </div>
                    <p className="text-[11px] text-zinc-500">
                      Standard local interbank transfer via Bank of Zambia electronic clearing.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-3.5 bg-zinc-950/50 border border-zinc-800/80 rounded-xl flex items-center gap-3 text-xs font-mono text-zinc-400">
                <Heart className="w-4 h-4 text-rose-400 shrink-0" />
                <span>100% of community contributions support free educational accessibility and database verification.</span>
              </div>
            </div>
          )}

          {/* TAB 4: INDEPENDENT HOSTING, DOMAINS & LICENSES */}
          {activeTab === 'deployment' && (
            <div className="space-y-6">
              <div className="p-4 bg-violet-950/20 border border-violet-500/30 rounded-xl">
                <h3 className="text-violet-300 font-mono text-sm font-semibold uppercase tracking-wider flex items-center gap-2 mb-2">
                  <Terminal className="w-4 h-4 text-violet-400" />
                  Independent Deployment & Custom Domain Guide
                </h3>
                <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed">
                  When a school, university, or partner nation adopts this system, they can host it independently on their own server infrastructure and attach custom domains.
                </p>
              </div>

              <div className="space-y-4">
                <div className="p-4 bg-zinc-950/60 border border-zinc-800 rounded-xl space-y-2">
                  <div className="text-xs font-mono uppercase tracking-widest text-zinc-200 font-bold">
                    1. Connecting a Custom Domain (e.g. your-atlas.org or .zm)
                  </div>
                  <p className="text-xs text-zinc-400 font-mono">
                    • Register a domain via ZICTA accredited registrars (for `.zm` / `.edu.zm` domains) or global DNS providers.<br />
                    • Configure standard DNS records:
                  </p>
                  <div className="p-3 bg-zinc-900 border border-zinc-800 rounded font-mono text-[11px] text-zinc-300 space-y-1">
                    <div>Type: <strong>A</strong> | Name: <strong>@</strong> | Value: <strong>&lt;Your-Server-IP&gt;</strong></div>
                    <div>Type: <strong>CNAME</strong> | Name: <strong>www</strong> | Value: <strong>&lt;Your-Domain&gt;</strong></div>
                  </div>
                </div>

                <div className="p-4 bg-zinc-950/60 border border-zinc-800 rounded-xl space-y-2">
                  <div className="text-xs font-mono uppercase tracking-widest text-zinc-200 font-bold">
                    2. Open-Source Licensing (MIT License)
                  </div>
                  <p className="text-xs text-zinc-400 font-mono leading-relaxed">
                    This project is designed under the permissive <strong>MIT License</strong>, allowing schools and researchers to study, modify, translate, and run the software without restrictive proprietary locks.
                  </p>
                </div>

                <div className="p-4 bg-zinc-950/60 border border-zinc-800 rounded-xl space-y-2">
                  <div className="text-xs font-mono uppercase tracking-widest text-zinc-200 font-bold">
                    3. Build & Run Commands
                  </div>
                  <div className="p-3 bg-zinc-900 border border-zinc-800 rounded font-mono text-[11px] text-emerald-400 space-y-1">
                    <div># Install dependencies</div>
                    <div>npm install</div>
                    <div># Production build</div>
                    <div>npm run build</div>
                    <div># Start standalone server</div>
                    <div>npm start</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 5: UNIVERSITY & HIGHER EDUCATION FRAMEWORKS */}
          {activeTab === 'universities' && (
            <div className="space-y-6">
              <div className="p-4 bg-indigo-950/20 border border-indigo-500/30 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h3 className="text-indigo-300 font-mono text-sm font-semibold uppercase tracking-wider flex items-center gap-2 mb-1">
                    <GraduationCap className="w-4 h-4 text-indigo-400" />
                    University & Higher Education Frameworks (Zambia, Africa, Earth)
                  </h3>
                  <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed">
                    Integrated academic curriculum matrix, research chairs, geospatial laboratories, and monetary telemetry integration across higher learning institutions.
                  </p>
                </div>
                <div className="flex items-center gap-1.5 shrink-0 bg-zinc-950 p-1.5 rounded-xl border border-zinc-800">
                  {(['All', 'Zambia', 'Africa', 'Global Earth'] as const).map((r) => (
                    <button
                      key={r}
                      onClick={() => setSelectedRegion(r)}
                      className={`px-3 py-1.5 rounded-lg text-[11px] font-mono transition-all cursor-pointer ${
                        selectedRegion === r
                          ? 'bg-indigo-600 text-white font-bold shadow'
                          : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900'
                      }`}
                    >
                      {r}
                    </button>
                  ))}
                </div>
              </div>

              {/* Cross-Discipline Competency Matrix */}
              <div className="p-4 bg-zinc-950/60 border border-zinc-800 rounded-xl space-y-3">
                <div className="text-xs font-mono uppercase tracking-widest text-indigo-300 font-bold flex items-center gap-2">
                  <Compass className="w-4 h-4 text-indigo-400" />
                  Academic Cross-Discipline Integration Matrix
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {ACADEMIC_DISCIPLINES_MATRIX.map((disc, idx) => (
                    <div key={idx} className="p-3 bg-zinc-900/70 border border-zinc-800 rounded-lg space-y-1.5">
                      <div className="text-xs font-semibold text-zinc-100 font-mono flex items-center justify-between">
                        <span>{disc.discipline}</span>
                      </div>
                      <div className="text-[11px] text-indigo-400 font-mono">
                        Lead: {disc.keyInstitutions.join(' • ')}
                      </div>
                      <ul className="text-[11px] text-zinc-400 space-y-0.5 list-disc pl-4 font-mono">
                        {disc.coreCompetencies.slice(0, 2).map((c, cIdx) => (
                          <li key={cIdx}>{c}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Institution Cards */}
              <div className="space-y-4">
                {filteredUniversities.map((inst) => (
                  <div key={inst.id} className="p-4 bg-zinc-950/70 border border-zinc-800 rounded-xl space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-zinc-800/80 pb-3">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-base font-bold text-zinc-100">{inst.name}</span>
                          <span className="px-2 py-0.5 rounded bg-indigo-500/10 border border-indigo-500/30 text-[10px] font-mono text-indigo-300 font-bold">
                            {inst.acronym}
                          </span>
                          <span className="px-2 py-0.5 rounded bg-zinc-800 text-[10px] font-mono text-zinc-400">
                            Est. {inst.established}
                          </span>
                        </div>
                        <div className="text-[11px] font-mono text-zinc-400 mt-0.5">
                          {inst.jurisdiction} • {inst.campusLocations.join(' | ')}
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="px-2 py-1 rounded bg-amber-500/10 border border-amber-500/30 text-[10px] font-mono text-amber-300 block">
                          {inst.harmonicNode}
                        </span>
                        <span className="text-[10px] font-mono text-zinc-500 italic mt-0.5 block">
                          "{inst.motto}"
                        </span>
                      </div>
                    </div>

                    {/* Faculties */}
                    <div className="space-y-2">
                      <div className="text-[11px] font-mono uppercase tracking-widest text-zinc-400 font-bold flex items-center gap-1.5">
                        <Layers className="w-3.5 h-3.5 text-indigo-400" />
                        Key Faculties & Applied Disciplines
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {inst.faculties.map((fac, fIdx) => (
                          <div key={fIdx} className="p-2.5 bg-zinc-900/50 border border-zinc-800/60 rounded-lg space-y-1">
                            <div className="text-xs font-semibold text-zinc-200 font-mono">{fac.name}</div>
                            <div className="text-[10px] text-zinc-400 font-mono">
                              Depts: {fac.departments.join(', ')}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Research Chairs & Curricula */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
                      <div className="p-3 bg-indigo-950/10 border border-indigo-500/20 rounded-lg space-y-1.5">
                        <div className="text-[11px] font-mono uppercase tracking-widest text-indigo-300 font-bold flex items-center gap-1">
                          <Award className="w-3.5 h-3.5 text-indigo-400" />
                          Research Chairs & Labs
                        </div>
                        {inst.researchChairs.map((rc, rcIdx) => (
                          <div key={rcIdx} className="text-xs font-mono text-zinc-300">
                            <span className="font-semibold text-indigo-200">{rc.title}</span>
                            <span className="block text-[11px] text-zinc-400">Focus: {rc.focusArea}</span>
                          </div>
                        ))}
                      </div>

                      <div className="p-3 bg-emerald-950/10 border border-emerald-500/20 rounded-lg space-y-1.5">
                        <div className="text-[11px] font-mono uppercase tracking-widest text-emerald-300 font-bold flex items-center gap-1">
                          <BookOpen className="w-3.5 h-3.5 text-emerald-400" />
                          Curriculum Course Code
                        </div>
                        {inst.specializedCurricula.map((sc, scIdx) => (
                          <div key={scIdx} className="text-xs font-mono text-zinc-300">
                            <span className="px-1.5 py-0.5 bg-emerald-500/20 text-emerald-300 rounded text-[10px] font-bold mr-1.5">
                              {sc.code}
                            </span>
                            <span className="font-semibold">{sc.title}</span>
                            <span className="block text-[11px] text-zinc-400 mt-0.5">
                              Integration: {sc.warmablonIntegration}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 6: RESURRECTION PROTOCOL & SW / DEV-DIST ANALYSIS */}
          {activeTab === 'resurrection' && (
            <div className="space-y-6">
              <div className="p-4 bg-rose-950/20 border border-rose-500/30 rounded-xl">
                <div className="flex items-center justify-between">
                  <h3 className="text-rose-300 font-mono text-sm font-semibold uppercase tracking-wider flex items-center gap-2">
                    <RefreshCw className="w-4 h-4 text-rose-400 animate-spin" />
                    System Resurrection Protocol & Service Worker Audit
                  </h3>
                  <span className="px-2 py-0.5 rounded bg-rose-500/20 border border-rose-500/40 text-rose-300 text-[10px] font-mono font-bold uppercase">
                    Root Recovery Mode
                  </span>
                </div>
                <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed mt-2">
                  When a system experiences a frozen preview, white screen, or dead network responses, it is almost always caused by a <strong>stale Service Worker cache lock</strong> or outdated <strong>dev-dist/sw.js</strong> workbox precache intercepting requests in development.
                </p>
              </div>

              {/* Technical Root-Cause Breakdown */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-zinc-950/60 border border-zinc-800 rounded-xl space-y-2">
                  <div className="text-xs font-mono uppercase tracking-widest text-zinc-200 font-bold flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-amber-400" />
                    Root Cause: Why dev-dist/sw.js Causes Deadlocks
                  </div>
                  <ul className="text-xs text-zinc-400 space-y-1.5 list-disc pl-4 font-mono leading-relaxed">
                    <li><strong>Precache Collisions:</strong> In dev mode, Vite dynamically re-compiles modules. Service workers precache <code className="text-amber-300">index.html</code> with outdated chunk hashes.</li>
                    <li><strong>Fetch Interception:</strong> Workbox traps browser network requests and serves stale HTML instead of live Vite modules.</li>
                    <li><strong>IFrame Isolation:</strong> AI Studio iframe containers isolate the preview; a zombie worker on the origin prevents fresh scripts from evaluating.</li>
                  </ul>
                </div>

                <div className="p-4 bg-zinc-950/60 border border-zinc-800 rounded-xl space-y-2">
                  <div className="text-xs font-mono uppercase tracking-widest text-zinc-200 font-bold flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    Resurrection Watchdog Remediation
                  </div>
                  <ul className="text-xs text-zinc-400 space-y-1.5 list-disc pl-4 font-mono leading-relaxed">
                    <li><strong>Disabled in Dev:</strong> <code className="text-emerald-300">devOptions: &#123; enabled: false &#125;</code> prevents dev worker generation.</li>
                    <li><strong>Startup Watchdog:</strong> <code className="text-emerald-300">initResurrectionWatchdog()</code> proactively unregisters all dev workers on boot.</li>
                    <li><strong>Emergency Flush:</strong> Clears all <code className="text-emerald-300">caches.keys()</code> and resets ephemeral memory.</li>
                  </ul>
                </div>
              </div>

              {/* Interactive Resurrection Action */}
              <div className="p-5 bg-zinc-950/80 border border-rose-500/40 rounded-xl space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h4 className="text-sm font-mono font-bold text-zinc-100 uppercase tracking-wider">
                      Execute Zero-Trust System Resurrection
                    </h4>
                    <p className="text-xs font-mono text-zinc-400 mt-1">
                      Unregisters all active Service Workers, purges browser CacheStorage, flushes corrupt storage keys, and resets state.
                    </p>
                  </div>
                  <button
                    onClick={handleExecuteResurrection}
                    disabled={isResurrecting}
                    className="px-6 py-3 rounded-xl bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-500 hover:to-rose-600 text-white font-mono text-xs uppercase tracking-widest font-bold shadow-[0_0_30px_rgba(225,29,72,0.4)] transition-all cursor-pointer flex items-center gap-2 shrink-0 disabled:opacity-50"
                  >
                    <RefreshCw className={`w-4 h-4 ${isResurrecting ? 'animate-spin' : ''}`} />
                    <span>{isResurrecting ? 'Resurrecting...' : 'Initiate Resurrection'}</span>
                  </button>
                </div>

                {/* Report Display */}
                {resurrectionReport && (
                  <div className="p-3.5 bg-zinc-900 border border-zinc-700 rounded-lg space-y-2 font-mono text-xs">
                    <div className="flex items-center justify-between text-emerald-400 font-bold">
                      <span className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4" />
                        Status: {resurrectionReport.status}
                      </span>
                      <span className="text-[10px] text-zinc-500">{resurrectionReport.timestamp}</span>
                    </div>
                    <p className="text-zinc-300">{resurrectionReport.details}</p>
                    <div className="text-[11px] text-zinc-400">
                      Cleared Caches: {resurrectionReport.clearedCacheKeys.length > 0 ? resurrectionReport.clearedCacheKeys.join(', ') : 'None (Already Clean)'}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

        </div>

        {/* Footer */}
        <div className="p-4 bg-zinc-950/90 border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <span className="text-[11px] font-mono text-zinc-500">
            Universal Earth Directory • Rooted in Zambian Civics & Global Geography
          </span>
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 font-mono text-xs uppercase tracking-wider transition-colors cursor-pointer"
          >
            Close Handbook
          </button>
        </div>

      </div>
    </div>
  );
}
