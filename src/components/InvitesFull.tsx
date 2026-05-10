import { useMemo, useState } from "react";
import { guests, type Guest } from "../data/tsf";
import { GuestCard } from "./GuestCard";

const CATEGORIES: Array<Guest["category"] | "Tous"> = [
  "Tous",
  "Entrepreneuriat",
  "Politique",
  "Sport",
  "Arts",
];

export function InvitesFull() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState<(typeof CATEGORIES)[number]>("Tous");

  const filtered = useMemo(() => {
    return guests.filter((g) => {
      const mq = (g.name + " " + g.role).toLowerCase().includes(q.toLowerCase());
      const mc = cat === "Tous" ? true : g.category === cat;
      return mq && mc;
    });
  }, [q, cat]);

  return (
    <section className="section section--tsf section--invites-full" id="invites" aria-labelledby="invites-title">
      <div className="section__inner">
        <h2 id="invites-title" className="section__title section__title--tsf">
          Invités
        </h2>
        <p className="section__subtitle invites-intro">Recherche et filtre par catégorie.</p>

        <div className="invites-toolbar">
          <input
            className="input-tsf"
            placeholder="Rechercher un invité…"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            aria-label="Rechercher un invité"
          />
          <div className="invites-filters card-tsf">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                type="button"
                className={`filter-chip ${cat === c ? "filter-chip--on" : ""}`}
                onClick={() => setCat(c)}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="guest-grid guest-grid--full">
          {filtered.length > 0 ? (
            filtered.map((g) => <GuestCard key={g.name} guest={g} />)
          ) : (
            <p className="invites-empty">Aucun invité trouvé.</p>
          )}
        </div>
      </div>
    </section>
  );
}
