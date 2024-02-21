// import { defineConfig } from "vite";
import { qwikVite } from "@builder.io/qwik/optimizer";
import tsconfigPaths from "vite-tsconfig-paths";
import { createApp } from "vinxi";

export default createApp({
  routers: [
    {
      name: "public",
      type: "static",
      dir: "./public",
      base: "/",
    },
    // {
    //   name: "ssr",
    //   type: "http",
    // base: "/server",
    // handler: "./src/entry.ssr.tsx",
    // target: "server",
    // build: {
    //   ssr: true,
    // },
    // plugins: () => [qwikVite({}), tsconfigPaths()],
    // outDir: "./dist/server",
    // link: {
    //   client: "client",
    // },
    // },
    {
      name: "client",
      type: "client",
      handler: "./src/entry.dev.tsx",
      target: "browser",
      plugins: () => [qwikVite({}), tsconfigPaths()],
      outDir: "./dist",
      // base: "/client",
    },
  ],
});
