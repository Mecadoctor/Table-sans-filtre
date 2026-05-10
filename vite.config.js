import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
/** Repo GitHub Pages : https://mecadoctor.github.io/Table-sans-filtre/ */
const GH_PAGES_BASE = "/Table-sans-filtre/";
export default defineConfig(({ mode }) => ({
    plugins: [react()],
    base: mode === "production" ? GH_PAGES_BASE : "/",
}));
