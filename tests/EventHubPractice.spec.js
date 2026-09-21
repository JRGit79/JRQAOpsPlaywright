import {expect, test} from '@playwright/test';

    const BASE_URL= 'https://eventhub.rahulshettyacademy.com';
    const GMAIL_USER = {email :'mypractice@gmail.com', password:'Student@#000'}
    
    async function loginAndGoToBooking(page)
    {
    await page.goto(`${BASE_URL}/login`);
    await page.getByLabel('Email').fill(GMAIL_USER.email);
    await page.getByPlaceholder('••••••').fill(GMAIL_USER.password);
    await page.locator('#login-btn').click({ timeout: 5000 });
    await page.locator('#nav-events').wait
    await page.locator('#nav-events').waitFor();
    expect(await page.locator('#nav-events')).toBeVisible();
    expect(await page.getByTestId('nav-bookings')).toBeVisible();
    }

test.skip('Event creation and booking', async ({page}) =>
{   
    const email = "mypractice@gmail.com";
    const password = 'Student@#000';
    await page.goto('https://eventhub.rahulshettyacademy.com');
    await page.getByLabel('Email').fill(email);
    await page.getByLabel('Password').fill(password);
    await page.locator('#login-btn').click();
    await page.locator('#nav-events').waitFor();
    expect(await page.locator('#nav-events')).toBeVisible();

    //await page.getByRole("button",{name:'Admin'}).click(); 
    //await page.getByRole('link',{name:'Manage Events'}).first().click();  (This also Correct)
    await page.locator('a[href="/admin/events"]').first().click();
    const eventTitle = `Test Event ${Date.now()}`;
    await page.getByLabel('Title').fill(eventTitle);
    await page.getByPlaceholder('Describe the event…').fill("This is practice session on Event hasSubscribers.");
    await page.getByLabel('Category').selectOption('Festival');
    await page.getByLabel('City').fill('Noida');
    await page.getByLabel('Venue').fill(" Sec-15, RahulshettyAcedemy, Noida UP");
    await page.getByRole('textbox', { name: 'Event Date & Time*' }).fill('2027-08-27T19:29');
    
    await page.getByLabel('Price ($)').fill('150');
    await page.getByLabel('Total Seats').fill('300');
    await page.getByRole('textbox', { name: 'Image URL (optional)' }).click();
    await page.getByLabel('Image URL (optional)').fill('https://rahulshettyacademy.com');
    await page.getByTestId('add-event-btn').click();
    await expect(page.getByText('Event created!')).toBeVisible();
    console.log("Created Event : "+eventTitle);

    await page.locator('#nav-events').click({ timeout: 5000 });
    const eventCards = page.getByTestId('event-card');
    await expect(eventCards.first()).toBeVisible();
    const targetCard = eventCards.filter({ hasText: eventTitle }).first();
    await expect(targetCard).toBeVisible({ timeout: 5000 })
    const seatsBeforeBooking = parseInt(await targetCard.getByText('seat').first().innerText());
    console.log("Total Seats :" +seatsBeforeBooking);
    console.log(`Seats before booking: ${seatsBeforeBooking}`);
   

    await targetCard.getByTestId('book-now-btn').click();
    await page.getByTestId('event-card').filter({hasText:eventTitle}).waitFor();
    expect(await page.locator('.text-2xl',{hasText:eventTitle})).toBeTruthy();
    await page.getByLabel('Full Name').fill("Jitendra Rawat");
    await page.getByLabel('Email').fill(email);
    await page.getByPlaceholder('+91 98765 43210').fill('9123456789');
    await page.locator('.confirm-booking-btn').click(); 

    await expect(page.getByRole('heading', { name: 'Booking Confirmed! 🎉' })).toBeVisible();
    await expect(page.getByText('Your tickets are reserved.')).toBeVisible();

    await page.getByTestId('nav-bookings').click();
    const BookingRefNo = await page.locator('main div.space-y-4').filter({ hasText: eventTitle })
    .getByTestId('booking-id').first().textContent();
    console.log("Booking Ref " +BookingRefNo);

    await page.locator('#nav-events').click({timeout:5000});
    await page.getByTestId('event-card').first().waitFor();
    await expect(eventCards.first()).toBeVisible()
    //expect(await page.getByTestId('event-card').filter({hasText:eventTitle})).first().toBeVisible();
    const updatedCard= eventCards.filter({ hasText: eventTitle });
    await expect(updatedCard).toBeVisible();

    const seatsAfterBooking = parseInt(await updatedCard.getByText('seat').innerText());
    console.log(`Seats after booking: ${seatsAfterBooking}`);
    //expect(seatsAfterBooking).toBe(seatsBeforeBooking - 1);   
});

