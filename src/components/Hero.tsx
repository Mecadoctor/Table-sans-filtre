import { useMemo, useRef, useState } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { episodes } from "../data/tsf";

const fallbackThumb =
  episodes[0] != null
    ? `https://img.youtube.com/vi/${episodes[0].youtubeId}/hqdefault.jpg`
    : "";

export function Hero() {
  const shellRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: shellRef,
    offset: ["start start", "end start"],
  });
  /** Pendant le premier viewport : le hero se fond en même temps que l’intro le recouvre */
  const fadeOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  const base = import.meta.env.BASE_URL;
  /** GitHub Pages (Linux) est sensible à la casse : essai hero.jpg puis Hero.jpg puis vignette. */
  const urls = useMemo(() => {
    const tries = [`${base}images/hero.jpg`, `${base}images/Hero.jpg`];
    if (fallbackThumb) tries.push(fallbackThumb);
    return tries.filter(Boolean);
  }, [base]);
  const [idx, setIdx] = useState(0);
  const safeIdx = Math.min(idx, Math.max(0, urls.length - 1));
  const src = urls[safeIdx] ?? urls[urls.length - 1] ?? "";

  return (
    <section
      ref={shellRef}
      className="doac-hero-shell"
      id="top"
      aria-labelledby="hero-title"
    >
      <motion.div
        className="doac-hero-fixed"
        style={{ opacity: reduceMotion ? 1 : fadeOpacity }}
      >
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
      </motion.div>
      <div className="doac-hero-spacer" aria-hidden />
    </section>
  );
}
