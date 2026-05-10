export type Guest = {
  name: string;
  role: string;
  category: "Entrepreneuriat" | "Politique" | "Sport" | "Arts";
  episodeUrl: string;
  youtubeId: string;
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

export const episodes = [
  {
    title:
      "ÊTRE BIEN ENTOURÉ, C'EST LA VRAIE FORCE D'UN ENTREPRENEUR — avec Nicolas Daoust",
    youtubeId: "R1Ol1bDx0_Y",
    url: "https://youtu.be/R1Ol1bDx0_Y?si=_2e0Y4nD-PrMKhbj",
  },
  {
    title: "Why Bureaucracy Is Killing Entrepreneurs in Canada — Alex x Mike x Rony",
    youtubeId: "3J4FB2hUm-Q",
    url: "https://youtu.be/3J4FB2hUm-Q?si=rMKOQh3IJRPfGYnT",
  },
  {
    title:
      "Femmes, diversité et immigration : ce qui a bâti Alex — La Table Sans Filtre (Partie 3)",
    youtubeId: "1iAUHhI3EUo",
    url: "https://youtu.be/1iAUHhI3EUo?si=HOj4fiPulAwmICEl",
  },
  {
    title: "Dire les vraies affaires : valeurs, échecs, leadership — Alex Rizk x Daniel Fenny",
    youtubeId: "x_Yb2djOzYY",
    url: "https://youtu.be/x_Yb2djOzYY?si=3_4nwMVHzKcLh5Kp",
  },
  {
    title: "Taxes, permis, acquisitions — avancer malgré tout — Alex Rizk x Marc Patry",
    youtubeId: "Tzm131qZhCw",
    url: "https://youtu.be/Tzm131qZhCw?si=Zcj3wo_4M5KXvuHy",
  },
  {
    title: "Mères, PDG, charge mentale — avancer quand même — Anne-Marie & Julie x Alex Rizk",
    youtubeId: "8sKvyMaZvhg",
    url: "https://youtu.be/8sKvyMaZvhg?si=q7Ikoaou_87ZUKdi",
  },
];

export const YOUTUBE_CHANNEL = "https://www.youtube.com/@Alexrizkofficiel";
