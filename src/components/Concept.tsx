import { motion, useReducedMotion } from "framer-motion";

/** Inspiré de la section « Technology solutions » sur madebycat.com : titre sticky + chapitres empilés */
const ITEMS = [
  { t: "Sans filtre", d: "Du vrai. Des décisions. Des erreurs. Des leçons." },
  { t: "Humain derrière le titre", d: "Ce qui a construit le parcours — pas seulement le résultat." },
  { t: "Région & impact", d: "Entrepreneuriat, politique, sport, arts — des leaders qui comptent." },
];

const chapterEase = [0.16, 1, 0.3, 1] as const;

export function Concept() {
  const reduce = useReducedMotion();

  return (
    <section className="section section--tsf concept-mbc" id="concept" aria-labelledby="concept-title">
      <div className="concept-mbc__wrap">
        <div className="concept-mbc__head concept-mbc__head--sticky">
          <motion.div
            className="concept-mbc__head-inner"
            initial={{ opacity: 0, y: reduce ? 0 : 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: reduce ? 0 : 0.85, ease: chapterEase }}
          >
            <p className="section__eyebrow section__eyebrow--tsf concept-mbc__eyebrow">Le concept</p>
            <h2 id="concept-title" className="concept-mbc__title">
              <span className="concept-mbc__title-line">Une conversation vraie,</span>
              <span className="concept-mbc__title-line concept-mbc__title-line--accent">sans PR-talk</span>
            </h2>
            <p className="concept-mbc__lead">
              Trois axes qui définissent chaque épisode — comme une ligne directrice, sans posture de façade.
            </p>
          </motion.div>
        </div>

        <div className="concept-mbc__chapters" role="list">
          {ITEMS.map((x, i) => (
            <motion.article
              key={x.t}
              className="concept-mbc__chapter"
              role="listitem"
              initial={{ opacity: 0, y: reduce ? 0 : 56, rotateX: reduce ? 0 : 4 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: false, margin: "-12% 0px -8% 0px", amount: 0.35 }}
              transition={{
                duration: reduce ? 0 : 0.75,
                delay: reduce ? 0 : i * 0.06,
                ease: chapterEase,
              }}
            >
              <div className="concept-mbc__chapter-meta">
                <span className="concept-mbc__num">{String(i + 1).padStart(2, "0")}</span>
                <span className="concept-mbc__chapter-label">Chapitre · {x.t}</span>
              </div>
              <h3 className="concept-mbc__chapter-title">{x.t}</h3>
              <p className="concept-mbc__chapter-desc">{x.d}</p>
              <div className="concept-mbc__tags" aria-hidden>
                <span>· Podcast</span>
                <span>· Vidéo</span>
                <span>· Région</span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
