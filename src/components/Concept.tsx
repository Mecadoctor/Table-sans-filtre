/** Layout type MadeByCat « Technology solutions » — sans Framer sur les cartes (évite écran blanc / IO viewport agressif). */

const ITEMS = [
  { t: "Sans filtre", d: "Du vrai. Des décisions. Des erreurs. Des leçons." },
  { t: "Humain derrière le titre", d: "Ce qui a construit le parcours — pas seulement le résultat." },
  { t: "Région & impact", d: "Entrepreneuriat, politique, sport, arts — des leaders qui comptent." },
];

export function Concept() {
  return (
    <section className="section section--tsf concept-mbc" id="concept" aria-labelledby="concept-title">
      <div className="concept-mbc__wrap">
        <div className="concept-mbc__head concept-mbc__head--sticky">
          <div className="concept-mbc__head-inner">
            <p className="section__eyebrow section__eyebrow--tsf concept-mbc__eyebrow">Le concept</p>
            <h2 id="concept-title" className="concept-mbc__title">
              <span className="concept-mbc__title-line">Une conversation vraie,</span>
              <span className="concept-mbc__title-line concept-mbc__title-line--accent">sans PR-talk</span>
            </h2>
            <p className="concept-mbc__lead">
              Trois axes qui définissent chaque épisode — comme une ligne directrice, sans posture de façade.
            </p>
          </div>
        </div>

        <div className="concept-mbc__chapters" role="list">
          {ITEMS.map((x, i) => (
            <article key={x.t} className="concept-mbc__chapter" role="listitem">
              <div className="concept-mbc__chapter-meta">
                <span className="concept-mbc__num">{String(i + 1).padStart(2, "0")}</span>
                <span className="concept-mbc__chapter-label">Chapitre · {x.t}</span>
              </div>
              <h3 className="concept-mbc__chapter-title">{x.t}</h3>
              <p className="concept-mbc__chapter-desc">{x.d}</p>
              <div className="concept-mbc__tags" aria-hidden>
                <span>· Podcast</span>
                <span>· Vidéo</span>
                <span>· Région</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
