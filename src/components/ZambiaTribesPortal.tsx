import React, { useState, useMemo } from 'react';
import { 
  X, Search, Landmark, Users, Crown, Sparkles, Filter, 
  MapPin, ShieldCheck, Heart, Terminal, MessageSquare, Star, 
  ChevronRight, Music, Film, BookOpen, Building2, Stethoscope, 
  GraduationCap, Shield, Radio, Coins, Cpu, Send, CheckCircle2,
  Share2, ArrowRight
} from 'lucide-react';
import { 
  ZAMBIAN_TRIBES_DATA, 
  EMPOWERMENT_PILLARS, 
  INITIAL_ZAMBIAN_DEV_REVIEWS,
  ZambianTribe,
  ZambianDeveloperReview
} from '../data/zambiaTribes';

interface ZambiaTribesPortalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultSelectedTribeId?: string | null;
}

export function ZambiaTribesPortal({ isOpen, onClose, defaultSelectedTribeId }: ZambiaTribesPortalProps) {
  const [activeTab, setActiveTab] = useState<'tribes' | 'empowerment' | 'dev-reviews' | 'sovereign-anchor'>('tribes');
  const [selectedProvinceFilter, setSelectedProvinceFilter] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedTribe, setSelectedTribe] = useState<ZambianTribe | null>(null);

  // Developer Reviews state
  const [reviews, setReviews] = useState<ZambianDeveloperReview[]>(INITIAL_ZAMBIAN_DEV_REVIEWS);
  const [newDevName, setNewDevName] = useState('');
  const [newDevLocation, setNewDevLocation] = useState('');
  const [newDevProvince, setNewDevProvince] = useState('Lusaka');
  const [newDevRole, setNewDevRole] = useState('Full-Stack Engineer');
  const [newDevTitle, setNewDevTitle] = useState('');
  const [newDevComment, setNewDevComment] = useState('');
  const [newDevRating, setNewDevRating] = useState(5);
  const [reviewSubmitted, setReviewSubmitted] = useState(false);

  const provinces = useMemo(() => {
    return ['All', 'Western', 'Lusaka', 'Southern', 'Eastern', 'Northern', 'Luapula', 'Copperbelt', 'North-Western', 'Central', 'Muchinga'];
  }, []);

  const filteredTribes = useMemo(() => {
    return ZAMBIAN_TRIBES_DATA.filter((tribe) => {
      const matchesProvince = selectedProvinceFilter === 'All' || tribe.province === selectedProvinceFilter;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch = !q || 
        tribe.name.toLowerCase().includes(q) ||
        tribe.traditionalLeader.toLowerCase().includes(q) ||
        tribe.traditionalCeremony.toLowerCase().includes(q) ||
        tribe.dialectOrLanguage.toLowerCase().includes(q) ||
        tribe.primaryDistricts.some(d => d.toLowerCase().includes(q)) ||
        (tribe.alternateNames && tribe.alternateNames.some(a => a.toLowerCase().includes(q)));
      return matchesProvince && matchesSearch;
    });
  }, [selectedProvinceFilter, searchQuery]);

  const handleSelectTribe = (tribe: ZambianTribe) => {
    setSelectedTribe(tribe);
  };

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newDevName.trim() || !newDevComment.trim()) return;

    const newRev: ZambianDeveloperReview = {
      id: `dev-rev-${Date.now()}`,
      name: newDevName.trim(),
      location: newDevLocation.trim() || 'Zambia',
      province: newDevProvince,
      role: newDevRole.trim() || 'Zambian Software Developer',
      rating: newDevRating,
      reviewTitle: newDevTitle.trim() || 'Architectural Review of WARMABLON',
      comment: newDevComment.trim(),
      timestamp: new Date().toISOString(),
      verifiedZambianDev: true
    };

    setReviews([newRev, ...reviews]);
    setReviewSubmitted(true);
    setNewDevName('');
    setNewDevLocation('');
    setNewDevTitle('');
    setNewDevComment('');
    setTimeout(() => setReviewSubmitted(false), 4000);
  };

  if (!isOpen) return null;

  return (
    <div
      id="zambia-tribes-portal-modal"
      className="fixed inset-0 z-[999999] flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/90 backdrop-blur-xl animate-in fade-in duration-200 select-none text-zinc-100"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-6xl h-[94vh] bg-zinc-950 border border-emerald-500/40 rounded-3xl shadow-[0_0_90px_rgba(16,185,129,0.25)] overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* TOP HEADER */}
        <header className="p-4 sm:p-5 border-b border-zinc-800 bg-gradient-to-r from-emerald-950/60 via-zinc-950 to-zinc-950 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-emerald-500/20 border border-emerald-400/50 flex items-center justify-center text-2xl shadow-[0_0_20px_rgba(16,185,129,0.4)]">
              🇿🇲
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-lg sm:text-xl font-bold text-white tracking-wide">
                  Zambia Sovereign Cultural & Civic Portal
                </h2>
                <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-mono text-[10px] font-bold border border-emerald-500/30">
                  73+ Tribes & Royalty
                </span>
              </div>
              <p className="text-xs text-zinc-400 mt-0.5">
                Anchor Node: <strong>Mongu & Lusaka</strong> • 10 Provinces • 116 Districts • Empowering All Citizens
              </p>
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="flex items-center gap-1.5 bg-zinc-900/90 p-1.5 rounded-2xl border border-zinc-800 shrink-0 overflow-x-auto max-w-full">
            <button
              onClick={() => setActiveTab('tribes')}
              className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer flex items-center gap-1.5 whitespace-nowrap ${
                activeTab === 'tribes'
                  ? 'bg-emerald-600 text-white shadow-lg'
                  : 'text-zinc-400 hover:text-white hover:bg-zinc-800'
              }`}
            >
              <Users className="w-3.5 h-3.5" />
              <span>All 73+ Tribes ({ZAMBIAN_TRIBES_DATA.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('empowerment')}
              className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer flex items-center gap-1.5 whitespace-nowrap ${
                activeTab === 'empowerment'
                  ? 'bg-emerald-600 text-white shadow-lg'
                  : 'text-zinc-400 hover:text-white hover:bg-zinc-800'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Economic Empowerment</span>
            </button>

            <button
              onClick={() => setActiveTab('dev-reviews')}
              className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer flex items-center gap-1.5 whitespace-nowrap ${
                activeTab === 'dev-reviews'
                  ? 'bg-emerald-600 text-white shadow-lg'
                  : 'text-zinc-400 hover:text-white hover:bg-zinc-800'
              }`}
            >
              <Terminal className="w-3.5 h-3.5" />
              <span>Developer Reviews ({reviews.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('sovereign-anchor')}
              className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer flex items-center gap-1.5 whitespace-nowrap ${
                activeTab === 'sovereign-anchor'
                  ? 'bg-emerald-600 text-white shadow-lg'
                  : 'text-zinc-400 hover:text-white hover:bg-zinc-800'
              }`}
            >
              <Crown className="w-3.5 h-3.5" />
              <span>Sovereign Anchor Node</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-white transition-colors cursor-pointer ml-1"
              title="Close (Esc)"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </header>

        {/* MAIN BODY AREA */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 custom-scrollbar space-y-6">
          
          {/* TAB 1: ALL 73+ ZAMBIAN TRIBES DIRECTORY */}
          {activeTab === 'tribes' && (
            <div className="space-y-5">
              {/* Filter and Search Bar */}
              <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 p-3.5 bg-zinc-900/70 border border-zinc-800 rounded-2xl">
                <div className="relative flex-1">
                  <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search by tribe, leader, ceremony, language, or district..."
                    className="w-full pl-10 pr-4 py-2 bg-zinc-950 border border-zinc-800 focus:border-emerald-500 rounded-xl text-xs font-mono text-white placeholder-zinc-500 outline-none transition-colors"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-white text-xs font-mono"
                    >
                      Clear
                    </button>
                  )}
                </div>

                {/* Province Filter Pills */}
                <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 custom-scrollbar">
                  <span className="text-[11px] font-mono text-zinc-400 font-bold uppercase shrink-0 mr-1 flex items-center gap-1">
                    <Filter className="w-3 h-3 text-emerald-400" />
                    Province:
                  </span>
                  {provinces.map((prov) => (
                    <button
                      key={prov}
                      onClick={() => setSelectedProvinceFilter(prov)}
                      className={`px-2.5 py-1 rounded-lg text-[11px] font-mono transition-all cursor-pointer shrink-0 ${
                        selectedProvinceFilter === prov
                          ? 'bg-emerald-500 text-black font-bold shadow'
                          : 'bg-zinc-950 text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800 border border-zinc-800'
                      }`}
                    >
                      {prov}
                    </button>
                  ))}
                </div>
              </div>

              {/* Tribal Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredTribes.map((tribe) => (
                  <div
                    key={tribe.id}
                    onClick={() => handleSelectTribe(tribe)}
                    className="p-4 bg-zinc-900/60 hover:bg-zinc-900/90 border border-zinc-800 hover:border-emerald-500/60 rounded-2xl transition-all cursor-pointer space-y-3 flex flex-col justify-between group shadow-sm hover:shadow-[0_0_25px_rgba(16,185,129,0.15)]"
                  >
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-white text-sm group-hover:text-emerald-300 transition-colors">
                              {tribe.name}
                            </span>
                            <span className="px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30 text-[10px] font-mono text-emerald-300 font-bold">
                              {tribe.province}
                            </span>
                          </div>
                          <div className="text-[11px] font-mono text-zinc-400 mt-0.5">
                            Language: <span className="text-zinc-200 font-semibold">{tribe.dialectOrLanguage}</span>
                          </div>
                        </div>
                        <span className="p-1 rounded-lg bg-zinc-950 text-emerald-400 border border-zinc-800 group-hover:border-emerald-400 transition-colors">
                          <Crown className="w-3.5 h-3.5" />
                        </span>
                      </div>

                      {/* Traditional Leader & Ceremony */}
                      <div className="mt-3 space-y-1.5 text-xs font-mono bg-zinc-950/70 p-2.5 rounded-xl border border-zinc-800/80">
                        <div className="text-zinc-300">
                          <span className="text-zinc-500 uppercase text-[10px] block font-bold">Royal Leader / Seat:</span>
                          <span className="text-emerald-300 font-semibold truncate block">{tribe.traditionalLeader}</span>
                          <span className="text-zinc-400 text-[10px] block truncate">{tribe.royalSeatOrPalace}</span>
                        </div>
                        <div className="pt-1 border-t border-zinc-800/60 flex items-center justify-between">
                          <span className="text-amber-300 font-bold text-[11px] truncate">
                            {tribe.traditionalCeremony}
                          </span>
                          <span className="px-1.5 py-0.5 rounded bg-amber-500/10 text-amber-300 text-[9px]">
                            {tribe.ceremonyMonth}
                          </span>
                        </div>
                      </div>

                      <p className="text-[11px] text-zinc-400 line-clamp-2 mt-2 leading-relaxed">
                        {tribe.historicalHeritage}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-zinc-800/60 flex items-center justify-between text-[10px] font-mono text-zinc-500">
                      <span className="truncate">Emblem: {tribe.culturalEmblem}</span>
                      <span className="text-emerald-400 font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                        Details <ChevronRight className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {filteredTribes.length === 0 && (
                <div className="p-12 text-center bg-zinc-900/30 border border-zinc-800 rounded-3xl space-y-2">
                  <Users className="w-8 h-8 text-zinc-600 mx-auto" />
                  <div className="text-sm font-mono text-zinc-300 font-bold">No matching tribes found</div>
                  <p className="text-xs text-zinc-500">Try adjusting your search query or selecting 'All' provinces.</p>
                </div>
              )}
            </div>
          )}

          {/* TAB 2: SECTOR EMPOWERMENT PILLARS */}
          {activeTab === 'empowerment' && (
            <div className="space-y-6">
              <div className="p-4 bg-emerald-950/20 border border-emerald-500/30 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h3 className="text-emerald-300 font-mono text-sm font-semibold uppercase tracking-wider flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-emerald-400" />
                    Sovereign Multi-Sector Economic Empowerment Matrix
                  </h3>
                  <p className="text-zinc-300 text-xs leading-relaxed mt-1">
                    Direct wealth generation, infrastructure, youth studios, scientific research, medicinal cannabis legalization, and institutional efficiency across all Zambian communities.
                  </p>
                </div>
                <div className="px-3 py-1.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 font-mono text-xs font-bold shrink-0">
                  More Money in People's Pockets
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {EMPOWERMENT_PILLARS.map((pillar) => (
                  <div key={pillar.id} className="p-5 bg-zinc-900/60 border border-zinc-800 rounded-2xl space-y-3.5 flex flex-col justify-between">
                    <div className="space-y-2.5">
                      <div className="flex items-center justify-between">
                        <span className="px-2.5 py-0.5 rounded-md bg-zinc-800 text-[10px] font-mono text-emerald-400 font-bold uppercase tracking-wider">
                          {pillar.category}
                        </span>
                        <span className="text-[10px] font-mono text-amber-300 font-bold bg-amber-500/10 px-2 py-0.5 rounded">
                          {pillar.empowermentMetric}
                        </span>
                      </div>

                      <h4 className="text-base font-bold text-white leading-snug">
                        {pillar.title}
                      </h4>

                      <p className="text-xs text-zinc-300 leading-relaxed">
                        {pillar.description}
                      </p>

                      {/* Beneficiaries Chips */}
                      <div className="space-y-1.5 pt-1">
                        <span className="text-[10px] font-mono uppercase text-zinc-500 font-bold block">Key Beneficiaries:</span>
                        <div className="flex flex-wrap gap-1">
                          {pillar.targetBeneficiaries.map((ben, bIdx) => (
                            <span key={bIdx} className="px-2 py-0.5 bg-zinc-950 border border-zinc-800 rounded text-[10px] font-mono text-zinc-300">
                              {ben}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Strategic Initiatives */}
                      <div className="space-y-1 pt-1">
                        <span className="text-[10px] font-mono uppercase text-zinc-500 font-bold block">Strategic Initiatives:</span>
                        <ul className="text-xs text-zinc-400 space-y-1 font-mono list-disc pl-4">
                          {pillar.strategicInitiatives.map((init, iIdx) => (
                            <li key={iIdx}>{init}</li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="pt-2.5 border-t border-zinc-800/80 text-[10px] font-mono text-zinc-500">
                      Institutions: <span className="text-zinc-400">{pillar.institutionsInvolved.join(' • ')}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: ZAMBIAN DEVELOPER REVIEWS & OPEN CODE COLLABORATION */}
          {activeTab === 'dev-reviews' && (
            <div className="space-y-6">
              <div className="p-4 bg-cyan-950/20 border border-cyan-500/30 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h3 className="text-cyan-300 font-mono text-sm font-semibold uppercase tracking-wider flex items-center gap-2">
                    <Terminal className="w-4 h-4 text-cyan-400" />
                    Zambian Programmer Code Review & System Feedback Hub
                  </h3>
                  <p className="text-zinc-300 text-xs leading-relaxed mt-1">
                    Direct review and collaboration channel for Zambian software engineers, system architects, and tech innovators to inspect system code, audit APIs, and contribute pull requests.
                  </p>
                </div>
                <div className="px-3 py-1.5 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 font-mono text-xs font-bold shrink-0">
                  Open Sovereign Code Base
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                {/* Form to submit review */}
                <div className="lg:col-span-5 p-5 bg-zinc-900/80 border border-zinc-800 rounded-2xl space-y-4">
                  <div className="flex items-center justify-between border-b border-zinc-800 pb-2.5">
                    <h4 className="text-xs font-mono uppercase font-bold text-zinc-200 flex items-center gap-1.5">
                      <MessageSquare className="w-4 h-4 text-cyan-400" />
                      Submit Zambian Developer Review
                    </h4>
                    <span className="text-[10px] font-mono text-emerald-400">Live Peer Review</span>
                  </div>

                  {reviewSubmitted && (
                    <div className="p-3 rounded-xl bg-emerald-950/60 border border-emerald-500/50 text-emerald-300 text-xs font-mono flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      <span>Review submitted successfully! Thank you for empowering the code base.</span>
                    </div>
                  )}

                  <form onSubmit={handleReviewSubmit} className="space-y-3 font-mono text-xs">
                    <div>
                      <label className="text-[10px] text-zinc-400 uppercase font-bold block mb-1">Developer Full Name / Handle</label>
                      <input
                        type="text"
                        required
                        value={newDevName}
                        onChange={(e) => setNewDevName(e.target.value)}
                        placeholder="e.g. Kabwe Lungu"
                        className="w-full px-3 py-2 bg-zinc-950 border border-zinc-800 focus:border-cyan-500 rounded-xl text-white outline-none"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <label className="text-[10px] text-zinc-400 uppercase font-bold block mb-1">Location / District</label>
                        <input
                          type="text"
                          value={newDevLocation}
                          onChange={(e) => setNewDevLocation(e.target.value)}
                          placeholder="e.g. Ndola / Itawa"
                          className="w-full px-3 py-2 bg-zinc-950 border border-zinc-800 focus:border-cyan-500 rounded-xl text-white outline-none"
                        />
                      </div>
                      <div>
                        <label className="text-[10px] text-zinc-400 uppercase font-bold block mb-1">Province</label>
                        <select
                          value={newDevProvince}
                          onChange={(e) => setNewDevProvince(e.target.value)}
                          className="w-full px-3 py-2 bg-zinc-950 border border-zinc-800 focus:border-cyan-500 rounded-xl text-white outline-none"
                        >
                          {provinces.filter(p => p !== 'All').map(p => (
                            <option key={p} value={p}>{p}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="text-[10px] text-zinc-400 uppercase font-bold block mb-1">Technical Role / Discipline</label>
                      <input
                        type="text"
                        value={newDevRole}
                        onChange={(e) => setNewDevRole(e.target.value)}
                        placeholder="e.g. Mobile Dev / AI Scientist"
                        className="w-full px-3 py-2 bg-zinc-950 border border-zinc-800 focus:border-cyan-500 rounded-xl text-white outline-none"
                      />
                    </div>

                    <div>
                      <label className="text-[10px] text-zinc-400 uppercase font-bold block mb-1">Review Topic Title</label>
                      <input
                        type="text"
                        value={newDevTitle}
                        onChange={(e) => setNewDevTitle(e.target.value)}
                        placeholder="e.g. Subnational data latency and cache audit"
                        className="w-full px-3 py-2 bg-zinc-950 border border-zinc-800 focus:border-cyan-500 rounded-xl text-white outline-none"
                      />
                    </div>

                    <div>
                      <label className="text-[10px] text-zinc-400 uppercase font-bold block mb-1">Star Rating</label>
                      <div className="flex items-center gap-2">
                        {[1, 2, 3, 4, 5].map((s) => (
                          <button
                            key={s}
                            type="button"
                            onClick={() => setNewDevRating(s)}
                            className="p-1 text-amber-400 hover:scale-110 transition-transform"
                          >
                            <Star className={`w-5 h-5 ${s <= newDevRating ? 'fill-amber-400 text-amber-400' : 'text-zinc-600'}`} />
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="text-[10px] text-zinc-400 uppercase font-bold block mb-1">Architectural Review & Comments</label>
                      <textarea
                        rows={3}
                        required
                        value={newDevComment}
                        onChange={(e) => setNewDevComment(e.target.value)}
                        placeholder="Share your code audit, suggestions for district APIs, or feature improvements..."
                        className="w-full px-3 py-2 bg-zinc-950 border border-zinc-800 focus:border-cyan-500 rounded-xl text-white outline-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-2.5 rounded-xl bg-gradient-to-r from-cyan-600 to-emerald-600 hover:from-cyan-500 hover:to-emerald-500 text-white font-bold uppercase tracking-wider transition-all cursor-pointer flex items-center justify-center gap-2 shadow-lg"
                    >
                      <Send className="w-4 h-4" />
                      <span>Post Review to Sovereign Registry</span>
                    </button>
                  </form>
                </div>

                {/* List of Verified Reviews */}
                <div className="lg:col-span-7 space-y-3.5">
                  <div className="flex items-center justify-between text-xs font-mono text-zinc-400 pb-1 border-b border-zinc-800">
                    <span>Verified Reviews from Zambian Engineers</span>
                    <span className="text-emerald-400 font-bold">{reviews.length} Submissions</span>
                  </div>

                  <div className="space-y-3 max-h-[60vh] overflow-y-auto pr-1 custom-scrollbar">
                    {reviews.map((rev) => (
                      <div key={rev.id} className="p-4 bg-zinc-900/60 border border-zinc-800 rounded-xl space-y-2">
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="font-bold text-white text-sm">{rev.name}</span>
                              <span className="px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[9px] font-mono font-bold">
                                🇿🇲 Verified Dev
                              </span>
                            </div>
                            <div className="text-[11px] font-mono text-zinc-400">
                              {rev.role} • {rev.location} ({rev.province} Province)
                            </div>
                          </div>
                          <div className="flex items-center gap-0.5">
                            {Array.from({ length: rev.rating }).map((_, rIdx) => (
                              <Star key={rIdx} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                            ))}
                          </div>
                        </div>

                        <div className="text-xs font-semibold text-cyan-300 font-mono">
                          "{rev.reviewTitle}"
                        </div>

                        <p className="text-xs text-zinc-300 leading-relaxed font-mono">
                          {rev.comment}
                        </p>

                        <div className="text-[10px] font-mono text-zinc-500 pt-1">
                          Audited: {new Date(rev.timestamp).toLocaleDateString()} at {new Date(rev.timestamp).toLocaleTimeString()}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: SOVEREIGN ANCHOR & ARCHITECTURAL LINEAGE */}
          {activeTab === 'sovereign-anchor' && (
            <div className="space-y-6">
              <div className="p-6 bg-gradient-to-br from-amber-950/30 via-zinc-950 to-zinc-950 border border-amber-500/40 rounded-3xl space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-400/60 flex items-center justify-center text-3xl shadow-[0_0_30px_rgba(245,158,11,0.4)]">
                    👑
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">
                      The Sovereign Origin & Anchor Node
                    </h3>
                    <div className="text-xs font-mono text-amber-300">
                      Conceived and Architected by <strong>Liswaniso Edgar Mulenga</strong>
                    </div>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  WARMABLON is founded on an unbroken line of cosmic precision: starting from beyond the cosmos, descending to Earth, anchored deeply in <strong>Zambia (Mongu and Lusaka)</strong> across all 10 provinces, 116 municipal districts, and all 73+ sovereign tribes. From this Zambian root, the architecture expands outwards across Africa (Alkebulan), the 7 planetary quadrants, and into the cosmic beyond.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                  <div className="p-3.5 bg-zinc-900/80 border border-zinc-800 rounded-xl space-y-1">
                    <span className="text-[10px] uppercase font-mono text-zinc-500 font-bold">Origin Coordinates</span>
                    <span className="text-emerald-300 font-mono font-bold text-sm block">
                      Mongu 15.276° S, 23.127° E
                    </span>
                    <span className="text-[11px] text-zinc-400">
                      Barotseland Floodplain & Lusaka Hub
                    </span>
                  </div>

                  <div className="p-3.5 bg-zinc-900/80 border border-zinc-800 rounded-xl space-y-1">
                    <span className="text-[10px] uppercase font-mono text-zinc-500 font-bold">Acoustic Tuning</span>
                    <span className="text-amber-300 font-mono font-bold text-sm block">
                      432 Hz Solfeggio Root
                    </span>
                    <span className="text-[11px] text-zinc-400">
                      Bank of Zambia Kwacha Dawn Lock
                    </span>
                  </div>

                  <div className="p-3.5 bg-zinc-900/80 border border-zinc-800 rounded-xl space-y-1">
                    <span className="text-[10px] uppercase font-mono text-zinc-500 font-bold">Sovereign Scope</span>
                    <span className="text-cyan-300 font-mono font-bold text-sm block">
                      Zambia ➔ Africa ➔ Earth ➔ Cosmos
                    </span>
                    <span className="text-[11px] text-zinc-400">
                      Zero-Trust Decentralized Atlas
                    </span>
                  </div>
                </div>

                <div className="p-4 bg-zinc-950 border border-zinc-800 rounded-2xl space-y-2">
                  <div className="text-xs font-mono uppercase text-zinc-300 font-bold flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    Principles of Universal Service & Economic Dignity
                  </div>
                  <ul className="text-xs text-zinc-400 space-y-1.5 font-mono list-disc pl-4 leading-relaxed">
                    <li><strong>Universal Civic Empowerment:</strong> Elevating every man, woman, child, youth artist, doctor, nurse, teacher, police officer, soldier, chief, king, and queen with digital sovereignty.</li>
                    <li><strong>Resource & Agricultural Sovereignty:</strong> Uniting mining royalties (copper, emeralds, cobalt, gold), commercial agriculture, and medicinal cannabis research into domestic value chains.</li>
                    <li><strong>Decentralized Telecommunications & Web3:</strong> High-throughput smart contracts on Monad EVM, Starlink downlinks, and zero-fee mobile money interoperability.</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* MODAL: SINGLE TRIBE DETAIL INSPECTOR */}
        {selectedTribe && (
          <div
            className="fixed inset-0 z-[9999999] flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md animate-in fade-in duration-150"
            onClick={() => setSelectedTribe(null)}
          >
            <div
              className="relative w-full max-w-2xl bg-zinc-950 border border-emerald-500/60 rounded-3xl p-5 sm:p-7 shadow-[0_0_80px_rgba(16,185,129,0.3)] space-y-4 max-h-[90vh] overflow-y-auto custom-scrollbar"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between border-b border-zinc-800 pb-3">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-2xl bg-emerald-500/20 border border-emerald-400/50 text-emerald-300 font-bold text-xl">
                    👑
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-xl font-bold text-white">{selectedTribe.name}</h3>
                      <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-xs font-mono font-bold">
                        {selectedTribe.province} Province
                      </span>
                    </div>
                    <div className="text-xs font-mono text-zinc-400 mt-0.5">
                      Language: <strong className="text-zinc-200">{selectedTribe.dialectOrLanguage}</strong> ({selectedTribe.languageGroup})
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedTribe(null)}
                  className="p-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
                <div className="p-3 bg-zinc-900/80 border border-zinc-800 rounded-xl space-y-1">
                  <span className="text-[10px] uppercase text-zinc-500 font-bold block">Traditional Leader</span>
                  <span className="text-emerald-300 font-bold text-sm block">{selectedTribe.traditionalLeader}</span>
                  <span className="text-zinc-400 text-[11px] block">{selectedTribe.royalSeatOrPalace}</span>
                </div>

                <div className="p-3 bg-zinc-900/80 border border-zinc-800 rounded-xl space-y-1">
                  <span className="text-[10px] uppercase text-zinc-500 font-bold block">Annual Ceremony</span>
                  <span className="text-amber-300 font-bold text-sm block">{selectedTribe.traditionalCeremony}</span>
                  <span className="text-zinc-400 text-[11px] block">Observed in: {selectedTribe.ceremonyMonth}</span>
                </div>
              </div>

              <div className="p-4 bg-zinc-900/60 border border-zinc-800 rounded-xl space-y-2">
                <span className="text-[10px] font-mono uppercase text-zinc-400 font-bold block">Historical Heritage & Lineage:</span>
                <p className="text-xs text-zinc-300 leading-relaxed font-mono">
                  {selectedTribe.historicalHeritage}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
                <div className="p-3 bg-zinc-900/80 border border-zinc-800 rounded-xl space-y-1">
                  <span className="text-[10px] uppercase text-zinc-500 font-bold block">Primary Municipal Districts</span>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {selectedTribe.primaryDistricts.map((d, dIdx) => (
                      <span key={dIdx} className="px-2 py-0.5 rounded bg-zinc-950 border border-zinc-800 text-[10px] text-zinc-300">
                        {d}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-3 bg-zinc-900/80 border border-zinc-800 rounded-xl space-y-1">
                  <span className="text-[10px] uppercase text-zinc-500 font-bold block">Economic Specialization</span>
                  <span className="text-zinc-200 text-xs block mt-1">{selectedTribe.economicSpecialization}</span>
                  <span className="text-zinc-500 text-[10px] block mt-1">Emblem: {selectedTribe.culturalEmblem}</span>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
