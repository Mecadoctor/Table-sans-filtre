import { motion, useReducedMotion } from "framer-motion";
import { smoothEase } from "../motionTokens";
import { guests } from "../data/tsf";
import { GuestCard } from "./GuestCard";

export function GuestsPreview() {
  const reduce = useReducedMotion();
  const preview = guests.slice(0, 8);

  return (
    <section className="section section--tsf" id="invites-preview" aria-labelledby="guests-prev-title">
      <div className="section__inner">
        <motion.div
          className="section__header section__header--wide"
          initial={{ opacity: 0, y: reduce ? 0 : 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: reduce ? 0 : 0.5, ease: smoothEase }}
        >
          <p className="section__eyebrow section__eyebrow--tsf">Invités</p>
          <div className="section__title-row">
            <h2 id="guests-prev-title" className="section__title section__title--tsf">
              Des leaders, pas des profils au hasard
            </h2>
            <a className="section__link-all section__link-all--tsf" href="#invites">
              Voir tous les invités
            </a>
          </div>
        </motion.div>

        <div className="guest-grid">
          {preview.map((g, i) => (
            <motion.div
              key={g.name}
              initial={{ opacity: 0, y: reduce ? 0 : 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: reduce ? 0 : i * 0.05, duration: 0.45, ease: smoothEase }}
            >
              <GuestCard guest={g} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
