import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			colors: {
				primary: "var(--my-primary)",
				secondary: "var(--my-secondary)",
				tertiary: "var(--my-tertiary)",
				"primary-accent": "var(--my-primary-accent)",
				"secondary-accent": "var(--my-secondary-accent)",
				"tertiary-accent": "var(--my-tertiary-accent)",
			},
			fontFamily: {
				primary: ["Dancing Script Variable", ...defaultTheme.fontFamily.sans],
				secondary: ["Itim", ...defaultTheme.fontFamily.sans],
				tertiary: ["Sunshiney", ...defaultTheme.fontFamily.sans],
			},
		},
	},
	plugins: [],
};
