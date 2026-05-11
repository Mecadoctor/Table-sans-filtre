import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

/** Repo GitHub Pages : https://mecadoctor.github.io/Table-sans-filtre/ */
const GH_PAGES_BASE = "/Table-sans-filtre/";

function nodeEnv(key: string): string | undefined {
  const proc = (globalThis as unknown as { process?: { env?: Record<string, string | undefined> } })
    .process;
  return proc?.env?.[key];
}

/** Domaine perso = site à la racine `/`. En CI : `VITE_SITE_BASE=/` */
function productionBase(): string {
  const raw = nodeEnv("VITE_SITE_BASE")?.trim();
  if (raw === "" || raw === "/") return "/";
  if (raw) return raw.endsWith("/") ? raw : `${raw}/`;
  return GH_PAGES_BASE;
}

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  base: mode === "production" ? productionBase() : "/",
}));
