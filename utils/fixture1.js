const base = require('@playwright/test');
const { expect, request } = base;
const eventCredentials = { email: 'mypractice@gmail.com', password: 'Student@#000' };
const BASE_URL = 'https://eventhub.rahulshettyacademy.com';
const API_BASE_URL = 'https://api.eventhub.rahulshettyacademy.com';



exports.test = base.test.extend({
    loginAndGoToEvents: async ({ browser }, use) => {
        const context = await browser.newContext();
        const page = await context.newPage();
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

        if (!createRes.ok()) {
            const text = await createRes.text();
            throw new Error(`API failed with status ${createRes.status()}. Response body: ${text}`);
        }
             const body = await createRes.json();
             const event = body.data; // event object is nested under "data"
        await use(event);

    },
});
exports.expect = expect;