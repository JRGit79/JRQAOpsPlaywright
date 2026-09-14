# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ClientAppPO.spec.js >> Client login for ADIDAS ORIGINAL
- Location: tests\ClientAppPO.spec.js:9:5

# Error details

```
Error: locator.textContent: Error: strict mode violation: locator('.em-spacer-1 .ng-star-inserted') resolved to 2 elements:
    1) <label _ngcontent-xyu-c44="" class="ng-star-inserted"> | 6a9baf6ce7cd69710fc0677a | </label> aka getByText('| 6a9baf6ce7cd69710fc0677a |')
    2) <label _ngcontent-xyu-c44="" class="ng-star-inserted"> | 6a9baf6ce7cd69710fc0677d | </label> aka getByText('| 6a9baf6ce7cd69710fc0677d |')

Call log:
  - waiting for locator('.em-spacer-1 .ng-star-inserted')

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e3]:
    - navigation [ref=e5]:
      - generic [ref=e7]:
        - link "Automation Automation Practice":
          - /url: ""
          - generic [ref=e8] [cursor=pointer]:
            - heading "Automation" [level=3] [ref=e9]
            - paragraph [ref=e10]: Automation Practice
      - text: 
      - link "🎯 I'll help you prepare for your next QA job — Explore the QA Career Accelerator." [ref=e11] [cursor=pointer]:
        - /url: https://rahulshettyacademy.com/qa-career-accelerator-job-ready
      - list [ref=e12]:
        - listitem [ref=e13] [cursor=pointer]:
          - button " HOME" [ref=e14]:
            - generic [ref=e15]: 
            - text: HOME
        - listitem
        - listitem [ref=e16] [cursor=pointer]:
          - button " ORDERS" [ref=e17]:
            - generic [ref=e18]: 
            - text: ORDERS
        - listitem [ref=e19] [cursor=pointer]:
          - button " Cart" [ref=e20]:
            - generic [ref=e21]: 
            - text: Cart
        - listitem [ref=e22] [cursor=pointer]:
          - button "Sign Out" [ref=e23]:
            - generic [ref=e24]: 
            - text: Sign Out
    - table [ref=e26]:
      - rowgroup [ref=e27]:
        - row [ref=e28]:
          - cell [ref=e29]:
            - table [ref=e30]:
              - rowgroup [ref=e31]:
                - row [ref=e32]:
                  - cell [ref=e33]
                - row [ref=e34]:
                  - cell [ref=e35]
                - row [ref=e36]:
                  - cell [ref=e37]
                - row [ref=e38]:
                  - cell [ref=e39]:
                    - table [ref=e40]:
                      - rowgroup [ref=e41]:
                        - row [ref=e42]:
                          - cell [ref=e43]:
                            - table [ref=e44]:
                              - rowgroup [ref=e45]:
                                - row [ref=e46]:
                                  - cell [ref=e47]:
                                    - heading "Thankyou for the order." [level=1] [ref=e48]
                                - row [ref=e49]:
                                  - cell "You can see all the Orders in Orders History Page" [ref=e50]:
                                    - text: You can see all the Orders in
                                    - generic [ref=e51] [cursor=pointer]: Orders History Page
                                - row [ref=e52]:
                                  - cell "| 6a9baf6ce7cd69710fc0677a | | 6a9baf6ce7cd69710fc0677d |" [ref=e53]:
                                    - generic [ref=e54]: "| 6a9baf6ce7cd69710fc0677a |"
                                    - generic [ref=e55]: "| 6a9baf6ce7cd69710fc0677d |"
                - row [ref=e56]:
                  - cell [ref=e57]
                - row [ref=e58]:
                  - cell [ref=e59]:
                    - table [ref=e60]:
                      - rowgroup [ref=e61]:
                        - row [ref=e62]:
                          - cell [ref=e63]
                        - generic [ref=e64]:
                          - row [ref=e65]:
                            - cell [ref=e66]:
                              - img "Queen" [ref=e67]
                            - 'cell "ZARA COAT 3 Qty: 1" [ref=e68]':
                              - generic [ref=e69]: ZARA COAT 3
                              - generic [ref=e70]: "Qty: 1"
                            - cell "$ 11500 Ready to Ship" [ref=e71]:
                              - generic [ref=e72]: $ 11500
                              - strong [ref=e74]: Ready to Ship
                          - row [ref=e75]:
                            - cell [ref=e76]:
                              - img "Queen" [ref=e77]
                            - 'cell "ADIDAS ORIGINAL Qty: 1" [ref=e78]':
                              - generic [ref=e79]: ADIDAS ORIGINAL
                              - generic [ref=e80]: "Qty: 1"
                            - cell "$ 11500 Ready to Ship" [ref=e81]:
                              - generic [ref=e82]: $ 11500
                              - strong [ref=e84]: Ready to Ship
                        - row [ref=e85]:
                          - cell "Items in your order may ship separately. View your order for shipping updates." [ref=e86]: Items in your order may ship separately.View your order for shipping updates.
                        - row [ref=e87]:
                          - button "Click To Download Order Details in CSV" [ref=e88] [cursor=pointer]
                - row [ref=e89]:
                  - cell [ref=e90]
                - row [ref=e91]:
                  - cell [ref=e92]:
                    - table [ref=e93]:
                      - rowgroup [ref=e94]:
                        - row [ref=e95]:
                          - cell [ref=e96]
                        - row [ref=e97]:
                          - cell "Questions? We're on call." [ref=e98]
                        - row [ref=e99]:
                          - cell "Monday to Friday 9am - 9pm" [ref=e100]
                        - row [ref=e101]:
                          - cell "Saturday to Sunday 10am - 6pm" [ref=e102]
                        - row [ref=e103]:
                          - cell "dummywebsite@rahulshettyacademy.com" [ref=e104]
                        - row [ref=e105]:
                          - cell [ref=e106]
                - row [ref=e107]:
                  - cell [ref=e108]
                - row
  - generic "Order Placed Successfully" [ref=e110] [cursor=pointer]
```

# Test source

```ts
  1  | import { expect } from "@playwright/test";
  2  | 
  3  | class OrderConfirmationPage
  4  | {
  5  |     constructor(page)
  6  |     {
  7  |         this.thanksMsg = page.locator(".hero-primary");
  8  |         this.orderId = page.locator(".em-spacer-1 .ng-star-inserted");
  9  |     }
  10 |     async orderConfirmation()
  11 |     {
  12 |           await expect(await this.thanksMsg).toHaveText(" Thankyou for the order. ");
> 13 |           this.orderId = await this.orderId.textContent();
     |                                             ^ Error: locator.textContent: Error: strict mode violation: locator('.em-spacer-1 .ng-star-inserted') resolved to 2 elements:
  14 |           console.log("New Order ID = " + this.orderId);
  15 |           return this.orderId;
  16 |           
  17 |     }
  18 |    
  19 | 
  20 | 
  21 | }
  22 | module.exports = {OrderConfirmationPage};
```