import { vitePlugin as remix } from "@remix-run/dev";
import { createRoutesFromFolders } from "@remix-run/v1-route-convention";
import { vercelPreset } from "@vercel/remix/vite";
import { defineConfig } from "vite";
import { cjsInterop } from "vite-plugin-cjs-interop";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  optimizeDeps: {
    exclude: ["bcrypt"],
  },
  plugins: [
    remix({
      presets: [vercelPreset()],
      routes: (defineRoutes) => {
        return createRoutesFromFolders(defineRoutes);
      },
      future: {
        v3_fetcherPersist: true,
        v3_relativeSplatPath: true,
        v3_throwAbortReason: true,
      },
    }),
    cjsInterop({ dependencies: ["@googlemaps/markerclusterer"] }),
    tsconfigPaths(),
  ],
});
