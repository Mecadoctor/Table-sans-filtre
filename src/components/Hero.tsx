import { useMemo, useState } from "react";
import { episodes } from "../data/tsf";
import { CONCEPT_BG_EXTENSIONS, CONCEPT_INTRO_BASE, conceptBackgroundUrl } from "../lib/conceptBg";

const fallbackThumb =
  episodes[0] != null
    ? `https://img.youtube.com/vi/${episodes[0].youtubeId}/hqdefault.jpg`
    : "";

/**
 * Même principe que stevenbartlett.com/doac/ :
 * — calque image + voile en position fixed (reste « collé » au viewport)
 * — titre + lien Scroll dans le flux : ils montent avec le scroll
 * Fond : même visuel que le panneau intro de la section Concept (`images/concept/intro.*`).
 */
export function Hero() {
  const base = import.meta.env.BASE_URL;
  const urls = useMemo(() => {
    const intro = CONCEPT_BG_EXTENSIONS.map((_, i) => conceptBackgroundUrl(CONCEPT_INTRO_BASE, i));
    if (fallbackThumb) intro.push(fallbackThumb);
    return intro;
  }, [base, fallbackThumb]);
  const [idx, setIdx] = useState(0);
  const safeIdx = Math.min(idx, Math.max(0, urls.length - 1));
  const src = urls[safeIdx] ?? urls[urls.length - 1] ?? "";

  return (
    <section className="doac-hero-shell" id="top" aria-labelledby="hero-title">
      <div className="doac-hero__fixed-bg">
        <img
          className="doac-hero__bg-img"
          src={src}
          alt=""
          onError={() =>
            setIdx((i) => {
              const max = urls.length - 1;
              return i < max ? i + 1 : i;
            })
          }
        />
        <div className="doac-hero__gradient" aria-hidden />
      </div>

      <div className="doac-hero__foreground">
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
    </section>
  );
}
