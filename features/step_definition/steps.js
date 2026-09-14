const { When, Then, Given } = require('@cucumber/cucumber');
const { chromium } = require('@playwright/test');
const { POManager } = require('../../pageobjects/POManager');
const { expect } = require('@playwright/test');

Given('login to the ecommerce site with username {string} and password {string}', { timeout: 10000 }, async function (username, password) {
  // Write code here that turns the phrase above into concrete actions
  const loginPage = this.poManager.getLoginPage();
  await loginPage.navigateToClientSite();
  await loginPage.clientLogin(username, password);
});
When('add an item {string} to the cart', async function (productName) {
  // Write code here that turns the phrase above into concrete actions
  this.dashboardPage = this.poManager.getDashboardPage();
  await this.dashboardPage.searchProductAddCart(productName)

});

Then('verify  item {string} is added to the cart', async function (productName) {
  // Write code here that turns the phrase above into concrete actions
  await this.dashboardPage.navigateToCart();
  await this.dashboardPage.productAddedToCart(productName);
});

When('place order and get order ID', async function () {
  // Write code here that turns the phrase above into concrete actions
  const checkoutpage = this.poManager.getCheckOutPage();
  await checkoutpage.checkOut(this.username);
  const orderconfirmationpage = this.poManager.getOrderConfirmationPage();
  this.orderId = await orderconfirmationpage.orderConfirmation();
});

Then('Verify oreder is presented in order history with order ID', async function () {
  // Write code here that turns the phrase above into concrete actions
  await this.dashboardPage.orderAtOrderSummaryPage(this.orderId);
});


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