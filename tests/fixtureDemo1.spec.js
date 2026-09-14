const { test,expect } = require("../utils/fixture1.js");



test('Newly created event should appear on the events page @API', async({loginAndGoToEvents,createEvent}) =>
    {

    await loginAndGoToEvents.goto('https://eventhub.rahulshettyacademy.com/events');
    //await expect(loginAndGoToEvents.getByText(createEvent.title)).toBeVisible();
    const eventHeading = loginAndGoToEvents.getByRole('heading', { name: createEvent.title, exact: true });
    await expect(eventHeading).toBeVisible();
    });