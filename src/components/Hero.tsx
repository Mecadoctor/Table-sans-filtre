import { useMemo, useState } from "react";
import { episodes } from "../data/tsf";

const fallbackThumb = `https://img.youtube.com/vi/${episodes[0].youtubeId}/hqdefault.jpg`;

export function Hero() {
  const base = import.meta.env.BASE_URL;
  /** GitHub Pages (Linux) est sensible à la casse : essai hero.jpg puis Hero.jpg puis vignette. */
  const urls = useMemo(
    () => [`${base}images/hero.jpg`, `${base}images/Hero.jpg`, fallbackThumb],
    [base],
  );
  const [idx, setIdx] = useState(0);
  const src = urls[idx];

  return (
    <section className="doac-hero-shell" aria-labelledby="hero-title">
      <div className="doac-hero-fixed">
        <img
          className="doac-hero__bg-img"
          src={src}
          alt=""
          onError={() => setIdx((i) => (i < urls.length - 1 ? i + 1 : i))}
        />
        <div className="doac-hero__gradient" aria-hidden />
        <div className="doac-hero__inner">
          <h1 id="hero-title" className="doac-hero__title">
            LA TABLE
            <br />
            SANS FILTRE
          </h1>
        </div>
        <a className="doac-hero__scroll" href="#intro">
          Scroll
        </a>
      </div>
      <div className="doac-hero-spacer" aria-hidden />
    </section>
  );
}
