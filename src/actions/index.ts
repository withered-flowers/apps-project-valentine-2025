import { defineAction } from "astro:actions";
import { z } from "astro:schema";

export const server = {
	formHandler: defineAction({
		accept: "form",
		input: z.object({}),
		handler: async () => {
			// TODO: Implement save to drizzle turso db

			return {
				message: "Hello from the server!",
			};
		},
	}),
};
