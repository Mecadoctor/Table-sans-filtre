import { motion, useReducedMotion } from "framer-motion";
import { smoothEase } from "../motionTokens";
import { episodes } from "../data/tsf";

export function Episodes() {
  const reduceMotion = useReducedMotion();
  const shown = episodes.slice(0, 5);

  return (
    <section className="doac-episode-wrap" id="episodes" aria-labelledby="episodes-title">
      <div className="doac-episode-wrap__inner">
        <motion.h2
          id="episodes-title"
          className="doac-episode-wrap__heading"
          initial={{ opacity: 0, y: reduceMotion ? 0 : 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: reduceMotion ? 0 : 0.5, ease: smoothEase }}
        >
          Épisodes les plus regardés
        </motion.h2>

        {shown.map((e, i) => (
          <motion.article
            key={e.youtubeId}
            className="doac-episode"
            initial={{ opacity: 0, y: reduceMotion ? 0 : 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              duration: reduceMotion ? 0 : 0.5,
              delay: reduceMotion ? 0 : i * 0.05,
              ease: smoothEase,
            }}
          >
            <a className="doac-episode__media" href={e.url} target="_blank" rel="noreferrer">
              <img
                src={`https://img.youtube.com/vi/${e.youtubeId}/hqdefault.jpg`}
                alt=""
              />
            </a>
            <div className="doac-episode__body">
              <h3 className="doac-episode__title">{e.title}</h3>
              <div className="doac-episode__truncate">
                {e.paragraphs.map((p, idx) => (
                  <p key={`${e.youtubeId}-p-${idx}`}>{p}</p>
                ))}
              </div>
              <div className="doac-episode__cta">
                <a className="doac-episode__btn" href={e.url} target="_blank" rel="noreferrer">
                  Voir l&apos;épisode
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
