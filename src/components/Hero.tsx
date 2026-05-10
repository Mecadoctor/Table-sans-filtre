import { motion, useReducedMotion } from "framer-motion";
import { smoothEase } from "../motionTokens";
import { episodes, YOUTUBE_CHANNEL } from "../data/tsf";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.09, delayChildren: 0.06 },
  },
};

const item = (reduce: boolean | null) => ({
  hidden: { opacity: 0, y: reduce ? 0 : 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: reduce ? 0 : 0.5, ease: smoothEase },
  },
});

export function Hero() {
  const reduceMotion = useReducedMotion();
  const first = episodes[0];

  return (
    <section className="hero hero--tsf" id="top" aria-labelledby="hero-title">
      <div className="hero__noise" aria-hidden />
      <div className="hero__bg" aria-hidden>
        <div className="hero__grid hero__grid--tsf" />
        <motion.div
          className="hero__orb hero__orb--tsf-a"
          animate={reduceMotion ? {} : { x: [0, 14, 0], y: [0, -18, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="hero__orb hero__orb--tsf-b"
          animate={reduceMotion ? {} : { x: [0, -16, 0], y: [0, 16, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="hero__inner hero__inner--tsf">
        <motion.div
          className="hero__copy"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.p className="hero__eyebrow hero__eyebrow--tsf" variants={item(reduceMotion)}>
            Podcast vidéo · Alex Rizk
          </motion.p>
          <motion.h1 id="hero-title" className="hero__title hero__title--tsf" variants={item(reduceMotion)}>
            La Table <span className="hero__title-red">Sans Filtre</span>
          </motion.h1>
          <motion.p className="hero__lead" variants={item(reduceMotion)}>
            Des leaders de la région — succès &amp; échecs, sans langue de bois. On découvre l&apos;humain
            derrière la réussite.
          </motion.p>
          <motion.div className="hero__actions" variants={item(reduceMotion)}>
            <a className="btn-play btn-play--tsf" href={YOUTUBE_CHANNEL} target="_blank" rel="noreferrer">
              Regarder sur YouTube
            </a>
            <a className="btn-ghost btn-ghost--podcast" href="#booking">
              Réserver (invitation)
            </a>
          </motion.div>
          <motion.p className="hero__hint-tsf" variants={item(reduceMotion)}>
            <span className="hero__dot-tsf" aria-hidden />
            Invitations limitées · Format podcast vidéo
          </motion.p>
        </motion.div>

        <motion.div
          className="hero__visual-tsf"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: smoothEase, delay: 0.15 }}
        >
          <div className="card-tsf">
            <a
              href={first.url}
              target="_blank"
              rel="noreferrer"
              className="hero__thumb-main"
            >
              <img
                src={`https://img.youtube.com/vi/${first.youtubeId}/maxresdefault.jpg`}
                alt={first.title}
                className="hero__thumb-img"
              />
            </a>
            <div className="hero__thumb-row">
              {episodes.slice(1, 4).map((ep) => (
                <a
                  key={ep.youtubeId}
                  href={ep.url}
                  target="_blank"
                  rel="noreferrer"
                  className="hero__thumb-small"
                >
                  <img
                    src={`https://img.youtube.com/vi/${ep.youtubeId}/mqdefault.jpg`}
                    alt={ep.title}
                  />
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
