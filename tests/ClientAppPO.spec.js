import { expect, test } from '@playwright/test';
import { POManager } from '../pageobjects/POManager';
import { stringify } from 'querystring';
import { json } from 'stream/consumers';
const dataSet = JSON.parse(JSON.stringify(require('../utils/placeOrderTestData.json')));

for (const data of dataSet)
{
test(`Client login for ${data.productName} @reg`, async ({ page }) => {
  const poManager = new POManager(page);
 
  const loginPage = poManager.getLoginPage();
  await loginPage.navigateToClientSite();
  await loginPage.clientLogin(data.username, data.password);
  await page.locator(".card-body b").first().waitFor();
  const titles = await page.locator(".card-body b").allTextContents();
  console.log(titles);
  const dashboardPage = poManager.getDashboardPage();
  await dashboardPage.searchProductAddCart(data.productName)
  await dashboardPage.navigateToCart();
  await page.locator("div li").first().waitFor();
  const bool = await page.locator("h3:has-text('"+data.productName+"')").isVisible();
  expect(bool).toBeTruthy();
  console.log(bool);
  const checkoutpage = poManager.getCheckOutPage();
  await checkoutpage.checkOut(data.username);
  const orderconfirmationpage = poManager.getOrderConfirmationPage();
  const orderId = await orderconfirmationpage.orderConfirmation();
 
  await page.locator("button[routerlink*=myorder]").click();
  await page.locator("tbody").waitFor();
  const rows = await page.locator("tbody tr");
  const rowsCount = await rows.count();
  console.log("Total Rows of oreder = " + rowsCount);

  for (let i = 0; i < rowsCount; ++i) {
    const rowOrderID = await rows.nth(i).locator("th").textContent();
    if (orderId.includes(rowOrderID)) {
      console.log("orderID Matched");
      await rows.nth(i).locator("button").first().click();
      break;
    }
  }
  const orderIdDetails = await page.locator(".col-text").textContent();
  console.log("OrderID from Order History " + orderIdDetails);
  expect(orderId.includes(orderIdDetails)).toBeTruthy();


});
};
