import React, { useState } from 'react';
import { 
  HeartHandshake, PhoneCall, Building2, ShieldAlert, 
  MapPin, Check, Copy, X, Folder, FileText, ChevronRight,
  Moon, Droplets, Users, ArrowRight, ExternalLink, Sparkles,
  PhoneForwarded, Clock, Heart, LifeBuoy
} from 'lucide-react';
import { cn } from '../utils';
import { ZAMBIA_HEALTH_SUPPORT_DATA, SupportResource, GroundingStep } from '../data/zambiaHealthSupport';

interface ZambiaHealthSupportPortalProps {
  onClose: () => void;
}

export function ZambiaHealthSupportPortal({ onClose }: ZambiaHealthSupportPortalProps) {
  const [activeTab, setActiveTab] = useState<'cards' | 'folder'>('cards');
  const [selectedFileId, setSelectedFileId] = useState<string>('lifeline-childline-zambia');
  const [copiedNumber, setCopiedNumber] = useState<string | null>(null);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedNumber(text);
    setTimeout(() => {
      setCopiedNumber(null);
    }, 2000);
  };

  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case 'moon':
        return <Moon className="w-5 h-5 text-indigo-400" />;
      case 'droplet':
        return <Droplets className="w-5 h-5 text-cyan-400" />;
      case 'users':
        return <Users className="w-5 h-5 text-emerald-400" />;
      default:
        return <Heart className="w-5 h-5 text-rose-400" />;
    }
  };

  const getResourceIcon = (category: string) => {
    switch (category) {
      case 'crisis_hotline':
        return <PhoneCall className="w-5 h-5 text-emerald-400" />;
      case 'hospital_psychiatry':
        return <Building2 className="w-5 h-5 text-amber-400" />;
      case 'emergency_services':
        return <ShieldAlert className="w-5 h-5 text-rose-400" />;
      default:
        return <HeartHandshake className="w-5 h-5 text-cyan-400" />;
    }
  };

  const selectedFileContent = ZAMBIA_HEALTH_SUPPORT_DATA.resources.find(r => r.id === selectedFileId);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-xl overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[92vh] bg-zinc-950 border border-zinc-800/90 rounded-2xl shadow-[0_0_60px_rgba(0,0,0,0.9)] flex flex-col overflow-hidden text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="p-5 sm:p-6 border-b border-zinc-800 bg-gradient-to-r from-emerald-950/40 via-zinc-900/60 to-zinc-950 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-start sm:items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shrink-0 shadow-[0_0_15px_rgba(16,185,129,0.2)]">
              <LifeBuoy className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400 font-semibold bg-emerald-950/60 border border-emerald-800/60 px-2 py-0.5 rounded">
                  Zambia Support Portal
                </span>
                <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest hidden md:inline">
                  • Confidential & Toll-Free
                </span>
              </div>
              <h2 className="text-base sm:text-lg font-medium text-white tracking-wide mt-1">
                {ZAMBIA_HEALTH_SUPPORT_DATA.title}
              </h2>
            </div>
          </div>

          {/* Navigation Mode Buttons & Close */}
          <div className="flex items-center gap-2 self-end sm:self-auto">
            <div className="flex items-center bg-zinc-900 border border-zinc-800 p-0.5 rounded-lg text-xs font-mono">
              <button
                onClick={() => setActiveTab('cards')}
                className={cn(
                  "px-3 py-1.5 rounded-md transition-all uppercase tracking-wider text-[11px]",
                  activeTab === 'cards' 
                    ? "bg-emerald-600 text-white font-medium shadow" 
                    : "text-zinc-400 hover:text-white"
                )}
              >
                Overview
              </button>
              <button
                onClick={() => setActiveTab('folder')}
                className={cn(
                  "px-3 py-1.5 rounded-md transition-all uppercase tracking-wider text-[11px] flex items-center gap-1.5",
                  activeTab === 'folder' 
                    ? "bg-emerald-600 text-white font-medium shadow" 
                    : "text-zinc-400 hover:text-white"
                )}
              >
                <Folder className="w-3.5 h-3.5" />
                <span>Folder View</span>
              </button>
            </div>

            <button
              onClick={onClose}
              className="p-2 text-zinc-400 hover:text-white bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 rounded-lg transition-colors"
              title="Close Portal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Introduction Banner */}
        <div className="px-5 sm:px-6 py-3 bg-zinc-900/50 border-b border-zinc-800/80 flex items-center gap-3">
          <HeartHandshake className="w-4 h-4 text-emerald-400 shrink-0" />
          <p className="text-xs font-mono text-zinc-300 tracking-wide leading-relaxed">
            {ZAMBIA_HEALTH_SUPPORT_DATA.subtext}
          </p>
        </div>

        {/* Scrollable Content Body */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-6">
          {activeTab === 'cards' ? (
            <>
              {/* Primary Services Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {ZAMBIA_HEALTH_SUPPORT_DATA.resources.map((res) => (
                  <div
                    key={res.id}
                    className="bg-zinc-900/60 border border-zinc-800/80 hover:border-zinc-700 rounded-xl p-4.5 flex flex-col justify-between transition-all group"
                  >
                    <div>
                      <div className="flex items-start justify-between gap-3 mb-3">
                        <div className="flex items-center gap-2.5">
                          <div className="p-2 rounded-lg bg-zinc-950 border border-zinc-800 group-hover:border-zinc-700">
                            {getResourceIcon(res.category)}
                          </div>
                          <div>
                            <h3 className="text-sm font-semibold text-white tracking-wide">
                              {res.name}
                            </h3>
                            <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider">
                              {res.availability}
                            </span>
                          </div>
                        </div>
                      </div>

                      <p className="text-xs text-zinc-300 leading-relaxed font-sans mb-4">
                        {res.description}
                      </p>

                      {res.location && (
                        <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 mb-3 bg-zinc-950/60 p-2 rounded-lg border border-zinc-800/50">
                          <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                          <span className="truncate">{res.location}</span>
                        </div>
                      )}

                      {res.networksSupported && (
                        <div className="text-[11px] font-mono text-emerald-400/90 mb-3 bg-emerald-950/30 px-2.5 py-1 rounded border border-emerald-900/40">
                          Supported: {res.networksSupported}
                        </div>
                      )}
                    </div>

                    {/* Action Row */}
                    <div className="pt-3 border-t border-zinc-800/70 flex flex-wrap items-center gap-2">
                      {res.tollFreeNumbers && res.tollFreeNumbers.map((num) => (
                        <div key={num} className="flex items-center gap-1.5">
                          <a
                            href={`tel:${num}`}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-mono font-medium transition-all shadow active:scale-95"
                          >
                            <PhoneCall className="w-3.5 h-3.5" />
                            <span>Call {num} (Toll-Free)</span>
                          </a>
                          <button
                            onClick={() => handleCopy(num)}
                            className="p-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white transition-colors"
                            title={`Copy ${num}`}
                          >
                            {copiedNumber === num ? (
                              <Check className="w-3.5 h-3.5 text-emerald-400" />
                            ) : (
                              <Copy className="w-3.5 h-3.5" />
                            )}
                          </button>
                        </div>
                      ))}

                      {res.directLines && res.directLines.map((num) => (
                        <div key={num} className="flex items-center gap-1.5">
                          <a
                            href={`tel:${num.replace(/\s+/g, '')}`}
                            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-mono transition-all"
                          >
                            <PhoneForwarded className="w-3 h-3 text-amber-400" />
                            <span>{num}</span>
                          </a>
                          <button
                            onClick={() => handleCopy(num)}
                            className="p-1 rounded-md bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-white"
                            title={`Copy ${num}`}
                          >
                            {copiedNumber === num ? (
                              <Check className="w-3 h-3 text-emerald-400" />
                            ) : (
                              <Copy className="w-3 h-3" />
                            )}
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Simple Steps for Right Now Section */}
              <div className="bg-gradient-to-b from-zinc-900/80 to-zinc-950 border border-zinc-800 rounded-xl p-5 mt-6">
                <div className="flex items-center gap-2.5 mb-4">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  <h3 className="text-sm font-semibold text-white uppercase tracking-wider font-mono">
                    Simple Steps for Right Now
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {ZAMBIA_HEALTH_SUPPORT_DATA.groundingSteps.map((step, idx) => (
                    <div
                      key={step.id}
                      className="bg-zinc-950/70 border border-zinc-800/80 rounded-xl p-4 flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <div className="p-2 rounded-lg bg-zinc-900 border border-zinc-800">
                            {getStepIcon(step.iconName)}
                          </div>
                          <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-bold">
                            Step 0{idx + 1}
                          </span>
                        </div>
                        <h4 className="text-sm font-semibold text-white mb-1.5">
                          {step.title}
                        </h4>
                        <p className="text-xs font-mono text-zinc-300 leading-relaxed mb-2">
                          {step.action}
                        </p>
                      </div>
                      <p className="text-[11px] text-zinc-500 italic mt-2 border-t border-zinc-900 pt-2">
                        {step.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </>
          ) : (
            /* Folder Tree Explorer View */
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-[380px] bg-zinc-950 border border-zinc-800 rounded-xl overflow-hidden">
              {/* Directory Sidebar */}
              <div className="border-b md:border-b-0 md:border-r border-zinc-800 p-3 bg-zinc-900/40 overflow-y-auto">
                <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 uppercase tracking-wider px-2 py-1 mb-2">
                  <Folder className="w-4 h-4 text-amber-400" />
                  <span>zambia_health_support/</span>
                </div>

                <div className="space-y-1">
                  {ZAMBIA_HEALTH_SUPPORT_DATA.resources.map((res) => (
                    <button
                      key={res.id}
                      onClick={() => setSelectedFileId(res.id)}
                      className={cn(
                        "w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-mono transition-colors text-left",
                        selectedFileId === res.id
                          ? "bg-emerald-950/70 border border-emerald-800/80 text-emerald-300 font-medium"
                          : "text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900"
                      )}
                    >
                      <FileText className="w-3.5 h-3.5 shrink-0" />
                      <span className="truncate">{res.id}.md</span>
                    </button>
                  ))}
                  <button
                    onClick={() => setSelectedFileId('grounding-steps')}
                    className={cn(
                      "w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-mono transition-colors text-left",
                      selectedFileId === 'grounding-steps'
                        ? "bg-emerald-950/70 border border-emerald-800/80 text-emerald-300 font-medium"
                        : "text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900"
                    )}
                  >
                    <FileText className="w-3.5 h-3.5 shrink-0 text-amber-400" />
                    <span className="truncate">grounding_steps_for_now.md</span>
                  </button>
                </div>
              </div>

              {/* File Content Preview */}
              <div className="md:col-span-2 p-5 bg-zinc-950 overflow-y-auto font-mono text-xs text-zinc-300">
                {selectedFileId === 'grounding-steps' ? (
                  <div className="space-y-4">
                    <div className="border-b border-zinc-800 pb-2">
                      <span className="text-zinc-500 uppercase text-[10px]">DOCUMENT:</span>
                      <h4 className="text-sm font-semibold text-white mt-0.5">Simple Steps for Right Now</h4>
                    </div>
                    {ZAMBIA_HEALTH_SUPPORT_DATA.groundingSteps.map((step, i) => (
                      <div key={step.id} className="p-3 bg-zinc-900/60 rounded-lg border border-zinc-800/70">
                        <div className="text-amber-400 font-bold uppercase text-[11px] mb-1">
                          0{i + 1}. {step.title}
                        </div>
                        <div className="text-zinc-200 text-xs mb-1.5 leading-relaxed">
                          {step.action}
                        </div>
                        <div className="text-zinc-400 text-[11px] italic">
                          {step.detail}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : selectedFileContent ? (
                  <div className="space-y-4">
                    <div className="border-b border-zinc-800 pb-2">
                      <span className="text-zinc-500 uppercase text-[10px]">FACILITY / SERVICE:</span>
                      <h4 className="text-sm font-semibold text-white mt-0.5">{selectedFileContent.name}</h4>
                    </div>

                    <div className="space-y-2">
                      <div>
                        <span className="text-zinc-500 text-[10px] uppercase">STATUS & AVAILABILITY:</span>
                        <p className="text-emerald-400 font-medium">{selectedFileContent.availability}</p>
                      </div>

                      {selectedFileContent.location && (
                        <div>
                          <span className="text-zinc-500 text-[10px] uppercase">PHYSICAL LOCATION:</span>
                          <p className="text-zinc-200">{selectedFileContent.location}</p>
                        </div>
                      )}

                      {selectedFileContent.tollFreeNumbers && (
                        <div>
                          <span className="text-zinc-500 text-[10px] uppercase">TOLL-FREE CONTACT NUMBERS:</span>
                          <div className="flex gap-2 mt-1">
                            {selectedFileContent.tollFreeNumbers.map(n => (
                              <a
                                key={n}
                                href={`tel:${n}`}
                                className="px-2.5 py-1 rounded bg-emerald-900/50 border border-emerald-700 text-emerald-200 hover:bg-emerald-800 text-xs inline-flex items-center gap-1"
                              >
                                <PhoneCall className="w-3 h-3" />
                                <span>{n}</span>
                              </a>
                            ))}
                          </div>
                        </div>
                      )}

                      {selectedFileContent.networksSupported && (
                        <div>
                          <span className="text-zinc-500 text-[10px] uppercase">NETWORK COVERAGE:</span>
                          <p className="text-zinc-400">{selectedFileContent.networksSupported}</p>
                        </div>
                      )}

                      <div className="pt-2">
                        <span className="text-zinc-500 text-[10px] uppercase">OVERVIEW & CARE PROVIDED:</span>
                        <p className="text-zinc-300 leading-relaxed mt-1">{selectedFileContent.description}</p>
                      </div>
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
          )}
        </div>

        {/* Footer Comfort & Affirmation Bar */}
        <div className="p-4 bg-zinc-900 border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <p className="text-xs font-mono text-zinc-400 max-w-2xl leading-relaxed">
            {ZAMBIA_HEALTH_SUPPORT_DATA.footerMessage}
          </p>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-zinc-800 hover:bg-zinc-700 text-white rounded-lg text-xs font-mono uppercase tracking-wider transition-colors shrink-0 shadow"
          >
            Close Portal
          </button>
        </div>
      </div>
    </div>
  );
}
