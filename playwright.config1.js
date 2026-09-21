// @ts-check
//This is for practicing other configuration
import { defineConfig, devices } from '@playwright/test';
import { trace } from 'console';

const config = ({
  testDir: './tests',
  retries: 1,

  // global time out for scripts default timeout: 30*1000

  /*Maximum time one test can run for. */
  timeout: 31 * 1000,

  // Time out for exclusively assertions default timeout: 5000
  expect: {
    timeout: 6000
  },

  reporter: 'html',


  projects: [
    {
      name: 'chrome',
      use: {
        browserName: 'chromium',
        headless: false,
        screenshot: 'on',
        trace: 'retain-on-failure',  // (for all test cases traces irrespectively pass or fail)
        //trace: 'retain-on-failure ' // on // off
      }
    },

    {
      name: 'regression',
      use: {
        browserName: 'chromium',
        headless: true,
        screenshot: 'on',
        trace: 'retain-on-failure',
        //trace: 'retain-on-failure ' // on // off
      }
    },

    {
      name: 'safari',
      use: {
        browserName: 'webkit',
        headless: true,
        screenshot: 'off',
        trace: 'off',  // (for all test cases traces irrespectively pass or fail)
        //trace: 'retain-on-failure ' // on // off

      }
    },
  ]

});
module.exports = config;


