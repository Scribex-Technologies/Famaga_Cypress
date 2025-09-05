Feature: Suppliers Page

 Background:
 Given I open the suppliers page

    @smoke
    Scenario: Add a new Supplier to the page
        When I fill in all fields and submit
        Then I see the Supplier successfully added

    @smoke
    Scenario Outline: Add a new Contact Person to the Supplier
        When I fill in all contact person's fields and submit
        Then I see the contact person successfully added

    Examples:
    | run |
    | 1   |
    | 2   | 

    @smoke
    Scenario: Edit Contact Person of the Supplier
        When I edit the contact person's fields and submit
        Then I see the contact person successfully updated
        
    @smoke
    Scenario: Delete contact contact person of the Supplier
        When I delete the contact person
        Then I see the contact person successfully deleted