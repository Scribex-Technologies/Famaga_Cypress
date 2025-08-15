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
    Scenario: Add shipping information and fee and charges
        When I add a shipping information and fee and charges
        Then I see the changes are saved after reload        
@smoke
    Scenario: Add items to the table
        When I add items to the table
        Then I see the items are saved after reload
@smoke
    Scenario: Fill in tables fields
        When I fill in items fields on the table
        Then I see all fields are saved after reload
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
               
 @smoke
    Scenario: Delete Supplier Offer
        When I delete the supplier offer
        Then I see the purchase request successfully deleted
