// @ts-check
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  //retries: 1,
  
  /* Maximum time one test can run for */
  timeout: 31 * 1000,
  
  /* Timeout for assertions */
  expect: {
    timeout: 6000
  },
  
  reporter: 'html',

  /* Shared settings for all the projects */
  use: {
    browserName: 'chromium',
    channel: 'chrome',              // <-- FORCES PLAYWRIGHT TO USE YOUR LOCAL GOOGLE CHROME
    headless: true,
    screenshot: 'on',
    //trace: 'retain-on-failure', 
    trace: 'on',
  },
});
