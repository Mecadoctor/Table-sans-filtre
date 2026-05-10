import { motion, useReducedMotion } from "framer-motion";
import { smoothEase } from "../motionTokens";

const ITEMS = [
  { t: "Sans filtre", d: "Du vrai. Des décisions. Des erreurs. Des leçons." },
  { t: "Humain derrière le titre", d: "Ce qui a construit le parcours — pas seulement le résultat." },
  { t: "Région & impact", d: "Entrepreneuriat, politique, sport, arts — des leaders qui comptent." },
];

export function Concept() {
  const reduce = useReducedMotion();

  return (
    <section className="section section--tsf" id="concept" aria-labelledby="concept-title">
      <div className="section__inner">
        <motion.div
          className="section__header"
          initial={{ opacity: 0, y: reduce ? 0 : 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: reduce ? 0 : 0.5, ease: smoothEase }}
        >
          <p className="section__eyebrow section__eyebrow--tsf">Le concept</p>
          <h2 id="concept-title" className="section__title section__title--tsf">
            Une conversation vraie, sans PR-talk
          </h2>
        </motion.div>
        <div className="concept-grid">
          {ITEMS.map((x, i) => (
            <motion.div
              key={x.t}
              className="concept-card"
              initial={{ opacity: 0, y: reduce ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: reduce ? 0 : i * 0.07, duration: 0.45, ease: smoothEase }}
            >
              <div className="concept-card__title">{x.t}</div>
              <p className="concept-card__desc">{x.d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
