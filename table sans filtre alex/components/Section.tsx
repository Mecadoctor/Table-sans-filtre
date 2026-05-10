export function Section({
  id,
  eyebrow,
  title,
  children
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="py-14">
      <div className="container-page">
        {eyebrow ? (
          <div className="mb-2 text-xs tracking-[0.35em] text-muted/70">
            {eyebrow}
          </div>
        ) : null}
        <h2 className="text-2xl font-semibold text-white">{title}</h2>
        <div className="mt-6">{children}</div>
      </div>
    </section>
  );
}

