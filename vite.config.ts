import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  vite: {
    base: "/luxe-artisan-makeover/",
  },

  tanstackStart: {
    server: {
      entry: "server",
    },
  },
});