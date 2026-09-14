import {expect, test} from '@playwright/test';

test('Client Learning site @reg', async ({page}) =>
{   
    const email = "mypractice2@gmail.com";
    const product = page.locator(".card-body");
    const productName1 = 'ADIDAS ORIGINAL';
    const productName2 = 'ZARA COAT 3'; 
    await page.goto('https://rahulshettyacademy.com/client');
    await page.getByPlaceholder("email@example.com").fill(email);
    await page.getByPlaceholder("enter your passsword").fill('Student@#000');
    await page.getByRole("button", {name:"login"}).click(); 
    await page.waitForLoadState('networkidle');
    await page.locator(".card-body b").first().waitFor();
    page.locator(".card-body").filter({hasText:"ZARA COAT 3"}).
    getByRole("button", {name: " Add To Cart"}).click();


    const titles = await page.locator(".card-body b").allTextContents();
    console.log(titles);
    console.log(await page.locator('.left.mt-1').textContent());
    await expect(page.locator('.left.mt-1')).toContainText('Automation');
    console.log(await page.locator('.blinkingText').textContent());
    await expect(page.locator('.blinkingText')).toContainText('Explore the QA Career Accelerator');  
    await page.getByRole("listitem").getByRole("button",{name:"Cart"}).click();   
    await page.locator("div li").first().waitFor();
    await expect(page.getByText("ZARA COAT 3")).toBeVisible(); 
    await page.getByRole("button",{name:"Checkout"}).click();
    await page.getByPlaceholder("Select Country").pressSequentially("ind");
    await page.getByRole("button",{name:"India"}).nth(1).click();
    
    expect(page.locator(".user__name [type='text']").first()).toHaveText(email);
    await page.locator(".small Input").first().fill('532');
    await page.locator('div.field',{hasText: 'Name on Card '}).locator('input').fill('Jitendra Rawat');
    await page.getByText("Place Order ").click();

    await expect(page.getByText(" Thankyou for the order. ")).toBeVisible();
    const orderId= await page.locator(".em-spacer-1 .ng-star-inserted").textContent();
    console.log("Generated Order ID = "+orderId);
    const rowOrderId=orderId.split("| ")[1].split(" |")[0].trim();
    console.log("rowOrderID = "+rowOrderId);

    await page.locator("button[routerlink*=myorder]").click();
    await page.locator("tbody").waitFor();
    const rows = await page.locator("tbody tr");

    const rowsCount = await rows.count();
    console.log("Total Rows of oreder = "+rowsCount); 

    await page.locator('tbody tr').filter({hasText:rowOrderId}).getByRole('button', { name: 'View' }).click();
    
     const orderIdDetails = await page.locator(".col-text").textContent();
     console.log("OrderID from Order Summary " +orderIdDetails);
     expect(orderId.includes(orderIdDetails)).toBeTruthy(); 

});
