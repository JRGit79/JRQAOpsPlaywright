# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: EventHubPractice.spec.js >> Client Learning site
- Location: tests\EventHubPractice.spec.js:18:5

# Error details

```
Test timeout of 31000ms exceeded.
```

```
Error: locator.waitFor: Test timeout of 31000ms exceeded.
Call log:
  - waiting for getByTestId('event-card').filter({ hasText: 'Test Event 1788586129753' }) to be visible

```

# Page snapshot

```yaml
- generic [active] [ref=f1e1]:
  - navigation [ref=f1e2]:
    - generic [ref=f1e4]:
      - link "EventHub" [ref=f1e5] [cursor=pointer]:
        - /url: /
      - generic [ref=f1e10]:
        - link "Home" [ref=f1e11] [cursor=pointer]:
          - /url: /
        - link "Events" [ref=f1e12] [cursor=pointer]:
          - /url: /events
        - link "My Bookings" [ref=f1e13] [cursor=pointer]:
          - /url: /bookings
        - link "API Docs" [ref=f1e14] [cursor=pointer]:
          - /url: https://api.eventhub.rahulshettyacademy.com/api/docs
        - button "Admin" [ref=f1e16] [cursor=pointer]
        - generic [ref=f1e19]:
          - generic "mypractice@gmail.com" [ref=f1e20]
          - button "Logout" [ref=f1e21] [cursor=pointer]
  - main [ref=f1e22]:
    - generic [ref=f1e23]:
      - navigation [ref=f1e24]:
        - link "Events" [ref=f1e25] [cursor=pointer]:
          - /url: /events
        - generic [ref=f1e26]: /
        - generic [ref=f1e27]: Test Event 1788586129753
      - generic [ref=f1e28]:
        - generic [ref=f1e29]:
          - img "Test Event 1788586129753" [ref=f1e31]
          - generic [ref=f1e32]:
            - generic [ref=f1e33]: Festival
            - heading "Test Event 1788586129753" [level=1] [ref=f1e35]
            - generic [ref=f1e36]:
              - generic [ref=f1e37]:
                - generic [ref=f1e38]: 📅
                - generic [ref=f1e39]:
                  - paragraph [ref=f1e40]: Date
                  - paragraph [ref=f1e41]: Friday, 27 August
              - generic [ref=f1e42]:
                - generic [ref=f1e43]: 🕐
                - generic [ref=f1e44]:
                  - paragraph [ref=f1e45]: Time
                  - paragraph [ref=f1e46]: 07:29 pm
              - generic [ref=f1e47]:
                - generic [ref=f1e48]: 📍
                - generic [ref=f1e49]:
                  - paragraph [ref=f1e50]: Venue
                  - paragraph [ref=f1e51]: Sec-15, RahulshettyAcedemy, Noida UP
              - generic [ref=f1e52]:
                - generic [ref=f1e53]: 🌆
                - generic [ref=f1e54]:
                  - paragraph [ref=f1e55]: City
                  - paragraph [ref=f1e56]: Noida
              - generic [ref=f1e57]:
                - generic [ref=f1e58]: 🎫
                - generic [ref=f1e59]:
                  - paragraph [ref=f1e60]: Available
                  - paragraph [ref=f1e61]: 300 / 300 seats
              - generic [ref=f1e62]:
                - generic [ref=f1e63]: 💰
                - generic [ref=f1e64]:
                  - paragraph [ref=f1e65]: Price per ticket
                  - paragraph [ref=f1e66]: $150
            - generic [ref=f1e67]:
              - heading "About this event" [level=2] [ref=f1e68]
              - paragraph [ref=f1e69]: This is practice session on Event hasSubscribers.
        - generic [ref=f1e71]:
          - generic [ref=f1e72]:
            - heading "Book Tickets" [level=2] [ref=f1e73]
            - generic [ref=f1e74]: $150
          - paragraph [ref=f1e75]: per ticket
          - generic [ref=f1e76]:
            - generic [ref=f1e77]:
              - generic [ref=f1e78]: Tickets
              - generic [ref=f1e79]:
                - button "−" [disabled] [ref=f1e80]
                - generic [ref=f1e81]: "1"
                - button "+" [ref=f1e82] [cursor=pointer]
                - generic [ref=f1e83]: (max 10)
            - generic [ref=f1e84]:
              - generic [ref=f1e85]: Full Name*
              - textbox "Full Name*" [ref=f1e86]:
                - /placeholder: Your full name
            - generic [ref=f1e87]:
              - generic [ref=f1e88]: Email*
              - textbox "Email*" [ref=f1e89]:
                - /placeholder: you@email.com
            - generic [ref=f1e90]:
              - generic [ref=f1e91]: Phone Number*
              - textbox "Phone Number*" [ref=f1e92]:
                - /placeholder: +91 98765 43210
            - generic [ref=f1e93]:
              - generic [ref=f1e94]:
                - generic [ref=f1e95]: $150 × 1 ticket
                - generic [ref=f1e96]: $150
              - generic [ref=f1e97]:
                - generic [ref=f1e98]: Total
                - generic [ref=f1e99]: $150
            - button "Confirm Booking" [ref=f1e100] [cursor=pointer]
  - contentinfo [ref=f1e101]:
    - generic [ref=f1e102]:
      - generic [ref=f1e103]:
        - generic [ref=f1e104]:
          - heading "Rahul Shetty Academy" [level=3] [ref=f1e105]
          - paragraph [ref=f1e106]: India's leading QA automation training academy — empowering engineers to build real-world testing skills.
        - generic [ref=f1e107]:
          - heading "Popular Courses" [level=3] [ref=f1e108]
          - list [ref=f1e109]:
            - listitem [ref=f1e110]:
              - link "Selenium WebDriver with Java" [ref=f1e111] [cursor=pointer]:
                - /url: https://rahulshettyacademy.com
            - listitem [ref=f1e112]:
              - link "Playwright with JavaScript" [ref=f1e113] [cursor=pointer]:
                - /url: https://rahulshettyacademy.com
            - listitem [ref=f1e114]:
              - link "RestAssured API Testing" [ref=f1e115] [cursor=pointer]:
                - /url: https://rahulshettyacademy.com
            - listitem [ref=f1e116]:
              - link "Cypress End-to-End Testing" [ref=f1e117] [cursor=pointer]:
                - /url: https://rahulshettyacademy.com
            - listitem [ref=f1e118]:
              - link "Appium Mobile Testing" [ref=f1e119] [cursor=pointer]:
                - /url: https://rahulshettyacademy.com
        - generic [ref=f1e120]:
          - heading "QA Job Hiring Platform" [level=3] [ref=f1e121]
          - paragraph [ref=f1e122]: Get hired faster — take skill assessments trusted by top QA employers worldwide.
          - link "techsmarthire.com →" [ref=f1e123] [cursor=pointer]:
            - /url: https://techsmarthire.com
        - generic [ref=f1e124]:
          - heading "EventHub Practice App" [level=3] [ref=f1e125]
          - list [ref=f1e126]:
            - listitem [ref=f1e127]:
              - link "Browse Events" [ref=f1e128] [cursor=pointer]:
                - /url: /events
            - listitem [ref=f1e129]:
              - link "My Bookings" [ref=f1e130] [cursor=pointer]:
                - /url: /bookings
            - listitem [ref=f1e131]:
              - link "Manage Events" [ref=f1e132] [cursor=pointer]:
                - /url: /admin/events
            - listitem [ref=f1e133]:
              - link "API Documentation" [ref=f1e134] [cursor=pointer]:
                - /url: https://api.eventhub.rahulshettyacademy.com/api/docs
      - generic [ref=f1e135]:
        - paragraph [ref=f1e136]: © 2026 Rahul Shetty Academy. All rights reserved.
        - generic [ref=f1e137]:
          - link "rahulshettyacademy.com →" [ref=f1e138] [cursor=pointer]:
            - /url: https://rahulshettyacademy.com
          - link "techsmarthire.com →" [ref=f1e139] [cursor=pointer]:
            - /url: https://techsmarthire.com
  - alert [ref=f1e140]
```

