Feature: Brand Page

 Background:
 Given I open the brands page
    @smoke
    Scenario: Add a new Brand to the page
        When I fill in all fields and submit
        Then I see the Brand successfully added