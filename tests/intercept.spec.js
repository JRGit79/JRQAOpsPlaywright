import { expect, test, request } from '@playwright/test';
const { APIUtils } = require('../utils/APIUtils');

const loginPayLoad = { userEmail: "jitendramail4u@gmail.com", userPassword: "Student@#000" };
const orderPayLoad = { orders: [{ country: "India", productOrderedId: "6960eae1c941646b7a8b3ed3" }] };
let response;
const fakePayLoadOrder = { data: [], message: "No Orders" }


// Login and generating token
test.beforeAll(async () => {
  const apiContext = await request.newContext();
  const apiUtils = new APIUtils(apiContext, loginPayLoad);
  response = await apiUtils.craeteOrder(orderPayLoad);
});


test('Intercepting or mocking response @API', async ({ page }) => {
  page.addInitScript(value => {
    window.localStorage.setItem('token', value);
  }, response.token);
  await page.goto('https://rahulshettyacademy.com/client/');
  await page.route("https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/*",
    async route => {
      const realResponse = await page.request.fetch(route.request());
      let body = JSON.stringify(fakePayLoadOrder);
      route.fulfill(
        {
          realResponse,
          body,
        });

    });

  await page.locator("button[routerlink*=myorder]").click();
  await page.waitForResponse("https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/*");
  console.log(await page.locator(".mt-4").textContent());
});

test('Intercepting or mocking request @API', async ({ page }) => {

  page.addInitScript(value => {
    window.localStorage.setItem('token', value);
  }, response.token);

  await page.goto('https://rahulshettyacademy.com/client/');
  await page.locator("button[routerlink*='myorders']").click();

  await page.route("https://rahulshettyacademy.com/api/ecom/order/get-orders-details?id=*",

  async route => route.continue({ url: "https://rahulshettyacademy.com/api/ecom/order/get-orders-details?id=1234" }))

  await page.locator("button:has-text('View')").first().click();
  await expect(page.locator("p").last()).toHaveText("You are not authorize to view this order");

});