# Test source

```ts
  1   | import {expect, test} from '@playwright/test';
  2   | 
  3   |     const BASE_URL= 'https://eventhub.rahulshettyacademy.com';
  4   |     const GMAIL_USER = {email :'mypractice@gmail.com', password:'Student@#000'}
  5   |     
  6   |     async function loginAndGoToBooking(page)
  7   |     {
  8   |     await page.goto(`${BASE_URL}/login`);
  9   |     await page.getByLabel('Email').fill(GMAIL_USER.email);
  10  |     await page.getByPlaceholder('••••••').fill(GMAIL_USER.password);
  11  |     await page.locator('#login-btn').click({ timeout: 5000 });
  12  |     await page.locator('#nav-events').wait
  13  |     await page.locator('#nav-events').waitFor();
  14  |     expect(await page.locator('#nav-events')).toBeVisible();
  15  |     expect(await page.getByTestId('nav-bookings')).toBeVisible();
  16  |     }
  17  | 
  18  | test('Client Learning site', async ({page}) =>
  19  | {   
  20  |     const email = "mypractice@gmail.com";
  21  |     const password = 'Student@#000';
  22  |     await page.goto('https://eventhub.rahulshettyacademy.com');
  23  |     await page.getByLabel('Email').fill(email);
  24  |     await page.getByLabel('Password').fill(password);
  25  |     await page.locator('#login-btn').click();
  26  |     await page.locator('#nav-events').waitFor();
  27  |     expect(await page.locator('#nav-events')).toBeVisible();
  28  | 
  29  |     //await page.getByRole("button",{name:'Admin'}).click(); 
  30  |     //await page.getByRole('link',{name:'Manage Events'}).first().click();  (This also Correct)
  31  |     await page.locator('a[href="/admin/events"]').first().click();
  32  |     const eventTitle = `Test Event ${Date.now()}`;
  33  |     await page.getByLabel('Title').fill(eventTitle);
  34  |     await page.getByPlaceholder('Describe the event…').fill("This is practice session on Event hasSubscribers.");
  35  |     await page.getByLabel('Category').selectOption('Festival');
  36  |     await page.getByLabel('City').fill('Noida');
  37  |     await page.getByLabel('Venue').fill(" Sec-15, RahulshettyAcedemy, Noida UP");
  38  |     await page.getByRole('textbox', { name: 'Event Date & Time*' }).fill('2027-08-27T19:29');
  39  |     
  40  |     await page.getByLabel('Price ($)').fill('150');
  41  |     await page.getByLabel('Total Seats').fill('300');
  42  |     await page.getByRole('textbox', { name: 'Image URL (optional)' }).click();
  43  |     await page.getByLabel('Image URL (optional)').fill('https://rahulshettyacademy.com');
  44  |     await page.getByTestId('add-event-btn').click();
  45  |     await expect(page.getByText('Event created!')).toBeVisible();
  46  |     console.log("Created Event : "+eventTitle);
  47  | 
  48  |     await page.locator('#nav-events').click({ timeout: 5000 });
  49  |     const eventCards = page.getByTestId('event-card');
  50  |     await expect(eventCards.first()).toBeVisible();
  51  |     const targetCard = eventCards.filter({ hasText: eventTitle }).first();
  52  |     await expect(targetCard).toBeVisible({ timeout: 5000 })
  53  |     const seatsBeforeBooking = parseInt(await targetCard.getByText('seat').first().innerText());
  54  |     console.log("Total Seats :" +seatsBeforeBooking);
  55  |     console.log(`Seats before booking: ${seatsBeforeBooking}`);
  56  |    
  57  | 
  58  |     await targetCard.getByTestId('book-now-btn').click();
> 59  |     await page.getByTestId('event-card').filter({hasText:eventTitle}).waitFor();
      |                                                                       ^ Error: locator.waitFor: Test timeout of 31000ms exceeded.
  60  |     expect(await page.locator('.text-2xl',{hasText:eventTitle})).toBeTruthy();
  61  |     await page.getByLabel('Full Name').fill("Jitendra Rawat");
  62  |     await page.getByLabel('Email').fill(email);
  63  |     await page.getByPlaceholder('+91 98765 43210').fill('9123456789');
  64  |     await page.locator('.confirm-booking-btn').click(); 
  65  | 
  66  |     await expect(page.getByRole('heading', { name: 'Booking Confirmed! 🎉' })).toBeVisible();
  67  |     await expect(page.getByText('Your tickets are reserved.')).toBeVisible();
  68  | 
  69  |     await page.getByTestId('nav-bookings').click();
  70  |     const BookingRefNo = await page.locator('main div.space-y-4').filter({ hasText: eventTitle })
  71  |     .getByTestId('booking-id').first().textContent();
  72  |     console.log("Booking Ref " +BookingRefNo);
  73  | 
  74  |     await page.locator('#nav-events').click({timeout:5000});
  75  |     await page.getByTestId('event-card').first().waitFor();
  76  |     await expect(eventCards.first()).toBeVisible()
  77  |     //expect(await page.getByTestId('event-card').filter({hasText:eventTitle})).first().toBeVisible();
  78  |     const updatedCard= eventCards.filter({ hasText: eventTitle });
  79  |     await expect(updatedCard).toBeVisible();
  80  | 
  81  |     const seatsAfterBooking = parseInt(await updatedCard.getByText('seat').innerText());
  82  |     console.log(`Seats after booking: ${seatsAfterBooking}`);
  83  |     //expect(seatsAfterBooking).toBe(seatsBeforeBooking - 1);   
  84  | });
  85  | 
  86  | test('refund eligible for single ticket booking', async ({page})=>{
  87  | 
  88  |     await loginAndGoToBooking(page);
  89  |     //Booking 1 Ticket
  90  |     await page.goto(`${BASE_URL}/events`);
  91  |     await page.getByTestId('event-card').last().getByTestId('book-now-btn').click({ force: false, timeout: 5000 });
  92  |     
  93  |     await page.getByLabel('Full Name').fill('Test User');
  94  |     await page.locator('#customer-email').fill(GMAIL_USER.email);
  95  |     await page.getByPlaceholder('+91 98765 43210').fill('9999999999');
  96  |     await page.locator('.confirm-booking-btn').click();
  97  | 
  98  |    // Navigate to booking detail
  99  |   await page.getByRole('link', { name: 'View My Bookings' }).click();
  100 |   await expect(page).toHaveURL(`${BASE_URL}/bookings`);
  101 |   await page.getByRole('link', { name: 'View Details' }).first().click();
  102 |   await expect(page.getByText('Booking Information')).toBeVisible();
  103 | 
  104 |   // Validate booking ref first letter matches event name first letter
  105 |   const bookingRef = await page.locator('span.font-mono.font-bold').innerText();
  106 |   const eventTitle = await page.locator('h1').innerText();
  107 |   expect(bookingRef.charAt(0)).toBe(eventTitle.charAt(0));
  108 |  
  109 |   await page.locator('#check-refund-btn').click();
  110 | 
  111 |   // Spinner must appear immediately
  112 |   await expect(page.locator('#refund-spinner')).toBeVisible();
  113 | 
  114 |   // Wait for spinner to disappear after 4s
  115 |   await expect(page.locator('#refund-spinner')).not.toBeVisible({ timeout: 6000 });
  116 | 
  117 |   // Validate eligible message
  118 |   const result = page.locator('#refund-result');
  119 |   await expect(result).toBeVisible();
  120 |   await expect(result).toContainText('Eligible for refund');
  121 |   await expect(result).toContainText('Single-ticket bookings qualify for a full refund');
  122 | });
  123 | 
  124 | test('refund not eligible for group ticket booking', async ({page})=>{
  125 | 
  126 |     await loginAndGoToBooking(page);
  127 |     //Booking 3 ticket
  128 |     await page.goto(`${BASE_URL}/events`);
  129 |     await page.getByTestId('event-card').last().getByTestId('book-now-btn').click({ force: false, timeout: 5000 });
  130 |     
  131 |     // Increase quantity to 3
  132 |     await page.locator('button:has-text("+")').click();
  133 |     await page.locator('button:has-text("+")').click();
  134 | 
  135 |     await page.getByLabel('Full Name').fill('Test User');
  136 |     await page.locator('#customer-email').fill(GMAIL_USER.email);
  137 |     await page.getByPlaceholder('+91 98765 43210').fill('9999999999');
  138 |     await page.locator('.confirm-booking-btn').click();
  139 | 
  140 |    // Navigate to booking detail
  141 |   await page.getByRole('link', { name: 'View My Bookings' }).click();
  142 |   await expect(page).toHaveURL(`${BASE_URL}/bookings`);
  143 |   await page.getByRole('link', { name: 'View Details' }).first().click();
  144 |   await expect(page.getByText('Booking Information')).toBeVisible();
  145 | 
  146 |   // Validate booking ref first letter matches event name first letter
  147 |   const bookingRef = await page.locator('span.font-mono.font-bold').innerText();
  148 |   const eventTitle = await page.locator('h1').innerText();
  149 |   expect(bookingRef.charAt(0)).toBe(eventTitle.charAt(0));
  150 |  
  151 |   await page.locator('#check-refund-btn').click();
  152 | 
  153 |   // Spinner must appear immediately
  154 |   await expect(page.locator('#refund-spinner')).toBeVisible();
  155 | 
  156 |   // Wait for spinner to disappear after 4s
  157 |   await expect(page.locator('#refund-spinner')).not.toBeVisible({ timeout: 6000 });
  158 | 
  159 |   // Validate eligible message
```