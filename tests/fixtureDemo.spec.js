import {test, expect, request } from '@playwright/test';
const { customtest } = require("../utils/fixture.js");

const SIX_EVENTS_RESPONSE = {
    data: [
        { id: 1, title: 'Tech Summit 2025', category: 'Conference', eventDate: '2025-06-01T10:00:00.000Z', venue: 'HICC', city: 'Hyderabad', price: '999', totalSeats: 200, availableSeats: 150, imageUrl: null, isStatic: false },
        { id: 2, title: 'Rock Night Live', category: 'Concert', eventDate: '2025-06-05T18:00:00.000Z', venue: 'Palace Grounds', city: 'Bangalore', price: '1500', totalSeats: 500, availableSeats: 300, imageUrl: null, isStatic: false },
        { id: 3, title: 'IPL Finals', category: 'Sports', eventDate: '2025-06-10T19:30:00.000Z', venue: 'Chinnaswamy', city: 'Bangalore', price: '2000', totalSeats: 800, availableSeats: 50, imageUrl: null, isStatic: false },
        { id: 4, title: 'UX Design Workshop', category: 'Workshop', eventDate: '2025-06-15T09:00:00.000Z', venue: 'WeWork', city: 'Mumbai', price: '500', totalSeats: 50, availableSeats: 20, imageUrl: null, isStatic: false },
        { id: 5, title: 'Lollapalooza India', category: 'Festival', eventDate: '2025-06-20T12:00:00.000Z', venue: 'Mahalaxmi Racecourse', city: 'Mumbai', price: '3000', totalSeats: 5000, availableSeats: 2000, imageUrl: null, isStatic: false },
        { id: 6, title: 'AI & ML Expo', category: 'Conference', eventDate: '2025-06-25T10:00:00.000Z', venue: 'Bangalore International Exhibition Centre', city: 'Bangalore', price: '750', totalSeats: 300, availableSeats: 180, imageUrl: null, isStatic: false },
    ],
    pagination: { page: 1, totalPages: 1, total: 6, limit: 12 },
};

const FOUR_EVENTS_RESPONSE = {
    data: [
        { id: 1, title: 'Tech Summit 2025', category: 'Conference', eventDate: '2025-06-01T10:00:00.000Z', venue: 'HICC', city: 'Hyderabad', price: '999', totalSeats: 200, availableSeats: 150, imageUrl: null, isStatic: false },
        { id: 2, title: 'Rock Night Live', category: 'Concert', eventDate: '2025-06-05T18:00:00.000Z', venue: 'Palace Grounds', city: 'Bangalore', price: '1500', totalSeats: 500, availableSeats: 300, imageUrl: null, isStatic: false },
        { id: 3, title: 'IPL Finals', category: 'Sports', eventDate: '2025-06-10T19:30:00.000Z', venue: 'Chinnaswamy', city: 'Bangalore', price: '2000', totalSeats: 800, availableSeats: 50, imageUrl: null, isStatic: false },
        { id: 4, title: 'UX Design Workshop', category: 'Workshop', eventDate: '2025-06-15T09:00:00.000Z', venue: 'WeWork', city: 'Mumbai', price: '500', totalSeats: 50, availableSeats: 20, imageUrl: null, isStatic: false },
    ],
    pagination: { page: 1, totalPages: 1, total: 4, limit: 12 },
};

customtest("Fixture Demo", async ({ authenticatedPage, createOrder, testDataForOrder }) => {

    authenticatedPage.goto("https://rahulshettyacademy.com/client");
    await authenticatedPage.locator("button[routerlink*=myorder]").click();
    await authenticatedPage.locator("tbody").waitFor();
    await expect(authenticatedPage.getByText(createOrder.orderId)).toBeVisible();
    console.log(testDataForOrder.productName);
});

customtest("sandbox banner is shown when 6 events are returned", async ({ loginAndGoToEvents,page }) => {

    await page.route('**/api/events**', async (route) => {
        const realResponse = await page.request.fetch(route.request());
        let body = JSON.stringify(SIX_EVENTS_RESPONSE);
        await route.fulfill({
            response: realResponse,
            body,
        });
    });

    // Wait for event cards to render (confirms mock data loaded)
    await page.locator('#nav-events').click({ timeout: 5000 });
    const eventCards = page.getByTestId('event-card');
    await expect(eventCards.first()).toBeVisible();
    expect(await eventCards.count()).toBe(6);

    // Banner must be visible
    const banner = page.getByText(/sandbox holds up to/i);
    await expect(banner).toBeVisible();
    await expect(banner).toContainText('9 bookings');
});

customtest("sandbox banner is hidden when 4 events are returned", async ({ loginAndGoToEvents, page }) => {

    //await page.goto('https://eventhub.rahulshettyacademy.com');
    await page.route('**/api/events**', async (route) => {
        const realResponse = await page.request.fetch(route.request());
        let body = JSON.stringify(FOUR_EVENTS_RESPONSE);
        await route.fulfill({
            response: realResponse,
            body,
        });
    });

    await page.locator('#nav-events').click({ timeout: 5000 });
    const eventCards = page.getByTestId('event-card');
    await expect(eventCards.first()).toBeVisible();
    expect(await eventCards.count()).toBe(4);

    // Banner must NOT be present
    const banner = page.getByText(/sandbox holds up to/i);
    await expect(banner).not.toBeVisible();

});

 
 // fixture for this is written in fixture file but getting some error need to know why & how to run successfully
    
    customtest('Newly created event should appear on the events page', async({loginAndGoToEvents,createEvent }) =>{

    await loginAndGoToEvents.goto('https://eventhub.rahulshettyacademy.com/events');
    //await expect(loginAndGoToEvents.getByText(createEvent.title)).toBeVisible();
    const eventHeading = loginAndGoToEvents.getByRole('heading', { name: createEvent.title, exact: true });
    await expect(eventHeading).toBeVisible();
}); 








