export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M10 48V16h18c7 0 12 4 12 10 0 5-3 8-7 9l9 13h-9l-8-12h-6v12H10zm9-19h8c3 0 4-2 4-4s-1-4-4-4h-8v8z"
        fill="var(--redp)"
      />
      <path d="M38 48l12-32h8l-12 32h-8z" fill="white" opacity="0.85" />
    </svg>
  );
}

export function BrandLockup() {
  return (
    <div className="brand-lockup">
      <div className="brand-lockup__icon">
        <LogoMark className="brand-lockup__svg" />
      </div>
      <div className="brand-lockup__text">
        <div className="brand-lockup__kicker">LA TABLE</div>
        <div className="brand-lockup__name">Sans Filtre</div>
      </div>
    </div>
  );
}
