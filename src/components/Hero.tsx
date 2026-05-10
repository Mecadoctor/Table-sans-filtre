import { useEffect, useMemo, useState } from "react";
import { episodes } from "../data/tsf";
import {
  CONCEPT_BG_EXTENSIONS,
  CONCEPT_INTRO_BASE,
  CONCEPT_INTRO_MOBILE_BASE,
  conceptBackgroundUrl,
} from "../lib/conceptBg";

const fallbackThumb =
  episodes[0] != null
    ? `https://img.youtube.com/vi/${episodes[0].youtubeId}/hqdefault.jpg`
    : "";

/** Largeur typique téléphone — au‑dessus on utilise surtout `intro.*`. */
function useHeroNarrow() {
  const [narrow, setNarrow] = useState(
    () => typeof window !== "undefined" && window.matchMedia("(max-width: 767px)").matches,
  );
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const fn = () => setNarrow(mq.matches);
    mq.addEventListener("change", fn);
    return () => mq.removeEventListener("change", fn);
  }, []);
  return narrow;
}

/**
 * Même principe que stevenbartlett.com/doac/ :
 * — calque image + voile en position fixed (reste « collé » au viewport)
 * — titre + lien Scroll dans le flux : ils montent avec le scroll
 * Fond : `images/concept/intro.*` ; sur mobile, essaie d’abord `intro-mobile.*` (portrait optionnel), puis `intro.*`.
 */
export function Hero() {
  const narrow = useHeroNarrow();
  const urls = useMemo(() => {
    const list: string[] = [];
    if (narrow) {
      list.push(
        ...CONCEPT_BG_EXTENSIONS.map((_, i) =>
          conceptBackgroundUrl(CONCEPT_INTRO_MOBILE_BASE, i),
        ),
      );
    }
    list.push(...CONCEPT_BG_EXTENSIONS.map((_, i) => conceptBackgroundUrl(CONCEPT_INTRO_BASE, i)));
    if (fallbackThumb) list.push(fallbackThumb);
    return list;
  }, [narrow]);

  const [idx, setIdx] = useState(0);
  useEffect(() => {
    setIdx(0);
  }, [narrow]);

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
        <div className="doac-hero__main">
          <div className="doac-hero__copy">
            <h1 id="hero-title" className="doac-hero__title">
              <span className="doac-hero__title-line doac-hero__title-line--accent">LA TABLE</span>
              <span className="doac-hero__title-line">SANS FILTRE</span>
            </h1>
          </div>
        </div>
        <a className="doac-hero__scroll" href="#intro">
          Scroll
        </a>
      </div>
    </section>
  );
}
