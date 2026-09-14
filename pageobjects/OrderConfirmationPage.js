const { expect } =require("@playwright/test");

class OrderConfirmationPage
{
    constructor(page)
    {
        this.thanksMsg = page.locator(".hero-primary");
        this.orderId = page.locator(".em-spacer-1 .ng-star-inserted");
    }
    async orderConfirmation()
    {
          await expect(await this.thanksMsg).toHaveText(" Thankyou for the order. ");
          this.orderId = await this.orderId.textContent();
          console.log("New Order ID = " + this.orderId);
          return this.orderId;
          
    }  
}
module.exports = {OrderConfirmationPage};