import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",

        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary--foreground)",
        },

        muted: {
          1: "var(--muted-1)",
          2: "var(--muted-2)",
          foreground: "var(--muted--foreground)",
        },

        white: "var(--white)",
        transparent: "var(--transparent)",

        green: "var(--green)",
      },
      fontFamily: {
        inter: "var(--font-inter)",
        "space-grotesk": "var(--font-space-grotesk)",
      },
    },
  },
  plugins: [],
};
export default config;
