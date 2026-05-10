import { useState } from "react";
import { episodes } from "../data/tsf";

const fallbackThumb = `https://img.youtube.com/vi/${episodes[0].youtubeId}/hqdefault.jpg`;

export function Hero() {
  const heroUrl = `${import.meta.env.BASE_URL}images/hero.jpg`;
  const [src, setSrc] = useState(heroUrl);

  return (
    <section className="doac-hero-shell" aria-labelledby="hero-title">
      <div className="doac-hero-fixed">
        <img
          className="doac-hero__bg-img"
          src={src}
          alt=""
          onError={() => setSrc((prev) => (prev === fallbackThumb ? prev : fallbackThumb))}
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
