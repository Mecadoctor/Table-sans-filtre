/** Aligné sur `public/images/concept/README.txt` — mêmes extensions que `ConceptPanelBg`. */
export const CONCEPT_BG_EXTENSIONS = ["jpeg", "jpg", "webp", "png"] as const;

/** Fond du Hero (fixe en haut de page) : `intro.*` */
export const CONCEPT_INTRO_BASE = "intro";

/** Optionnel — Hero sur étroit (<768px) : recadrage portrait ; sinon retombée sur `intro.*`. */
export const CONCEPT_INTRO_MOBILE_BASE = "intro-mobile";

/** 1er panneau du défilement Concept (« Une conversation vraie… ») : `chapter-5.*` (pas le Hero). */
export const CONCEPT_OPEN_PANEL_BASE = "chapter-5";

/** Autres noms de fichier essayés si `chapter-5.*` est introuvable (casse / typo courante). */
export const CONCEPT_OPEN_PANEL_ALT_BASES = ["chapter-05", "chapter5"] as const;

export function conceptBackgroundUrl(fileBase: string, extIndex: number): string {
  const safeBase = fileBase.toLowerCase();
  const i = Math.min(Math.max(0, extIndex), CONCEPT_BG_EXTENSIONS.length - 1);
  const ext = CONCEPT_BG_EXTENSIONS[i];
  return `${import.meta.env.BASE_URL}images/concept/${safeBase}.${ext}`;
}
