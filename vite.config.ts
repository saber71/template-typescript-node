import { externalDepsPlugin } from "@heraclius/external-deps-plugin"
import swc from "unplugin-swc"
import { defineConfig } from "vite"
import { resolve } from "path"

export default defineConfig({
  plugins: [swc.vite(), externalDepsPlugin()],
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      fileName: "index",
      formats: ["es"]
    }
  }
})
