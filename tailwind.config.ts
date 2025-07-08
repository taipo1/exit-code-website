import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/*",
  ],
  theme: {
    extend: {
      colors: {
        white: "#F6F4EE",
        primary: {
          300: "#D6452D",
          400: "#FF674E",
        },
        secondary: {
          200: "#B64E25",
          300: "#141E25",
          400: "#0F171D",
        },
        dark: {
          100: "#7B7B7B",
          150: "#5B5B5B",
          300: "#616568",
          400: "#484848",
          500: "#333232",
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
