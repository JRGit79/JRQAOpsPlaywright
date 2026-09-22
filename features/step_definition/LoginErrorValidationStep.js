const { When, Then, Given } = require('@cucumber/cucumber');
const { chromium } = require('@playwright/test');
const { POManager } = require('../../pageobjects/POManager');
const { expect } = require('@playwright/test');

Given('login to the LoginPagePractice with username {string} and password {string}', async function (username, password) {
  await this.page.goto('https://rahulshettyacademy.com/loginpagePractise/');
  console.log(await this.page.title());
  await this.page.locator('#username').fill(username);
  await this.page.locator('#password').fill(password);
  await this.page.locator('#signInBtn').click();
});

Then('Verify Error message is displayed', async function () {
  // Write code here that turns the phrase above into concrete actions
  console.log(await this.page.locator("[style*='block']").textContent());
  await expect(this.page.locator("[style*='block']")).toContainText('Incorrect username/password.');

});