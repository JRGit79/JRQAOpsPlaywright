# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: crossUser.spec.js >> gmail user sees Access Denied when viewing yahoo user booking
- Location: tests\crossUser.spec.js:17:1

# Error details

```
Error: expect(received).toBeTruthy()

Received: false
```

# Test source

```ts
  1  | const { test, expect, APIUtils, request } = require('@playwright/test');
  2  | 
  3  | const BASE_URL = 'https://eventhub.rahulshettyacademy.com';
  4  | const API_URL = 'https://api.eventhub.rahulshettyacademy.com/api';
  5  | const YAHOO_USER = { email: 'mypractice1@yahoo.com', password: 'Student@#000' };
  6  | const GMAIL_USER = { email: 'mypractice1@gmail.com', password: 'Student@#000' };
  7  | 
  8  | 
  9  | async function loginAs(page, user) {
  10 |     await page.goto(`${BASE_URL}/login`);
  11 |     await page.getByLabel('Email').fill(GMAIL_USER.email);
  12 |     await page.getByPlaceholder('••••••').fill(GMAIL_USER.password);
  13 |     await page.locator('#login-btn').click({ timeout: 5000 });
  14 |     await expect(page.getByRole('link', { name: 'Browse Events →' })).toBeVisible();
  15 | };
  16 | 
  17 | test('gmail user sees Access Denied when viewing yahoo user booking', async ({ page, request }) => {
  18 | 
  19 |     // ── Step 1: Login as Yahoo user via API and get token
  20 |     const loginRes = await request.post(`${API_URL}/auth/login`, {
  21 |         data: { email: YAHOO_USER.email, password: YAHOO_USER.password },
  22 |     });
  23 |     expect(loginRes.ok()).toBeTruthy();
  24 |     const { token } = await loginRes.json();
  25 | 
  26 |     // ── Step 2: Fetch events via API to get a valid event ID
  27 |     const getEventRes = await request.get(`${API_URL}/events`, {
  28 |         headers: { authorization: `Bearer ${token}` },
  29 |     });
  30 |     expect(getEventRes.ok()).toBeTruthy();
  31 |     const eventData = await getEventRes.json();
  32 |     const eventID = eventData.data[0].id;
  33 |     console.log('Event ID = ' + eventID);
  34 | 
  35 |     // ── Step 3: Create a booking via API as Yahoo user
  36 |     const bookingRes = await request.post(`${API_URL}/bookings`, {
  37 |         headers: { authorization: `Bearer ${token}` },
  38 |         data: {
  39 |             customerEmail: "mypractice1@yahoo.com",
  40 |             customerName: "Yahoo User",
  41 |             customerPhone: "8123456789",
  42 |             eventId: 3,
  43 |             quantity: 1,
  44 |         },
  45 |     });
> 46 |     expect(bookingRes.ok()).toBeTruthy();
     |                             ^ Error: expect(received).toBeTruthy()
  47 |     const yahooBookingId = (await bookingRes.json()).data.id;
  48 |     console.log(`Yahoo booking created via API. ID: ${yahooBookingId}`);
  49 | 
  50 | 
  51 |     // ── Step 4: Login as Gmail user via UI
  52 |     await loginAs(page, GMAIL_USER);
  53 | 
  54 |     // ── Step 5: Navigate directly to Yahoo's booking URL as Gmail user
  55 |     await page.goto(`${BASE_URL}/bookings/${yahooBookingId}`, { waitUntil: 'networkidle' });
  56 | 
  57 |     // ── Step 6: Validate Access Denied 
  58 |     await expect(page.getByText('Access Denied')).toBeVisible();
  59 |     await expect(page.getByText('You are not authorized to view this booking')).toBeVisible();
  60 | 
  61 | });
  62 | 
  63 | 
```