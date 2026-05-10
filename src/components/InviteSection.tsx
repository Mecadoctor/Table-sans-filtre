import { useEffect, useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { smoothEase } from "../motionTokens";

export function InviteSection() {
  const reduce = useReducedMotion();
  const [code, setCode] = useState("");
  const [unlocked, setUnlocked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  const codes = useMemo(() => {
    const raw = import.meta.env.VITE_ACCESS_CODES ?? "";
    return raw
      .split(",")
      .map((c) => c.trim())
      .filter(Boolean);
  }, []);

  const calendlyUrl = import.meta.env.VITE_CALENDLY_URL ?? "";

  useEffect(() => {
    if (localStorage.getItem("tsf_access") === "true") setUnlocked(true);
  }, []);

  function unlock() {
    setErr(null);
    setLoading(true);
    try {
      const ok = codes.includes(code.trim());
      if (!ok) {
        setErr("Code invalide.");
        setUnlocked(false);
        return;
      }
      localStorage.setItem("tsf_access", "true");
      setUnlocked(true);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="section section--tsf" id="booking" aria-labelledby="booking-title">
      <div className="section__inner">
        <motion.div
          initial={{ opacity: 0, y: reduce ? 0 : 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: reduce ? 0 : 0.5, ease: smoothEase }}
        >
          <p className="section__eyebrow section__eyebrow--tsf">Accès invité</p>
          <h2 id="booking-title" className="section__title section__title--tsf">
            Réserver (sur invitation uniquement)
          </h2>
        </motion.div>

        <motion.div
          className="invite-gate card-tsf"
          initial={{ opacity: 0, y: reduce ? 0 : 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: smoothEase }}
        >
          <div className="invite-gate__row">
            <div className="invite-gate__field">
              <label htmlFor="access-code" className="label-tsf">
                Code d&apos;accès
              </label>
              <input
                id="access-code"
                className="input-tsf"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && unlock()}
                placeholder="Entrez votre code…"
                autoComplete="off"
              />
              <p className="invite-gate__hint">Réservation sur invitation uniquement.</p>
            </div>
            <button
              type="button"
              className="btn-play btn-play--tsf invite-gate__btn"
              onClick={unlock}
              disabled={loading || !code.trim()}
            >
              {loading ? "…" : "Déverrouiller"}
            </button>
          </div>
          {err ? (
            <div className="invite-gate__err" role="alert">
              {err}
            </div>
          ) : null}

          <div className="invite-gate__below">
            {unlocked ? (
              calendlyUrl ? (
                <div className="invite-cal-wrap">
                  <iframe title="Calendly" src={calendlyUrl} className="invite-cal-iframe" />
                </div>
              ) : (
                <p className="section__subtitle">
                  Calendly non configuré. Ajoutez <code>VITE_CALENDLY_URL</code> dans{" "}
                  <code>.env.local</code>.
                </p>
              )
            ) : (
              <p className="section__subtitle">Entrez un code valide pour afficher le calendrier.</p>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
