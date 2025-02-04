import { defineAction } from "astro:actions";
import { Love, db } from "astro:db";
import { z } from "astro:schema";
import { createSlug } from "@/utils/slug";

export const server = {
	formHandler: defineAction({
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
			const result = await db
				.insert(Love)
				.values({
					slug: createSlug(),
					name: input["your-name"],
					significant_other_name: input["so-name"],
				})
				.returning({
					slug: Love.slug,
				});

			return {
				url: `${result[0].slug}`,
			};
		},
	}),
};
