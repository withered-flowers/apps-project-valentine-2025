import { defineAction } from "astro:actions";
import { z } from "astro:schema";

export const server = {
	formHandler: defineAction({
		input: z.undefined(),
		handler: async () => {
			return {
				message: "Hello from the server!",
			};
		},
	}),
};
