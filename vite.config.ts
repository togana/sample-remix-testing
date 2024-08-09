/// <reference types="vitest" />
import { vitePlugin as remix } from "@remix-run/dev";
import react from '@vitejs/plugin-react'
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    // https://remix.run/docs/en/main/guides/vite#plugin-usage-with-other-vite-based-tools-eg-vitest-storybook
    !process.env.VITEST ? remix({
      ssr: false,
      future: {
        v3_fetcherPersist: true,
        v3_relativeSplatPath: true,
        v3_throwAbortReason: true,
      },
    }) : react(), 
    tsconfigPaths(),
  ],
  test: {
    environment: "jsdom",
  },
});
