import { motion } from "framer-motion";
import { YOUTUBE_CHANNEL } from "../data/tsf";

export function Footer() {
  return (
    <footer className="footer footer--tsf">
      <motion.div
        className="footer__inner footer__inner--podcast"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        <div className="footer__col">
          <div className="footer__brand-tsf">La Table Sans Filtre</div>
          <p className="footer__tagline">© {new Date().getFullYear()} · Podcast vidéo · Alex Rizk</p>
        </div>
        <div className="footer__links-tsf">
          <a href={YOUTUBE_CHANNEL} target="_blank" rel="noreferrer">
            YouTube
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            Instagram
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href="mailto:contact@latablesansfiltre.com">Contact</a>
        </div>
      </motion.div>
    </footer>
  );
}
