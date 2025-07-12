import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/svg/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/context/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "rgb(246 244 238)",
        primary: {
          300: "rgb(214 69 45)",
          400: "rgb(255 103 78)",
        },
        secondary: {
          200: "rgb(182 78 37)",
          300: "rgb(20 30 37)",
          400: "rgb(15 23 29)",
        },
        dark: {
          100: "rgb(123 123 123)",
          150: "rgb(91 91 91)",
          300: "rgb(97 101 104)",
          400: "rgb(72 72 72)",
          500: "rgb(51 50 50)",
        },
      },
      fontFamily: {
        dmSans: "var(--dm-sans)",
      },
      fontSize: {
        base: "1.063rem",
      },
    },
  },
};
export default config;
