const {test} = require ('@playwright/test');
const { expect } = require('@playwright/test');


test('Browser Context Playwright test @web', async ({browser}) =>
{
    //Chrome plugin and cookies
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    console.log(await page.title());   
});

test('Page Playwright test @web', async ({page}) =>
{   
    await page.goto('https://google.com');
    console.log(await page.title()); 
    await expect(page).toHaveTitle('Google');
});    

test('Browser Playwright test', async ({browser}) =>
{   
    const context = await browser.newContext();  
    const page = await browser.newPage();

    const username = page.locator('#username');
    const password = page.locator('#password');
    const signInBtn = page.locator('#signInBtn');
    const cardTitles = page.locator('.card-body a');

    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    console.log(await page.title());
    
    //css
    await page.locator('#username').fill('rahulshettyacademy');
    await page.locator('#password').fill('learning');
    await page.locator('#signInBtn').click();
    console.log(await page.locator("[style*='block']").textContent());
    await expect(page.locator("[style*='block']")).toContainText('learning" is no longer valid');

    //type -fill valid credentials
    await username.fill("");
    await username.fill('rahulshettyacademy');
    await password.fill("");
    await password.fill('Learning@830$3mK2');
    await signInBtn.click();
    console.log(await cardTitles.first().textContent());
    console.log(await cardTitles.nth(1).textContent());
    const allTitles = await cardTitles.allTextContents();
    console.log(allTitles);  
}); 

test('Client Learning site @web', async ({browser}) =>
{   
    const context = await browser.newContext();  
    const page = await browser.newPage();

    await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
    await page.locator('#userEmail').fill('mypractice1@gmail.com');
    await page.locator('#userPassword').fill('Student@#000');
    await page.locator('#login').click();
    console.log(await page.locator('.left.mt-1').textContent());
    await expect(page.locator('.left.mt-1')).toContainText('Automation');
    console.log(await page.locator('.blinkingText').textContent());
    await expect(page.locator('.blinkingText')).toContainText('Explore the QA Career Accelerator');
    await page.locator("div[class='py-2 border-bottom ml-3']>input").fill("My first learning session");
    console.log(await page.locator("div[class='py-2 border-bottom ml-3']>input").textContent());
});

test('DD List and radiobutton handling @web', async ({browser}) =>
{
    const context = await browser.newContext();  
    const page = await browser.newPage();

    const username = page.locator('#username');
    const password = page.locator('#password');
    const signInBtn = page.locator('#signInBtn');
    const cardTitles = page.locator('.card-body a');
    const documentLink = page.locator('.blinkingText');

    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
     await username.fill("");
    await username.fill('rahulshettyacademy');
    await password.fill("");
    await password.fill('Learning@830$3mK2');

    const dropdown = page.locator("select.form-control");
    await dropdown.selectOption('consult');
    await page.locator('.radiotextsty').last().click();
    await page.locator("#okayBtn").click();
        
    //assertion for dropdown
    console.log(await page.locator('.radiotextsty').last().isChecked());
    expect (await page.locator('.radiotextsty').last()).toBeChecked();
    await page.locator('#terms').click();
    expect (await page.locator('#terms')).toBeChecked();
    await page.locator('#terms').uncheck();
    expect (await page.locator('#terms').isChecked()).toBeFalsy();
    

    //await page.pause();
    await signInBtn.click();
});
test('Child window hndling @web', async ({browser}) =>
{
    const context = await browser.newContext();
    const page = await context.newPage();
    const username = page.locator('#username');
    //const newPage= await context.newPage();
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    const documentLink = page.locator("[href*='documents-request']");
    
    const [newPage] = await Promise.all([

    context.waitForEvent('page'),
    await documentLink.click(),
    ])
    const text = await newPage.locator(".red").textContent();
    console.log(text);

    const emailAddress= text.split("at ")[1].split(" ")[0].trim();
    console.log(emailAddress);
    expect (emailAddress).toBe("mentor@rahulshettyacademy.com");
    await page.locator('#username').fill(emailAddress);
    //await page.pause();
    console.log(await page.locator('#username').textContent());
    

});