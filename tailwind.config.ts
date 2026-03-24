import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0B0E14",
        "card-bg": "#151A25",
        primary: "#627EEA",
        secondary: "#8C8DFC",
        accent: "#00D4AA",
        "text-primary": "#FFFFFF",
        "text-secondary": "#94A3B8",
      },
      fontFamily: {
        heading: ["Space Grotesk", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
