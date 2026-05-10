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

function rowCells(start: number, repeat: number) {
  const out: typeof thumbs = [];
  if (thumbs.length === 0) return out;
  for (let i = 0; i < repeat; i++) {
    const t = thumbs[(start + i) % thumbs.length];
    out.push(t);
  }
  return out;
}

export function DoacIntro() {
  const rootRef = useRef<HTMLElement>(null);
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);
  const row3Ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!rootRef.current || !row1Ref.current || !row2Ref.current || !row3Ref.current) return;
      if (thumbs.length === 0) return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      try {
        const trigger = rootRef.current;
        /* scrub élevé = suivi du scroll plus lent et plus fluide ; petites amplitudes = déplacement doux */
        const st = () => ({
          trigger,
          start: "top bottom",
          end: "bottom top",
          scrub: 9,
        });

        gsap.fromTo(row1Ref.current, { x: "-5%" }, { x: "6%", scrollTrigger: st() });
        gsap.fromTo(row2Ref.current, { x: "5%" }, { x: "-7%", scrollTrigger: st() });
        gsap.fromTo(row3Ref.current, { x: "-4.5%" }, { x: "5.5%", scrollTrigger: st() });
      } catch {
        /* ScrollTrigger optionnel */
      }
    },
    { scope: rootRef },
  );

  const seg = 12;
  const r1 = [...rowCells(0, seg), ...rowCells(0, seg)];
  const r2 = [...rowCells(2, seg), ...rowCells(2, seg)];
  const r3 = [...rowCells(4, seg), ...rowCells(4, seg)];

  return (
    <section
      ref={rootRef}
      className="doac-intro-parallax"
      id="intro"
      aria-labelledby="doac-intro-title"
    >
      {/* Comme .doac-img-wrap sur stevenbartlett.com : tout le fond = rangées d’images */}
      <div className="doac-intro-parallax__bg" aria-hidden>
        <div className="doac-parallax-band doac-parallax-band--row1">
          <div ref={row1Ref} className="doac-parallax-band__track">
            {r1.map((t, i) => (
              <div key={`r1-${t.id}-${i}`} className="doac-parallax-band__cell">
                <img src={t.src} alt="" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
        <div className="doac-parallax-band doac-parallax-band--row2">
          <div ref={row2Ref} className="doac-parallax-band__track">
            {r2.map((t, i) => (
              <div key={`r2-${t.id}-${i}`} className="doac-parallax-band__cell">
                <img src={t.src} alt="" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
        <div className="doac-parallax-band doac-parallax-band--row3">
          <div ref={row3Ref} className="doac-parallax-band__track">
            {r3.map((t, i) => (
              <div key={`r3-${t.id}-${i}`} className="doac-parallax-band__cell">
                <img src={t.src} alt="" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Calques type inner-intro-wrap — divs réelles pour éviter les bugs d’empilement avec ::before/::after */}
      <div className="doac-intro-parallax__shade doac-intro-parallax__shade--mob" aria-hidden />
      <div className="doac-intro-parallax__shade doac-intro-parallax__shade--desk-left" aria-hidden />
      <div className="doac-intro-parallax__shade doac-intro-parallax__shade--desk-right" aria-hidden />

      {/* Comme .container .col-md-7 — texte au-dessus des calques */}
      <div className="doac-intro-parallax__container">
        <div className="doac-intro-parallax__content">
          <h2 id="doac-intro-title" className="doac-intro-parallax__title">
            <span className="doac-intro-parallax__brand">La Table Sans Filtre</span>
            <span className="doac-intro-parallax__title-text">
              {" "}
              est une conversation sans langue de bois avec des leaders qui façonnent la région
            </span>
          </h2>
          <p className="doac-intro-parallax__subtitle">
            Alex Rizk installe un cadre confiant : pas de posture de façade, du temps pour les idées qui comptent, et des
            échanges pensés pour nourrir celles et ceux qui construisent au quotidien.
          </p>
        </div>
      </div>
    </section>
  );
}