test.skip('refund eligible for single ticket booking', async ({page})=>{

    await loginAndGoToBooking(page);
    //Booking 1 Ticket
    await page.goto(`${BASE_URL}/events`);
    await page.getByTestId('event-card').last().getByTestId('book-now-btn').click({ force: false, timeout: 5000 });
    
    await page.getByLabel('Full Name').fill('Test User');
    await page.locator('#customer-email').fill(GMAIL_USER.email);
    await page.getByPlaceholder('+91 98765 43210').fill('9999999999');
    await page.locator('.confirm-booking-btn').click();

   // Navigate to booking detail
  await page.getByRole('link', { name: 'View My Bookings' }).click();
  await expect(page).toHaveURL(`${BASE_URL}/bookings`);
  await page.getByRole('link', { name: 'View Details' }).first().click();
  await expect(page.getByText('Booking Information')).toBeVisible();

  // Validate booking ref first letter matches event name first letter
  const bookingRef = await page.locator('span.font-mono.font-bold').innerText();
  const eventTitle = await page.locator('h1').innerText();
  expect(bookingRef.charAt(0)).toBe(eventTitle.charAt(0));
 
  await page.locator('#check-refund-btn').click();

  // Spinner must appear immediately
  await expect(page.locator('#refund-spinner')).toBeVisible();

  // Wait for spinner to disappear after 4s
  await expect(page.locator('#refund-spinner')).not.toBeVisible({ timeout: 6000 });

  // Validate eligible message
  const result = page.locator('#refund-result');
  await expect(result).toBeVisible();
  await expect(result).toContainText('Eligible for refund');
  await expect(result).toContainText('Single-ticket bookings qualify for a full refund');
});

test.skip('refund not eligible for group ticket booking', async ({page})=>{

    await loginAndGoToBooking(page);
    //Booking 3 ticket
    await page.goto(`${BASE_URL}/events`);
    await page.getByTestId('event-card').last().getByTestId('book-now-btn').click({ force: false, timeout: 5000 });
    
    // Increase quantity to 3
    await page.locator('button:has-text("+")').click();
    await page.locator('button:has-text("+")').click();

    await page.getByLabel('Full Name').fill('Test User');
    await page.locator('#customer-email').fill(GMAIL_USER.email);
    await page.getByPlaceholder('+91 98765 43210').fill('9999999999');
    await page.locator('.confirm-booking-btn').click();

   // Navigate to booking detail
  await page.getByRole('link', { name: 'View My Bookings' }).click();
  await expect(page).toHaveURL(`${BASE_URL}/bookings`);
  await page.getByRole('link', { name: 'View Details' }).first().click();
  await expect(page.getByText('Booking Information')).toBeVisible();

  // Validate booking ref first letter matches event name first letter
  const bookingRef = await page.locator('span.font-mono.font-bold').innerText();
  const eventTitle = await page.locator('h1').innerText();
  expect(bookingRef.charAt(0)).toBe(eventTitle.charAt(0));
 
  await page.locator('#check-refund-btn').click();

  // Spinner must appear immediately
  await expect(page.locator('#refund-spinner')).toBeVisible();

  // Wait for spinner to disappear after 4s
  await expect(page.locator('#refund-spinner')).not.toBeVisible({ timeout: 6000 });

  // Validate eligible message
  const result = page.locator('#refund-result');
  await expect(result).toBeVisible();
  await expect(result).toContainText('Not eligible for refund');
  await expect(result).toContainText('Group bookings (3 tickets) are non-refundable');
});


