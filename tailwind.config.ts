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
		// eslint-disable-next-line @typescript-eslint/no-require-imports
		require("@designbycode/tailwindcss-text-stroke"),
	],
};
export default config;
