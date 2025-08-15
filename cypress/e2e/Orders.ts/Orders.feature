Feature: Orders Page

 Background:
 Given I open the Orders page
    @smoke
    Scenario: Change the Record status to Paid or Confirmed
        When I open the order details page and change the status
        Then I see the status has changed