Feature: Purchase Orders Page

 Background:
 Given I open the Purchase Orders page
    @smoke
    Scenario Outline: Scenario Outline name: Add a new purchase order 
        When I open the add new page select items and create an order
        Then I see the successful creation message and I redirected to the order details page

    Examples:
     | run |
     | 1   |
     | 2   |  

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
    Scenario: Add supplier offer from the Add purchase order page
     When I add a Supplier offer from the add purchase order page
     Then I see the supplier offer added successfully

    @smoke
    Scenario: Add quantity and prices on the table and publish the offer
        When I update items quantity and prices on the table
        When I publish the offer
        Then I see the offer is published and the user has been redirected to the previous page

    @smoke
    Scenario: Add new items with quantity and prices to the table
        When I add new items with quantity and prices to the table
        Then I see the items are saved after reload

    @smoke
    Scenario: Add shipping information and fee and charges
        When I add a shipping information and fee and charges
        Then I see the changes are saved after reload 
   
    @smoke
    Scenario: Create a supplier offer from the Purchase order general tab fill in data and publish
        When I add a Supplier offer from the purchase order general tab
        When I fill in item quantity and price and publish
        Then I see the supplier offer saved and published successfully
    
    @smoke
    Scenario: Check the supplier offer can't be created if the order has status confirmed and following of them 
        When I open the order details page and change the statuses
        Then I see if the status is confirmed and next of it the create supplier offer button is disabled