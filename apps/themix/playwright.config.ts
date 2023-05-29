import type { PlaywrightTestConfig } from "@playwright/test";

enum BASE_URL {
  "localhost" = "localhost",
  "remote" = "192.168.0.101",
}

const PORT = process.env.PORT || 8787;

let url;
if (process.env.CI === "true") {
  url = BASE_URL.localhost;
} else {
  url = BASE_URL.remote;
}

const baseURL = `http://${url}:${PORT}`;
console.log("baseURL", baseURL);

const commands = {
  // build: "npm --workspace=remix run build",
  dev: "npm --workspace=themix run start",
};

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

/**
 * See https://playwright.dev/docs/test-configuration.
 */
const config: PlaywrightTestConfig = {
  // testDir: "./tests",
  /* Maximum time one test can run for. */
  timeout: 30 * 1000,
  expect: {
    /**
     * Maximum time expect() should wait for the condition to be met.
     * For example in `await expect(locator).toHaveText();`
     */
    timeout: 5000,
  },
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  // reporter: "html",
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Maximum time each action such as `click()` can take. Defaults to 0 (no limit). */
    actionTimeout: 0,
    /* Base URL to use in actions like `await page.goto('/')`. */
    baseURL: baseURL,

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: "on-first-retry",
  },
  /* Run your local dev server before starting the tests */
  webServer: {
    // command: process.env.CI ? `${commands.build} && ${commands.dev}` : commands.dev,
    command: commands.dev,
    url: baseURL,
    timeout: 3 * 60 * 1000,
    // reuseExistingServer: !process.env.CI,
    reuseExistingServer: true,
  },
};
export default config;
