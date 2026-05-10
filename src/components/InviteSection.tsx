import { useEffect, useMemo, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { smoothEase } from "../motionTokens";

/** URL iframe Calendly (embed_type + embed_domain requis pour beaucoup de domaines). */
function calendlyEmbedSrc(pageUrl: string): string {
  try {
    const u = new URL(pageUrl.trim());
    if (!u.hostname.endsWith("calendly.com")) return pageUrl.trim();
    u.searchParams.set("embed_type", "Inline");
    if (typeof window !== "undefined" && window.location.hostname) {
      u.searchParams.set("embed_domain", window.location.hostname);
    }
    return u.toString();
  } catch {
    return pageUrl.trim();
  }
}

export function InviteSection() {
  const reduce = useReducedMotion();
  const [code, setCode] = useState("");
  const [unlocked, setUnlocked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState<string | null>(null);
  const [justUnlocked, setJustUnlocked] = useState(false);
  const [iframeSrc, setIframeSrc] = useState("");
  const calWrapRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    if (!calendlyUrl) return;
    setIframeSrc(calendlyEmbedSrc(calendlyUrl));
  }, [calendlyUrl]);

  useEffect(() => {
    if (!justUnlocked || !unlocked || !calendlyUrl || !calWrapRef.current) return;
    setJustUnlocked(false);
    const el = calWrapRef.current;
    const t = window.setTimeout(() => {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 80);
    return () => window.clearTimeout(t);
  }, [justUnlocked, unlocked, calendlyUrl]);

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
      if (calendlyUrl) setJustUnlocked(true);
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
              <p className="invite-gate__hint">
                {unlocked
                  ? "Code accepté — le calendrier s’affiche sous ce formulaire."
                  : "Réservation sur invitation uniquement."}
              </p>
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
                <>
                  <p className="invite-gate__cal-kicker">Choisissez un créneau ci-dessous.</p>
                  <div ref={calWrapRef} className="invite-cal-wrap">
                    <iframe
                      title="Calendly"
                      src={iframeSrc || calendlyEmbedSrc(calendlyUrl)}
                      className="invite-cal-iframe"
                    />
                  </div>
                </>
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
