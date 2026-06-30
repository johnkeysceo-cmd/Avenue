import { defineConfig } from "tsup";

export default defineConfig({
  clean: true,
  dts: true,
  entry: ["src/index.ts", "src/index.css", 'src/pages/index.ts'],
  format: ["esm"],
  external: ["react", "react-dom", "virtual:avenue/config", "virtual:avenue/routes", "virtual:avenue/components", "virtual:avenue/menu-items", "virtual:avenue/i18n"],
});
