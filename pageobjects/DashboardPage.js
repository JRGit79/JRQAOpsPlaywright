const { expect } = require("@playwright/test");
class DashboardPage {
    constructor(page) {
        this.page = page;
        this.products = page.locator(".card-body");
        this.headerText = page.locator('.left.mt-1');
        this.blinkingText = page.locator('.blinkingText');
        this.cartLink = page.locator("[routerlink*=cart]");
        this.orderLink = page.locator("button[routerlink*=myorder]");
        this.ordersList = page.locator("tbody");

    }

    async searchProductAddCart(productName) {
        console.log(await this.headerText.textContent());
        await expect(this.headerText).toContainText('Automation');
        console.log(await this.blinkingText.textContent());
        await expect(this.blinkingText).toContainText('Explore the QA Career Accelerator');
        const count = await this.products.count();
        console.log(count);
        for (let i = 0; i < count; ++i) {
            if (await this.products.nth(i).locator("b").textContent() === productName) {
                // add to cart
                await this.products.nth(i).locator("text= Add To Cart").click();
                break;
            }
        }

    }

    async navigateToCart() {

        await this.cartLink.click();
    }

    async productAddedToCart(productName) {

        await this.page.locator("div li").first().waitFor();
        const bool = await this.page.locator("h3:has-text('" + productName + "')").isVisible();
        expect(bool).toBeTruthy();
        console.log(bool);
        console.log("product added to the card");

    }

    async orderAtOrderSummaryPage(orderId) {

        await this.orderLink.click();
        await this.ordersList.waitFor();
        const rows = await this.page.locator("tbody tr");
        const rowsCount = await rows.count();
        console.log("Total Rows of oreder = " + rowsCount);

        for (let i = 0; i < rowsCount; ++i) {
            const rowOrderID = await rows.nth(i).locator("th").textContent();
            if (orderId.includes(rowOrderID)) {
                console.log("orderID Matched");
                await rows.nth(i).locator("button").first().click();
                break;
            }
        }
        const orderIdDetails = await this.page.locator(".col-text").textContent();
        expect(orderId.includes(orderIdDetails)).toBeTruthy();
        console.log("order summary verified with order ID " + orderIdDetails);

    }


}

module.exports = { DashboardPage };