import { expect, test, request } from '@playwright/test';
const { APIUtils } = require('../utils/APIUtils');

const loginPayLoad = { userEmail: "jitendramail4u@gmail.com", userPassword: "Student@#000" };
const orderPayLoad = { orders: [{ country: "India", productOrderedId: "6960eae1c941646b7a8b3ed3" }] };
let response;


// Login and generating token
test.beforeAll(async () => {
  const apiContext = await request.newContext();
  const apiUtils = new APIUtils(apiContext, loginPayLoad);
  response = await apiUtils.craeteOrder(orderPayLoad);
});


// Storing token value to browser application LocalStorage.
test('Place Order  @API ', async ({ page }) => {

  page.addInitScript(value => {
    window.localStorage.setItem('token', value);
  }, response.token);


  await page.goto('https://rahulshettyacademy.com/client/');
  await page.locator("button[routerlink*=myorder]").click();
  await page.locator("tbody").waitFor();
  const rows = await page.locator("tbody tr");
  const rowsCount = await rows.count();
  console.log("Total Rows of oreder = " + rowsCount);
  for (let i = 0; i < await rowsCount; ++i) {
    const rowOrderID = await rows.nth(i).locator("th").textContent();
    if (response.orderId.includes(rowOrderID)) {
      console.log("orderID Matched");
      await rows.nth(i).locator("button").first().click();
      break;
    }
  }
  const orderIdDetails = await page.locator(".col-text").textContent();
  console.log("OrderID from Order Summary " + orderIdDetails);
  expect(response.orderId.includes(orderIdDetails)).toBeTruthy();

});
