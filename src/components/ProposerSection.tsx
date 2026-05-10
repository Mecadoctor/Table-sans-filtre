import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { smoothEase } from "../motionTokens";

export function ProposerSection() {
  const reduce = useReducedMotion();
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", role: "", why: "" });

  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name.trim() || !form.role.trim() || !form.why.trim()) return;
    setSent(true);
  }

  if (sent) {
    return (
      <section className="section section--tsf" id="proposer" aria-labelledby="proposer-title">
        <div className="section__inner">
          <motion.div
            className="proposer-done card-tsf"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <h2 className="section__title section__title--tsf">Merci !</h2>
            <p className="section__subtitle">
              Votre proposition a été notée côté démo (front uniquement — branchez un email / CRM ensuite).
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="section section--tsf" id="proposer" aria-labelledby="proposer-title">
      <div className="section__inner">
        <motion.div
          initial={{ opacity: 0, y: reduce ? 0 : 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: reduce ? 0 : 0.5, ease: smoothEase }}
        >
          <p className="section__eyebrow section__eyebrow--tsf">Contribution</p>
          <h2 id="proposer-title" className="section__title section__title--tsf">
            Proposer un invité
          </h2>
          <p className="section__subtitle">
            Formulaire simple — à connecter plus tard à un backend ou un formulaire métier.
          </p>
        </motion.div>

        <div className="proposer-grid">
          <motion.form
            className="card-tsf proposer-form"
            onSubmit={submit}
            initial={{ opacity: 0, y: reduce ? 0 : 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: smoothEase }}
          >
            <label className="label-tsf" htmlFor="prop-name">
              Nom
            </label>
            <input
              id="prop-name"
              className="input-tsf"
              required
              placeholder="Nom de la personne"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
            <label className="label-tsf" htmlFor="prop-role">
              Rôle / organisation
            </label>
            <input
              id="prop-role"
              className="input-tsf"
              required
              placeholder="Ex. CEO — Entreprise"
              value={form.role}
              onChange={(e) => setForm({ ...form, role: e.target.value })}
            />
            <label className="label-tsf" htmlFor="prop-why">
              Pourquoi cette personne ?
            </label>
            <textarea
              id="prop-why"
              className="input-tsf input-tsf--area"
              required
              placeholder="2–5 lignes : impact, histoire, intérêt pour le podcast."
              value={form.why}
              onChange={(e) => setForm({ ...form, why: e.target.value })}
            />
            <button type="submit" className="btn-play btn-play--tsf proposer-submit">
              Envoyer la proposition
            </button>
          </motion.form>

          <motion.div
            className="card-tsf proposer-criteria"
            initial={{ opacity: 0, y: reduce ? 0 : 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05, ease: smoothEase }}
          >
            <div className="proposer-criteria__title">Critères de sélection</div>
            <ul className="proposer-criteria__list">
              <li>Impact réel dans la région</li>
              <li>Parcours solide avec des leçons à partager</li>
              <li>Histoire authentique et utile</li>
              <li>Ouverture à parler sans filtre</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
