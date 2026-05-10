import { YOUTUBE_CHANNEL } from "../data/tsf";

export function SubscribeStrip() {
  return (
    <section className="doac-subscribe" aria-labelledby="subscribe-title">
      <div className="doac-subscribe__card">
        <h2 id="subscribe-title" className="doac-subscribe__title">
          Abonnez-vous sur votre plateforme préférée
        </h2>
        <p className="doac-subscribe__meta">
          Nouveaux épisodes sur la chaîne YouTube — invitations limitées pour les conversations en studio.
        </p>
        <a className="doac-subscribe__btn" href={YOUTUBE_CHANNEL} target="_blank" rel="noreferrer">
          Voir la chaîne
        </a>
      </div>
    </section>
  );
}
