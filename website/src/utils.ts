const BASE = "/Sid110307";

export const withBase = (path: string): string => path.startsWith(BASE) ? path : path === "/" ? BASE + "/" : path.startsWith("/") ? BASE + path : BASE + "/" + path;
export const getCanonicalUrl = (path: string): string => "https://sid110307.github.io" + withBase(path);
export const slugify = (value: string): string => {
	return value
		.toLowerCase()
		.normalize("NFKD")
		.replace(/[\u0300-\u036f]/g, "")
		.replace(/[^a-z0-9]+/g, "-")
		.replace(/^-+|-+$/g, "");
};

export const formatDate = (date: Date | string): string => {
	const d = typeof date === "string" ? new Date(date) : date;
	return new Intl.DateTimeFormat("en-US", {
		year: "numeric",
		month: "long",
		day: "numeric",
		timeZone: "UTC",
	}).format(d);
};

export const getReadingTime = (content: string): number => {
	const wordsPerMinute = 200;
	return Math.ceil(content.trim().split(/\s+/).length / wordsPerMinute);
};
