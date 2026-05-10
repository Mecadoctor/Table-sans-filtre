import { episodes } from "../data/tsf";

export function DoacIntro() {
  const thumbs = episodes.map((e) => ({
    id: e.youtubeId,
    src: `https://img.youtube.com/vi/${e.youtubeId}/hqdefault.jpg`,
    alt: e.title,
  }));
  const loop = [...thumbs, ...thumbs];

  return (
    <section className="doac-intro" id="intro" aria-labelledby="doac-intro-title">
      <div className="doac-intro__shell">
        <div className="doac-intro__copy">
          <h2 id="doac-intro-title" className="doac-intro__title">
            <span className="doac-intro__brand">La Table Sans Filtre</span> est une conversation sans langue de bois avec des leaders qui façonnent la région — des récits où l’on démonte les angles morts du succès.
          </h2>
          <p className="doac-intro__lead">
            Alex Rizk installe un cadre confiant : pas de posture de façade, du temps pour les idées qui comptent, et des échanges pensés pour nourrir celles et ceux qui construisent au quotidien.
          </p>
        </div>
      </div>

      <div className="doac-tiles" aria-hidden>
        <div className="doac-tiles__track">
          {loop.map((t, i) => (
            <div key={`${t.id}-${i}`} className="doac-tiles__cell">
              <img src={t.src} alt="" loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
