import { defineConfig, passthroughImageService } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
    site: "https://sid110307.github.io",
    base: "/Sid110307",
    trailingSlash: "always",
    output: "static",
    integrations: [
        sitemap(),
    ],
    image: {
        service: passthroughImageService(),
    },
    markdown: {
        syntaxHighlight: "prism",
    },
});
