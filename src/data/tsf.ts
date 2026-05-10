export type Guest = {
  name: string;
  role: string;
  category: "Entrepreneuriat" | "Politique" | "Sport" | "Arts";
  episodeUrl: string;
  youtubeId: string;
};

export type EpisodeEntry = {
  title: string;
  youtubeId: string;
  url: string;
  /** Textes type « Diary of a CEO » sous le titre */
  paragraphs: string[];
};

export const guests: Guest[] = [
  {
    name: "Nicolas Daoust",
    role: "Entrepreneur",
    category: "Entrepreneuriat",
    episodeUrl: "https://youtu.be/R1Ol1bDx0_Y?si=_2e0Y4nD-PrMKhbj",
    youtubeId: "R1Ol1bDx0_Y",
  },
  {
    name: "Mike & Rony",
    role: "Entrepreneurs",
    category: "Entrepreneuriat",
    episodeUrl: "https://youtu.be/3J4FB2hUm-Q?si=rMKOQh3IJRPfGYnT",
    youtubeId: "3J4FB2hUm-Q",
  },
  {
    name: "Alex Rizk",
    role: "Hôte — Partie 3",
    category: "Entrepreneuriat",
    episodeUrl: "https://youtu.be/1iAUHhI3EUo?si=HOj4fiPulAwmICEl",
    youtubeId: "1iAUHhI3EUo",
  },
  {
    name: "Daniel Fenny",
    role: "Leader",
    category: "Politique",
    episodeUrl: "https://youtu.be/x_Yb2djOzYY?si=3_4nwMVHzKcLh5Kp",
    youtubeId: "x_Yb2djOzYY",
  },
  {
    name: "Marc Patry",
    role: "Entrepreneur",
    category: "Entrepreneuriat",
    episodeUrl: "https://youtu.be/Tzm131qZhCw?si=Zcj3wo_4M5KXvuHy",
    youtubeId: "Tzm131qZhCw",
  },
  {
    name: "Anne-Marie & Julie",
    role: "PDG & Mères",
    category: "Entrepreneuriat",
    episodeUrl: "https://youtu.be/8sKvyMaZvhg?si=q7Ikoaou_87ZUKdi",
    youtubeId: "8sKvyMaZvhg",
  },
];

export const episodes: EpisodeEntry[] = [
  {
    title:
      "ÊTRE BIEN ENTOURÉ, C'EST LA VRAIE FORCE D'UN ENTREPRENEUR — avec Nicolas Daoust",
    youtubeId: "R1Ol1bDx0_Y",
    url: "https://youtu.be/R1Ol1bDx0_Y?si=_2e0Y4nD-PrMKhbj",
    paragraphs: [
      "Entreprendre, ce n’est pas seulement une idée ou un plan : c’est surtout les personnes qui vous entourent au moment où tout peut basculer.",
      "Dans cet épisode, Alex Rizk reçoit Nicolas Daoust pour parler de ceux qui tirent vers le haut — ou qui drainent l’énergie — quand on construit une entreprise pour de vrai.",
      "Une conversation directe sur la confiance, les alliances et pourquoi le bon entourage devient un levier de performance durable.",
    ],
  },
  {
    title: "Why Bureaucracy Is Killing Entrepreneurs in Canada — Alex x Mike x Rony",
    youtubeId: "3J4FB2hUm-Q",
    url: "https://youtu.be/3J4FB2hUm-Q?si=rMKOQh3IJRPfGYnT",
    paragraphs: [
      "Quand les procédures prennent le pas sur l’action, qui paie la facture ? Souvent ceux qui osent créer des emplois et prendre des risques.",
      "Mike et Rony rejoignent Alex pour décortiquer les frictions administratives, les délais et l’impact réel sur les projets au quotidien.",
      "Un échange sans filtre sur ce qui bloque l’entrepreneuriat — et ce qu’il faudrait changer pour avancer plus vite.",
    ],
  },
  {
    title:
      "Femmes, diversité et immigration : ce qui a bâti Alex — La Table Sans Filtre (Partie 3)",
    youtubeId: "1iAUHhI3EUo",
    url: "https://youtu.be/1iAUHhI3EUo?si=HOj4fiPulAwmICEl",
    paragraphs: [
      "Les chapitres les plus déterminants d’un parcours ne sont pas toujours ceux qu’on met en avant sur un CV.",
      "Alex revient sur les influences féminines, la diversité des regards et le poids de l’immigration dans sa façon de décider et de mener.",
      "Une partie 3 introspective : mémoire, responsabilité et ce qui forge une vision de leader au long cours.",
    ],
  },
  {
    title: "Dire les vraies affaires : valeurs, échecs, leadership — Alex Rizk x Daniel Fenny",
    youtubeId: "x_Yb2djOzYY",
    url: "https://youtu.be/x_Yb2djOzYY?si=3_4nwMVHzKcLh5Kp",
    paragraphs: [
      "En politique comme en affaires, le langage tue parfois plus vite que l’inaction : on euphémise, on reporte, on espère que ça passe.",
      "Daniel Fenny et Alex abordent les sujets qu’on évite souvent en public : échecs assumés, lignes rouges et coût de la crédibilité.",
      "Une discussion sur le leadership quand il faut nommer les problèmes avant de prétendre les régler.",
    ],
  },
  {
    title: "Taxes, permis, acquisitions — avancer malgré tout — Alex Rizk x Marc Patry",
    youtubeId: "Tzm131qZhCw",
    url: "https://youtu.be/Tzm131qZhCw?si=Zcj3wo_4M5KXvuHy",
    paragraphs: [
      "Les imprévus fiscaux et réglementaires peuvent figer un projet — ou devenir le terrain où l’on apprend à jouer en équipe avec les experts.",
      "Marc Patry détaille les arbitrages concrets : acquisitions, structures, délais, et comment garder la tête froide quand la complexité grimpe.",
      "Un épisode pour les opérationnels : moins de théorie, plus de tactiques pour avancer quand le cadre serre.",
    ],
  },
  {
    title: "Mères, PDG, charge mentale — avancer quand même — Anne-Marie & Julie x Alex Rizk",
    youtubeId: "8sKvyMaZvhg",
    url: "https://youtu.be/8sKvyMaZvhg?si=q7Ikoaou_87ZUKdi",
    paragraphs: [
      "Concilier exigence professionnelle et famille n’est pas une « bonne balance » à poster sur les réseaux : c’est une suite de choix difficiles au quotidien.",
      "Anne-Marie et Julie partagent ce que ça coûte — et ce que ça rapporte — de porter des rôles de direction tout en restant présentes là où ça compte.",
      "Une conversation honnête sur la charge mentale, les attentes sociales et la persistence quand tout ne tombe pas du bon côté.",
    ],
  },
];

export const YOUTUBE_CHANNEL = "https://www.youtube.com/@Alexrizkofficiel";
