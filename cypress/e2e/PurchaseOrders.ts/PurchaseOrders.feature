Feature: Purchase Orders Page

 Background:
 Given I open the Purchase Orders page
 
    @smoke
    Scenario: Add a new purchase order 
        When I open the add new page select items and create an order
        Then I see the successful creation message and I redirected to the order details page
    
    @smoke
    Scenario: Request a Price
        When I open the add new page select items and request a price
        Then I see the successful message about price request sent