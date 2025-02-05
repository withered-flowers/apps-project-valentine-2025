import { defineAction } from "astro:actions";
import { Love, db, eq } from "astro:db";
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
	formAcceptanceHandler: defineAction({
		accept: "json",
		input: z.object({
			slug: z.string().min(1),
			the_answer: z.boolean(),
		}),
		handler: async (input) => {
			const result = await db
				.update(Love)
				.set({
					the_answer: input.the_answer ? "1" : "0",
				})
				.where(eq(Love.slug, input.slug))
				.returning({
					slug: Love.slug,
				});

			return {
				result: input.slug === result[0].slug,
			};
		},
	}),
};
