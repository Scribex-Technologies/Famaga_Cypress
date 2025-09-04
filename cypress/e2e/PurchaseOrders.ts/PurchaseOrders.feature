Feature: Purchase Orders Page

 Background:
 Given I open the Purchase Orders page

    @smoke
    Scenario: Add a new purchase order 
        When I open the add new page select items and create an order
        Then I see the successful creation message and I redirected to the order details page

    @smoke
    Scenario: Request a Price
        When I open the add new page select items and click request a price
        Then I fill in required fields send the price request and see the successful message about price request sent
    
    @smoke
    Scenario: Generate Pdf
        When I open order details page and click on the generate pdf button
        Then I see the successful message pdf generated

    @smoke
    Scenario: Send the order
        When I open order details page and click on the send order button
        Then I fill in data and send an order and I see the order sent and the successful message displayed

    @smoke
    Scenario: Change the Purchase order status to Confirmed
        When I open order details page and click the change status to Confirmed
        Then I pick the shipping date save and see the successful message about status change

@smoke
 Scenario Outline: Add supplier offer multiple times
  When I fill in all fields and submit
  Then I see the purchase request successfully added

Examples:
  | run |
  | 1   | 
@smoke
    Scenario: Add update quantity and prices on the table
        When I update items quantity and prices on the table
        Then I see the items are saved after reload
@smoke
    Scenario: Add shipping information and fee and charges
        When I add a shipping information and fee and charges
        Then I see the changes are saved after reload 