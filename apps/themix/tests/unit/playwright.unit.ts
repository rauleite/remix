import type { PlaywrightTestConfig } from "@playwright/test";
import rootConfig from '../../playwright.config'
const config: PlaywrightTestConfig = {
  ...rootConfig,
  projects: [{
    name: 'api-tests',
    use: {
      browserName: 'null'
    }
  }]
};

export default config;
