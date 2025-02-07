import tailwindcss from "@tailwindcss/vite";
// @ts-check
import { defineConfig } from "astro/config";

import icon from "astro-icon";
import lottie from "astro-integration-lottie";

import db from "@astrojs/db";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  integrations: [icon(), lottie(), db()],
  trailingSlash: "never",

  vite: {
      plugins: [tailwindcss()],
	},

  adapter: netlify(),
});