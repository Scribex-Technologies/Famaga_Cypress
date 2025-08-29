Feature: Purchase Request Page

 Background:
 Given I open the purchase request page

@smoke
 Scenario Outline: Add supplier offer multiple times
  When I fill in all fields and submit
  Then I see the purchase request successfully added

Examples:
  | run |
  | 1   | 
  | 2   |       
       
@smoke
    Scenario: Add items with quantity and prices to the table
        When I add items quantity and prices to the table
        Then I see the items are saved after reload
@smoke
    Scenario: Add shipping information and fee and charges
        When I add a shipping information and fee and charges
        Then I see the changes are saved after reload 
 @smoke
    Scenario: Delete Supplier Offer
        When I delete the supplier offer
        Then I see the Supplier Offer is successfully deleted
@smoke
    Scenario: Publish the Supplier Offer
        When I publish the Supplier offer
        Then I see the offer published and the success message
@smoke
    Scenario: Change the Purchase request status
        When I change the Supplier offer status
        Then I see the status changed and the success message
@skip        
@smoke
    Scenario: Alternative creation
        When I create items alternative
        Then I see the alternative is created
@skip
@smoke
    Scenario: Substitute Creation
        When I create substitute
        Then I see substitute is created