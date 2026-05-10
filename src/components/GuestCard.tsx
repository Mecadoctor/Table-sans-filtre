import type { Guest } from "../data/tsf";

export function GuestCard({ guest }: { guest: Guest }) {
  return (
    <a
      href={guest.episodeUrl}
      target="_blank"
      rel="noreferrer"
      className="guest-card"
    >
      <div className="guest-card__thumb">
        <img
          src={`https://img.youtube.com/vi/${guest.youtubeId}/maxresdefault.jpg`}
          alt=""
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = "none";
          }}
        />
      </div>
      <div className="guest-card__name">{guest.name}</div>
      <div className="guest-card__role">{guest.role}</div>
      <span className="guest-card__tag">{guest.category}</span>
    </a>
  );
}
