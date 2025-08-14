Feature: Deals Page

 Background:
 Given I open the Deals page
 @skip
    @smoke
    Scenario: Add a new Commercial Offer to the deal
        When I open Commercial offer tab and add a new offer
        Then I see the commercial offer is successfully added

     Scenario: Generate a Commercial Offer
        When I click actions button and generate the Offer
        Then I see the commercial offer Pdf is successfully generated

    Scenario: Send a Commercial Offer
        When I click actions button and choose the Send Offer option
        When I add a contact person and send a commercial offer
        Then I see the commercial offer was sent successfully


    Scenario: Request a price confirmation for a Commercial Offer
        When I click actions button and choose the Request Price option
        Then I see the price requested successfully

   
Scenario: Confirm a Purchase price 
        When I open the purchase request tab
        Then I confirm the Purchase Price
       
        Scenario: Send a Commercial Offer Pre-Invoice
        When I click actions button and choose the Send Pre Invoice option
        When I add a contact person and send a Pre Invoice
        Then I see the Pre Invoice was sent successfully
