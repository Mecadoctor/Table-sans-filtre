import { motion, useReducedMotion } from "framer-motion";
import { smoothEase } from "../motionTokens";

const QA: [string, string][] = [
  ["Qui peut être invité ?", "Des leaders sélectionnés (impact réel, parcours solide, histoire utile)."],
  ["Comment obtenir un code ?", "Le code est envoyé directement par invitation."],
  ["En studio ou virtuel ?", "Selon l'invité. Le format principal vise une expérience premium."],
  ["Peut-on proposer quelqu'un ?", "Oui via la section Proposer un invité."],
  ["Validation avant diffusion ?", "Le cadre est clair dès le départ (à ajuster selon votre politique)."],
  ["Délais de publication ?", "Selon calendrier de production et planning de diffusion."],
];

export function FAQ() {
  const reduce = useReducedMotion();

  return (
    <section className="section section--tsf" id="faq" aria-labelledby="faq-title">
      <div className="section__inner">
        <motion.div
          initial={{ opacity: 0, y: reduce ? 0 : 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: reduce ? 0 : 0.5, ease: smoothEase }}
        >
          <p className="section__eyebrow section__eyebrow--tsf">FAQ</p>
          <h2 id="faq-title" className="section__title section__title--tsf">
            Questions fréquentes
          </h2>
        </motion.div>
        <div className="faq-grid">
          {QA.map(([q, a], i) => (
            <motion.div
              key={q}
              className="faq-item card-tsf"
              initial={{ opacity: 0, y: reduce ? 0 : 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: reduce ? 0 : i * 0.04, duration: 0.45, ease: smoothEase }}
            >
              <div className="faq-q">{q}</div>
              <p className="faq-a">{a}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
