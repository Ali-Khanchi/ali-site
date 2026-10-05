// vite.config.ts
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
    plugins: [react()],
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, "index.html"),
                about: resolve(__dirname, "about.html"),
                print: resolve(__dirname, "print.html"),
                notfound: resolve(__dirname, "404.html"),
            },
        },
    },
    server: {
        host: true,
    },
});
