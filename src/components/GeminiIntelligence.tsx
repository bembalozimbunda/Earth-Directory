import React, { useEffect, useState } from "react";

type GeminiReply = { provider: string; model: string; text: string };

export function GeminiIntelligence() {
  const [open, setOpen] = useState(false);
  const [prompt, setPrompt] = useState("");
  const [reply, setReply] = useState<GeminiReply | null>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [configured, setConfigured] = useState<boolean | null>(null);

  useEffect(() => {
    fetch("/api/ai/gemini-status")
      .then(r => r.json())
      .then(data => setConfigured(Boolean(data.configured)))
      .catch(() => setConfigured(false));
  }, []);

  async function submit(event: React.FormEvent) {
    event.preventDefault();
    if (!prompt.trim() || loading) return;
    setLoading(true);
    setError("");
    setReply(null);
    try {
      const response = await fetch("/api/ai/gemini", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: prompt.trim() })
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Gemini request failed.");
      setReply(data);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Unable to reach Gemini.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="fixed bottom-5 right-5 z-40 rounded-full border border-amber-300/40 bg-zinc-900 px-5 py-3 text-sm font-semibold text-amber-200 shadow-xl hover:bg-zinc-800"
      >
        Gemini Intelligence
      </button>
      {open && (
        <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/75 p-3 sm:items-center">
          <section className="flex max-h-[88vh] w-full max-w-2xl flex-col overflow-hidden rounded-2xl border border-amber-300/30 bg-zinc-950 text-zinc-100 shadow-2xl">
            <header className="flex items-center justify-between border-b border-white/10 p-4">
              <div>
                <h2 className="text-lg font-semibold text-amber-200">Warmablon · Gemini Intelligence</h2>
                <p className="text-xs text-zinc-400">Research, reasoning and creation support</p>
              </div>
              <button type="button" onClick={() => setOpen(false)} className="rounded-lg px-3 py-2 text-zinc-300 hover:bg-white/10">Close</button>
            </header>
            <div className="overflow-y-auto p-4">
              <p className="mb-3 text-sm text-zinc-400">
                {configured === null ? "Checking Gemini connection…" : configured ? "Gemini API key detected on the server." : "Gemini key is not configured on the server yet."}
              </p>
              {reply && (
                <div className="mb-4 whitespace-pre-wrap rounded-xl border border-emerald-400/20 bg-emerald-950/20 p-4 text-sm leading-6">
                  <div className="mb-2 text-xs text-emerald-300">{reply.provider} · {reply.model}</div>
                  {reply.text}
                </div>
              )}
              {error && <p role="alert" className="mb-4 rounded-lg bg-red-950/40 p-3 text-sm text-red-200">{error}</p>}
            </div>
            <form onSubmit={submit} className="border-t border-white/10 p-4">
              <label htmlFor="gemini-prompt" className="mb-2 block text-sm text-zinc-300">What should Gemini work on?</label>
              <textarea
                id="gemini-prompt"
                value={prompt}
                onChange={e => setPrompt(e.target.value)}
                rows={4}
                maxLength={10000}
                placeholder="Ask Gemini to research, reason, explain or help build…"
                className="w-full resize-y rounded-xl border border-white/15 bg-zinc-900 p-3 text-sm outline-none focus:border-amber-300/60"
              />
              <div className="mt-3 flex justify-end">
                <button disabled={loading || !prompt.trim()} className="rounded-xl bg-amber-300 px-5 py-2.5 text-sm font-semibold text-zinc-950 disabled:opacity-50">
                  {loading ? "Thinking…" : "Send to Gemini"}
                </button>
              </div>
            </form>
          </section>
        </div>
      )}
    </>
  );
}
