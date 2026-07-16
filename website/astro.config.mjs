import { defineConfig, passthroughImageService } from "astro/config";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";

export default defineConfig({
    site: "https://sid110307.github.io",
    base: "/Sid110307",
    trailingSlash: "always",
    output: "static",
    integrations: [sitemap(), react()],
    image: {
        service: passthroughImageService(),
    },
    markdown: {
        syntaxHighlight: "prism",
    },
});
