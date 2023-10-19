import { defineConfig } from "vite";
import type { InlineConfig } from "vitest";
import type { UserConfig } from "vite";
interface VitestConfigExport extends UserConfig {
  test: InlineConfig;
}
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],

  base: "/",
  server: {
    port: 8080,
  },
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
    transformMode: {
      web: [/.[tj]sx$/],
    },
  },
} as VitestConfigExport);
