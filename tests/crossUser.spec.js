const { test, expect, APIUtils, request } = require('@playwright/test');

const BASE_URL = 'https://eventhub.rahulshettyacademy.com';
const API_URL = 'https://api.eventhub.rahulshettyacademy.com/api';
const YAHOO_USER = { email: 'mypractice1@yahoo.com', password: 'Student@#000' };
const GMAIL_USER = { email: 'mypractice1@gmail.com', password: 'Student@#000' };


async function loginAs(page, user) {
    await page.goto(`${BASE_URL}/login`);
    await page.getByLabel('Email').fill(GMAIL_USER.email);
    await page.getByPlaceholder('••••••').fill(GMAIL_USER.password);
    await page.locator('#login-btn').click({ timeout: 5000 });
    await expect(page.getByRole('link', { name: 'Browse Events →' })).toBeVisible();
};

test('gmail user sees Access Denied when viewing yahoo user booking', async ({ page, request }) => {

    // ── Step 1: Login as Yahoo user via API and get token
    const loginRes = await request.post(`${API_URL}/auth/login`, {
        data: { email: YAHOO_USER.email, password: YAHOO_USER.password },
    });
    expect(loginRes.ok()).toBeTruthy();
    const { token } = await loginRes.json();
    console.log('Yahoo User Token = ' + token);

    // ── Step 2: Fetch events via API to get a valid event ID
    const getEventRes = await request.get(`${API_URL}/events`, {
        headers: { authorization: `Bearer ${token}` },
    });
    expect(getEventRes.ok()).toBeTruthy();
    const eventData = await getEventRes.json();
    const eventID = eventData.data[0].id;
    console.log('Event ID = ' + eventID);
    
    // ── Step 3: Create a booking via API as Yahoo user
    const bookingRes = await request.post(`${API_URL}/bookings`, {
        headers: { authorization: `Bearer ${token}` },
        data: {
            customerEmail: "mypractice1@yahoo.com",
            customerName: "Yahoo User",
            customerPhone: "8123456789",
            eventId: Number(eventID),
            quantity: 1,
        },
    });
    expect(bookingRes.ok()).toBeTruthy();
    const yahooBookingId = (await bookingRes.json()).data.id;
    console.log(`Yahoo booking created via API. ID: ${yahooBookingId}`);

     // ── Step 4: Login as Gmail user via UI
    await loginAs(page, GMAIL_USER);

    // ── Step 5: Navigate directly to Yahoo's booking URL as Gmail user
    await page.goto(`${BASE_URL}/bookings/${yahooBookingId}`, { waitUntil: 'networkidle' });

    // ── Step 6: Validate Access Denied 
    await expect(page.getByText('Access Denied')).toBeVisible();
    await expect(page.getByText('You are not authorized to view this booking')).toBeVisible();


    
});

