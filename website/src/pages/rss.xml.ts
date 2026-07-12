import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { SITE_DESCRIPTION, SITE_TITLE, SITE_URL } from "../data/site";

export const GET = async (context: { site?: URL }) => {
	const posts = (await getCollection("posts", ({ data }) => !data.draft))
		.sort((a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf());
	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: new URL(`${SITE_URL}/Sid110307/`),
		items: posts.map((post) => ({
			title: post.data.title,
			description: post.data.description,
			link: `/posts/${post.id}/`,
			pubDate: post.data.publishDate,
		})),
	});
};
