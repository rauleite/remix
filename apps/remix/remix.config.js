/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  devServerBroadcastDelay: 1000,
  ignoredRouteFiles: ["./**/.*"],
  server: "./worker/index.ts",

  serverConditions: ["worker"],
  serverDependenciesToBundle: "all",
  serverMainFields: ["browser", "module", "main"],
  serverMinify: true,
  serverModuleFormat: "esm",
  serverPlatform: "neutral",
  watchPaths: ["./tailwind.config.js"],

  future: {
    unstable_tailwind: true,
  },
};
// serverBuildPath: "./dist/worker.js",
// server: "./server.js",
// server: "./dist/worker.mjs",
// server: "./dist/worker.js",
// serverPlatform: "node",
// serverPlatform: "browser",
// appDirectory: "app",
// assetsBuildDirectory: "public/build",
// serverBuildPath: "build/index.js",
// publicPath: "/build/",
// watchPaths: ["./app/styles/uno.css"]
