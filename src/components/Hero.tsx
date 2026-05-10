import { useState } from "react";
import { episodes } from "../data/tsf";

const first = episodes[0];

export function Hero() {
  const max = `https://img.youtube.com/vi/${first.youtubeId}/maxresdefault.jpg`;
  const hq = `https://img.youtube.com/vi/${first.youtubeId}/hqdefault.jpg`;
  const [src, setSrc] = useState(max);

  return (
    <section className="doac-hero" id="top" aria-labelledby="hero-title">
      <img
        className="doac-hero__bg-img"
        src={src}
        alt=""
        onError={() => setSrc(hq)}
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
    </section>
  );
}
