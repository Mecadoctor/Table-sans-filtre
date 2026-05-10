import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { episodes } from "../data/tsf";

gsap.registerPlugin(ScrollTrigger);

const thumbs = episodes.map((e) => ({
  id: e.youtubeId,
  src: `https://img.youtube.com/vi/${e.youtubeId}/hqdefault.jpg`,
}));

/** Grille dense type DOAC — on répète les vignettes si besoin */
const GRID_COUNT = 32;

function gridItems() {
  const out: typeof thumbs = [];
  if (thumbs.length === 0) return out;
  for (let i = 0; i < GRID_COUNT; i++) {
    out.push(thumbs[i % thumbs.length]);
  }
  return out;
}

export function DoacIntro() {
  const rootRef = useRef<HTMLElement>(null);
  const gridWrapRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!rootRef.current || !gridWrapRef.current) return;
      if (thumbs.length === 0) return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      try {
        const trigger = rootRef.current;
        gsap.fromTo(
          gridWrapRef.current,
          { x: "0%" },
          {
            x: "-4%",
            ease: "none",
            scrollTrigger: {
              trigger,
              start: "top bottom",
              end: "bottom top",
              scrub: 8,
            },
          },
        );
      } catch {
        /* optional */
      }
    },
    { scope: rootRef },
  );

  const cells = gridItems();

  return (
    <section ref={rootRef} className="doac-intro-split" id="intro" aria-labelledby="doac-intro-title">
      <div className="doac-intro-split__inner">
        <div className="doac-intro-split__copy">
          <h2 id="doac-intro-title" className="doac-intro-split__title">
            <span className="doac-intro-split__brand">La Table Sans Filtre</span>
            <span className="doac-intro-split__title-line">
              est une conversation sans langue de bois avec des leaders qui façonnent la région
            </span>
          </h2>
          <p className="doac-intro-split__lead">
            Alex Rizk installe un cadre confiant : pas de posture de façade, du temps pour les idées qui comptent, et des
            échanges pensés pour nourrir celles et ceux qui construisent au quotidien.
          </p>
        </div>

        <div className="doac-intro-split__media" aria-hidden>
          <div className="doac-intro-split__media-inner">
            <div ref={gridWrapRef} className="doac-intro-split__grid">
              {cells.map((t, i) => (
                <div key={`g-${t.id}-${i}`} className="doac-intro-split__cell">
                  <img src={t.src} alt="" loading="lazy" decoding="async" />
                </div>
              ))}
            </div>
          </div>
          <div className="doac-intro-split__media-fade doac-intro-split__media-fade--top" />
          <div className="doac-intro-split__media-fade doac-intro-split__media-fade--bottom" />
          <div className="doac-intro-split__media-fade doac-intro-split__media-fade--left" />
          <div className="doac-intro-split__media-fade doac-intro-split__media-fade--right" />
        </div>
      </div>
    </section>
  );
}
