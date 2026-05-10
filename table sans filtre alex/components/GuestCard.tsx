"use client";

import type { Guest } from "./data";

export function GuestCard({ guest }: { guest: Guest }) {
  return (
    <a
      href={guest.episodeUrl}
      target="_blank"
      rel="noreferrer"
      className="card group p-5 transition hover:border-redp/30 hover:bg-white/7"
    >
      <div className="h-28 rounded-xl border border-white/10 bg-white/5 overflow-hidden">
        <img 
          src={`https://img.youtube.com/vi/${guest.youtubeId}/maxresdefault.jpg`}
          alt={guest.name}
          className="w-full h-full object-cover"
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = 'none';
          }}
        />
      </div>
      <div className="mt-3 text-sm font-semibold text-white">{guest.name}</div>
      <div className="mt-1 text-xs text-muted">{guest.role}</div>
      <div className="mt-3 inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] text-muted group-hover:border-redp/30">
        {guest.category}
      </div>
    </a>
  );
}
