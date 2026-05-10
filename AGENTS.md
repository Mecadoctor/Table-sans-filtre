# Agents — La Table Sans Filtre (Vite)

## Produit

Landing pour **La Table Sans Filtre** — podcast vidéo d’**Alex Rizk** : contenu aligné sur le dossier Next.js `table sans filtre alex` (invités, épisodes YouTube, concept, FAQ, proposer un invité, code + Calendly).

## Technique

| Élément | Détail |
|--------|--------|
| Build | `npm run dev`, `npm run build`, `npm run verify` |
| GitHub Pages | Settings → **Pages** → source **GitHub Actions** (pas une branche / racine du repo, sinon `src/main.tsx` en 404) |
| Données | `src/data/tsf.ts` (guests, episodes, chaîne YouTube) |
| Animations | Framer Motion + GSAP (`GsapScrollBand.tsx`) |
| Accès Calendly | `VITE_ACCESS_CODES`, `VITE_CALENDLY_URL` dans `.env.local` — voir `.env.example` |

## Image hôte

Placeholder : `public/images/alex.svg` — remplacer par une vraie photo (`alex.jpg` / `.png`) si besoin.

## Langue

Français.
