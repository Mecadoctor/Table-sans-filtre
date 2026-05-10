Images de fond — section « Le concept » (défilement horizontal)

Emplacement
-----------
Place tes fichiers ICI : public/images/concept/
Ils sont copiés tels quels dans dist/ au build (GitHub Pages inclus).

Fichiers attendus (noms exacts)
--------------------------------
  intro.jpg       → 1er écran (doctrine / titre)
  chapter-01.jpg  → chapitre « Sans filtre »
  chapter-02.jpg  → chapitre « Humain derrière le titre »
  chapter-03.jpg  → chapitre « Région & impact »

Tu peux aussi utiliser .webp avec les MÊMES noms (intro.webp, chapter-01.webp…) :
dans ce cas, mets à jour les chemins dans src/components/Concept.tsx (constantes BG_*).

Dimensions recommandées
------------------------
  • Ratio : 16∶9 ou plus large (paysage), pour couvrir tout l’écran en object-fit: cover.
  • Résolution : 1920 × 1080 px (Full HD) suffit ; 2560 × 1440 si tu veux plus de marge sur grands écrans.
  • Poids : vise < 350–500 Ko par image (JPEG qualité 78–82 ou WebP).

Le CSS applique un voile noir (dégradé) par-dessus : les photos peuvent être un peu claires.

Si une image manque ou est introuvable, le panneau garde un fond noir sans image.
