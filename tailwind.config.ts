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
                    foreground: "var(--primary-foreground)",
                    light: "var(--primary-light)",
                },

                muted: {
                    1: "var(--muted-1)",
                    2: "var(--muted-2)",
                    "white-1": "var(--muted-white-1)",
                    "white-2": "var(--muted-white-2)",
                    foreground: "var(--muted-foreground)",
                },

                white: "var(--white)",
                transparent: "var(--transparent)",

                green: "var(--green)",
            },

            fontFamily: {
                mono: "var(--font-space-grotesk)",
                sans: "var(--font-general-sans)",
            },

            transitionProperty: {
                button: "background-color border-radius",
            },
        },
    },
    plugins: [],
};
export default config;
