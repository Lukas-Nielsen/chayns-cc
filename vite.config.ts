import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import oxlintPlugin from "vite-plugin-oxlint";

export default defineConfig({
	plugins: [react(), oxlintPlugin()],
	server: {
		port: 3000,
		open: true,
	},
	build: {
		emptyOutDir: true,
		outDir: "./build",
	},
});
