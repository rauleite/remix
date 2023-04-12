import { createEventHandler } from "@remix-run/cloudflare-workers";
import * as build from "@remix-run/dev/server-build";

const getLoadContext = (context) => {
  console.log('context', context)
}

const fetch = createEventHandler({
  build,
  mode: process.env.NODE_ENV,
  getLoadContext
  // 'fetch:/logs-bucket': logsBucket.fetch
})

addEventListener(
  "fetch",
  fetch
);
