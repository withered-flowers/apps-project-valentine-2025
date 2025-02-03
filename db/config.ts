import { column, defineDb, defineTable } from "astro:db";

const Love = defineTable({
	columns: {
		slug: column.text({
			primaryKey: true,
		}),
		name: column.text(),
		significant_other_name: column.text(),
		language_to_show: column.text(),
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
