Feature: Purchase Request Page

 Background:
 Given I open the purchase request page
    @smoke
    Scenario: Add a new Supplier Offer to the page
        When I fill in all fields and submit
        Then I see the purchase request successfully added
        
    @smoke
    Scenario: Add shipping information and fee and charges
        When I add a shipping information and fee and charges
        Then I see the changes are saved after reload
   
    @smoke
    Scenario: Delete Supplier Offer
        When I delete the supplier offer
        Then I see the purchase request successfully deleted

    