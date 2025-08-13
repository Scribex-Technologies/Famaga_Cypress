Feature: Deals Page

 Background:
 Given I open the Deals page
    @smoke
    Scenario: Add a new Commercial Offer to the deal
        When I open Commercial offer tab and add a new offer
        Then I see the commercial offer is successfully added
        
  