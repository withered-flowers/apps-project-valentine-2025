// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import lottie from "astro-integration-lottie";

// https://astro.build/config
export default defineConfig({
	integrations: [
		icon(),
		lottie(),
		tailwind({
			applyBaseStyles: false,
		}),
	],
});
