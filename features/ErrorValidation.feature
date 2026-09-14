Feature: Ecommerce Errors Validation
  @Validation
  @foo
  Scenario Outline: Scenario Outline name: Login for Placing the order
    Given login to the LoginPagePractice with username "<username>" and password "<password>"
    Then Verify Error message is displayed
  Examples:
      | username            | password  |
      | rahulshettyacademy  | Node1234  |  
      | Example2@gmail.com  | Node00231 | 
       
    