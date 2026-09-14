const base = require('@playwright/test');
const { expect, request } = base;
const eventCredentials = { email: 'mypractice1@gmail.com', password: 'Student@#000' };
const BASE_URL = 'https://eventhub.rahulshettyacademy.com';
const API_BASE_URL = 'https://api.eventhub.rahulshettyacademy.com';


const { APIUtils } = require("./APIUtils.js");
const loginPayLoad = { userEmail: "jitendramail4u@gmail.com", userPassword: "Student@#000" };
const orderPayLoad = { orders: [{ country: "India", productOrderedId: "6960eae1c941646b7a8b3ed3" }] };


exports.customtest = base.test.extend(
    {
        authenticatedPage: async ({ browser }, use) => {
            const context = await browser.newContext();
            const page = await context.newPage();
            await page.goto('https://rahulshettyacademy.com/client');
            await page.getByPlaceholder("email@example.com").fill(loginPayLoad.userEmail);
            await page.getByPlaceholder("enter your passsword").fill(loginPayLoad.userPassword);
            await page.getByRole("button", { name: "login" }).click();
            await page.waitForLoadState('networkidle');
            await use(page);

        },

        createOrder: async ({ }, use) => {
            const apiContext = await request.newContext();
            const apiUtils = new APIUtils(apiContext, loginPayLoad);
            const response = await apiUtils.craeteOrder(orderPayLoad);
            await use(response);
        },

        testDataForOrder: {
            productName: 'ADIDAS ORIGINAL'
        },

        loginAndGoToEvents: async ({ page }, use) => {
            await page.goto(`${BASE_URL}/login`);
            await page.getByLabel('Email').fill(eventCredentials.email);
            await page.getByLabel('Password').fill(eventCredentials.password);
            await page.locator('#login-btn').click();
            await expect(page.getByText('Featured Events')).toBeVisible();
            await use(page);

        },

        //API event-creation fixture — returns the created event's data
        createEvent: async ({ playwright }, use) => {
            const apiContext = await playwright.request.newContext({ baseURL: API_BASE_URL });

            // confirmed response shape: { success, token, user: { id, email } }
            const loginRes = await apiContext.post('/api/auth/login', { data: eventCredentials });
            const loginBody = await loginRes.json();
            const token = loginBody.token;

            const eventPayload = {
                category: "Workshop",
                city: "Noida",
                description: "Test",
                eventDate: "2027-08-28T06:36:00.000Z",
                imageUrl: "https://google.com",
                price: 400,
                title: `Automation Test Event ${Date.now()}`,
                totalSeats: 500,
                venue: "Sec-32",
            }
            const createRes = await apiContext.post('/api/events', {
                data: eventPayload,
                headers: { Authorization: `Bearer ${token}` },
            });
            
            if (!createRes.ok())
                 {
            const text = await createRes.text();
            throw new Error(`API failed with status ${createRes.status()}. Response body: ${text}`);
                 }

            const body = await createRes.json();
            const event = body.data; // event object is nested under "data"
            await use(event);

        },

    });
   