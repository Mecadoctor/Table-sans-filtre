import { useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { CONCEPT_BG_EXTENSIONS, CONCEPT_INTRO_BASE, conceptBackgroundUrl } from "../lib/conceptBg";

gsap.registerPlugin(ScrollTrigger);

/**
 * Comportement type MadeByCat « Technology solutions » :
 * scroll vertical → piste horizontale : chaque plein écran vient de la droite.
 * Fonds : public/images/concept/ — voir README dans ce dossier.
 */
const CHAPTERS = [
  {
    label: "Sans filtre",
    headlineA: "Sans filtre",
    headlineB: "Du vrai. Des décisions.",
    d: "Du vrai. Des décisions. Des erreurs. Des leçons.",
    stat: "12+",
    statLabel: "épisodes publiés",
    bgFile: "chapter-01",
  },
  {
    label: "Humain derrière le titre",
    headlineA: "Humain derrière",
    headlineB: "le titre.",
    d: "Ce qui a construit le parcours — pas seulement le résultat.",
    stat: "100%",
    statLabel: "authenticité",
    bgFile: "chapter-02",
  },
  {
    label: "Région & impact",
    headlineA: "Région & impact",
    headlineB: "des leaders qui comptent.",
    d: "Entrepreneuriat, politique, sport, arts — des leaders qui comptent.",
    stat: "1",
    statLabel: "conversation sans filtre",
    bgFile: "chapter-03",
  },
] as const;

/** Image plein cadre + voile sombre. Essaie plusieurs extensions + rafraîchit ScrollTrigger au chargement. */
function ConceptPanelBg({ fileBase }: { fileBase: string }) {
  const [extIndex, setExtIndex] = useState(0);
  const [givenUp, setGivenUp] = useState(false);
  const src = conceptBackgroundUrl(fileBase, extIndex);

  return (
    <div className="concept-hscroll__backdrop">
      {!givenUp && (
        <img
          key={src}
          src={src}
          alt=""
          className="concept-hscroll__backdrop-img"
          loading="eager"
          decoding="async"
          onLoad={() => {
            ScrollTrigger.refresh();
          }}
          onError={() => {
            setExtIndex((current) => {
              if (current < CONCEPT_BG_EXTENSIONS.length - 1) return current + 1;
              queueMicrotask(() => setGivenUp(true));
              return current;
            });
          }}
        />
      )}
      <div className="concept-hscroll__backdrop-scrim" aria-hidden />
    </div>
  );
}

function ConceptScrollFallback() {
  return (
    <section className="section section--tsf concept-hscroll concept-hscroll--static" id="concept" aria-labelledby="concept-title">
      <div className="concept-hscroll__static-inner">
        <p className="section__eyebrow section__eyebrow--tsf">Le concept</p>
        <h2 id="concept-title" className="concept-hscroll__hero-title">
          <span className="concept-hscroll__hero-line">Une conversation vraie,</span>
          <span className="concept-hscroll__hero-line concept-hscroll__hero-line--accent">sans PR-talk</span>
        </h2>
        <p className="concept-hscroll__hero-lead">
          Trois axes qui définissent chaque épisode — comme une ligne directrice, sans posture de façade.
        </p>
        {CHAPTERS.map((x, i) => (
          <article key={x.label} className="concept-hscroll__static-card concept-hscroll__static-card--bg">
            <ConceptPanelBg fileBase={x.bgFile} />
            <div className="concept-hscroll__static-card-inner">
              <span className="concept-hscroll__chapter-kicker">CHAPITRE · {String(i + 1).padStart(2, "0")}</span>
              <h3 className="concept-hscroll__chapter-h">{x.headlineA}</h3>
              <p className="concept-hscroll__chapter-p">{x.d}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export function Concept() {
  const reduce = useReducedMotion();
  const pinRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (reduce) return;
      const pin = pinRef.current;
      const track = trackRef.current;
      if (!pin || !track) return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      try {
        const tween = gsap.to(track, {
          x: () => -(track.scrollWidth - window.innerWidth),
          ease: "none",
          scrollTrigger: {
            trigger: pin,
            pin: true,
            scrub: 1.2,
            start: "top top",
            end: () => "+=" + (track.scrollWidth - window.innerWidth),
            invalidateOnRefresh: true,
            onUpdate: (st) => {
              const el = progressRef.current;
              if (el) el.style.transform = `scaleX(${st.progress})`;
            },
          },
        });
        return () => {
          tween.scrollTrigger?.kill();
          tween.kill();
        };
      } catch {
        return undefined;
      }
    },
    { scope: pinRef, dependencies: [reduce] },
  );

  if (reduce) {
    return <ConceptScrollFallback />;
  }

  return (
    <section className="section section--tsf concept-hscroll" id="concept" aria-labelledby="concept-title">
      <div ref={pinRef} className="concept-hscroll__pin">
        <div ref={trackRef} className="concept-hscroll__track">
          <div className="concept-hscroll__panel concept-hscroll__panel--intro">
            <ConceptPanelBg fileBase={CONCEPT_INTRO_BASE} />
            <div className="concept-hscroll__panel-stack">
              <div className="concept-hscroll__panel-inner">
                <p className="concept-hscroll__doctrine">Une doctrine de studio</p>
                <p className="concept-hscroll__doctrine-lead">
                  Trois chapitres — un même credo : podcast, vidéo, région.
                </p>
                <h2 id="concept-title" className="concept-hscroll__hero-title">
                  <span className="concept-hscroll__hero-line">Une conversation vraie,</span>
                  <span className="concept-hscroll__hero-line concept-hscroll__hero-line--accent">sans PR-talk</span>
                </h2>
                <p className="concept-hscroll__hero-lead">
                  Trois axes qui définissent chaque épisode — comme une ligne directrice, sans posture de façade.
                </p>
              </div>
            </div>
            <p className="concept-hscroll__scroll-hint" aria-hidden="true">
              CONTINUE SCROLLING — LES CHAPITRES DÉFILENT SUR LE CÔTÉ →
            </p>
          </div>

          {CHAPTERS.map((x, i) => (
            <div key={x.label} className="concept-hscroll__panel concept-hscroll__panel--chapter">
              <ConceptPanelBg fileBase={x.bgFile} />
              <div className="concept-hscroll__panel-stack concept-hscroll__panel-stack--chapter">
                <div className="concept-hscroll__chapter-layout">
                  <div className="concept-hscroll__chapter-copy">
                    <p className="concept-hscroll__chapter-kicker">
                      CHAPITRE · {String(i + 1).padStart(2, "0")} · {x.label.toUpperCase()}
                    </p>
                    <h3 className="concept-hscroll__chapter-title">
                      <span className="concept-hscroll__chapter-title-a">{x.headlineA}</span>
                      <span className="concept-hscroll__chapter-title-b">{x.headlineB}</span>
                    </h3>
                    <p className="concept-hscroll__chapter-desc">{x.d}</p>
                    <p className="concept-hscroll__chapter-tags">PODCAST · VIDÉO · RÉGION</p>
                  </div>
                  <aside className="concept-hscroll__stat-card" aria-hidden="true">
                    <span className="concept-hscroll__stat-kicker">EN BREF</span>
                    <p className="concept-hscroll__stat-big">
                      <span className="concept-hscroll__stat-num">{x.stat}</span>
                      <span className="concept-hscroll__stat-unit">{x.statLabel}</span>
                    </p>
                    <p className="concept-hscroll__stat-foot">
                      <span className="concept-hscroll__stat-dot" /> LA TABLE SANS FILTRE
                    </p>
                  </aside>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="concept-hscroll__chrome">
          <div className="concept-hscroll__chrome-scroll">
            <span>SCROLL</span>
            <span className="concept-hscroll__chrome-arrow" aria-hidden>
              →
            </span>
            <div className="concept-hscroll__rail" aria-hidden>
              <div ref={progressRef} className="concept-hscroll__rail-fill" />
            </div>
          </div>
          <p className="concept-hscroll__chrome-meta">TROIS CHAPITRES — PODCAST — VIDÉO — RÉGION</p>
        </div>
      </div>
    </section>
  );
}
