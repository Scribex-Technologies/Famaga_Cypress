Feature: Leads Page

 Background:
 Given I open the Leads page
    @smoke
    Scenario: Add a new Lead to the page
        When I fill in all fields and submit
        Then I see the Leads successfully added
        
    @smoke
    Scenario: Convert the Lead
        When I click the convert status option
        Then I see the status has been changed successfully