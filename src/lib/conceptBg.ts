/** Aligné sur `public/images/concept/README.txt` — mêmes extensions que `ConceptPanelBg`. */
export const CONCEPT_BG_EXTENSIONS = ["jpeg", "jpg", "webp", "png"] as const;

/** Nom de fichier de base pour l’intro (Hero + 1er panneau Concept). */
export const CONCEPT_INTRO_BASE = "intro";

export function conceptBackgroundUrl(fileBase: string, extIndex: number): string {
  const safeBase = fileBase.toLowerCase();
  const i = Math.min(Math.max(0, extIndex), CONCEPT_BG_EXTENSIONS.length - 1);
  const ext = CONCEPT_BG_EXTENSIONS[i];
  return `${import.meta.env.BASE_URL}images/concept/${safeBase}.${ext}`;
}
