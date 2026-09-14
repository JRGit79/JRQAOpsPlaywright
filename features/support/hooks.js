const playwright = require('@playwright/test');
const { POManager } = require('../../pageobjects/POManager');
const { Before, After, BeforeStep,AfterStep,Status } = require('@cucumber/cucumber');
const { chromium } = require ('@playwright/test');


Before( async function () {

    const browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();
    this.page = await context.newPage();
    this.poManager = new POManager(this.page);
});

After( async function () {

    console.log("I am the last execute");
});

BeforeStep( async function () {


});

AfterStep( async function ({result}) {

    if (result.status === Status.FAILED) {
        await this.page.screenshot({ path: `./screenshots/${Date.now()}.png`, fullPage: true });
    }
});