const {expect} = require('@playwright/test');
class CheckOutPage {
    constructor(page) {

        this.email = page.locator(".user__name [type='text']");
        this.checkoutBtn = page.locator("text=Checkout");
        this.countryDD = page.locator("[placeholder*='Country']");
        this.dropdownResult = page.locator(".ta-results");
        this.cvvNum = page.locator(".small Input").first();
        this.name = page.locator('div.field', { hasText: 'Name on Card ' });
        this.placeorderBtn = page.locator(".btnn");

    }
    async checkOut(username) {
        await this.checkoutBtn.click();
        await this.countryDD.pressSequentially("Ind", { delay: 150 });
        const dropdown = await this.dropdownResult;
        await dropdown.waitFor();
        const optionsCount = await dropdown.locator("button").count();
        for (let i = 0; i < optionsCount; ++i) {
            const text = await dropdown.locator("button").nth(i).textContent();
            if (text === " India") {
                await dropdown.locator("button").nth(i).click();
                break;
            }
        }
        
       // await expect((this.email).first()).toHaveText(username);
        await(this.cvvNum).first().fill('532');
        await(this.name).locator('input').fill('Jitendra Test');
        await this.placeorderBtn.click();



    }

}
module.exports = { CheckOutPage };