import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const posts = defineCollection({
	loader: glob({
		base: "./src/posts",
		pattern: "**/*.{md,mdx}",
	}),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		publishDate: z.coerce.date(),
		category: z.string().optional(),
		tags: z.array(z.string()).default([]),
		draft: z.boolean().default(false),
		heroImage: z.string().optional(),
		heroAlt: z.string().optional(),
		canonicalUrl: z.string().optional(),
	}),
});

export const collections = { posts };
