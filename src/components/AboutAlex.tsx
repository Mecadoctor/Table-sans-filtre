import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { smoothEase } from "../motionTokens";

const PILLARS = ["Invités triés sur le volet", "Récits concrets & utiles", "Extraits sociaux percutants"];

/** Fichiers dans `public/images/` — essayés dans l’ordre (photo puis placeholder SVG). */
const ALEX_IMG_TRIES = ["alex.jpeg", "alex.jpg", "alex.webp", "alex.png", "alex.svg"] as const;

export function AboutAlex() {
  const reduce = useReducedMotion();
  const base = import.meta.env.BASE_URL;
  const [imgI, setImgI] = useState(0);
  const imgSrc = `${base}images/${ALEX_IMG_TRIES[Math.min(imgI, ALEX_IMG_TRIES.length - 1)]}`;

  return (
    <section className="section section--tsf" id="hote" aria-labelledby="hote-title">
      <div className="section__inner">
        <motion.div
          className="section__header"
          initial={{ opacity: 0, y: reduce ? 0 : 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: reduce ? 0 : 0.5, ease: smoothEase }}
        >
          <p className="section__eyebrow section__eyebrow--tsf">L&apos;hôte</p>
          <h2 id="hote-title" className="section__title section__title--tsf">
            À propos d&apos;Alex Rizk
          </h2>
        </motion.div>

        <div className="about-grid">
          <motion.div
            className="about-visual card-tsf"
            initial={{ opacity: 0, x: reduce ? 0 : -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: smoothEase }}
          >
            <div className="about-photo">
              <img
                key={imgSrc}
                src={imgSrc}
                alt="Alex Rizk — La Table Sans Filtre"
                onError={() => setImgI((i) => (i < ALEX_IMG_TRIES.length - 1 ? i + 1 : i))}
              />
            </div>
          </motion.div>
          <motion.div
            className="about-copy card-tsf"
            initial={{ opacity: 0, x: reduce ? 0 : 12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: smoothEase }}
          >
            <p className="about-lead">
              Alex invite des leaders sélectionnés pour raconter ce que la réussite ne montre pas : les doutes,
              les échecs, les pivots, et la construction de la crédibilité dans le temps.
            </p>
            <div className="about-pillars">
              {PILLARS.map((s) => (
                <div key={s} className="about-pillar">
                  {s}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
