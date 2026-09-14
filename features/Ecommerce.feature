Feature: All Ecommerce Validation
  @Regression
  Scenario: Placing the order
    Given login to the ecommerce site with username "mypractice3@gmail.com" and password "Student@#000"
    When add an item "ADIDAS ORIGINAL" to the cart
    Then verify  item "ADIDAS ORIGINAL" is added to the cart
    When place order and get order ID
    Then Verify oreder is presented in order history with order ID

Scenario Outline: Scenario Outline name: Login for Placing the order
    Given login to the LoginPagePractice with username "<username>" and password "<password>"
    Then Verify Error message is displayed
  Examples:
      | username            | password  |
      | rahulshettyacademy  | Node1234  |  
      | Example2@gmail.com  | Node00231 | 
