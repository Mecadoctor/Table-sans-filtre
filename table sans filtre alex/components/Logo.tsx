export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Alex Rizk Logo"
      role="img"
    >
      <path
        d="M10 48V16h18c7 0 12 4 12 10 0 5-3 8-7 9l9 13h-9l-8-12h-6v12H10zm9-19h8c3 0 4-2 4-4s-1-4-4-4h-8v8z"
        fill="#E50914"
      />
      <path
        d="M38 48l12-32h8l-12 32h-8z"
        fill="white"
        opacity="0.85"
      />
    </svg>
  );
}

export function BrandLockup() {
  return (
    <div className="flex items-center gap-3">
      <div className="grid h-11 w-11 place-items-center rounded-2xl border border-white/10 bg-white/5">
        <LogoMark className="h-7 w-7" />
      </div>
      <div className="leading-tight">
        <div className="text-[11px] tracking-[0.25em] text-muted/80">LA TABLE</div>
        <div className="text-lg font-semibold text-white">Sans Filtre</div>
      </div>
    </div>
  );
}

