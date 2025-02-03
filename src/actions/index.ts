import { defineAction } from "astro:actions";
import { z } from "astro:schema";

export const server = {
	formHandler: defineAction({
		// accept: "form",
		accept: "json",
		input: z.object({
			"your-name": z
				.string()
				.min(1, { message: "Please enter your name" }),
			"so-name": z.string().min(1, {
				message: "Please enter your Significant Other's name",
			}),
		}),
		handler: async (input) => {
			// TODO: Implement save to drizzle turso db

			return {
				url: "/result",
			};
		},
	}),
};
