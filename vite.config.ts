import { createHtmlPlugin } from "vite-plugin-html";
import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import viteCompression from "vite-plugin-compression";

export default defineConfig(({ mode }) => {
    const isProduction = mode === "production";

    return {
        plugins: [svelte(),createHtmlPlugin(), viteCompression()],
        viteCompression: {
            verbos: true, // Turning off verbos display can slightly reduce packaging time
            algorithm: "brotliCompress",
        },
        build: {
            sourcemap: false,
            minify: "terser",
            brotliSize: true, // Turning off brotliSize display can slightly reduce packaging time
            terserOptions: {
                compress: {
                    drop_console: isProduction,
                    passes: 2,
                },
                format: {
                    comments: "all",
                },
            },
        },
        createHtmlPlugin: {
            minify: true,
            collapseWhitespace: true,
            removeComments: true,
            removeRedundantAttributes: true,
            removeStyleLinkTypeAttributes: true,
            useShortDoctype: true,
        },
    };
});