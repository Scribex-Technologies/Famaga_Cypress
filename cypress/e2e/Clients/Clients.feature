Feature: Client Page

 Background:
 Given I open the clients page

    @smoke
    Scenario: Add a new Client to the page
        When I fill in all fields and submit
        Then I see the Client successfully added

    @smoke
    Scenario Outline: Add a new Contact Person to the Client
        When I fill in all contact person's fields and submit
        Then I see the contact person successfully added
    
    Examples:
    | run |
    | 1   |
    | 2   | 

    @smoke
    Scenario: Edit contact info of the Client
        When I fill in all contact info fields and submit
        Then I see the contact info successfully updated

    @smoke
    Scenario: Edit Contact Person of the Client
        When I edit the contact person's fields and submit
        Then I see the contact person successfully updated

    @smoke
    Scenario: Delete contact contact person of the Client
        When I delete the contact person
        Then I see the contact person successfully deleted