import type { PlaywrightTestConfig } from "@playwright/test";
import { devices, defineConfig } from "@playwright/test";
import rootConfig from '../../playwright.config'
const config: PlaywrightTestConfig = {
  ...rootConfig,
  projects: [
    {
      name: "chromium",
      use: {
        ...devices["Desktop Chrome"],
      },
    },

    {
      name: "firefox",
      use: {
        ...devices["Desktop Firefox"],
      },
    },

    {
      name: "webkit",
      use: {
        ...devices["Desktop Safari"],
      },
    },
  ],
};

export default config;
