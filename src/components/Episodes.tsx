import { motion, useReducedMotion } from "framer-motion";
import { smoothEase } from "../motionTokens";
import { episodes } from "../data/tsf";

export function Episodes() {
  const reduceMotion = useReducedMotion();
  const shown = episodes.slice(0, 3);

  return (
    <section className="section section--tsf" id="episodes" aria-labelledby="episodes-title">
      <div className="section__inner">
        <motion.div
          className="section__header section__header--wide"
          initial={{ opacity: 0, y: reduceMotion ? 0 : 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: reduceMotion ? 0 : 0.5, ease: smoothEase }}
        >
          <p className="section__eyebrow section__eyebrow--tsf">Épisodes</p>
          <h2 id="episodes-title" className="section__title section__title--tsf">
            Derniers épisodes
          </h2>
          <p className="section__subtitle">
            Extraits YouTube intégrés — le même contenu que sur la chaîne officielle.
          </p>
        </motion.div>

        <div className="episode-embed-grid">
          {shown.map((e, i) => (
            <motion.article
              key={e.youtubeId}
              className="episode-embed card-tsf"
              initial={{ opacity: 0, y: reduceMotion ? 0 : 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: reduceMotion ? 0 : 0.5,
                delay: reduceMotion ? 0 : i * 0.08,
                ease: smoothEase,
              }}
            >
              <div className="episode-embed__frame">
                <iframe
                  title={e.title}
                  src={`https://www.youtube.com/embed/${e.youtubeId}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="episode-embed__body">
                <h3 className="episode-embed__title">{e.title}</h3>
                <p className="episode-embed__meta">YouTube · Podcast vidéo</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
