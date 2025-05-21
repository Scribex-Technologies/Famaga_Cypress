Feature: Client Page

 Background:
 Given I open the Sign in page and signing in
 
    @smoke
    Scenario: Add a new Client to the page
        When I fill in all fields
        Then I see the Client successfully added