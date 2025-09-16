/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/**/*.{astro,html,js,jsx,ts,tsx}",
	],
	theme: {
		extend: {
			fontFamily: {
				roboto: ["Roboto", "ui-sans-serif", "system-ui", "sans-serif"],
				mono: ["Roboto Mono", "ui-monospace", "SFMono-Regular", "monospace"],
			},
		},
	},
	plugins: [],
};
