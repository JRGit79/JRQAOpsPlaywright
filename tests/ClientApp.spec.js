import {expect, test} from '@playwright/test';

test('Client Learning site @reg', async ({page}) =>
{   
    const email = "jitendramail4u@gmail.com";
    const product = page.locator(".card-body");
    const productName1 = 'ADIDAS ORIGINAL';
    const productName2 = 'ZARA COAT 3'; 
    await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
    await page.locator('#userEmail').fill(email);
    await page.locator('#userPassword').fill('Student@#000');
    await page.locator('#login').click();
    await page.waitForLoadState('networkidle');
    await page.locator(".card-body b").first().waitFor();
    const titles = await page.locator(".card-body b").allTextContents();
    console.log(titles);
    console.log(await page.locator('.left.mt-1').textContent());
    await expect(page.locator('.left.mt-1')).toContainText('Automation');
    console.log(await page.locator('.blinkingText').textContent());
    await expect(page.locator('.blinkingText')).toContainText('Explore the QA Career Accelerator'); 
    
      //await page.locator(input[xpath='1']).fill("My first learning session");
    //console.log(await page.locator(input[xpath='1']).textContent());

    //Zara Coat 4 Order
    const count = await product.count();
    console.log(count);
    for (let i=0; i<count; ++i)
    {
       if(await  product.nth(i).locator("b").textContent()=== productName1)
       {
         // add to cart
         await product.nth(i).locator("text= Add To Cart").click();
         break;
       }
    }
    await page.locator("[routerlink*=cart]").click();
    await page.locator("div li").first().waitFor();
    const bool= await page.locator ("h3:has-text('ADIDAS ORIGINAL')").isVisible();
    expect(bool).toBeTruthy();
    console.log(bool);
    await page.locator("text=Checkout").click();
    await page.locator("[placeholder*='Country']").pressSequentially("Ind", {delay:150});
    const dropdown = await page.locator(".ta-results");
    await dropdown.waitFor();
    const optionsCount = await dropdown.locator("button").count();
    for (let i=0; i<optionsCount; ++i)
    {
      const text = await dropdown.locator("button").nth(i).textContent();
      if (text === " India")
      {
        await dropdown.locator("button").nth(i).click();
        break;
      }
    }
    expect(page.locator(".user__name [type='text']").first()).toHaveText(email);
    await page.locator(".small Input").first().fill('532');
    //const CVV = await page.locator(".small Input").first().textContent();
    //console.log("Entered CVV No: "+CVV);
    await page.locator('div.field',{hasText: 'Name on Card '}).locator('input').fill('Jitendra Rawat');
    await page.locator(".btnn").click();
    await expect(await page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ");
    const orderId= await page.locator(".em-spacer-1 .ng-star-inserted").textContent();
    console.log("New Order ID = "+orderId);

    await page.locator("button[routerlink*=myorder]").click();
    await page.locator("tbody").waitFor();
    const rows = await page.locator("tbody tr");
    const rowsCount = await rows.count();
    console.log("Total Rows of oreder = "+rowsCount); 

    /* const row = page.locator('tbody tr', { hasText: orderId });
    await row.locator('button:has-text("View")').click(); */

    for(let i=0; i<rowsCount; ++i)
    {
      
      const rowOrderID = await rows.nth(i).locator("th").textContent();
      if(orderId.includes(rowOrderID))
      {
        console.log("orderID Matched");
        await rows.nth(i).locator("button").first().click();
        break;
      }
    }
      const orderIdDetails = await page.locator(".col-text").textContent();
      console.log("OrderID from Order Summary " +orderIdDetails);
      expect(orderId.includes(orderIdDetails)).toBeTruthy(); 

});
