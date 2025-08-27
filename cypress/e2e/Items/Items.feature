Feature: Items Page

 Background:
 Given I open the Items page
    @smoke
    Scenario Outline: Add a new Item to the page
        When I fill in all fields and submit
        Then I see the item successfully added
    
    Examples:
    | run |
    | 1   |
