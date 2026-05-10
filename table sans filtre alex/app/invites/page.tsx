"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { BrandLockup } from "@/components/Logo";
import { GuestCard } from "@/components/GuestCard";
import { guests, type Guest } from "@/components/data";

const categories: Array<Guest["category"] | "Tous"> = ["Tous", "Entrepreneuriat", "Politique", "Sport", "Arts"];

export default function InvitesPage() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState<(typeof categories)[number]>("Tous");

  const filtered = useMemo(() => {
    return guests.filter((g) => {
      const matchesQ = (g.name + " " + g.role).toLowerCase().includes(q.toLowerCase());
      const matchesCat = cat === "Tous" ? true : g.category === cat;
      return matchesQ && matchesCat;
    });
  }, [q, cat]);

  return (
    <main>
      <div className="border-b border-white/10">
        <div className="container-page flex items-center justify-between py-8">
          <BrandLockup />
          <div className="flex items-center gap-4">
            <Link className="btn btn-ghost" href="/">Retour</Link>
            <Link className="btn btn-primary" href="/proposer">Proposer</Link>
          </div>
        </div>
      </div>
      <div className="container-page py-12">
        <h1 className="text-3xl font-semibold text-white">Invités</h1>
        <p className="mt-2 text-muted">Recherche et filtre par catégorie.</p>
        <div className="mt-6 grid gap-4 md:grid-cols-[2fr_1fr]">
          <input 
            className="input" 
            placeholder="Rechercher un invité…" 
            value={q} 
            onChange={(e) => setQ(e.target.value)} 
          />
          <div className="card flex flex-wrap gap-2 p-3">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`btn ${cat === c ? "btn-primary" : "btn-ghost"}`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {filtered.length > 0 ? (
            filtered.map((g) => (
              <GuestCard key={g.name} guest={g} />
            ))
          ) : (
            <div className="col-span-full text-center text-muted py-8">
              Aucun invité trouvé.
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

