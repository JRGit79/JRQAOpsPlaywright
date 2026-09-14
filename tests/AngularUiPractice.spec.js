const {test, expect} = require ('@playwright/test');

test('playwright special locator angular app', async ({page}) =>
{

    await page.goto("https://rahulshettyacademy.com/angularpractice/");
    
    await page.locator("input[name='name']").first().fill("Jitendra");
    await page.locator('input[name="email"]').fill("Jitendramail4u@gmail.com");
    await page.getByPlaceholder("Password").fill("Password123")
    await page.getByLabel("Check me out if you Love IceCreams!").check();
    await page.getByLabel("Gender").selectOption("Female");
    await page.getByLabel("Employed").check();
    await page.locator("input[name=bday]").fill("1999-10-09");
    await page.getByRole("button", {name:'Submit'}).click();
    await page.getByText(" The Form has been submitted successfully!.").isVisible();
    await page.getByRole("link",{name:"Shop"}).click();
    await page.locator("app-card").filter({hasText:"Samsung Note 8"}).getByRole("button").click();
    //this is to remove later
        
    

})