import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "La Table Sans Filtre",
  description:
    "Des leaders de la région — succès & échecs, sans filtre. Podcast vidéo animé par Alex Rizk."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <div className="min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}

