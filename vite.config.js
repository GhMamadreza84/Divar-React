import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
const paths = [
  "src",
  "assets",
  "configs",
  "components",
  "pages",
  "router",
  "services",
  "styles",
  "utils",
];
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      ...paths.reduce(
        (acc, curr) => ({
          ...acc,
          [curr]: `/${curr === "src" ? curr : "src/" + curr}`,
        }),
        ""
      ),
    },
  },
});
