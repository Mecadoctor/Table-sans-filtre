import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0B0B0F",
        redp: "#E50914",
        redd: "#7A050B",
        muted: "#A7A7B0"
      }
    }
  },
  plugins: []
} satisfies Config;

