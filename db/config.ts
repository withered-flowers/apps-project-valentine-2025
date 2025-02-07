import { column, defineDb, defineTable } from "astro:db";
import { createSlug } from "@/utils/slug";

const Love = defineTable({
	columns: {
		slug: column.text({
			primaryKey: true,
			default: createSlug(),
		}),
		name: column.text(),
		significant_other_name: column.text(),
		the_answer: column.text({
			optional: true,
		}),
	},
	indexes: [
		{
			on: ["slug"],
			unique: true,
		},
	],
});

// https://astro.build/db/config
export default defineDb({
	tables: {
		Love,
	},
});
