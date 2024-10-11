import type { Config } from "tailwindcss";
import textStroke from "@designbycode/tailwindcss-text-stroke";
// import { Roboto, Space_Grotesk } from "next/font/google";

// const roboto = Roboto({
// 	weight: [400, 500, 600, 700],
// 	subsets: ["latin"],
// });

// const grotesk = Space_Grotesk({
// 	weight: [400, 500, 600, 700],
// 	subsets: ["latin"],
// });

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
				white: "#D9D9D9",
				primary: {
					300: "#FF4747",
					400: "#E22828",
				},
				secondary: "#B79AE3",
				dark: {
					300: "#616568",
					400: "#484848",
					500: "#333232",
				},
			},
			fontFamily: {
				roboto: "var(--roboto)",
				grotesk: "var(--grotesk)",
			},
		},
	},
	plugins: [
		// ...other plugins
		textStroke,
	],
};
export default config;
