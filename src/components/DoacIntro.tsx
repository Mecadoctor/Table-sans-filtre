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
        const st = () => ({
          trigger,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.2,
        });

        gsap.fromTo(row1Ref.current, { x: "-12%" }, { x: "14%", scrollTrigger: st() });
        gsap.fromTo(row2Ref.current, { x: "12%" }, { x: "-16%", scrollTrigger: st() });
        gsap.fromTo(row3Ref.current, { x: "-10%" }, { x: "12%", scrollTrigger: st() });
      } catch {
        /* évite un écran blanc si GSAP / ScrollTrigger échoue sur un navigateur */
      }
    },
    { scope: rootRef },
  );

  const seg = 8;
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
      <div className="doac-intro-parallax__layout">
        <div className="doac-intro-parallax__content">
          <h2 id="doac-intro-title" className="doac-intro-parallax__title">
            <span className="doac-intro-parallax__brand">La Table Sans Filtre</span> est une conversation sans langue de bois avec des leaders qui façonnent la région — des récits où l’on démonte les angles morts du succès.
          </h2>
          <p className="doac-intro-parallax__subtitle">
            Alex Rizk installe un cadre confiant : pas de posture de façade, du temps pour les idées qui comptent, et des échanges pensés pour nourrir celles et ceux qui construisent au quotidien.
          </p>
        </div>

        <div className="doac-intro-parallax__visual" aria-hidden>
          <div ref={row1Ref} className="doac-parallax-band doac-parallax-band--row1">
            {r1.map((t, i) => (
              <div key={`r1-${t.id}-${i}`} className="doac-parallax-band__cell">
                <img src={t.src} alt="" loading="lazy" />
              </div>
            ))}
          </div>
          <div ref={row2Ref} className="doac-parallax-band doac-parallax-band--row2">
            {r2.map((t, i) => (
              <div key={`r2-${t.id}-${i}`} className="doac-parallax-band__cell">
                <img src={t.src} alt="" loading="lazy" />
              </div>
            ))}
          </div>
          <div ref={row3Ref} className="doac-parallax-band doac-parallax-band--row3">
            {r3.map((t, i) => (
              <div key={`r3-${t.id}-${i}`} className="doac-parallax-band__cell">
                <img src={t.src} alt="" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
