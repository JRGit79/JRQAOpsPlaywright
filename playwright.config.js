// @ts-check
import { defineConfig, devices } from '@playwright/test';
import { trace } from 'console';

const config = ({
  testDir: './tests',
  retries: 1,
  
  //retries :1,
  
  // global time out for scripts default timeout: 30*1000
  
  /*Maximum time one test can run for. */
  timeout: 31*1000,
  
  // Time out for exclusively assertions default timeout: 5000
  expect: {
    timeout: 6000
  },
  
  reporter: 'html',
  

  //shared settings for all the project as below
  use: {
       browserName: 'chromium',
       headless: true,
       screenshot:  'on',
       trace: 'retain-on-failure', 
       //trace: 'retain-on-failure ' // on // off

      
       },

     
});
module.exports = config;


