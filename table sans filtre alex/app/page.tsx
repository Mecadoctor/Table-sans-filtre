import Link from "next/link";
import Image from "next/image";
import { BrandLockup } from "@/components/Logo";
import { Section } from "@/components/Section";
import InviteGate from "@/components/InviteGate";
import { GuestCard } from "@/components/GuestCard";
import { episodes, guests } from "@/components/data";

function Hero() {
  return (
    <header className="relative overflow-hidden border-b border-white/10">
      <div className="absolute inset-0 opacity-40">
        <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-redp/30 blur-3xl" />
        <div className="absolute bottom-[-240px] right-[-200px] h-[520px] w-[520px] rounded-full bg-white/10 blur-3xl" />
      </div>
      <div className="container-page relative py-10">
        <nav className="flex items-center justify-between">
          <BrandLockup />
          <div className="hidden items-center gap-6 text-sm md:flex">
            <Link className="text-muted hover:text-white transition" href="/invites">Invités</Link>
            <Link className="text-muted hover:text-white transition" href="/proposer">Proposer</Link>
            <a className="text-muted hover:text-white transition" href="#booking">Réserver</a>
          </div>
        </nav>
        <div className="mt-14 grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <h1 className="text-4xl font-semibold tracking-tight text-white md:text-5xl">
              La Table <span className="text-redp">Sans Filtre</span>
            </h1>
            <p className="mt-4 max-w-xl text-lg text-muted">
              Des leaders de la région — succès & échecs, sans langue de bois.
              On découvre l'humain derrière la réussite.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a className="btn btn-primary" href="https://www.youtube.com/@Alexrizkofficiel" target="_blank" rel="noreferrer">
                Regarder sur YouTube
              </a>
              <a className="btn btn-ghost" href="#booking">
                Réserver (invitation)
              </a>
            </div>
            <div className="mt-7 flex items-center gap-4 text-xs text-muted/80">
              <div className="h-2 w-2 rounded-full bg-redp" />
              <span>Invitations limitées • Format podcast vidéo</span>
            </div>
          </div>
          <div className="card p-5">
            <a
              href={episodes[0].url}
              target="_blank"
              rel="noreferrer"
              className="block aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/10 transition hover:border-redp/30"
            >
              <img
                src={`https://img.youtube.com/vi/${episodes[0].youtubeId}/maxresdefault.jpg`}
                alt={episodes[0].title}
                className="h-full w-full object-cover"
              />
            </a>
            <div className="mt-4 grid grid-cols-3 gap-3">
              {episodes.slice(1, 4).map((episode) => (
                <a
                  key={episode.youtubeId}
                  href={episode.url}
                  target="_blank"
                  rel="noreferrer"
                  className="group h-16 overflow-hidden rounded-xl border border-white/10 transition hover:border-redp/30"
                >
                  <img
                    src={`https://img.youtube.com/vi/${episode.youtubeId}/mqdefault.jpg`}
                    alt={episode.title}
                    className="h-full w-full object-cover"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Page() {
  return (
    <main>
      <Hero />
      <Section eyebrow="LE CONCEPT" title="Une conversation vraie, sans PR-talk">
        <div className="grid gap-4 md:grid-cols-3">
          {[
            { t: "Sans filtre", d: "Du vrai. Des décisions. Des erreurs. Des leçons." },
            { t: "Humain derrière le titre", d: "Ce qui a construit le parcours — pas seulement le résultat." },
            { t: "Région & impact", d: "Entrepreneuriat, politique, sport, arts — des leaders qui comptent." }
          ].map((x) => (
            <div key={x.t} className="card p-6 transition hover:border-redp/30 hover:bg-white/7">
              <div className="text-sm font-semibold text-white">{x.t}</div>
              <div className="mt-2 text-sm text-muted">{x.d}</div>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="L'HÔTE" title="À propos d'Alex Rizk">
        <div className="grid gap-6 md:grid-cols-[1.2fr_2fr] md:items-start">
          <div className="card p-6">
            <div className="relative h-80 w-full overflow-hidden rounded-2xl border border-white/10">
              <Image
                src="/images/alex.png"
                alt="Alex Rizk - La Table Sans Filtre"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
          <div className="card p-6">
            <p className="text-sm text-muted">
              Alex invite des leaders sélectionnés pour raconter ce que la réussite ne montre pas:
              les doutes, les échecs, les pivots, et la construction de la crédibilité dans le temps.
            </p>
            <div className="mt-5 grid gap-3 md:grid-cols-3">
              {["Invités triés sur le volet", "Récits concrets & utiles", "Extraits sociaux percutants"].map((s) => (
                <div key={s} className="rounded-xl border border-white/10 bg-white/5 p-4 text-sm text-white">
                  {s}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section eyebrow="INVITÉS" title="Des leaders, pas des profils au hasard">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {guests.slice(0, 8).map((g) => (
            <GuestCard key={g.name} guest={g} />
          ))}
        </div>
        <div className="mt-6">
          <Link className="btn btn-ghost" href="/invites">
            Voir tous les invités
          </Link>
        </div>
      </Section>

      <Section eyebrow="ÉPISODES" title="Derniers épisodes">
        <div className="grid gap-4 md:grid-cols-3">
          {episodes.slice(0, 3).map((e) => (
            <div key={e.title} className="card overflow-hidden transition hover:border-redp/30">
              <div className="aspect-video w-full border-b border-white/10 bg-black">
                <iframe
                  className="h-full w-full"
                  src={`https://www.youtube.com/embed/${e.youtubeId}`}
                  title={e.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="p-5">
                <div className="text-sm font-semibold text-white">{e.title}</div>
                <div className="mt-1 text-xs text-muted">YouTube • Podcast vidéo</div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section id="booking" eyebrow="ACCÈS INVITÉ" title="Réserver (sur invitation uniquement)">
        <InviteGate />
      </Section>

      <Section eyebrow="FAQ" title="Questions fréquentes">
        <div className="grid gap-4 md:grid-cols-2">
          {[
            ["Qui peut être invité ?", "Des leaders sélectionnés (impact réel, parcours solide, histoire utile)."],
            ["Comment obtenir un code ?", "Le code est envoyé directement par invitation."],
            ["En studio ou virtuel ?", "Selon l'invité. Le format principal vise une expérience premium."],
            ["Peut-on proposer quelqu'un ?", "Oui via la page Proposer un invité."],
            ["Validation avant diffusion ?", "Le cadre est clair dès le départ (à ajuster selon votre politique)."],
            ["Délais de publication ?", "Selon calendrier de production et planning de diffusion."]
          ].map(([q, a]) => (
            <div key={q} className="card p-6 transition hover:border-redp/30 hover:bg-white/7">
              <div className="text-sm font-semibold text-white">{q}</div>
              <div className="mt-2 text-sm text-muted">{a}</div>
            </div>
          ))}
        </div>
      </Section>

      <footer className="border-t border-white/10 py-10">
        <div className="container-page flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="text-sm text-muted">
            © {new Date().getFullYear()} La Table Sans Filtre
          </div>
          <div className="flex gap-4 text-sm">
            <a className="text-muted hover:text-white transition" href="https://www.youtube.com/@Alexrizkofficiel" target="_blank" rel="noreferrer">YouTube</a>
            <a className="text-muted hover:text-white transition" href="#" target="_blank" rel="noreferrer">Instagram</a>
            <a className="text-muted hover:text-white transition" href="#" target="_blank" rel="noreferrer">LinkedIn</a>
            <a className="text-muted hover:text-white transition" href="mailto:contact@latablesansfiltre.com">Contact</a>
          </div>
        </div>
      </footer>
    </main>
  );
}

