import { expect, test, request } from '@playwright/test';
class APIUtils {
    constructor(apiContext, loginPayLoad) {
        this.apiContext = apiContext;
        this.loginPayLoad = loginPayLoad;
    }
    //Login and get Token
    async getToken() {
        const loginResponse = await this.apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login",
            {

                data: this.loginPayLoad,

            });
        expect(loginResponse.ok()).toBeTruthy();
        const loginResponseJson = await loginResponse.json();
        console.log(loginResponseJson);
        const token = loginResponseJson.token;
        console.log(token);
        return token;
    }
    // Create an order
    async craeteOrder(orderPayLoad) {
        let response = {};
        response.token = await this.getToken();
        const orderResponse = await this.apiContext.post("https://rahulshettyacademy.com/api/ecom/order/create-order",
            {
                data: orderPayLoad,
                headers: {
                    'Authorization': response.token,
                    'Content-Type': 'application/json'
                }
            });
        const orderResponseJson = await orderResponse.json();
        console.log(orderResponseJson);
        const orderId = orderResponseJson.orders[0];
        response.orderId = orderId;
        return response;

    }
}
module.exports = { APIUtils };