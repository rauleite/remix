/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  devServerBroadcastDelay: 1000,
  ignoredRouteFiles: ["./**/.*"],
  server: "./worker/index.ts",
  serverDependenciesToBundle: "all",
  serverMainFields: ["browser", "module", "main"],
  serverConditions: ["worker"],
  // serverConditions: ["worker", "browser", "module"],
  // serverConditions: ["node"],
  serverMinify: true,
  serverModuleFormat: "esm",
  // serverPlatform: "neutral",
  serverPlatform: "node",
  watchPaths: ["./tailwind.config.js"],
  future: {
    unstable_postcss: true,
    unstable_tailwind: true,
    v2_routeConvention: true,
    v2_meta: true,
    v2_normalizeFormMethod: true,
    v2_errorBoundary: true,
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