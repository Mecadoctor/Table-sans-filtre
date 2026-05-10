"use client";

import { useEffect, useMemo, useState } from "react";

type ApiResp = { ok: boolean; message?: string };

export default function InviteGate() {
  const [code, setCode] = useState("");
  const [unlocked, setUnlocked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  const calendlyUrl = useMemo(() => process.env.NEXT_PUBLIC_CALENDLY_URL, []);

  useEffect(() => {
    const saved = localStorage.getItem("tsf_access");
    if (saved === "true") setUnlocked(true);
  }, []);

  async function unlock() {
    setErr(null);
    setLoading(true);
    try {
      const res = await fetch("/api/validate-code", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code })
      });
      const data = (await res.json()) as ApiResp;
      if (!data.ok) {
        setErr(data.message || "Code invalide.");
        setUnlocked(false);
        return;
      }
      localStorage.setItem("tsf_access", "true");
      setUnlocked(true);
    } catch {
      setErr("Erreur réseau. Réessaie.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="card p-6">
      <div className="flex flex-col gap-3 md:flex-row md:items-end">
        <div className="flex-1">
          <label className="mb-2 block text-sm font-medium text-white">
            Code d'accès
          </label>
          <input
            className="input"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") unlock();
            }}
            placeholder="Entrez votre code…"
          />
          <p className="mt-2 text-xs text-muted/80">
            Réservation sur invitation uniquement.
          </p>
        </div>
        <button
          onClick={unlock}
          disabled={loading || !code.trim()}
          className="btn btn-primary h-12 md:w-40 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? "..." : "Déverrouiller"}
        </button>
      </div>
      {err ? (
        <div className="mt-4 rounded-xl border border-redp/30 bg-redp/10 px-4 py-3 text-sm text-white">
          {err}
        </div>
      ) : null}
      <div className="mt-6">
        {unlocked ? (
          calendlyUrl ? (
            <div className="overflow-hidden rounded-2xl border border-white/10">
              <iframe
                title="Calendly booking"
                src={calendlyUrl}
                className="h-[820px] w-full"
              />
            </div>
          ) : (
            <div className="text-sm text-muted">
              Calendly non configuré. Ajoute NEXT_PUBLIC_CALENDLY_URL dans .env.local.
            </div>
          )
        ) : (
          <div className="text-sm text-muted">
            Entrez un code valide pour afficher le calendrier.
          </div>
        )}
      </div>
    </div>
  );
}

